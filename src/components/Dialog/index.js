import VuiDialog from "./Dialog.vue";

/* istanbul ignore next */
VuiDialog.install = function(Vue) {
  Vue.component(VuiDialog.name, VuiDialog);
};

export default VuiDialog;
