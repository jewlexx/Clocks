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
  entry: "./src/scripts/index.js",
  watch: dev,
  mode: devMode(),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),

    publicPath: "/",
    publicPath: "/Clocks/",
  },
};
