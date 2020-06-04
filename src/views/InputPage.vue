<template>
  <vui-page title="文本框 vui-input">
    <div class="demo-title">基础用法</div>
    <div class="demo-row">
      <vui-input placeholder="文本框" v-model="value"></vui-input>
    </div>
    <div class="demo-title">属性配置</div>
    <div class="demo-row">
      <vui-input
        placeholder="密码框"
        type="password"
        v-model="password"
      ></vui-input>
      <vui-input
        label="label: 标题"
        placeholder="通过label配置标题"
        v-model="label"
      ></vui-input>
      <vui-input
        label="placeholder"
        placeholder="显示placeholder"
        v-model="placeholder"
      ></vui-input>
      <vui-input
        label="name: age"
        placeholder="表单name属性配置"
        v-model="name"
      ></vui-input>
      <vui-input
        label="maxlength: 8"
        placeholder="最长可输入8位"
        v-model="maxlength"
        maxlength="8"
      ></vui-input>
      <vui-input
        label="clearable: false"
        placeholder="不显示清除按钮"
        v-model="clearable"
        :clearable="false"
      ></vui-input>
      <vui-input label="disabled: true" disabled :value="value"></vui-input>
    </div>
    <div class="demo-title">Events</div>
    <div class="demo-row">
      <vui-input
        label="@focus"
        placeholder="获得焦点时触发"
        v-model="focus"
        @focus="$toast('focus')"
      ></vui-input>
      <vui-input
        label="@blur"
        placeholder="失去焦点时触发"
        v-model="blur"
        @blur="$toast('blur')"
      ></vui-input>
      <vui-input
        label="@clear"
        placeholder="点击清空时触发"
        v-model="clear"
        @clear="$toast('clear')"
      ></vui-input>
      <vui-input
        label="@change"
        placeholder="失去焦点且值改变时触发"
        v-model="change"
        @change="$toast('change')"
      ></vui-input>
    </div>
  </vui-page>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      password: "",
      label: "",
      placeholder: "",
      name: "",
      maxlength: "",
      clearable: "",
      change: "",
      blur: "",
      focus: "",
      clear: ""
    };
  }
};
</script>
