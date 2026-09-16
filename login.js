var DEMO_EMAIL = "demo@candle.shop";
var DEMO_PASSWORD = "candles";

function loginFromForm(fields) {
  if (fields.email === DEMO_EMAIL && fields.password === DEMO_PASSWORD) {
    return { ok: true, message: "Welcome back." };
  }
  return { ok: false, message: "Wrong password. Try again." };
}

if (typeof document !== "undefined") {
  var form = document.getElementById("login");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var fields = { email: form.email.value, password: form.password.value };
    var result = loginFromForm(fields);
    document.getElementById("message").textContent = result.message;
    if (result.ok) {
      window.location.href = "shop.html";
    }
  });
}

if (typeof module !== "undefined") {
  module.exports = { loginFromForm: loginFromForm };
}
