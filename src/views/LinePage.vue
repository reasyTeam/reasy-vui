<template>
  <vui-page title="边框 vui-line">
    <div class="demo-row" style="padding: 16px">
      <vui-line class="line" direction="top">上边框</vui-line>
      <vui-line class="line" direction="left">左边框</vui-line>
      <vui-line class="line" direction="right">右边框</vui-line>
      <vui-line class="line" direction="bottom">下边框</vui-line>
      <vui-line class="line" direction="bottom" type="error">红边框</vui-line>
      <vui-line class="line" direction="bottom" type="link"></vui-line>
    </div>
  </vui-page>
</template>

<style scope>
.line {
  padding: 12px;
  margin: 6px 0;
}
</style>
