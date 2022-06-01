# 自定义控件

`KmControl` 组件允许开发者自由定制控件。

## 属性

| 属性名  | 类型           | 默认值 | 描述           |
| ------- | -------------- | ------ | -------------- |
| options | ControlOptions |        | 控件的配置选项 |

## 示例

### 插入自定义控件

#### 代码

```html
<template>
  <kaland-map
    class="map"
    :center="{x: 116.404, y: 39.915}"
    :zoom="zoom"
    :scroll-wheel-zoom="true"
  >
    <km-control :options="options">
      <button @click="addZoom(19)">缩放至最大</button>
      <button @click="addZoom(10)">还原</button>
      <button @click="addZoom(3)">缩放至最小</button>
    </km-control>
  </kaland-map>
</template>

<script>
  export default {
    data() {
      return {
        zoom: 10,
        options: {
          position: "top-left",
        },
      };
    },
    methods: {
      addZoom(level) {
        this.zoom = level;
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
    :zoom="zoom"
    :scroll-wheel-zoom="true"
  >
    <km-control :options="options">
      <md-button class="md-raised" @click="addZoom(19)">缩放至最大</md-button>
      <md-button class="md-raised" @click="addZoom(10)">还原</md-button>
      <md-button class="md-raised" @click="addZoom(3)">缩放至最小</md-button>
    </km-control>
  </kaland-map>
</doc-preview>

<script>


export default {
  data () {
    return {
      zoom: 10,
      options: {
        position: "top-left",
      },
    }
  },
  methods: {
    addZoom (level) {
      this.zoom = level
    }
  }
}
</script>
