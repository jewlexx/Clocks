const path = require("path");
const dev = "production";

/**
 * @type {Configuration}
 */
const config = {
  entry: path.resolve(__dirname, "src/scripts/index.js"),
  watch: false,
  mode: dev,
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist/scripts/"),

    publicPath: "/",
    publicPath: "/Clocks/",
  },
};

module.exports = config;
