<template>
  <section class="vui-collapse" :class="[`border-${border}`, { 'is-active': isActive, disabled: isDisabled }]">
    <div class="vui-collapse-head border-bottom" @click="change">
      <div class="vui-coolapse-title ellipsis">
        <slot name="title">
          <label>
            {{ label }}
          </label>
        </slot>
      </div>
      <i class="vui-icon-up"></i>
    </div>
    <vui-collapse-transition>
      <div v-show="isActive">
        <div class="vui-collapse-content border-bottom">
          <slot></slot>
        </div>
      </div>
    </vui-collapse-transition>
  </section>
</template>

<script>
export default {
  name: "vui-collapse",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    border: {
      default: "top",
      type: String,
      validator(val) {
        return ["top", "none"].indexOf(val) !== -1;
      }
    },
    disabled: {
      default: false
    },
    label: String
  },
  data() {
    return {
      isActive: this.active
    };
  },
  computed: {
    isDisabled() {
      return this.disabled !== false && this.disabled !== undefined;
    }
  },
  methods: {
    change() {
      if (this.isDisabled) {
        return;
      }
      this.isActive = !this.isActive;
      this.$emit("change", this.isActive);
    }
  }
};
</script>
