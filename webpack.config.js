"use strict";
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
  ],
};
