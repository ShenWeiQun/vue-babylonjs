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
    modelState: {
      type: Array,
      default: [],
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
  },

  mounted() {
    this.loadAssetContainer();
  },
};
