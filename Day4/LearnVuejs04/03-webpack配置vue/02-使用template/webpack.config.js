const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname+'/dist'
  },
  module:{
    // 对于不同文件类型的处理规则
    rules:[
      {
        test:/\.css$/,
        // 使用的loader，顺序很重要，从右至左，类似于管道，按顺序从右至左执行
        // css-loader负责将css代码解析成字符串
        // style-loader负责将解析的字符串插入到html的头部
        use:['style-loader','css-loader']
      },
      {
          test:/\.vue$/,
          use:['vue-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}