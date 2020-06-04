<template>
  <div>
    <slot></slot>
    <pre v-highlightjs="sourcecode">
        <code class="js">
            <input>
        </code>
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    sourcecode: String
  }
};
</script>