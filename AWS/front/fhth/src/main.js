import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/all.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$socket = "fff";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");