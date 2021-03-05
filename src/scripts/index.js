// TODO Fix the clocks
//  Cuz like the clocks aren't actually scaling into the frame right now soooo gotta fix that

import dayjs from "dayjs";
import $ from "jquery";
import params from "./imports/params";

params();

$("#time").text(dayjs().format(format));
window.setInterval(() => {
  $("#time").text(dayjs().format(format));
}, 1000);
