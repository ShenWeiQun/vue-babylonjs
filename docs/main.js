import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import Prism from 'prismjs';
import App from './components/App.vue';
import routes from './routes';
// import KalandVueMap from '../components/index';
import DocPreview from './components/DocPreview.vue';
import TextField from './components/TextField.vue';

import 'prismjs/themes/prism-tomorrow.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'vue-material/dist/vue-material.css';
import './fonts/iconfont.css';

Vue.use(VueMaterial);
Vue.use(VueRouter);
// const baseLayer = {
//   type: 'TileLayer',
//   id: 'base',
//   options: {
//     urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
//     subdomains: ['a', 'b', 'c', 'd'],
//     // attribution:
//     //   '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
//   },
// };
// Vue.use(KalandVueMap, {
//   baseLayer,
// });

Vue.material.registerTheme({
  white: {
    primary: 'white',
    accent: 'black',
  },
});

Vue.component('doc-preview', DocPreview);
Vue.component('text-field', TextField);

const router = new VueRouter({
  routes,
});

router.afterEach(() => {
  Vue.nextTick(Prism.highlightAll);
});
// 挂载全局变量
Vue.prototype.global = {
  maptalksApi: 'https://maptalks.org/maptalks.js/api/1.x/',
};

export default new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
