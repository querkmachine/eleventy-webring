import webringData from "./src/_data/webring.mjs";

export default async function (eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("templateRedirect", function (redirect) {
    if (!redirect) {
      return `ERROR`;
    }

    return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="refresh" content="0; url=${redirect.url}">
        <title>Redirecting&hellip;</title>
      </head>
      <body>
        <p>Redirecting you to <a href="${redirect.url}">${redirect.url}</a>&hellip;</p>
      </body>
    </html>`.trim();
  });

  eleventyConfig.addJavaScriptFunction(
    "getSiblingSiteInRing",
    function (siteId, change) {
      const currentIndex = webringData.findIndex((i) => i.id === siteId);
      let newIndex = currentIndex + change;

      // Do some checks to make sure we're not going out of bounds, looping back
      // around to the start if we do
      if (newIndex > webringData.length - 1) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = webringData.length - 1;
      }

      return webringData[newIndex];
    },
  );

  return {
    dir: {
      input: "src",
    },
  };
}
