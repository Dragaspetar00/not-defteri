const CACHE = 'not-defteri-v3';
const TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://dummyimage.com/192x192/ffffff/000000.png&text=ND',
  'https://dummyimage.com/300x300/ffffff/000000.png&text=Not+Defteri'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});