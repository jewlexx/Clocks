// TODO Fix the clocks
//  Cuz like the clocks aren't actually scaling into the frame right now so gotta fix that

import React from "react";
import ReactDOM from "react-dom";
import { Time } from "./javascripts/components/Time";
import { SelectClock } from "./javascripts/components/Selector";
import { UrlParameters } from "./javascripts/imports/params";
import "./styles/index.scss";

const params = new UrlParameters();

const timeFormat = params.format;

export { timeFormat };

console.debug(window.location.href);

if (params.clockEnabled) {
  ReactDOM.render(<Time />, document.getElementById("root"));
} else {
  ReactDOM.render(<SelectClock />, document.getElementById("root"));
}
