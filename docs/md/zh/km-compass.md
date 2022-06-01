# 指南针

`KmCompass` 

## 属性

| 属性名         | 类型                           | 默认值 | 描述               |
| -------------- | ------------------------------ | ------ | ------------------ |
| position       | top, right,bottom,left        |        | 控件停靠位置       |
| compassStyle | Object                         |        | 指南针图片的样式设置 |
| img   | String | |指南针图片

## 示例

#### 代码

```html
<template>
  <kaland-map
    class="map"
    :center="{x: 116.404, y: 39.915}"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
    <km-compass position="{top:10,right:10}" img="docs/compass.png"></km-compass>
  </kaland-map>
</template>
```

#### 预览

