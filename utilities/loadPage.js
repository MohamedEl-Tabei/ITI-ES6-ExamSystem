/**
 *
 * @param {string} page
 */

async function loadPage(page) {
  const html = await fetch(`../${page}.html`);
  const innerHtml = await html.text();
  await $("#root").append(
    innerHtml.slice(0, innerHtml.indexOf("<!-- No More -->"))
  );
}

export default loadPage;
