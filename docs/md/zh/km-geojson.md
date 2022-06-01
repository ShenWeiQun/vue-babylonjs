# Geojson 图层

`KmGeojson`

## 属性

| 属性名   | 类型                      | 默认值 | 描述           |
| -------- | ------------------------- | ------ | -------------- |
| geojsons | FeatureCollection,Feature |        | geojson 的属性 |

## 示例

### 加载 Geojson 数据，同时传入事件、式样、覆盖物属性设置

#### 代码

```html
<template>
  <kaland-map
    class="map"
    :center="{x: 101.0, y:  0}"
    :zoom="8"
    :double-click-zoom="false"
    :scroll-wheel-zoom="true"
  >
    <km-geojson :geojsons="collection"> </km-geojson>
  </kaland-map>
</template>

<script>
  export default {
    data() {
      return {
        collection: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              id: "1111",
              geometry: { type: "Point", coordinates: [102.0, 0.5] },
              properties: {
                prop0: "value0",
                events: {
                  //Feature 事件
                  click: {
                    xtype: "function",
                    params: ["event"],
                    handler: " console.log(event);",
                  },
                },
                options: {
                  draggable: true,
                }, //Feature选项
                symbol: {
                  markerWidth: 128,
                }, //Feature 式样
              },
            },
            {
              type: "Feature",
              id: "2222",
              geometry: {
                type: "LineString",
                coordinates: [
                  [102.0, 0.0],
                  [103.0, 1.0],
                  [104.0, 0.0],
                  [105.0, 1.0],
                ],
              },
              properties: {
                prop0: "value0",
                prop1: 0.0,
              },
            },
            {
              type: "Feature",
              id: "3333",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [100.0, 0.0],
                    [101.0, 0.0],
                    [101.0, 1.0],
                    [100.0, 1.0],
                    [100.0, 0.0],
                  ],
                ],
              },
              properties: {
                prop0: "value0",
                prop1: { this: "that" },
              },
            },
          ],
          properties: {
            symbol: {
              markerWidth: 30,
            }, //图层的 式样
            events: {
              click: {
                xtype: "function",
                params: ["event"],
                handler: ' console.log("图层统一监听,动态脚本");',
              },
            }, //图层的事件
          },
        },
      };
    },
  };
</script>
```

#### 预览

<doc-preview>
  <kaland-map class="map" :center="{x: 101.0, y:  0}" :zoom="8" :double-click-zoom="false"
    :scroll-wheel-zoom="true">
    <km-geojson :geojsons="collection">
    </km-geojson>
  </kaland-map>
</doc-preview>

<script>
  export default {
    data() {
      return {
        collection: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              id: "1111",
              geometry: { type: 'Point', coordinates: [102.0, 0.5] },
              properties: {
                prop0: 'value0',
                events: {//Feature 事件
                  click: {
                    xtype: 'function',
                    params: ['event'],
                    handler: ' console.log(event);'
                  }
                },
                options: {
                  "draggable": true
                }, //Feature选项
                symbol: {
                  'markerWidth': 128,
                },//Feature 式样 
              },
            },
            {
              type: 'Feature',
              id: "2222",
              geometry: {
                type: 'LineString',
                coordinates: [
                  [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0],
                ],
              },
              properties: {
                prop0: 'value0',
                prop1: 0.0,
              },
            },
            {
              type: 'Feature',
              id: "3333",
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
                  [100.0, 1.0], [100.0, 0.0]],
                ],
              },
              properties: {
                prop0: 'value0',
                prop1: { this: 'that' },
              },
            },
          ],
          properties: {
            symbol: {
              'markerWidth': 30,
            },//图层的 式样
            events: {
              click: {
                xtype: 'function',
                params: ['event'],
                handler: ' console.log("图层统一监听,动态脚本");'
              }
            }//图层的事件
          },
        },
      };
    },
  };
</script>
