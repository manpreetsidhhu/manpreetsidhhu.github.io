// Define cache name and version
const CACHE_NAME = "portfolio-cache-v1"; // Change the name as needed for versioning
const urlsToCache = [
  "/", // Cache the root (index.html)
  "/index.html",
  "/hero.css",
  "/loader.css",
  "/main.css",
  "/manifest.json",
  "/css/about.css",
  "/css/alert.css",
  "/css/contact.css",
  "/css/footer.css",
  "/css/form.css",
  "/css/navs.css",
  "/css/projects.css",
  "/css/theme.css",
  "/media/mO.png",
  "/media/mss4.jpg",
  "/media/setup1.svg",
  "/media/wavybg.jpg",
  "/media/webicon.png",
];

// Install the service worker
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate the service worker and clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Intercept fetch requests and serve cached files if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return the cached response if found, else fetch from network
      return (
        response ||
        fetch(event.request).then((networkResponse) => {
          // Optionally, cache new files from the network dynamically
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
      );
    })
  );
});
