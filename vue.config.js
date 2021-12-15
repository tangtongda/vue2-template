const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8060, // local port
    open: false, // auto open browser
    hotOnly: false,
    proxy: {
      // local proxy
      '/api': {
        target: 'http://localhost:8060',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/css/_variables.scss";`,
      },
      // antdv less config
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#409eff',
            'link-color': '#409eff',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  productionSourceMap: !isProduction,
  publicPath: process.env.VUE_APP_BASE_URL,
  // giz compression
  configureWebpack: (config) => {
    if (isProduction) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: /\.js$|\.html$|\.json$|\.css/,
          threshold: 10240,
          minRatio: 0.8,
        }),
      )
      config.optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
                )[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`
              },
            },
          },
        },
      }
      // 取消webpack警告的性能提示
      config.performance = {
        hints: 'warning',
        // endtry max size
        maxEntrypointSize: 50000000,
        // asset file max size
        maxAssetSize: 30000000,
        // only javascript performance but no other warinings
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js')
        },
      }
    }
  },
}
