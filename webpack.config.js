const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: path.join(__dirname, 'public/index.html'),
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env', 'react', 'stage-2' ]
          }
        }
      }
    ]
  },
  mode: 'development'
}

// public/app.bundle.js

