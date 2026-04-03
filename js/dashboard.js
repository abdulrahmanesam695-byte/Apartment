document.addEventListener("DOMContentLoaded", () => {
  const store = window.CasaVistaStore;
  const site = window.CasaVistaSite;

  const session = site.hydratePage({ active: "dashboard", requireAuth: true, next: "dashboard.html" });
  if (!session) {
    return;
  }

  const elements = {
    banner: document.getElementById("dashboardBanner"),
    metrics: document.getElementById("metricsGrid"),
    statusChart: document.getElementById("statusChart"),
    cityChart: document.getElementById("cityChart"),
    typeChart: document.getElementById("typeChart"),
    revenueChart: document.getElementById("revenueChart"),
    activityList: document.getElementById("activityList"),
    inquiryList: document.getElementById("inquiryList"),
    propertySelect: document.getElementById("propertySelect"),
    adminStatus: document.getElementById("adminStatus"),
    statusForm: document.getElementById("statusForm"),
    statusHint: document.getElementById("statusHint"),
    userListings: document.getElementById("userListings")
  };

  if (!elements.metrics || !elements.statusForm) {
    return;
  }

  elements.statusForm.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
      const property = store.updatePropertyStatus(
        elements.propertySelect.value,
        elements.adminStatus.value,
        session.name
      );
      elements.statusHint.textContent = `${property.title} is now marked as ${store.getStatusLabel(property.status)}.`;
      showBanner("Dashboard data refreshed successfully.");
      render();
    } catch (error) {
      showBanner(error.message, true);
    }
  });

  elements.propertySelect.addEventListener("change", () => {
    const property = store.getPropertyById(elements.propertySelect.value);
    if (property) {
      elements.adminStatus.value = property.status;
    }
  });

  elements.userListings.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest("[data-favorite-id]");
    if (!favoriteButton) {
      return;
    }

    store.toggleFavorite(favoriteButton.dataset.favoriteId);
    renderUserListings();
  });

  render();

  function render() {
    const metrics = store.getMetrics();
    const properties = store.getProperties();

    elements.metrics.innerHTML = [
      { label: "All Homes", value: metrics.totalHomes, note: "Complete inventory" },
      { label: "For Sale", value: metrics.forSale, note: "Available to buy" },
      { label: "For Rent", value: metrics.forRent, note: "Available to rent" },
      { label: "Sold", value: metrics.sold, note: "Closed sales" },
      { label: "Rented", value: metrics.rented, note: "Closed rentals" },
      { label: "Revenue", value: store.formatCompact(metrics.totalRevenue), note: "Sales plus annualized rent" }
    ]
      .map(site.metricCardMarkup)
      .join("");

    site.renderBarChart(elements.statusChart, store.buildStatusRows(metrics));
    site.renderBarChart(elements.cityChart, store.buildGroupedRows(properties, "city", 6));
    site.renderBarChart(elements.typeChart, store.buildGroupedRows(properties, "type", 6));

    elements.revenueChart.innerHTML = [
      site.summaryItemMarkup("Total revenue", store.formatCurrency(metrics.totalRevenue)),
      site.summaryItemMarkup("Revenue from sold homes", store.formatCurrency(metrics.saleRevenue)),
      site.summaryItemMarkup("Revenue from rented homes", store.formatCurrency(metrics.rentRevenue)),
      site.summaryItemMarkup(
        "Average sold price",
        metrics.sold ? store.formatCurrency(metrics.saleRevenue / metrics.sold) : "No sales yet"
      ),
      site.summaryItemMarkup(
        "Average rent price",
        metrics.rented ? `${store.formatCurrency(metrics.monthlyRentedAverage)} / month` : "No rentals yet"
      ),
      site.summaryItemMarkup("Conversion rate", `${metrics.conversionRate}%`)
    ].join("");

    renderFeed(elements.activityList, store.getRecentActivity(8), (item) => ({
      title: item.title,
      body: item.meta,
      meta: store.formatDate(item.date)
    }));

    renderFeed(elements.inquiryList, store.getRecentInquiries(8), (item) => ({
      title: `${item.name} about ${item.propertyTitle}`,
      body: item.message,
      meta: `${item.email} | ${store.formatDate(item.date)}`
    }));

    renderPropertyOptions();
    renderUserListings();
  }

  function renderPropertyOptions() {
    const properties = store.getProperties();
    const selectedValue = elements.propertySelect.value || (properties[0] || {}).id || "";

    if (!properties.length) {
      elements.propertySelect.innerHTML = "";
      elements.statusHint.textContent = "No properties available to update.";
      return;
    }

    elements.propertySelect.innerHTML = properties
      .map(
        (property) =>
          `<option value="${site.escapeHtml(property.id)}">${site.escapeHtml(property.title)} (${site.escapeHtml(
            store.getStatusLabel(property.status)
          )})</option>`
      )
      .join("");

    if (selectedValue) {
      elements.propertySelect.value = store.getPropertyById(selectedValue) ? selectedValue : properties[0].id;
    }

    const selectedProperty = store.getPropertyById(elements.propertySelect.value);
    if (selectedProperty) {
      elements.adminStatus.value = selectedProperty.status;
    }
  }

  function renderUserListings() {
    const favorites = store.getFavorites();
    const listings = store.getUserListings(session);

    elements.userListings.innerHTML = listings.length
      ? listings
          .map((property) =>
            site.propertyCardMarkup(property, {
              favorites,
              detailLabel: "Open Listing",
              secondaryText: "Manage Details"
            })
          )
          .join("")
      : site.emptyStateMarkup("No listings created yet", "Use the sell page to add a property under your account.");
  }

  function renderFeed(container, items, mapItem) {
    container.innerHTML = items.length
      ? items
          .map((item) => {
            const mapped = mapItem(item);
            return `
              <div class="feed-item">
                <strong>${site.escapeHtml(mapped.title)}</strong>
                <span>${site.escapeHtml(mapped.body)}</span>
                <small>${site.escapeHtml(mapped.meta)}</small>
              </div>
            `;
          })
          .join("")
      : site.emptyStateMarkup("No data yet", "This panel will update as you interact with the marketplace.");
  }

  function showBanner(message, isWarning) {
    elements.banner.hidden = false;
    elements.banner.classList.toggle("is-warning", Boolean(isWarning));
    elements.banner.textContent = message;
  }
});
