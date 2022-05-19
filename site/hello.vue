<template>
  <div>
    <Scene :debug="debug">
      <Camera
        type="arcRotate"
        :radius="350"
      />
      <FullscreenUI>
        <StackPanel :options="buttonPanel">
          <SimpleButton
            v-for="(option, index) in buttonOptions"
            :key="index"
            :options="option"
          />
        </StackPanel>
        <StackPanel :options="textBlockPanel">
          <TextBlock :options="textBlockOptions" />
        </StackPanel>
      </FullscreenUI>
      <Asset
        src="http://dev.chimeraprime.com/jetengine/assets/jetEngine2.babylon"
        :state-meshs="modelState"
        :register-action="true"
        :action-meshs="actionMeshs"
        :highlight-meshs="highlightMeshs"
        @pickUpTrigger="pickUpTrigger"
        @complete="readyComplete"
      >
        <Animation
          v-for="(animation, index) in animationObject"
          :key="index"
          :property="animation.property"
          :duration="animation.duration"
          :loop="animation.loop"
          :subname="animation.subname"
          :actual-from="animation.actualFrom"
          :animation-state="animationState"
          @animationEnd="animation.animationEnd"
          @animationStart="animation.animationStart"
          @animationBeforeStart="animation.animationBeforeStart"
        >
          <Key
            v-for="(key, indexK) in animation.keys"
            :key="indexK"
            :frame="key.frame"
            :value="key.value"
          />
        </Animation>
      </Asset>
    </Scene>
  </div>
</template>

<script>
import {
  HORIZONTALALIGNMENT,
  VERTICALALIGNMENT,
  ANIMATIONSTATES,
} from '../src/index';

