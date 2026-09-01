const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const body = document.body;
const loader = document.getElementById("loader");

body.classList.add("is-loading");

const finishLoad = () => {
  if (loader) loader.classList.add("done");
  body.classList.remove("is-loading");
  body.classList.add("ready");
};

if (reduce || !loader) {
  finishLoad();
} else {
  window.setTimeout(finishLoad, 1500);
}

const header = document.querySelector(".site-header");
window.addEventListener(
  "scroll",
  () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 24);
  },
  { passive: true }
);

const toggle = document.querySelector(".menu-toggle");
const scrim = document.getElementById("menuScrim");

const setMenu = (open) => {
  if (!header || !toggle) return;
  header.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
  if (scrim) scrim.hidden = !open;
  body.classList.toggle("menu-open", open);
};

if (toggle && header) {
  toggle.addEventListener("click", () => setMenu(!header.classList.contains("open")));
  header.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  if (scrim) scrim.addEventListener("click", () => setMenu(false));
}

const tabs = [...document.querySelectorAll(".job-tabs [role='tab']")];
const panels = document.querySelectorAll(".job-panel");
const selectJob = (i) => {
  tabs.forEach((t, idx) => t.setAttribute("aria-selected", String(idx === i)));
  panels.forEach((p, idx) => {
    const on = idx === i;
    p.classList.toggle("is-on", on);
    p.hidden = !on;
  });
};
tabs.forEach((tab) => {
  tab.addEventListener("click", () => selectJob(Number(tab.dataset.job)));
});

const navLinks = document.querySelectorAll('.nav-links ol a[href^="#"]');
const sections = [...navLinks]
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

window.addEventListener(
  "scroll",
  () => {
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top < 140) current = section;
    }
    navLinks.forEach((a) => {
      a.classList.toggle("is-active", a.getAttribute("href") === `#${current.id}`);
    });
  },
  { passive: true }
);

const spot = document.getElementById("spot");
if (spot && !reduce) {
  window.addEventListener(
    "pointermove",
    (e) => {
      spot.style.left = `${e.clientX}px`;
      spot.style.top = `${e.clientY}px`;
    },
    { passive: true }
  );
}
