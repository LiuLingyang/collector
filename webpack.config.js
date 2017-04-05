var path = require('path');
module.exports = {
  entry:{
    client:"./client/client.js",
    iframe:"./client/iframe.js"
  },
  output: {
    path: __dirname,
    filename: "./public/[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'client'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'eval',
  watch: true
}