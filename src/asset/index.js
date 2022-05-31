import 'babylonjs-loaders';
import { SceneLoader } from 'babylonjs';
import Entity from '../entity';
import { degreesToRadians, getChildNodes } from '../util';

export default {
  mixins: [Entity],

  props: {
    src: {
      type: String,
      default: null,
    },
    stateMeshs: { // 模型状态
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
    newActionMeshs() {
      return JSON.parse(JSON.stringify(this.actionMeshs));
    },
  },
  watch: {
    src() {
      this.loadAssetContainer();
    },
    stateMeshs: {
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
    newActionMeshs: {
      handler(a, b) {
        this.addActionManager(b);
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
      const { $scene, stateMeshs } = this;

      stateMeshs.forEach(({ name, position, rotation, scaling, material, visibility }) => {
        const submodel = getChildNodes($scene, name);

        // 设置材质属性
        if (material && submodel.material) {
          const materialC = this.copyMaterial(name, submodel.material);
          // 漫反射
          if (material.diffuseColor) {
            if (materialC.diffuseColor) {
              materialC.diffuseColor.set(...Object.values(material.diffuseColor));
            }
            if (materialC.albedoColor) {
              materialC.albedoColor.set(...Object.values(material.diffuseColor));
            }
          }
          (materialC.specularColor && material.specularColor) && materialC.specularColor.set(...Object.values(material.specularColor)); // 镜面反射
          (materialC.emissiveColor && material.emissiveColor) && materialC.emissiveColor.set(...Object.values(material.emissiveColor)); // 自发光
          (materialC.ambientColor && material.ambientColor) && materialC.ambientColor.set(...Object.values(material.ambientColor)); // 环境

          submodel.material = materialC;
        }

        // 设置模型属性
        position && submodel.position.set(...Object.values(position));
        rotation && submodel.rotation.set(...degreesToRadians(...Object.values(rotation)));
        scaling && submodel.scaling.set(...Object.values(scaling));
        if (typeof visibility === 'number') {
          submodel.visibility = visibility;
        }
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
    addActionManager(oldVal = []) {
      const { actionMeshs } = this;

      // 移除旧的事件
      oldVal.forEach(item => {
        this._$_disposeActionManager(item);
      });

      // 添加新的事件
      if (actionMeshs.length > 0) {
        actionMeshs.forEach(item => {
          this._$_registerActionManager(item);
        });
      }
      // 如果没有指定子模型则对整个模型添加事件
      // else {
      //   this._$_registerActionManager();
      // }
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
