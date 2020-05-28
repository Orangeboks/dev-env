import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Importing the main css file
import "@/assets/css/main.css";

// Scripts

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
