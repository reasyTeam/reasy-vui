import VuiButton from "./Button.vue";

/* istanbul ignore next */
VuiButton.install = function(Vue) {
  Vue.component(VuiButton.name, VuiButton);
};

export default VuiButton;
