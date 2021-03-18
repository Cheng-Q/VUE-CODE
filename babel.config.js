module.exports = {
  // 在Vue CLI3搭建的项目中借助babel-plugin-import这个webpack插件并且配置babel.config.js,
  // 来实现组件库的按需引入的前提是组件库是多入口文件页面打包的。
  presets: ["@vue/cli-plugin-babel/preset"]
};
