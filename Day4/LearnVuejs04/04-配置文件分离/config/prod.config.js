const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

// 这里通过webpack-merge插件将2个配置文件合并成一个
// 执行build命令时，通过--config指定使用的配置文件
module.exports = WebpackMerge(baseConfig, {
    plugins: [
        new UglifyJsPlugin()
    ]
})