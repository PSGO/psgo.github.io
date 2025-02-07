const BUTTONS = ["24hours", "jailbreak"];
const EXPIRY_TIME = 86400000; //1天 86400000 2天 172800000 3天 259200000 7天 604800000
let pkgData = null;
let releasesData = null;

fetchVersionData(); // 暂时使用即时加载

async function fetchVersionData() {
  const pkgURL = decodeBase64('aHR0cHM6Ly9wa2d6b25lLXZlci5wc2dvLmV1Lm9yZy9sb2cvTGF0ZXN0LnR4dA==');
  const releasesURL = decodeBase64('aHR0cHM6Ly9yZWxlYXNlcy12ZXIucHNnby5ldS5vcmcvbG9nL0xhdGVzdC50eHQ=');
  const jailbreakURL = decodeBase64('aHR0cHM6Ly9wczVqYi5wc2dvLmV1Lm9yZy9wczVfaGFja19kYXRlLnR4dA==');

  try {
    const [newPkgData, newReleasesData, newJailbreakData] = await Promise.all([
      fetchWithRetry(pkgURL),
      fetchWithRetry(releasesURL),
      fetchWithRetry(jailbreakURL)
    ]);

    const oldPkgData = JSON.parse(localStorage.getItem('pkgData') || '[]');
    const oldReleasesData = JSON.parse(localStorage.getItem('releasesData') || '[]');
    const oldJailbreakData = JSON.parse(localStorage.getItem('jailbreakData') || '[]');

    if (!arraysEqual(newPkgData, oldPkgData) || !arraysEqual(newReleasesData, oldReleasesData)) {
      markButton('24hours');
    }
    if (!arraysEqual(newJailbreakData, oldJailbreakData)) {
      markButton('jailbreak');
    }

    localStorage.setItem('pkgData', JSON.stringify(newPkgData));
    localStorage.setItem('releasesData', JSON.stringify(newReleasesData));
    localStorage.setItem('jailbreakData', JSON.stringify(newJailbreakData));

    pkgData = newPkgData;
    releasesData = newReleasesData;

    updateButtonsWithVersion();
  } catch (error) {
    console.error('Error:', error);
  }
}

// 数组比较函数
function arraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// 记录小红点的显示时间
function markButton(buttonId) {
  const currentTime = Date.now();
  localStorage.setItem(`updateTime-${buttonId}`, currentTime); // 记录更新时间
  localStorage.removeItem(`clicked-${buttonId}`); // 允许小红点重新出现

  const btn = document.getElementById(buttonId);
  if (btn && !btn.querySelector(".dot")) {
    btn.insertAdjacentHTML("beforeend", ` <span class="dot" id="dot-${buttonId}"></span>`);
  }
}

// 用户点击按钮后移除小红点，并记录已点击
function handleButtonClick(buttonId) {
  localStorage.setItem(`clicked-${buttonId}`, "true");

  const dotElem = document.getElementById(`dot-${buttonId}`);
  if (dotElem) {
    dotElem.remove();
  }
}

// 页面加载时恢复小红点状态
function restoreDots() {
  const currentTime = Date.now();

  BUTTONS.forEach(buttonId => {
    const lastUpdateTime = parseInt(localStorage.getItem(`updateTime-${buttonId}`), 10) || 0;
    const isClicked = localStorage.getItem(`clicked-${buttonId}`) === "true";

    // 小红点显示条件：未点击 & 更新时间未过期
    if (!isClicked && lastUpdateTime && (currentTime - lastUpdateTime <= EXPIRY_TIME)) {
      const btn = document.getElementById(buttonId);
      if (btn && !btn.querySelector(".dot")) {
        btn.insertAdjacentHTML("beforeend", ` <span class="dot" id="dot-${buttonId}"></span>`);
      }
    }
  });
}

// 页面初始化
restoreDots();

// 绑定点击事件（确保按钮存在）
BUTTONS.forEach(buttonId => {
  const btn = document.getElementById(buttonId);
  if (btn) {
    btn.addEventListener("click", () => handleButtonClick(buttonId));
  }
});

// 带重试的 fetch 请求
async function fetchWithRetry(url, retries = 1) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return (await response.text()).split('\n');
    } catch (error) {
      if (attempt === retries) {
        console.error(`Failed to fetch ${url} after ${retries + 1} attempts.`);
        throw error;
      }
    }
  }
}

function decodeBase64(encoded) {
  return atob(encoded);
}

// PKG 以 P- 识别，Github 发布包以 R- 识别
function updateButtonsWithVersion() {
  document.querySelectorAll('[id^="P-"], [id^="R-"]').forEach(button => {
    updateButtonWithVersion(button.id);
  });
}

// 处理按钮更新
function updateButtonWithVersion(buttonId) {
  const isPkgButton = buttonId.startsWith('P-');
  const isReleasesButton = buttonId.startsWith('R-');

  let data = isPkgButton ? pkgData : isReleasesButton ? releasesData : null;
  if (!data) return;

  let version = '';
  data.forEach(line => {
    line = line.trim();
    
    if (isReleasesButton) {
      const match = line.match(/(.+?)\|(.*)/i);
      if (match) {
        const key = match[1].trim();
        version = match[2].trim();
        if (key.toLowerCase() === buttonId.replace('R-', '').toLowerCase()) {
          handleVersionUpdate(buttonId, version);
        }
      }
    } else {
      const match = line.match(/\|(.*)/);
      if (match) {
        const strippedButtonId = buttonId.replace('P-', '');
        if (match[1].includes(strippedButtonId)) {
          const parts = match[1].split('_');
          version = parts[parts.length - 1].trim();
          if (strippedButtonId === buttonId.replace('P-', '')) {
            handleVersionUpdate(buttonId, version);
          }
        }
      }
    }
  });
}

function handleVersionUpdate(buttonId, version) {
  const button = document.getElementById(buttonId);
  if (!button) return;

  const storedData = JSON.parse(localStorage.getItem(buttonId)) || {};
  const currentTime = Date.now();
  const storedVersion = storedData.version || '';
  const storedTime = storedData.timestamp || 0;
  const clicked = storedData.clicked || false;

  if (storedVersion !== version) {
    localStorage.setItem(buttonId, JSON.stringify({
      version,
      timestamp: currentTime,
      clicked: false
    }));

    button.innerHTML += ` ${version} <span class="dot" id="dot-${buttonId}"></span>`;
    bindClickEvent(button, buttonId, version);
    return;
  }

  // 检查是否过期
  if (!clicked && currentTime - storedTime < EXPIRY_TIME) {
    button.innerHTML += ` ${version} <span class="dot" id="dot-${buttonId}"></span>`;
    bindClickEvent(button, buttonId, version);
    return;
  }

  button.innerHTML += ` ${version}`;
  bindClickEvent(button, buttonId, version);
}

function bindClickEvent(button, buttonId, version) {
  if (!button.dataset.clickBound) {
    button.addEventListener('click', () => {
      const dotElem = document.getElementById(`dot-${buttonId}`);
      if (dotElem) {
        dotElem.remove();
      }
      localStorage.setItem(buttonId, JSON.stringify({ version, timestamp: Date.now(), clicked: true }));
    });
    button.dataset.clickBound = "true";
  }
}
