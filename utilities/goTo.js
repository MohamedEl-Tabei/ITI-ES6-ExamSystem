import animation from "../animation/index.js";

const goTo = (page) => {
  window.history.replaceState("", "", `/${page}.html`);
  sessionStorage.setItem("page", page);
  $(`#${page}`).removeClass("d-none").siblings().addClass("d-none");
  animation(page);
};

export default goTo;
