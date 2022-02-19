const showNav = document.getElementById("showNav");
const mobileNav = document.getElementById("mobileNav");
const darkMode = document.getElementById("dark-switch");
const loader = document.getElementById("loader");

// document.onreadystatechange = () => {
//   if (document.readyState !== "complete") {
//     document.body.style.visibility = "hidden";
//     loader.style.visibility = "visble !important";
//   } else {
//     loader.style.visibility = "hidden";
//     document.body.style.visibility = "visible";
//   }
// };
// const text =
//   "Olá eu sou KELVEN RUBALAINE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi modi quod aspernatur omnis illum minima repudiandae et beatae aut porro, in uas qui. Corrupti minus deleniti quisquam quia iusto.";
// let iterator = 0;
// const startTypyng = () => {
//   if (iterator < text.length) {
//     document.getElementById("typewriter").innerHTML += text.charAt(iterator);
//     iterator++;
//     setTimeout(startTypyng, 50);
//   }
// };
document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  document.body.classList.add(localStorage.theme || "x");
  document.getElementById("sun").classList.remove(localStorage.sun || "x");
  document.getElementById("moon").classList.add(localStorage.sun || "x");
});
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
    localStorage.setItem("theme", "dark");
    localStorage.setItem("sun", "hidden");

    if (!document.body.classList.contains("dark")) {
      localStorage.removeItem("theme");
      localStorage.removeItem("sun");
    }
  });
