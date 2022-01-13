const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu");

if (window.scrollY === 0) {
  navbar.classList.remove("scrolled");
} else {
  navbar.classList.add("scrolled");
}

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    navbar.classList.remove("scrolled");
  } else {
    navbar.classList.add("scrolled");
  }
});

window.addEventListener(
  "focus",
  (e) => {
    if (e.target === window || !menuBtn.contains(e.target)) {
      if (e.target !== window && navbar.contains(e.target)) {
        navbar.classList.add("open");
      } else {
        navbar.classList.remove("open");
      }
    }
  },
  true
);

window.addEventListener(
  "click",
  (e) => {
    if (e.target !== window && menuBtn.contains(e.target)) {
      navbar.classList.toggle("open");
    } else if (e.target !== window && navbar.contains(e.target)) {
      navbar.classList.add("open");
    } else {
      navbar.classList.remove("open");
    }
  },
  true
);
