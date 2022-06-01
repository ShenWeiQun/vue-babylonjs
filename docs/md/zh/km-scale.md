# 比例尺控件

`KmScale`

## 属性

| 属性名         | 类型                           | 默认值 | 描述               |
| -------------- | ------------------------------ | ------ | ------------------ |
| position       | ControlAnchor, ControlPosition |        | 控件停靠位置       |
| containerClass | String                         |        | 容器 div 的 CSS 类 |

## 示例

### 在右上角加入比例尺控件

#### 代码

```html
<template>
  <kaland-map
    class="map"
    :center="{x: 116.404, y: 39.915}"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
    <km-scale position="top-right"></km-scale>
  </kaland-map>
</template>
```

#### 预览

<doc-preview>
  <kaland-map
    class="map"
    :center="{x: 116.404, y: 39.915}"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
    <km-scale
      position="top-right"
    ></km-scale>
  </kaland-map>
</doc-preview>
