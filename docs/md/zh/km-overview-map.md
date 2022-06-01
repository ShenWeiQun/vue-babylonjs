# 缩略图控件

`KmOverviewMap`

## 属性

| 属性名   | 类型                           | 默认值 | 描述               |
| -------- | ------------------------------ | ------ | ------------------ |
| position | ControlAnchor, ControlPosition |        | 控件停靠位置       |
| size     | Size                           |        | 缩略地图控件的大小 |

## 事件

- <a href="https://maptalks.org/maptalks.js/api/0.x/control.Overview.html#event:add" target="_blank" title="add">add</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/control.Overview.html#event:remove" target="_blank" title="remove">remove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/control.Overview.html#event:positionchange" target="_blank" title="positionchange">positionchange</a>

## 示例

### 在地图右下角加入缩略图控件

#### 代码

```html
<template>
  <kaland-map
    class="map"
    :center="{x: 116.404, y: 39.915}"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
    <km-overview-map position="bottom-right"></km-overview-map>
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
    <km-overview-map position="bottom-right"></km-overview-map>
  </kaland-map>
</doc-preview>
