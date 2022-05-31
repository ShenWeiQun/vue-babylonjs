import { DynamicTexture } from 'babylonjs';
import Texture from './texture';

export default {
  mixins: [Texture],
  props: {

    /*
     * 文字：设置材质的文字纹理
     * width：动态纹理的宽度
     * height：动态纹理的高度
     * text: 设置文本内容
     * x：距左边缘的距离
     * y：距顶部或底部边缘的距离，取决于invertY
     * font：字体定义，格式为font-style，font-size，font-name
     * color: 设置用于文本的颜色
     * canvasColor：定义画布的颜色，使用null则不覆盖画布
     * invertY：默认为true，这时y为距顶部的距离;为false时，y为距底部的距离，文本内容反转
     * update：默认为true，动态纹理将立即更新
     */
    textOptions: {
      type: Object,
      default: null,
    },
    /**
     * width：动态纹理的宽度
     * height：动态纹理的高度
     */
    options: {
      type: Object,
      default: () => ({ width: 512, height: 256 }),
    },
  },

  methods: {
    create() {
      const { $scene, name, options } = this;
      let texture = new DynamicTexture(name, options, $scene);
      this.setText(texture);
      this.$replace(texture);
    },
    setText(textureGround) {
      if (this.textOptions) {
        let { text, x, y, font, color, canvasColor, invertY, update } = this.textOptions;
        textureGround.drawText(text, x, y, font, color, canvasColor || 'white',
          invertY,
          update);
      }
    },
  },
};
