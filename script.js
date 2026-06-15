// ---- Heatmap ----
function generateHeatmap() {
  const container = document.getElementById("heatmap");
  if (!container) return;

  const weeks = 26;
  const days = 7;

  // Simulate realistic activity — more active in recent weeks
  for (let w = 0; w < weeks; w++) {
    const col = document.createElement("div");
    col.className = "week-col";

    for (let d = 0; d < days; d++) {
      const cell = document.createElement("div");
      const recency = w / weeks; // 0 = oldest, 1 = most recent
      const rand = Math.random();

      // More activity in recent weeks
      let level;
      if (rand < 0.3 - recency * 0.1) {
        level = 0;
      } else if (rand < 0.5) {
        level = 1;
      } else if (rand < 0.72) {
        level = 2;
      } else if (rand < 0.88) {
        level = 3;
      } else {
        level = 4;
      }

      // Weekends slightly less active
      if ((d === 0 || d === 6) && Math.random() < 0.3) level = Math.max(0, level - 1);

      cell.className = `day d-${level}`;
      cell.title = `${level === 0 ? "No" : level === 4 ? "High" : "Some"} activity`;
      col.appendChild(cell);
    }

    container.appendChild(col);
  }
}

// ---- Score info toggle ----
function setupScoreToggle() {
  const btn = document.getElementById("score-info-btn");
  const box = document.getElementById("score-info");
  if (!btn || !box) return;

  btn.addEventListener("click", () => {
    box.classList.toggle("hidden");
    btn.textContent = box.classList.contains("hidden")
      ? "How is this calculated?"
      : "Hide";
  });
}

// ---- Bar animation on scroll ----
function animateBars() {
  const fills = document.querySelectorAll(".bar-fill");
  fills.forEach((fill) => {
    const target = fill.style.width;
    fill.style.width = "0%";
    setTimeout(() => {
      fill.style.width = target;
    }, 200);
  });
}

// ---- Smooth scroll for nav links ----
function setupNavLinks() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // Update active state
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
}

// ---- Opportunity buttons (demo) ----
function setupOppButtons() {
  const btns = document.querySelectorAll(".opp-card .btn-primary");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = "Applied!";
      btn.style.background = "#3B6D11";
      btn.disabled = true;
    });
  });
}

// ---- Score counter animation ----
function animateScore() {
  const el = document.querySelector(".score-number");
  if (!el) return;

  const target = parseInt(el.textContent);
  let current = target - 80;
  const step = Math.ceil((target - current) / 40);

  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(interval);
  }, 20);
}

// ---- Init ----
document.addEventListener("DOMContentLoaded", () => {
  generateHeatmap();
  setupScoreToggle();
  setupNavLinks();
  setupOppButtons();

  // Slight delay so page renders first
  setTimeout(() => {
    animateBars();
    animateScore();
  }, 300);
});
