document.addEventListener("DOMContentLoaded", () => {
  const store = window.CasaVistaStore;
  const site = window.CasaVistaSite;

  site.hydratePage({ active: "buy" });

  const elements = {
    banner: document.getElementById("detailsBanner"),
    container: document.getElementById("propertyDetails")
  };

  if (!elements.container || !elements.banner) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  let currentPropertyId = params.get("id") || (store.getFeaturedProperties(1)[0] || {}).id || "";

  if (!currentPropertyId) {
    elements.container.innerHTML = site.emptyStateMarkup("No property selected", "Open a listing from the buy page to inspect it here.");
    return;
  }

  if (params.get("created") === "1") {
    showBanner("Your new listing has been published and is now live in the marketplace.");
  }

  elements.container.addEventListener("click", handleClick);
  elements.container.addEventListener("submit", handleSubmit);

  render();

  function render() {
    const property = store.getPropertyById(currentPropertyId);

    if (!property) {
      elements.container.innerHTML = site.emptyStateMarkup("Property not found", "This listing may have been removed or renamed.");
      return;
    }

    store.rememberRecentView(currentPropertyId);

    const session = store.getSession();
    const favorites = store.getFavorites();
    const isFavorite = favorites.includes(property.id);
    const canTransact = property.status === "for-sale" || property.status === "for-rent";
    const recentViews = store.getRecentViewProperties(property.id, 3);
    const inquiryName = session ? session.name : "";
    const inquiryEmail = session ? session.email : "";

    elements.container.innerHTML = `
      <article class="selected-panel">
        <div class="detail-layout">
          <div class="detail-visual ${site.escapeHtml(property.theme)}" style="${store.getPropertyBackgroundStyle(property)}">
            <div class="detail-overlay">
              <div>
                <small>${site.escapeHtml(property.city)} | ${site.escapeHtml(property.district)}</small>
                <strong>${site.escapeHtml(property.title)}</strong>
              </div>
              <span class="status-pill status-pill--${site.escapeHtml(property.status)}">${site.escapeHtml(store.getStatusLabel(property.status))}</span>
            </div>
          </div>

          <div class="detail-body">
            <div class="selected-header">
              <div>
                <h3>${site.escapeHtml(property.title)}</h3>
                <div class="detail-meta">
                  <p>${site.escapeHtml(property.address)}</p>
                  <p>Listed ${site.escapeHtml(store.formatDate(property.listedDate))} by ${site.escapeHtml(property.agent)}</p>
                </div>
              </div>

              <div class="selected-price">
                <strong>${site.escapeHtml(store.getDisplayPrice(property))}</strong>
                <button class="secondary-btn" type="button" data-favorite-id="${site.escapeHtml(property.id)}">
                  ${isFavorite ? "Remove Favorite" : "Save Favorite"}
                </button>
              </div>
            </div>

            <div class="detail-highlights">
              <div class="highlight-box"><span>Bedrooms</span><strong>${site.escapeHtml(property.bedrooms)}</strong></div>
              <div class="highlight-box"><span>Bathrooms</span><strong>${site.escapeHtml(property.bathrooms)}</strong></div>
              <div class="highlight-box"><span>Area</span><strong>${site.escapeHtml(property.area)} sq m</strong></div>
              <div class="highlight-box"><span>Type</span><strong>${site.escapeHtml(property.type)}</strong></div>
            </div>

            <p class="selected-description">${site.escapeHtml(property.description)}</p>

            <div class="details-actions" id="propertyActions">
              <a class="ghost-btn" href="buy.html">Back to Marketplace</a>
              ${
                canTransact
                  ? `<button class="primary-btn" type="button" data-transaction-id="${site.escapeHtml(property.id)}">${property.status === "for-rent" ? "Reserve Rental" : "Confirm Purchase"}</button>`
                  : `<button class="secondary-btn" type="button" disabled>${site.escapeHtml(store.getStatusLabel(property.status))}</button>`
              }
            </div>

            <div class="detail-panels">
              <div class="info-card">
                <h4>Amenities</h4>
                <div class="amenities-grid">
                  ${property.amenities.map((amenity) => `<span class="amenity-chip">${site.escapeHtml(amenity)}</span>`).join("")}
                </div>
              </div>

              <div class="info-card">
                <h4>Listing Journey</h4>
                ${(property.timeline || [])
                  .map(
                    (item) => `
                      <div class="timeline-item">
                        <div class="timeline-copy">
                          <strong>${site.escapeHtml(item.title)}</strong>
                          <small>${site.escapeHtml(store.formatDate(item.date))}</small>
                        </div>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>

            ${
              recentViews.length
                ? `
                  <div class="info-card">
                    <h4>Recently Viewed</h4>
                    <div class="recent-row">
                      ${recentViews
                        .map(
                          (item) =>
                            `<a class="chip" href="details.html?id=${encodeURIComponent(item.id)}">${site.escapeHtml(item.title)}</a>`
                        )
                        .join("")}
                    </div>
                  </div>
                `
                : ""
            }

            <div class="detail-forms">
              <form id="inquiryForm" class="detail-form">
                <h4>Send a Viewing Request</h4>
                <label class="field">
                  <span>Your Name</span>
                  <input name="name" type="text" value="${site.escapeHtml(inquiryName)}" placeholder="Enter your full name" required>
                </label>
                <label class="field">
                  <span>Email Address</span>
                  <input name="email" type="email" value="${site.escapeHtml(inquiryEmail)}" placeholder="Enter your email" required>
                </label>
                <label class="field">
                  <span>Message</span>
                  <textarea name="message" placeholder="Tell the seller what you want to know" required></textarea>
                </label>
                <button class="primary-btn full-width" type="submit">Send Request</button>
              </form>

              <div class="detail-form">
                <h4>Listing Summary</h4>
                ${site.summaryItemMarkup("Agent", property.agent)}
                ${site.summaryItemMarkup("Status", store.getStatusLabel(property.status))}
                ${site.summaryItemMarkup("Price", store.getDisplayPrice(property))}
                ${site.summaryItemMarkup("Deal Date", property.dealDate ? store.formatDate(property.dealDate) : "Still active")}
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function handleClick(event) {
    const favoriteButton = event.target.closest("[data-favorite-id]");
    const transactionButton = event.target.closest("[data-transaction-id]");

    if (favoriteButton) {
      store.toggleFavorite(favoriteButton.dataset.favoriteId);
      render();
      return;
    }

    if (!transactionButton) {
      return;
    }

    const session = store.getSession();
    if (!session) {
      store.redirectToLogin(store.getCurrentRoute());
      return;
    }

    try {
      const property = store.completeTransaction(transactionButton.dataset.transactionId, session.name);
      showBanner(`${property.title} is now marked as ${store.getStatusLabel(property.status)}.`);
      render();
    } catch (error) {
      showBanner(error.message, true);
    }
  }

  function handleSubmit(event) {
    if (event.target.id !== "inquiryForm") {
      return;
    }

    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      store.addInquiry(currentPropertyId, {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        message: String(formData.get("message") || "").trim()
      });
      showBanner("Your request was saved and now appears in the dashboard inbox.");
      render();
    } catch (error) {
      showBanner(error.message, true);
    }
  }

  function showBanner(message, isWarning) {
    elements.banner.hidden = false;
    elements.banner.classList.toggle("is-warning", Boolean(isWarning));
    elements.banner.textContent = message;
  }
});
