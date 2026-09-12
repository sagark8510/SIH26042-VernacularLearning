// ==========================================
// VernacularLearn - SIH26042
// Offline Service Worker
// ==========================================

const CACHE_NAME = "vernacularlearn-v1";

const APP_FILES = [
    "./",
    "./index.html",
    "./language.html",
    "./lessons.html",
    "./lesson.html",
    "./translator.html",
    "./ai-assistant.html",
    "./voice-learning.html",
    "./worksheet.html",
    "./flashcards.html",
    "./practice.html",
    "./progress.html",
    "./dashboard.html",

    "./style.css",
    "./app.js",

    "./manifest.json"
];


// Install Service Worker
self.addEventListener("install", function (event) {

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(APP_FILES);
            })
    );

    self.skipWaiting();
});


// Activate Service Worker
self.addEventListener("activate", function (event) {

    event.waitUntil(
        caches.keys().then(function (cacheNames) {

            return Promise.all(
                cacheNames.map(function (cacheName) {

                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }

                })
            );

        })
    );

    self.clients.claim();
});


// Fetch cached files when offline
self.addEventListener("fetch", function (event) {

    event.respondWith(

        caches.match(event.request)
            .then(function (cachedResponse) {

                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request)
                    .catch(function () {

                        return caches.match("./index.html");

                    });

            })

    );

});
