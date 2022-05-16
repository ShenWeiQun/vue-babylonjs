import 'babylonjs-loaders';
import { SceneLoader } from 'babylonjs';
import Entity from '../entity';
import { degreesToRadians } from '../util';

export default {
  mixins: [Entity],

  props: {
    src: {
      type: String,
      default: null,
    },
    modelState: { // 模型状态
      type: Array,
      default() {
        return [];
      },
    },
    actionMeshs: { // 模型行为
      type: Array,
      default() {
        return [];
      },
    },
    highlightMeshs: { // 要高亮的模型
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    newHighlightMeshs() {
      return JSON.parse(JSON.stringify(this.highlightMeshs));
    },
  },
  watch: {
    src() {
      this.loadAssetContainer();
    },
    modelState: {
      handler() {
        this.changeState();
      },
      deep: true,
    },
    newHighlightMeshs: {
      handler(a, b) {
        this.setHighlightMeshs(a, b);
      },
      deep: true,
    },
  },

  methods: {
    async loadAssetContainer() {
      if (!this.src) {
        return;
      }
      await this._$_sceneReady;
      let assetContainer = await SceneLoader.LoadAssetContainerAsync(this.src);
      await this._$_parentReady;
      if (assetContainer.meshes.length > 1) {
        this.$replace(assetContainer.createRootMesh());
      } else {
        this.$replace(assetContainer.meshes[0]);
      }
      assetContainer.addAllToScene();

      this.changeState();
      this.addActionManager();
      this.setHighlightMeshs();
    },
    changeState() {
      const { $scene, modelState } = this;

      modelState.forEach(({ name, position, rotation, scaling, material }) => {
        const submodel = $scene.getMeshByName(name);

        // 设置材质属性
        const materialC = this.copyMaterial(name, submodel.material);
        materialC.diffuseColor.set(...material.diffuse);
        materialC.alpha = material.alpha;
        submodel.material = materialC;

        // 设置模型属性
        submodel.position.set(...position);
        submodel.rotation.set(...degreesToRadians(...rotation));
        submodel.scaling.set(...scaling);
      });
    },
    copyMaterial(name, material) {
      const { $scene } = this;
      let materialO = $scene.getMaterialByName(name);
      if (materialO) {
        return materialO;
      }
      const materialC = material.clone();
      materialC.name = name;
      return materialC;
    },
    addActionManager() {
      const { actionMeshs } = this;

      if (actionMeshs.length > 0) {
        actionMeshs.forEach(item => {
          this._$_registerActionManager(item);
        });
      } else {
        this._$_registerActionManager();
      }
    },

    setHighlightMeshs(val = this.highlightMeshs, oldVal = []) {
      oldVal.forEach(item => {
        this.$sceneBus.$emit('removeMeshForHighlightLayer', item);
      });
      val.forEach(item => {
        this.$sceneBus.$emit('addMeshToHighlightLayer', item);
      });
    },
  },

  mounted() {
    this.loadAssetContainer();
  },
};
