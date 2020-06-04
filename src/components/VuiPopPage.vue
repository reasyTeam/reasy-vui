<template>
  <transition name="pop-page">
    <div vui-pop class="vui-page-wrapper" v-show="display" style="z-index:11">
      <div class="vui-page">
        <div class="head-bar">
          <div class="head-btn left">
            <button class="button button-icon" @click="back">
              <i class="icon vui-icon-left"></i>
            </button>
          </div>

          <h1 class="title" v-if="title">
            <span v-text="title"></span>
          </h1>
        </div>
        <div class="vui-page-content">
          <slot> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: [String, Number]
    }
  },
  data() {
    return {
      display: false,
      timeout: null
    };
  },
  methods: {
    back() {
      this.display = false;
      // this.$emit("change", false);
      this.addClass("slide-in");
    },
    show() {
      // this.$emit("change", true);
      this.display = true;
      this.addClass("slide-out");
    },
    addClass(css) {
      let el = document.querySelector("[vui-page].vui-main-page");
      if (el) {
        el.classList.add(css);
        this.timeout = setTimeout(() => {
          el.classList.remove(css);
        }, 500);
      }
    }
  },
  destroy() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
};
</script>