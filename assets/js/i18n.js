/**
 * QazTU i18n — loads JSON dictionaries and applies data-i18n attributes.
 */
(function () {
  const STORAGE_KEY = "qaztu-lang";
  const DEFAULT_LANG = "en";
  const SUPPORTED = ["en", "ru", "kz"];

  let currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  let dictionary = {};

  function getBasePath() {
    const scripts = document.querySelectorAll('script[src*="i18n.js"]');
    if (scripts.length) {
      const src = scripts[scripts.length - 1].getAttribute("src") || "";
      const match = src.match(/^(.*\/)assets\/js\//);
      if (match) return match[1];
    }
    const depth = (window.location.pathname.match(/\//g) || []).length - 1;
    if (depth <= 1) return "";
    return "../".repeat(depth - 1);
  }

  async function loadDictionary(lang) {
    const base = getBasePath();
    const res = await fetch(`${base}assets/i18n/${lang}.json`);
    if (!res.ok) throw new Error(`Failed to load i18n: ${lang}`);
    dictionary = await res.json();
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();
    document.documentElement.lang = lang === "kz" ? "kk" : lang;
    window.dispatchEvent(new CustomEvent("qaztu:langchange", { detail: { lang } }));
  }

  function t(key) {
    return dictionary[key] ?? key;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) el.placeholder = value;
      } else {
        el.textContent = value;
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.title = t(el.getAttribute("data-i18n-title"));
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    return loadDictionary(lang);
  }

  function getLang() {
    return currentLang;
  }

  function initLangSwitcher() {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        setLang(lang).then(() => {
          document.querySelectorAll("[data-lang]").forEach((b) => {
            b.classList.toggle("active", b.getAttribute("data-lang") === lang);
          });
        });
      });
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
  }

  window.QazTU = window.QazTU || {};
  window.QazTU.i18n = { t, setLang, getLang, loadDictionary, applyTranslations };

  document.addEventListener("DOMContentLoaded", () => {
    loadDictionary(currentLang).then(initLangSwitcher).catch(() => {
      dictionary = {};
      applyTranslations();
      initLangSwitcher();
    });
  });
})();
