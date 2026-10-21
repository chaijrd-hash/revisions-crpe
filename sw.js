/* Service worker : met le site en cache pour un usage hors ligne (réseau d'abord, cache en secours). */
const CACHE = 'site-v1792587296';
const ASSETS = [
  './', 'index.html', 'css/style.css', 'js/app.js',
  'js/data/maths.js', 'js/data/maths2.js', 'js/data/francais.js', 'js/data/francais2.js',
  'js/data/sciences.js', 'js/data/hgemc.js', 'js/data/arts-eps.js', 'js/data/anglais.js',
  'js/data/oral.js', 'js/data/maths3.js', 'js/data/francais3.js', 'js/data/autres2.js', 'js/data/c4-hg.js', 'js/data/c4-en-arts.js', 'js/data/concours2.js', 'js/data/positionnement.js', 'js/data/concours.js', 'js/data/bank-maths-a.js', 'js/data/bank-maths-b.js', 'js/data/bank-francais-a.js', 'js/data/bank-francais-b.js', 'js/data/bank-sciences-arts.js', 'js/data/bank-hgemc.js', 'js/data/bank-anglais-oral.js', 'manifest.webmanifest', 'icons/icon.svg'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
