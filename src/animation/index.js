import {
  EasingFunction,
  Animation,
  CircleEase as circle,
  BackEase as back,
  BounceEase as bounce,
  CubicEase as cubic,
  ElasticEase as elastic,
  ExponentialEase as exponential,
  PowerEase as power,
  QuadraticEase as quadratic,
  QuarticEase as quartic,
  QuinticEase as quintic,
  SineEase as sine,
  BezierCurveEase as bezierCurve,
} from 'babylonjs';
import AbstractEntity from '../entity/abstract';
import { isFloat } from '../util';
import { ANIMATIONSTATES } from '../util/constants';

const EASINGS = {
  circle,
  back,
  bounce,
  cubic,
  elastic,
  exponential,
  power,
  quadratic,
  quartic,
  quintic,
  sine,
  bezierCurve,
};
const TYPES = {
  FLOAT: 'float',
  VECTOR2: 'vector2',
  VECTOR3: 'vector3',
  SIZE: 'size',
  QUATERNION: 'quaternion',
  MATRIX: 'matrix',
  COLOR3: 'color3',
};
const MODES = {
  CYCLE: 'cycle',
  RELATIVE: 'relative',
  CONSTANT: 'constant',
};
const EASING_MODES = {
  IN: 'in',
  OUT: 'out',
  INOUT: 'inout',
};

