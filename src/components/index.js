import "../scss/vui.scss";

import FastClick from "fastclick";
import VuiButton from "./Button/index.js";
import VuiLine from "./Line/index.js";
import VuiInput from "./Input/index.js";
import VuiRadio from "./Radio/index.js";
import VuiCheckbox from "./Checkbox/index.js";
import VuiSelect from "./Select/index.js";
import VuiSwitch from "./Switch/index.js";
import VuiRange from "./Range/index.js";
import VuiToast from "./Toast/index.js";
import VuiDialog from "./Dialog/index.js";
import VuiMessage from "./Dialog/Message.js";
import VuiCollapse from "./Collapse/index.js";
import VuiTransition from "./Transition/index.js";
import VuiTab from "./Tab/Tab.vue";
import VuiScroll from "./Scroll/index.js";
import VuiPicker from "./Picker/index.js";
import VuiDatePicker from "./Picker/DatePicker.js";
import VuiDropdown from "./Picker/Dropdown.js";
import VuiText from "./Text/index.js";

// eslint-disable-next-line prettier/prettier
const components = [VuiButton, VuiLine, VuiInput, VuiRadio, VuiCheckbox, VuiSelect, VuiSwitch, VuiRange, VuiDialog, VuiCollapse, VuiTransition, VuiTab, VuiScroll, VuiPicker, VuiDatePicker, VuiDropdown, VuiText];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(VuiToast);
  Vue.use(VuiMessage);

  Vue.prototype.$loading = VuiToast.loading;
  Vue.prototype.$toast = VuiToast.toast;
  Vue.prototype.$success = VuiToast.success;
  Vue.prototype.$warning = VuiToast.warning;
  Vue.prototype.$error = VuiToast.error;
  Vue.prototype.$message = VuiToast.message;

  Vue.prototype.$alert = VuiMessage.alert;
  Vue.prototype.$confirm = VuiMessage.confirm;

  FastClick.attach(document.body);
};

export default {
  install,
  VuiButton,
  VuiLine,
  VuiInput,
  VuiRadio,
  VuiCheckbox,
  VuiSelect,
  VuiSwitch,
  VuiRange,
  VuiDialog,
  VuiCollapse,
  VuiTransition,
  VuiTab,
  VuiScroll,
  VuiPicker,
  VuiDatePicker,
  VuiDropdown,
  VuiText
};
