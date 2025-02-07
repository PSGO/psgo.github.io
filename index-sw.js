const CACHE_NAME = 'index-20250207';//更新资源文件，缓存只需要改变名称字符
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
