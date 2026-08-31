/* Temvita Digital Business Card App */

const PRODUCTS = [
  {
    art: "Модель 50C",
    title: "Тонометр TM Temvita 50C",
    desc: "Анероидный измеритель артериального давления. Манжета 22–42 см. Стетоскоп в комплекте. Для клиник и домашнего использования. Премиум-качество, гарантия 2 года.",
    prepay: 5408,
    retail: 7030,
    img: "images/content (3).jpg"
  },
  {
    art: "Модель 50B",
    title: "Тонометр TM Temvita 50B",
    desc: "Анероидный измеритель артериального давления. Манжета 25,5–40,6 см. Стетоскоп в комплекте. Надёжный прибор для контроля АД и пульса.",
    prepay: 5408,
    retail: 7030,
    img: "images/content (1).jpg"
  },
  {
    art: "TM Temvita Teddy",
    title: "Электронный термометр Teddy",
    desc: "Диапазон 32,0–42,9 °C. Точность ±0,1 °C. Измерение 60 сек. Гибкий наконечник, звуковой сигнал, память, водонепроницаемый. Компактный и безопасный для детей.",
    prepay: 1462,
    retail: 1900,
    img: "images/content (15).jpg"
  },
  {
    art: "TM Temvita Classic",
    title: "Электронный термометр Classic",
    desc: "Диапазон 32,0–42,9 °C. Точность ±0,1 °C. Измерение 60 сек. Гибкий наконечник Ø 3 мм, память последнего измерения, автоотключение, водонепроницаемый.",
    prepay: 1154,
    retail: 1500,
    img: "images/content (14).jpg"
  },
  {
    art: "01901",
    title: "Бандаж «Шина Фрейка»",
    desc: "Фиксирующий бандаж на тазобедренный сустав для новорождённых. Размеры 1–4 (14–27 см между подколенными ямками). Регулируемые ремни, мягкий хлопок. При дисплазии, предвывихе и подвывихе бедра.",
    prepay: 3838,
    retail: 4990,
    img: "images/content (13).jpg"
  },
  {
    art: "01902",
    title: "Бандаж детский для пупочной грыжи",
    desc: "Со специальным силиконовым пилотом и застёжкой Velcro. Мягкая ткань, согревающий эффект. Для консервативного лечения пупочных грыж у детей до 3 лет и профилактики ущемления.",
    prepay: 2900,
    retail: 3770,
    img: "images/content (4).jpg"
  },
  {
    art: "01903",
    title: "Бандаж эластичный дородовой",
    desc: "Снимает нагрузку с поясницы и поддерживает живот. Широкая лента 15 см, дополнительные крепления, дышащий эластичный материал. Размеры по окружности талии 68–120 см.",
    prepay: 3800,
    retail: 4940,
    img: "images/content (17).jpg"
  },
  {
    art: "01904",
    title: "Бандаж фиксирующий эластичный",
    desc: "С жёсткими вставками для поясничного отдела. При нестабильности, спондилолистезе, грыжах дисков. Дышащий эластичный материал. Размеры 1–6 (окружность талии 68–128 см).",
    prepay: 6154,
    retail: 8000,
    img: "images/content (2).jpg"
  },
  {
    art: "01906",
    title: "Повязка на коленный сустав",
    desc: "Неопрен с открытой чашечкой. Фиксация при травмах и нагрузках, улучшает кровообращение. Универсальная для левой и правой ноги. Размеры 1–5 (обхват 32–50 см).",
    prepay: 4000,
    retail: 5200,
    img: "images/content (12).jpg"
  },
  {
    art: "01907",
    title: "Повязка на голеностопный сустав",
    desc: "Медицинская повязка из неопрена. Снимает отёк, фиксирует сустав при травмах и спорте. Дышащий материал. Размеры 1–4 (окружность 13–29 см).",
    prepay: 3077,
    retail: 4000,
    img: "images/content (5).jpg"
  },
  {
    art: "01908",
    title: "Трусы медицинские для мальчиков",
    desc: "После обрезания. Защита от травм, мягкая ткань, воздухообмен. Размер по весу: 1 (12–17 кг), 2 (18–23 кг). Способствуют скорейшему заживлению.",
    prepay: 2154,
    retail: 2800,
    img: "images/content (6).jpg"
  },
  {
    art: "01909",
    title: "Повязка на лучезапястный сустав",
    desc: "Неопреновая фиксация запястья. Эластичность, удобная посадка, для реабилитации после травм. Универсальная для левой и правой руки.",
    prepay: 2308,
    retail: 3000,
    img: "images/content (7).jpg"
  },
  {
    art: "01910",
    title: "Бандаж поддерживающий для руки",
    desc: "Левый / правый. Для реабилитации после переломов, растяжений, гипсовой иммобилизации. Регулируемый ремень, дышащий материал. Размеры по длине предплечья 27–46 см.",
    prepay: 3462,
    retail: 4500,
    img: "images/content.jpg"
  },
  {
    art: "01912",
    title: "Воротник ортопедический жёсткий",
    desc: "Полная фиксация шейного отдела. После операций, нестабильности, переломов. Гипоаллергенный, можно использовать в душе. Размеры 1–4 (окружность шеи 36–47 см).",
    prepay: 5231,
    retail: 6800,
    img: "images/content (11).jpg"
  },
  {
    art: "01914",
    title: "Корректор осанки",
    desc: "Для профилактики и коррекции нарушений осанки, сколиоза, кифоза, сутулости. Дышащий эластичный материал. Размеры 0–4 (окружность грудной клетки 59–110 см).",
    prepay: 3308,
    retail: 4300,
    img: "images/content-optimized.jpg"
  },
  {
    art: "01916",
    title: "Воротник мягкий детский (Шина Шанца)",
    desc: "Лёгкая фиксация шейного отдела у детей. 4 размера (высота 2,7–6,5 см, длина 28–36 см). Мягкая безопасная фиксация без давления.",
    prepay: 2769,
    retail: 3600,
    img: "images/WhatsApp Image 2026-08-31 at 11.25.05.jpeg"
  },
  {
    art: "01929",
    title: "Бандаж послеоперационный",
    desc: "Поддержка мышц брюшного пресса после операций, при грыжах, опущении почек, после родов. Эластичная воздухопроницаемая лента. Размеры XS–XXL (55–115 см).",
    prepay: 5000,
    retail: 6500,
    img: "images/WhatsApp Image 2026-08-31 at 11.25.04.jpeg"
  },
  {
    art: "01930",
    title: "Воротник мягкий взрослый (Шина Шанца)",
    desc: "Лёгкая фиксация шейного отдела, разгрузка позвонков, нормализация кровообращения. Согревающий эффект. Размеры 3–6 (окружность шеи 36–57 см, высота 7,5–11 см).",
    prepay: 3846,
    retail: 5000,
    img: "images/WhatsApp Image 2026-08-31 at 11.25.04 (1).jpeg"
  }
];

