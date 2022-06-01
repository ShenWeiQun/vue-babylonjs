# 自定义覆盖物

`KmOverlay` 自定义覆盖物组件是一个高度订制化的组件。推荐的使用方法是将重绘逻辑相同的 `KmOverlay` 进行二次封装。

## 属性

| 属性名   | 类型  | 默认值 | 描述               |
| -------- | ----- | ------ | ------------------ |
| position | Point |        | 信息窗体所指坐标   |
| offset   | Size  |        | 信息窗位置偏移值。 |

## 示例

### 单独使用

#### 代码

```html
<kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
  <km-overlay
    :position="{x: 116.404, y: 39.915}"
    :class="{sample: true, active}"
    :offset="{width: 50, height: 0}"
    @mouseover.native="active = true"
    @mouseleave.native="active = false"
  >
    <div>我爱北京天安门</div>
  </km-overlay>
</kaland-map>

<script>
  export default {
    data() {
      return {
        active: false,
      };
    },
    methods: {},
  };
</script>

<style>
  .sample {
    width: 120px;
    height: 40px;
    line-height: 40px;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    box-shadow: 0 0 5px #000;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: absolute;
  }
  .sample.active {
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
  }
</style>
```

#### 预览

<doc-preview>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-overlay
      :position="{x: 116.404, y: 39.915}"
      :class="{sample: true, active}"
      :offset="{width: 50, height: 0}"
      @mouseover.native="active = true"
      @mouseleave.native="active = false"
    >
      <div>我爱北京天安门</div>
    </km-overlay>
  </kaland-map>
</doc-preview>

### 二次封装用法

#### 代码

##### 封装组件 MyOverlay

```html
<template>
  <km-overlay :position="position" :class="{sample: true, active}">
    <div v-text="text" @click="handleClick"></div>
  </km-overlay>
</template>

<script>
  export default {
    props: ["text", "position", "active"],
    methods: {
      handleClick() {
        global.alert("Well done.");
      },
    },
  };
</script>

<style>
  .sample {
    width: 120px;
    height: 40px;
    line-height: 40px;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    box-shadow: 0 0 5px #000;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: absolute;
  }
  .sample.active {
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
  }
</style>
```

##### 调用 MyOverlay 组件

```html
<template>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
    <my-overlay
      :position="{x: 116.404, y: 39.915}"
      text="点击我"
      :active="active"
      @mouseover.native="active = true"
      @mouseleave.native="active = false"
    >
    </my-overlay>
  </baidu-map>
</template>

<script>
  import MyOverlay from '../../components/MyOverlay.vue'
  export default {
    data () {
      return {
        active: false
      }
    }
    components: {
      MyOverlay
    }
  }
</script>
```

#### 预览

<doc-preview>
  <kaland-map :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-view class="map"></km-view>
    <my-overlay
      :position="{x: position.x, y: position.y}"
      text="点击我"
      :active="active"
      @mouseover.native="active = true"
      @mouseleave.native="active = false">
    </my-overlay>
    <form novalidate >
      <md-input-container>
        <label>覆盖物经度</label>
        <md-input v-model="position.x"></md-input>
      </md-input-container>
      <md-input-container>
        <label>覆盖物纬度</label>
        <md-input v-model="position.y"></md-input>
      </md-input-container>
    </form>
  </kaland-map>
</doc-preview>

<script>
import MyOverlay from 'docs/components/MyOverlay.vue'
export default {
  data () {
    return {
      active: false,
      position: {
        x: 116.404,
        y: 39.915
      }
    }
  },
  components: {
    MyOverlay
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.sample
  width 120px
  height 40px
  background rgba(0, 0, 0, .5)
  overflow hidden
  color white
  text-align center
  padding 10px
  position absolute
  &.active
    background rgba(0, 0, 0, .75)
    color white
</style>
