import Question from "../models/question.js";

const Exam = (mcqs) => {
  const userAnswers = [];
  const selectors = {
    loader: ".container-loader",
    question: "#question",
  };
  mcqs.forEach((mcq) => {
    new Question(mcq);
  });

  $(selectors.loader).addClass("d-none");
};
export default Exam;
