import {
  Vector3,
  UniversalCamera as universal,
  FreeCamera as free,
  FollowCamera as follow,
  ArcRotateCamera as arcRotate,
  ArcFollowCamera as arcFollow,
  DeviceOrientationCamera as deviceOrientation,
  TouchCamera as touch,
  GamepadCamera as gamepad,
} from 'babylonjs';
import AbstractEntity from '../entity/abstract';
import { vec3, toVec3 } from '../types/vector';
import { fromDegreesToR } from '../util';

const TYPES = {
  universal,
  free,
  follow,
  arcRotate,
  arcFollow,
  deviceOrientation,
  touch,
  gamepad,
};

export default {
  mixins: [AbstractEntity],

  inject: ['EngineReady'],

  props: {
    type: {
      validator: value => Object.keys(TYPES).includes(value),
      default: Object.keys(TYPES)[0],
    },

    position: {
      validator: vec3.validator,
      default: () => new Vector3(0, 0, -10),
    },

    target: vec3, // 相机的目标点

    alpha: { // 相机沿纵(Y)轴的旋转
      type: Number,
      default: -90,
    },

    beta: { // 摄像机沿横（X）轴的旋转
      type: Number,
      default: 90,
    },

    radius: { // 摄像机到目标的距离
      type: Number,
      default: 10,
    },
  },

  computed: {
    positionVector3() {
      return toVec3(this.position);
    },

    targetVector3() {
      return toVec3(this.target);
    },

    args() {
      let out = [this.name];
      if (this.type === 'arcRotate' || this.type === 'arcFollow') {
        out = out.concat([fromDegreesToR(this.alpha), fromDegreesToR(this.beta), this.radius, this.targetVector3]);
      } else {
        out = out.concat([this.positionVector3]);
      }
      return out.concat([this.$scene]);
    },
  },

  methods: {
    attachControl() {
      this.$entity.attachControl(this.canvas);
    },

    detachControl() {
      this.$entity.detachControl();
    },

    create() {
      if (this.$entity) {
        this.detachControl();
        delete this.$entity.onDispose;
        this.$entity.dispose();
      }
      this.$entity = new TYPES[this.type](...this.args);
      this.$entity.onDispose = () => {
        this.detachControl();
        if (!this._$_destroyed) {
          this.$destroy();
        }
      };
    },
  },

  watch: {
    type() {
      this.create();
    },

    position() {
      this.$entity.position.copyFrom(this.positionVector3);
    },

    target() {
      this.$entity.setTarget(this.targetVector3);
    },

    alpha() {
      this.$entity.alpha = fromDegreesToR(this.alpha);
    },

    beta() {
      this.$entity.beta = fromDegreesToR(this.beta);
    },

    radius() {
      this.$entity.radius = this.radius;
    },
  },

  events: {
    attachControl() {
      this.attachControl();
    },

    detachControl() {
      this.detachControl();
    },
  },

  async onScene({ scene }) {
    this.canvas = scene.getEngine().getRenderingCanvas();
    this.create();
    this.attachControl();
    return this.$entity;
  },

  beforeDestroy() {
    this._$_destroyed = true;
    if (this.$entity && this.$entity.dispose) {
      this.$entity.dispose();
    }
  },
};
