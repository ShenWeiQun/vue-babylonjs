import * as GUI from 'babylonjs-gui';
import AbstractGui from './abstract';
import FullscreenUI from './fullscreenUI';
import { HORIZONTALALIGNMENT, VERTICALALIGNMENT } from '../util/constants';

const prepare = fn => ({
  mixins: [AbstractGui],

  onScene({ name }) {
    const { control, setOptions } = fn({ ...this.$props.options, name });
    this.setOptions = setOptions;

    return control;
  },

  onParent({ parent, entity }) {
    parent.addControl(entity);
  },
});
// 设置存控件属性
const setPureControls = (control, { width = '140px', height = '40px', color = 'white',
  paddingTop = '0px', paddingBottom = '0px',
  paddingLeft = '0px', paddingRight = '0px',
  fontSize = 18 }) => {
  control.width = width;
  control.height = height;
  control.color = color;

  control.paddingTop = paddingTop;
  control.paddingBottom = paddingBottom;
  control.paddingLeft = paddingLeft;
  control.paddingRight = paddingRight;

  control.fontSize = fontSize;
};
// 设置容器控件属性
const setContainers = (control, { width = 0.2, color = 'Black', background = '',
  horizontalAlignment = HORIZONTALALIGNMENT.HORIZONTAL_ALIGNMENT_CENTER,
  verticalAlignment = VERTICALALIGNMENT.VERTICAL_ALIGNMENT_CENTER,
  top = '0px', left = '0px' }) => {
  control.width = width;
  control.color = color;
  control.background = background;

  control.horizontalAlignment = horizontalAlignment; // 水平对齐
  control.verticalAlignment = verticalAlignment;// 垂直对齐
  control.top = top;
  control.left = left;
};
// 纯控件
/**
 * 按钮控件
 */
const SimpleButton = prepare(parameter => {
  const control = GUI.Button.CreateSimpleButton(parameter.name, parameter.text);

  const setOptions = ({ width, height, color, background, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize }) => {
    setPureControls(control, { width, height, color, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize });
    control.background = background;
  };
  setOptions(parameter);

  return { control, setOptions };
});
/**
 * 文本框控件
 */
const TextBlock = prepare(parameter => {
  const control = new GUI.TextBlock(parameter.name);

  const setOptions = ({ text, width, height, color, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize, textHorizontalAlignment = 0, textVerticalAlignment = 0, textWrapping = true }) => {
    setPureControls(control, { width, height, color, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize });

    control.text = text; // 文本内容
    control.textHorizontalAlignment = textHorizontalAlignment; // 文本水平对齐
    control.textVerticalAlignment = textVerticalAlignment; // 文本垂直对齐
    control.textWrapping = textWrapping; // 文本换行
    control.wordSplittingFunction = line => line; // 文本拆分为单词的函数
  };
  setOptions(parameter);
  return { control, setOptions };
});
// 容器
/**
 * 长方形容器
 */
const Rectangle = prepare(parameter => {
  const control = new GUI.Rectangle();

  const setOptions = ({ width, height = '40px', cornerRadius, color, thickness, background, horizontalAlignment, verticalAlignment, top, left }) => {
    setContainers(control, { width, color, background, horizontalAlignment, verticalAlignment, top, left });
    control.height = height;
    control.cornerRadius = cornerRadius; // 圆角
    control.thickness = thickness; // 边框
  };
  setOptions(parameter);
  return { control, setOptions };
});
/**
 * 堆载面板
 */
const StackPanel = prepare(parameter => {
  const control = new GUI.StackPanel();

  const setOptions = ({ width, color, background, horizontalAlignment, verticalAlignment, top, left, isVertical = true }) => {
    setContainers(control, { width, color, background, horizontalAlignment, verticalAlignment, top, left });

    control.isVertical = isVertical; // 面板内容的方向是否垂直
  };
  setOptions(parameter);
  return { control, setOptions };
});
export {
  TextBlock,
  SimpleButton,
  Rectangle,
  StackPanel,
  FullscreenUI,
};
