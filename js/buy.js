document.addEventListener("DOMContentLoaded", () => {
  const store = window.CasaVistaStore;
  const site = window.CasaVistaSite;

  site.hydratePage({ active: "buy" });

  const state = {
    filters: {
      search: "",
      status: "all",
      city: "all",
      bedrooms: "all",
      price: "all",
      sort: "featured"
    }
  };

  const elements = {
    metrics: document.getElementById("marketplaceMetrics"),
    grid: document.getElementById("propertyGrid"),
    resultCount: document.getElementById("resultCount"),
    favoriteCount: document.getElementById("favoriteCount"),
    cityFilter: document.getElementById("cityFilter"),
    searchInput: document.getElementById("searchInput"),
    statusFilter: document.getElementById("statusFilter"),
    bedroomFilter: document.getElementById("bedroomFilter"),
    priceFilter: document.getElementById("priceFilter"),
    sortFilter: document.getElementById("sortFilter")
  };

  if (!elements.grid) {
    return;
  }

  populateCities();
  bindEvents();
  renderMetrics();
  renderProperties();

  function bindEvents() {
    elements.searchInput.addEventListener("input", (event) => {
      state.filters.search = event.target.value;
      renderProperties();
    });

    elements.statusFilter.addEventListener("change", (event) => {
      state.filters.status = event.target.value;
      renderProperties();
    });

    elements.cityFilter.addEventListener("change", (event) => {
      state.filters.city = event.target.value;
      renderProperties();
    });

    elements.bedroomFilter.addEventListener("change", (event) => {
      state.filters.bedrooms = event.target.value;
      renderProperties();
    });

    elements.priceFilter.addEventListener("change", (event) => {
      state.filters.price = event.target.value;
      renderProperties();
    });

    elements.sortFilter.addEventListener("change", (event) => {
      state.filters.sort = event.target.value;
      renderProperties();
    });

    elements.grid.addEventListener("click", (event) => {
      const favoriteButton = event.target.closest("[data-favorite-id]");
      if (!favoriteButton) {
        return;
      }

      store.toggleFavorite(favoriteButton.dataset.favoriteId);
      renderMetrics();
      renderProperties();
    });
  }

  function populateCities() {
    const selectedValue = elements.cityFilter.value || "all";
    elements.cityFilter.innerHTML = `
      <option value="all">All cities</option>
      ${store
        .getCities()
        .map((city) => `<option value="${site.escapeHtml(city)}">${site.escapeHtml(city)}</option>`)
        .join("")}
    `;
    elements.cityFilter.value = selectedValue;
  }

  function renderMetrics() {
    const metrics = store.getMetrics();
    const cards = [
      { label: "All Homes", value: metrics.totalHomes, note: "Marketplace inventory" },
      { label: "For Sale", value: metrics.forSale, note: "Ready to buy" },
      { label: "For Rent", value: metrics.forRent, note: "Ready to rent" },
      { label: "Favorites", value: metrics.favorites, note: "Saved by visitors" }
    ];

    elements.metrics.innerHTML = cards.map(site.metricCardMarkup).join("");
  }

  function renderProperties() {
    const favorites = store.getFavorites();
    const properties = store.getFilteredProperties(state.filters);

    elements.resultCount.textContent = String(properties.length);
    elements.favoriteCount.textContent = String(favorites.length);

    elements.grid.innerHTML = properties.length
      ? properties
          .map((property) =>
            site.propertyCardMarkup(property, {
              favorites,
              detailLabel: "Inspect Home",
              secondaryText: property.status === "for-rent" ? "Rent This" : "Buy This"
            })
          )
          .join("")
      : site.emptyStateMarkup("No properties match these filters.", "Try a different city, status, or price range.");
  }
});
