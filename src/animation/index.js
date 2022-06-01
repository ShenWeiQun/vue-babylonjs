import {
  EasingFunction,
  Animation,
  AnimationEvent,
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
import { isFloat, getChildNodes } from '../util';
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

    actualFrom: { // 动画实际开始的帧编号
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
    localProperty() {
      const { property } = this;
      // 如果前缀为material则特殊处理下
      if (property.startsWith('material')) {
        return property.substring(9);
      }
      return property;
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
      const { $entity, frames, localProperty, target } = this;
      if ($entity) {
        const propertys = localProperty.split('.');
        let attribute = target;

        propertys.forEach(element => {
          attribute = attribute[element];
        });

        // 默认如果设置的关键帧的值为0，则替换为该属性的默认值
        frames.forEach(element => {
          if (element.value === 0) {
            element.value = attribute;
          }
        });

        const { animations } = target;
        animations.forEach(item => {
          // 如果要设置的属性前面已经设置了，那么沿用前面的帧，否则会被后来关键帧的替换
          if (localProperty === item.targetProperty) {
            const keys = item.getKeys();
            const lengthK = keys.length;
            // 替换已存在的帧
            frames.splice(0, lengthK, ...keys);
            frames.forEach((element, index) => {
              // 设置当前帧的过度帧为上一个的最后一帧
              if (index > lengthK - 1 && index < frames.length - 1) {
                element.value = keys[lengthK - 1].value;
              }
            });
          }
        });
        $entity.setKeys(frames);
      }
    },
    // 设置动画目标
    setTarget(parent, scene) {
      let { subname, property } = this;
      let target = parent;
      let submodel = null;
      if (subname) {
        submodel = getChildNodes(scene, subname);
      }
      // 如果指定了子模型，则目标设置为子模型
      if (submodel) {
        target = submodel;
      }
      // 如果是要对材质进行操作，则设置目标为模型的材质
      if (property.startsWith('material')) {
        target = target.material;
      }
      if (target) {
        if (!target.animations) {
          target.animations = [];
        }
        target.rotationQuaternion = null; // 将模型的旋转四元数设置为 null，否则导入的模型将产生旋转错误
      }

      return target;
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
    // 添加事件到特定动画帧上
    attachEventsToFrames(frames, callback) {
      const { $entity } = this;
      let eventF = new AnimationEvent(
        frames,
        (currentFrame => {
          callback(currentFrame);
        }),
        true,
      );
      $entity.removeEvents(frames);
      $entity.addEvent(eventF);
    },
  },

  watch: {
    fps() {
      this.$entity.framePerSecond = this.fps;
    },

    property() {
      this.$entity.targetProperty = this.localProperty;
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
    return new Animation(name, this.localProperty, this.fps, this.animationType, this.animationLoopMode);
  },

  onParent({ parent, entity, scene }) {
    const target = this.setTarget(parent, scene);
    if (!target) return; // 如果找不到动画目标则不进行后面的动作
    this.target = target;
    this.setEasingFunction();
    this.setFrames();

    target.animations.push(entity);
    this.animatable = scene.beginAnimation(target, this.from, this.finish, this.loop, this.speedRatio, () => {
      this.$event.$emit('end');
    });
    this.setAnimationState();

    // 为当前动画的最后一帧设置事件,并触发动画完成事件
    this.attachEventsToFrames(this.finish, () => {
      this.$emit('animationEnd');
    });
    // 将动画真正开始的那一帧设置的开始之前事件
    this.attachEventsToFrames(this.actualFrom, () => {
      this.$emit('animationBeforeStart');
    });
    // 为当前动画的开始的一帧的下一帧设置事件,并触发动画开始事件
    this.attachEventsToFrames(this.actualFrom + 1, () => {
      this.$emit('animationStart');
    });
  },

};
