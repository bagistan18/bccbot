(function () {
  const form = document.getElementById("login-form");
  const togglePwd = document.getElementById("toggle-password");
  const pwdInput = document.getElementById("password");
  const ssoBtn = document.getElementById("btn-sso");
  const egovBtn = document.getElementById("btn-egov");

  if (togglePwd && pwdInput) {
    togglePwd.addEventListener("click", () => {
      const isPassword = pwdInput.type === "password";
      pwdInput.type = isPassword ? "text" : "password";
      togglePwd.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username")?.value?.trim() || "";
      const role = username.toLowerCase().startsWith("student") ? "student" : "admin";
      if (role === "student") {
        window.location.href = "student/dashboard.html";
      } else {
        window.location.href = "admin/dashboard.html";
      }
    });
  }

  function showComingSoon(key) {
    const msg = window.QazTU?.i18n?.t(key) || "Coming soon";
    alert(msg);
  }

  ssoBtn?.addEventListener("click", () => showComingSoon("sso.comingSoon"));
  egovBtn?.addEventListener("click", () => showComingSoon("egov.comingSoon"));
})();
