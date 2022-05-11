import AbstractEntity from '../entity/abstract';
import { isFloat, isPercent } from '../util';
import { vec3 } from '../types/vector';

const { validator } = vec3;

export default {
  mixins: [AbstractEntity],

  props: {
    frame: { // 此关键帧表示的帧编号或持续时间的字符串百分比
      validator: value => isFloat(value) || isPercent(value),
      default: 0,
    },

    value: { // 要在此关键帧处将属性设置为的值
      default: 0,
    },

    inTangent: {
      validator,
      default: null,
    },

    outTangent: {
      validator,
      default: null,
    },
  },

  computed: {
    key() {
      return {
        frame: this.frame,
        value: this.value,
        inTangent: this.inTangent,
        outTangent: this.outTangent,
      };
    },
  },

  methods: {
    setKey() {
      this.$bus.$emit('setKey', {
        name: this.name,
        key: this.key,
      });
    },

    dispose() {
      this.$bus.$emit('disposeKey', this.name);
    },
  },

  watch: {
    key() {
      this.setKey();
    },
  },

  created() {
    this.setKey();
  },

  beforeDestroy() {
    this.dispose();
  },
};
