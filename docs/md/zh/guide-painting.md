# 图形绘制

## 说明

由于 MVVM 数据驱动视图的特性，地图中的图形绘制不再需要使用第三方工具库来实现。

## 示例

### 绘制折线

#### 代码

```html
<kaland-map
  class="map"
  :center="{x: 116.404, y: 39.915}"
  :zoom="14"
  @mousemove="syncPolyline"
  :double-click-zoom="false"
  :scroll-wheel-zoom="true"
  @click="paintPolyline"
  @dblclick="newPolyline"
>
  <km-control>
    <button @click="toggle('polyline')">
      {{ polyline.editing ? '停止绘制' : '开始绘制' }}
    </button>
  </km-control>
  <km-polyline
    :path="path"
    v-for="(path,index) of polyline.paths"
    :key="index"
    v-if="path.length > 0"
  ></km-polyline>
</kaland-map>

<script>
  export default {
    data() {
      return {
        polyline: {
          editing: false,
          paths: [],
        },
      };
    },
    methods: {
      toggle(name) {
        this[name].editing = !this[name].editing;
      },
      syncPolyline(e) {
        if (!this.polyline.editing) {
          return;
        }
        const { paths } = this.polyline;
        if (!paths.length) {
          return;
        }
        const path = paths[paths.length - 1];
        if (!path.length) {
          return;
        }
        if (path.length === 1) {
          path.push(e.coordinate);
        }
        this.$set(path, path.length - 1, e.coordinate);
      },
      newPolyline(e) {
        if (!this.polyline.editing) {
          return;
        }
        const { paths } = this.polyline;
        if (!paths.length) {
          paths.push([]);
        }
        const path = paths[paths.length - 1];
        path.pop();
        if (path.length) {
          paths.push([]);
        }
      },
      paintPolyline(e) {
        if (!this.polyline.editing) {
          return;
        }
        const { paths } = this.polyline;
        !paths.length && paths.push([]);
        paths[paths.length - 1].push(e.coordinate);
      },
    },
  };
</script>
```

#### 预览

<kaland-map class="map" :center="{x: 116.404, y: 39.915}" :zoom="14" @mousemove="syncPolyline"
:double-click-zoom="false" :scroll-wheel-zoom="true" @click="paintPolyline" @dblclick="newPolyline">
<km-control>
<md-button class="md-raised md-primary" @click="toggle('polyline')">{{ polyline.editing ? '停止绘制' : '开始绘制' }}</md-button>
</km-control>
<km-polyline v-if="path.length > 0" :path="path" v-for="(path,index) of polyline.paths" :key="index"></km-polyline>
</kaland-map>

<script>
export default {
  data () {
    return {
      polyline: {
        editing: false,
        paths: []
      }
    }
  },
  methods: {
    toggle(name) {
      this[name].editing = !this[name].editing
    },
    syncPolyline(e) {
      if (!this.polyline.editing) {
        return
      }
      const { paths } = this.polyline
      if (!paths.length) {
        return
      }
      const path = paths[paths.length - 1]
      if (!path.length) {
        return
      }
      if (path.length === 1) {
        path.push(e.coordinate)
      }
      this.$set(path, path.length - 1, e.coordinate)
    },
    newPolyline(e) {
      if (!this.polyline.editing) {
        return
      }
      const { paths } = this.polyline
      if (!paths.length) {
        paths.push([])
      }
      const path = paths[paths.length - 1]
      path.pop()
      if (path.length) {
        paths.push([])
      }
    },
    paintPolyline(e) {
      if (!this.polyline.editing) {
        return
      }
      const { paths } = this.polyline
      !paths.length && paths.push([])
      paths[paths.length - 1].push(e.coordinate)
    }
  }
}
</script>
