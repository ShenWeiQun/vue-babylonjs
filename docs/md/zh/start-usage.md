# 快速上手

## 使用

### 全局注册

全局注册将一次性引入地图组件库的所有组件。

```javascript
import Vue from "vue";
import KalandVueMap from "kaland-vue-map";

const baseLayer = {
  type: "TileLayer",
  id: "base",
  options: {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
  },
};

Vue.use(KalandVueMap, {
  baseLayer,
});
```

```html
<template>
  <kaland-map class="map" :center="{ x: 116.404, y: 39.915 }" :zoom="15">
  </kaland-map>
</template>

<style>
  .map {
    width: 100%;
    height: 300px;
  }
</style>
```

### 局部注册

如果有按需引入组件的需要，可以选择局部注册地图组件，这将减少工程打包后的容量尺寸。局部注册的 `KalandMap` 组件**必须**声明 `baseLayer` 属性。
所有的独立组件均存放在 `kaland-vue-map/components` 文件夹下，按需引用即可。
由于未编译的 ES 模块不能在大多数浏览器中直接运行，如果引入组件时发生运行时错误，请检查 webpack 的 loader 配置，确认 `include` 和 `exclude` 选项命中了组件库。

```html
<template>
  <kaland-map
    class="map"
    :baseLayer="baseLayer"
    :center="{ x: 116.404, y: 39.915 }"
    :zoom="15"
  >
  </kaland-map>
</template>

<script>
  import KalandMap from "kaland-vue-map/components/map/Map.vue";
  export default {
    components: {
      KalandMap,
    },
    data() {
      return {
        baseLayer: {
          type: "TileLayer",
          id: "base",
          options: {
            urlTemplate:
              "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
            subdomains: ["a", "b", "c", "d"],
          },
        },
      };
    },
  };
</script>

<style>
  .map {
    width: 100%;
    height: 300px;
  }
</style>
```

### CDN 全局注册

```html
<script>
  Vue.use(KalandVueMap.default, {
    baseLayer: {
      type: "TileLayer",
      id: "base",
      options: {
        urlTemplate:
          "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
      },
    },
  });
</script>
```

## 常见问题

- `KalandMap` 组件容器本身是一个空的块级元素，如果容器不定义高度，地图将渲染在一个高度为 0 不可见的容器内。
- 没有设置 `center` 和 `zoom` 属性的地图组件是不进行地图渲染的。

## Hello world!

```html
<template>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
  </kaland-map>
</template>
<style>
  .map {
    width: 100%;
    height: 400px;
  }
</style>
```

<doc-preview>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15" >
  </kaland-map>
</doc-preview>
