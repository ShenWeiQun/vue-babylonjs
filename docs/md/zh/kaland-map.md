# 地图容器

`KalandMap` 地图容器，用于挂载地图核心类和一个地图实例。是所有地图组件的根组件。\
地图容器的实质是一个空的 DOM 节点，它可以用于挂载 `KmView` 组件或其它 DOM 节点或组件。如果你需要二次开发或手动控制其子组件，可以使用在 `ready` 事件中使用返回的 `map` 实例进行手动控制。

## 实例属性

| 属性名            | 类型      | 默认值                | 描述                                              |
| ----------------- | --------- | --------------------- | ------------------------------------------------- |
| baseLayer         | BaseLayer |                       | 底图图层对象                                      |
| center            | Point     |                       | 可以使用对象如 {x: 116.404, y: 39.915} 表示经纬度 |
| zoom              | Number    |                       | 缩放等级                                          |
| min-zoom          | Number    |                       | 最小缩放级别                                      |
| max-zoom          | Number    |                       | 最大缩放级别                                      |
| dragging          | Boolean   | true                  | 允许拖拽                                          |
| scroll-wheel-zoom | Boolean   | false                 | 允许鼠标滚轮缩放                                  |
| double-click-zoom | Boolean   | true                  | 允许双击缩放                                      |
| mapType           | String    | 2D                    | 地图类型（2D,25D,3D）                             |
| pitch             | Number    | 0                     | 视角倾斜角度                                      |
| bearing           | Number    | 0                     | 视角旋转角度                                      |
| dragPitch         | Boolean   | true                  | 是否开启地图倾斜                                  |
| dragRotate        | Boolean   | false(2D,25D)true(3D) | 是否开启地图旋转                                  |

## 事件

- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:spatialreferencechange" target="_blank" title="spatialreferencechange">spatialreferencechange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:baselayerchangestart" target="_blank" title="baselayerchangestart">baselayerchangestart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:baselayerchangeend" target="_blank" title="baselayerchangeend">baselayerchangeend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:setbaselayer" target="_blank" title="setbaselayer">setbaselayer</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:baselayerload" target="_blank" title="baselayerload">baselayerload</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:baselayerremove" target="_blank" title="baselayerremove">baselayerremove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:addlayer" target="_blank" title="addlayer">addlayer</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:removelayer" target="_blank" title="removelayer">removelayer</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:resize" target="_blank" title="resize">resize</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:movestart" target="_blank" title="movestart">movestart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:moving" target="_blank" title="moving">moving</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:moveend" target="_blank" title="moveend">moveend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:dragrotatestart" target="_blank" title="dragrotatestart">dragrotatestart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:dragrotating" target="_blank" title="dragrotating">dragrotating</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:dragrotateend" target="_blank" title="dragrotateend">dragrotateend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:animating" target="_blank" title="animating">animating</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:animateinterrupted" target="_blank" title="animateinterrupted">animateinterrupted</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:animateend" target="_blank" title="animateend">animateend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:animatestart" target="_blank" title="animatestart">animatestart</a>
- ~~<a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:pitch" target="_blank" title="pitch">pitch</a>~~
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:pitchend" target="_blank" title="pitchend">pitchend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:mousedown" target="_blank" title="mousedown">mousedown</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:mouseup" target="_blank" title="mouseup">mouseup</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:mouseover" target="_blank" title="mouseover">mouseover</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:mouseout" target="_blank" title="mouseout">mouseout</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:mouseenter" target="_blank" title="mouseenter">mouseenter</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:mouseleave" target="_blank" title="mouseleave">mouseleave</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:mousemove" target="_blank" title="mousemove">mousemove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:click" target="_blank" title="click">click</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:dblclick" target="_blank" title="dblclick">dblclick</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:contextmenu" target="_blank" title="contextmenu">contextmenu</a>
- ~~<a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:keypress" target="_blank" title="keypress">keypress</a>~~
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:touchstart" target="_blank" title="touchstart">touchstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:touchmove" target="_blank" title="touchmove">touchmove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:touchend" target="_blank" title="touchend">touchend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:fullscreenstart" target="_blank" title="fullscreenstart">fullscreenstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:fullscreenend" target="_blank" title="fullscreenend">fullscreenend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:cancelfullscreen" target="_blank" title="cancelfullscreen">cancelfullscreen</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:viewchange" target="_blank" title="viewchange">viewchange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:zoomstart" target="_blank" title="zoomstart">zoomstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:zooming" target="_blank" title="zooming">zooming</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:zoomend" target="_blank" title="zoomend">zoomend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:touchactstart" target="_blank" title="touchactstart">touchactstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:touchacting" target="_blank" title="touchacting">touchacting</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Map.html#event:touchactend" target="_blank" title="touchactend">touchactend</a>

## 示例

### 设置经纬度和缩放等级

#### 代码

```html
<template>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
  </kaland-map>
</template>
```

#### 预览

<doc-preview>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
  </kaland-map>
</doc-preview>

### 开启滚轮缩放

#### 代码

```html
<template>
  <kaland-map
    class="map"
    :center="{x: 116.404, y: 39.915}"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
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
  </kaland-map>
</doc-preview>

### 双向绑定

#### 代码

```html
<template>
  <div>
    <input v-model.number="center.x" />
    <input v-model.number="center.y" />
    <input v-model.number="zoom" />
    <kaland-map
      class="map"
      :scroll-wheel-zoom="true"
      :center="center"
      :zoom="zoom"
      @moving="syncCenterAndZoom"
      @moveend="syncCenterAndZoom"
      @zoomend="syncCenterAndZoom"
    >
    </kaland-map>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        center: {
          x: 116.404,
          y: 39.915,
        },
        zoom: 15,
      };
    },
    methods: {
      syncCenterAndZoom(e) {
        const { x, y } = e.target.getCenter();
        this.center.x = x;
        this.center.y = y;
        this.zoom = e.target.getZoom();
      },
    },
  };
</script>
```

#### 预览

<doc-preview>
  <kaland-map
      class="map"
      :scroll-wheel-zoom="true"
      :center="center"
      :zoom="zoom"
      @moving="syncCenterAndZoom"
      @moveend="syncCenterAndZoom"
      @zoomend="syncCenterAndZoom">
  </kaland-map>
  
  <form novalidate >
    <md-input-container>
      <label>经度</label>
      <md-input type="number" v-model.number="center.x"></md-input>
    </md-input-container>
    <md-input-container>
      <label>纬度</label>
      <md-input type="number" v-model.number="center.y"></md-input>
    </md-input-container>
    <md-input-container>
      <label>缩放</label>
      <md-input type="number" v-model.number="zoom"></md-input>
    </md-input-container>
  </form>
</doc-preview>

<script>
export default {
  data () {
    return {
      center: {
        x: 116.404,
        y: 39.915
      },
      zoom: 15,
    }
  },
  methods: {
    syncCenterAndZoom (e) {
      const {x, y} = e.target.getCenter()
      this.center.x = x
      this.center.y = y
      this.zoom = e.target.getZoom()
    }
  }
}
</script>
