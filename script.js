// Selecting the menu icon, the menu list, and the hamburger icon
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

// Event listener to switch menu visibility when clicking the icon
menuIcon.addEventListener("click", () => {
  // Check if the current icon is the hamburger (three bars)
  if (hamburgerIcon.classList[1] === "fa-bars") {
    // If it's the hamburger icon, change it to an X icon
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block"; // Show the menu
  } else {
    // If it's the X icon, change it back to the hamburger icon
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none"; // Hide the menu
  }
});

// Password validation
const form = document.getElementById("form");
const password_Input_1 = document.querySelector(".password_1");
const password_Input_2 = document.querySelector(".password_2");
const resultText = document.querySelector(".text");

// Function to validate passwords
const validatePaswords = () => {
  const password_Value_1 = password_Input_1.value;
  const password_Value_2 = password_Input_2.value;

  // If the first password field is empty
  if (password_Value_1 === "") {
    form.classList.remove("invalid");
    form.classList.remove("valid");
    resultText.textContent = "Heslo není vyplněné"; // Display following message
  } else if (password_Value_2 === password_Value_1) {
    // If both passwords match
    form.classList.add("valid");
    form.classList.remove("invalid");
    resultText.textContent = "Hesla jsou shodná."; // Display following message
    resultText.style.color = "#00ff00"; // Green color
  } else {
    // If passwords do not match
    form.classList.add("invalid");
    form.classList.remove("valid");
    resultText.textContent = "Hesla nejsou shodná."; // Display following message
    resultText.style.color = "#ff0000"; // Red color
  }
};

// Event listeners for the password input fields
password_Input_1.addEventListener("input", validatePaswords);
password_Input_2.addEventListener("input", validatePaswords);

// Light/Dark mode switch selectors
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav_li_a = document.querySelectorAll("li a");
const header_nav = document.querySelectorAll("header nav");

// Function to switch to dark mode
function toDark() {
  body.classList.remove("body-light");
  body.classList.add("body-dark");
}

// Function to switch to light mode
function toLight() {
  body.classList.remove("body-dark");
  body.classList.add("body-light");
}

// Event listeners for buttons to toggle light/dark mode
document.getElementById("btdark").addEventListener("click", toDark);
document.getElementById("btlight").addEventListener("click", toLight);

// Scroll-to-top button functionality
const mybutton = document.getElementById("scrollToTopBtn");

// Event listener to show the scroll-to-top button when scrolling down
window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block"; // Show button
  } else {
    mybutton.style.display = "none"; // Hide button
  }
});

// Event listener to scroll the page smoothly to the top when clicking the button
mybutton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
});
