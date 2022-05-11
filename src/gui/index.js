import * as GUI from 'babylonjs-gui';
import AbstractGui from './abstract';
import FullscreenUI from './fullscreenUI';

// const ALIGNMENTS = {
//   HORIZONTAL_ALIGNMENT_RIGHT: GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT,
//   HORIZONTAL_ALIGNMENT_LEFT: GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,
//   VERTICAL_ALIGNMENT_TOP: GUI.Control.VERTICAL_ALIGNMENT_TOP,
//   VERTICAL_ALIGNMENT_BOTTOM: GUI.Control.VERTICAL_ALIGNMENT_BOTTOM,
// };
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
const setPureControls = (control, { width = '140px', height = '40px',
  color = 'white', background = 'green',
  paddingTop = '0px', paddingBottom = '0px',
  paddingLeft = '0px', paddingRight = '0px',
  fontSize = 24 }) => {
  control.width = width;
  control.height = height;
  control.color = color;
  control.background = background;

  control.paddingTop = paddingTop;
  control.paddingBottom = paddingBottom;
  control.paddingLeft = paddingLeft;
  control.paddingRight = paddingRight;

  control.fontSize = fontSize;
};
// 设置容器控件属性
const setContainers = (control, { width = 0.2,
  cornerRadius = 20, color = 'Orange',
  thickness = 4, background = 'green',
  horizontalAlignment = 2,
  verticalAlignment = 2,
  top = '0px', left = '0px' }) => {
  control.width = width;

  control.cornerRadius = cornerRadius; // 圆角
  control.color = color;
  control.thickness = thickness; // 边框
  control.background = background;
  control.horizontalAlignment = horizontalAlignment;
  control.verticalAlignment = verticalAlignment;
  control.top = top;
  control.left = left;
};
// 纯控件
const SimpleButton = prepare(parameter => {
  const control = GUI.Button.CreateSimpleButton(parameter.name, parameter.text);

  const setOptions = ({ width, height, color, background, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize }) => {
    setPureControls(control, { width, height, color, background, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize });
  };
  setOptions(parameter);

  return { control, setOptions };
});
const TextBlock = prepare(parameter => {
  const control = new GUI.TextBlock(parameter.name);

  const setOptions = ({ text, width, height, color, background, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize }) => {
    setPureControls(control, { width, height, color, background, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize });

    control.text = text;
  };
  setOptions(parameter);
  return { control, setOptions };
});
// 容器
const Rectangle = prepare(parameter => {
  const control = new GUI.Rectangle();

  const setOptions = ({ width, height = '40px', cornerRadius, color, thickness, background, horizontalAlignment, top, left }) => {
    setContainers(control, { width, cornerRadius, color, thickness, background, horizontalAlignment, top, left });
    control.height = height;
  };
  setOptions(parameter);
  return { control, setOptions };
});

const StackPanel = prepare(parameter => {
  const control = new GUI.StackPanel();

  const setOptions = ({ width, cornerRadius, color, thickness, background, horizontalAlignment, top, left }) => {
    setContainers(control, { width, cornerRadius, color, thickness, background, horizontalAlignment, top, left });
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
