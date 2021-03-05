const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
import $ from "jquery";

async function setClock(clock) {
  $("body").removeClass();
  $("body").addClass(`${clock}-clock`);
  console.log("Set the clock to " + clock);
}

export default async function params() {
  if (urlParams.has("clock")) {
    await setClock(urlParams.get("clock"));
  } else {
    await setClock("basic");
  }

  let format = "h:mm:ss A";

  if (urlParams.has("24hour") && urlParams.get("24hour") === "true") {
    format = "HH:mm:ss";
  }

  if (urlParams.has("seconds") && urlParams.get("seconds") === "false") {
    format = format.replace(":ss", "");
  }
}
