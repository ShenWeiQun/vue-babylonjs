import { HemisphericLight } from 'babylonjs';
import DirectionalLight from './directional';

export default {
  mixins: [DirectionalLight],

  onScene({ name, scene }) {
    return new HemisphericLight(name, this.directionVector3, scene);
  },
};
