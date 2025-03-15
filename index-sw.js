const CACHE_NAME = 'index-20250207-5'; // 确保更改缓存名称以触发更新
const ASSETS = [
    '/img_bg_title.png',
    '/img_logo_a.png',
    '/video_WebTitle_batch.mp4',
    '/ps4.png',
    '/ps5.png',
    '/switch.png',
    '/bg.jpg',
    '/css/pc.css',
    '/ps5-ver.js',
    '/psgo.ico'
];

// 安装 Service Worker 并缓存资源
self.addEventListener('install', event => {
    console.log('[Service Worker] Installing...');
    self.skipWaiting(); // 立即启用新 Service Worker
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[Service Worker] Caching assets...');
            return cache.addAll(ASSETS);
        }).catch(err => console.error('[Service Worker] Cache install error:', err))
    );
});

// 激活 Service Worker 并清除旧缓存
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        console.log(`[Service Worker] Deleting old cache: ${key}`);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => {
            console.log('[Service Worker] Claiming clients...');
            return self.clients.claim(); // 立即控制页面
        })
    );
});

// 监听 fetch 事件，优先使用缓存，并确保资源动态更新
self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);
    
    // 只处理我们定义的 ASSETS 资源
    if (ASSETS.includes(requestUrl.pathname)) {
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request).then(networkResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, networkResponse.clone()); // 更新缓存
                        console.log(`[Service Worker] Cached updated: ${event.request.url}`);
                        return networkResponse;
                    });
                });
            }).catch(error => {
                console.error('[Service Worker] Fetch failed:', error);
                return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
            })
        );
    } else {
        event.respondWith(fetch(event.request));
    }
});
