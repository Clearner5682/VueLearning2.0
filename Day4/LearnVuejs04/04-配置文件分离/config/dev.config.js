const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

// 这里通过webpack-merge插件将2个配置文件合并成一个
// 执行serve命令时，通过--config指定使用的配置文件
module.exports = WebpackMerge(baseConfig, {
    devServer: {
        host: '192.168.0.110',
        port: 9999,
        open: true,
        contentBase: './dist/',
        inline: true
    }
})