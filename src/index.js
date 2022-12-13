

const formHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Archive Viewer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="generator" content="Eleventy v2.0.0">
     <meta name="theme-color" content="#ffffff"/>
    <style>/*! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.mx-auto{margin-left:auto;margin-right:auto}.mt-12{margin-top:3rem}.mt-2{margin-top:.5rem}.flex{display:flex}.w-full{width:100%}.max-w-4xl{max-width:56rem}.flex-col{flex-direction:column}.gap-4{gap:1rem}.rounded{border-radius:.25rem}.border{border-width:1px}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.text-2xl{font-size:1.5rem;line-height:2rem}.font-bold{font-weight:700}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216/var(--tw-bg-opacity))}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}@media (min-width:640px){.sm\:flex-grow{flex-grow:1}.sm\:flex-row{flex-direction:row}.sm\:px-12{padding-left:3rem;padding-right:3rem}}</style>
  </head>
    <body class="w-full">
  <section class="max-w-4xl px-2 mx-auto mt-12">
    <h1 class="text-2xl font-bold">Archiver</h1>
    <p class="mt-2">
      <span class="font-bold">Enter URL</p>
      <form target="_self" action="/" method="post" class="flex flex-col gap-4 mt-2 sm:flex-row">
          <input autofocus="autofocus" name="url" id="url" value="" class="px-3 py-2 border rounded sm:flex-grow focus:outline-none focus:ring-2 focus:ring-brand" >
          <button class="px-6 py-2 font-bold text-white bg-blue-500 rounded sm:px-12 hover:bg-blue-700">Submit</button>
      </form>
    </section>
  </body>
</html>`;

const headers = {
  headers: {
    "content-type": "text/html;charset=UTF-8",
  },
};

async function getURLFromFormBody(request) {
  // check and clean up the submitted URL
  const { headers } = request;
  const contentType = headers.get("content-type") || "";

  // It's a form submission.
  if (contentType.includes("form")) {
    const formData = await request.formData();
    const body = {};
    for (const entry of formData.entries()) {
      body[entry[0]] = entry[1];
    }
    // set the URL we're submitting to WPT to be what ever was supplied.
    let urlForAchive = body.url;

    // check to see if it started with http, https or nothing and deal with it.
    if (body.url.indexOf("http://") == 0) {
      // console.log("it's http")
      // Create a URL object (makes it easy to extract host)
      let urlObj = new URL(body.url);

      // Add the https to the host.
      urlForAchive = `https://${urlObj.host}`;
    } else if (body.url.indexOf("https://") == 0) {
      // console.log("it's https - nothing to do")
    } else {
      // console.log("The link doesn't have http or https adding it");
      urlForAchive = `https://${body.url}`;
    }
    return urlForAchive;
  }
}

// set up an array to store the ids
let ids = [];

// set up a class to handle the elements
class ElementHandler {
  constructor() {
    // console.log(`[ construstor called ]:` );
  }

  // calld when an element matching the 'on' handler is found
  element(element) {
    // Get the 'value' attribute of the element
    let inputValue = element.getAttribute("value");

    // Test if the value is not null and is longer than 10 characters
    if (inputValue && inputValue.length > 10) {
      // if so, add it to the ids array
      ids.push(inputValue);
    }
    // console.log(
    //   `Incoming element: ${element.tagName} : ${element.getAttribute(
    //     "value"
    //   )}`
    // );
    // console.log(JSON.stringify(element, null, 2));
  }
}




export default {
  async fetch(request, env, ctx) {
    // If it's a post then use the form data to respond.
    if (request.method === "POST") {
      const submittedUrl = await getURLFromFormBody(request);

      const response = await fetch("https://archive.ph");

      let reWrittenResponse = await new HTMLRewriter()
        .on("input", new ElementHandler())
        .transform(response);

      await reWrittenResponse.text(); // we're not using this, but it's needed to trigger the ElementHandler

      let accessCode = ids[0];
      let searchUrl = `https://archive.ph/submit/?submitid=${accessCode}&url=${submittedUrl}`;

			// redirect to the new URL
      return Response.redirect(searchUrl, "301"); // return & redirect to the WPT URL

    } else if (request.method === "GET") {
      console.log(`[ Request GET ]:`);
      return new Response(formHTML, headers);
    }
  },
};
