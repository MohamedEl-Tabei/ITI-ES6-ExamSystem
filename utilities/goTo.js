const goTo = (page) => {
  window.history.replaceState("", "", `/${page}.html`);
  sessionStorage.setItem("page", page);
  $(`#${page}`).removeClass("d-none").siblings().addClass("d-none");
};

export default goTo;
