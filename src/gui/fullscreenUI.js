import { AdvancedDynamicTexture } from 'babylonjs-gui';
import AbstractGui from './abstract';

export default {
  mixins: [AbstractGui],

  onScene() {
    return AdvancedDynamicTexture.CreateFullscreenUI('UI');
  },
};
