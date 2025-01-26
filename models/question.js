class Question {
  static #count = 0;
  #head;
  #options;
  #answer;
  constructor(question, userAnswers) {
    Question.#count++;
    this.#head = question.head;
    this.#answer = question.answer;
    this.#options = [...question.options];
    const selectors = {
      containerQuestion: document.createElement("div"),
      head: document.createElement("h6"),
      options: document.createElement("ol"),
      examContainer: document.getElementById("examContainer"),
    };

    this.#options.forEach((option) => {
      const li = document.createElement("li");
      li.className = "me-5";
      li.innerText = option;
      selectors.options.append(li);
    });
    selectors.options.className = "d-flex flex-wrap options  ";
    selectors.containerQuestion.className = " border-bottom text-main";
    selectors.head.innerText = `Q${Question.#count}) ${this.#head}`;
    selectors.containerQuestion.append(selectors.head);
    selectors.containerQuestion.append(selectors.options);
    selectors.examContainer.append(selectors.containerQuestion);
  }

  getHead() {
    return this.#head;
  }
  getOptions() {
    return [...this.#options];
  }
  getAnswer() {
    return this.#answer;
  }
}
export default Question;
