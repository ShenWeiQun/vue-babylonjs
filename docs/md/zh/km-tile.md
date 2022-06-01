# 瓦片图层

`KmTile`

## 属性

| 属性名       | 类型      | 默认值 | 描述       |
| ------------ | --------- | ------ | ---------- |
| layerOptions | BaseLayer |        | 图层的属性 |

## 示例

### openstreetmap 开源地图

#### 代码

```html
<template>
  <kaland-map
    class="map"
    :center="{x: 116.332782, y: 40.007978}"
    :zoom="16"
  >
    <km-tile :layer-options="layerOptions"> </km-tile>
  </kaland-map>
</template>

<script>
  export default {
    data() {
      return {
        layerOptions: {
          type: "TileLayer",
          id: "'masked'",
          options: {
            urlTemplate: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            subdomains: ["a", "b", "c"],
            zIndex: 1,
            opacity: 1,
          },
        },
      };
    },
  };
</script>
```

#### 预览

<doc-preview>
  <kaland-map
    class="map"
    :center="{x: 116.332782, y: 40.007978}"
    :zoom="16"
  >
    <km-tile :layer-options="layerOptions"> </km-tile>
  </kaland-map>
</doc-preview>

<script>
  export default {
    data() {
      return {
        layerOptions: {
          type: "TileLayer",
          id: "'masked'",
          options: {
            urlTemplate: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            subdomains: ["a", "b", "c"],
            zIndex: 1,
            opacity: 1,
          },
        },
      };
    },
  };
</script>
