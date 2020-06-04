import "../scss/vui.scss";

import HeadBar from "./HeadBar.vue";
import VuiPage from "./Page.vue";
import VuiButton from "./Button/Button.vue";
import VuiLine from "./Line/Line.vue";
import VuiInput from "./Input/Input.vue";
import VuiRadio from "./Radio/Radio.vue";
import VuiCheckbox from "./Checkbox/Checkbox.vue";
import VuiSelect from "./Select/Select.vue";
import VuiSwitch from "./Switch/Switch.vue";
import VuiRange from "./Range/Range.vue";
import VuiMessage from "./Loading/index";
import VuiDialog from "./Dialog/Dialog.vue";
import Message from "./Dialog/Message";
import VuiCollapse from "./Collapse/Collapse";
import VuiTransition from "./lib/collapse-transition";
import VuiTab from "./Tab/Tab.vue";
import VuiScroll from "./Scroll/Scroll.vue";
import VuiPicker from "./Picker/Picker.vue";
import VuiDatePicker from "./Picker/DatePicker.vue";
import VuiDropdown from "./Picker/Dropdown.vue";
import VuiText from "./Text/Text.vue";

import FastClick from "fastclick";

const is_ios = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export default function install(Vue) {
  Vue.component("vui-head", HeadBar);
  Vue.component("head-bar", HeadBar);
  Vue.component("vui-page", VuiPage);
  Vue.component("vui-button", VuiButton);
  Vue.component("vui-line", VuiLine);
  Vue.component("vui-input", VuiInput);
  Vue.component("vui-radio", VuiRadio);
  Vue.component("vui-checkbox", VuiCheckbox);
  Vue.component("vui-select", VuiSelect);
  Vue.component("vui-switch", VuiSwitch);
  Vue.component("vui-range", VuiRange);
  Vue.component("vui-dialog", VuiDialog);
  Vue.component("vui-collapse", VuiCollapse);
  Vue.component(VuiTransition.name, VuiTransition);
  Vue.component("vui-tab", VuiTab);
  Vue.component("vui-scroll", VuiScroll);
  Vue.component("vui-picker", VuiPicker);
  Vue.component("vui-date-picker", VuiDatePicker);
  Vue.component("vui-dropdown", VuiDropdown);
  Vue.component("vui-text", VuiText);

  Vue.prototype.$loading = VuiMessage.loading;
  Vue.prototype.$toast = VuiMessage.toast;
  Vue.prototype.$success = VuiMessage.success;
  Vue.prototype.$warning = VuiMessage.warning;
  Vue.prototype.$error = VuiMessage.error;
  // Vue.prototype.$message = VuiMessage;
  Vue.prototype.$alert = Message.alert;
  Vue.prototype.$confirm = Message.confirm;

  // 一些兼容性代码
  /* for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport. */
  // document.documentElement.addEventListener(
  //   "touchstart",
  //   e => {
  //     if (e.touches.length > 1) {
  //       e.preventDefault();
  //     }
  //   },
  //   false
  // );

  /* iOS Safari - Disable double click to zoom */
  if (is_ios()) {
    let lastTouchEnd = 0;
    document.documentElement.addEventListener(
      "touchend",
      e => {
        let now = new Date().getTime();
        if (now - lastTouchEnd < 300) {
          e.preventDefault();
        }
        lastTouchEnd = now;
      },
      false
    );
  }

  FastClick.attach(document.body);
}
