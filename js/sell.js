document.addEventListener("DOMContentLoaded", () => {
  const store = window.CasaVistaStore;
  const site = window.CasaVistaSite;

  const session = site.hydratePage({ active: "sell", requireAuth: true, next: "sell.html" });
  if (!session) {
    return;
  }

  const elements = {
    form: document.getElementById("listingForm"),
    banner: document.getElementById("sellBanner"),
    preview: document.getElementById("listingPreview"),
    myListings: document.getElementById("myListings")
  };

  if (!elements.form || !elements.preview || !elements.myListings) {
    return;
  }

  elements.form.addEventListener("input", renderPreview);
  elements.form.addEventListener("submit", handleSubmit);

  renderPreview();
  renderUserListings();

  function handleSubmit(event) {
    event.preventDefault();

    try {
      const payload = readForm();
      const property = store.createListing(payload, session);
      showBanner(`${property.title} was published successfully. Opening the details page...`);
      elements.form.reset();
      resetDefaults();
      renderPreview();
      renderUserListings();

      window.setTimeout(() => {
        window.location.href = `details.html?id=${encodeURIComponent(property.id)}&created=1`;
      }, 700);
    } catch (error) {
      showBanner(error.message, true);
    }
  }

  function readForm() {
    const formData = new FormData(elements.form);

    return {
      title: String(formData.get("title") || "").trim(),
      city: String(formData.get("city") || "").trim(),
      district: String(formData.get("district") || "").trim(),
      address: String(formData.get("address") || "").trim(),
      intent: String(formData.get("intent") || "sell"),
      type: String(formData.get("type") || "Apartment"),
      bedrooms: Number(formData.get("bedrooms") || 3),
      bathrooms: Number(formData.get("bathrooms") || 2),
      area: Number(formData.get("area") || 160),
      price: Number(formData.get("price") || 5000000),
      theme: String(formData.get("theme") || "theme-sunset"),
      featured: formData.get("featured") === "on",
      tagline: String(formData.get("tagline") || "").trim(),
      description: String(formData.get("description") || "").trim(),
      amenities: String(formData.get("amenities") || "").trim()
    };
  }

  function renderPreview() {
    const payload = readForm();
    const preview = {
      title: payload.title || "Your next listing",
      city: payload.city || "City",
      district: payload.district || "District",
      address: payload.address || "Address to be confirmed",
      type: payload.type,
      status: payload.intent === "rent" ? "for-rent" : "for-sale",
      theme: payload.theme || "theme-sunset",
      tagline: payload.tagline || "A short tagline will appear here.",
      bedrooms: payload.bedrooms || 3,
      bathrooms: payload.bathrooms || 2,
      area: payload.area || 160,
      price: payload.price || 5000000,
      pricingModel: payload.intent === "rent" ? "monthly" : "total",
      agent: session.name
    };

    elements.preview.innerHTML = `
      <div class="preview-cover ${site.escapeHtml(preview.theme)}">
        <div class="detail-overlay">
          <div>
            <small>${site.escapeHtml(preview.city)} | ${site.escapeHtml(preview.type)}</small>
            <strong>${site.escapeHtml(preview.title)}</strong>
          </div>
          <span class="status-pill status-pill--${site.escapeHtml(preview.status)}">${site.escapeHtml(store.getStatusLabel(preview.status))}</span>
        </div>
      </div>
      <div class="stack">
        <div class="summary-item">
          <span>Price</span>
          <strong>${site.escapeHtml(store.getDisplayPrice(preview))}</strong>
        </div>
        <div class="summary-item">
          <span>Tagline</span>
          <strong>${site.escapeHtml(preview.tagline)}</strong>
        </div>
        <div class="summary-item">
          <span>Specs</span>
          <strong>${site.escapeHtml(`${preview.bedrooms} beds | ${preview.bathrooms} baths | ${preview.area} sq m`)}</strong>
        </div>
      </div>
    `;
  }

  function renderUserListings() {
    const listings = store.getUserListings(session).slice(0, 6);

    elements.myListings.innerHTML = listings.length
      ? listings
          .map(
            (property) => `
              <div class="feed-item">
                <strong>${site.escapeHtml(property.title)}</strong>
                <span>${site.escapeHtml(property.city)} | ${site.escapeHtml(store.getStatusLabel(property.status))}</span>
                <small><a href="details.html?id=${encodeURIComponent(property.id)}">Open details</a></small>
              </div>
            `
          )
          .join("")
      : site.emptyStateMarkup("No listings yet", "Publish a property from this page and it will show up here.");
  }

  function resetDefaults() {
    elements.form.elements.namedItem("bedrooms").value = "3";
    elements.form.elements.namedItem("bathrooms").value = "2";
    elements.form.elements.namedItem("area").value = "160";
    elements.form.elements.namedItem("price").value = "5000000";
    elements.form.elements.namedItem("intent").value = "sell";
    elements.form.elements.namedItem("type").value = "Apartment";
    elements.form.elements.namedItem("theme").value = "theme-sunset";
  }

  function showBanner(message, isWarning) {
    elements.banner.hidden = false;
    elements.banner.classList.toggle("is-warning", Boolean(isWarning));
    elements.banner.textContent = message;
  }
});
