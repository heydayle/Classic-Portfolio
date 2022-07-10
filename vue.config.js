
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: "./",
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [{
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      }]
    }
  },
  chainWebpack(config) {
  config.module
      .rule('svg')
      .exclude.add(resolve('src/assets'))
      .end()

      const svgRule = config.module.rule('svg');
      svgRule.uses.clear();
      svgRule
        .use('babel-loader')
        .loader('babel-loader')
        .end()
        .use('vue-svg-loader')
        .loader('vue-svg-loader');

    // set preserveWhitespace
    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .tap(options => {
    //     options.compilerOptions.preserveWhitespace = true
    //     return options
    //   })
    //   .end()
    }
};
