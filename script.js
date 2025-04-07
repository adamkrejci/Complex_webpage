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
const emailInput_1 = document.querySelector(".password_1");
const emailInput_2 = document.querySelector(".password_2");
const resultText = document.querySelector(".text");

emailInput_1.addEventListener("input", () => {
  const emailValue_1 = emailInput_1.value;
  const emailValue_2 = emailInput_2.value;
  if (emailValue_2.match(emailValue_1)) {
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
  if (emailValue_2 === "") {
    form.classList.remove("invalid");
    form.classList.remove("valid");
    resultText.textContent = "Heslo není vyplněné";
  }
});

emailInput_2.addEventListener("input", () => {
  const emailValue_1 = emailInput_1.value;
  const emailValue_2 = emailInput_2.value;
  if (emailValue_2.match(emailValue_1)) {
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
  if (emailValue_2 === "") {
    form.classList.remove("invalid");
    form.classList.remove("valid");
    resultText.textContent = "Heslo není vyplněné";
  }
});

// DARK MODE
// const body = document.querySelector("body");
// const header = document.querySelector("header");
// const links = document.querySelectorAll("nav ul li a");
// const menu_icon = document.querySelector(".menu-icon");
// const links_mobile = document.querySelectorAll("header nav");

// btnLight.addEventListener("click", () => {
//   body.style.backgroundColor = "white";
//   body.style.color = "black";
//   header.style.backgroundColor = "#4d7282";
//   links.forEach((links) => {
//     links.style.color = "black";
//   });
//   menu_icon.style.color = "black";
//   links_mobile.forEach((links_mobile) => {
//     links_mobile.style.backgroundColor = "#4d7282";
//   });
// });
// btnDark.addEventListener("click", () => {
//   body.style.backgroundColor = "black";
//   body.style.color = "white";
//   header.style.backgroundColor = "#15304c";
//   links.forEach((links) => {
//     links.style.color = "white";
//   });
//   menu_icon.style.color = "white";
//   links_mobile.forEach((links_mobile) => {
//     links_mobile.style.backgroundColor = "#15304c";
//   });
// });
//body

//   body.style.backgroundColor = "white";
//   body.style.color = "black";
//   header.style.backgroundColor = "#4d7282";
//   links.forEach((links) => {
//     links.style.color = "black";
//   })
const body = document.querySelector("body"); // Get the DIV element
const header = document.querySelector("header");
const nav_li_a = document.querySelectorAll("li a");
const header_nav = document.querySelectorAll("header nav");
function toDark() {
  body.classList.remove("body-light"); // Remove mystyle class from DIV
  body.classList.add("body-dark"); // Add newone class to DIV
  header.classList.remove("header-light"); // Remove mystyle class from DIV
  header.classList.add("header-dark"); // Add newone class to DIV
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
  body.classList.remove("body-dark"); // Remove mystyle class from DIV
  body.classList.add("body-light"); // Add newone class to DIV
  header.classList.remove("header-dark"); // Remove mystyle class from DIV
  header.classList.add("header-light"); // Add newone class to DIV
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
// //header
// //links
// const links = document.querySelectorAll("nav ul li a");
// function toDark() {
//   element.body.remove("links-light"); // Remove mystyle class from DIV
//   element.body.add("links-dark"); // Add newone class to DIV
// }

// function toLight() {
//   element.body.remove("links-dark"); // Remove mystyle class from DIV
//   element.body.add("links-light"); // Add newone class to DIV
// }
// //header nav
// const links = document.querySelectorAll("header nav");
// function toDark() {
//   element.body.remove("nav-light"); // Remove mystyle class from DIV
//   element.body.add("nav-dark"); // Add newone class to DIV
// }

// function toLight() {
//   element.body.remove("nav-dark"); // Remove mystyle class from DIV
//   element.body.add("nav-light"); // Add newone class to DIV
// }
// //menu icon
// const menu_icon = document.querySelector(".menu-icon");
// function toDark() {
//   element.body.remove("menu_icon-light"); // Remove mystyle class from DIV
//   element.body.add("menu_icon-dark"); // Add newone class to DIV
// }

// function toLight() {
//   element.body.remove("menu_icon-dark"); // Remove mystyle class from DIV
//   element.body.add("menu_icon-light"); // Add newone class to DIV
// }

const mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// Add an event listener to the button for the "click" event
mybutton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
