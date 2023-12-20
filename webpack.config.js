const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist/"), // Output directory
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        // define HTML files here

        // output dist/index.html
        index: "index.html",
        // output dist/pages/about.html
        // ...
        "poc1/index": "poc1/index.html",
        "poc1/productNewIframe": "poc1/productNewIframe.html",
        "poc1/productListIframe": "poc1/productListIframe.html",
        "poc1/productDetailIframe": "poc1/productDetailIframe.html",
        "poc1/productLatestIframe": "poc1/productLatestIframe.html",

        "poc2/index": "poc2/index.html",
        "poc2/productNewIframe": "poc2/productNewIframe.html",
        "poc2/productListIframe": "poc2/productListIframe.html",
        "poc2/productDetailIframe": "poc2/productDetailIframe.html",
        "poc2/productLatestIframe": "poc2/productLatestIframe.html",

        "poc3/index": "poc3/index.html",

        "poc4/index": "poc4/index.html",
      },
      js: {
        // output filename of extracted JS
        filename: "assets/js/[name].[contenthash:8].js",
      },
      css: {
        // output filename of extracted CSS
        filename: "assets/css/[name].[contenthash:8].css",
      },
    }),
  ],
  module: {
    rules: [
      // HTML templates
      {
        test: /\.html$/,
        loader: HtmlBundlerPlugin.loader, // HTML template loader
      },
      // styles
      {
        test: /\.(css|sass|scss)$/,
        use: ["css-loader", "sass-loader"],
      },
      // images
      {
        test: /\.(png|jpe?g|ico|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]",
        },
      },
    ],
  },
};
