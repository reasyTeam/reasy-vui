<template>
  <div
    class="vui-text-wrapper"
    :class="[`border-${border}`, label ? '' : 'no-title']"
  >
    <div class="vui-form-row" :class="{ disabled: isDisabled }">
      <label class="vui-form-label" v-if="label">{{ label }}</label>
      <div class="vui-form-value">
        <slot>{{ value || placeholder }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vui-text",
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    label: {
      type: String
    },
    border: {
      default: "bottom",
      type: String,
      validator(val) {
        return ["top", "bottom", "all", "none"].indexOf(val) !== -1;
      }
    },
    placeholder: String,
    disabled: {
      default: false
    }
  },

  computed: {
    isDisabled() {
      return this.disabled !== undefined && this.disabled !== false;
    }
  }
};
</script>
