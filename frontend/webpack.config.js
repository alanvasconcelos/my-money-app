const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('public'),
    filename: 'app.js'
  },
  devServer: {
    port: 8000,
    contentBase: './public'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.join(__dirname, '/node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        loader: 'file-loader'
      }
    ]
  },
  performance: {
    hints: false
  }
}