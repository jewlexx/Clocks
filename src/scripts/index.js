// TODO Fix the clocks
//  Cuz like the clocks aren't actually scaling into the frame right now soooo gotta fix that

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
import dayjs from "dayjs";
import $ from "jquery";

//#region Params
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

let format = "h:mm:ss A";

if (urlParams.has("24hour") && urlParams.get("24hour") === "true") {
  format = "HH:mm:ss";
}

if (urlParams.has("seconds") && urlParams.get("seconds") === "false") {
  format = format.replace(":ss", "");
}
//#endregion Params

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

$("#time").text(dayjs().format(format));
window.setInterval(() => {
  $("#time").text(dayjs().format(format));
}, 1000);
