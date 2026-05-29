/** Sets page title in topbar area for stub pages */
(function () {
  const title = document.body.dataset.pageTitle;
  if (!title) return;
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const h = document.querySelector(".topbar__title");
      if (h) h.textContent = title;
    }, 0);
  });
})();
