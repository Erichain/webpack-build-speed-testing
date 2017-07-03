const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
        loader: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'],
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
      chunks: ['common', 'app'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
    }),
  ],
};
