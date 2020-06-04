import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import install from "./components/index";
import VueHighlightJS from "vue-highlightjs";
import VuiCode from "./views/Code.vue";
import "highlight.js/styles/atom-one-dark.css";

Vue.config.productionTip = false;
install(Vue);

Vue.use(VueHighlightJS);
Vue.component("vui-code", VuiCode);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
