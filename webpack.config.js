const webpack = require('webpack');
const path = require('path');
const manifest = require('./dll/vendor-manifest.json');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist-[hash]'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader?presets[]=react,presets[]=latest'],
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
    /*new webpack.HtmlWebpackPlugin({}),
    new webpack.UglifyJsPlugin({}),*/
    new webpack.DllReferencePlugin({
      manifest,
    }),
  ],
};
