import * as GUI from 'babylonjs-gui';
import AbstractEntity from '../entity/abstract';

export default {
  mixins: [AbstractEntity],

  props: {
    options: {
      type: Object,
      default: () => ({

      }),
    },
  },
  watch: {
    options: {
      handler(val) {
        this.setOptions(val);
      },
      deep: true,
    },
  },
  methods: {
    setOptions() { },
  },
};
