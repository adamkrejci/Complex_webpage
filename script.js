// MENU
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});
// Password comparison
const form = document.getElementById("form");
const password_Input_1 = document.querySelector(".password_1");
const password_Input_2 = document.querySelector(".password_2");
const resultText = document.querySelector(".text");

const validatePaswords = () => {
  const password_Value_1 = password_Input_1.value;
  const password_Value_2 = password_Input_2.value;

  if (password_Value_1 === "") {
    form.classList.remove("invalid");
    form.classList.remove("valid");
    resultText.textContent = "Heslo není vyplněné";
  } else if (password_Value_2 === password_Value_1) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    resultText.textContent = "Heslo je shodné.";
    resultText.style.color = "#00ff00";
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
    resultText.textContent = "Heslo není shodné.";
    resultText.style.color = "#ff0000";
  }
};
password_Input_1.addEventListener("input", validatePaswords);
password_Input_2.addEventListener("input", validatePaswords);

//light - dark mode
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav_li_a = document.querySelectorAll("li a");
const header_nav = document.querySelectorAll("header nav");
function toDark() {
  body.classList.remove("body-light");
  body.classList.add("body-dark");
  header.classList.remove("header-light");
  header.classList.add("header-dark");
  nav_li_a.forEach((link) => {
    link.classList.remove("link-light");
    link.classList.add("link-dark");
  });
  header_nav.forEach((link) => {
    link.classList.remove("header_nav-light");
    link.classList.add("header_nav-dark");
  });
}
function toLight() {
  body.classList.remove("body-dark");
  body.classList.add("body-light");
  header.classList.remove("header-dark");
  header.classList.add("header-light");
  nav_li_a.forEach((link) => {
    link.classList.remove("link-dark");
    link.classList.add("link-light");
  });
  header_nav.forEach((link) => {
    link.classList.remove("header_nav-dark");
    link.classList.add("header_nav-light");
  });
}
document.getElementById("btdark").addEventListener("click", toDark);
document.getElementById("btlight").addEventListener("click", toLight);

//rolling to start button
const mybutton = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

mybutton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
