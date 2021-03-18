import test from "./test.vue";
test.install = Vue => Vue.component(test.name, test);
export default test;
