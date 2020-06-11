import VuiScroll from "./Scroll.vue";

/* istanbul ignore next */
VuiScroll.install = function(Vue) {
  Vue.component(VuiScroll.name, VuiScroll);
};

export default VuiScroll;
