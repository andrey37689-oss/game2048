self.addEventListener('install', e => {
  e.waitUntil(caches.open('2048-v1').then(c => c.addAll(['2048.html', 'manifest.webmanifest', 'icon.svg'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
