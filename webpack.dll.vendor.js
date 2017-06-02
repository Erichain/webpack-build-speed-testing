const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    vendor: [path.join(__dirname, 'src', 'vendor.js')],
  },

  output: {
    path: path.join(__dirname, 'dist-[hash]'),
    filename: '[name].js',
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      filename: '[name].js',
      name: '[name]',
    }),
  ]
};
