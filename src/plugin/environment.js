
import AbstractPlugin from './abstract';

export default {
  mixins: [AbstractPlugin],
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    options: {
      handler() {
        const { $entity, options } = this;
        $entity.updateOptions(options);
      },
      deep: true,
    },
  },
  onScene({ scene }) {
    // 创建默认环境
    return scene.createDefaultEnvironment(this.options);
  },
};
