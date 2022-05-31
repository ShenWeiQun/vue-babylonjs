import { Angle } from 'babylonjs';

export const isFloat = value => Number.isFinite(value) && !Number.isNaN(value);

export const isFloatArray = value => Array.isArray(value) && value.every(isFloat);

export const isBetween0and1 = value => isFloat(value) && value <= 1 && value >= 0;

export const id = (size = 12) => {
  let buf = new Uint8Array(size);
  window.crypto.getRandomValues(buf);
  return btoa(String.fromCharCode(...buf)).replace(/\//g, '_').replace(/\+/g, '-');
};

export const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

export const isPercent = value => {
  value = Number.parseFloat(value);
  return !Number.isNaN(value) && value >= 0 && value <= 100;
};

export const isDisposable = entity => entity && typeof entity.dispose === 'function';

export const createBus = function () {
  let Vue = this.constructor.super;
  return new Vue();
};

export const camelize = str => str.split('-').reduce((result, [first, ...rest]) => result + first.toUpperCase() + rest.join(''), '');

export const last = ([...arr]) => arr.pop();

export const defer = () => {
  let split;
  let promise = new Promise((...args) => {
    split = args;
  });
  let [complete, error] = split;
  Object.assign(promise, { complete, error });
  return promise;
};
// 角度制转弧度制
export const fromDegreesToR = item => Angle.FromDegrees(item).radians();
export const degreesToRadians = (...args) => args.map(item => fromDegreesToR(item));

// 弧度制转角度制
export const fromRadiansToD = item => Angle.FromRadians(item).degrees();
export const radiansToDegrees = (...args) => args.map(item => fromRadiansToD(item));

// 获取子节点
export const getChildNodes = ($scene, name) => {
  let submodel = $scene.getMeshByName(name); // 是否为Mesh节点
  if (!submodel) {
    submodel = $scene.getTransformNodeByName(name); // 是否为TransformNode节点
  }
  return submodel;
};
