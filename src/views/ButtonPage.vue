<template>
  <vui-page title="按钮 vui-button">
    <div class="demo-title">样式</div>
    <div class="button-row">
      <vui-button>默认</vui-button>
      <vui-button type="theme" @click="btnclick" block
        >block type=theme</vui-button
      >
      <vui-button type="error" block>type=error</vui-button>
      <vui-button type="warning" block>type=warning</vui-button>
      <vui-button type="link" block>type=link</vui-button>
      <vui-button type="success" block>type=success</vui-button>
      <vui-button type="error" block plain>type=error plain</vui-button>
      <vui-button type="error" block disabled>disabled</vui-button>
      <div>
        <vui-button type="success" size="min">size=min</vui-button>
        <vui-button type="link">link</vui-button>
        <vui-button type="error" size="max">size=max</vui-button>
      </div>
      <div>
        <vui-button type="error" size="max" round>round</vui-button>
        <vui-button type="link" round>round</vui-button>
        <vui-button type="success" size="min" round>round</vui-button>
      </div>
      <div>
        <vui-button type="success" size="min" round>1</vui-button>
        <vui-button type="link" round>2</vui-button>
        <vui-button type="error" size="max" round>3</vui-button>
        <vui-button
          type="success"
          size="max"
          margin="0 0 0 6px "
          circle
          icon="vui-icon-delete"
        ></vui-button>
        <vui-button
          type="success"
          margin="0 6px"
          circle
          icon="vui-icon-delete"
        ></vui-button>
        <vui-button
          type="success"
          size="min"
          circle
          icon="vui-icon-delete"
        ></vui-button>
      </div>
      <div>
        <vui-button type="link" margin="0 6px" round icon="vui-icon-delete"
          >icon="vui-icon-delete"</vui-button
        >
        <vui-button type="error" size="min" icon="vui-icon-delete"
          >delete</vui-button
        >
      </div>
    </div>

    <div class="demo-title">click事件</div>
    <div class="button-row">
      <vui-button type="theme" @click="btnclick" block>
        click handle
      </vui-button>
      <vui-button type="error" @click="click('error')" block
        >一个参数
      </vui-button>
      <vui-button type="link" @click="click1('error', '111')" block
        >两个参数
      </vui-button>
    </div>
  </vui-page>
</template>

<script>
export default {
  methods: {
    btnclick() {
      alert("click");
    },
    click(type) {
      alert(`click ${type}`);
    },
    click1(type, t) {
      alert(`传递两个参数 [${type}, ${t}]`);
    }
  }
};
</script>