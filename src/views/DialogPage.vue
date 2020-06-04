<template>
  <vui-page title="vui-dialog">
    <div class="demo-title">vui-dialog</div>
    <div class="button-row">
      <vui-button type="primary" @click="visible = true">默认弹框</vui-button>
      <vui-button type="primary" @click="visible1 = true">内容弹框</vui-button>
    </div>

    <div class="demo-title">指令弹窗</div>
    <div class="button-row">
      <vui-button type="primary" @click="alert">alert</vui-button>
      <vui-button type="primary" @click="alert1">alert 知道了</vui-button>
      <vui-button type="primary" @click="confirm">confirm</vui-button>
    </div>
    <vui-dialog v-model="visible" :title="title"></vui-dialog>
    <vui-dialog v-model="visible1" :title="title" :buttons="buttons">
      <div>文本内容</div>
    </vui-dialog>
  </vui-page>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      visible1: false,
      title: "这是标题",
      buttons: [{ title: "取消" }, { title: "知道了", type: "primary" }]
    };
  },
  methods: {
    alert() {
      this.$alert("alert 弹窗").then(() => {
        this.$toast("click ok");
      });
    },
    alert1() {
      this.$alert("alert 弹窗", "知道了").then(() => {
        this.$toast("click 知道了");
      });
    },
    confirm() {
      this.$confirm("确定要删除嘛？")
        .then(() => {
          this.$toast("click ok");
        })
        .catch(() => {
          this.$toast("click cancel");
        });
    }
  }
};
</script>