import { precacheAndRoute } from 'workbox-precaching'

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate' && event.request.url !== location.origin) {
    event.respondWith(async function() {
      try {
        return await fetch(event.request);
      } catch (err) {
        return caches.match('offline.html');
      }
    }());
  } else {
    // For non-navigation requests (e.g., images), serve from cache if available
    event.respondWith(
        caches.match(event.request).then((response) => {
          return response || fetch(event.request);
        })
    );
  }
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('offline-cache').then((cache) => {
      return cache.addAll([
          'offline.html',
          'favicon.png',
          'loading.gif',
          'Hearthstone-Logo.png'
      ]);
    })
  );
});
precacheAndRoute(self.__WB_MANIFEST)