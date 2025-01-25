import Validation from "../utilities/validation.js";
import User from "../models/user.js";
import goTo from "../utilities/goTo.js";
const Login = () => {
  const selectors = {
    emailInput: document.getElementById("exampleInputEmail2"),
    password: document.getElementById("exampleInputPassword2"),
    passwordEye: document.getElementById("password-eye2"),
    submitBtn: document.getElementById("submitBtn2"),
    toSignup: document.getElementById("toSignup"),
    invalidEmailorPass: document.getElementById("invalidEmailorPass"),
  };
  const user = new User();
  // Handlers
  function onInputHandler() {
    try {
      const id = this.id;
      switch (id) {
        case "exampleInputEmail2":
          Validation.email(this.value);
          user.setEmail(this.value.toLowerCase());
          break;

        case "exampleInputPassword2":
          Validation.password(this.value);
          user.setPassword(this.value);
          break;
      }
      $(`#${this.id}`).removeClass("is-invalid");
      $(this).siblings("small").text("");
      selectors.submitBtn.disabled = !(user.getEmail() && user.getPassword());
      selectors.invalidEmailorPass.innerText = "";
    } catch (error) {
      $(`#${this.id}`).addClass("is-invalid");
      $(this).siblings("small").text(error.message);
      switch (this.id) {
        case "exampleInputEmail2":
          user.setEmail("");
          break;
        case "exampleInputPassword2":
          user.setPassword("");
          break;
      }
      selectors.submitBtn.disabled = !(user.getEmail() && user.getPassword());
    }
  }
  function passwordStateToggle() {
    if ($(this).hasClass("fa-eye")) {
      $(this).removeClass("fa-eye");
      $(this).siblings("input").attr("type", "password");
    } else {
      $(this).addClass("fa-eye");
      $(this).siblings("input").attr("type", "text");
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    //load page to login
    if (
      user.getEmail() == localStorage.getItem("email") &&
      user.getPassword() == localStorage.getItem("password")
    )
      goTo("_ready");
    else {
      selectors.invalidEmailorPass.innerText = "Invalid email or password";
      selectors.submitBtn.disabled = true;
    }
  }

  selectors.emailInput.addEventListener("input", onInputHandler);

  selectors.password.addEventListener("input", onInputHandler);

  selectors.submitBtn.addEventListener("click", onSubmitHandler);

  selectors.passwordEye.addEventListener("click", passwordStateToggle);

  selectors.toSignup.addEventListener("click", () => {
    goTo("_signup");
  });
};
export default Login;
