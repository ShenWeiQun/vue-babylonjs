# 点

`KmMarker`

## 属性

| 属性名       | 类型            | 默认值 | 描述                |
| ------------ | --------------- | ------ | ------------------- |
| position     | Point           |        | 标注的位置          |
| markerSymbol | MarkerSymbol    |        | icon 式样           |
| visible      | Boolean         | true   | 是否显示            |
| dragging     | Boolean         | false  | 是否启用拖拽        |
| clicking     | Boolean         | true   | 是否响应点击事件    |
| textSymbol   | TextSymbol      |        | label 式样          |
| animation    | AnimationObject |        | 动画效果            |
| zIndex       | Number          | 0      | 设置覆盖物的 zIndex |

## 事件

- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:mousedown" target="_blank" title="mousedown">mousedown</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:mouseup" target="_blank" title="mouseup">mouseup</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:mousemove" target="_blank" title="mousemove">mousemove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:click" target="_blank" title="click">click</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:dblclick" target="_blank" title="dblclick">dblclick</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:contextmenu" target="_blank" title="contextmenu">contextmenu</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:touchstart" target="_blank" title="touchstart">touchstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:touchmove" target="_blank" title="touchmove">touchmove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:touchend" target="_blank" title="touchend">touchend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:mouseenter" target="_blank" title="mouseenter">mouseenter</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:mouseover" target="_blank" title="mouseover">mouseover</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:mouseout" target="_blank" title="mouseout">mouseout</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:idchange" target="_blank" title="idchange">idchange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:propertieschange" target="_blank" title="propertieschange">propertieschange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:show" target="_blank" title="show">show</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:hide" target="_blank" title="hide">hide</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:zindexchange" target="_blank" title="zindexchange">zindexchange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:removestart" target="_blank" title="removestart">removestart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:removeend" target="_blank" title="removeend">removeend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:remove" target="_blank" title="remove">remove</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:shapechange" target="_blank" title="shapechange">shapechange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:positionchange" target="_blank" title="positionchange">positionchange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:symbolchange" target="_blank" title="symbolchange">symbolchange</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:editstart" target="_blank" title="editstart">editstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:editend" target="_blank" title="editend">editend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:redoedit" target="_blank" title="redoedit">redoedit</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:undoedit" target="_blank" title="undoedit">undoedit</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:canceledit" target="_blank" title="canceledit">canceledit</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:dragstart" target="_blank" title="dragstart">dragstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:dragging" target="_blank" title="dragging">dragging</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:dragend" target="_blank" title="dragend">dragend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:animateend" target="_blank" title="animateend">animateend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:animating" target="_blank" title="animating">animating</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:animatestart" target="_blank" title="animatestart">animatestart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:handledragstart" target="_blank" title="handledragstart">handledragstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:handledragging" target="_blank" title="handledragging">handledragging</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:handledragend" target="_blank" title="handledragend">handledragend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:editrecord" target="_blank" title="editrecord">editrecord</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/Marker.html#event:add" target="_blank" title="add">add</a>

## 示例

### 在地图中心添加可拖动的跳跃点标记

#### 代码

```html
<template>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-marker
      :position="{x: 116.404, y: 39.915}"
      :dragging="true"
      :animation="animation"
      :marker-symbol="{'markerDy': 0,}"
      :text-symbol="textSymbol"
    />
  </kaland-map>
</template>

<script>
  export default {
    data() {
      return {
        textSymbol: {
          textFaceName: "sans-serif",
          textName: "我爱北京天安门",
          textSize: 14,
          textDy: 24,
        },
        animation: {
          styles: {
            symbol: {
              markerDy: -10,
            },
          },
          options: {
            duration: 500,
            repeat: true,
          },
          step: (frame) => {
            if (frame.state.playState === "finished") {
              console.log("animation finished");
            }
          },
        },
      };
    },
  };
</script>
```

#### 预览

<doc-preview>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-marker
      :position="{x: 116.404, y: 39.915}"
      :dragging="true"
      :animation="animation"
      :marker-symbol="{'markerDy': 0,}"
      :text-symbol="textSymbol"
    />
  </kaland-map>
</doc-preview>

### 添加一个自定义图标的点

#### 代码

```html
<template>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-marker :position="markerPoint" :marker-symbol="markerSymbol" />
  </kaland-map>
</template>

<script>
  export default {
    data() {
      return {
        markerSymbol: {
          markerFile: favicon,
        },
      };
    },
  };
</script>
```

#### 预览

<doc-preview>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-marker :position="markerPoint" :marker-symbol="markerSymbol" />
  </kaland-map>
</doc-preview>
</template>

### 点击 Marker 弹出 InfoWindow

#### 代码

```html
<template>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-marker :position="markerPoint" @click="infoWindowOpen">
      <km-info-window
        :show="show"
        @hide="infoWindowClose"
        @showend="infoWindowOpen"
        content="我爱北京天安门"
      />
    </km-marker>
  </kaland-map>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      };
    },
    methods: {
      infoWindowClose() {
        this.show = false;
      },
      infoWindowOpen() {
        this.show = true;
      },
    },
  };
</script>
```

#### 预览

<doc-preview>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-marker :position="markerPoint" @click="infoWindowOpen">
      <km-info-window
        :show="infoWindow.show"
        @hide="infoWindowClose"
        @showend="infoWindowOpen"
        content="我爱北京天安门"
      />
    </km-marker>
  </kaland-map>
</doc-preview>

<script>
import favicon from "docs/favicon.png"
export default {
  data () {
    return {
      infoWindow: {
        show: true
      },
      markerPoint: {
        x: 116.404,
        y: 39.915
      },
      markerSymbol: {
        markerFile: favicon,
      },
      textSymbol: {
        textFaceName: 'sans-serif',
        textName: '我爱北京天安门',
        textSize: 14,
        textDy: 24
      },
      animation: {
        styles: {
          symbol: {
            'markerDy': -10,
          }
        },
        options: {
          duration: 500,
          repeat: true,
        },
        step: (frame) => {
          if (frame.state.playState === 'finished') {
            console.log('animation finished');
          }
        }
      }
    }
  },
  methods: {
    infoWindowClose () {
      this.infoWindow.show = false
    },
    infoWindowOpen () {
      this.infoWindow.show = true
    }
  }
}
</script>
