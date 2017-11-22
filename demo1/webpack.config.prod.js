"use strict";
const webpack = require('webpack');
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    'main': './index',
  },
  output: {
    filename: 'dist/[name].[chunkhash].js',
    chunkFilename: "dist/[id].[name].[chunkhash].js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
   module: {
     rules: [{
         test:  [/\.js$/, /\.jsx$/, /\.es6$/],
         include: [
           path.resolve(__dirname, 'src'),
         ],
         use: {
           loader: "babel-loader"
         },
       }, {
         test: [/\.css$/],
         exclude: path.resolve(__dirname, 'src/styles/global'),
         use: [
           'style-loader',
           {
             loader: 'css-loader',
             options: {
                 modules: true,
                 localIdentName: '[name]__[local]-[hash:base64:5]'
             }
           }
         ]
      }, {
        test: [/\.css$/],
        include: path.resolve(__dirname, 'src/styles/global'),
        use: [
          'style-loader',
          'css-loader'
        ]
      }]
   },
   resolve: {
     alias: {
     },
     extensions: ['.js', '.jsx', '.es6'],
     modules: [path.resolve(__dirname, "src"), "node_modules"]
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: '主页',
       template: './index.html',
       filename: 'index.html',
       inject: 'body'
     }),
     new webpack.DefinePlugin({
       'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
     }),
     new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false
       }
     })
   ]
}
