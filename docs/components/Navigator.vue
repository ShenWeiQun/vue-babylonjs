<template lang="pug">
md-list
  md-list-item(v-for="(route,pIndex) in routeMap", v-if="route.name", :key="pIndex")
    span(v-text="route.name")
    md-list-expand
      md-list
        md-list-item.md-inset(v-for="(subRoute,cIndex) in route.children" :key="cIndex")
          router-link(:to="`${route.path}/${subRoute.path}`", v-text="subRoute.name")
</template>

<script>
import routeMap from '../routes';

export default {
  props: ['lang'],
  computed: {
    routeMap() {
      const ret = [];
      routeMap.forEach((route) => {
        if (!route.meta || (route.meta && !route.meta.hidden && route.meta.lang === this.lang)) {
          ret.push(route);
        }
      });
      return ret;
    },
  },
};
</script>
