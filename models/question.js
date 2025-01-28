class Question {
  static #count = 0;
  #head;
  #options;
  #answer;
  constructor(question, userAnswers) {
    Question.#count = Question.#count >= 10 ? 1 : Question.#count + 1;
    let count = Question.#count;
    this.#head = question.head;
    this.#answer = question.answer;
    this.#options = [...question.options];
    const selectors = {
      containerQuestion: document.createElement("div"),
      head: document.createElement("h4"),
      options: document.createElement("ol"),
      examContainer: document.getElementById("examContainer"),
      flags: document.getElementById("myFlags"),
      flag: document.createElement("i"),
      flagBtn: document.createElement("button"),
      qustionNumber: document.getElementById("qustionNumber"),
      next: "[title='next']",
      previous: "[title='previous']",
    };

    this.#options.forEach((option) => {
      const li = document.createElement("li");
      li.className =
        "col-12 col-md-5 border p-2 justify-content-center rounded-3 d-flex align-items-center option-h";
      li.innerText = option;
      li.addEventListener("click", () =>
        this.#onChoose(count, li, option, userAnswers, selectors.flagBtn)
      );
      selectors.options.append(li);
    });
    selectors.options.className = "d-flex flex-wrap options  grid gap-5 px-0";
    selectors.containerQuestion.id = `containerQuestion${count}`;
    selectors.containerQuestion.className = `${
      count == 1 ? "" : "d-none"
    } text-main d-flex  flex-column gap-5 h-100 position-relative pt-2`;
    selectors.head.innerText = `Q${count}) ${this.#head}`;
    selectors.flag.className =
      "fa-solid fa-flag opacity-50 position-absolute flag";

    selectors.flagBtn.id = `flagBtn${count}`;
    selectors.flagBtn.className = "btn btn-danger rounded-circle btn-flag";
    selectors.flagBtn.innerText = count;
    selectors.flag.addEventListener("click", () =>
      this.#onFlag(selectors.flagBtn, selectors.flag, count)
    );
    selectors.flagBtn.addEventListener("click", () => {
      $(selectors.containerQuestion)
        .removeClass("d-none")
        .siblings()
        .addClass("d-none");
      $(selectors.qustionNumber).text(count);
      $(selectors.next).attr("disabled", count == 10);
      $(selectors.previous).attr("disabled", count == 1);
    });
    selectors.containerQuestion.append(selectors.flag);
    selectors.containerQuestion.append(selectors.head);
    selectors.containerQuestion.append(selectors.options);
    selectors.examContainer.append(selectors.containerQuestion);
    selectors.flags.append(selectors.flagBtn);
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
  #onChoose(count, li, option, userAnswers, flagBtn) {
    if (userAnswers[count - 1] == option) {
      userAnswers[count - 1] = undefined;
      $(li).removeClass("selected");
      $(flagBtn).removeClass("btn-success");
      $(flagBtn).addClass("btn-danger");
    } else {
      userAnswers[count - 1] = option;
      $(flagBtn).addClass("btn-success");
      $(flagBtn).removeClass("btn-danger");

      $(li).addClass("selected").siblings().removeClass("selected");
    }
  }
  #onFlag(flagBtn, flag, count) {
    if (!$(flag).hasClass("opacity-100")) {
      $(flag).addClass("opacity-100");
      $(flagBtn).html("<i class='fa-solid fa-flag'></i>");
    } else {
      $(flag).removeClass("opacity-100");
      $(flagBtn).html(count);
    }
  }
}
export default Question;
