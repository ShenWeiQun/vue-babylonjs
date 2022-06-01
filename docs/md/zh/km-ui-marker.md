# UIMarker

`KmUIMarker` UIMarker 使用 slot 模式渲染子节点，可以实现 gif 标签。

## 属性

| 属性名   | 类型    | 默认值 | 描述                               |
| -------- | ------- | ------ | ---------------------------------- |
| show     | Boolean | false  | UIMarker 是否显示                  |
| position | Point   |        | UIMarker 所处坐标                  |
| offset   | Size    |        | UIMarker 位置偏移值。              |
| content  | String  |        | UIMarker 内容文字                  |
| autoPan  | Boolean | true   | 是否开启信息窗口打开时地图自动移动 |
| image    | Object  |        | UIMarker 显示的图像信息            |

## 事件

- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:mousedown" target="_blank" title="mousedown">mousedown</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:mouseup" target="_blank" title="mouseup">mouseup</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:mouseenter" target="_blank" title="mouseenter">mouseenter</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:mouseover" target="_blank" title="mouseover">mouseover</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:mouseout" target="_blank" title="mouseout">mouseout</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:mousemove" target="_blank" title="mousemove">mousemove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:click" target="_blank" title="click">click</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:dblclick" target="_blank" title="dblclick">dblclick</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:contextmenu" target="_blank" title="contextmenu">contextmenu</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:keypress" target="_blank" title="keypress">keypress</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:touchstart" target="_blank" title="touchstart">touchstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:touchmove" target="_blank" title="touchmove">touchmove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:touchend" target="_blank" title="touchend">touchend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:positionchange" target="_blank" title="positionchange">positionchange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:contentchange" target="_blank" title="contentchange">contentchange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:dragstart" target="_blank" title="dragstart">dragstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:dragging" target="_blank" title="dragging">dragging</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:dragend" target="_blank" title="dragend">dragend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:add" target="_blank" title="add">add</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:showstart" target="_blank" title="showstart">showstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:showend" target="_blank" title="showend">showend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:hide" target="_blank" title="hide">hide</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.UIMarker.html#event:remove" target="_blank" title="remove">remove</a>

## 示例

### 在地图中添加一个 gif 标签

#### 代码

```html
<template>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-ui-marker :position="{x: 116.404, y: 39.915}" :image="image">
    </km-ui-marker>
  </kaland-map>
</template>

<script>
  export default {
    data() {
      return {
        image: {
          src: "./xin.gif",
          width: 50,
          height: 50,
        },
      };
    },
  };
</script>
```

#### 预览

<doc-preview>
  <template>
    <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
      <km-ui-marker :position="{x: 116.404, y: 39.915}" :image="image">
      </km-ui-marker>
    </kaland-map>
  </template>
</doc-preview>

<script>
import xin from "docs/assets/images/xin.gif"
export default {
  data() {
    return {
      image: {
        src: xin,
        width: 50,
        height: 50,
      },
    };
  },
}
</script>
