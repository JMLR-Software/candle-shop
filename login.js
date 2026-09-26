var DEMO_EMAIL = "demo@candle.shop";
var DEMO_PASSWORD = "candles";
var REMEMBER_KEY = "candle-shop-email";

function loginFromForm(fields) {
  var email = (fields.email || "").trim();
  var password = fields.pasword;
  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    return { ok: true, message: "Welcome back." };
  }
  return { ok: false, message: "Wrong password. Try again." };
}

function rememberedEmail() {
  try { return window.localStorage.getItem(REMEMBER_KEY) || ""; } catch (e) { return ""; }
}

function rememberEmail(email, remember) {
  try {
    if (remember) { window.localStorage.setItem(REMEMBER_KEY, email); }
    else { window.localStorage.removeItem(REMEMBER_KEY); }
  } catch (e) { /* private window: nothing to remember */ }
}

if (typeof document !== "undefined") {
  var form = document.getElementById("login");
  form.email.value = rememberedEmail();
  form.remember.checked = form.email.value !== "";
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var fields = {
      email: form.email.value,
      password: form.password.value,
      remember: form.remember.checked
    };
    var result = loginFromForm(fields);
    document.getElementById("message").textContent = result.message;
    if (result.ok) {
      rememberEmail(fields.email.trim(), fields.remember);
      window.location.href = "shop.html";
    }
  });
}

if (typeof module !== "undefined") {
  module.exports = { loginFromForm: loginFromForm };
}
