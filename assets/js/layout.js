/**
 * QazTU layout — mounts sidebar and topbar from nav config.
 */
(function () {
  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes("/admin/") || path.includes("/student/")) return "../";
    return "";
  }

  function iconSvg(name) {
    const icons = {
      "layout-dashboard": '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
      users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      "graduation-cap": '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
      "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
      building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M8 14h.01M16 14h.01M12 14h.01"/>',
      layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
      calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
      megaphone: '<path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
      "bar-chart": '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
      settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
      "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
      clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
      award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
      user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    };
    const paths = icons[name] || icons.user;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  }

  function mountSidebar(role, navItems, activeHref) {
    const el = document.getElementById("sidebar-root");
    if (!el) return;

    const base = getBasePath();
    const currentPage = activeHref || window.location.pathname.split("/").pop();

    const links = navItems
      .map((item) => {
        const href = base + item.href;
        const isActive = item.href === currentPage || currentPage === item.href;
        const labelAttr = item.i18n ? `data-i18n="${item.i18n}"` : "";
        return `
          <a href="${href}" class="sidebar-link ${isActive ? "active" : ""}">
            <span class="sidebar-link__icon">${iconSvg(item.icon)}</span>
            <span class="sidebar-link__text" ${labelAttr}>${item.label}</span>
          </a>`;
      })
      .join("");

    el.innerHTML = `
      <aside class="sidebar">
        <div class="sidebar__brand">
          <div class="logo">
            <div class="logo-mark">Q</div>
            <div>
              <div class="logo-text">QazTU</div>
            </div>
          </div>
        </div>
        <nav class="sidebar__nav">${links}</nav>
        <div class="sidebar__footer">
          <a href="${base}login.html" class="sidebar-link sidebar-link--logout">
            <span class="sidebar-link__icon">${iconSvg("log-out")}</span>
            <span class="sidebar-link__text" data-i18n="nav.logout">Log out</span>
          </a>
        </div>
      </aside>`;

    if (window.QazTU?.i18n) window.QazTU.i18n.applyTranslations();
  }

  function mountTopbar(config) {
    const el = document.getElementById("topbar-root");
    if (!el) return;

    const base = getBasePath();
    const titleKey = config.titleI18n || "admin.title";
    const userName = config.userName || "Askar Bekmukhanov";
    const userRole = config.userRole || "System Administrator";
    const roleKey = config.roleI18n || "role.admin";
    const notifCount = config.notifications ?? 3;

    el.innerHTML = `
      <header class="topbar">
        <h1 class="topbar__title" data-i18n="${titleKey}">${config.title || "Admin Dashboard"}</h1>
        <div class="topbar__actions">
          <div class="lang-switch lang-switch--compact" role="group" aria-label="Language">
            <button type="button" data-lang="en" class="lang-btn">EN</button>
            <button type="button" data-lang="ru" class="lang-btn">RU</button>
            <button type="button" data-lang="kz" class="lang-btn">KZ</button>
          </div>
          <button type="button" class="topbar__icon-btn" aria-label="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            ${notifCount > 0 ? `<span class="badge-notification">${notifCount}</span>` : ""}
          </button>
          <div class="topbar__profile">
            <img class="topbar__avatar" src="${base}assets/images/avatar-placeholder.svg" alt="" width="40" height="40" />
            <div class="topbar__profile-info">
              <span class="topbar__name">${userName}</span>
              <span class="topbar__role" data-i18n="${roleKey}">${userRole}</span>
            </div>
          </div>
        </div>
      </header>`;

    document.querySelectorAll("#topbar-root [data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        window.QazTU?.i18n?.setLang(lang)?.then(() => {
          document.querySelectorAll("#topbar-root [data-lang], #sidebar-root [data-lang]").forEach((b) => {
            b.classList.toggle("active", b.getAttribute("data-lang") === lang);
          });
        });
      });
    });

    if (window.QazTU?.i18n) {
      const lang = window.QazTU.i18n.getLang();
      document.querySelectorAll("#topbar-root [data-lang]").forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-lang") === lang);
      });
      window.QazTU.i18n.applyTranslations();
    }
  }

  window.QazTU = window.QazTU || {};
  window.QazTU.layout = { mountSidebar, mountTopbar, getBasePath, iconSvg };
})();
