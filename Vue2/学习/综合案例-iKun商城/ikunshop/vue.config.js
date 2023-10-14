const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 默认情况下, 需要放到服务器根目录打开, 如果希望双击运行, 需要配置publicPath配成相对路径   publicPath: './'
  publicPath: './',
  transpileDependencies: true
})
