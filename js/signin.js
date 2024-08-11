let signinButton = document.getElementById("signin");
let userLogin = [];
let passwordInputLogin = document.querySelector("#passwordInputLogin");
let emailInputLogin = document.querySelector("#emailInputLogin");
let passwordLoginAlert = document.querySelector(".password-login-alert");
let emailLoginAlert = document.querySelector(".email-login-alert");
if (localStorage.getItem("userInfo") != null) {
  userLogin = JSON.parse(localStorage.getItem("userInfo"));
}

function login() {
  let userData = {
    email: emailInputLogin.value,
    password: passwordInputLogin.value,
  };
  if (
    userLogin.some((user) => {
      return user.email == userData.email && user.password == userData.password;
    })
  ) {
    localStorage.setItem("userEmail", userData.email);
    signinButton.setAttribute("href", "hello.html");
  } else if (emailInputLogin.value == "" && passwordInputLogin.value == "") {
    swal("Your Data is Required");
  } else if (emailInputLogin.value == "") {
    swal("Email is Required");
  } else if (passwordInputLogin.value == "") {
    swal("Password is Required");
  } else {
    swal("This Data is not Valid");
  }
}
signinButton.addEventListener("click", function () {
  login();
});
function emailLoginValidation() {
  if (validEmail.test(emailInputLogin.value.trim())) {
    emailLoginAlert.classList.replace("d-block", "d-none");
  } else {
    emailLoginAlert.classList.replace("d-none", "d-block");
  }
}
function passLoginValidation() {
  if (validPass.test(passwordInputLogin.value.trim())) {
    passwordLoginAlert.classList.replace("d-block", "d-none");
  } else {
    passwordLoginAlert.classList.replace("d-none", "d-block");
  }
}

emailInputLogin.addEventListener("input", emailLoginValidation);
passwordInputLogin.addEventListener("input", passLoginValidation);
