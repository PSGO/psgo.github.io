const CACHE_NAME = 'background-assets-v1';//更新缓存只需要改变名称字符
const ASSETS = [
    '/img_bg_title.png',
    '/video_WebTitle_batch.mp4'
];

// 安装 Service Worker 并缓存资源
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

// 拦截请求，返回缓存内容
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// 更新缓存（如果需要）
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
