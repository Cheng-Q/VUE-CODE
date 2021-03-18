// 导入面包屑组件
import test from "./test";
import btn from "./button";
// 存储组件列表
const components = { test, btn };
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 记录安装状态
  install.installed = true;
  // 遍历注册全局组件
  Object.keys(components).forEach(component => {
    Vue.component(component, components[component]);
  });
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
};
