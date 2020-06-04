<template>
  <div class="vui-radio-wrapper" :class="[`border-${border}`]">
    <div
      class="vui-radio vui-form-row"
      :class="{ disabled: isDisabled }"
      @click="showSelect"
    >
      <label class="vui-form-label">{{ label }}</label>
      <div class="vui-form-value">
        <span class="vui-form-item-value">{{ valueText }}</span>
        <i class="vui-form-arrow vui-icon-right"></i>
      </div>
    </div>
    <vui-pop-page ref="popPage" :title="label">
      <ul class="vui-list">
        <li
          class="vui-list-item border-bottom"
          v-for="item in formatedOptions"
          :key="item.value"
          @click="change(item)"
        >
          <label class="vui-form-label" :class="{ disabled: item.disabled }">{{
            item.title
          }}</label>
          <i
            class="vui-icon-check vui-list-icon is-active"
            v-show="item.value === value"
          ></i>
        </li>
      </ul>
    </vui-pop-page>
  </div>
</template>
<script>
import VuiPopPage from "../VuiPopPage.vue";

export default {
  name: "vui-radio",
  props: {
    options: {
      type: [Array, Object],
      required: true
    },

    value: {
      type: [String, Number, Boolean],
      required: true
    },

    label: {
      type: [String, Number],
      default: ""
    },
    border: {
      default: "bottom",
      type: String,
      validator(val) {
        return ["top", "bottom", "all", "none"].indexOf(val) !== -1;
      }
    },
    disabled: {
      default: false
    },
    name: String
  },

  model: {
    prop: "value",
    event: "input"
  },

  components: {
    VuiPopPage
  },

  watch: {
    value() {
      this.getText();
    }
  },

  computed: {
    isDisabled() {
      return this.disabled !== false && this.disabled !== undefined;
    },
    popvm() {
      return this.$refs.popPage;
    },
    formatedOptions() {
      let res = [];
      if (Array.isArray(this.options)) {
        this.options.forEach(item => {
          if (typeof item !== "object") {
            res.push({
              title: item,
              value: item
            });
            this.value2Text[item] = item;
          } else {
            res.push(item);
            this.value2Text[item.value] = item.title;
          }
        });
      } else {
        for (let [key, value] of Object.entries(this.options)) {
          res.push({
            title: value,
            value: key
          });
          /* eslint-disable */
          this.value2Text[key] = value;
        }
      }
      return res;
    }
  },

  data() {
    this.value2Text = {};
    return { valueText: "" };
  },

  methods: {
    showSelect() {
      if (this.isDisabled) {
        return;
      }
      this.popvm.show();
    },
    change(item) {
      if (this.isDisabled || item.disabled) {
        return;
      }
      this.$emit("input", item.value);
      this.$emit("change", item.value);
    },
    getText() {
      this.valueText = this.value2Text[this.value] || "请选择";
    }
  },
  mounted() {
    this.getText();
    this.$root.$el.append(this.$refs.popPage.$el);
  },
  beforeDestroy() {
    if (this.popvm) {
      this.popvm.$el.remove();
      this.popvm.$destroy();
    }
  }
};
</script>
