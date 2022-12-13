const htmlHeaders = {
  headers: {
    "content-type": "text/html;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Max-Age": "86400",
  },
};
const jsonHeaders = {
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Max-Age": "86400",
  },
};
const getHtml = (value) => {
  const html = `<div>It was a ${value}</div>`;
  return html;
};

let ids = [];

// set up a class to handle the elements
class ElementHandler {
  element(element) {
    // Get the 'value' attribute of the current element
    let inputValue = element.getAttribute("value");
    ids.push(inputValue);
  }
}

export default {
  async fetch(request, env, ctx) {
    // If it's a post then use the form data to respond.
    const url = await new URL(request.url);

    if ((await url.pathname) === "/api/getID") {

       const { searchParams } = new URL(request.url);
       let incomingUrl = searchParams.get("id");

      console.log(`[ searchParams ]:`, searchParams);
      const response = await fetch("https://archive.ph");

      let reWrittenResponse = await new HTMLRewriter()
        .on("input", new ElementHandler())
        .transform(response);

      let responseText = await reWrittenResponse.text();

      let accessCode = ids[0]; // we're not using this, but it's needed to trigger the ElementHandler
      let json = JSON.stringify({
        accessCode: accessCode,
        incomingUrl: incomingUrl,
        searchUrl: `https://archive.ph/submit/?submitid=${accessCode}&url=${incomingUrl}`,
      });
      return new Response(json, jsonHeaders);
    } else {
      return new Response(
        `<div>you need to do a get /api/getID </div>`,
        htmlHeaders
      );
    }
  },
};
