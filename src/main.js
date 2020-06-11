import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ReasyVui from "./components/index";
import VueHighlightJS from "vue-highlightjs";
import VuiCode from "./views/Code.vue";
import "highlight.js/styles/atom-one-dark.css";

import HeadBar from "./components/HeadBar.vue";
import VuiPage from "./components/Page.vue";

Vue.config.productionTip = false;
ReasyVui.install(Vue);

Vue.use(VueHighlightJS);
Vue.component("vui-code", VuiCode);
Vue.component("vui-head", HeadBar);
Vue.component("vui-page", VuiPage);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
