(function attachCasaVistaStore(global) {
  const STORAGE_KEYS = {
    properties: "casavista-properties-v1",
    inquiries: "casavista-inquiries-v1",
    favorites: "casavista-favorites-v1",
    recentViews: "casavista-recent-v1",
    activity: "casavista-activity-v1",
    users: "casavista-users-v1",
    session: "casavista-session-v1"
  };

  const THEMES = [
    "theme-sunset",
    "theme-lagoon",
    "theme-forest",
    "theme-sky",
    "theme-dusk",
    "theme-sand"
  ];

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
    },
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
      propertyId: "home-06",
      propertyTitle: "Downtown Creative Loft",
      name: "Sara Adel",
      email: "sara@example.com",
      message: "Please share whether remote viewings are still available.",
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

  const DEFAULT_USERS = [
    {
      id: "usr-demo-buyer",
      name: "Demo Buyer",
      email: "demo@casavista.com",
      password: "demo123",
      role: "buyer"
    },
    {
      id: "usr-demo-seller",
      name: "Demo Seller",
      email: "seller@casavista.com",
      password: "seller123",
      role: "seller"
    }
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function loadState(key, fallback) {
    try {
      const raw = global.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : clone(fallback);
    } catch (error) {
      return clone(fallback);
    }
  }

  function saveState(key, value) {
    try {
      global.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return;
    }
  }

  function clearState(key) {
    try {
      global.localStorage.removeItem(key);
    } catch (error) {
      return;
    }
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function todayIso() {
    const now = new Date();
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  }

  function createId(prefix) {
    return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }

  function getProperties() {
    return loadState(STORAGE_KEYS.properties, DEFAULT_PROPERTIES);
  }

  function setProperties(properties) {
    saveState(STORAGE_KEYS.properties, properties);
  }

  function getPropertyById(propertyId) {
    return getProperties().find((property) => property.id === propertyId) || null;
  }

  function getInquiries() {
    return loadState(STORAGE_KEYS.inquiries, DEFAULT_INQUIRIES);
  }

  function setInquiries(inquiries) {
    saveState(STORAGE_KEYS.inquiries, inquiries);
  }

  function getFavorites() {
    return loadState(STORAGE_KEYS.favorites, []);
  }

  function setFavorites(favorites) {
    saveState(STORAGE_KEYS.favorites, Array.from(new Set(favorites)));
  }

  function getRecentViews() {
    return loadState(STORAGE_KEYS.recentViews, []);
  }

  function setRecentViews(recentViews) {
    saveState(STORAGE_KEYS.recentViews, recentViews);
  }

  function getActivity() {
    return loadState(STORAGE_KEYS.activity, DEFAULT_ACTIVITY);
  }

  function setActivity(activity) {
    saveState(STORAGE_KEYS.activity, activity);
  }

  function toSessionUser(user) {
    const { password, ...safeUser } = user;
    return safeUser;
  }

  function getUsers() {
    const loadedUsers = loadState(STORAGE_KEYS.users, DEFAULT_USERS);
    const safeUsers = Array.isArray(loadedUsers) ? loadedUsers.slice() : clone(DEFAULT_USERS);

    DEFAULT_USERS.forEach((demoUser) => {
      if (!safeUsers.some((user) => user.email === demoUser.email)) {
        safeUsers.push(clone(demoUser));
      }
    });

    if (safeUsers.length !== loadedUsers.length) {
      setUsers(safeUsers);
    }

    return safeUsers;
  }

  function setUsers(users) {
    saveState(STORAGE_KEYS.users, users);
  }

  function getSession() {
    return loadState(STORAGE_KEYS.session, null);
  }

  function setSession(user) {
    saveState(STORAGE_KEYS.session, user ? toSessionUser(user) : null);
  }

  function logout() {
    clearState(STORAGE_KEYS.session);
  }

  function getCurrentRoute() {
    const path = String(global.location.pathname || "").split(/[\\/]/).pop() || "index.html";
    return `${path}${global.location.search || ""}${global.location.hash || ""}`;
  }

  function redirectToLogin(nextPath) {
    const next = nextPath || getCurrentRoute();
    global.location.href = `login.html?next=${encodeURIComponent(next)}`;
  }

  function requireAuth(nextPath) {
    const session = getSession();
    if (session) {
      return session;
    }

    redirectToLogin(nextPath);
    return null;
  }

  function upsertUser(user) {
    const users = getUsers();
    const existingIndex = users.findIndex((item) => item.email === user.email);

    if (existingIndex >= 0) {
      users[existingIndex] = { ...users[existingIndex], ...user };
    } else {
      users.unshift(user);
    }

    setUsers(users);
    return user;
  }

  function register(payload) {
    const email = String(payload.email || "").trim().toLowerCase();
    const password = String(payload.password || "").trim();
    const name = String(payload.name || "").trim();

    if (!name) {
      throw new Error("Name is required.");
    }

    if (!email) {
      throw new Error("Email is required.");
    }

    if (!password) {
      throw new Error("Password is required.");
    }

    const existingUser = getUsers().find((user) => user.email === email);
    if (existingUser) {
      throw new Error("This email is already registered. Please log in.");
    }

    const user = {
      id: createId("usr"),
      name,
      email,
      password,
      role: "member",
      lastLogin: todayIso()
    };

    upsertUser(user);
    setSession(user);
    return toSessionUser(user);
  }

  function login(payload) {
    const email = String(payload.email || "").trim().toLowerCase();
    const password = String(payload.password || "").trim();

    if (!email) {
      throw new Error("Email is required.");
    }

    if (!password) {
      throw new Error("Password is required.");
    }

    const existingUser = getUsers().find((user) => user.email === email);

    if (!existingUser) {
      throw new Error("Account not found. Please register first or use the demo account.");
    }

    if (existingUser.password && existingUser.password !== password) {
      throw new Error("Incorrect password.");
    }

    const safeName = String(payload.name || existingUser.name || email.split("@")[0] || "Guest").trim();
    const nextUser = {
      ...existingUser,
      name: safeName || existingUser.name,
      lastLogin: todayIso()
    };

    upsertUser(nextUser);
    setSession(nextUser);
    return toSessionUser(nextUser);
  }

  function pushActivity(item) {
    const activity = getActivity();

    activity.unshift({
      id: createId("act"),
      title: item.title,
      meta: item.meta,
      date: item.date || todayIso()
    });

    setActivity(activity.slice(0, 20));
  }

  function parseAmenities(value) {
    const source = Array.isArray(value) ? value.join(",") : String(value || "");
    const items = source
      .split(/[,\n]/)
      .map((item) => item.trim())
      .filter(Boolean);

    return items.length ? items : ["Security", "Parking", "Prime location"];
  }

  function normalizeText(value, fallback) {
    const safeValue = String(value || "").trim();
    return safeValue || fallback;
  }

  function clampNumber(value, min, max, fallback) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) {
      return fallback;
    }

    return Math.min(max, Math.max(min, Math.round(parsed)));
  }

  function pickTheme(type, preferredTheme) {
    if (THEMES.includes(preferredTheme)) {
      return preferredTheme;
    }

    const map = {
      Villa: "theme-sunset",
      Duplex: "theme-sky",
      Chalet: "theme-lagoon",
      Apartment: "theme-sand",
      Townhouse: "theme-forest",
      Loft: "theme-dusk",
      Penthouse: "theme-sky"
    };

    return map[type] || THEMES[getProperties().length % THEMES.length];
  }

  function createListing(payload, owner) {
    const properties = getProperties();
    const session = owner || getSession() || {};
    const intent = payload.intent === "rent" ? "rent" : "sell";

    const property = {
      id: createId("home"),
      title: normalizeText(payload.title, "Untitled Listing"),
      city: normalizeText(payload.city, "Cairo"),
      district: normalizeText(payload.district, "Prime District"),
      address: normalizeText(payload.address, "Address to be confirmed"),
      status: intent === "rent" ? "for-rent" : "for-sale",
      type: normalizeText(payload.type, "Apartment"),
      bedrooms: clampNumber(payload.bedrooms, 0, 12, 3),
      bathrooms: clampNumber(payload.bathrooms, 1, 12, 2),
      area: clampNumber(payload.area, 30, 5000, 160),
      price: clampNumber(payload.price, 1, Number.MAX_SAFE_INTEGER, 5000000),
      pricingModel: intent === "rent" ? "monthly" : "total",
      featured: Boolean(payload.featured),
      agent: session.name || normalizeText(payload.agent, "CasaVista Team"),
      ownerId: session.id || "",
      listedDate: todayIso(),
      dealDate: "",
      revenueValue: 0,
      theme: pickTheme(payload.type, payload.theme),
      tagline: normalizeText(
        payload.tagline,
        `Fresh ${normalizeText(payload.type, "property").toLowerCase()} ready for ${intent}.`
      ),
      description: normalizeText(
        payload.description,
        "A new listing added through the seller page with its own dedicated frontend flow."
      ),
      amenities: parseAmenities(payload.amenities),
      timeline: [
        { title: "Listing created from seller page", date: todayIso() },
        { title: "Marketplace inventory refreshed", date: todayIso() }
      ]
    };

    properties.unshift(property);
    setProperties(properties);

    pushActivity({
      title: `${property.title} was listed`,
      meta: `${property.agent} added a new ${property.type.toLowerCase()} for ${intent}.`,
      date: todayIso()
    });

    return property;
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

  function isRentStatus(status) {
    return status === "for-rent" || status === "rented";
  }

  function isClosedStatus(status) {
    return status === "sold" || status === "rented";
  }

  function updatePropertyStatus(propertyId, newStatus, actorName) {
    const properties = getProperties();
    const propertyIndex = properties.findIndex((property) => property.id === propertyId);

    if (propertyIndex < 0) {
      throw new Error("Property not found.");
    }

    const property = { ...properties[propertyIndex] };
    property.status = newStatus;
    property.pricingModel = isRentStatus(newStatus) ? "monthly" : "total";
    property.dealDate = isClosedStatus(newStatus) ? todayIso() : "";
    property.revenueValue = calculateRevenueForStatus(property, newStatus);
    property.timeline = [
      { title: `Status changed to ${getStatusLabel(newStatus)}`, date: todayIso() },
      ...(property.timeline || [])
    ].slice(0, 6);

    properties[propertyIndex] = property;
    setProperties(properties);

    pushActivity({
      title: `${property.title} changed to ${getStatusLabel(newStatus)}`,
      meta: `${actorName || "A team member"} updated this listing.`,
      date: todayIso()
    });

    return property;
  }

  function completeTransaction(propertyId, actorName) {
    const property = getPropertyById(propertyId);

    if (!property) {
      throw new Error("Property not found.");
    }

    if (property.status === "sold" || property.status === "rented") {
      return property;
    }

    const nextStatus = property.status === "for-rent" ? "rented" : "sold";
    return updatePropertyStatus(propertyId, nextStatus, actorName || "Marketplace buyer");
  }

  function addInquiry(propertyId, payload) {
    const property = getPropertyById(propertyId);
    if (!property) {
      throw new Error("Property not found.");
    }

    const session = getSession();
    const inquiry = {
      id: createId("inq"),
      propertyId,
      propertyTitle: property.title,
      name: normalizeText(payload.name, session ? session.name : ""),
      email: normalizeText(payload.email, session ? session.email : ""),
      message: normalizeText(payload.message, ""),
      date: todayIso()
    };

    if (!inquiry.name || !inquiry.email || !inquiry.message) {
      throw new Error("Please complete your name, email, and message.");
    }

    const inquiries = getInquiries();
    inquiries.unshift(inquiry);
    setInquiries(inquiries);

    pushActivity({
      title: `New inquiry for ${property.title}`,
      meta: `${inquiry.name} asked to connect with the seller.`,
      date: inquiry.date
    });

    return inquiry;
  }

  function toggleFavorite(propertyId) {
    const favorites = getFavorites();
    const nextFavorites = favorites.includes(propertyId)
      ? favorites.filter((id) => id !== propertyId)
      : favorites.concat(propertyId);

    setFavorites(nextFavorites);

    return {
      favorites: nextFavorites,
      isFavorite: nextFavorites.includes(propertyId)
    };
  }

  function rememberRecentView(propertyId) {
    const recentViews = getRecentViews();
    const nextViews = [propertyId].concat(recentViews.filter((id) => id !== propertyId)).slice(0, 6);
    setRecentViews(nextViews);
    return nextViews;
  }

  function getRecentViewProperties(currentPropertyId, limit) {
    return getRecentViews()
      .map((propertyId) => getPropertyById(propertyId))
      .filter(Boolean)
      .filter((property) => property.id !== currentPropertyId)
      .slice(0, limit || 4);
  }

  function getRecentActivity(limit) {
    return getActivity()
      .slice()
      .sort((left, right) => right.date.localeCompare(left.date))
      .slice(0, limit || 8);
  }

  function getRecentInquiries(limit) {
    return getInquiries()
      .slice()
      .sort((left, right) => right.date.localeCompare(left.date))
      .slice(0, limit || 8);
  }

  function getLatestProperties(limit) {
    return getProperties()
      .slice()
      .sort((left, right) => compareProperties(left, right, "newest"))
      .slice(0, limit || 6);
  }

  function getFeaturedProperties(limit) {
    return getProperties()
      .slice()
      .sort((left, right) => compareProperties(left, right, "featured"))
      .slice(0, limit || 4);
  }

  function getUserListings(user) {
    if (!user) {
      return [];
    }

    return getProperties()
      .filter((property) => property.ownerId === user.id || property.agent === user.name)
      .sort((left, right) => compareProperties(left, right, "newest"));
  }

  function getCities() {
    return Array.from(new Set(getProperties().map((property) => property.city))).sort();
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

    const leftScore = Number(Boolean(left.featured)) * 1000000000 + Number(left.listedDate.replaceAll("-", ""));
    const rightScore = Number(Boolean(right.featured)) * 1000000000 + Number(right.listedDate.replaceAll("-", ""));
    return rightScore - leftScore;
  }

  function getFilteredProperties(filters) {
    const state = {
      search: String(filters.search || "").trim().toLowerCase(),
      status: filters.status || "all",
      city: filters.city || "all",
      bedrooms: filters.bedrooms || "all",
      price: filters.price || "all",
      sort: filters.sort || "featured"
    };

    return getProperties()
      .filter((property) => {
        const matchesSearch =
          !state.search ||
          [property.title, property.city, property.address, property.type, property.district]
            .join(" ")
            .toLowerCase()
            .includes(state.search);

        const matchesStatus = state.status === "all" || property.status === state.status;
        const matchesCity = state.city === "all" || property.city === state.city;
        const matchesBedrooms =
          state.bedrooms === "all" ||
          Number(state.bedrooms) === property.bedrooms ||
          (state.bedrooms === "5+" && property.bedrooms >= 5);
        const matchesPrice = matchesPriceRange(property, state.price);

        return matchesSearch && matchesStatus && matchesCity && matchesBedrooms && matchesPrice;
      })
      .sort((left, right) => compareProperties(left, right, state.sort));
  }

  function getMetrics() {
    const properties = getProperties();
    const soldItems = properties.filter((property) => property.status === "sold");
    const rentedItems = properties.filter((property) => property.status === "rented");
    const saleRevenue = soldItems.reduce((sum, property) => sum + Number(property.revenueValue || 0), 0);
    const rentRevenue = rentedItems.reduce((sum, property) => sum + Number(property.revenueValue || 0), 0);
    const totalRevenue = saleRevenue + rentRevenue;
    const closedDeals = soldItems.length + rentedItems.length;

    return {
      totalHomes: properties.length,
      forSale: properties.filter((property) => property.status === "for-sale").length,
      forRent: properties.filter((property) => property.status === "for-rent").length,
      sold: soldItems.length,
      rented: rentedItems.length,
      saleRevenue,
      rentRevenue,
      totalRevenue,
      closedDeals,
      leads: getInquiries().length,
      favorites: getFavorites().length,
      conversionRate: properties.length ? Math.round((closedDeals / properties.length) * 100) : 0,
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

  function buildGroupedRows(items, key, limit) {
    const groups = items.reduce((accumulator, item) => {
      const label = item[key] || "Unknown";
      accumulator[label] = (accumulator[label] || 0) + 1;
      return accumulator;
    }, {});

    return Object.entries(groups)
      .sort((left, right) => right[1] - left[1])
      .slice(0, limit || 6)
      .map(([label, value]) => ({ label, value }));
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

  function formatCurrency(value) {
    return new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0
    }).format(value || 0);
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
    }).format(new Date(`${value}T00:00:00`));
  }

  function getPropertyImagePath(property) {
    const match = String(property.id || "").match(/(\d+)$/);
    if (!match) {
      return "";
    }

    const currentPath = String(global.location.pathname || "");
    const assetPrefix = currentPath.includes("/html/") || currentPath.includes("\\html\\") ? "../" : "";
    return `${assetPrefix}img/${Number(match[1])}.jpg`;
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

  global.CasaVistaStore = {
    STORAGE_KEYS,
    THEMES,
    demoAccounts: DEFAULT_USERS.map((user) => toSessionUser(user)),
    todayIso,
    createId,
    getCurrentRoute,
    redirectToLogin,
    requireAuth,
    register,
    login,
    logout,
    getSession,
    getUsers,
    getProperties,
    getPropertyById,
    getFeaturedProperties,
    getLatestProperties,
    getUserListings,
    getFilteredProperties,
    getCities,
    getInquiries,
    getRecentInquiries,
    getFavorites,
    toggleFavorite,
    getRecentViews,
    rememberRecentView,
    getRecentViewProperties,
    getActivity,
    getRecentActivity,
    pushActivity,
    createListing,
    updatePropertyStatus,
    completeTransaction,
    addInquiry,
    getMetrics,
    buildStatusRows,
    buildGroupedRows,
    getStatusLabel,
    formatCurrency,
    formatCompact,
    formatDate,
    getDisplayPrice,
    getPropertyImagePath,
    getPropertyBackgroundStyle,
    isRentStatus,
    isClosedStatus
  };
})(window);
