<template>
  <div :class="['vui-line', `line-${direction}`, type]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vui-line",
  props: {
    direction: {
      default: "top",
      type: String,
      validator: function(value) {
        return ["top", "left", "bottom", "right"].indexOf(value) !== -1;
      }
    },
    type: {
      default: "default",
      type: String,
      validator(val) {
        return (
          ["default", "primary", "error", "warning", "success", "link"].indexOf(
            val
          ) > -1
        );
      }
    }
  }
};
</script>