const CERTIFICATES = [
  { id: "c1", name: "Тонометр TM Temvita 50B — Сертификат соответствия", reg: "РК МИ (МТ)-0№028043 / KZ.7700.02.01.01178938", date: "01.10.2024", file: "certificates/Сертификат 1.pdf" },
  { id: "c2", name: "Тонометр TM Temvita 50C — Сертификат соответствия", reg: "РК МИ (МТ)-0№028043 / KZ.7700.02.01.01178932", date: "01.10.2024", file: "certificates/Сертификат 2.pdf" },
  { id: "c3", name: "Бинт эластичный медицинский NORMAL", reg: "РК МИ (ИМН)-0№026666", date: "29.06.2023", file: "certificates/Сертификат 3.pdf" },
  { id: "c4", name: "Повязка на голеностоп (01907)", reg: "РК МИ (ИМН)-0№027139", date: "22.09.2023", file: "certificates/Сертификат 4.pdf" },
  { id: "c5", name: "Бандаж детский для пупочной грыжи (01902)", reg: "РК МИ (ИМН)-0№027138", date: "22.09.2023", file: "certificates/Сертификат 5.pdf" },
  { id: "c6", name: "Бандаж фиксирующий эластичный (01904)", reg: "РК МИ (ИМН)-0№027216", date: "10.10.2023", file: "certificates/Сертификат 6.pdf" },
  { id: "c7", name: "Бандаж поддерживающий для руки (01910)", reg: "РК МИ (ИМН)-0№027157", date: "27.09.2023", file: "certificates/Сертификат 7.pdf" },
  { id: "c8", name: "Воротник ортопедический (01930 / 01916)", reg: "РК МИ (ИМН)-0№027344", date: "03.11.2023", file: "certificates/Сертификат 8.pdf" },
  { id: "c9", name: "Бандаж эластичный дородовой (01903)", reg: "РК МИ (ИМН)-0№027156", date: "27.09.2023", file: "certificates/Сертификат 9.pdf" },
  { id: "c10", name: "Электронный термометр Temvita Classic / Teddy", reg: "РК МИ (МТ)-0№028042", date: "24.05.2024", file: "certificates/Сертификат 10.pdf" },
  { id: "c11", name: "Бандаж послеоперационный (01929)", reg: "РК МИ (ИМН)-0№027031", date: "07.09.2023", file: "certificates/Сертификат 11.pdf" },
  { id: "c12", name: "Трусы медицинские для мальчиков", reg: "РК МИ (ИМН)-0№027343", date: "03.11.2023", file: "certificates/Сертификат 12.pdf" },
  { id: "c13", name: "Бандаж «Шина Фрейка»", reg: "РК МИ (ИМН)-0№027158", date: "27.09.2023", file: "certificates/Сертификат 13.pdf" }
];

