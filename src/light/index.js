import { color3, toColor3 } from '../types/color';
import Entity from '../entity';

export default {
  mixins: [Entity],

  props: {
    diffuse: color3, // 漫反射：赋予物体基本的颜色。
    specular: color3, // 高光：在物体上产生高光颜色。
    intensity: { // 光照强度
      type: Number,
      default: 1,
    },
  },

  computed: {
    diffuseColor3() {
      return toColor3(this.diffuse);
    },

    specularColor3() {
      return toColor3(this.specular);
    },
  },

  watch: {

    diffuseColor3() {
      this.setDiffuse();
    },

    specularColor3() {
      this.setSpecular();
    },

    intensity() {
      this.setIntensity();
    },
  },

  methods: {
    setDiffuse() {
      this.$entity.diffuse.copyFrom(this.diffuseColor3);
    },

    setSpecular() {
      this.$entity.specular.copyFrom(this.specularColor3);
    },

    setIntensity() {
      this.$entity.intensity = this.intensity;
    },
  },

  onEntity() {
    this.setDiffuse();
    this.setSpecular();
    this.setIntensity();
  },
};
