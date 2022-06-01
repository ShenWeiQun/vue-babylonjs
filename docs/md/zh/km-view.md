# 地图视图

`KmView` 是用于渲染地图实例可视化区域的容器，通常会输出其它视图的组件结合使用。\
当 `KalandMap` 组件中没有挂载 `KmView` 组件时，地图实例将渲染在 `<kaland-map>` 节点上。\
当 `KalandMap` 挂载了 `KmView` 组件时，地图实例将渲染在 `<km-view>` 节点上。\
每个 `KalandMap` 组件应对应唯一一个 `KmView` 组件，如果声明了多个 `KmView` 组件，只有第一个能被正常渲染。
该组件主要用于控制布局。除了能够渲染地图视图以外，没有任何其它用途。

## 示例

### 使用 `KmView` 渲染一个地图实例

#### 代码

```html
<doc-preview>
  <kaland-map
    class="map"
    style="display: flex; flex-direction: column"
    :center="{x: 116.404, y: 39.915}"
    :zoom="15"
  >
    <p style="padding: 0 10px;">以下是使用 `km-view` 组件渲染的地图实例</p>
    <km-view style="width: 100%; height:100px; flex: 1"></km-view>
  </kaland-map>
</doc-preview>
```

#### 预览

<doc-preview>
  <kaland-map
    class="map"
    style="display: flex; flex-direction: column"
    :center="{x: 116.404, y: 39.915}"
    :zoom="15"
  >
    <p style="padding: 0 10px;">以下是使用 `km-view` 组件渲染的地图实例</p>
    <km-view style="width: 100%; height:100px; flex: 1"></km-view>
  </kaland-map>
</doc-preview>
