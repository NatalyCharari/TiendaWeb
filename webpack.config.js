const pathLib = require("path");

module.exports = {
  mode: "development",
  entry: pathLib.join(__dirname, "/client/index.js"),
  output: {
    path: pathLib.join(__dirname, "/client/public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
