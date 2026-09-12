// ==========================================
// VernacularLearn - SIH26042
// Offline Service Worker
// ==========================================

const CACHE_NAME = "vernacularlearn-v2";

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
    "./offline.html",

    "./style.css",
    "./app.js",

    "./manifest.json"
];


// ==========================================
// INSTALL
// ==========================================

self.addEventListener("install", function (event) {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(function (cache) {

                return cache.addAll(APP_FILES);

            })

    );

    self.skipWaiting();
});


// ==========================================
// ACTIVATE
// ==========================================

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


// ==========================================
// FETCH
// ==========================================

self.addEventListener("fetch", function (event) {

    event.respondWith(

        caches.match(event.request)
            .then(function (cachedResponse) {

                // If file is already cached
                if (cachedResponse) {

                    return cachedResponse;

                }

                // Otherwise try internet
                return fetch(event.request)
                    .catch(function () {

                        // If internet is unavailable,
                        // show offline page
                        return caches.match("./offline.html");

                    });

            })

    );

});