export default {
  name: 'Dashboard',
  computed: {
    buttonOptions() {
      // 按钮选项
      const { diagrams } = this;
      return diagrams.map(item => ({
        text: item.diagramName,
        paddingTop: '10px',
      }));
    },
  },
  data() {
    return {
      debug: false, // 是否开启debugger模式
      animationState: ANIMATIONSTATES.PLAY, // 动画状态
      actionMeshs: [], // 触发时间的模型
      highlightMeshs: [], // 高亮的模型
      modelState: [
        // 模型状态
        {
          name: 'rb211_stru', // 模型名字
          position: {
            x: -58.1731,
            y: 4.4119,
            z: 2.0482,
          }, // 模型位置
          rotation: { x: 0, y: 0, z: 0 }, // 模型旋转
          scaling: { x: 1.0, y: 1.0, z: 1.0 }, // 模型缩放
          material: {
            // 模型材质
            diffuseColor: {
              r: 1,
              g: 1,
              b: 1,
            }, // 模型漫反射颜色
          },
          visibility: 0.7, // 模型透明度
        },
      ],
      buttonPanel: {
        // 按钮面板选项
        horizontalAlignment: HORIZONTALALIGNMENT.HORIZONTAL_ALIGNMENT_LEFT,
        background: 'green',
        left: '30px',
        width: '200px',
      },
      textBlockOptions: {
        // 文本框选项
        text: '词排行榜，引领热...',
        width: '400px',
        height: '200px',
      },
      textBlockPanel: {
        // 文本面板选项
        horizontalAlignment: HORIZONTALALIGNMENT.HORIZONTAL_ALIGNMENT_LEFT,
        verticalAlignment: VERTICALALIGNMENT.VERTICAL_ALIGNMENT_TOP,
        top: '30px',
        left: '30px',
        width: '400px',
        height: '200px',
        background: 'green',
      },
      diagrams: [
        // 操作解析
        {
          diagramId: 4453491899935582,
          diagramName: '通电自检',
          steps: [
            {
              stepId: 4453491899935583,
              stepName: '打开电源',
              actionMethod: 'turnOn',
              componentId: 4453491899935508,
              componentName: 'rb211_stru',
              state_: 1,
              duration: 2000,
              commentary: '解说词1',
              terminals: [
                {
                  componentId: 4453491899935580,
                  meshName: 'rb211_fan2',
                  state_: 1,
                  style_: {
                    rotation: {
                      x: 0,
                      y: 0,
                      z: 3.14,
                    },
                  },
                },
              ],
            },
            {
              stepId: 4453491899935584,
              stepName: '内存自检',
              componentId: 4453491899935508,
              componentName: '自检指示灯',
              state_: 1,
              duration: 3000,
              commentary: '解说词2',
              terminals: [
                {
                  meshName: 'rb211_fan2',
                  style_: {
                    position: {
                      x: -58.1731,
                      y: 4.4119,
                      z: 2.0482,
                    },
                    visibility: 0.1,
                    material: {
                      diffuseColor: {
                        r: 0.001,
                        g: 0.001,
                        b: 0.001,
                      },
                    },
                  },
                },
              ],
            },
            {
              stepId: 4453491899935585,
              stepName: '键盘自检',
              componentId: 4453491899935509,
              componentName: '装订',
              commentary: '解说词3',
              state_: 1,
              terminals: [],
            },
          ],
        },
        {
          diagramId: 4453491899935586,
          diagramName: '键盘指令',
          steps: [
            {
              stepId: 4453491899935583,
              stepName: '指令输入',
              beforeMethod: 'inputStateCheck',
              actionMethod: 'keyboardInput',
              afterMethod: 'Void',
              componentId: 4453491899935509,
              componentName: '装订',
              commentary: '解说词4',
              controller: [
                {
                  signalSource: 1,
                  signalAccept: 1,
                  clearSource: 1,
                  controlType: 1,
                  controlSet: [],
                },
              ],
              terminals: [],
            },
          ],
        },
      ],
      animationObject: [], // 动画对象
    };
  },
  mounted() {},
  methods: {
    /**
     * 模型准备完成事件
     */
    readyComplete() {
      const { diagrams } = this;

      const suspend = [];
      diagrams.forEach(({ diagramName, steps }) => {
        steps.forEach(
          ({
            commentary,
            stepName,
            actionMethod,
            duration,
            terminals,
            componentName,
          }) => {
            const interaction = {
              actionMethod: false,
              method: null,
              componentName: null,
            };
            // 如果需要交互,记录一下交互对象
            if (actionMethod) {
              interaction.actionMethod = true; // 是否需要交互
              interaction.method = actionMethod; // 交互操作的动作名
              interaction.componentName = componentName; // 操作的对象
            }

            // 循环场景，生成动画
            terminals.forEach(({ meshName, style_ }) => {
              this.packAnimationObject(
                diagramName,
                stepName,
                interaction,
                commentary,
                meshName,
                duration,
                style_,
                '',
                suspend,
              );
              suspend.push(duration);
            });
          },
        );
      });
    },

    /**
     * 打包动画对象
     *  diagramName, 场景名
     *  stepName, 步骤名
     *  interaction, 交互属性
     *  commentary, 解说词
     *  meshName, 模型名
     *  duration, 动画时间
     *  style_, 模型式样
     *  prefix = '', 动画属性名前缀
     *  suspend = [], 动画的中断时间
     */
    packAnimationObject(
      diagramName,
      stepName,
      interaction,
      commentary,
      meshName,
      duration,
      style_,
      prefix = '',
      suspend = [],
    ) {
      const propertyN = Object.keys(style_); // 动画属性值

      propertyN.forEach(key => {
        const propertyV = style_[key];

        if (key === 'material') {
          // 如果是材质属性
          this.packAnimationObject(
            diagramName,
            stepName,
            interaction,
            commentary,
            meshName,
            duration,
            propertyV,
            `${key}.`,
            suspend,
          );
        } else if (typeof propertyV === 'object') {
          const valueN = Object.keys(propertyV);
          valueN.forEach(keyV => {
            this.setAnimationObject(
              diagramName,
              stepName,
              suspend,
              duration,
              propertyV[keyV],
              commentary,
              interaction,
              `${prefix}${key}.${keyV}`,
              meshName,
            );
          });
        } else {
          this.setAnimationObject(
            diagramName,
            stepName,
            suspend,
            duration,
            propertyV,
            commentary,
            interaction,
            `${prefix}${key}`,
            meshName,
          );
        }
      });
    },
    /**
     * 设置动画对象
     */
    setAnimationObject(
      diagramName,
      stepName,
      suspend,
      duration,
      propertyV,
      commentary,
      interaction,
      property,
      meshName,
    ) {
      const { textBlockOptions, animationObject } = this; // 文本框设置，动画对象
      const { keys, animationTime, actualFrom } = this.generateKeyFrames(
        suspend,
        duration,
        propertyV,
      );

      animationObject.push({
        property, // 动画属性
        duration: animationTime, // 动画时间
        loop: false, // 是否循环动画
        subname: meshName, // 目标子模型名字
        keys, // 动画关键帧
        actualFrom, // 动画事假启动的帧
        animationEnd() {}, // 动画结束事件
        animationStart() {
          // 动画开始事件
          textBlockOptions.text = commentary;
        },
        animationBeforeStart: () => {
          // 动画开始之前事件
          if (interaction.actionMethod) {
            textBlockOptions.text = `${diagramName}——${stepName}`;

            this.turnOn(interaction.componentName);
            interaction.actionMethod = false;
          }
        },
      });
    },
    /**
     * 生成关键帧
     *  中断时间
     *  动画持续时间
     *  运动值
     */
    generateKeyFrames(suspend, duration, value) {
      const keys = [{ frame: 0, value: 0 }];
      let actualFrom = 0;
      suspend.forEach(time => {
        keys.push({ frame: (time / 1000) * 60, value: 0 });
        duration += time;
        actualFrom += time;
      });
      keys.push({
        frame: (duration / 1000) * 60,
        value,
      });
      return {
        keys, // 关键帧
        animationTime: duration / 1000, // 动画持续时间
        actualFrom: (actualFrom / 1000) * 60, // 动画实际启动帧
      };
    },
    turnOn(modelName) {
      // 暂停动画
      this.animationState = ANIMATIONSTATES.PAUSE;
      //   目标高亮，
      this.highlightMeshs.push({
        name: modelName,
        color: [0, 0, 1],
      });
      //   目标可点击
      this.actionMeshs.push(modelName);
    },
    // 点击事件
    pickUpTrigger() {
      // 移除事件
      this.actionMeshs.splice(0);
      // 移除高亮
      this.highlightMeshs.splice(0);
      //  动画开始
      this.animationState = ANIMATIONSTATES.RESTART;
    },
  },
};
</script>
