// Footer year and CTA click tracking
(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  document.querySelectorAll("[data-cta]").forEach(function (el) {
    el.addEventListener("click", function () {
      var name = el.getAttribute("data-cta");
      if (name && typeof window.pipevolveTrack === "function") {
        window.pipevolveTrack("cta", name);
      }
    });
  });
})();
