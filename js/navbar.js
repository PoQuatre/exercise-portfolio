const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.style.backgroundColor = "var(--dark)";
  }
});
