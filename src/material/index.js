import { Color3, StandardMaterial, PBRMaterial } from 'babylonjs';
import AbstractEntity from '../entity/abstract';
import { color3, toColor3 } from '../types/color';

const STANDARD = 'standard';
const PBR = 'pbr';
let { validator } = color3;

export default {
  mixins: [AbstractEntity],

  props: {
    diffuse: { // 漫反射：设置予在灯光下材质的基本颜色
      validator,
      default: () => new Color3(1, 1, 1),
    },

    specular: { // 高光：设置在灯光下材质的高光
      validator,
      default: () => new Color3(1, 1, 1),
    },

    emissive: { // 自发光：设置材质的自发光颜色
      validator,
      default: () => new Color3(0, 0, 0),
    },

    ambient: { // 环境光：设置由环境背景光照亮材质的颜色
      validator,
      default: () => new Color3(0, 0, 0),
    },

    reflection: { // 反射光：对于PBRMaterial，设置材质反射颜色
      validator,
      default: () => new Color3(1, 1, 1),
    },

    alpha: { // 透明度：设置材质的透明度
      type: Number,
      default: 1,
    },

    metallic: { // 金属：对于PBRMaterial，设置材质的金属标量值
      type: Number,
      default: null,
    },

    roughness: { // 粗糙值：对于PBRMaterial，设置材质的粗糙度标量值
      type: Number,
      default: null,
    },

    glossiness: { // 光泽度：对于PBRMaterial，设置材质的反射光泽度
      type: Number,
      default: null,
    },

    indexOfRefraction: { // 折射率：对于PBRMaterial，设置材质的透明折射率
      type: Number,
      default: 0.66,
    },
  },

  computed: {
    type() {
      if (this.glossiness !== null || this.metallic !== null || this.roughness !== null) {
        return PBR;
      }
      return STANDARD;
    },

    diffuseColor3() {
      return toColor3(this.diffuse);
    },

    specularColor3() {
      return toColor3(this.specular);
    },

    emissiveColor3() {
      return toColor3(this.emissive);
    },

    ambientColor3() {
      return toColor3(this.ambient);
    },

    reflectionColor3() {
      return toColor3(this.reflection);
    },
  },

  methods: {
    createMaterial(parent) {
      let entity;
      if (this.type === PBR) {
        if (this.$entity instanceof PBRMaterial) {
          return;
        }
        entity = new PBRMaterial(this.name, this.$scene);
        entity.albedoColor = this.diffuseColor3;
        entity.reflectivityColor = this.specularColor3;
        entity.reflectionColor = this.reflectionColor3;
        entity.metallic = this.metallic;
        entity.roughness = this.roughness;
        entity.microSurface = this.glossiness;
        entity.indexOfRefraction = this.indexOfRefraction;
      } else {
        if (this.$entity instanceof StandardMaterial) {
          return;
        }
        entity = new StandardMaterial(this.name, this.$scene);
        entity.diffuseColor = this.diffuseColor3;
        entity.specularColor = this.specularColor3;
      }
      entity.emissiveColor = this.emissiveColor3;
      entity.ambientColor = this.ambientColor3;
      entity.alpha = this.alpha;
      this.$replace(entity);
      parent.material = this.$entity;
    },

    getTextureName(name) {
      if (this.type === STANDARD) {
        return name;
      }
      switch (name) {
        case 'baseTexture':
        case 'diffuseTexture':
          return 'albedoTexture';
        case 'metallicRoughnessTexture':
          return 'metallicTexture';
        case 'environmentTexture':
          return 'reflectionTexture';
        case 'normalTexture':
          return 'bumpTexture';
        case 'occlusionTexture':
          return 'ambientTexture';
        case 'specularGlossinessTexture':
          return 'reflectivityTexture';
        default:
          return name;
      }
    },
  },

  watch: {
    type() {
      this.createMaterial(this._$_parent);
    },

    diffuseColor3() {
      if (this.type === PBR) {
        this.$entity.albedoColor = this.diffuseColor3;
      } else {
        this.$entity.diffuseColor = this.diffuseColor3;
      }
    },

    specularColor3() {
      if (this.type === PBR) {
        this.$entity.reflectivityColor = this.specularColor3;
      } else {
        this.$entity.specularColor = this.specularColor3;
      }
    },

    emissiveColor3() {
      this.$entity.emissiveColor = this.emissiveColor3;
    },

    ambientColor3() {
      this.$entity.ambientColor = this.ambientColor3;
    },

    reflectionColor3() {
      this.$entity.reflectionColor = this.reflectionColor3;
    },

    alpha() {
      this.$entity.alpha = this.alpha;
    },

    metallic() {
      this.$entity.metallic = this.metallic;
    },

    roughness() {
      this.$entity.roughness = this.roughness;
    },

    glossiness() {
      this.$entity.microSurface = this.glossiness;
    },

    indexOfRefraction() {
      this.$entity.indexOfRefraction = this.indexOfRefraction;
    },
  },

  events: {
    setTexture({ property, texture }) {
      this.$entity[this.getTextureName(property)] = texture;
    },

    disposeTexture({ property }) {
      this.$entity[this.getTextureName(property)] = null;
    },
  },

  onParent({ parent }) {
    this.createMaterial(parent);
  },
};
