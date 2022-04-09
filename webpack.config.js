const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let devtool = "source-map";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  devtool = false;
  target = "browserslist";
}

// Target

module.exports = {
  mode,
  target,

  output: {
    filename: "[name].[contenthash].bundle.js",
    clean: true,
    publicPath: "./public",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
      {
        test: /\.(s[ac]|c)ss$/,
        exclude: /node_modules/,
        generator: {
          filename: "styles/[name][ext]",
        },
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],

  resolve: { extensions: [".js", ".jsx"] },

  devtool,

  devServer: {
    static: "./dist",
    port: 3000,
    hot: true,
  },
};
