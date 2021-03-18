const { resolve, getComponentEntries } = require("./utils");
const pub = require("./config.pub");

module.exports = {
  outputDir: resolve("lib"),
  //   减少打包编译的时间；
  // 避免在生产环境中用F12开发者工具在Sources中看到源码。
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      ...getComponentEntries("packages")
    },
    output: {
      filename: "[name]/index.js",
      libraryTarget: "commonjs2",
      libraryExport: "default",
      library: "demo-vuecli3-ui"
    },
    resolve: pub.resolve
  },
  css: {
    sourceMap: true,
    extract: {
      filename: "[name]/style.css"
    }
  },

  chainWebpack: config => {
    // 删除splitChunks，因为每个组件是独立打包，不需要抽离每个组件的公共js出来。
    // 删除copy，不要复制public文件夹内容到lib文件夹中。
    // 删除html，只打包组件，不生成html页面。
    // 删除preload以及prefetch，因为不生成html页面，所以这两个也没用。
    // 删除hmr，删除热更新。
    // 删除自动加上的入口App。
    config.module
      .rule("fonts")
      .rule("js")
      .include.add(__dirname + "packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(option => {
        // option.fallback.options.name = "static/fonts/[name].[hash:8].[ext]";
        return option;
      });
    config.optimization.delete("splitChunks");
    config.plugins.delete("copy");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("html");
    config.plugins.delete("hmr");
    config.entryPoints.delete("app");
    config.module
      .rule("fonts")
      .use("url-loader")
      .tap(option => {
        option.fallback.options.name = "static/fonts/[name].[hash:8].[ext]";
        return option;
      });
  }
};
