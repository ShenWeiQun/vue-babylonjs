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
            v-for="(option,index) in buttonOptions"
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
          property="rotation.z"
          :duration="5"
          :end="Math.PI * 2"
          :loop="false"
          subname="rb211_fan2"
          @stop="pickUpTrigger"
          :animatable="animatable"
        />
        <Animation
          property="position.x"
          :duration="10"
          :loop="false"
          subname="rb211_fan2"
        >
          <Key
            frame="0%"
            :value="0"
          />
          <Key
            frame="50%"
            :value="0"
          />
          <Key
            frame="100%"
            :value="200"
          />
        </Animation>
        <Animation
          property="position.y"
          :duration="20"
          :loop="false"
          subname="rb211_fan2"
        >
          <Key
            frame="0%"
            :value="0"
          />
          <Key
            frame="50%"
            :value="0"
          />
          <Key
            frame="100%"
            :value="200"
          />
        </Animation>
      </Asset>
    </Scene>
  </div>
</template>

<script>
import { HORIZONTALALIGNMENT, VERTICALALIGNMENT } from '../src/index';

export default {
  name: 'Dashboard',
  computed: {
    buttonOptions() {
      const { diagrams } = this;
      return diagrams.map(item => ({ text: item.diagramName, paddingTop: '10px' }));
    },
  },
  data() {
    return {
      animatable: {},
      debug: false,
      actionMeshs: ['rb211_stru'],
      highlightMeshs: [
        {
          name: 'rb211_stru',
          color: [0, 0, 1],
        },
      ],
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
              terminals: [
                {
                  componentId: 4453491899935580,
                  componentName: '电源指示灯1',
                  state_: 1,
                  style_: {
                    rotate: 90,
                    color: 'green',
                    transparent: 100,
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
              style_: {
                color: 'green',
              },
            },
            {
              stepId: 4453491899935585,
              stepName: '键盘自检',
              componentId: 4453491899935509,
              componentName: '装订',
              state_: 1,
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
              controller: [
                {
                  signalSource: 1,
                  signalAccept: 1,
                  clearSource: 1,
                  controlType: 1,
                  controlSet: [],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {

  },
  methods: {
    pickUpTrigger(ev) {
      console.log('11111', ev);
    },
  },
};
</script>
