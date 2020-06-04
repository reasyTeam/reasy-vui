<template>
  <vui-page title="按钮 vui-button">
    <div class="demo-title">基础用法</div>
    <div class="button-row">
      <vui-button>默认</vui-button>
    </div>

    <div class="demo-title">独占一行: block</div>
    <div class="button-row">
      <vui-button block>block</vui-button>
    </div>

    <div class="demo-title">各种主题: type</div>
    <div class="button-row">
      <vui-button type="primary" block>type = primary</vui-button>
      <vui-button type="error" block>type = error</vui-button>
      <vui-button type="warning" block>type = warning</vui-button>
      <vui-button type="link" block>type = link</vui-button>
      <vui-button type="success" block>type = success</vui-button>
    </div>

    <div class="demo-title">无填充按钮：plain</div>
    <div class="button-row">
      <vui-button type="primary" block plain>type = primary</vui-button>
      <vui-button type="error" block plain>type = error</vui-button>
      <vui-button type="warning" block plain>type = warning</vui-button>
      <vui-button type="link" block plain>type = link</vui-button>
      <vui-button type="success" block plain>type = success</vui-button>
    </div>

    <div class="demo-title">按钮大小：size</div>
    <div class="button-row">
      <vui-button type="primary" size="max">max</vui-button>
      <vui-button type="link">normal</vui-button>
      <vui-button type="success" size="min">min</vui-button>
    </div>

    <div class="demo-title">圆角按钮：round</div>
    <div class="button-row">
      <vui-button type="primary" size="max" round>round</vui-button>
      <vui-button type="link" round>round</vui-button>
      <vui-button type="success" size="min" round>round</vui-button>
      <vui-button type="error" size="max" round>3</vui-button>
    </div>

    <div class="demo-title">圆行按钮：circle</div>
    <div class="button-row">
      <vui-button type="success" size="min" round>1</vui-button>
      <vui-button type="link" round>2</vui-button>
      <vui-button type="error" size="max" round>3</vui-button>
      <vui-button
        type="success"
        size="max"
        circle
        icon="vui-icon-delete"
      ></vui-button>
      <vui-button type="success" circle icon="vui-icon-delete"></vui-button>
      <vui-button
        type="success"
        size="min"
        circle
        icon="vui-icon-delete"
      ></vui-button>
    </div>

    <div class="demo-title">带图标按钮：icon</div>
    <div class="button-row">
      <vui-button type="link" round icon="vui-icon-delete"
        >icon="vui-icon-delete"</vui-button
      >
      <vui-button type="error" size="min" icon="vui-icon-delete"
        >delete</vui-button
      >
    </div>

    <div class="demo-title">disabled</div>
    <div class="button-row">
      <vui-button type="error" block disabled>disabled</vui-button>
    </div>

    <div class="demo-title">click事件</div>
    <div class="button-row">
      <vui-button type="primary" @click="btnclick" block>
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