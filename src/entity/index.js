import { Vector3,
  MeshBuilder,
  ActionManager,
  StandardMaterial,
  ExecuteCodeAction } from 'babylonjs';
import AbstractEntity from './abstract';
import { vec3, toVec3 } from '../types/vector';

const { validator } = vec3;

export default {
  mixins: [AbstractEntity],

  props: {
    position: vec3,
    rotation: vec3,
    scaling: {
      validator,
      default: () => Vector3.One(),
    },
    registerAction: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    _$_positionVector3() {
      return toVec3(this.position);
    },

    _$_rotationVector3() {
      return toVec3(this.rotation);
    },

    _$_scalingVector3() {
      return toVec3(this.scaling);
    },
  },

  watch: {
    _$_positionVector3() {
      this._$_setPosition();
    },

    _$_rotationVector3() {
      this._$_setRotation();
    },

    _$_scalingVector3() {
      this._$_setScaling();
    },
  },

  methods: {
    _$_setPosition() {
      if (this.$entity && this.$entity.position) {
        this.$entity.position.copyFrom(this._$_positionVector3);
      }
    },

    _$_setRotation() {
      if (this.$entity && this.$entity.rotation) {
        this.$entity.rotation.copyFrom(this._$_rotationVector3);
      }
    },

    _$_setScaling() {
      if (this.$entity && this.$entity.scaling) {
        this.$entity.scaling.copyFrom(this._$_scalingVector3);
      }
    },
    // 为实体注册事件管理器
    _$_registerActionManager(name = '') {
      if (!this.registerAction) return;
      const { $scene, $entity } = this;
      let submodel = $scene.getMeshByName(name);

      if (!submodel) {
        submodel = $entity;
      }
      submodel.actionManager = new ActionManager($scene);
      submodel.actionManager.registerAction(
        new ExecuteCodeAction(
          ActionManager.OnPickUpTrigger,
          (evt => {
            this.$emit('pickUpTrigger', evt);
          }),
        ),
      );
      submodel.isPickable = true;
    },
    // 销毁实体的事件管理器
    _$_disposeActionManager(name = '') {
      const { $scene, $entity } = this;
      let submodel = $scene.getMeshByName(name);

      if (!submodel) {
        submodel = $entity;
      }
      if (submodel.actionManager) {
        submodel.actionManager.actions.forEach(item => {
          submodel.actionManager.unregisterAction(item);
        });

        submodel.actionManager.dispose();
      }
    },
  },

  created() {
    Object.assign(this._$_hookArgs, {
      position: this._$_positionVector3,
      rotation: this._$_rotationVector3,
      scaling: this._$_scalingVector3,
    });
  },

  /* eslint-disable camelcase */
  _$_onTransform() {
    if (!this.$entity) {
      // HACK: TransformNode does not implement IPhysicsEnabledObject, so using invisible box instead
      let box = MeshBuilder.CreateBox(this.name, {}, this.$scene);
      box.material = new StandardMaterial();
      box.isVisible = false;
      this.$entity = box;
    }
    this._$_setPosition();
    this._$_setRotation();
    this._$_setScaling();
    if (!this.$entity.parent) {
      this.$entity.parent = this._$_parent;
    }
  },
};
