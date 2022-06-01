# 基础

## 全局组件事件

| 事件名 | 参数                 | 描述                                                                                                                                                                                                   |
| ------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ready  | {internalLayer, map} | 地图组件渲染完毕时触发，返回一个内部使用的统一一矢量图层示例和地图实例。地图组件是异步加载，请**不要**尝试在组件的生命周期中访问 map 实例，如有需要，请在所需组件的 `ready` 事件回调函数的参数中获取。 |

## 全局组件实例方法

| 方法名 | 参数 | 描述                                |
| ------ | ---- | ----------------------------------- |
| load   |      | 组件加载时执行的抽象方法。          |
| unload |      | 组件卸载时执行的抽象方法。          |
| reload |      | 完成一次组件卸载 / 重新加载的方法。 |

## 常量

### ControlAnchor

此常量表示控件的定位。

| 常量         | 描述                     |
| ------------ | ------------------------ |
| top-left     | 控件将定位到地图的左上角 |
| top-right    | 控件将定位到地图的右上角 |
| bottom-left  | 控件将定位到地图的左下角 |
| bottom-right | 控件将定位到地图的右下角 |

### SHAPE

此常量表示绘制的图形形状。

| 常量               | 描述           |
| ------------------ | -------------- |
| POINT              | 点             |
| LINESTRING         | 线             |
| POLYGON            | 多边形         |
| CIRCLE             | 圆形           |
| ELLIPSE            | 椭圆形         |
| RECTANGLE          | 矩形           |
| FREEHANDLINESTRING | 自由绘制线段   |
| FREEHANDPOLYGON    | 自由绘制多边形 |

## 私有类型

### Point

用于描述地图上点的经纬度(`x:经度|lng,y:纬度|lat`)。

#### 结构

```javascript
{
  x: Number;
  y: Number;
}
```

### Size

用于描述地图上指定区域的长宽尺寸。

#### 结构

```javascript
{
  width: Number,
  height: Number
}
```

### BaseLayer

该类用于设置地图底图。

```javascript
{
  type: String,
  id: String,
  options: TileLayer
}
```

### TileLayer

TileLayer 类型底图的选项。

- <a href="https://maptalks.org/maptalks.js/api/0.x/TileLayer.html#options" target="_blank" title="TileLayer">TileLayer</a>

### ControlPosition

该类用于设置控件的定位。

```javascript
{
  bottom: Number,
  right: Number,
  top: Number,
  left: Number
}
```

### ControlOptions

该类用于设置自定义控件的选项。

```javascript
{
  position: ControlPosition,
}
```

### MarkerSymbol

该类用于设置图标覆盖物的式样。

```javascript
{
  markerOpacity: Number;
  markerWidth: Number;
  markerHeight: Number;
  markerDx: Number;
  markerDy: Number;
  markerHorizontalAlignment: String;
  markerVerticalAlignment: String;
  markerPlacement: String;
  markerRotation: Number;
  markerFile: String;
  markerType: String;
  markerFill: String;
  markerFillPatternFile: String;
  markerFillOpacity: Number;
  markerLineColor: String;
  markerLineWidth: Number;
  markerLineOpacity: Number;
  markerLineDasharray: Number;
  markerLinePatternFile: String;
  markerPath: String;
  markerPathWidth: Number;
  markerPathHeight: Number;
}
```

### TextSymbol

该类用于设置文字标注的式样。

```javascript
{
  textPlacement: String;
  textFaceName: String;
  textFont: String;
  textWeight: String;
  textStyle: String;
  textSize: Number;
  textFill: String;
  textOpacity: Number;
  textHaloFill: String;
  textHaloRadius: Number;
  textHaloOpacity: Number;
  textWrapWidth: Number;
  textWrapCharacter: String;
  textLineSpacing: Number;
  textHorizontalAlignment: String;
  textVerticalAlignment: String;
  textAlign: String;
  textRotation: Number;
  textDx: Number;
  textDy: Number;
}
```

### LineSymbol

该类用于设置线段覆盖物的式样。

```javascript
{
  lineColor: String;
  lineWidth: Number;
  lineDasharray: Number;
  lineOpacity: Number;
  lineJoin: String;
  lineCap: String;
  linePatternFile: String;
  lineDx: Number;
  lineDy: Number;
}
```

### PolygonSymbol

该类用于设置多边形覆盖物的式样。

```javascript
{
  lineColor: String;
  lineWidth: Number;
  lineDasharray: Number;
  lineOpacity: Number;
  lineJoin: String;
  lineCap: String;
  linePatternFile: String;
  lineDx: Number;
  lineDy: Number;
  polygonFill: String;
  polygonOpacity: Number;
  polygonPatternFile: String;
}
```

### AnimationObject

该类用于设置动画的式样。

```javascript
{
  styles: PolygonSymbol,LineSymbol,TextSymbol,MarkerSymbol
  options: {
    duration: NUmber,
    startTime: Number,
    easing: String,
    repeat: Boolean,
  },
  step: Function
}
```

### BoxStyle

该类用于设置标签轮廓式样。

```javascript
{
  padding: Boolean,
  verticalAlignment: Boolean,
  horizontalAlignment: Boolean,
  minWidth: Number,
  minHeight: Number,
  symbol: MarkerSymbol
}
```

### Feature

该类用于设置 geojson 规范的格式地理信息数据。

```javascript
{
  type: "Feature",
  id: String,
  geometry: Object,
  properties: {
    events: Object,
    options: Object, //Feature选项
    symbol: PolygonSymbol,LineSymbol,TextSymbol,MarkerSymbol,
  },
}
```

### FeatureCollection

该类用于设置 geojson 规范的格式地理信息数据集合。

```javascript
{
  type: "FeatureCollection",
  features: Array[Feature],
  properties: {
    symbol: PolygonSymbol,LineSymbol,TextSymbol,MarkerSymbol,,
    events: Object,
  },
}
```

## 参考

> - [maptalks 官方文档](https://github.com/maptalks/maptalks.js/wiki)
> - [maptalks 官方 API](https://maptalks.org/maptalks.js/api/0.x/Map.html)
> - [maptalks 官方式样设置说明](https://github.com/maptalks/maptalks.js/wiki/Symbol-Reference)
