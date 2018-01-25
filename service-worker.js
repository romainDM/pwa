// fichier en cache qui se sauvegarde dans les fichiers de l'utilisateur
const CACHE_NAME = 'App-Cache';
const RESOURCES_TO_PRELOAD = [
	'index.html',
	'style.css',
  'images/icon.png',
	'app.js',
  'service-worker.js',
	'manifest.json'
];

// On décrie ce que l'on veut faire quand elle s'installe
self.addEventListener('install', function(event) {
  console.log("installing");
  event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll(RESOURCES_TO_PRELOAD);
		})
	);
});

// Ce que l'on fait quand l'appli charge nos données
self.addEventListener('fetch', function(event) {
  console.log("fetching");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
