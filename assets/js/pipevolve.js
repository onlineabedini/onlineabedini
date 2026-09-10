// Pipevolve visit, bounce, and custom event tracking
(function () {
  var url = "http://localhost:3001/api/projects/ab656aee-ada5-49fe-8bd8-ea92b56be5ef/stats";
  var key = "pv_3Hy2CzGq5yE8awepGH_CYTLFXLeAXknr";
  var path = location.pathname || "/";
  var device = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "phone" : "desktop";
  var started = Date.now();

  function post(body) {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Pipevolve-Key": key },
      body: JSON.stringify(body),
      keepalive: true
    }).catch(function () {});
  }

  window.pipevolveTrack = function (event, name) {
    post({ event: event, name: name || "", path: path, device: device });
  };

  post({ event: "visit", path: path, device: device });

  window.addEventListener("pagehide", function () {
    if (Date.now() - started < 8000) post({ event: "bounce", path: path, device: device });
  });
})();
