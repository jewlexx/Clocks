const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/index.js",
  watch: false,
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Clocks",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),

    publicPath: "/",
    publicPath: "/Clocks/",
  },
};
