// Shows which commit this page was published from. The publish workflow replaces the
// two placeholders; a copy opened straight from the folder keeps "your copy".
(function () {
  var versionMeta = document.querySelector('meta[name="shop-version"]');
  var messageMeta = document.querySelector('meta[name="shop-message"]');
  if (!versionMeta || !messageMeta) { return; }
  var version = versionMeta.getAttribute("content");
  if (!version || version.indexOf("__") === 0) { return; }
  var span = document.getElementById("version");
  if (span) { span.textContent = version + ": " + messageMeta.getAttribute("content"); }
  if (window.location.protocol === "file:") { return; }
  var url = new URL(window.location.href);
  url.searchParams.set("version", version);
  window.history.replaceState(null, "", url.toString());
})();
