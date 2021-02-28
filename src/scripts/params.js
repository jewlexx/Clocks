const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// TODO Add 12/24 hour time toggle
// TODO Fix the clocks
//  Cuz like the clocks aren't actually scaling into the frame right now soooo gotta fix that
if (urlParams.has("clock")) {
  document
    .getElementById("clock-style")
    .setAttribute(
      "href",
      document
        .getElementById("clock-style")
        .getAttribute("href")
        .replace("basic", urlParams.get("clock"))
    );
  console.log("Set the clock to " + urlParams.get("clock"));
}

if (urlParams.has("24hour") && urlParams.get("24hour") == "true") {
  document
    .getElementById("12or24")
    .setAttribute("src", "./src/scripts/24time.js");
  console.log("Set 24 hour to " + urlParams.get("24hour"));
}