function formatPrice(n) {
  return n.toLocaleString("ru-RU") + " ₸";
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card">
      <div class="img-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.src='images/content (1).jpg'">
      </div>
      <div class="product-body">
        <div class="product-art">Арт. ${p.art}</div>
        <h3 class="product-title">${p.title}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-price">
          <span class="price-main">${formatPrice(p.prepay)}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCerts() {
  const grid = document.getElementById("certs-grid");
  const stored = JSON.parse(localStorage.getItem("temvita_certs") || "null") || CERTIFICATES;
  grid.innerHTML = stored.map(c => `
    <div class="cert-card" data-id="${c.id}">
      <h3>${c.name}</h3>
      <div class="cert-meta">${c.reg}<br>Дата регистрации: ${c.date}</div>
      <div class="cert-actions">
        <a class="btn-dl" href="${c.file}" download target="_blank" rel="noopener">Скачать PDF</a>
        <button type="button" class="btn-rm" data-id="${c.id}">Удалить</button>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".btn-rm").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const current = JSON.parse(localStorage.getItem("temvita_certs") || "null") || CERTIFICATES;
      const next = current.filter(x => x.id !== id);
      localStorage.setItem("temvita_certs", JSON.stringify(next));
      renderCerts();
    });
  });
}

function initQR() {
  const url = window.location.href.split("#")[0];
  const opts = { width: 140, height: 140, colorDark: "#0a1628", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.M };
  const el1 = document.getElementById("qrcode");
  const el2 = document.getElementById("qrcode-footer");
  if (el1) new QRCode(el1, { text: url, ...opts });
  if (el2) new QRCode(el2, { text: url, width: 100, height: 100, colorDark: "#0a1628", colorLight: "#ffffff" });
}

function initVideoAdmin() {
  // Multi-video section is static; no runtime upload needed
}

function initCertUpload() {
  const input = document.getElementById("cert-upload");
  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const current = JSON.parse(localStorage.getItem("temvita_certs") || "null") || CERTIFICATES;
    const newCert = {
      id: "u" + Date.now(),
      name: file.name.replace(/\.pdf$/i, ""),
      reg: "Загружен пользователем",
      date: new Date().toLocaleDateString("ru-RU"),
      file: url
    };
    current.unshift(newCert);
    localStorage.setItem("temvita_certs", JSON.stringify(current));
    renderCerts();
    input.value = "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCerts();
  initQR();
  initVideoAdmin();
  initCertUpload();
});
