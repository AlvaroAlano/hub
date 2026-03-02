const CACHE_NAME = 'hub-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Para garantir que o usuário sempre veja a versão mais recente,
    // este Service Worker apenas passa a requisição para a rede.
    event.respondWith(fetch(event.request));
});