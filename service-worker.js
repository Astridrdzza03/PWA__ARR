const CACHE_NAME = "mi-portafolio-cache-v1";
const urlsToCache = [
    "index.html",
    "styles.css",
    "script.js",
    "manifest.json",
    "./img/icono2.png",
    "./img/icono.png",
    "./img/icono.jpeg",
    "./img/dark.jpeg",
    "./img/foto.jpeg",
    "./img/hidro.jpeg"
];


self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting(); // Fuerza la activación inmediata
});


self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
