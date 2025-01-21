/**
 *
 * @param {string} viewName
 */

async function loadPage(viewName) {
  const html = await fetch(`../${viewName}.html`);
  window.history.replaceState("", "", `/${viewName}.html`);
  sessionStorage.setItem("viewName", viewName);
  const innerHtml = await html.text();
  await $("#root").html(
    innerHtml.slice(0, innerHtml.indexOf("<!-- No More -->"))
  );
  $(`#${viewName}`).show();

  $("#dd").on("click", () => loadPage("_login"));
}

export default loadPage;
