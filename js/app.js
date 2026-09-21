/* TEMVITA 2.2 Digital Business Card — GitHub Pages edition
   Prices: auto-loaded from ANY .xlsx/.xls file placed in repository root.
   Media overrides: place product images/videos in repository root and include
   the product key in the filename, e.g. 01902.jpg, 01902.mp4, 50C.webp, Teddy.mp4.
*/

const PRODUCTS = [
  { art: "Модель 50C", key: "50c", aliases: ["50c", "50с"], title: "Тонометр TM Temvita 50C", desc: "Анероидный измеритель артериального давления. Манжета 22–42 см. Стетоскоп в комплекте. Для клиник и домашнего использования. Премиум-качество, гарантия 2 года.", prepay: 5408, retail: 7030, img: "images/content (3).jpg" },
  { art: "Модель 50B", key: "50b", aliases: ["50b", "50в"], title: "Тонометр TM Temvita 50B", desc: "Анероидный измеритель артериального давления. Манжета 25,5–40,6 см. Стетоскоп в комплекте. Надёжный прибор для контроля АД и пульса.", prepay: 5408, retail: 7030, img: "images/content (1).jpg" },
  { art: "TM Temvita Teddy", key: "teddy", aliases: ["teddy"], title: "Электронный термометр Teddy", desc: "Диапазон 32,0–42,9 °C. Точность ±0,1 °C. Измерение 60 сек. Гибкий наконечник, звуковой сигнал, память, водонепроницаемый. Компактный и безопасный для детей.", prepay: 1300, retail: 1690, img: "images/content (15).jpg" },
  { art: "TM Temvita Classic", key: "classic", aliases: ["classic"], title: "Электронный термометр Classic", desc: "Диапазон 32,0–42,9 °C. Точность ±0,1 °C. Измерение 60 сек. Гибкий наконечник Ø 3 мм, память последнего измерения, автоотключение, водонепроницаемый.", prepay: 1050, retail: 1365, img: "images/content (14).jpg" },
  { art: "01901", key: "01901", aliases: ["01901"], title: "Бандаж «Шина Фрейка»", desc: "Фиксирующий бандаж на тазобедренный сустав для новорождённых. Размеры 1–4 (14–27 см между подколенными ямками). Регулируемые ремни, мягкий хлопок. При дисплазии, предвывихе и подвывихе бедра.", prepay: 3838, retail: 4990, img: "images/content (13).jpg" },
  { art: "01902", key: "01902", aliases: ["01902"], title: "Бандаж детский для пупочной грыжи", desc: "Со специальным силиконовым пилотом и застёжкой Velcro. Мягкая ткань, согревающий эффект. Для консервативного лечения пупочных грыж у детей до 3 лет и профилактики ущемления.", prepay: 2900, retail: 3770, img: "images/content (4).jpg" },
  { art: "01903", key: "01903", aliases: ["01903"], title: "Бандаж эластичный дородовой", desc: "Снимает нагрузку с поясницы и поддерживает живот. Широкая лента 15 см, дополнительные крепления, дышащий эластичный материал. Размеры по окружности талии 68–120 см.", prepay: 3800, retail: 4940, img: "images/content (17).jpg" },
  { art: "01904", key: "01904", aliases: ["01904"], title: "Бандаж фиксирующий эластичный", desc: "С жёсткими вставками для поясничного отдела. При нестабильности, спондилолистезе, грыжах дисков. Дышащий эластичный материал. Размеры 1–6 (окружность талии 68–128 см).", prepay: 6154, retail: 8000, img: "images/content (2).jpg" },
  { art: "01906", key: "01906", aliases: ["01906"], title: "Повязка на коленный сустав", desc: "Неопрен с открытой чашечкой. Фиксация при травмах и нагрузках, улучшает кровообращение. Универсальная для левой и правой ноги. Размеры 1–5 (обхват 32–50 см).", prepay: 4000, retail: 5200, img: "images/content (12).jpg" },
  { art: "01907", key: "01907", aliases: ["01907"], title: "Повязка на голеностопный сустав", desc: "Медицинская повязка из неопрена. Снимает отёк, фиксирует сустав при травмах и спорте. Дышащий материал. Размеры 1–4 (окружность 13–29 см).", prepay: 3077, retail: 4000, img: "images/content (5).jpg" },
  { art: "01908", key: "01908", aliases: ["01908"], title: "Трусы медицинские для мальчиков", desc: "После обрезания. Защита от травм, мягкая ткань, воздухообмен. Размер по весу: 1 (12–17 кг), 2 (18–23 кг). Способствуют скорейшему заживлению.", prepay: 1500, retail: 1950, img: "images/content (6).jpg" },
  { art: "01909", key: "01909", aliases: ["01909"], title: "Повязка на лучезапястный сустав", desc: "Неопреновая фиксация запястья. Эластичность, удобная посадка, для реабилитации после травм. Универсальная для левой и правой руки.", prepay: 2308, retail: 3000, img: "images/content (7).jpg" },
  { art: "01910", key: "01910", aliases: ["01910"], title: "Бандаж поддерживающий для руки", desc: "Левый / правый. Для реабилитации после переломов, растяжений, гипсовой иммобилизации. Регулируемый ремень, дышащий материал. Размеры по длине предплечья 27–46 см.", prepay: 3462, retail: 4500, img: "images/content.jpg" },
  { art: "01912", key: "01912", aliases: ["01912"], title: "Воротник ортопедический жёсткий", desc: "Полная фиксация шейного отдела. После операций, нестабильности, переломов. Гипоаллергенный, можно использовать в душе. Размеры 1–4 (окружность шеи 36–47 см).", prepay: 5231, retail: 6800, img: "images/content (11).jpg" },
  { art: "01914", key: "01914", aliases: ["01914"], title: "Корректор осанки", desc: "Для профилактики и коррекции нарушений осанки, сколиоза, кифоза, сутулости. Дышащий эластичный материал. Размеры 0–4 (окружность грудной клетки 59–110 см).", prepay: 3308, retail: 4300, img: "images/content-optimized.jpg" },
  { art: "01916", key: "01916", aliases: ["01916"], title: "Воротник мягкий детский (Шина Шанца)", desc: "Лёгкая фиксация шейного отдела у детей. 4 размера (высота 2,7–6,5 см, длина 28–36 см). Мягкая безопасная фиксация без давления.", prepay: 2769, retail: 3600, img: "images/WhatsApp Image 2026-08-31 at 11.25.05.jpeg" },
  { art: "01929", key: "01929", aliases: ["01929"], title: "Бандаж послеоперационный", desc: "Поддержка мышц брюшного пресса после операций, при грыжах, опущении почек, после родов. Эластичная воздухопроницаемая лента. Размеры XS–XXL (55–115 см).", prepay: 5000, retail: 6500, img: "images/WhatsApp Image 2026-08-31 at 11.25.04.jpeg" },
  { art: "01930", key: "01930", aliases: ["01930"], title: "Воротник мягкий взрослый (Шина Шанца)", desc: "Лёгкая фиксация шейного отдела, разгрузка позвонков, нормализация кровообращения. Согревающий эффект. Размеры 3–6 (окружность шеи 36–57 см, высота 7,5–11 см).", prepay: 3846, retail: 5000, img: "images/WhatsApp Image 2026-08-31 at 11.25.04 (1).jpeg" }
];

