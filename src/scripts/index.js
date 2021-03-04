const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
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

/**
 *
 * @param {string} time
 */
function thenTime(time) {
  console.log(`Set the time to ${time}`);
  $("#time").text(time);
}

/**
 *
 * @param {string} error
 */
function errorTime(error) {
  console.error("Failed to set time \n" + error);
}

function time24() {
  getTime24().then(thenTime).catch(errorTime);
  window.setInterval(() => {
    getTime24().then(thenTime).catch(errorTime);
  }, 1000);
}

function time12() {
  getTime12().then(thenTime).catch(errorTime);
  window.setInterval(() => {
    getTime12().then(thenTime).catch(errorTime);
  }, 1000);
}

if (urlParams.has("24hour") && urlParams.get("24hour") == "true") {
  time24();
} else {
  time12();
}
