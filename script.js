import goTo from "./utilities/goTo.js";
import loadPage from "./utilities/loadPage.js";
import getData from "./utilities/getData.js";
import Signup from "./authentication/signup.js";
import Login from "./authentication/login.js";
import Exam from "./controllers/exam.js";
import Result from "./controllers/result.js";
import TimeOut from "./controllers/timeOut.js";
(async () => {
  await loadPage("_signup");
  await loadPage("_login");
  await loadPage("_ready");
  await loadPage("_exam");
  await loadPage("_result");
  await loadPage("_timeOut");
  goTo(sessionStorage.getItem("page") || "_signup");
  // to add events after load the pages
  Signup();
  Login();
  Result();
  TimeOut();
  $(".logout").on("click", () => goTo("_signup"));
  $("#_ready .start").on("click", async () => {
    //get mcqs from server
    $(".container-loader").removeClass("d-none");
    goTo("_exam");
    const mcqs = await getData();
    Exam(mcqs);
  });
  if (sessionStorage.getItem("page") == "_exam") {
    const mcqs = await getData();
    Exam(mcqs);
  }
})();
