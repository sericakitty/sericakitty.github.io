const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  devServer: {
    server: 'https',
  },
  publicPath: '/',
  chainWebpack: config => {
    /* disable insertion of assets as data urls b/c Phaser doesn't support it */
    const rules = ['images', 'media'];

    rules.forEach(rule => {
      const ruleConf = config.module.rule(rule);
      ruleConf.type('asset/resource');
    });

  },
});

