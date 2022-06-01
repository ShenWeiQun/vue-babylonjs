# 自定义折线

`km-custom-line-node` 自定义折线组件是一个对`km-polyline`组件的二次封装。

## 属性

| 属性名       | 类型    | 默认值 | 描述           |
| ------------ | ------- | ------ | -------------- |
| editing      | Boolean |        | 是否为编辑状态 |
| polylinePath | Array   |        | 线段的路径     |
| markerIndex  | Number  |        | 要选中的点     |
| markerSymbol | Object  |        | 选中的点的式样 |

## 示例

### 二次封装用法

#### 代码

##### 封装组件 KmCustomLineNode

```html
<template>
  <km-polyline
    :editSymbol="editSymbol"
    :editing="editing"
    :path="localPolylinePath"
    v-if="localPolylinePath.length > 0"
    @shapechange="updatePolylinePath"
  >
    <km-marker
      :visible="editing"
      :marker-symbol="markerIndex === index ? markerSymbol : commonMarkerSymbol"
      :position="path"
      v-for="(path, index) of localPolylinePath"
      :key="index"
    >
    </km-marker>
  </km-polyline>
</template>

<script>
  export default {
    props: {
      markerIndex: {
        type: Number,
      },
      editing: {
        type: Boolean,
        default: true,
      },
      polylinePath: {
        type: Array,
        default() {
          return [];
        },
      },
      markerSymbol: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    data() {
      return {
        commonMarkerSymbol: {},
        localPolylinePath: [],
        editSymbol: {
          vertexHandleSymbol: {
            markerType: "square",
            markerFill: "#fff",
            markerLineColor: "#000",
            markerLineWidth: 2,
            markerWidth: 20,
            markerHeight: 20,
            opacity: 0.0001,
          },
        },
      };
    },
    watch: {
      polylinePath: {
        handler(val) {
          this.localPolylinePath = val;
        },
        immediate: true,
      },
      markerSymbol: {
        handler(val) {
          const newVertexHandleSymbol = { ...val };
          newVertexHandleSymbol.opacity = 0.3;
          const markerSymbolT = { ...val };
          markerSymbolT.markerFill = "#fff";
          this.editSymbol.newVertexHandleSymbol = newVertexHandleSymbol;
          this.commonMarkerSymbol = markerSymbolT;
        },
        immediate: true,
      },
    },
    methods: {
      updatePolylinePath(e) {
        if (this.editing) {
          this.localPolylinePath = e.target.getCoordinates();
          this.$emit("update-polyline-path", this.localPolylinePath);
        }
      },
    },
  };
</script>
```

##### 调用 KmCustomLineNode 组件

```html
<template>
  <kaland-map :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-view class="map"></km-view>
    <km-custom-line-node
      :marker-index="1"
      :editing="editing"
      :marker-symbol="markerSymbol"
      :polyline-path="polylinePath"
      @update-polyline-path="updatePolylinePath"
    >
    </km-custom-line-node>
  </kaland-map>
</template>

<script>
  export default {
    data() {
      return {
        editing: true,
        polylinePath: [
          { x: 116.404, y: 39.915 },
          { x: 116.405, y: 39.92 },
          { x: 116.423493, y: 39.907445 },
        ],
        markerSymbol: {
          markerType: "square",
          markerFill: "#000",
          markerLineColor: "#000",
          markerLineWidth: 2,
          markerWidth: 20,
          markerHeight: 20,
          opacity: 1,
        },
      };
    },
    components: {},
    methods: {
      updatePolylinePath(localPolylinePath) {
        console.log(localPolylinePath);
      },
    },
  };
</script>
```

#### 预览

<doc-preview>
  <kaland-map :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-view class="map"></km-view>
    <km-custom-line-node
      :marker-index="1"
      :editing="editing"
      :marker-symbol="markerSymbol"
      :polyline-path="polylinePath"
      @update-polyline-path="updatePolylinePath"
    >
    </km-custom-line-node>
  </kaland-map>
</doc-preview>

<script>
  export default {
    data() {
      return {
        editing: true,
        polylinePath: [
          { x: 116.404, y: 39.915 },
          { x: 116.405, y: 39.92 },
          { x: 116.423493, y: 39.907445 },
        ],
        markerSymbol: {
          markerType: "square",
          markerFill: "#000",
          markerLineColor: "#000",
          markerLineWidth: 2,
          markerWidth: 20,
          markerHeight: 20,
          opacity: 1,
        },
      };
    },
    components: {},
    methods: {
      updatePolylinePath(localPolylinePath) {
        console.log(localPolylinePath);
      },
    },
  };
</script>