const CERTIFICATES = Array.from({ length: 13 }, (_, i) => {
  const n = i + 1;
  const details = [
    ["Тонометр TM Temvita 50B — Сертификат соответствия", "РК МИ (МТ)-0№028043 / KZ.7700.02.01.01178938", "01.10.2024"],
    ["Тонометр TM Temvita 50C — Сертификат соответствия", "РК МИ (МТ)-0№028043 / KZ.7700.02.01.01178932", "01.10.2024"],
    ["Бинт эластичный медицинский NORMAL", "РК МИ (ИМН)-0№026666", "29.06.2023"],
    ["Повязка на голеностоп (01907)", "РК МИ (ИМН)-0№027139", "22.09.2023"],
    ["Бандаж детский для пупочной грыжи (01902)", "РК МИ (ИМН)-0№027138", "22.09.2023"],
    ["Бандаж фиксирующий эластичный (01904)", "РК МИ (ИМН)-0№027216", "10.10.2023"],
    ["Бандаж поддерживающий для руки (01910)", "РК МИ (ИМН)-0№027157", "27.09.2023"],
    ["Воротник ортопедический (01930 / 01916)", "РК МИ (ИМН)-0№027344", "03.11.2023"],
    ["Бандаж эластичный дородовой (01903)", "РК МИ (ИМН)-0№027156", "27.09.2023"],
    ["Электронный термометр Temvita Classic / Teddy", "РК МИ (МТ)-0№028042", "24.05.2024"],
    ["Бандаж послеоперационный (01929)", "РК МИ (ИМН)-0№027031", "07.09.2023"],
    ["Трусы медицинские для мальчиков", "РК МИ (ИМН)-0№027343", "03.11.2023"],
    ["Бандаж «Шина Фрейка»", "РК МИ (ИМН)-0№027158", "27.09.2023"]
  ][i];
  return { id: `c${n}`, name: details[0], reg: details[1], date: details[2], file: `certs/Сертификат ${n}.pdf` };
});

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;
const VIDEO_EXT = /\.(mp4|webm|mov|m4v)$/i;
const DECOR_EXT = /\.(svg|jpe?g|png|webp|avif)$/i;
const HOLIDAY_IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;
const EXCEL_EXT = /\.(xlsx|xls|xlsm)$/i;
const WHATSAPP_PHONE = "77752607311";
const CONTACT_PHONE = "+77752607311";
let activeCategory = "all";
let activeSearch = "";
let currentPriceFile = null;

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/\u00a0/g, " ")
    .replace(/[–—−]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function compact(value) {
  return normalizeText(value).replace(/[^a-zа-я0-9]+/gi, "");
}

function formatPrice(n) {
  const num = Number(n);
  return Number.isFinite(num) ? Math.round(num).toLocaleString("ru-RU") + " ₸" : "—";
}

function productMatchesText(product, text) {
  const s = compact(text);
  if (product.aliases.some(a => s.includes(compact(a)))) return true;
  const fullTitle = compact(product.title);
  return fullTitle.length >= 6 && s.includes(fullTitle);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function productCategory(product) {
  const t = normalizeText(`${product.title} ${product.desc}`);
  if (t.includes("тонометр") || t.includes("давлен")) return "tonometers";
  if (t.includes("термометр")) return "thermometers";
  if (t.includes("воротник") || t.includes("шина шанца") || t.includes("корректор") || t.includes("сустав") || t.includes("повязка")) return "orthopedic";
  return "bandages";
}

function getFilteredProducts() {
  const q = compact(activeSearch);
  return PRODUCTS.filter(p => {
    const categoryOk = activeCategory === "all" || productCategory(p) === activeCategory;
    if (!categoryOk) return false;
    if (!q) return true;
    return compact(`${p.art} ${p.title} ${p.desc}`).includes(q);
  });
}

function whatsappProductUrl(product) {
  const text = `Здравствуйте! Меня интересует ${product.title} (арт. ${product.art}). Подскажите, пожалуйста, наличие и условия заказа. Розничная цена на сайте: ${formatPrice(product.retail)}.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  const visible = getFilteredProducts();
  const count = document.getElementById("products-count");
  if (count) count.textContent = `${visible.length} из ${PRODUCTS.length} товаров`;

  if (!visible.length) {
    grid.innerHTML = `<div class="catalog-empty"><strong>Товар не найден</strong><span>Попробуйте изменить запрос или выбрать другой раздел.</span></div>`;
    return;
  }

  grid.innerHTML = visible.map(p => `
    <article class="product-card" data-product-key="${escapeHtml(p.key)}" data-category="${productCategory(p)}">
      <button class="img-wrap product-image-button" type="button" data-image="${escapeHtml(p.img)}" data-title="${escapeHtml(p.title)}" aria-label="Увеличить фото: ${escapeHtml(p.title)}">
        <img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.title)}" loading="lazy" onerror="this.onerror=null;this.src='images/content (1).jpg'">
        <span class="zoom-hint">Увеличить</span>
      </button>
      <div class="product-body">
        <div class="product-art">Арт. ${escapeHtml(p.art)}</div>
        <h3 class="product-title">${escapeHtml(p.title)}</h3>
        <p class="product-desc">${escapeHtml(p.desc)}</p>
        <div class="product-price">
          <div><span class="price-label">100% предоплата</span><span class="price-main">${formatPrice(p.prepay)}</span></div>
          <div><span class="price-label">Розничная</span><span class="price-retail">${formatPrice(p.retail)}</span></div>
        </div>
        <div class="product-actions">
          <a class="product-wa" href="${whatsappProductUrl(p)}" target="_blank" rel="noopener">Заказать в WhatsApp</a>
          <a class="product-call" href="tel:${CONTACT_PHONE}">Позвонить</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCerts() {
  const grid = document.getElementById("certs-grid");
  grid.innerHTML = CERTIFICATES.map(c => `
    <div class="cert-card" data-id="${c.id}">
      <h3>${c.name}</h3>
      <div class="cert-meta">${c.reg}<br>Дата регистрации: ${c.date}</div>
      <div class="cert-actions"><a class="btn-dl" href="${encodeURI(c.file)}" target="_blank" rel="noopener">Открыть PDF</a></div>
    </div>
  `).join("");
}

function initQR() {
  if (typeof QRCode === "undefined") return;
  const url = window.location.href.split("#")[0];
  const opts = { width: 140, height: 140, colorDark: "#0a1628", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.M };
  const el1 = document.getElementById("qrcode");
  const el2 = document.getElementById("qrcode-footer");
  if (el1) new QRCode(el1, { text: url, ...opts });
  if (el2) new QRCode(el2, { text: url, width: 100, height: 100, colorDark: "#0a1628", colorLight: "#ffffff" });
}

function getGitHubRepoInfo() {
  const host = location.hostname.toLowerCase();
  if (!host.endsWith(".github.io")) return null;
  const owner = host.split(".")[0];
  const firstPath = location.pathname.split("/").filter(Boolean)[0];
  const repo = firstPath || `${owner}.github.io`;
  return { owner, repo };
}

async function listRepositoryRoot() {
  const info = getGitHubRepoInfo();
  if (!info) return [];
  const endpoint = `https://api.github.com/repos/${encodeURIComponent(info.owner)}/${encodeURIComponent(info.repo)}/contents/`;
  const response = await fetch(endpoint, { headers: { "Accept": "application/vnd.github+json" } });
  if (!response.ok) throw new Error(`GitHub API: ${response.status}`);
  const data = await response.json();
  return Array.isArray(data) ? data.filter(x => x.type === "file") : [];
}

function setPriceStatus(text, state = "ok") {
  const el = document.getElementById("price-source-status");
  if (!el) return;
  el.textContent = text;
  el.dataset.state = state;
}

function rootFileUrl(file) {
  return file?.download_url || (file?.name ? encodeURI(file.name) : "");
}

function findRootAsset(rootFiles, patterns, extRegex) {
  const matches = rootFiles.filter(file => {
    const name = normalizeText(file.name);
    return extRegex.test(file.name) && patterns.some(pattern => pattern.test(name));
  });
  return matches.sort((a, b) => a.name.localeCompare(b.name, "ru"))[0] || null;
}

function applyDecorationsFromRoot(rootFiles) {
  const right = findRootAsset(rootFiles, [
    /^ornament[-_ ]?right/i, /^right[-_ ]?ornament/i, /орнамент[-_ ]?прав/i, /узор[-_ ]?прав/i
  ], DECOR_EXT);
  const corners = findRootAsset(rootFiles, [
    /^ornament[-_ ]?corners?/i, /^corner[-_ ]?ornament/i, /орнамент[-_ ]?(угол|угл|кра)/i, /узор[-_ ]?(угол|угл|кра)/i
  ], DECOR_EXT);

  if (right) {
    document.documentElement.style.setProperty("--ornament-right-image", `url("${rootFileUrl(right)}")`);
  }
  if (corners) {
    document.documentElement.style.setProperty("--ornament-corner-image", `url("${rootFileUrl(corners)}")`);
  }
  return { right: right?.name || null, corners: corners?.name || null };
}

function holidayFileScore(file) {
  const name = normalizeText(file.name);
  let score = 0;
  if (/^holiday(?:[._ -]|$)/i.test(name)) score += 100;
  if (/^открытка(?:[._ -]|$)/i.test(name)) score += 95;
  if (/^праздник(?:[._ -]|$)/i.test(name)) score += 90;
  if (/поздрав/i.test(name)) score += 80;
  if (/наурыз|nauryz|8[-_ ]?march|8[-_ ]?мар|new[-_ ]?year|новый[-_ ]?год|1[-_ ]?may|1[-_ ]?ма[йм]|7[-_ ]?may|7[-_ ]?ма[йм]|9[-_ ]?may|9[-_ ]?ма[йм]|capital|астан|столиц|republic|республик|independence|независим|constitution|конституц|victory|побед|жеңіс|otan|отан|qurban|kurban|құрбан|курбан/i.test(name)) score += 60;
  return score;
}

function findHolidayFile(rootFiles) {
  return rootFiles
    .filter(file => (HOLIDAY_IMAGE_EXT.test(file.name) || VIDEO_EXT.test(file.name)) && holidayFileScore(file) > 0)
    .sort((a, b) => holidayFileScore(b) - holidayFileScore(a) || a.name.localeCompare(b.name, "ru"))[0] || null;
}

function hideHolidayBanner() {
  const banner = document.getElementById("holiday-banner");
  const imageButton = document.getElementById("holiday-image-button");
  const image = document.getElementById("holiday-banner-image");
  const video = document.getElementById("holiday-banner-video");
  if (banner) banner.hidden = true;
  if (imageButton) imageButton.hidden = true;
  if (image) { image.removeAttribute("src"); image.removeAttribute("data-source"); }
  if (video) {
    video.pause();
    video.removeAttribute("src");
    video.hidden = true;
    video.load();
  }
}

function showHolidayFile(fileOrUrl, explicitName = "") {
  const banner = document.getElementById("holiday-banner");
  const imageButton = document.getElementById("holiday-image-button");
  const image = document.getElementById("holiday-banner-image");
  const video = document.getElementById("holiday-banner-video");
  if (!banner || !imageButton || !image || !video) return false;

  const name = explicitName || fileOrUrl?.name || String(fileOrUrl || "");
  const url = typeof fileOrUrl === "string" ? fileOrUrl : rootFileUrl(fileOrUrl);
  if (!url) return false;

  hideHolidayBanner();
  if (VIDEO_EXT.test(name)) {
    video.src = url;
    video.hidden = false;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.play().catch(() => {});
  } else {
    image.src = url;
    image.alt = `Праздничная открытка TEMVITA — ${name.replace(/\.[^.]+$/, "")}`;
    imageButton.dataset.image = url;
    imageButton.dataset.title = "Праздничная открытка TEMVITA";
    imageButton.hidden = false;
  }
  banner.hidden = false;
  return true;
}

function renderHolidayFromRoot(rootFiles) {
  hideHolidayBanner();
  const holiday = findHolidayFile(rootFiles);
  return holiday ? showHolidayFile(holiday) : false;
}

async function probeHolidayFallback() {
  // Works even when GitHub API is unavailable. No file = no banner and no gap.
  const candidates = [
    "holiday.webp", "holiday.png", "holiday.jpg", "holiday.jpeg", "holiday.gif",
    "открытка.webp", "открытка.png", "открытка.jpg", "праздник.jpg",
    "holiday.mp4", "holiday.webm"
  ];
  for (const name of candidates) {
    try {
      const response = await fetch(encodeURI(name), { method: "HEAD", cache: "no-store" });
      if (response.ok) return showHolidayFile(encodeURI(name), name);
    } catch (_) {}
  }
  hideHolidayBanner();
  return false;
}

function detectPriceSheet(workbook) {
  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true, defval: null });
    for (let i = 0; i < Math.min(rows.length, 25); i++) {
      const line = rows[i].map(normalizeText);
      const nameIndex = line.findIndex(v => v.includes("наименование"));
      const prepayIndex = line.findIndex(v => v.includes("предоплат"));
      const retailIndex = line.findIndex(v => v.includes("рознич"));
      if (nameIndex >= 0 && (prepayIndex >= 0 || retailIndex >= 0)) {
        return { sheetName, rows, headerRow: i, nameIndex, prepayIndex, retailIndex };
      }
    }
  }
  return null;
}

