<template>
  <vui-page title="滑块 vui-range">
    <div class="demo-title">基础用法</div>
    <div class="demo-row">
      <vui-range v-model="value"></vui-range>
    </div>
    <div class="demo-title">属性配置</div>
    <div class="demo-row">
      <vui-range
        label="min:10, max: 80"
        v-model="value1"
        :min="10"
        :max="80"
      ></vui-range>
      <vui-range label="slot:start" v-model="value1" :min="10" :max="80">
        <template v-slot:start>left </template>
      </vui-range>
      <vui-range label="slot:end" v-model="value1" :min="10" :max="80">
        <template v-slot:end>right </template>
      </vui-range>
      <vui-range
        label="step: 4"
        :step="8"
        v-model="step"
        :min="0"
        :max="80"
      ></vui-range>
      <vui-range
        label="disabled"
        disabled
        v-model="min"
        :min="10"
        :max="80"
      ></vui-range>
    </div>
    <div class="demo-title">Events</div>
    <div class="demo-row">
      <vui-range
        label="@change"
        :step="8"
        @change="$toast"
        v-model="step"
        :min="0"
        :max="80"
      ></vui-range>
    </div>
  </vui-page>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      value1: 20,
      min: 10,
      step: 20
    };
  }
};
</script>