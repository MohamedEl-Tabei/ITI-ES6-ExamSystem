import goTo from "../utilities/goTo.js";
const Result = () => {
  const selectors = {
    toReadyf: document.getElementById("toReady5"),
    circle: document.getElementById("circle"),
  };
  let firstName = localStorage.getItem("fName");
  let lastName = localStorage.getItem("lName");
  let grade = localStorage.getItem("grade");
  selectors.circle.innerHTML = `<span>${grade}%</span>`;
  selectors.circle.className = "circle";

  const newHead = document.getElementById("messageResult");
  newHead.classList.add("text-light");
  newHead.classList.add("bg-dark-opacity");
  newHead.classList.add("rounded-5");
  newHead.classList.add("p-3");
  newHead.innerHTML =
    grade >= 50
      ? `Excellent work, <span class="text-capitalize">${firstName} ${lastName}</span>!`
      : `<span class="text-capitalize">${firstName} ${lastName}</span>, Be kind to yourself and keep practising!`;
  $("#circle").css({
    background: `conic-gradient(#00800057  0% ${grade}%,#ff000066 ${grade}% 100%)`,
  });

  selectors.toReadyf.addEventListener("click", function () {
    localStorage.setItem("grade", "");

    goTo("_ready");
  });
};
export default Result;
