# 信息窗体

`KmInfoWindow` 信息窗体使用 slot 模式渲染子节点。

## 属性

| 属性名       | 类型    | 默认值 | 描述                               |
| ------------ | ------- | ------ | ---------------------------------- |
| show         | Boolean | false  | 信息窗体是否开启                   |
| position     | Point   |        | 信息窗体所指坐标                   |
| width        | Number  | 300    | 信息窗宽度，单位像素。             |
| minHeight    | Number  | 120    | 信息窗最小高度，单位像素。         |
| offset       | Size    |        | 信息窗位置偏移值。                 |
| title        | String  |        | 信息窗标题文字                     |
| content      | String  |        | 信息窗内容文字                     |
| autoPan      | Boolean | true   | 是否开启信息窗口打开时地图自动移动 |
| closeOnClick | Boolean |        | 是否开启点击地图关闭信息窗口       |

## 事件

- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.InfoWindow.html#event:add" target="_blank" title="add">add</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.InfoWindow.html#event:showstart" target="_blank" title="showstart">showstart</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.InfoWindow.html#event:showend" target="_blank" title="showend">showend</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.InfoWindow.html#event:hide" target="_blank" title="hide">hide</a>
- <a href="https://maptalks.org/maptalks.js/api/0.x/ui.InfoWindow.html#event:remove" target="_blank" title="remove">remove</a>

## 示例

### 在地图中添加一个信息窗体

#### 代码

```html
<template>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-info-window
      :position="{x: 116.39168329620361, y: 39.91893334290634}"
      title="Info Window Title"
      :content="infoWindow.contents"
      :show="infoWindow.show"
      @hide="infoWindowClose"
      @showend="infoWindowOpen"
    >
    </km-info-window>
  </kaland-map>
</template>

<script>
  export default {
    data() {
      return {
        infoWindow: {
          show: true,
          contents:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      };
    },
    methods: {
      infoWindowClose(e) {
        this.infoWindow.show = false;
      },
      infoWindowOpen(e) {
        this.infoWindow.show = true;
      },
      clear() {
        this.infoWindow.contents = "";
      },
    },
  };
</script>
```

#### 预览

<doc-preview>
  <kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="15">
    <km-info-window
      :position="{x: 116.404, y: 39.915}"
      title="Info Window Title"
      :content="infoWindow.contents"
      :show="infoWindow.show"
      @hide="infoWindowClose"
      @showend="infoWindowOpen"
    >
    </km-info-window>
  </kaland-map>
  <form novalidate >
    <md-input-container>
      <label>开关</label>
      <md-switch v-model="infoWindow.show" class="md-primary"></md-switch>
    </md-input-container>
    <md-input-container>
      <label>内容</label>
      <md-textarea v-model="infoWindow.contents"></md-textarea>
    </md-input-container>
  </form>
</doc-preview>

<script>
export default {
  data () {
    return {
      infoWindow: {
        show: true,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    }
  },
  methods: {
    infoWindowClose (e) {
      this.infoWindow.show = false
    },
    infoWindowOpen (e) {
      this.infoWindow.show = true
    },
    clear () {
      this.infoWindow.contents = ''
    }
  }
}
</script>
