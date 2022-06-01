import { SpotLight } from 'babylonjs';
import DirectionalLight from './directional';
import { isFloat, fromDegreesToR } from '../util';

export default {
  mixins: [DirectionalLight],

  props: {
    angle: {
      validator: isFloat,
      default: 90,
    },

    exponent: {
      validator: isFloat,
      default: 1.5,
    },
  },

  watch: {
    angle() {
      this.$entity.angle = fromDegreesToR(this.angle);
    },

    exponent() {
      this.$entity.exponent = this.exponent;
    },
  },

  onScene({ name, position, scene }) {
    return new SpotLight(name, position, this.directionVector3, fromDegreesToR(this.angle), this.exponent, scene);
  },
};
