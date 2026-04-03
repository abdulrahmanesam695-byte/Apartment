const STORAGE_KEYS = {
  properties: "casavista-properties-v1",
  inquiries: "casavista-inquiries-v1",
  favorites: "casavista-favorites-v1",
  recentViews: "casavista-recent-v1",
  activity: "casavista-activity-v1"
};

const DEFAULT_PROPERTIES = [
  {
    id: "home-01",
    title: "Palm Horizon Villa",
    city: "New Cairo",
    district: "Fifth Settlement",
    address: "North Teseen Road, New Cairo",
    status: "for-sale",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 420,
    price: 12800000,
    pricingModel: "total",
    featured: true,
    agent: "Mariam Adel",
    listedDate: "2026-03-20",
    dealDate: "",
    revenueValue: 0,
    theme: "theme-sunset",
    tagline: "Private garden with a bright family layout",
    description:
      "A refined family villa with a wide reception area, landscaped outdoor space, smart lighting, and a calm location close to schools and retail services.",
    amenities: ["Private garden", "Smart home", "Maid room", "Covered parking", "Security gate"],
    timeline: [
      { title: "Listed with premium placement", date: "2026-03-20" },
      { title: "Virtual tour added", date: "2026-03-23" },
      { title: "Price confirmed by owner", date: "2026-03-28" }
    ]
  },
  {
    id: "home-02",
    title: "Skyline Duplex Loft",
    city: "Sheikh Zayed",
    district: "Beverly Hills",
    address: "Beverly Hills Compound, Sheikh Zayed",
    status: "for-rent",
    type: "Duplex",
    bedrooms: 3,
    bathrooms: 3,
    area: 240,
    price: 42000,
    pricingModel: "monthly",
    featured: true,
    agent: "Youssef Nabil",
    listedDate: "2026-03-16",
    dealDate: "",
    revenueValue: 0,
    theme: "theme-sky",
    tagline: "A crisp duplex for young professionals",
    description:
      "Designed for modern living, this duplex offers double-height glazing, a calm interior palette, a flexible workspace corner, and easy access to the city.",
    amenities: ["Balcony", "Club access", "Workspace", "Parking", "Elevator"],
    timeline: [
      { title: "New photography uploaded", date: "2026-03-17" },
      { title: "Broker viewing requests opened", date: "2026-03-19" },
      { title: "Rental terms updated", date: "2026-03-26" }
    ]
  },
  {
    id: "home-03",
    title: "Marina Edge Chalet",
    city: "North Coast",
    district: "Sidi Abdelrahman",
    address: "Marina Edge Resort, North Coast",
    status: "sold",
    type: "Chalet",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    price: 6400000,
    pricingModel: "total",
    featured: false,
    agent: "Rana Hossam",
    listedDate: "2026-02-18",
    dealDate: "2026-03-11",
    revenueValue: 6400000,
    theme: "theme-lagoon",
    tagline: "Closed deal with strong seasonal demand",
    description:
      "A bright coastal chalet with a sea-facing terrace, relaxed open-plan living, and direct resort access ideal for summer stays and investment buyers.",
    amenities: ["Sea view", "Pool access", "Resort security", "Terrace", "Storage room"],
    timeline: [
      { title: "Listed before summer season", date: "2026-02-18" },
      { title: "Buyer negotiation accepted", date: "2026-03-08" },
      { title: "Sale completed", date: "2026-03-11" }
    ]
  },
  {
    id: "home-04",
    title: "Nile View Apartment",
    city: "Maadi",
    district: "Corniche",
    address: "Corniche El Nil, Maadi",
    status: "rented",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 154,
    price: 31000,
    pricingModel: "monthly",
    featured: false,
    agent: "Omar Tarek",
    listedDate: "2026-02-27",
    dealDate: "2026-03-15",
    revenueValue: 372000,
    theme: "theme-lagoon",
    tagline: "A calm riverfront apartment with quick leasing success",
    description:
      "This apartment mixes a river-facing balcony, updated kitchen finishes, and easy movement across Maadi, making it perfect for long-term rental demand.",
    amenities: ["River view", "Elevator", "Reception desk", "Balcony", "Modern kitchen"],
    timeline: [
      { title: "Listing launched", date: "2026-02-27" },
      { title: "Three viewings completed", date: "2026-03-09" },
      { title: "Rental contract signed", date: "2026-03-15" }
    ]
  },
  {
    id: "home-05",
    title: "Garden Gate Townhouse",
    city: "6th of October",
    district: "Mountain View",
    address: "Mountain View iCity, 6th of October",
    status: "for-sale",
    type: "Townhouse",
    bedrooms: 4,
    bathrooms: 3,
    area: 285,
    price: 8750000,
    pricingModel: "total",
    featured: true,
    agent: "Salma Mostafa",
    listedDate: "2026-03-21",
    dealDate: "",
    revenueValue: 0,
    theme: "theme-forest",
    tagline: "Family home with indoor-outdoor balance",
    description:
      "A warm townhouse with private greenery, efficient family circulation, and a contemporary design language suited to buyers who want space without a full villa footprint.",
    amenities: ["Garden", "Clubhouse", "BBQ area", "Parking", "Security"],
    timeline: [
      { title: "Owner documentation verified", date: "2026-03-20" },
      { title: "Featured in homepage rotation", date: "2026-03-22" },
      { title: "Weekend open house announced", date: "2026-03-29" }
    ]
  },
  {
    id: "home-06",
    title: "Downtown Creative Loft",
    city: "New Capital",
    district: "Financial District",
    address: "Financial District, New Administrative Capital",
    status: "for-rent",
    type: "Loft",
    bedrooms: 1,
    bathrooms: 1,
    area: 92,
    price: 26000,
    pricingModel: "monthly",
    featured: false,
    agent: "Karim Ashraf",
    listedDate: "2026-03-14",
    dealDate: "",
    revenueValue: 0,
    theme: "theme-dusk",
    tagline: "Compact modern loft near business towers",
    description:
      "A stylish city loft with flexible living space, polished finishes, and a location suited to single professionals who want a shorter daily commute.",
    amenities: ["Gym access", "Co-working lounge", "Smart lock", "High floor", "Concierge"],
    timeline: [
      { title: "Listing activated", date: "2026-03-14" },
      { title: "Price review completed", date: "2026-03-18" },
      { title: "Remote viewing enabled", date: "2026-03-25" }
    ]
  }
  ,
  {
    id: "home-07",
    title: "Seaside Crown Penthouse",
    city: "Alexandria",
    district: "Stanley",
    address: "Stanley Bridge, Alexandria",
    status: "sold",
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 4,
    area: 310,
    price: 9600000,
    pricingModel: "total",
    featured: false,
    agent: "Dina Farouk",
    listedDate: "2026-02-20",
    dealDate: "2026-03-18",
    revenueValue: 9600000,
    theme: "theme-sky",
    tagline: "High-value coastal closing with strong resale appeal",
    description:
      "This penthouse offers dramatic sea light, oversized reception zones, and a prestige address that attracts premium buyers looking for skyline and waterfront presence.",
    amenities: ["Sea view", "Roof terrace", "Private elevator", "Guest suite", "Storage room"],
    timeline: [
      { title: "Luxury listing campaign started", date: "2026-02-20" },
      { title: "Final negotiation round", date: "2026-03-16" },
      { title: "Sale completed", date: "2026-03-18" }
    ]
  },
  {
    id: "home-08",
    title: "Courtyard Family Home",
    city: "Sheikh Zayed",
    district: "Allegria",
    address: "Allegria Compound, Sheikh Zayed",
    status: "rented",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    area: 360,
    price: 38000,
    pricingModel: "monthly",
    featured: false,
    agent: "Hana Maher",
    listedDate: "2026-02-22",
    dealDate: "2026-03-12",
    revenueValue: 456000,
    theme: "theme-forest",
    tagline: "Steady demand for a secure suburban family house",
    description:
      "A balanced villa with a central courtyard, safe compound environment, and versatile living zones for larger families who want greenery and privacy.",
    amenities: ["Courtyard", "Security", "Parking", "Laundry room", "Storage"],
    timeline: [
      { title: "Listing published", date: "2026-02-22" },
      { title: "Family viewing confirmed", date: "2026-03-05" },
      { title: "Annual lease signed", date: "2026-03-12" }
    ]
  },
  {
    id: "home-09",
    title: "Palm Residence Apartment",
    city: "Nasr City",
    district: "Makram Ebeid",
    address: "Makram Ebeid Street, Nasr City",
    status: "for-sale",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 165,
    price: 4350000,
    pricingModel: "total",
    featured: false,
    agent: "Mina Fawzy",
    listedDate: "2026-03-25",
    dealDate: "",
    revenueValue: 0,
    theme: "theme-sand",
    tagline: "Affordable family apartment in a central district",
    description:
      "A practical apartment with natural light, efficient room sizes, and direct access to schools, malls, and major roads for comfortable everyday living.",
    amenities: ["Elevator", "Reception area", "Storage", "Street-facing balcony", "Nearby transit"],
    timeline: [
      { title: "Listing published", date: "2026-03-25" },
      { title: "Traffic campaign started", date: "2026-03-27" },
      { title: "Owner available for offers", date: "2026-03-30" }
    ]
  },
  {
    id: "home-10",
    title: "Lagoon Escape Chalet",
    city: "El Gouna",
    district: "Ancient Sands",
    address: "Ancient Sands, El Gouna",
    status: "for-rent",
    type: "Chalet",
    bedrooms: 2,
    bathrooms: 2,
    area: 128,
    price: 55000,
    pricingModel: "monthly",
    featured: true,
    agent: "Sherif Khaled",
    listedDate: "2026-03-19",
    dealDate: "",
    revenueValue: 0,
    theme: "theme-lagoon",
    tagline: "Premium short-stay feel with resort atmosphere",
    description:
      "A bright chalet overlooking a lagoon with stylish resort finishes and outdoor leisure appeal for tenants seeking a premium vacation-style rental.",
    amenities: ["Lagoon view", "Pool", "Golf access", "Furnished", "Housekeeping option"],
    timeline: [
      { title: "Seasonal listing launched", date: "2026-03-19" },
      { title: "Featured to premium renters", date: "2026-03-24" },
      { title: "Weekend viewings arranged", date: "2026-03-31" }
    ]
  },
  {
    id: "home-11",
    title: "Heritage Garden Villa",
    city: "Heliopolis",
    district: "Korba",
    address: "Korba, Heliopolis",
    status: "rented",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 390,
    price: 48000,
    pricingModel: "monthly",
    featured: false,
    agent: "Laila Sameh",
    listedDate: "2026-02-25",
    dealDate: "2026-03-21",
    revenueValue: 576000,
    theme: "theme-sand",
    tagline: "Historic character secured with a long-term tenant",
    description:
      "An elegant villa with classic details, mature landscaping, and generous entertaining space, leased to a family seeking charm and convenience.",
    amenities: ["Private garden", "Classic architecture", "Guest room", "Driver room", "Parking"],
    timeline: [
      { title: "Owner renovation completed", date: "2026-02-21" },
      { title: "Tenant short list created", date: "2026-03-17" },
      { title: "Lease signed", date: "2026-03-21" }
    ]
  },
  {
    id: "home-12",
    title: "Oasis Signature Duplex",
    city: "New Cairo",
    district: "South Investors",
    address: "South Investors Area, New Cairo",
    status: "for-sale",
    type: "Duplex",
    bedrooms: 4,
    bathrooms: 3,
    area: 275,
    price: 7900000,
    pricingModel: "total",
    featured: true,
    agent: "Ahmed Emad",
    listedDate: "2026-03-22",
    dealDate: "",
    revenueValue: 0,
    theme: "theme-dusk",
    tagline: "A balanced upscale duplex for growing families",
    description:
      "This duplex combines flexible family rooms, a warm palette, and a secure residential setting that appeals to buyers upgrading from smaller apartments.",
    amenities: ["Terrace", "Smart AC", "Parking", "Storage", "Security"],
    timeline: [
      { title: "Photography session completed", date: "2026-03-22" },
      { title: "Broker partner added", date: "2026-03-26" },
      { title: "Open viewing day posted", date: "2026-03-30" }
    ]
  }
];

