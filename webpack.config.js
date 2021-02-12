const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

const buildStubServer = require('./src/stub/server');

const port = process.env.PORT || 9000;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index_bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: port,
    before: buildStubServer,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      BACKEND_URL: `"${process.env.BACKEND_URL}"`
    }),
    new HtmlWebpackPlugin({
      title: "Steam Inventory Explorer",
      template: "src/index.html"
    })
  ]
};