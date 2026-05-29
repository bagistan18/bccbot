/**
 * Initializes admin or student app shell on stub/dashboard pages.
 */
(function () {
  const role = document.body.dataset.role;
  const activePage = document.body.dataset.page;

  function init() {
    if (role === "admin" && window.QazTU_ADMIN_NAV) {
      window.QazTU.layout.mountSidebar("admin", window.QazTU_ADMIN_NAV, activePage);
      window.QazTU.layout.mountTopbar({
        title: "Admin Dashboard",
        titleI18n: "admin.title",
        userName: "Askar Bekmukhanov",
        userRole: "System Administrator",
        roleI18n: "role.admin",
        notifications: 3,
      });
    } else if (role === "student" && window.QazTU_STUDENT_NAV) {
      window.QazTU.layout.mountSidebar("student", window.QazTU_STUDENT_NAV, activePage);
      window.QazTU.layout.mountTopbar({
        title: "Student Dashboard",
        titleI18n: "student.title",
        userName: "Aida Nurpeisova",
        userRole: "Student",
        roleI18n: "role.student",
        notifications: 1,
      });
    }

    window.addEventListener("qaztu:langchange", () => {
      if (window.QazTU?.i18n) window.QazTU.i18n.applyTranslations();
    });
  }

  function runInit() {
    init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runInit);
  } else {
    runInit();
  }
})();
