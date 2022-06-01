# 折线

`KmPolyline`

## 属性

| 属性名     | 类型         | 默认值 | 描述             |
| ---------- | ------------ | ------ | ---------------- |
| path       | Array[Point] | []     | 构成折线的点     |
| editing    | Boolean      | false  | 是否启用线编辑   |
| clicking   | Boolean      | true   | 是否响应点击事件 |
| symbol     | LineSymbol   |        | 线段的式样       |
| editSymbol | Object       |        | 编辑时线条的式样 |
| zIndex       | Number          | 0      | 设置覆盖物的 zIndex |

## 事件

- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:mousedown" target="_blank" title="mousedown">mousedown</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:mouseup" target="_blank" title="mouseup">mouseup</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:mousemove" target="_blank" title="mousemove">mousemove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:click" target="_blank" title="click">click</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:dblclick" target="_blank" title="dblclick">dblclick</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:contextmenu" target="_blank" title="contextmenu">contextmenu</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:touchstart" target="_blank" title="touchstart">touchstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:touchmove" target="_blank" title="touchmove">touchmove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:touchend" target="_blank" title="touchend">touchend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:mouseenter" target="_blank" title="mouseenter">mouseenter</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:mouseover" target="_blank" title="mouseover">mouseover</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:mouseout" target="_blank" title="mouseout">mouseout</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:idchange" target="_blank" title="idchange">idchange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:propertieschange" target="_blank" title="propertieschange">propertieschange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:show" target="_blank" title="show">show</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:hide" target="_blank" title="hide">hide</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:zindexchange" target="_blank" title="zindexchange">zindexchange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:removestart" target="_blank" title="removestart">removestart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:removeend" target="_blank" title="removeend">removeend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:remove" target="_blank" title="remove">remove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:shapechange" target="_blank" title="shapechange">shapechange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:positionchange" target="_blank" title="positionchange">positionchange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:symbolchange" target="_blank" title="symbolchange">symbolchange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:editstart" target="_blank" title="editstart">editstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:editend" target="_blank" title="editend">editend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:redoedit" target="_blank" title="redoedit">redoedit</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:undoedit" target="_blank" title="undoedit">undoedit</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:canceledit" target="_blank" title="canceledit">canceledit</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:dragstart" target="_blank" title="dragstart">dragstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:dragging" target="_blank" title="dragging">dragging</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:dragend" target="_blank" title="dragend">dragend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:animateend" target="_blank" title="animateend">animateend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:animating" target="_blank" title="animating">animating</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:animatestart" target="_blank" title="animatestart">animatestart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:handledragstart" target="_blank" title="handledragstart">handledragstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:handledragging" target="_blank" title="handledragging">handledragging</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:handledragend" target="_blank" title="handledragend">handledragend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:editrecord" target="_blank" title="editrecord">editrecord</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/LineString.html#event:add" target="_blank" title="add">add</a>

## 示例

### 在地图中添加可编辑的折线

#### 代码

```html
<template>
  <kaland-map
    class="map"
    :center="{x: 116.404, y: 39.915}"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
    <km-polyline
      :path="polylinePath"
      :editing="true"
      :symbol="symbol"
      @editrecord="updatePolylinePath"
    ></km-polyline>
  </kaland-map>
</template>

<script>
  export default {
    data() {
      return {
        polylinePath: [
          { x: 116.404, y: 39.915 },
          { x: 116.405, y: 39.92 },
          { x: 116.423493, y: 39.907445 },
        ],
        symbol: {
          lineColor: "#1bbc9b",
          lineWidth: 3,
        },
      };
    },
    methods: {
      updatePolylinePath(e) {
        this.polylinePath = e.target.getCoordinates();
      },
      addPolylinePoint() {
        this.polylinePath.push({ x: 116.404, y: 39.915 });
      },
    },
  };
</script>
```

#### 预览

<doc-preview>
  <kaland-map
    class="map"
    :center="{x: 116.404, y: 39.915}"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
    <km-polyline
      :path="polylinePath"
      :editing="true"
      :symbol="symbol"
      @editrecord="updatePolylinePath"
    ></km-polyline>
  </kaland-map>
  <form novalidate >
    <md-layout md-gutter v-for="(point, index) in polylinePath" :key="index">
      <md-layout>
        <span>{{`坐标-${index + 1}`}}</span>
      </md-layout>
      <md-layout>
        <md-input-container>
        <label>经度</label>
        <md-input type="number" v-model.number="point.x"></md-input>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
        <label>纬度</label>
        <md-input type="number" v-model.number="point.y"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>
  </form>
</doc-preview>

<script>
export default {
  data () {
    return {
      polylinePath: [
        {x: 116.404, y: 39.915},
        {x: 116.405, y: 39.920},
        {x: 116.423493, y: 39.907445}
      ],
      symbol: {
        lineColor: "#1bbc9b",
        lineWidth: 3,
      },
    }
  },
  methods: {
    updatePolylinePath (e) {
      this.polylinePath = e.target.getCoordinates()
    },
    addPolylinePoint () {
      this.polylinePath.push({x: 116.404, y: 39.915})
    }
  }
}
</script>
