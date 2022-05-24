
import { GlowLayer } from 'babylonjs';
import AbstractPlugin from './abstract';

export default {
  mixins: [AbstractPlugin],

  onScene({ name, scene }) {
    return new GlowLayer(name, scene);
  },
};