const DEFAULT_INQUIRIES = [
  {
    id: "inq-01",
    propertyId: "home-02",
    propertyTitle: "Skyline Duplex Loft",
    name: "Nour Ibrahim",
    email: "nour@example.com",
    message: "Can I schedule a viewing next Friday evening?",
    date: "2026-03-27"
  },
  {
    id: "inq-02",
    propertyId: "home-05",
    propertyTitle: "Garden Gate Townhouse",
    name: "Hossam Ali",
    email: "hossam@example.com",
    message: "I want to know if installment payment is possible.",
    date: "2026-03-29"
  },
  {
    id: "inq-03",
    propertyId: "home-10",
    propertyTitle: "Lagoon Escape Chalet",
    name: "Sara Adel",
    email: "sara@example.com",
    message: "Please share if this chalet is fully furnished.",
    date: "2026-03-31"
  }
];

const DEFAULT_ACTIVITY = [
  {
    id: "act-01",
    title: "Marina Edge Chalet was sold",
    meta: "Revenue added from a closed sale",
    date: "2026-03-11"
  },
  {
    id: "act-02",
    title: "Courtyard Family Home was rented",
    meta: "Annual rent revenue recorded",
    date: "2026-03-12"
  },
  {
    id: "act-03",
    title: "Nile View Apartment was rented",
    meta: "Lease captured in dashboard analytics",
    date: "2026-03-15"
  },
  {
    id: "act-04",
    title: "Seaside Crown Penthouse was sold",
    meta: "Luxury transaction boosted total revenue",
    date: "2026-03-18"
  }
];

