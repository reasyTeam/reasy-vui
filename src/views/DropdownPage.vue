<template>
  <vui-page title="底部弹出单选 vui-dropdown">
    <div class="demo-title">基础用法</div>
    <div class="demo-row">
      <vui-dropdown
        label="选框一(非Object)"
        v-model="value"
        :options="array"
      ></vui-dropdown>
      <vui-dropdown
        label="选框二(Object)"
        v-model="value"
        :options="arrayObject"
      ></vui-dropdown>
    </div>
    <div class="demo-title">属性配置</div>
    <div class="demo-row">
      <vui-dropdown
        label="title：工作日"
        title="工作日"
        v-model="value"
        :options="arrayObject"
      ></vui-dropdown>
      <vui-dropdown
        label="confirmText：OK"
        confirmText="OK"
        v-model="value"
        :options="arrayObject"
      ></vui-dropdown>
      <vui-dropdown
        label="cancelText：算了"
        cancelText="算了"
        v-model="value"
        :options="arrayObject"
      ></vui-dropdown>
      <vui-dropdown
        label="titleColor：#f00"
        titleColor="#f00"
        title="工作日"
        v-model="value"
        :options="arrayObject"
      ></vui-dropdown>
      <vui-dropdown
        label="confirmColor：#f00"
        confirmColor="#f00"
        v-model="value"
        :options="arrayObject"
      ></vui-dropdown>
      <vui-dropdown
        label="cancelColor：#f00"
        cancelColor="#f00"
        v-model="value"
        :options="arrayObject"
      ></vui-dropdown>
      <vui-dropdown
        label="disabled：true"
        disabled
        v-model="value"
        :options="arrayObject"
      ></vui-dropdown>
    </div>
    <div class="demo-title">Events</div>
    <div class="demo-row">
      <vui-dropdown
        label="@cancel"
        @cancel="cancel"
        v-model="value"
        :options="arrayObject"
      ></vui-dropdown>
      <vui-dropdown
        label="@confirm"
        @confirm="confirm"
        v-model="value"
        :options="arrayObject"
      ></vui-dropdown>
    </div>
  </vui-page>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      array: [1, 2, 3, 4, 5, 6, 7],
      arrayObject: [
        { title: "星期一", value: 1 },
        { title: "星期二", value: 2 },
        { title: "星期三", value: 3 },
        { title: "星期四", value: 4 },
        { title: "星期五", value: 5 },
        { title: "星期六", value: 6 },
        { title: "星期日", value: 7 }
      ]
    };
  },
  methods: {
    cancel() {
      this.$toast("click cancel");
    },
    confirm() {
      this.$toast("click confirm");
    }
  }
};
</script>
