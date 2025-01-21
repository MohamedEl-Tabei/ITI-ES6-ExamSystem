import loadPage from "./utilities/loadPage.js";

(async () => {
  await loadPage(sessionStorage.getItem("viewName") || "_signup");
})();