function detectPriceDate(detected) {
  const rows = detected?.rows || [];
  for (let i = 0; i < Math.min(rows.length, 20); i++) {
    const row = rows[i] || [];
    for (let j = 0; j < row.length; j++) {
      const txt = normalizeText(row[j]);
      if (!txt.includes("цены действительны")) continue;
      for (let k = j; k < Math.min(row.length, j + 4); k++) {
        const value = row[k];
        if (value instanceof Date && !Number.isNaN(value.getTime())) {
          return value.toLocaleDateString("ru-RU");
        }
        const raw = String(value ?? "");
        const m = raw.match(/\b(\d{1,2}[.\/-]\d{1,2}[.\/-]\d{2,4})\b/);
        if (m) return m[1].replace(/\//g, ".").replace(/-/g, ".");
      }
    }
  }
  return null;
}

function setPriceValidDate(dateText) {
  const el = document.getElementById("price-valid-date");
  if (el && dateText) el.textContent = `Цены действительны от ${dateText}.`;
}

function extractPriceRows(detected) {
  const result = [];
  for (let i = detected.headerRow + 1; i < detected.rows.length; i++) {
    const row = detected.rows[i];
    const name = row[detected.nameIndex];
    if (!name || typeof name !== "string") continue;
    const prepay = detected.prepayIndex >= 0 ? Number(row[detected.prepayIndex]) : NaN;
    const retail = detected.retailIndex >= 0 ? Number(row[detected.retailIndex]) : NaN;
    if (!Number.isFinite(prepay) && !Number.isFinite(retail)) continue;
    result.push({ name: String(name), prepay, retail });
  }
  return result;
}

function applyPrices(priceRows) {
  let matched = 0;
  PRODUCTS.forEach(product => {
    const row = priceRows.find(r => productMatchesText(product, r.name));
    if (!row) return;
    if (Number.isFinite(row.prepay)) product.prepay = row.prepay;
    if (Number.isFinite(row.retail)) product.retail = row.retail;
    matched++;
  });
  return matched;
}

function parseBandageSize(name) {
  const s = normalizeText(name).replace(/,/g, ".");
  if (!s.includes("бинт") || !s.includes("normal")) return null;
  const widthMatch = s.match(/(6|8|10|12|14)\s*см/);
  const lengthMatch = s.match(/(?:\*|x|х|×)?\s*(0\.6|1\.5|3|5)\s*м\b/);
  if (!widthMatch || !lengthMatch) return null;
  return { width: widthMatch[1], length: lengthMatch[1] };
}

function applyBandagePrices(priceRows) {
  const map = new Map();
  priceRows.forEach(row => {
    const size = parseBandageSize(row.name);
    if (size) map.set(`${size.width}|${size.length}`, row);
  });
  document.querySelectorAll(".bandages-table tbody tr").forEach(tr => {
    const width = tr.cells[0]?.textContent.match(/\d+/)?.[0];
    if (!width) return;
    const lengths = ["0.6", "1.5", "3", "5"];
    lengths.forEach((length, idx) => {
      const row = map.get(`${width}|${length}`);
      if (!row || !tr.cells[idx + 1]) return;
      const left = Number.isFinite(row.prepay) ? formatPrice(row.prepay).replace(" ₸", "") : "—";
      const right = Number.isFinite(row.retail) ? formatPrice(row.retail) : "—";
      tr.cells[idx + 1].textContent = `${left} – ${right}`;
    });
  });
  return map.size;
}

function scorePriceRows(priceRows) {
  const productMatches = PRODUCTS.filter(product => priceRows.some(r => productMatchesText(product, r.name))).length;
  const bandageMatches = priceRows.filter(r => parseBandageSize(r.name)).length;
  return { productMatches, bandageMatches, total: productMatches * 10 + bandageMatches };
}

async function loadExcelPrices(rootFiles) {
  if (typeof XLSX === "undefined") {
    setPriceStatus("Не удалось подключить модуль Excel. Показаны резервные цены.", "warn");
    return;
  }
  const excelFiles = rootFiles.filter(f => EXCEL_EXT.test(f.name));
  if (!excelFiles.length) {
    setPriceStatus("Excel в корне не найден — показаны резервные цены сайта.", "warn");
    return;
  }

  let best = null;
  for (const excel of excelFiles) {
    try {
      const response = await fetch(excel.download_url || excel.html_url);
      if (!response.ok) continue;
      const buffer = await response.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: "array", cellDates: true });
      const detected = detectPriceSheet(workbook);
      if (!detected) continue;
      const priceRows = extractPriceRows(detected);
      const score = scorePriceRows(priceRows);
      const candidate = { excel, detected, priceRows, score, date: detectPriceDate(detected) };
      if (!best || candidate.score.total > best.score.total) best = candidate;
    } catch (error) {
      console.warn("TEMVITA: пропущен Excel", excel.name, error);
    }
  }

  if (!best) {
    setPriceStatus("Excel-файл найден, но таблица цен не распознана. Показаны резервные цены.", "warn");
    return;
  }

  const productCount = applyPrices(best.priceRows);
  const bandageCount = applyBandagePrices(best.priceRows);
  currentPriceFile = best.excel;
  renderProducts();
  setPriceValidDate(best.date);

  const download = document.getElementById("download-price");
  if (download) {
    download.href = best.excel.download_url || best.excel.html_url || "#";
    download.download = best.excel.name;
    download.hidden = false;
    download.textContent = `Скачать прайс «${best.excel.name}»`;
  }

  const datePart = best.date ? ` Цены от ${best.date}.` : "";
  setPriceStatus(`Прайс загружен автоматически: «${best.excel.name}». Товары ${productCount}/${PRODUCTS.length}, бинты ${bandageCount}/20.${datePart}`, productCount ? "ok" : "warn");
}

