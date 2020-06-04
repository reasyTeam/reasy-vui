<template>
  <vui-page title="单选 vui-Radio">
    <div class="demo-title">基础用法</div>
    <div class="demo-row">
      <vui-radio label="性别" v-model="sex" :options="options"></vui-radio>
    </div>
    <div class="demo-title">属性配置</div>
    <div class="demo-row">
      <vui-radio
        label="单项disabled"
        v-model="day"
        :options="weekday"
      ></vui-radio>
      <vui-radio
        label="disabled"
        v-model="day"
        disabled
        :options="weekday"
      ></vui-radio>
    </div>
    <div class="demo-title">Events</div>
    <div class="demo-row">
      <vui-radio
        label="@change"
        v-model="num"
        @change="change"
        :options="nums"
      ></vui-radio>
    </div>
  </vui-page>
</template>


<script>
export default {
  data() {
    return {
      sex: "0",
      options: {
        0: "男",
        1: "女"
      },
      day: "",
      num: 1,
      nums: [1, 2, 3, 4, 5, 6, 7],
      weekday: [
        { title: "星期一", value: 1 },
        { title: "星期二", value: 2, disabled: true },
        { title: "星期三", value: 3 },
        { title: "星期四", value: 4 },
        { title: "星期五", value: 5, disabled: true },
        { title: "星期六", value: 6 },
        { title: "星期日", value: 7 }
      ]
    };
  },
  methods: {
    change(val) {
      this.$toast(val);
    }
  }
};
</script>