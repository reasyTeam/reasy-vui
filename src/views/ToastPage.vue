<template>
  <vui-page title="Message 消息提醒">
    <div class="demo-title">基础用法</div>
    <div class="button-row">
      <vui-button type="theme" @click="loading">loading</vui-button>
      <vui-button type="theme" @click="toast">toast</vui-button>
      <vui-button type="theme" @click="success">success</vui-button>
      <vui-button type="theme" @click="warning">warning</vui-button>
      <vui-button type="theme" @click="error">error</vui-button>
      <vui-button type="theme" @click="toast1">很长的toast</vui-button>
    </div>
    <div class="demo-title">属性配置</div>
    <div class="demo-row">
      <vui-dropdown
        label="消息提醒类型"
        v-model="type"
        :options="typeOptions"
      ></vui-dropdown>
      <vui-input
        v-model="message"
        label="提示内容"
        placeholder="请输入提示内容"
      ></vui-input>
      <vui-range
        label="显示时间(ms)"
        :min="1000"
        :max="15000"
        :step="500"
        v-model="duration"
      ></vui-range>
    </div>
    <div class="button-row">
      <vui-button block type="theme" @click="showPop">点击显示提醒</vui-button>
    </div>
  </vui-page>
</template>


<script>
export default {
  methods: {
    loading() {
      let load = this.$loading();
      setTimeout(() => {
        load.close();
      }, 3000);
    },
    warning() {
      this.$warning("warning");
    },
    success() {
      this.$success({ message: "success", duration: 6000 });
    },
    toast() {
      this.$toast("toast");
    },
    toast1() {
      this.$toast("这条信息这么长，有没有看到，是不是很长，哈哈哈！");
    },
    error() {
      this.$error("error");
    },
    showPop() {
      if (this.message === "") {
        this.$error("请输入提示内容！");
        return;
      }

      this.$toast({
        type: this.type,
        message: this.message,
        duration: this.duration
      });
    }
  },
  data() {
    return {
      type: "toast",
      typeOptions: [
        { value: "toast", title: "消息提示" },
        { value: "error", title: "错误提示" },
        { value: "loading", title: "加载中" },
        { value: "warning", title: "警告提示" },
        { value: "success", title: "成功提示" }
      ],
      duration: 1000,
      message: ""
    };
  }
};
</script>