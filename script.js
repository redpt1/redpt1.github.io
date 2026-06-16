/* ============================================================
 *  script.js — Academic Homepage Renderer & Language Switcher
 *
 *  Reads SITE_CONTENT from content.js and populates the DOM.
 * ============================================================ */

// ---- State ----
let currentLang = localStorage.getItem("lang") || "en";

// ---- i18n strings for nav & UI ----
const UI_STRINGS = {
  en: {
    "nav.education":    "Education",
    "nav.experience":   "Experience",
    "nav.publications": "Publications",
    "nav.competitions": "Awards",
  },
  zh: {
    "nav.education":    "教育背景",
    "nav.experience":   "工作经历",
    "nav.publications": "学术论文",
    "nav.competitions": "竞赛获奖",
  },
};

// ---- Helper: get bilingual value ----
function t(obj) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[currentLang] || obj.en || "";
}

// ---- Escape HTML ----
function esc(str) {
  const el = document.createElement("span");
  el.textContent = str;
  return el.innerHTML;
}

// ---- Render functions ----

function renderProfile() {
  const p = SITE_CONTENT.profile;
  const name = t(p.name);

  document.getElementById("nav-logo").textContent = name;
  document.getElementById("hero-name").textContent = name;
  document.getElementById("hero-title").textContent = t(p.title);
  document.getElementById("hero-email-text").textContent = p.email;
  document.getElementById("hero-email").href = "mailto:" + p.email;

  // Avatar initials
  const initials = name.split(/\s+/).map(w => w[0]).join("").toUpperCase().slice(0, 2);
  document.getElementById("hero-avatar").textContent = initials;

  // Page title
  document.title = name + " — Academic Homepage";

  // Links
  const linksEl = document.getElementById("hero-links");
  linksEl.innerHTML = "";
  (p.links || []).forEach(link => {
    const a = document.createElement("a");
    a.className = "hero-link-btn";
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = link.label;
    linksEl.appendChild(a);
  });

  // Hide links section if empty
  linksEl.style.display = (p.links && p.links.length) ? "flex" : "none";
}

function renderResearch() {
  const r = SITE_CONTENT.research;
  if (!r || !r.items || !r.items.length) {
    document.getElementById("research-section").style.display = "none";
    return;
  }
  document.getElementById("research-heading").textContent = t(r.heading);
  const tagsEl = document.getElementById("research-tags");
  tagsEl.innerHTML = r.items.map(item => `<span class="tag">${esc(t(item))}</span>`).join("");
}

function renderEducation() {
  const edu = SITE_CONTENT.education;
  document.getElementById("edu-heading").textContent = t(edu.heading);

  const list = document.getElementById("edu-list");
  list.innerHTML = edu.items.map(item => `
    <div class="timeline-item">
      <div class="timeline-header">
        <span class="timeline-school">${esc(t(item.school))}</span>
        <span class="timeline-period">${esc(t(item.period))}</span>
      </div>
      <div class="timeline-degree">${esc(t(item.degree))}</div>
      ${item.details && item.details.length ? `
        <ul class="timeline-details">
          ${item.details.map(d => `<li>${esc(t(d))}</li>`).join("")}
        </ul>` : ""}
    </div>
  `).join("");
}

function renderExperience() {
  const exp = SITE_CONTENT.experience;
  if (!exp || !exp.items || !exp.items.length) {
    document.getElementById("experience").style.display = "none";
    return;
  }
  document.getElementById("exp-heading").textContent = t(exp.heading);

  const list = document.getElementById("exp-list");
  list.innerHTML = exp.items.map(item => `
    <div class="timeline-item">
      <div class="timeline-header">
        <span class="timeline-org">${esc(t(item.org))}</span>
        <span class="timeline-period">${esc(t(item.period))}</span>
      </div>
      <div class="timeline-role">${esc(t(item.role))}</div>
      ${item.details && item.details.length ? `
        <ul class="timeline-details">
          ${item.details.map(d => `<li>${esc(t(d))}</li>`).join("")}
        </ul>` : ""}
    </div>
  `).join("");
}

function renderPublications() {
  const pub = SITE_CONTENT.publications;
  document.getElementById("pub-heading").textContent = t(pub.heading);

  const list = document.getElementById("pub-list");
  list.innerHTML = pub.items.map((item, i) => {
    const titleHTML = item.link
      ? `<a href="${esc(item.link)}" target="_blank" rel="noopener">${esc(t(item.title))}</a>`
      : esc(t(item.title));

    return `
    <div class="pub-item${item.highlight ? " highlight" : ""}">
      <div class="pub-title">${titleHTML}</div>
      <div class="pub-venue">${esc(t(item.venue))}</div>
      <div class="pub-authors">${esc(item.authors)}</div>
    </div>`;
  }).join("");
}

function renderCompetitions() {
  const comp = SITE_CONTENT.competitions;
  if (!comp || !comp.items || !comp.items.length) {
    document.getElementById("competitions").style.display = "none";
    return;
  }
  document.getElementById("comp-heading").textContent = t(comp.heading);

  const list = document.getElementById("comp-list");
  list.innerHTML = comp.items.map(item => `
    <div class="comp-item">
      <div class="comp-title">${esc(t(item.title))}</div>
      ${item.details && item.details.length ? `
        <ul class="comp-details">
          ${item.details.map(d => `<li>${esc(t(d))}</li>`).join("")}
        </ul>` : ""}
    </div>
  `).join("");
}

function renderFooter() {
  document.getElementById("footer-text").textContent = t(SITE_CONTENT.footer);
}

function renderNav() {
  const strings = UI_STRINGS[currentLang] || UI_STRINGS.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (strings[key]) el.textContent = strings[key];
  });
}

// ---- Master render ----
function renderAll() {
  renderProfile();
  renderResearch();
  renderEducation();
  renderExperience();
  renderPublications();
  renderCompetitions();
  renderFooter();
  renderNav();
}

// ---- Language switch ----
function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-zh").classList.toggle("active", lang === "zh");
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  renderAll();
}

// ---- Scroll fade-in animation ----
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

// ---- Init ----
document.addEventListener("DOMContentLoaded", () => {
  // Restore saved language
  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    currentLang = savedLang;
    document.getElementById("btn-en").classList.toggle("active", savedLang === "en");
    document.getElementById("btn-zh").classList.toggle("active", savedLang === "zh");
    document.documentElement.lang = savedLang === "zh" ? "zh-CN" : "en";
  }

  renderAll();
  initScrollAnimations();
});
