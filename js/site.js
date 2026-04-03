(function attachCasaVistaSite(global) {
  const store = global.CasaVistaStore;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function hydratePage(options) {
    const settings = {
      active: "",
      requireAuth: false,
      next: "",
      ...options
    };

    const session = store.getSession();

    if (settings.requireAuth && !session) {
      store.redirectToLogin(settings.next || store.getCurrentRoute());
      return null;
    }

    document.querySelectorAll("[data-nav]").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === settings.active);
    });

    document.querySelectorAll("[data-session-name]").forEach((element) => {
      element.textContent = session ? session.name : "Guest";
    });

    document.querySelectorAll("[data-session-email]").forEach((element) => {
      element.textContent = session ? session.email : "Not signed in";
    });

    document.querySelectorAll("[data-login-link]").forEach((link) => {
      link.textContent = session ? "Account" : "Login";
      link.href = session ? "dashboard.html" : "login.html";
    });

    document.querySelectorAll("[data-auth-state]").forEach((element) => {
      element.textContent = session ? "Signed in" : "Guest mode";
    });

    document.querySelectorAll("[data-logout]").forEach((button) => {
      button.hidden = !session;
      button.addEventListener("click", () => {
        store.logout();
        global.location.href = "login.html";
      });
    });

    return session;
  }

  function metricCardMarkup(metric) {
    return `
      <article class="metric-card">
        <span>${escapeHtml(metric.label)}</span>
        <strong>${escapeHtml(metric.value)}</strong>
        <small>${escapeHtml(metric.note)}</small>
      </article>
    `;
  }

  function emptyStateMarkup(title, copy) {
    return `
      <div class="empty-state">
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p class="empty-copy">${escapeHtml(copy)}</p>
        </div>
      </div>
    `;
  }

  function propertyCardMarkup(property, options) {
    const settings = {
      favorites: [],
      detailLabel: "View Details",
      secondaryText: property.status === "for-rent" ? "Rent This" : "Buy This",
      showFavorite: true,
      badge: `${property.area} sq m`
    };

    Object.assign(settings, options || {});

    const isFavorite = settings.favorites.includes(property.id);
    const favoriteClass = isFavorite ? "is-active" : "";
    const detailHref = `details.html?id=${encodeURIComponent(property.id)}`;

    return `
      <article class="property-card">
        <div class="property-art ${property.theme}" style="${store.getPropertyBackgroundStyle(property)}">
          <div class="property-topline">
            <span class="status-pill status-pill--${escapeHtml(property.status)}">${escapeHtml(store.getStatusLabel(property.status))}</span>
            ${
              settings.showFavorite
                ? `
                  <button class="favorite-btn ${favoriteClass}" type="button" data-favorite-id="${escapeHtml(property.id)}" aria-label="Toggle favorite for ${escapeHtml(property.title)}">
                    ${isFavorite ? "&#9829;" : "&#9825;"}
                  </button>
                `
                : ""
            }
          </div>
          <div class="property-art-copy">
            <small>${escapeHtml(property.city)} | ${escapeHtml(property.type)}</small>
            <strong>${escapeHtml(property.tagline)}</strong>
          </div>
        </div>

        <div class="property-card-body">
          <div>
            <h3>${escapeHtml(property.title)}</h3>
            <p class="property-subtitle">${escapeHtml(property.address)}</p>
          </div>

          <div class="price-row">
            <span class="price-main">${escapeHtml(store.getDisplayPrice(property))}</span>
            <span class="mini-badge">${escapeHtml(settings.badge)}</span>
          </div>

          <div class="chip-row">
            <span class="chip">${escapeHtml(property.bedrooms)} beds</span>
            <span class="chip">${escapeHtml(property.bathrooms)} baths</span>
            <span class="chip">${escapeHtml(property.agent)}</span>
          </div>

          <div class="card-actions">
            <a class="card-btn" href="${detailHref}">${escapeHtml(settings.detailLabel)}</a>
            <a class="card-btn secondary" href="${detailHref}#propertyActions">${escapeHtml(settings.secondaryText)}</a>
          </div>
        </div>
      </article>
    `;
  }

  function renderBarChart(container, rows) {
    if (!container) {
      return;
    }

    if (!rows.length) {
      container.innerHTML = emptyStateMarkup(
        "No data available",
        "Interact with the marketplace and dashboard to generate analytics."
      );
      return;
    }

    const maxValue = Math.max.apply(
      null,
      rows.map((row) => row.value).concat(1)
    );

    container.innerHTML = rows
      .map(
        (row) => `
          <div class="bar-row">
            <header>
              <strong>${row.label}</strong>
              <span>${row.displayValue || row.value}</span>
            </header>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${(row.value / maxValue) * 100}%"></div>
            </div>
          </div>
        `
      )
      .join("");
  }

  function summaryItemMarkup(label, value) {
    return `<div class="summary-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
  }

  global.CasaVistaSite = {
    hydratePage,
    escapeHtml,
    metricCardMarkup,
    emptyStateMarkup,
    propertyCardMarkup,
    renderBarChart,
    summaryItemMarkup
  };
})(window);
