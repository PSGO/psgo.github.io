let hasExecuted = false;
const threshold = 0; //默认200
let pkgData = null;
let releasesData = null;

fetchVersionData();//暂时使用及时加载
<!-- function checkScrollAndExecute() { -->
  <!-- if (window.scrollY >= threshold && !hasExecuted) { -->
    <!-- hasExecuted = true; -->
    <!-- fetchVersionData(); -->
  <!-- } -->
<!-- } -->

<!-- window.addEventListener('scroll', checkScrollAndExecute); -->

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

// 给指定 id 的按钮添加标记
function markButton(buttonId) {
  const btn = document.getElementById(buttonId);
  if (btn) {
    btn.insertAdjacentHTML('beforeend', ' <span class="dot"></span>');
  }
}

// 带重试 fetch
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

//PKG 以 P- 识别，Github 发布包以 R- 识别
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

  //1天 86400000 2天 172800000 3天 259200000 7天 604800000
  if (!clicked && currentTime - storedTime < 172800000) {
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