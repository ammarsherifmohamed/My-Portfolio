/** @format */

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight;

  const scrollPosition = window.innerHeight + window.scrollY;
  if (scrollHeight - scrollPosition < 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const form = document.getElementById("contactForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

// Email Regex
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Validation function
function validateInput(input, errorElement, condition) {
  if (!condition) {
    errorElement.classList.remove("hidden");
    input.classList.add("border-red-500");
  } else {
    errorElement.classList.add("hidden");
    input.classList.remove("border-red-500");
  }
}

name.addEventListener("input", () => {
  validateInput(name, nameError, name.value.trim() !== "");
});

email.addEventListener("input", () => {
  validateInput(email, emailError, emailPattern.test(email.value));
});

subject.addEventListener("input", () => {
  validateInput(subject, subjectError, subject.value.trim() !== "");
});

message.addEventListener("input", () => {
  validateInput(message, messageError, message.value.trim() !== "");
});


form.addEventListener("submit", function (e) {
  e.preventDefault();

  validateInput(name, nameError, name.value.trim() !== "");
  validateInput(email, emailError, emailPattern.test(email.value));
  validateInput(subject, subjectError, subject.value.trim() !== "");
  validateInput(message, messageError, message.value.trim() !== "");

  if (
    name.value.trim() !== "" &&
    emailPattern.test(email.value) &&
    subject.value.trim() !== "" &&
    message.value.trim() !== ""
  ) {
    alert("Form submitted successfully ✅");
    form.reset();
  }
});



const toggle = document.getElementById("darkToggle");
const html = document.documentElement;

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  toggle.checked = true;
}

