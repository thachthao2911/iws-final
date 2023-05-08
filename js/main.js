// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "") {
    alert("Please Enter Email");
  }
  else if (inputPassword.value === "") {
    alert("Please Enter Password");
  }
  else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Login Success");
      window.location.href = "index.html";
    } else {
      alert("Login Fail");
    }
  }
});
