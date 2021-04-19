var CACHE_NAME = 'currentinstallation'
var urlsToCache = [
  '/',
  '/assets/icons/newproject.svg'
  '/assets/icons/projects.svg',
  '/assets/logo/side2022_logo-192x192.svg',
  '/assets/logo/side2022_logo-512x512.svg',
  '/scripts/installmanager.js',
  '/scripts/platform.js',
  '/scripts/serviceworker.js',
  '/services/install/pwainstall.html',
  '/script.js',
  '/style.css'
];
function determineplatform(){
  switch (platform.os.family){
    case "Chrome OS":
      return 'chromeos'
  }
}
function getmanifestlink() {
  return '/assets/manifest/'+determineplatform()+".webmanifest"
}
function installnow(){
  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });
}