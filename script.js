const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
// document.body.addEventListener("click", () => {
//   if (navbarLinks.classList.contains("active")) {
//     navbarLinks.classList.remove("active");
//   }
// });
