const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
      proxy: {
          '/vue/api': {
              target: 'http://localhost:20000',
              changeOrigin: true,
              pathRewrite: {
                  '^/': ''
              }
          }
      }
  }
} //빌드할때 주석처리하기
