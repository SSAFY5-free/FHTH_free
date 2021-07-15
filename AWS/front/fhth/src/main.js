import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/all.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { baseURL, port } from "./utils/conf";
Vue.config.productionTip = false;
Vue.use(ElementUI);

// vue-socket.io 설정
import io from "socket.io-client";

const socket = io(baseURL + port.server, {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
});
Vue.prototype.$socket = socket;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