const state = {
  properties: loadState(STORAGE_KEYS.properties, DEFAULT_PROPERTIES),
  inquiries: loadState(STORAGE_KEYS.inquiries, DEFAULT_INQUIRIES),
  favorites: new Set(loadState(STORAGE_KEYS.favorites, [])),
  recentViews: loadState(STORAGE_KEYS.recentViews, []),
  activity: loadState(STORAGE_KEYS.activity, DEFAULT_ACTIVITY),
  selectedPropertyId: null,
  filters: {
    search: "",
    status: "all",
    city: "all",
    bedrooms: "all",
    price: "all",
    sort: "featured"
  }
};

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  captureElements();
  populateCityFilter();
  populatePropertySelect();
  bindEvents();

  const initialProperty = state.properties.find((property) => property.featured) || state.properties[0];
  state.selectedPropertyId = initialProperty ? initialProperty.id : null;

  renderApp();
});

function captureElements() {
  elements.heroStats = document.getElementById("heroStats");
  elements.metricsGrid = document.getElementById("metricsGrid");
  elements.propertyGrid = document.getElementById("propertyGrid");
  elements.resultCount = document.getElementById("resultCount");
  elements.favoriteCount = document.getElementById("favoriteCount");
  elements.selectedPropertyContent = document.getElementById("selectedPropertyContent");
  elements.statusChart = document.getElementById("statusChart");
  elements.cityChart = document.getElementById("cityChart");
  elements.typeChart = document.getElementById("typeChart");
  elements.revenueChart = document.getElementById("revenueChart");
  elements.activityList = document.getElementById("activityList");
  elements.inquiryList = document.getElementById("inquiryList");
  elements.cityFilter = document.getElementById("cityFilter");
  elements.statusFilter = document.getElementById("statusFilter");
  elements.searchInput = document.getElementById("searchInput");
  elements.bedroomFilter = document.getElementById("bedroomFilter");
  elements.priceFilter = document.getElementById("priceFilter");
  elements.sortFilter = document.getElementById("sortFilter");
  elements.propertySelect = document.getElementById("propertySelect");
  elements.adminStatus = document.getElementById("adminStatus");
  elements.statusForm = document.getElementById("statusForm");
  elements.statusHint = document.getElementById("statusHint");
}

function bindEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    state.filters.search = event.target.value.trim().toLowerCase();
    refreshFilteredViews();
  });

  elements.statusFilter.addEventListener("change", (event) => {
    state.filters.status = event.target.value;
    refreshFilteredViews();
  });

  elements.cityFilter.addEventListener("change", (event) => {
    state.filters.city = event.target.value;
    refreshFilteredViews();
  });

  elements.bedroomFilter.addEventListener("change", (event) => {
    state.filters.bedrooms = event.target.value;
    refreshFilteredViews();
  });

  elements.priceFilter.addEventListener("change", (event) => {
    state.filters.price = event.target.value;
    refreshFilteredViews();
  });

  elements.sortFilter.addEventListener("change", (event) => {
    state.filters.sort = event.target.value;
    refreshFilteredViews();
  });

  document.addEventListener("click", (event) => {
    const scrollButton = event.target.closest("[data-scroll-target]");
    if (scrollButton) {
      const target = document.querySelector(scrollButton.dataset.scrollTarget);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });

  elements.propertyGrid.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view-id]");
    const favoriteButton = event.target.closest("[data-favorite-id]");

    if (viewButton) {
      setSelectedProperty(viewButton.dataset.viewId, true);
      return;
    }

    if (favoriteButton) {
      toggleFavorite(favoriteButton.dataset.favoriteId);
    }
  });

  elements.selectedPropertyContent.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest("[data-selected-favorite]");
    const quickPropertyButton = event.target.closest("[data-view-id]");

    if (favoriteButton) {
      toggleFavorite(favoriteButton.dataset.selectedFavorite);
      return;
    }

    if (quickPropertyButton) {
      setSelectedProperty(quickPropertyButton.dataset.viewId, false);
    }
  });

  elements.selectedPropertyContent.addEventListener("submit", (event) => {
    if (event.target.id !== "inquiryForm") {
      return;
    }

    event.preventDefault();

    const formData = new FormData(event.target);
    const propertyId = formData.get("propertyId");
    const property = state.properties.find((item) => item.id === propertyId);

    if (!property) {
      return;
    }

    const inquiry = {
      id: createId("inq"),
      propertyId,
      propertyTitle: property.title,
      name: String(formData.get("name")).trim(),
      email: String(formData.get("email")).trim(),
      message: String(formData.get("message")).trim(),
      date: todayIso()
    };

    state.inquiries.unshift(inquiry);
    persistInquiries();

    pushActivity({
      title: `New viewing request for ${property.title}`,
      meta: `${inquiry.name} sent a message from the property details section.`,
      date: inquiry.date
    });

    event.target.reset();

    const message = document.getElementById("formMessage");
    if (message) {
      message.textContent = "Request saved locally. The lead now appears in the dashboard inbox.";
    }

    renderHeroStats();
    renderDashboard();
  });

  elements.statusForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const propertyId = elements.propertySelect.value;
    const newStatus = elements.adminStatus.value;
    const property = state.properties.find((item) => item.id === propertyId);

    if (!property) {
      return;
    }

    property.status = newStatus;
    property.pricingModel = isRentStatus(newStatus) ? "monthly" : "total";
    property.dealDate = isClosedStatus(newStatus) ? todayIso() : "";
    property.revenueValue = calculateRevenueForStatus(property, newStatus);

    persistProperties();

    const actionLabel = getStatusLabel(newStatus);
    elements.statusHint.textContent = `${property.title} is now marked as ${actionLabel}.`;

    pushActivity({
      title: `${property.title} changed to ${actionLabel}`,
      meta: "Dashboard values refreshed from local storage.",
      date: todayIso()
    });

    renderApp();
  });




  elements.propertySelect.addEventListener("change", (event) => {
    const property = state.properties.find((item) => item.id === event.target.value);
    if (!property) {
      return;
    }

    state.selectedPropertyId = property.id;
    elements.adminStatus.value = property.status;
    renderPropertyGrid();
    renderSelectedProperty();
  });
}

