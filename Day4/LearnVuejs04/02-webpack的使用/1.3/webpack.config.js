var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var path = require('path');

module.exports = {
  entry: './src/js/aaa.js',
  output: {
    filename: 'aaa.bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    // 对于不同文件类型的处理规则
    rules: [{
        test: /\.css$/,
        // 使用的loader，顺序很重要，从右至左，类似于管道，按顺序从右至左执行
        // css-loader负责将css代码解析成字符串
        // style-loader负责将解析的字符串插入到html的头部
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    host: '192.168.9.241',
    port: 8080,
    open: true,
    contentBase: './dist/',
    inline: true
  }
}