function bestRootMediaForProduct(rootFiles, product, regex) {
  const candidates = rootFiles.filter(f => regex.test(f.name));
  return candidates.find(f => productMatchesText(product, f.name)) || null;
}

function applyRootImages(rootFiles) {
  let count = 0;
  PRODUCTS.forEach(product => {
    const file = bestRootMediaForProduct(rootFiles, product, IMAGE_EXT);
    if (!file) return;
    product.img = file.download_url || file.name;
    count++;
  });
  if (count) renderProducts();
  return count;
}

function applyRootBandageImage(rootFiles) {
  const file = rootFiles.find(f => IMAGE_EXT.test(f.name) && /(бинт|normal)/i.test(f.name));
  if (!file) return false;
  const img = document.querySelector(".bandage-photo img");
  if (img) img.src = file.download_url || file.name;
  return true;
}

function renderVideosFromRoot(rootFiles) {
  const grid = document.getElementById("videos-grid");
  const videoFiles = rootFiles.filter(f => VIDEO_EXT.test(f.name));
  if (!videoFiles.length) return 0;

  const cards = [];
  for (const file of videoFiles) {
    const product = PRODUCTS.find(p => productMatchesText(p, file.name));
    const title = product ? product.title : file.name.replace(/\.[^.]+$/, "");
    const poster = product ? product.img : "images/content (4).jpg";
    cards.push(`
      <div class="video-card">
        <video controls playsinline preload="metadata" poster="${poster}">
          <source src="${file.download_url || file.name}">
        </video>
        <h3>${title}</h3>
        <p>${product ? `Арт. ${product.art}` : "Видео TEMVITA"}</p>
      </div>
    `);
  }
  grid.innerHTML = cards.join("");
  return cards.length;
}

