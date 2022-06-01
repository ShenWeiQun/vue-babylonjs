# 测面控件

`km-area-tool`


## 属性

| 属性名            | 类型     | 默认值 | 描述                           |
| ----------------- | -------- | ------ | ------------------------------ |
| enable            | Boolean  |        | 是否开启测面功能               |
| symbol            | Object   |        | 测量的线段式样                 |
| vertexSymbol      | Object   |        | 测量的线段转节点式样           |
| labelOptions      | Object   |        | 距离显示标签式样               |
| clearButtonSymbol | Array    |        | 清除按钮式样                   |
| language          | language |        | 距离工具的语言，zh-CN 或 en-US |


## 示例

### 在地图上加入测距组件

#### 代码

```html
<template>
  <kaland-map
    class="map"
    :center="{x: 116.404, y: 39.915}"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
    <km-area-tool :enable="true"> </km-area-tool>
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
    <km-area-tool :enable="true"> </km-area-tool>
  </kaland-map>
</doc-preview>
