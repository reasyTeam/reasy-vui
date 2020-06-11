const install = function(Vue) {
  Vue.prototype.isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
};

let Base = {};

Base.install = install;
export default Base;
