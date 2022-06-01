import CateView from './components/CateView.vue';
// import Index from './components/Index.vue';
import Issues from './components/Issues.vue';

const langs = ['zh', 'en'];

const genRouteMap = (routeMap, lang, isChild) => routeMap.reduce((res, item) => {
  const route = {
    path: isChild ? item.path : `/${lang}/${item.path}`,
    name: item.name[lang],
    component: typeof item.component === 'string' ? () => import(`./md/${lang}/${item.component}.md`) : item.component,
    meta: { lang, ...item.meta },
    children: genRouteMap(item.children || [], lang, true),
  };
  res.push(route);
  return res;
}, []);

const routeMap = [
  {
    // 首页
    path: 'index',
    name: {
      zh: '文档',
    },
    component: 'index',
    meta: {
      hidden: true,
    },
  },
  {
    // 开始
    path: 'start',
    component: CateView,
    name: {
      zh: '开始',
    },
    children: [
      {
        path: 'installation',
        component: 'start-installation',
        name: {
          zh: '安装',
        },
      },
      {
        path: 'usage',
        component: 'start-usage',
        name: {
          zh: '快速上手',
        },
      },
      {
        path: 'base',
        component: 'start-base',
        name: {
          zh: '基础',
        },
      },
    ],
  },
  {
    // 指南
    path: 'guide',
    component: CateView,
    name: {
      zh: '指南',
    },
    children: [
      {
        path: 'painting',
        component: 'guide-painting',
        name: {
          zh: '图形绘制',
        },
      },
      {
        path: 'custom-polyline',
        component: 'custom-polyline',
        name: {
          zh: '自定义折线',
        },
      },
    ],
  },
  {
    path: 'map',
    name: {
      zh: '地图',
    },
    component: CateView,
    children: [
      {
        path: 'kaland-map',
        component: 'kaland-map',
        name: {
          zh: '地图容器',
        },
      },
      {
        path: 'km-view',
        component: 'km-view',
        name: {
          zh: '地图视图',
        },
      },
    ],
  },
  {
    path: 'control',
    name: {
      zh: '控件',
    },
    component: CateView,
    children: [
      {
        path: 'scale',
        component: 'km-scale',
        name: {
          zh: '比例尺',
        },
      },
      {
        path: 'navigation',
        component: 'km-navigation',
        name: {
          zh: '缩放',
        },
      },
      {
        path: 'overview-map',
        component: 'km-overview-map',
        name: {
          zh: '缩略图',
        },
      },
      {
        path: 'compass',
        component: 'km-compass',
        name: {
          zh: '指南针',
        },
      },
      {
        path: 'control',
        component: 'km-control',
        name: {
          zh: '自定义控件',
        },
      },
    ],
  },
  {
    path: 'tools',
    name: {
      zh: '工具',
    },
    component: CateView,
    children: [
      {
        path: 'distance',
        component: 'km-distance-tool',
        name: {
          zh: '测距工具',
        },
      },
      {
        path: 'area',
        component: 'km-area-tool',
        name: {
          zh: '测面工具',
        },
      },
      {
        path: 'draw',
        component: 'km-draw-tool',
        name: {
          zh: '绘制工具',
        },
      },
    ],
  },
  {
    path: 'overlay',
    name: {
      zh: '覆盖物',
    },
    component: CateView,
    children: [
      {
        path: 'marker',
        component: 'km-marker',
        name: {
          zh: '点',
        },
      },
      {
        path: 'point-collection',
        component: 'km-point-collection',
        name: {
          zh: '海量点',
        },
      },
      {
        path: 'polyline',
        component: 'km-polyline',
        name: {
          zh: '折线',
        },
      },
      {
        path: 'polygon',
        component: 'km-polygon',
        name: {
          zh: '多边形',
        },
      },
      {
        path: 'label',
        component: 'km-label',
        name: {
          zh: '标签',
        },
      },
      {
        path: 'info-window',
        component: 'km-info-window',
        name: {
          zh: '信息窗体',
        },
      },
      {
        path: 'overlay',
        component: 'km-overlay',
        name: {
          zh: '自定义覆盖物',
        },
      },
      {
        path: 'UIMarker',
        component: 'km-ui-marker',
        name: {
          zh: 'UIMarker',
        },
      },
    ],
  },
  {
    path: 'layer',
    name: {
      zh: '图层',
    },
    component: CateView,
    children: [
      {
        path: 'tile',
        component: 'km-tile',
        name: {
          zh: '瓦片图层',
        },
      },
      {
        path: 'geojson',
        component: 'km-geojson',
        name: {
          zh: 'geojson图层',
        },
      },
    ],
  },
  {
    path: 'threeLayer',
    name: {
      zh: '三维对象',
    },
    component: CateView,
    children: [
      {
        path: 'three',
        component: 'km-three-layer',
        name: {
          zh: '三维图层',
        },
      },
      {
        path: 'gltf',
        component: 'km-gltf-loader',
        name: {
          zh: 'gltf加载',
        },
      },
    ],
  },

];

export default [
  {
    path: '/',
    redirect: '/zh/index',
  },
  {
    path: '/issues',
    name: 'ISSUE',
    component: Issues,
    meta: {
      hidden: true,
    },
  },
  ...langs.reduce((map, lang) => map.concat(genRouteMap(routeMap, lang)), []),
];
