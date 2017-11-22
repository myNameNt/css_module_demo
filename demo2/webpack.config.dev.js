"use strict";
const webpack = require('webpack');
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map', //生成map文件
  context: path.resolve(__dirname, "src"),
  entry: {
    'main': './index',
  },
  output: {
    filename: 'dist/[name].[hash].js',
    chunkFilename: "dist/[id].[name].[hash].js",
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
         test: [/\.css$/, /\.less$/],
         exclude: path.resolve(__dirname, 'src/styles/global'),
         use: [
           'style-loader',
           {
             loader: 'css-loader',
             options: {
                 modules: true,
                 localIdentName: '[name]__[local]-[hash:base64:5]'
             }
           },
           {
             loader: 'postcss-loader',
             options: {
               ident: 'postcss',
               plugins: (loader) => [
                 require('postcss-import')({ root: loader.resourcePath }),
                 require('postcss-cssnext')(),
                 require('autoprefixer')(),
                 require('cssnano')()
               ]
             }
           },
           'less-loader'
         ]
      }, {
        test: [/\.css$/, /\.less$/],
        include: path.resolve(__dirname, 'src/styles/global'),
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('postcss-cssnext')(),
                require('autoprefixer')(),
                require('cssnano')()
              ]
            }
          },
          'less-loader'
        ]
      }, {
        test: [/\.(eot|woff|png|jpeg)$/],
        use: "file-loader"
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
    })
   ],
   devServer: {
     port: 11111,               // 端口
     host: '0.0.0.0',           // 可以以localhost\127.0.0.1\ip访问
     historyApiFallback: true,  // H5 history使用
     https: false,              // https服务开启
     disableHostCheck: true,    // host检查关闭
   }
}
