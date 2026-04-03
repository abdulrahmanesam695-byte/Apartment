document.addEventListener("DOMContentLoaded", () => {
  const store = window.CasaVistaStore;
  const site = window.CasaVistaSite;

  site.hydratePage({ active: "home" });

  const elements = {
    metrics: document.getElementById("homeMetrics"),
    featuredGrid: document.getElementById("featuredGrid")
  };

  if (!elements.metrics || !elements.featuredGrid) {
    return;
  }

  elements.featuredGrid.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest("[data-favorite-id]");
    if (!favoriteButton) {
      return;
    }

    store.toggleFavorite(favoriteButton.dataset.favoriteId);
    renderFeatured();
    renderMetrics();
  });

  renderMetrics();
  renderFeatured();

  function renderMetrics() {
    const metrics = store.getMetrics();
    const cards = [
      { label: "Total Homes", value: metrics.totalHomes, note: "Listings synced across all pages" },
      { label: "Closed Deals", value: metrics.closedDeals, note: "Sold and rented properties" },
      { label: "Revenue", value: store.formatCompact(metrics.totalRevenue), note: "Sales plus annualized rent" },
      { label: "Favorites", value: metrics.favorites, note: "Saved from the marketplace" }
    ];

    elements.metrics.innerHTML = cards.map(site.metricCardMarkup).join("");
  }

  function renderFeatured() {
    const favorites = store.getFavorites();
    const properties = store.getFeaturedProperties(4);

    elements.featuredGrid.innerHTML = properties.length
      ? properties
          .map((property) =>
            site.propertyCardMarkup(property, {
              favorites,
              detailLabel: "Open Details",
              secondaryText: property.status === "for-rent" ? "Rent This" : "Buy This"
            })
          )
          .join("")
      : site.emptyStateMarkup("No listings yet", "Add a property from the sell page to populate the marketplace.");
  }
});