export default {
  mixins: [AbstractEntity],

  data() {
    return {
      keys: {},
    };
  },

  props: {
    animationState: { // 控制动画的状态
      validator: value => Object.values(ANIMATIONSTATES).includes(value),
      default: Object.values(ANIMATIONSTATES)[0],
    },

    subname: { // 要创建动画的子模型名字
      type: String,
      default: null,
    },

    type: { // 要执行动画的属性的类型
      validator: value => Object.values(TYPES).includes(value),
      default: Object.values(TYPES)[0],
    },

    mode: { // 动画的循环模式
      validator: value => Object.values(MODES).includes(value),
      default: Object.values(MODES)[0],
    },

    property: { // 要执行动画化的属性
      type: String,
    },

    fps: { // 动画的每秒帧数
      type: Number,
      default: 60,
    },

    from: { // 动画要开始的帧编号
      type: Number,
      default: 0,
    },

    to: { // 动画结束的帧编号
      type: Number,
      default: 60,
    },

    duration: { // 动画的长度（以秒为单位）
      type: Number,
      default: null,
    },

    start: { // 设置动画效果的属性的起始值
      default: 0,
    },

    end: { // 设置动画效果的属性的结束值
      default: 1,
    },

    loop: { // 是否循环播放动画（默认为 true）
      type: Boolean,
      default: true,
    },

    speedRatio: { // 动画的速度比
      type: Number,
      default: 1,
    },

    // animatable: { // babylonjs的特定动画对象
    //   type: Object,
    //   default: null,
    // },

    blending: {
      type: Boolean,
      default: false,
    },

    blendingSpeed: {
      type: Number,
      default: null,
    },

    easing: {
      validator: value => Object.values(EASINGS).includes(value),
      default: null,
    },

    easingMode: {
      validator: value => Object.values(EASING_MODES).includes(value),
      default: Object.values(EASING_MODES)[0],
    },

    amplitude: {
      type: Number,
      default: 1,
    },

    bounces: {
      type: Number,
      default: 3,
    },

    bounciness: {
      type: Number,
      default: 2,
    },

    oscillations: {
      type: Number,
      default: 3,
    },

    springiness: {
      type: Number,
      default: 3,
    },

    exponent: {
      type: Number,
      default: 2,
    },

    power: {
      type: Number,
      default: 2,
    },

    x1: {
      type: Number,
      default: 0.32,
    },

    y1: {
      type: Number,
      default: -0.73,
    },

    x2: {
      type: Number,
      default: 0.69,
    },

    y2: {
      type: Number,
      default: 1.59,
    },
  },

  computed: {
    easingFunction() {
      if (!this.easing) {
        return null;
      }
      let easing = EASINGS[this.easing];
      let easingFunction;
      switch (this.easing) {
        case 'back':
          easingFunction = easing(this.amplitude);
          break;
        case 'bounce':
          easingFunction = easing(this.bounces, this.bounciness);
          break;
        case 'elastic':
          easingFunction = easing(this.oscillations, this.springiness);
          break;
        case 'exponential':
          easingFunction = easing(this.exponent);
          break;
        case 'power':
          easingFunction = easing(this.power);
          break;
        case 'bezierCurve':
          easingFunction = easing(this.x1, this.y1, this.x2, this.y2);
          break;
        default:
          easingFunction = easing();
      }
      easingFunction.setEasingMode(EasingFunction[`EASINGMODE_EASE${
        this.easingMode.toUpperCase()
      }`]);
      return easingFunction;
    },

    finish() {
      return this.duration ? this.duration * this.fps : this.to;
    },

    frames() {
      let keys = Object.values(this.keys);
      if (keys.length < 1) {
        return [{
          frame: this.from,
          value: this.start,
        }, {
          frame: this.finish,
          value: this.end,
        }];
      }
      return keys.map(key => {
        let frame = Number.parseFloat(key.frame);
        if (!isFloat(key.frame)) {
          frame = Math.floor((frame / 100) * this.finish);
        }
        let out = {
          frame,
          value: key.value,
        };
        if (key.outTangent) {
          out.outTangent = key.outTangent;
        }
        if (key.inTangent) {
          out.inTangent = key.inTangent;
        }
        return out;
      });
    },

    animationType() {
      return Animation[`ANIMATIONTYPE_${this.type.toUpperCase()}`];
    },

    animationLoopMode() {
      return Animation[`ANIMATIONLOOPMODE_${this.mode.toUpperCase()}`];
    },
  },

  methods: {
    enableBlending(speed) {
      this.$entity.enableBlending(speed);
    },

    disableBlending() {
      this.$entity.disableBlending();
    },

    setEasingFunction() {
      this.$entity.setEasingFunction(this.easingFunction);
    },

    setFrames() {
      if (this.$entity) {
        this.$entity.setKeys(this.frames);
      }
    },
    // 设置动画目标
    setTarget(parent, scene) {
      let { subname } = this;
      let submodel = null;
      if (subname) {
        submodel = scene.getMeshByName(subname);
      }
      if (submodel) {
        if (!submodel.animations) {
          submodel.animations = [];
        }
        return submodel;
      }
      return parent;
    },
    // 控制动画状态
    setAnimationState() {
      const { animatable, animationState } = this;
      if (animatable) {
        switch (animationState) {
          case ANIMATIONSTATES.PLAY: // 播放的设置方式还有待商榷
            animatable.restart();
            break;
          case ANIMATIONSTATES.PAUSE:
            animatable.pause();
            break;
          case ANIMATIONSTATES.RESTART:
            animatable.restart();
            break;
          case ANIMATIONSTATES.STOP:
            animatable.stop();
            break;
          case ANIMATIONSTATES.RESET:
            animatable.reset();
            break;

          default:
            break;
        }
      }
    },
  },

  watch: {
    fps() {
      this.$entity.framePerSecond = this.fps;
    },

    property() {
      this.$entity.targetProperty = this.property;
    },

    animationType() {
      this.dataType = this.animationType;
    },

    animationLoopMode() {
      this.loopMode = this.animationLoopMode;
    },

    frames() {
      this.setFrames();
    },

    easingFunction() {
      this.setEasingFunction();
    },

    speedRatio() {
      this.$entity.speedRatio = this.speedRatio;
    },

    loop() {
      this.$entity.loopAnimation = this.loop;
    },

    blending() {
      if (this.blending) {
        this.enableBlending(this.blendingSpeed);
      } else {
        this.disableBlending();
      }
    },

    animationState() {
      this.setAnimationState();
    },
  },

  events: {
    setKey({ name, key }) {
      this.$set(this.keys, name, key);
    },

    removeKey(name) {
      this.$delete(this.keys, name);
    },

    reset() {
      this.$entity.stop();
    },

    enableBlending(speed) {
      this.enableBlending(speed);
    },

    disableBlending() {
      this.disableBlending();
    },

    goToFrame(frame) {
      this.$entity.goToFrame(frame);
    },

    pause() {
      this.$entity.pause();
    },

    restart() {
      this.$entity.restart();
    },

    stop() {
      this.$entity.stop();
    },
  },

  onScene({ name }) {
    return new Animation(name, this.property, this.fps, this.animationType, this.animationLoopMode);
  },

  onParent({ parent, entity, scene }) {
    this.setEasingFunction();
    this.setFrames();
    const target = this.setTarget(parent, scene);
    target.animations.push(entity);
    this.animatable = scene.beginAnimation(target, this.from, this.finish, this.loop, this.speedRatio, () => {
      this.$event.$emit('end');
    });
    this.setAnimationState();
  },

};
