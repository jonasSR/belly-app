self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("belly-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icon192.png",
        "./icon512.png",
        "./success.wav"
        ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
