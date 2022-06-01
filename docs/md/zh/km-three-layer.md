# three js 图层

`km-three-layer`

## 示例

### 在地图上加入 three js 图层组件

#### 代码

```html
<template>
  <kaland-map
    class="map"
    map-type="3D"
    :center="{x: 114.242147, y: 30.573939}"
    :pitch="60"
    :zoom="16"
    :scroll-wheel-zoom="true"
  >
    <km-three-layer> </km-three-layer>
  </kaland-map>
</template>
```

#### 预览

<doc-preview>
  <kaland-map
    class="map"
    map-type="3D"
    :center="{x: 114.242147, y: 30.573939}"
    :pitch="60"
    :zoom="16"
    :scroll-wheel-zoom="true"
  >
    <km-three-layer> </km-three-layer>
  </kaland-map>
</doc-preview>

