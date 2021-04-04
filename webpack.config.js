const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/new-index.js",
  output: { filename: "bundle.js", path: process.cwd() + "/bundle" },
  plugins: [new HtmlWebpackPlugin()],
  devServer: { port: 1234 },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
