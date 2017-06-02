const webpack = require('webpack');
const path = require('path');
const manifest = require('./dll/vendor-manifest.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.js'],
  },

  output: {
    path: path.resolve(__dirname, 'dist-[hash]'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader?presets[]=react,presets[]=latest&compact=false'],
      }, {
        test: /\.scss$/,
        loader: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      }, {
        test: /\.jpe?g|png|svg|gif/,
        loader: ['url-loader?limit=8192&name=assets/images/[name]-[hash].[ext]'],
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      chunks: ['app'],
    }),
    new webpack.DllReferencePlugin({
      manifest,
    }),
  ],
};
