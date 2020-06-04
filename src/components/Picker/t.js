import BScroll from "@better-scroll/core";
import Wheel from "@better-scroll/wheel";
BScroll.use(Wheel);

const STATE_HIDE = 0;
const STATE_SHOW = 1;

const COMPONENT_NAME = "picker";
const EVENT_SELECT = "select";
const EVENT_CANCEL = "cancel";
const EVENT_CHANGE = "change";

const DATA = [
  {
    text: "北京市",
    value: "110000",
    children: [
      {
        text: "北京市",
        value: "110100"
      }
    ]
  },
  {
    text: "天津市",
    value: "120000",
    children: [
      {
        text: "天津市",
        value: "120000"
      }
    ]
  },
  {
    text: "河北省",
    value: "130000",
    children: [
      {
        text: "石家庄市",
        value: "130100"
      },
      {
        text: "唐山市",
        value: "130200"
      },
      {
        text: "秦皇岛市",
        value: "130300"
      },
      {
        text: "邯郸市",
        value: "130400"
      },
      {
        text: "邢台市",
        value: "130500"
      },
      {
        text: "保定市",
        value: "130600"
      },
      {
        text: "张家口市",
        value: "130700"
      },
      {
        text: "承德市",
        value: "130800"
      }
    ]
  },
  {
    text: "山西省",
    value: "140000",
    children: [
      {
        text: "太原市",
        value: "140100"
      },
      {
        text: "大同市",
        value: "140200"
      },
      {
        text: "阳泉市",
        value: "140300"
      },
      {
        text: "长治市",
        value: "140400"
      },
      {
        text: "晋城市",
        value: "140500"
      },
      {
        text: "朔州市",
        value: "140600"
      },
      {
        text: "晋中市",
        value: "140700"
      }
    ]
  }
];

export default {
  name: COMPONENT_NAME,
  data() {
    return {
      state: STATE_HIDE,
      selectedIndex: [0, 0],
      selectedText: "open",
      pickerData: []
    };
  },
  created() {
    this._loadPickerData(this.selectedIndex, undefined);
  },
  methods: {
    _loadPickerData(newSelectedIndex, oldSelectedIndex) {
      let provinces;
      let cities;
      // first instantiated
      if (!oldSelectedIndex) {
        provinces = DATA.map(({ value, text }) => ({ value, text }));
        cities = DATA[newSelectedIndex[0]].children;
        this.pickerData = [provinces, cities];
      } else {
        // provinces'index changed, refresh cities data
        if (newSelectedIndex[0] !== oldSelectedIndex[0]) {
          cities = DATA[newSelectedIndex[0]].children;
          this.pickerData.splice(1, 1, cities);
          // Since cities data changed
          // refresh better-scroll to recaculate scrollHeight
          this.$nextTick(() => {
            this.wheels[1].refresh();
          });
        }
      }
    },
    _confirm() {
      if (this._isMoving()) {
        return;
      }
      this.hide();

      const currentSelectedIndex = (this.selectedIndex = this.wheels.map(wheel => {
        return wheel.getSelectedIndex();
      }));

      // store array for preventing multi-collecting array dependencies in Vue Source code
      const pickerData = this.pickerData;
      const currentSelectedValue = (this.selectedText = pickerData
        .map((data, index) => {
          return data[currentSelectedIndex[index]].text;
        })
        .join("-"));
      this.$emit(EVENT_SELECT, currentSelectedIndex, currentSelectedValue);
    },
    _cancel() {
      this.hide();
      this.$emit(EVENT_CANCEL);
    },
    _isMoving() {
      return this.wheels.some(wheel => {
        return wheel.pending;
      });
    },
    show() {
      if (this.state === STATE_SHOW) {
        return;
      }
      this.state = STATE_SHOW;
      if (!this.wheels) {
        this.$nextTick(() => {
          this.wheels = [];
          let wheelWrapper = this.$refs.wheelWrapper;
          for (let i = 0; i < this.pickerData.length; i++) {
            this._createWheel(wheelWrapper, i);
          }
        });
      } else {
        for (let i = 0; i < this.pickerData.length; i++) {
          this.wheels[i].enable();
          this.wheels[i].wheelTo(this.selectedIndex[i]);
        }
      }
    },
    hide() {
      this.state = STATE_HIDE;

      for (let i = 0; i < this.pickerData.length; i++) {
        this.wheels[i].disable();
      }
    },
    refresh() {
      this.$nextTick(() => {
        this.wheels.forEach((wheel, index) => {
          wheel.refresh();
        });
      });
    },
    _createWheel(wheelWrapper, i) {
      const wheels = this.wheels;
      if (!wheels[i]) {
        wheels[i] = new BScroll(wheelWrapper.children[i], {
          wheel: {
            selectedIndex: this.selectedIndex[i],
            wheelWrapperClass: "wheel-scroll",
            wheelItemClass: "wheel-item"
          },
          probeType: 3
        });
        // when any of wheels'scrolling ended , you should refresh data
        let prevSelectedIndex = this.selectedIndex;
        wheels[i].on("scrollEnd", () => {
          const currentSelectedIndex = wheels.map(wheel => wheel.getSelectedIndex());
          this._loadPickerData(currentSelectedIndex, prevSelectedIndex);
          prevSelectedIndex = currentSelectedIndex;
          this.$emit(EVENT_CHANGE, i, this.wheels[i].getSelectedIndex());
        });
      } else {
        this.wheels[i].refresh();
      }

      return this.wheels[i];
    },
    _diffSelectedIndex(newV, oldV) {}
  }
};