function renderFallbackVideos() {
  const grid = document.getElementById("videos-grid");
  const fallback = [
    ["video/video1-baby-bandage.mp4", "images/content (4).jpg", "Бандаж детский для пупочной грыжи", "Модель 01902 — специальный пилот, Velcro, согревающий эффект"],
    ["video/video2-elastic-bandage.mp4", "images/content (2).jpg", "Бандаж фиксирующий эластичный", "Модель 01904 — с жёсткими вставками, для поясницы"],
    ["video/video3-support-bandage.mp4", "images/content (12).jpg", "Бандаж поддерживающий для руки", "Модель 01910 — премиум качество, универсальная посадка"],
    ["video/video4-tonometer.mp4", "images/content (3).jpg", "Тонометр TM Temvita", "Измерение артериального давления"],
  ];
  grid.innerHTML = fallback.map(v => `<div class="video-card"><video controls playsinline preload="metadata" poster="${v[1]}"><source src="${v[0]}" type="video/mp4"></video><h3>${v[2]}</h3><p>${v[3]}</p></div>`).join("");
}

async function initDynamicContent() {
  renderProducts();
  renderFallbackVideos();
  hideHolidayBanner();
  try {
    const rootFiles = await listRepositoryRoot();
    if (!rootFiles.length) {
      await probeHolidayFallback();
      setPriceStatus("Локальный режим: резервные данные. На GitHub Pages Excel и медиа будут подхватываться автоматически.", "info");
      return;
    }
    applyDecorationsFromRoot(rootFiles);
    renderHolidayFromRoot(rootFiles);
    applyRootImages(rootFiles);
    applyRootBandageImage(rootFiles);
    renderVideosFromRoot(rootFiles);
    await loadExcelPrices(rootFiles);
  } catch (error) {
    console.error("TEMVITA GitHub discovery:", error);
    await probeHolidayFallback();
    setPriceStatus("Не удалось проверить файлы репозитория — показаны резервные данные.", "warn");
  }
}

