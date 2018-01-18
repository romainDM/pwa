const CACHE_NAME = 'App-Cache';
const RESOURCES_TO_PRELOAD = [
	'index.html',
	'style.css',
  'images/icon.png',
	'app.js',
  'service-worker.js',
	'manifest.json'
];

// what do we do when we want to install the application ?
self.addEventListener('install', function(event) {
  console.log("installing");
  event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll(RESOURCES_TO_PRELOAD);
		})
	);
});

// what the application is doing when we are offline ?
self.addEventListener('fetch', function(event) {
  console.log("fetching");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
