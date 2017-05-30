const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/App.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: [],
      }, {
        test: /\.scss$/,
        loader: [],
      }, {
        test: /\.jpe?g|png|svg|gif/,
        loader: [],
      }
    ],
  },

  plugins: [],
};