function initCatalogControls() {
  const input = document.getElementById("product-search");
  const clear = document.getElementById("clear-search");
  const filters = document.getElementById("category-filters");

  input?.addEventListener("input", () => {
    activeSearch = input.value;
    clear?.classList.toggle("visible", Boolean(activeSearch));
    renderProducts();
  });

  clear?.addEventListener("click", () => {
    activeSearch = "";
    if (input) input.value = "";
    clear.classList.remove("visible");
    input?.focus();
    renderProducts();
  });

  filters?.addEventListener("click", event => {
    const btn = event.target.closest("[data-category]");
    if (!btn) return;
    activeCategory = btn.dataset.category || "all";
    filters.querySelectorAll(".filter-chip").forEach(el => el.classList.toggle("active", el === btn));
    renderProducts();
  });
}

function initImageModal() {
  const modal = document.getElementById("image-modal");
  const img = document.getElementById("image-modal-img");
  const caption = document.getElementById("image-modal-caption");
  const close = document.getElementById("image-modal-close");
  if (!modal || !img) return;

  document.addEventListener("click", event => {
    const btn = event.target.closest(".product-image-button");
    if (!btn) return;
    img.src = btn.dataset.image || "";
    img.alt = btn.dataset.title || "Фото товара";
    if (caption) caption.textContent = btn.dataset.title || "";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });

  const hide = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };
  close?.addEventListener("click", hide);
  modal.addEventListener("click", event => { if (event.target === modal) hide(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") hide(); });
}

function initSaveContact() {
  const btn = document.getElementById("save-contact");
  btn?.addEventListener("click", () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Сатыбалдинова;Айнагуль;Орынбаевна;;",
      "FN:Сатыбалдинова Айнагуль Орынбаевна",
      "ORG:TEMVITA",
      "TITLE:Заместитель директора по продажам",
      `TEL;TYPE=CELL:${CONTACT_PHONE}`,
      "ADR;TYPE=WORK:;;ул. Тәуелсіздік, 22А, БЦ Quorum, 7 этаж, каб. 704;Астана;;;Казахстан",
      `URL:${location.href.split("#")[0]}`,
      "END:VCARD"
    ].join("\r\n");
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ainagul-Satybaldinova-TEMVITA.vcf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCerts();
  initQR();
  initCatalogControls();
  initImageModal();
  initSaveContact();
  initDynamicContent();
});
