const showNav = document.getElementById("showNav");
const mobileNav = document.getElementById("mobileNav");
const darkMode = document.getElementById("dark-switch");
if (showNav)
  showNav.addEventListener("click", (event) => {
    event.preventDefault();
    showNav.classList.toggle("rotate");
    mobileNav.classList.toggle("navigation__show-links");
  });
if (darkMode)
  darkMode.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("moon").classList.toggle("hidden");
    document.getElementById("sun").classList.toggle("hidden");
    document.body.classList.toggle("dark");
  });
