
const VERSION = "v1";

self.addEventListener('install', event => {
  event.waitUntil(precache())
})
//self es como el this pero de los service workers

self.addEventListener('fetch', event => {
  const request = event.request;
  //get 
  if(request.method !== "GET") {
    return;
  }
  // buscar en caché
  event.respondWith(cachedResponse(request))

  // Actualizar el caché
  event.waitUntil(updateCache(request))
});

async function precache() {
  const cache = await caches.open(VERSION)
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',
  ])
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  cache.put(request, response);
}