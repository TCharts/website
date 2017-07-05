var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require("extract-text-webpack-plugin");
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  entry: {
    app: './src/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader?minimize=1','less-loader']
        }),
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [ 'url-loader?limit=128&name=images/[hash:8].[name].[ext]' ]
      },
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      },
    ]
  },
  plugins:[
    // 公有模块抽离 
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    // css文件导出
    new extractTextPlugin("./css/style.css"),
    // 代码混淆
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: false }
    }),
    // html文件导出
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: 'body',
    }),
    // 打开浏览器
    new openBrowserPlugin({
      url: 'http://localhost:8080'
    }),
  ]
}
