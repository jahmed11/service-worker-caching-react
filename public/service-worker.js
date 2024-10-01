self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing Service Worker ...", event);
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating Service Worker ...", event);
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("recipes")) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((res) => {
          return caches.open("recipes-cache").then((cache) => {
            cache.put(event.request, res.clone());
            return res;
          });
        });
      })
    );
  }
});