function renderApp() {
  ensureSelectedPropertyVisible();
  populatePropertySelect();
  renderHeroStats();
  renderPropertyGrid();
  renderSelectedProperty();
  renderDashboard();
}

function refreshFilteredViews() {
  ensureSelectedPropertyVisible();
  populatePropertySelect();
  renderPropertyGrid();
  renderSelectedProperty();
}

function renderHeroStats() {
  const metrics = buildMetrics();
  const cards = [
    { label: "Total homes", value: metrics.totalHomes, note: "All properties on the frontend" },
    { label: "Closed deals", value: metrics.closedDeals, note: "Sold and rented properties combined" },
    { label: "Revenue", value: formatCompact(metrics.totalRevenue), note: "Closed sales plus annual rental revenue" },
    { label: "Leads", value: state.inquiries.length, note: "Viewing requests stored locally" }
  ];

  elements.heroStats.innerHTML = cards
    .map(
      (card) => `
        <article class="metric-card">
          <span>${card.label}</span>
          <strong>${card.value}</strong>
          <small>${card.note}</small>
        </article>
      `
    )
    .join("");
}

function renderPropertyGrid() {
  const filteredProperties = getFilteredProperties();

  elements.resultCount.textContent = filteredProperties.length;
  elements.favoriteCount.textContent = state.favorites.size;

  if (!filteredProperties.length) {
    elements.propertyGrid.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>No properties match these filters.</h3>
          <p class="empty-copy">Try changing the city, status, or price range to show more homes.</p>
        </div>
      </div>
    `;
    return;
  }

  elements.propertyGrid.innerHTML = filteredProperties
    .map((property) => {
      const selected = property.id === state.selectedPropertyId ? "is-selected" : "";
      const favorite = state.favorites.has(property.id) ? "is-active" : "";

      return `
        <article class="property-card ${selected}">
          <div class="property-art ${property.theme}" style="${getPropertyBackgroundStyle(property)}">
            <div class="property-topline">
              <span class="status-pill status-pill--${property.status}">${getStatusLabel(property.status)}</span>
              <button class="favorite-btn ${favorite}" type="button" data-favorite-id="${property.id}" aria-label="Toggle favorite for ${property.title}">
                ${state.favorites.has(property.id) ? "&#9829;" : "&#9825;"}
              </button>
            </div>
            <div class="property-art-copy">
              <small>${property.city} | ${property.type}</small>
              <strong>${property.tagline}</strong>
            </div>
          </div>

          <div class="property-card-body">
            <div>
              <h3>${property.title}</h3>
              <p class="property-subtitle">${property.address}</p>
            </div>

            <div class="price-row">
              <span class="price-main">${getDisplayPrice(property)}</span>
              <span class="mini-badge">${property.area} sq m</span>
            </div>

            <div class="chip-row">
              <span class="chip">${property.bedrooms} beds</span>
              <span class="chip">${property.bathrooms} baths</span>
              <span class="chip">${property.agent}</span>
            </div>

            <div class="card-actions">
              <button class="card-btn" type="button" data-view-id="${property.id}">View Details</button>
              <button class="card-btn secondary" type="button" data-view-id="${property.id}">Open Panel</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderSelectedProperty() {
  const property = state.properties.find((item) => item.id === state.selectedPropertyId);

  if (!property) {
    elements.selectedPropertyContent.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>No property selected.</h3>
          <p class="empty-copy">Choose a listing to show the detailed house view here.</p>
        </div>
      </div>
    `;
    return;
  }

  const recentViews = state.recentViews
    .map((id) => state.properties.find((propertyItem) => propertyItem.id === id))
    .filter(Boolean)
    .filter((propertyItem) => propertyItem.id !== property.id)
    .slice(0, 3);

  elements.selectedPropertyContent.innerHTML = `
    <article class="selected-panel">
      <div class="detail-layout">
        <div class="detail-visual ${property.theme}" style="${getPropertyBackgroundStyle(property)}">
          <div class="detail-overlay">
            <div>
              <small>${property.city} | ${property.district}</small>
              <strong>${property.title}</strong>
            </div>
            <span class="status-pill status-pill--${property.status}">${getStatusLabel(property.status)}</span>
          </div>
        </div>

        <div class="detail-body">
          <div class="selected-header">
            <div>
              <h3>${property.title}</h3>
              <div class="detail-meta">
                <p>${property.address}</p>
                <p>Listed ${formatDate(property.listedDate)} by ${property.agent}</p>
              </div>
            </div>

            <div class="selected-price">
              <strong>${getDisplayPrice(property)}</strong>
              <button class="secondary-btn" type="button" data-selected-favorite="${property.id}">
                ${state.favorites.has(property.id) ? "Remove Favorite" : "Save Favorite"}
              </button>
            </div>
          </div>

          <div class="detail-highlights">
            <div class="highlight-box"><span>Bedrooms</span><strong>${property.bedrooms}</strong></div>
            <div class="highlight-box"><span>Bathrooms</span><strong>${property.bathrooms}</strong></div>
            <div class="highlight-box"><span>Area</span><strong>${property.area} sq m</strong></div>
            <div class="highlight-box"><span>Type</span><strong>${property.type}</strong></div>
          </div>

          <p class="selected-description">${property.description}</p>

          <div class="detail-panels">
            <div class="info-card">
              <h4>Amenities</h4>
              <div class="amenities-grid">
                ${property.amenities.map((amenity) => `<span class="amenity-chip">${amenity}</span>`).join("")}
              </div>
            </div>

            <div class="info-card">
              <h4>Listing Journey</h4>
              ${property.timeline
                .map(
                  (item) => `
                    <div class="timeline-item">
                      <div class="timeline-copy">
                        <strong>${item.title}</strong>
                        <small>${formatDate(item.date)}</small>
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
                      .map((item) => `<button class="chip" type="button" data-view-id="${item.id}">${item.title}</button>`)
                      .join("")}
                  </div>
                </div>
              `
              : ""
          }

          <div class="detail-forms">
            <form id="inquiryForm" class="detail-form">
              <h4>Book a Viewing</h4>
              <input type="hidden" name="propertyId" value="${property.id}">
              <label class="field">
                <span>Your Name</span>
                <input name="name" type="text" placeholder="Enter your full name" required>
              </label>
              <label class="field">
                <span>Email Address</span>
                <input name="email" type="email" placeholder="Enter your email" required>
              </label>
              <label class="field">
                <span>Message</span>
                <textarea name="message" placeholder="Tell the agent what you want to know" required></textarea>
              </label>
              <button class="primary-btn full-width" type="submit">Send Request</button>
              <p id="formMessage" class="inline-message"></p>
            </form>

            <div class="detail-form">
              <h4>Agent Summary</h4>
              <p class="selected-description">
                ${property.agent} is handling this listing. This panel helps the project feel complete by giving
                the user a realistic next step after they inspect the house details.
              </p>
              <div class="chip-row">
                <span class="chip">${property.city}</span>
                <span class="chip">${property.type}</span>
                <span class="chip">${getStatusLabel(property.status)}</span>
              </div>
              <div class="summary-item">
                <span>Listing value</span>
                <strong>${getDisplayPrice(property)}</strong>
              </div>
              <div class="summary-item">
                <span>Closed revenue value</span>
                <strong>${property.revenueValue ? formatCurrency(property.revenueValue) : "Not closed yet"}</strong>
              </div>
              <div class="summary-item">
                <span>Deal date</span>
                <strong>${property.dealDate ? formatDate(property.dealDate) : "Still active"}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderDashboard() {
  const metrics = buildMetrics();

  const dashboardMetrics = [
    { label: "All Houses", value: metrics.totalHomes, note: "Complete inventory" },
    { label: "For Sale", value: metrics.forSale, note: "Available to buy" },
    { label: "For Rent", value: metrics.forRent, note: "Available to lease" },
    { label: "Sold", value: metrics.sold, note: "Closed sales" },
    { label: "Rented", value: metrics.rented, note: "Closed rental agreements" },
    { label: "Revenue", value: formatCompact(metrics.totalRevenue), note: "Sales plus annualized rent" }
  ];

  elements.metricsGrid.innerHTML = dashboardMetrics
    .map(
      (metric) => `
        <article class="metric-card">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
          <small>${metric.note}</small>
        </article>
      `
    )
    .join("");

  renderBarChart(elements.statusChart, buildStatusRows(metrics));
  renderBarChart(elements.cityChart, buildGroupedRows(state.properties, "city"));
  renderBarChart(elements.typeChart, buildGroupedRows(state.properties, "type"));

  elements.revenueChart.innerHTML = `
    <div class="summary-item"><span>Total revenue</span><strong>${formatCurrency(metrics.totalRevenue)}</strong></div>
    <div class="summary-item"><span>Revenue from sold homes</span><strong>${formatCurrency(metrics.saleRevenue)}</strong></div>
    <div class="summary-item"><span>Revenue from rented homes</span><strong>${formatCurrency(metrics.rentRevenue)}</strong></div>
    <div class="summary-item"><span>Average sold price</span><strong>${metrics.sold ? formatCurrency(metrics.saleRevenue / metrics.sold) : "No sales yet"}</strong></div>
    <div class="summary-item"><span>Average rent price</span><strong>${metrics.rented ? `${formatCurrency(metrics.monthlyRentedAverage)} / month` : "No rentals yet"}</strong></div>
    <div class="summary-item"><span>Conversion rate</span><strong>${metrics.conversionRate}%</strong></div>
  `;

  const activityItems = [...state.activity].sort((left, right) => right.date.localeCompare(left.date)).slice(0, 7);
  elements.activityList.innerHTML = activityItems.length
    ? activityItems
        .map(
          (item) => `
            <div class="feed-item">
              <strong>${item.title}</strong>
              <span>${item.meta}</span>
              <small>${formatDate(item.date)}</small>
            </div>
          `
        )
        .join("")
    : `
        <div class="feed-item">
          <strong>No recent activity</strong>
          <span>Dashboard actions will show here.</span>
        </div>
      `;

  const inboxItems = [...state.inquiries].sort((left, right) => right.date.localeCompare(left.date)).slice(0, 7);
  elements.inquiryList.innerHTML = inboxItems.length
    ? inboxItems
        .map(
          (inquiry) => `
            <div class="feed-item">
              <strong>${inquiry.name} about ${inquiry.propertyTitle}</strong>
              <span>${inquiry.message}</span>
              <small>${inquiry.email} | ${formatDate(inquiry.date)}</small>
            </div>
          `
        )
        .join("")
    : `
        <div class="feed-item">
          <strong>No viewing requests yet</strong>
          <span>Requests created from the detail section will appear here.</span>
        </div>
      `;
}

function renderBarChart(container, rows) {
  if (!rows.length) {
    container.innerHTML = `
      <div class="feed-item">
        <strong>No data available</strong>
        <span>Interacting with the app will generate more analytics.</span>
      </div>
    `;
    return;
  }

  const maxValue = Math.max(...rows.map((row) => row.value), 1);
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

function buildMetrics() {
  const soldItems = state.properties.filter((property) => property.status === "sold");
  const rentedItems = state.properties.filter((property) => property.status === "rented");
  const saleRevenue = soldItems.reduce((sum, property) => sum + property.revenueValue, 0);
  const rentRevenue = rentedItems.reduce((sum, property) => sum + property.revenueValue, 0);
  const totalRevenue = saleRevenue + rentRevenue;
  const closedDeals = soldItems.length + rentedItems.length;

  return {
    totalHomes: state.properties.length,
    forSale: state.properties.filter((property) => property.status === "for-sale").length,
    forRent: state.properties.filter((property) => property.status === "for-rent").length,
    sold: soldItems.length,
    rented: rentedItems.length,
    saleRevenue,
    rentRevenue,
    totalRevenue,
    closedDeals,
    conversionRate: state.properties.length ? Math.round((closedDeals / state.properties.length) * 100) : 0,
    monthlyRentedAverage: rentedItems.length
      ? Math.round(rentedItems.reduce((sum, property) => sum + property.price, 0) / rentedItems.length)
      : 0
  };
}

function buildStatusRows(metrics) {
  return [
    { label: "For Sale", value: metrics.forSale },
    { label: "For Rent", value: metrics.forRent },
    { label: "Sold", value: metrics.sold },
    { label: "Rented", value: metrics.rented }
  ];
}

function buildGroupedRows(items, key) {
  const groups = items.reduce((accumulator, item) => {
    accumulator[item[key]] = (accumulator[item[key]] || 0) + 1;
    return accumulator;
  }, {});

  return Object.entries(groups)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 6)
    .map(([label, value]) => ({ label, value }));
}

function getFilteredProperties() {
  const filtered = state.properties.filter((property) => {
    const matchesSearch =
      !state.filters.search ||
      [property.title, property.city, property.address, property.type, property.district]
        .join(" ")
        .toLowerCase()
        .includes(state.filters.search);

    const matchesStatus = state.filters.status === "all" || property.status === state.filters.status;
    const matchesCity = state.filters.city === "all" || property.city === state.filters.city;
    const matchesBedrooms =
      state.filters.bedrooms === "all" ||
      Number(state.filters.bedrooms) === property.bedrooms ||
      (state.filters.bedrooms === "5+" && property.bedrooms >= 5);

    const matchesPrice = matchesPriceRange(property, state.filters.price);

    return matchesSearch && matchesStatus && matchesCity && matchesBedrooms && matchesPrice;
  });

  return filtered.sort((left, right) => compareProperties(left, right, state.filters.sort));
}

function matchesPriceRange(property, filterValue) {
  if (filterValue === "all") {
    return true;
  }

  if (filterValue === "under-5000000") {
    return !isRentStatus(property.status) && property.price < 5000000;
  }

  if (filterValue === "5000000-9000000") {
    return !isRentStatus(property.status) && property.price >= 5000000 && property.price <= 9000000;
  }

  if (filterValue === "over-9000000") {
    return !isRentStatus(property.status) && property.price > 9000000;
  }

  if (filterValue === "under-40000") {
    return isRentStatus(property.status) && property.price < 40000;
  }

  if (filterValue === "over-40000") {
    return isRentStatus(property.status) && property.price >= 40000;
  }

  return true;
}

function compareProperties(left, right, sortBy) {
  if (sortBy === "price-high") {
    return right.price - left.price;
  }

  if (sortBy === "price-low") {
    return left.price - right.price;
  }

  if (sortBy === "size-high") {
    return right.area - left.area;
  }

  if (sortBy === "newest") {
    return right.listedDate.localeCompare(left.listedDate);
  }

  const leftScore = Number(left.featured) * 1000000000 + dateToSortableNumber(left.listedDate);
  const rightScore = Number(right.featured) * 1000000000 + dateToSortableNumber(right.listedDate);
  return rightScore - leftScore;
}

function ensureSelectedPropertyVisible() {
  const filteredProperties = getFilteredProperties();
  const currentVisible = filteredProperties.some((property) => property.id === state.selectedPropertyId);

  if (!currentVisible) {
    state.selectedPropertyId = filteredProperties[0] ? filteredProperties[0].id : null;
  }
}

function setSelectedProperty(propertyId, shouldScroll) {
  state.selectedPropertyId = propertyId;
  rememberRecentView(propertyId);
  populatePropertySelect();
  renderPropertyGrid();
  renderSelectedProperty();

  if (shouldScroll) {
    const detailSection = document.getElementById("selectedProperty");
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function toggleFavorite(propertyId) {
  if (state.favorites.has(propertyId)) {
    state.favorites.delete(propertyId);
  } else {
    state.favorites.add(propertyId);
  }

  persistFavorites();
  renderPropertyGrid();
  renderSelectedProperty();
  renderHeroStats();
  elements.favoriteCount.textContent = state.favorites.size;
}

function rememberRecentView(propertyId) {
  state.recentViews = [propertyId, ...state.recentViews.filter((id) => id !== propertyId)].slice(0, 5);
  persistRecentViews();
}

function populateCityFilter() {
  const cities = Array.from(new Set(state.properties.map((property) => property.city))).sort();
  elements.cityFilter.innerHTML = `
    <option value="all">All cities</option>
    ${cities.map((city) => `<option value="${city}">${city}</option>`).join("")}
  `;
}

function populatePropertySelect() {
  elements.propertySelect.innerHTML = state.properties
    .map((property) => `<option value="${property.id}">${property.title}</option>`)
    .join("");

  if (state.selectedPropertyId) {
    elements.propertySelect.value = state.selectedPropertyId;
    const selected = state.properties.find((property) => property.id === state.selectedPropertyId);
    if (selected) {
      elements.adminStatus.value = selected.status;
    }
  }
}

function pushActivity(item) {
  state.activity.unshift({
    id: createId("act"),
    title: item.title,
    meta: item.meta,
    date: item.date
  });

  state.activity = state.activity.slice(0, 15);
  persistActivity();
}

function calculateRevenueForStatus(property, status) {
  if (status === "sold") {
    return property.price;
  }

  if (status === "rented") {
    return property.price * 12;
  }

  return 0;
}

function getPropertyBackgroundStyle(property) {
  const imagePath = getPropertyImagePath(property);

  if (!imagePath) {
    return "";
  }

  return [
    "background-image: linear-gradient(180deg, rgba(11, 23, 34, 0.08) 0%, rgba(11, 23, 34, 0.24) 44%, rgba(11, 23, 34, 0.68) 100%), url('" + imagePath + "')",
    "background-size: cover",
    "background-position: center",
    "background-repeat: no-repeat"
  ].join("; ");
}

function getPropertyImagePath(property) {
  const match = String(property.id || "").match(/(\d+)$/);
  if (!match) {
    return "";
  }

  return `./img/${Number(match[1])}.jpg`;
}

function getDisplayPrice(property) {
  if (property.status === "sold") {
    return `Sold for ${formatCurrency(property.price)}`;
  }

  if (property.status === "rented") {
    return `Rented at ${formatCurrency(property.price)} / month`;
  }

  if (property.pricingModel === "monthly") {
    return `${formatCurrency(property.price)} / month`;
  }

  return formatCurrency(property.price);
}

function getStatusLabel(status) {
  const labels = {
    "for-sale": "For Sale",
    "for-rent": "For Rent",
    sold: "Sold",
    rented: "Rented"
  };

  return labels[status] || status;
}

function isRentStatus(status) {
  return status === "for-rent" || status === "rented";
}

function isClosedStatus(status) {
  return status === "sold" || status === "rented";
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0
  }).format(value);
}

function formatCompact(value) {
  if (value >= 1000000) {
    return `EGP ${(value / 1000000).toFixed(value >= 10000000 ? 1 : 2).replace(/\.0$/, "")}M`;
  }

  if (value >= 1000) {
    return `EGP ${(value / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  }

  return formatCurrency(value);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}

function dateToSortableNumber(value) {
  return Number(value.replaceAll("-", ""));
}

function loadState(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : clone(fallback);
  } catch (error) {
    return clone(fallback);
  }
}

function persistProperties() {
  saveState(STORAGE_KEYS.properties, state.properties);
}

function persistInquiries() {
  saveState(STORAGE_KEYS.inquiries, state.inquiries);
}

function persistFavorites() {
  saveState(STORAGE_KEYS.favorites, Array.from(state.favorites));
}

function persistRecentViews() {
  saveState(STORAGE_KEYS.recentViews, state.recentViews);
}

function persistActivity() {
  saveState(STORAGE_KEYS.activity, state.activity);
}

function saveState(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return;
  }
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}
