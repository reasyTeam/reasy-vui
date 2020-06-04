# reasy-vui

移动端 UI 组件库。

# 组件列表

- [vui-text 文本](#vui-text)
- [vui-button 按钮](#vui-button)
- [vui-line 1px 边框](#vui-line)
- [vui-input 文本框](#vui-input)
- [vui-radio 单选框](#vui-radio)
- [vui-checkbox 复选框](#vui-checkbox)
- [vui-select 原生 select](#vui-select)
- [vui-switch 开关按钮](#vui-switch)
- [vui-range 范围选择滑块](#vui-range)
- [vui-collapse 手风琴折叠](#vui-collapse)
- [vui-dropdown 底部弹出单选器](#vui-dropdown)
- [vui-date-picker 日期选择器](#vui-date-picker)
- [vui-picker 多列，联动选择器](#vui-picker)
- [vui-scroll 回弹滚动容器](#vui-scroll)
- [vui-tab 导航按钮组](#vui-tab)
- [toast 消息提示](#toast消息提示)
- [Dialog 弹出框](#Dialog)

# API

##

## vui-text

文本显示组件，用于显示单行文本，表单文本，或者 list 内容。

### Attributes

| 参数        | 说明           | 类型    | 可选值                 | 默认值 |
| ----------- | -------------- | ------- | ---------------------- | ------ |
| value       | 绑定值         | string  | -                      | -      |
| label       | 标题           | string  | -                      | -      |
| border      | 显示的边框类型 | string  | top, bottom, all, none | bottom |
| placeholder | 占位文本       | string  | -                      | -      |
| disabled    | 禁用           | boolean | -                      | false  |

### Slots

| name    | 说明                          |
| ------- | ----------------------------- |
| default | 显示内容，替换显示`value`的值 |

> 优先级：`slot` > `value` > `placeholder`

## vui-button

按钮组件，提供多种样式主题。

### Attributes

| 参数     | 说明                       | 类型    | 可选值                                         | 默认值  |
| -------- | -------------------------- | ------- | ---------------------------------------------- | ------- |
| plain    | 是否不填充背景色           | boolean | -                                              | false   |
| round    | 是否圆角按钮               | boolean | -                                              | false   |
| circle   | 是否圆形按钮               | boolean | -                                              | false   |
| icon     | 图标类名                   | string  | -                                              | -       |
| type     | 类型，不同类型对应不同主题 | string  | default,primary, error, warning, success, link | default |
| size     | 尺寸                       | string  | max, normal, min                               | -       |
| block    | 是否独占一行               | boolean | -                                              | false   |
| disabled | 禁用                       | boolean | -                                              | false   |
| margin   | style 属性 margin 的值     | string  | -                                              | -       |
| border   | 是否显示边框               | boolean | -                                              | true    |

### Slots

| name    | 说明           |
| ------- | -------------- |
| default | 按钮显示的内容 |

### Events

| 事件名称 | 说明     | 参数                                                 |
| -------- | -------- | ---------------------------------------------------- |
| click    | 点击事件 | 未提供参数，默认传(event: Event)，否则传递提供的参数 |

## vui-line

移动端 1px 粗细线条。

| 参数      | 说明                                      | 类型   | 可选值                                         | 默认值  |
| --------- | ----------------------------------------- | ------ | ---------------------------------------------- | ------- |
| direction | 哪个方向的线条                            | string | top, bottom, right, left                       | top     |
| type      | 线条颜色主题，同[vui-button](#vui-button) | string | default,primary, error, warning, success, link | default |

### Slots

| name    | 说明         |
| ------- | ------------ |
| default | 线条内的内容 |

## vui-input

`input`输入文本框

### Attributes

| 参数            | 说明                            | 类型            | 可选值                      | 默认值 |
| --------------- | ------------------------------- | --------------- | --------------------------- | ------ |
| type            | 类型                            | string          | 原生可输入 input 的 type 值 | text   |
| value / v-model | 绑定值                          | string / number | -                           | -      |
| maxlength       | 原生属性，最大输入长度          | number          | -                           | -      |
| placeholder     | 原生属性，输入框占位文本        | string          | -                           | -      |
| clearable       | 是否可清空                      | boolean         | -                           | true   |
| disabled        | 禁用                            | boolean         | -                           | false  |
| name            | 原生属性                        | string          | -                           | -      |
| label           | 标题                            | string          | -                           | -      |
| border          | 显示的边框类型                  | string          | top, bottom, all, none      | bottom |
| switchable      | password 时是否显示切换密码图标 | boolean         | - [待开发]                  | true   |

### Events [todo 确认参数]

| 事件名称 | 说明                   | 参数  |
| -------- | ---------------------- | ----- |
| focus    | 获取焦点时触发         | value |
| blur     | 失去焦点时触发         | value |
| clear    | 点击清空时触发         | value |
| change   | 失去焦点且值改变时触发 | value |

## vui-radio

### Attributes

| 参数            | 说明         | 类型           | 可选值                 | 默认值 |
| --------------- | ------------ | -------------- | ---------------------- | ------ |
| options         | 选项列表     | array, object  | -                      | -      |
| value / v-model | 绑定值       | string, number | -                      | -      |
| label           | 标题         | string         | -                      | -      |
| border          | 显示边框方向 | string         | top, bottom, all, none | bottom |
| disabled        | 禁用         | boolean        | -                      | false  |
| name            | 原生属性     | string         | -                      | -      |

### Events

| 事件名称 | 说明         | 参数    |
| -------- | ------------ | ------- |
| change   | 值改变时触发 | `value` |

## vui-checkbox

### Attributes

| 参数            | 说明           | 类型          | 可选值                 | 默认值 |
| --------------- | -------------- | ------------- | ---------------------- | ------ |
| options         | 选项列表       | array, object | -                      | -      |
| value / v-model | 绑定值         | string        | -                      | -      |
| label           | 标题           | string        | -                      | -      |
| border          | 显示边框方向   | string        | top, bottom, all, none | bottom |
| disabled        | 禁用           | boolean       | -                      | false  |
| splitKey        | 多个值的连接符 | string        | -                      | `,`    |
| name            | 原生属性       | string        | -                      | -      |

### Events

| 事件名称 | 说明         | 参数    |
| -------- | ------------ | ------- |
| change   | 值改变时触发 | `value` |

## vui-select

### Attributes

| 参数            | 说明         | 类型           | 可选值                 | 默认值 |
| --------------- | ------------ | -------------- | ---------------------- | ------ |
| options         | 选项列表     | array, object  | -                      | -      |
| value / v-model | 绑定值       | string, number | -                      | -      |
| label           | 标题         | string         | -                      | -      |
| border          | 显示边框方向 | string         | top, bottom, all, none | bottom |
| disabled        | 禁用         | boolean        | -                      | false  |
| name            | 原生属性     | string         | -                      | -      |

### Events

| 事件名称 | 说明         | 参数    |
| -------- | ------------ | ------- |
| change   | 值改变时触发 | `value` |

## vui-switch

### Attributes

| 参数            | 说明           | 类型                    | 可选值                 | 默认值 |
| --------------- | -------------- | ----------------------- | ---------------------- | ------ |
| value / v-model | 绑定值         | string, number, boolean | -                      | -      |
| activeValue     | 开启时对应的值 | string, number, boolean | -                      | true   |
| negativeValue   | 关闭时对应的值 | string, number, boolean | -                      | false  |
| label           | 标题           | string                  | -                      | -      |
| border          | 显示边框方向   | string                  | top, bottom, all, none | bottom |
| disabled        | 禁用           | boolean                 | -                      | false  |
| name            | 原生属性       | string                  | -                      | -      |

### Events

| 事件名称 | 说明         | 参数    |
| -------- | ------------ | ------- |
| change   | 值改变时触发 | `value` |

## vui-range

### Attributes

| 参数            | 说明                            | 类型    | 可选值                 | 默认值 |
| --------------- | ------------------------------- | ------- | ---------------------- | ------ |
| value / v-model | 绑定值                          | number  | -                      | -      |
| min             | 最小值                          | number  | -                      | 0      |
| max             | 最大值                          | number  | -                      | 100    |
| step            | 步长，`max-min`是`step`的整数倍 | number  | -                      | 1      |
| barHeight       | 拖动栏高，单位 px               | number  |                        | 1      |
| label           | 标题                            | string  | -                      | -      |
| border          | 显示边框方向                    | string  | top, bottom, all, none | bottom |
| disabled        | 禁用                            | boolean | -                      | false  |
| name [待开发]   | 原生属性                        | string  | -                      | -      |

### Events

| 事件名称 | 说明         | 参数    |
| -------- | ------------ | ------- |
| change   | 值改变时触发 | `value` |

## vui-collapse

### Attributes

| 参数     | 说明         | 类型    | 可选值                 | 默认值 |
| -------- | ------------ | ------- | ---------------------- | ------ |
| active   | 选项列表     | boolean | -                      | false  |
| label    | 标题         | string  | -                      | -      |
| border   | 显示边框方向 | string  | top, bottom, all, none | top    |
| disabled | 禁用         | boolean | -                      | false  |

### Events

| 事件名称 | 说明             | 参数    |
| -------- | ---------------- | ------- |
| change   | 展开或收起时触发 | `value` |

## vui-dropdown

### Attributes

| 参数            | 说明           | 类型                    | 可选值                 | 默认值    |
| --------------- | -------------- | ----------------------- | ---------------------- | --------- |
| options         | 选项列表       | array                   | -                      | -         |
| value / v-model | 绑定值         | string, number, boolean | -                      | -         |
| label           | 标题           | string                  | -                      | -         |
| title           | 弹出框标题     | string                  | top, bottom, all, none | -         |
| disabled        | 禁用           | boolean                 | -                      | false     |
| confirmText     | 确认按钮文本   | string                  | -                      | 确定      |
| cancelText      | 取消按钮文本   | string                  | -                      | 取消      |
| titleColor      | 弹出框标题颜色 | string                  | -                      | `#333`    |
| confirmColor    | 确认按钮颜色   | string                  | -                      | `#ff642b` |
| cancelColor     | 取消按钮颜色   | string                  | -                      | `#8c8c8c` |

### Events

| 事件名称 | 说明           | 参数     |
| -------- | -------------- | -------- |
| cancel   | 点击取消时触发 | [待确认] |
| confirm  | 点击确认时触发 | [待确认] |

## vui-date-picker

### Attributes

| 参数            | 说明                   | 类型     | 可选值                 | 默认值    |
| --------------- | ---------------------- | -------- | ---------------------- | --------- |
| value / v-model | 绑定值，为空默认为今天 | string   | -                      | -         |
| start           | 开始年份               | number   | -                      | 1950      |
| end             | 结束年份               | number   | -                      | 2050      |
| splitKey        | 年月日连接符           | string   | -                      | `-`       |
| format          | 数据格显示规则         | function | -                      | -         |
| label           | 标题                   | string   | -                      | -         |
| title           | 弹出框标题             | string   | top, bottom, all, none | -         |
| disabled        | 禁用                   | boolean  | -                      | false     |
| confirmText     | 确认按钮文本           | string   | -                      | 确定      |
| cancelText      | 取消按钮文本           | string   | -                      | 取消      |
| titleColor      | 弹出框标题颜色         | string   | -                      | `#333`    |
| confirmColor    | 确认按钮颜色           | string   | -                      | `#ff642b` |
| cancelColor     | 取消按钮颜色           | string   | -                      | `#8c8c8c` |

### Events

| 事件名称 | 说明           | 参数     |
| -------- | -------------- | -------- |
| cancel   | 点击取消时触发 | [待确认] |
| confirm  | 点击确认时触发 | [待确认] |

## vui-picker

| 参数            | 说明           | 类型           | 可选值                 | 默认值    |
| --------------- | -------------- | -------------- | ---------------------- | --------- |
| options         | 选项列表       | array          | -                      | -         |
| value / v-model | 绑定值         | string, number | -                      | -         |
| splitKey        | 显示文本连接符 | string         | -                      | `,`       |
| label           | 标题           | string         | -                      | -         |
| title           | 弹出框标题     | string         | top, bottom, all, none | -         |
| disabled        | 禁用           | boolean        | -                      | false     |
| confirmText     | 确认按钮文本   | string         | -                      | 确定      |
| cancelText      | 取消按钮文本   | string         | -                      | 取消      |
| titleColor      | 弹出框标题颜色 | string         | -                      | `#333`    |
| confirmColor    | 确认按钮颜色   | string         | -                      | `#ff642b` |
| cancelColor     | 取消按钮颜色   | string         | -                      | `#8c8c8c` |

### Events

| 事件名称 | 说明           | 参数     |
| -------- | -------------- | -------- |
| cancel   | 点击取消时触发 | [待确认] |
| confirm  | 点击确认时触发 | [待确认] |

## vui-scroll

### Attributes

| 参数              | 说明                   | 类型           | 可选值                 | 默认值 |
| ----------------- | ---------------------- | -------------- | ---------------------- | ------ |
| height            | 选项列表               | array, object  | -                      | -      |
| scrollY           | 绑定值                 | string, number | -                      | -      |
| scrollX           | 标题                   | string         | -                      | -      |
| startX            | 显示边框方向           | string         | top, bottom, all, none | bottom |
| startY            | 禁用                   | boolean        | -                      | false  |
| scroll            | 滚动过程中触发         | string         | -                      | -      |
| scrollEnd         | 滚动结束触发           | function       | -                      | -      |
| scrollStart       | 滚动开始时触发         | function       | -                      | -      |
| beforeScrollStart | 滚动开始之前触发       | function       | -                      | -      |
| refresh           | refresh 方法调用完成后 | function       | -                      | -      |
| destroy           | destroy 方法调用完成后 | function       | -                      | -      |

### 

> 方法具体参数参考[**better-scroll文档**]([https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#%E5%B1%9E%E6%80%A7](https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#属性))



## vui-tab

### Attributes

| 参数         | 说明             | 类型                    | 可选值       | 默认值 |
| ------------ | ---------------- | ----------------------- | ------------ | ------ |
| type         | 风格类型         | string                  | link, button | link   |
| buttons      | 按钮组           | array                   | -            | -      |
| value        | 激活状态按钮的值 | string, number, boolean | -            | -      |
| disabledKeys | 禁用的按钮       | array                   | -            | -      |
| disabled     | 禁用             | boolean                 | -            | false  |

### Events

| 事件名称 | 说明                 | 参数    |
| -------- | -------------------- | ------- |
| change   | 激活按钮项改变时触发 | `value` |



## toast 消息提示

### Attributes

| 参数            | 说明         | 类型           | 可选值                 | 默认值 |
| --------------- | ------------ | -------------- | ---------------------- | ------ |
| options         | 选项列表     | array, object  | -                      | -      |
| value / v-model | 绑定值       | string, number | -                      | -      |
| label           | 标题         | string         | -                      | -      |
| border          | 显示边框方向 | string         | top, bottom, all, none | bottom |
| disabled        | 禁用         | boolean        | -                      | false  |
| name            | 原生属性     | string         | -                      | -      |

### Events

| 事件名称 | 说明         | 参数    |
| -------- | ------------ | ------- |
| change   | 值改变时触发 | `value` |



## Dialog

### Attributes

| 参数            | 说明         | 类型           | 可选值                 | 默认值 |
| --------------- | ------------ | -------------- | ---------------------- | ------ |
| options         | 选项列表     | array, object  | -                      | -      |
| value / v-model | 绑定值       | string, number | -                      | -      |
| label           | 标题         | string         | -                      | -      |
| border          | 显示边框方向 | string         | top, bottom, all, none | bottom |
| disabled        | 禁用         | boolean        | -                      | false  |
| name            | 原生属性     | string         | -                      | -      |

### Events

| 事件名称 | 说明         | 参数    |
| -------- | ------------ | ------- |
| change   | 值改变时触发 | `value` |
