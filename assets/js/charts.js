(function () {
  function renderMetrics() {
    const root = document.getElementById("metrics-root");
    const data = window.QazTU_DASHBOARD?.metrics;
    if (!root || !data) return;

    root.innerHTML = data
      .map((m) => {
        const badgeClass = m.deltaType === "positive" ? "badge-green" : "badge-neutral";
        return `
          <article class="metric-card">
            <span class="metric-card__delta badge ${badgeClass}">${m.delta}</span>
            <div class="metric-card__icon icon-circle ${m.iconClass}">
              ${window.QazTU?.layout?.iconSvg?.(m.icon) || ""}
            </div>
            <div class="metric-card__value">${m.value}</div>
            <div class="metric-card__label">${m.label}</div>
          </article>`;
      })
      .join("");
  }

  function renderLists() {
    const ann = document.getElementById("announcements-root");
    const act = document.getElementById("activity-root");
    const qa = document.getElementById("quick-actions-root");
    const dash = window.QazTU_DASHBOARD;

    if (ann && dash.announcements) {
      ann.innerHTML = dash.announcements
        .map(
          (a) => `
        <div class="list-item">
          <div class="list-item__icon icon-circle ${a.iconClass}" style="width:2.25rem;height:2.25rem">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 13v-2z"/></svg>
          </div>
          <div class="list-item__body">
            <div class="list-item__title">${a.title}</div>
            <div class="list-item__meta">${a.meta}</div>
          </div>
        </div>`
        )
        .join("");
    }

    if (act && dash.activity) {
      act.innerHTML = dash.activity
        .map(
          (a) => `
        <div class="activity-item">
          <div class="activity-avatar">${a.initials}</div>
          <div>
            <div class="activity-item__text">${a.text}</div>
            <div class="activity-item__time">${a.time}</div>
          </div>
        </div>`
        )
        .join("");
    }

    if (qa && dash.quickActions) {
      qa.innerHTML = dash.quickActions
        .map(
          (q) => `
        <a href="${q.href}" class="quick-action">
          <span class="quick-action__icon ${q.iconClass}">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          </span>
          ${q.label}
        </a>`
        )
        .join("");
    }
  }

  function initCharts() {
    const perf = window.QazTU_DASHBOARD?.performance;
    const faculty = window.QazTU_DASHBOARD?.facultyDistribution;
    if (typeof Chart === "undefined") return;

    const barCtx = document.getElementById("chart-performance");
    if (barCtx && perf) {
      new Chart(barCtx, {
        type: "bar",
        data: {
          labels: perf.labels,
          datasets: [
            {
              label: "GPA Avg",
              data: perf.gpa,
              backgroundColor: "#2563eb",
              borderRadius: 6,
            },
            {
              label: "Pass Rate",
              data: perf.passRate,
              backgroundColor: "#38bdf8",
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, max: 100, ticks: { callback: (v) => v + "%" } },
            x: { grid: { display: false } },
          },
        },
      });
    }

    const donutCtx = document.getElementById("chart-faculty");
    if (donutCtx && faculty) {
      new Chart(donutCtx, {
        type: "doughnut",
        data: {
          labels: faculty.map((f) => f.label),
          datasets: [
            {
              data: faculty.map((f) => f.value),
              backgroundColor: faculty.map((f) => f.color),
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "65%",
          plugins: {
            legend: {
              position: "right",
              labels: { boxWidth: 12, padding: 12, font: { size: 12 } },
            },
          },
        },
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderMetrics();
    renderLists();
    initCharts();
  });
})();
