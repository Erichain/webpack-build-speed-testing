const webpack = require('webpack');
const path = require('path');
const manifest = require('./dll/manifest.json');

module.exports = {
  entry: './src/Logo.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
      }, {
        test: /\.scss$/,
        loader: ['sass-loader'],
      }, {
        test: /\.jpe?g|png|svg|gif/,
        loader: ['url-loader?limit=8192&name=assets/images/[name]-[hash].[ext]'],
      }
    ],
  },

  plugins: [
    new webpack.HtmlWebpackPlugin({}),
    new webpack.UglifyJsPlugin({}),
    new webpack.DllReferencePlugin({
      manifest,
    }),
  ],
};
