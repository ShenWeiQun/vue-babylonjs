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
      <Box @pickUpTrigger="pickUpTrigger" />
      <Asset
        src="http://dev.chimeraprime.com/jetengine/assets/jetEngine2.babylon"
        :model-state="modelState"
        :register-action="true"
        :action-meshs="actionMeshs"
        :highlight-meshs="highlightMeshs"
        @pickUpTrigger="pickUpTrigger"
      >
        <Animation
          v-for="(animation, index) in animationObject"
          :key="index"
          :property="animation.property"
          :duration="animation.duration"
          :loop="animation.loop"
          :subname="animation.subname"
          :actual-from="animation.actualFrom"
          @animationEnd="animation.animationEnd"
          @animationStart="animation.animationStart"
          @animationBeforeStart="animation.animationBeforeStart"
          :animation-state="animationState"
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
      const { diagrams } = this;
      return diagrams.map(item => ({
        text: item.diagramName,
        paddingTop: '10px',
      }));
    },
  },
  data() {
    return {
      animatable: {},
      debug: false,
      animationState: ANIMATIONSTATES.PLAY,
      actionMeshs: [],
      highlightMeshs: [],
      modelState: [
        {
          name: 'rb211_stru', // 模型名字
          position: [-58.1731, 4.4119, 2.0482], // 模型位置
          rotation: [0, 0, 0], // 模型旋转
          scaling: [1.0, 1.0, 1.0], // 模型缩放
          material: {
            // 模型材质
            diffuse: [1.0, 1.0, 1.0], // 模型漫反射颜色
            alpha: 1.0, // 模型透明度
          },
        },
      ],
      buttonPanel: {
        horizontalAlignment: HORIZONTALALIGNMENT.HORIZONTAL_ALIGNMENT_LEFT,
        background: 'green',
        left: '30px',
        width: '200px',
      },
      textBlockOptions: {
        text: '词排行榜，引领热...',
        width: '400px',
        height: '200px',
      },
      textBlockPanel: {
        horizontalAlignment: HORIZONTALALIGNMENT.HORIZONTAL_ALIGNMENT_LEFT,
        verticalAlignment: VERTICALALIGNMENT.VERTICAL_ALIGNMENT_TOP,
        top: '30px',
        left: '30px',
        width: '400px',
        height: '200px',
        background: 'green',
      },
      diagrams: [
        {
          diagramId: 4453491899935582,
          diagramName: '通电自检',
          steps: [
            {
              stepId: 4453491899935583,
              stepName: '打开电源',
              actionMethod: 'turnOn',
              componentId: 4453491899935508,
              componentName: '面板电源开头',
              state_: 1,
              duration: 2000,
              commentary: '解说词1',
              terminals: [
                {
                  componentId: 4453491899935580,
                  componentName: 'rb211_fan2',
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
                  componentName: 'rb211_fan2',
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
      animationObject: [],
    };
  },
  mounted() {
    const { diagrams, textBlockOptions } = this;

    const suspend = [];
    diagrams.forEach(({ diagramName, steps }) => {
      steps.forEach(
        ({ commentary, stepName, actionMethod, duration, terminals }) => {
          textBlockOptions.text = `${diagramName}——${stepName}`;

          // 生成动画
          // 启动动画事件
          // 监听动画完成事件
          // 监听动画开始事件

          // 交互
          // 点击事件 ，目标高亮，点击目标点后，高亮消失，动画开始
          const interaction = { actionMethod: false, method: null };
          if (actionMethod === 'turnOn') {
            interaction.actionMethod = true;
            interaction.method = actionMethod;
          }

          terminals.forEach(({ componentName, style_ }) => {
            this.packAnimationObject(
              interaction,
              actionMethod,
              commentary,
              componentName,
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
  methods: {
    turnOn(modelName) {
      // 点击事件 ，

      // 停止动画

      this.animationState = ANIMATIONSTATES.PAUSE;
      //   目标高亮，
      this.highlightMeshs.push({
        name: modelName,
        color: [0, 0, 1],
      });
      //   目标可点击
      this.actionMeshs.push(modelName);
    },
    packAnimationObject(
      interaction,
      actionMethod,
      commentary,
      componentName,
      duration,
      style_,
      prefix = '',
      suspend = [],
    ) {
      let propertyN = Object.keys(style_);
      const { textBlockOptions, animationObject } = this;

      propertyN.forEach(key => {
        let propertyV = style_[key];

        if (key === 'material') {
          // 如果是材质属性
          this.packAnimationObject(
            interaction,
            actionMethod,
            commentary,
            componentName,
            duration,
            propertyV,
            `${key}.`,
            suspend,
          );
        } else if (typeof propertyV === 'object') {
          let valueN = Object.keys(propertyV);

          valueN.forEach(keyV => {
            const { keys, animationTime, actualFrom } = this.insertPauseFrame(
              suspend,
              duration,
              propertyV[keyV],
            );

            animationObject.push({
              property: `${prefix}${key}.${keyV}`,
              duration: animationTime,
              loop: false,
              subname: componentName,
              keys,
              actualFrom,
              animationEnd() {},
              animationStart: () => {
                textBlockOptions.text = commentary;
              },
              animationBeforeStart: () => {
                if (interaction.actionMethod) {
                  textBlockOptions.text = '请按指令点击按钮';

                  this.turnOn('rb211_stru');
                  interaction.actionMethod = false;
                }
              },
            });
          });
        } else {
          const { keys, animationTime, actualFrom } = this.insertPauseFrame(
            suspend,
            duration,
            propertyV,
          );

          animationObject.push({
            property: `${prefix}${key}`,
            duration: animationTime,
            loop: false,
            subname: componentName,
            keys,
            actualFrom,
            animationEnd() {},
            animationStart() {
              textBlockOptions.text = commentary;
            },
            animationBeforeStart: () => {
                if (interaction.actionMethod) {
                  textBlockOptions.text = '请按指令点击按钮';

                  this.turnOn('rb211_stru');
                  interaction.actionMethod = false;
                }
              },
          });
        }
      });
    },
    insertPauseFrame(suspend, duration, value) {
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
        keys,
        animationTime: duration / 1000,
        actualFrom: (actualFrom / 1000) * 60,
      };
    },
    pickUpTrigger(ev) {
      console.log('11111', ev);

      //   高亮消失，
      //   动画开始

      this.actionMeshs.splice(0);
      this.highlightMeshs.splice(0);
      this.animationState = ANIMATIONSTATES.RESTART;
    },
  },
};
</script>
