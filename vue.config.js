//开发环境配置
const buildConfig = require("./build/config.build");
//生成环境配置
const devConfig = require("./build/config.dev");
console.log(process.env.NODE_ENV);
module.exports =
  process.env.NODE_ENV === "development" ? devConfig : buildConfig;
