import goTo from "./utilities/goTo.js";
import loadPage from "./utilities/loadPage.js";
import Signup from "./authentication/signup.js";
import Login from "./authentication/login.js";
(async () => {
  await loadPage("_signup");
  await loadPage("_login");
  await loadPage("_ready");
  goTo(sessionStorage.getItem("page") || "_signup");
  // to add events after load the pages
  Signup();
  Login();
})();
