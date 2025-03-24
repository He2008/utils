const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  plugins: [

    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
     new webpack.HotModuleReplacementPlugin(),
     new CleanWebpackPlugin(),

  ],
  optimization:{
    moduleIds:'named'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    compress:true,
    port:9000
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
