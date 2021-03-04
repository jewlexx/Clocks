const path = require("path");
const dev = "production";

module.exports = {
  entry: path.resolve(__dirname, "src/scripts/index.js"),
  watch: false,
  mode: dev,
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "src/scripts/bundled"),

    publicPath: "/",
    publicPath: "/Clocks/",
  },
};
