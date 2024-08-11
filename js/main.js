let signinPage = document.getElementById("signinPage");
let signinContainer = document.getElementById("signinContainer");
let signupContainer = document.getElementById("signupContainer");
let signupPage = document.getElementById("signupPage");
let container = document.querySelector(".container");

signinPage.addEventListener("click", function () {
  container.style.opacity = "0";
  signupContainer.style.display = "none";
  setTimeout(function () {
    signupContainer.style.opacity = "1";

    signupContainer.style.display = "none";
    container.style.opacity = "1";
    signinContainer.style.display = "flex";
  }, 200);
});

signupPage.addEventListener("click", function () {
  container.style.opacity = "0";
  signinContainer.style.display = "none";
  setTimeout(function () {
    signinContainer.style.opacity = "1";

    signinContainer.style.display = "none";
    container.style.opacity = "1";
    signupContainer.style.display = "flex";
  }, 200);
});
