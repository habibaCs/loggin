let userInputSign = document.getElementById("userInputSign");
let emailInputSign = document.getElementById("emailInputSign");
let passInputSign = document.getElementById("passInputSign");
let userAlert = document.querySelector(".user-alert");
let emailAlert = document.querySelector(".email-alert");
let passwordAlert = document.querySelector(".password-alert");
let userInfo = [];
let signupButton = document.getElementById("signupButton");
let validUserName = /^[a-zA-Z0-9]{3,}$/;
let validEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
let validPass = /^(?=.*[0-9A-Za-z].*)[0-9A-Za-z]{8,}$/;
if (localStorage.getItem("userInfo") != null) {
  userInfo = JSON.parse(localStorage.getItem("userInfo"));
}
function aa() {
  button.addEventListener("click", function () {
    location.reload();
  });
}
function saveData() {
  let userData = {
    userName: userInputSign.value,
    email: emailInputSign.value,
    password: passInputSign.value,
  };
  if (
    userInfo.some((email) => {
      return email.email == userData.email;
    })
  ) {
    swal("This Email is added Befor");
  } else if (!validUserName.test(userData.userName.trim())) {
  } else if (!validEmail.test(userData.email.trim())) {
  } else if (!validPass.test(userData.password.trim())) {
  } else {
    userInfo.push(userData);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    swal({ title: "Your Data Added Successfully", button: true }).then(
      (reload) => {
        if (reload) {
          location.reload();
        }
      }
    );
    clearFields();
  }
}
function checkFields() {
  if (
    userInputSign.value == "" &&
    emailInputSign.value == "" &&
    passInputSign.value == ""
  ) {
    swal("Your Data is Required");
  } else if (userInputSign.value == "") {
    swal("UserName is Required");
  } else if (emailInputSign.value == "") {
    swal("Email is Required");
  } else if (passInputSign.value == "") {
    swal("Password is Required");
  } else {
    saveData();
  }
}
signupButton.addEventListener("click", function (e) {
  checkFields();
});

function clearFields() {
  userInputSign.value = "";
  emailInputSign.value = "";
  passInputSign.value = "";
}
function userValidation() {
  if (validUserName.test(userInputSign.value.trim())) {
    userAlert.classList.replace("d-block", "d-none");
  } else {
    userAlert.classList.replace("d-none", "d-block");
  }
}
function emailValidation() {
  if (validEmail.test(emailInputSign.value.trim())) {
    emailAlert.classList.replace("d-block", "d-none");
  } else {
    emailAlert.classList.replace("d-none", "d-block");
  }
}
function passValidation() {
  if (validPass.test(passInputSign.value.trim())) {
    passwordAlert.classList.replace("d-block", "d-none");
  } else {
    passwordAlert.classList.replace("d-none", "d-block");
  }
}

userInputSign.addEventListener("input", userValidation);
emailInputSign.addEventListener("input", emailValidation);
passInputSign.addEventListener("input", passValidation);
