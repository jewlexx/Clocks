const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("clock")) {
  document
    .getElementById("main-frame")
    .setAttribute(
      "src",
      document
        .getElementById("main-frame")
        .getAttribute("src")
        .replace("basic", urlParams.get("clock"))
    );
  console.log("Set the clock to " + urlParams.get("clock"));
}
