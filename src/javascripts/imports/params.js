const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
import $ from "jquery";

function setClock(clock) {
  $("#root").addClass(`${clock}-clock`);
  console.log("Set the clock to " + clock);
}

class UrlParameters {
  constructor() {
    this.clockEnabled = true;
    this.format = "h:mm:ss A";
    if (urlParams.has("clock")) {
      setClock(urlParams.get("clock"));
    } else {
      this.clockEnabled = false;
    }

    if (urlParams.has("24hour") && urlParams.get("24hour") === "true") {
      this.format = "HH:mm:ss";
    }

    if (urlParams.has("seconds") && urlParams.get("seconds") === "false") {
      this.format = this.format.slice().replace(":ss", "");
    }
  }
}

export { UrlParameters };
