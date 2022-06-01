# 绘制控件

`km-draw-tool`

## 属性

| 属性名 | 类型    | 默认值      | 描述             |
| ------ | ------- | ----------- | ---------------- |
| enable | Boolean | false       | 是否开启绘制功能 |
| shape  | SHAPE   | SHAPE.POINT | 绘制的式样       |
| clear  | Boolean | false       | 是否清除测量结果 |

## 事件

- <a :href='global.maptalksApi + "DrawTool.html#event:drawvertex"' target="_blank" title="drawvertex">drawvertex</a>
- <a :href='global.maptalksApi + "DrawTool.html#event:drawstart"' target="_blank" title="drawstart">drawstart</a>
- <a :href='global.maptalksApi + "DrawTool.html#event:mousemove"' target="_blank" title="mousemove">mousemove</a>
- <a :href='global.maptalksApi + "DrawTool.html#event:drawend"' target="_blank" title="drawend">drawend</a>
- <a :href='global.maptalksApi + "DrawTool.html#event:add"' target="_blank" title="add">add</a>
- <a :href='global.maptalksApi + "DrawTool.html#event:enable"' target="_blank" title="enable">enable</a>
- <a :href='global.maptalksApi + "DrawTool.html#event:disable"' target="_blank" title="disable">disable</a>
- <a :href='global.maptalksApi + "DrawTool.html#event:remove"' target="_blank" title="remove">remove</a>

## 示例

### 在地图上加入绘制组件

#### 代码


#### 预览

<doc-preview>
  <kaland-map
    class="map"
    :center="{x: 116.404, y: 39.915}"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
    <km-draw-tool
      :shape="shape"
      :clear.sync="clear"
      :enable="enable"
    >
    </km-draw-tool>
  </kaland-map>
</doc-preview>


