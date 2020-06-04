<template>
  <vui-page title="开关 vui-switch">
    <div class="demo-title">基础用法</div>
    <div class="demo-row">
      <vui-switch label="开关" v-model="val"></vui-switch>
    </div>
    <div class="demo-title">属性配置</div>
    <div class="demo-row">
      <vui-switch
        label="activeValue: 1, negativeValue: 0"
        :activeValue="1"
        :negativeValue="0"
        v-model="val1"
        @change="$toast"
      ></vui-switch>
      <vui-switch label="开关(禁用)" v-model="val" disabled></vui-switch>
    </div>
    <div class="demo-title">Events</div>
    <div class="demo-row">
      <vui-switch label="@change" v-model="val" @change="$toast"></vui-switch>
    </div>
  </vui-page>
</template>
<script>
export default {
  data() {
    return {
      val: false,
      val1: 1
    };
  }
};
</script>
