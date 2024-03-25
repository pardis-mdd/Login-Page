let menu = document.querySelector(".header-subs");
let menuBtn = document.querySelector(".header__icon");
let menuBtnIcon = document.querySelector(".header__icon i");
let eyeSlashIcon = document.getElementById("eyeSlash"); 
let passwordInput = document.querySelector(".pass__txt");
let timeCircle = document.getElementById("timeCircle");
let emailInput = document.querySelector(".Email__txt");
menuBtn.addEventListener("click", function () {
  if (menuBtnIcon.classList.contains("fas fa-bars")) {
    menu.style.left = "0";
    menuBtnIcon.classList = "fas fa-times";
  } else {
    menu.style.left = "-274px";
    menuBtnIcon.classList = "fas fa-bars";
  }
});

timeCircle.addEventListener("click", function () {
  emailInput.value = ""; 
});

eyeSlashIcon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeSlashIcon.classList = "fa fa-eye";
  } else {
    passwordInput.type = "password";
    eyeSlashIcon.classList = "fa fa-eye-slash";
  }
});
