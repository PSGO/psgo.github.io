const CACHE_NAME = 'index-20250207-2'; // 更新资源文件，缓存只需要改变名称字符
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
    self.skipWaiting(); // 立即启用新的 Service Worker
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

// 激活新 Service Worker 并删除旧缓存
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        }).then(() => {
            self.clients.claim(); // 立即控制所有页面
        })
    );
});

// 拦截请求，缓存优先 + 动态更新
self.addEventListener('fetch', event => {
    // 只缓存静态资源，API 请求始终走网络
    if (ASSETS.includes(new URL(event.request.url).pathname)) {
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request).then(networkResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, networkResponse.clone()); // 更新缓存
                        return networkResponse;
                    });
                });
            })
        );
    } else {
        event.respondWith(fetch(event.request)); // API 请求不缓存
    }
});
