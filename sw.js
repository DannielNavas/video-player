const VERSION = "v1";
self.addEventListener("install", (event) => {
  //TODO: lo que va a guardar en cache
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  //TODO: extrae la peticion
  const request = event.request;
  // PETICION GET
  if (request.method !== "GET") {
    return;
  }
  // BUSCAR EN CACHE
  event.respondWith(cachedResponse(request));

  // ACTUALIZAR EL CACHE
  event.waitUntil(updateCache(request));
});

function precache() {
  const cache = caches.open(VERSION);
  // return cache.addAll([
  //TODO: archivos que se van a guardar en cache
  // "/",
  // "/index.html",
  // "/assets/index.js",
  // "/assets/MediaPlayer.js",
  // "/assets/plugins/AutoPlay.js",
  // "/assets/plugins/AutoPause.ts",
  // "/assets/index.css",
  // "/assets/BigBuckBunny.mp4",
  // ]);
}
// addAll;
async function cachedResponse(request) {
  //TODO: abre el cache
  const cache = await caches.open(VERSION);
  //TODO: busca en cache
  const response = await cache.match(request);
  //TODO: devuelve la respuesta sea de cache o de la red
  return response || fetch(request);
}
//TODO: actualiza el cache para obtener lo ultimo de la red
async function updateCache(request) {
  //TODO: abre el cache
  const cache = await caches.open(VERSION);
  //TODO: hace la peticion a la red
  const response = await fetch(request);
  //TODO: agrega nuevo contenido al cache
  // return cache.put(request, response);
}
