var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'script.js',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      },
    ],
  },
};
