const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const DIST_PATH = path.resolve(__dirname, 'dist')

module.exports = {
  mode: process.env.BUILD_MODE.trim() || 'production',
  context: path.resolve(__dirname, 'src'),
  entry: { main: './index.js' },
  output: {
    filename: '[name].[contenthash].js',
    path: DIST_PATH,
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
  ],
}
