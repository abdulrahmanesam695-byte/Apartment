document.addEventListener("DOMContentLoaded", () => {
  const store = window.CasaVistaStore;
  const site = window.CasaVistaSite;

  const session = site.hydratePage({ active: "login" });
  const nextPath = new URLSearchParams(window.location.search).get("next") || "index.html";

  const elements = {
    form: document.getElementById("loginForm"),
    banner: document.getElementById("loginBanner"),
    registerButton: document.getElementById("registerButton"),
    demoLoginButton: document.getElementById("demoLoginButton")
  };

  if (!elements.form || !elements.banner) {
    return;
  }

  if (session) {
    showBanner(`Already signed in as ${session.name}. Redirecting to your next page...`);
    window.setTimeout(() => {
      window.location.href = nextPath;
    }, 800);
  }

  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
      const user = store.login(readPayload());
      showBanner(`Welcome back, ${user.name}. Redirecting...`);
      window.setTimeout(() => {
        window.location.href = nextPath;
      }, 500);
    } catch (error) {
      showBanner(error.message, true);
    }
  });

  elements.registerButton.addEventListener("click", () => {
    try {
      const user = store.register(readPayload());
      showBanner(`Account created for ${user.name}. Redirecting...`);
      window.setTimeout(() => {
        window.location.href = nextPath;
      }, 500);
    } catch (error) {
      showBanner(error.message, true);
    }
  });

  elements.demoLoginButton.addEventListener("click", () => {
    const demoAccount = store.demoAccounts[0];
    const nameField = elements.form.elements.namedItem("name");
    const emailField = elements.form.elements.namedItem("email");
    const passwordField = elements.form.elements.namedItem("password");

    nameField.value = demoAccount.name;
    emailField.value = demoAccount.email;
    passwordField.value = "demo123";

    try {
      const user = store.login(readPayload());
      showBanner(`Logged in with the demo account as ${user.name}.`);
      window.setTimeout(() => {
        window.location.href = nextPath;
      }, 500);
    } catch (error) {
      showBanner(error.message, true);
    }
  });

  function readPayload() {
    const formData = new FormData(elements.form);

    return {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      password: String(formData.get("password") || "").trim()
    };
  }

  function showBanner(message, isWarning) {
    elements.banner.hidden = false;
    elements.banner.classList.toggle("is-warning", Boolean(isWarning));
    elements.banner.textContent = message;
  }
});
