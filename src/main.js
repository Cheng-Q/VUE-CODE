import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import test from "../packages/index";
Vue.use(test);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
