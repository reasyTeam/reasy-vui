<template>
  <vui-page title="日期选择 vui-date-picker">
    <div class="demo-title">基础用法</div>
    <div class="demo-row">
      <vui-date-picker label="今天" v-model="today"></vui-date-picker>
      <vui-date-picker label="2020年6月1日" v-model="value"></vui-date-picker>
    </div>
    <div class="demo-title">属性配置</div>
    <div class="demo-row">
      <vui-date-picker
        label="start: 2020"
        :start="2020"
        v-model="today"
      ></vui-date-picker>
      <vui-date-picker
        label="end: 2022"
        :end="2022"
        v-model="today"
      ></vui-date-picker>
      <vui-date-picker
        split-key="/"
        label="splitKey: /"
        v-model="value1"
      ></vui-date-picker>
      <vui-date-picker
        label="format"
        :format="format"
        v-model="today"
      ></vui-date-picker>
      <vui-date-picker
        disabled
        label="disabled：true"
        v-model="today"
      ></vui-date-picker>
    </div>

    <div class="demo-title">Events</div>
    <div class="demo-row">
      <vui-date-picker
        label="@cancel"
        @cancel="cancel"
        v-model="today"
      ></vui-date-picker>
      <vui-date-picker
        label="@confirm"
        @confirm="confirm"
        v-model="today"
      ></vui-date-picker>
    </div>
  </vui-page>
</template>

<script>
export default {
  data() {
    return {
      today: "",
      value: "2020-6-1",
      value1: "2020/6/1"
    };
  },
  methods: {
    format(val) {
      return `${val[0]}年${val[1]}月${val[2]}日`;
    },
    cancel() {
      this.$toast("click cancel");
    },
    confirm() {
      this.$toast("click confirm");
    }
  }
};
</script>
