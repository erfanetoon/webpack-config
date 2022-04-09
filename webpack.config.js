const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let devtool = "source-map";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  devtool = "";
  target = "browserslist";
}

// Target

module.exports = {
  mode,
  target,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.(s[ac]|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool,

  devServer: {
    static: "./dist",
    port: 3000,
    hot: true,
  },
};
