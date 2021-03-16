const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { Configuration } = require("webpack");
const path = require("path");

/**
 * @type {Configuration}
 */
const config = {
  entry: [path.resolve(__dirname, "../", "src/index.js")],
  stats: {
    errorDetails: true,
  },
  module: {
    rules: [
      {
        test: /\.[tj](s|sx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  optimization: {
    minimize: true,
  },
  output: {
    clean: true,
    filename: "index.js",
    path: path.resolve(__dirname, "../", "dist"),
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "src/template/html-temp.html"),
    }),
  ],
};

module.exports = config;
