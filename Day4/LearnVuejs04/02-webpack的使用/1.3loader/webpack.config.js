module.exports={
  entry:'./main.js',
  output:{
    filename:'bundle.js',
    path:__dirname+'/dist',
    publicPath:'dist/' // 为文件定义的公共目录，每次通过url请求文件时自动加上该目录
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          {
            loader: 'style-loader'
          },
          {
            loader:'css-loader',
            options:{
              sourceMap:true
            }
          }
        ]
      },
      {
        test:/\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader", // translates CSS into CommonJS
          options:{
            sourceMap:true
          }
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 如果文件大小小于这个值就以base64来展示图片，如果文件大小大于这个值就以url来展示图片
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      }
    ]
  }
}