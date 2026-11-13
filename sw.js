const CACHE_NAME = 'waywise-v2';
const ASSETS = ['/WayWise/', '/WayWise/index.html', '/WayWise/manifest.json', '/WayWise/icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
