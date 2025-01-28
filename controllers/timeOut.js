import goTo from "../utilities/goTo.js";

const TimeOut = () => {
  let firstName = localStorage.getItem("fName");
  let lastName = localStorage.getItem("lName");
  $("#messagetimeOut").html(
    `Sorry <span class="text-capitalize">${firstName} ${lastName}</span>, Timeout!!`
  );
  $("#toReady6").on("click", function () {
    localStorage.setItem("grade", "");
    goTo("_ready");
  });
};

export default TimeOut;
