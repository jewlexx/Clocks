const path = require("path");
const dev = true;

function devMode() {
  if (dev) {
    return "development";
  } else {
    return "production";
  }
}

module.exports = {
  entry: path.resolve(__dirname, "src/scripts/index.js"),
  watch: dev,
  mode: devMode(),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "src/scripts/bundled"),

    publicPath: "/",
    publicPath: "/Clocks/",
  },
};
