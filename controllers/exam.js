import Question from "../models/question.js";
import timer from "../utilities/timer.js";
import goTo from "../utilities/goTo.js";
import Result from "./result.js";
const Exam = (mcqs) => {
  const userAnswers = [];
  let qNumber = 1;
  const selectors = {
    loader: ".container-loader",
    question: "#question",
    next: "[title='next']",
    previous: "[title='previous']",
    qustionNumber: "#qustionNumber",
    numberOfQuestions: "#numberOfQuestions",
    submitTest: "#submitTest",
    flags: "#myFlags",
    examContainer: "#examContainer",
  };
  $(selectors.examContainer).children().remove();
  $(selectors.flags).children().remove();
  $(selectors.previous).attr("disabled", true);
  $(selectors.next).attr("disabled", false);
  let time = timer(180);
  mcqs.forEach((mcq) => {
    new Question(mcq, userAnswers);
  });
  $(selectors.numberOfQuestions).text(mcqs.length);
  //handler
  const onNextHandler = () => {
    qNumber = $(qustionNumber).text();

    if (qNumber < mcqs.length) {
      $(selectors.previous).attr("disabled", false);
      qNumber++;
      $(`#containerQuestion${qNumber}`)
        .removeClass("d-none")
        .siblings()
        .addClass("d-none");
      $(selectors.next).attr("disabled", !(qNumber < mcqs.length));
    }
    $(selectors.qustionNumber).text(qNumber);
  };
  const onPreviousHandler = () => {
    qNumber = $(qustionNumber).text();
    if (qNumber > 1) {
      $(selectors.next).attr("disabled", false);
      qNumber--;
      $(`#containerQuestion${qNumber}`)
        .removeClass("d-none")
        .siblings()
        .addClass("d-none");
      $(selectors.previous).attr("disabled", !(qNumber > 1));
    }
    $(selectors.qustionNumber).text(qNumber);
  };
  const onSubmit = () => {
    let grade = 0;
    mcqs.forEach(
      (mcq, i) =>
        (grade = mcq.options[mcq.answer] == userAnswers[i] ? grade + 1 : grade)
    );
    $(qustionNumber).text(1);
    let percentage = (grade / mcqs.length).toFixed(4) * 100;
    localStorage.setItem("grade", percentage);
    clearInterval(time);
    Result();
    goTo("_result");
  };

  $(selectors.loader).addClass("d-none");
  $(selectors.submitTest).off("click").on("click", onSubmit);
  $(selectors.next).off("click").on("click", onNextHandler);
  $(selectors.previous).off("click").on("click", onPreviousHandler);
};
export default Exam;
