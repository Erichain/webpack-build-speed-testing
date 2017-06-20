const webpack = require('webpack');
const path = require('path');
const manifest = require('./dll/vendor-manifest.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

const happyPackPlugin = [
  new HappyPack({
    id: 'jsx',
    threads: 4,
    loaders: ['babel-loader?presets[]=react,presets[]=latest&compact=false'],
  }),
  new HappyPack({
    id: 'scss',
    threads: 4,
    loaders: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  }),
];

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
        use: ['happypack/loader?id=jsx'],
      }, {
        test: /\.scss$/,
        use: ['happypack/loader?id=scss'],
      }, {
        test: /\.jpe?g|png|svg|gif/,
        use: ['url-loader?limit=8192&name=assets/images/[name]-[hash].[ext]'],
      },
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
  ].concat(happyPackPlugin),
};
