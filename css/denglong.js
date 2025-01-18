(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode('[class^=lantern],[class^=lantern]:before,[class^=lantern]:after{-webkit-box-sizing:border-box;box-sizing:border-box}.lantern-left,.lantern-right{position:fixed;top:0;z-index:9999;pointer-events:none}.lantern-left{left:50px}.lantern-right{right:50px}.lantern-container{width:150px;height:100px;position:relative;line-height:0;-webkit-animation:lantern 5s infinite ease-in-out;animation:lantern 5s infinite ease-in-out;-webkit-transform-origin:50% -100px;transform-origin:50% -100px}.lantern-center{position:relative;height:100%;background-color:red;border-radius:120px;-webkit-box-shadow:0 0 80px -10px #f00;box-shadow:0 0 80px -10px red}.lantern-line{height:100%;text-align:center}.lantern-line:before,.lantern-line:after{content:"";position:absolute;top:0;left:50%;border:2px solid #ecaa2f;border-radius:50%;-webkit-transform:translate(-50%,0);transform:translate(-50%)}.lantern-line:before{width:75%;height:100%}.lantern-line:after{width:35%;height:100%}.lantern-text-wrap{display:inline-block;vertical-align:top;height:100%}.lantern-text{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:28px;font-weight:700;color:#ecaa2f;-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;text-align:center;letter-spacing:5px}.lantern-top,.lantern-bottom{width:40%;height:8px;background-color:#ecaa2f;position:relative;z-index:1}.lantern-top{margin:0 auto -2px;border-radius:5px 5px 0 0}.lantern-bottom{margin:-2px auto 0;border-radius:0 0 5px 5px}.lantern-top-rope,.lantern-bottom-rope{width:4px;background-color:#ecaa2f;margin:0 auto}.lantern-top-rope{height:40px}.lantern-bottom-rope{position:relative;height:20px;-webkit-animation:lantern 3s infinite ease-in-out;animation:lantern 3s infinite ease-in-out;-webkit-transform-origin:50% -45px;transform-origin:50% -45px}.lantern-bottom-rope:after{content:"";position:absolute;top:100%;left:-4px;width:12px;height:50px;background:linear-gradient(#f00,#e36d00 3px,#fbd342 5px,#e36d00 8px,#e36d00 12px,#f00 16px,rgba(255,0,0,.8) 26px,rgba(255,0,0,.6));border-radius:5px 5px 0 0}@-webkit-keyframes lantern{0%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}50%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}to{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}}@keyframes lantern{0%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}50%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}to{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}}@media screen and (max-width: 720px){.lantern-left{left:30px}.lantern-right{right:30px}.lantern-container{width:100px;height:60px}.lantern-top-rope{width:3px;height:20px}.lantern-center{-webkit-box-shadow:0 0 40px -10px #f00;box-shadow:0 0 40px -10px red}.lantern-top,.lantern-bottom{width:35%;height:6px}.lantern-top{margin-bottom:-.5px}.lantern-bottom{margin-top:-.5px}.lantern-bottom-rope{width:2px}.lantern-bottom-rope:after{left:-2px;width:6px;height:25px}.lantern-text{font-size:14px;letter-spacing:2px}}@media screen and (max-width: 420px){.lantern-left{left:30px}.lantern-right{right:30px}.lantern-container{width:80px;height:50px}.lantern-top-rope{width:3px;height:20px}.lantern-center{-webkit-box-shadow:0 0 40px -10px #f00;box-shadow:0 0 40px -10px red}.lantern-top,.lantern-bottom{width:35%;height:4px}.lantern-top{margin-bottom:0}.lantern-bottom{margin-top:0}.lantern-bottom-rope{width:2px}.lantern-bottom-rope:after{left:-2px;width:6px;height:25px}.lantern-text{font-size:14px;letter-spacing:2px}.lantern-line:before,.lantern-line:after{border-width:1px}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function d(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", () => e());
}
function a(e) {
  return `<div class="lantern-container">
          <div class="lantern-top-rope"></div>
          <div class="lantern-top"></div>
          <div class="lantern-center">
            <div class="lantern-line">
              <div class="lantern-text-wrap">
                <div class="lantern-text">${e}</div>
              </div>
            </div>
          </div>
          <div class="lantern-bottom"></div>
          <div class="lantern-bottom-rope"></div>
        </div>`;
}

const phrases = [
  "蛇年吉祥", "龍蛇飛舞", "蛇形如意", "春蛇吐寶", 
  "靈蛇報喜", "蛇舞春風", "瑞蛇呈祥", "飛蛇載福", 
  "蛇躍龍騰", "靈蛇獻瑞", "蛇年旺運", "金蛇呈瑞", 
  "蛇鳴富貴", "瑞氣盈門", "蛇轉乾坤", "蛇舞盛世"
];
function getRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}
function l() {
  const phrase = getRandomPhrase();
  const leftText = phrase.slice(0, 2);
  const rightText = phrase.slice(2);

  const e = document.createElement("div");
  e.className = "lantern-left";
  e.innerHTML = a(leftText);

  const t = document.createElement("div");
  t.className = "lantern-right";
  t.innerHTML = a(rightText);

  const n = document.createElement("div");
  n.className = "lantern";
  n.appendChild(e);
  n.appendChild(t);

  document.body.appendChild(n);
}
d(l);
