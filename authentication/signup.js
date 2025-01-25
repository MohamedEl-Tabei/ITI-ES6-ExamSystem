import Validation from "../utilities/validation.js";
import User from "../models/user.js";
import goTo from "../utilities/goTo.js";
const Signup = () => {
  const selectors = {
    emailInput: document.getElementById("exampleInputEmail1"),
    fName: document.getElementById("exampleInputFName1"),
    lName: document.getElementById("exampleInputLName1"),
    password: document.getElementById("exampleInputPassword1"),
    confirmPassword: document.getElementById("exampleInputcPassword1"),
    passwordEye: document.getElementById("password-eye"),
    confirmPasswordEye: document.getElementById("cpassword-eye"),
    submitBtn: document.getElementById("submitBtn"),
    toLogin: document.getElementById("toLogin"),
  };
  const user = new User();
  let passwordUser = "";
  // Handlers
  function onInputHandler() {
    try {
      const id = this.id;
      switch (id) {
        case "exampleInputEmail1":
          Validation.email(this.value);
          user.setEmail(this.value.toLowerCase());
          break;
        case "exampleInputLName1":
        case "exampleInputFName1":
          if (id.includes("LName")) {
            Validation.name(this.value, "Last");
            user.setLname(this.value.toLowerCase());
          } else {
            Validation.name(this.value, "First");
            user.setFname(this.value.toLowerCase());
          }
          break;
        case "exampleInputPassword1":
          Validation.password(this.value);
          passwordUser = this.value;
          break;
        case "exampleInputcPassword1":
          if (passwordUser != this.value)
            throw new Error("Passwords do not match. Please try again.");
          user.setPassword(passwordUser);
          break;
      }
      $(`#${this.id}`).removeClass("is-invalid");
      $(this).siblings("small").text("");
      selectors.submitBtn.disabled = !(
        user.getEmail() &&
        user.getFname() &&
        user.getLname() &&
        user.getPassword()
      );
    } catch (error) {
      $(`#${this.id}`).addClass("is-invalid");
      $(this).siblings("small").text(error.message);
      switch (this.id) {
        case "exampleInputEmail1":
          user.setEmail("");
          break;
        case "exampleInputLName1":
        case "exampleInputFName1":
          if (this.id.includes("LName")) {
            user.setLname("");
          } else {
            user.setFname("");
          }
          break;
        case "exampleInputPassword1":
          user.setPassword("");
          break;
        case "exampleInputcPassword1":
          user.setPassword("");
          break;
      }
      selectors.submitBtn.disabled = !(
        user.getEmail() &&
        user.getFname() &&
        user.getLname() &&
        user.getPassword()
      );
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
    let myUser = user.getData();
    for (let key in myUser) {
      localStorage.setItem(key, myUser[key]);
    }
    //load page to login
    goTo("_login");
  }

  selectors.emailInput.addEventListener("input", onInputHandler);
  selectors.fName.addEventListener("input", onInputHandler);
  selectors.lName.addEventListener("input", onInputHandler);
  selectors.password.addEventListener("input", onInputHandler);
  selectors.confirmPassword.addEventListener("input", onInputHandler);

  selectors.submitBtn.addEventListener("click", onSubmitHandler);

  selectors.passwordEye.addEventListener("click", passwordStateToggle);
  selectors.confirmPasswordEye.addEventListener("click", passwordStateToggle);

  selectors.toLogin.addEventListener("click", () => goTo("_login"));
};
export default Signup;
