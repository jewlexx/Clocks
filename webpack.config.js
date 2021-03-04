const path = require("path");

module.exports = {
  entry: "./src/scripts/index.js",
  watch: false,
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),

    publicPath: "/",
    publicPath: "/Clocks/",
  },
};
