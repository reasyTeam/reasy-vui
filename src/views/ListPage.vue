<template>
  <vui-page title="List用vui-text">
    <div class="demo-title">Array List Data</div>
    <div class="demo-row">
      <vui-text v-for="item in list" :key="item.value" :label="item.label">{{
        item.value
      }}</vui-text>
    </div>
    <div class="demo-title">Object Data</div>
    <div class="demo-row">
      <vui-text v-for="(value, key) in obj" :key="key" :label="key">{{
        value
      }}</vui-text>
    </div>
  </vui-page>
</template>


<script>
export default {
  data() {
    return {
      list: [
        { label: "vui-input", value: "文本框" },
        { label: "vui-radio", value: "单选按钮" },
        { label: "vui-checkbox", value: "多选框" },
        { label: "vui-switch", value: "开关按钮" },
        { label: "vui-range", value: "范围滑块" }
      ],
      obj: {
        keyA: "valueA",
        keyB: "valueB",
        keyC: "valueC",
        keyD: "valueD",
        keyE: "valueE",
        keyF: "valueF"
      }
    };
  }
};
</script>