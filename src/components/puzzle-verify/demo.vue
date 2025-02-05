<template>
  <div class="puzzle-wrapper">
    <div class="img-content" :style="{ backgroundImage: `url(${backImg})` }">
      <!-- 遮罩块 -->
      <div :class="['bg-block', shapeClass]" :style="bgBlockStyle"></div>
      <!-- 拖动块 -->
      <div :class="['drag-block', shapeClass]" :style="dragBlockStyle"></div>
    </div>

    <div :class="['drag', `drag-${sliderStatus}`]" ref="drag">
      <!-- 已拖动的滑块填充色 -->
      <div class="slider-fill" ref="sliderFill"></div>
      <!-- 滑块 -->
      <div class="slider-thumb" ref="sliderBlock" @mousedown="startDrag">
        <img
          v-if="sliderStatus === 'default'"
          :src="IconDoubleRight"
          class="slider-icon"
        />
        <img
          v-if="sliderStatus === 'success'"
          :src="IconCheck"
          class="slider-icon"
        />
        <img
          v-if="sliderStatus === 'fail'"
          :src="IconFail"
          class="slider-icon"
        />
      </div>
      <!-- 文字提示 -->
      <div class="slider-tips">{{ sliderTips }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineModel } from "vue";
import IconDoubleRight from "../../assets/icons/double-right.svg";
import IconCheck from "../../assets/icons/check.svg";
import IconFail from "../../assets/icons/fail.svg";
import type { SliderStatus, Props } from "./types";

const props = withDefaults(defineProps<Props>(), {
  width: 300,
});

const shapeClasses = [
  "triangle",
  "heart",
  "trapezoid",
  "pentagon",
  "bubble",
  "arrow",
  'shield',
];

const verifyPass = defineModel({ default: false, type: Boolean });
// 滑块状态
const sliderStatus = ref<SliderStatus>("default");
// 获取元素实例
const drag = ref();
const sliderBlock = ref();
const sliderFill = ref();
const sliderTips = ref('按住按钮完成验证');
const backImg = ref();
const shapeClass = ref();
const bgBlockStyle = ref({
  left: "0px",
  top: "0px",
});
// 当前移动的x轴坐标
const currentX = ref(0);
// 当前移动的x轴坐标
const currentY = ref(0);
const dragBlockStyle = ref({
  backgroundPosition: "0px 0px",
  top: "0px",
  left: "0px",
});

// 是否拖动滑块
const isDragging = ref(false);
//存储鼠标按下的x坐标
const startX = ref(0);
//存储移动的位置
let offsetX = ref(0);
// 鼠标拖动时的移动轨迹
let track = [];

// 随机生成要拼接的区域x轴的位置
currentX.value = 150 + Math.random() * 100;

const onDrag = (event: MouseEvent) => {
  if (!isDragging.value) return;
  // 计算移动的位置
  offsetX.value = event.pageX - startX.value;
  // 鼠标轨迹存入
  track.push({ x: event.pageX, y: event.pageY });
  //判断移动距离是否正确
  if (offsetX.value < 0 || offsetX.value > 261) return;
  //修改可移动盒子的 x坐标
  sliderBlock.value.style.transform = `translateX(${offsetX.value}px)`;
  // 设置被验证滑块left值
  dragBlockStyle.value.left = `${offsetX.value}px`;
  // 设置进度条长度
  sliderFill.value.style.width = offsetX.value + 25 + "px";
};

const startDrag = (event: MouseEvent) => {
  if (verifyPass.value) return;
  isDragging.value = true;
  startX.value = event.clientX;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", endDrag);
};

const endDrag = () => {
  isDragging.value = false;
  // 误差范围2px
  if (offsetX.value >= currentX.value - 2 && offsetX.value <= currentX.value + 2) {
    // 验证成功 蒙层出现
    console.log("验证成功");
    verifyPass.value = true;
    sliderStatus.value = "success";
    sliderTips.value = '验证成功';
  } else {
    verifyPass.value = false;
    sliderStatus.value = "fail";
    setTimeout(() => {
      sliderStatus.value = "default";
      // 验证失败 滑块和被验证块恢复坐标
      sliderBlock.value.style.transform = "translateX(0px)";
      dragBlockStyle.value.left = "5px";
      sliderFill.value.style.width = "0px";
      init();
    }, 1000);

    track = [];
  }
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", endDrag);
};

const generateRandomShape = () => {
  const randomIndex = Math.floor(Math.random() * shapeClasses.length);
  const randomShapeClass = shapeClasses[randomIndex];
  shapeClass.value = randomShapeClass;
};

const init = () => {
  backImg.value = `/src/images/back-${Math.floor(Math.random() * 3 + 1)}.jpg`;
  // 随机生成要拼接的区域content的位置
  currentX.value = 150 + Math.random() * 100;
  currentY.value = Math.random() * 110;
  bgBlockStyle.value = { left: `${currentX.value}px`, top: `${currentY.value}px` };
  dragBlockStyle.value.backgroundPosition = `-${currentX.value}px -${currentY.value}px`;
  dragBlockStyle.value.top = `${currentY.value}px`;
  dragBlockStyle.value.left = '5px';
  generateRandomShape();
};

onMounted(() => {
  init();
});
</script>

<style scoped>
.puzzle-wrapper {
  position: relative;
  .img-content {
    width: 300px;
    height: 150px;
    background-size: 100% 100%;
    .bg-block {
      position: absolute;
      top: 50px;
      left: 250px;
      width: 40px;
      height: 40px;
      opacity: 0.8;
      box-shadow: inset 0px 0px 16px 10px #000000;
    }
    .drag-block {
      width: 40px;
      height: 40px;
      background-image: inherit;
      background-repeat: inherit;
      background-size: 300px 150px;
      background-position: -250px -50px;
      position: absolute;
      top: 50px;
      left: 5px;
    }
  }

  .drag {
    width: 300px;
    height: 40px;
    background-color: #e1f5fe;
    margin-top: 10px;
    position: relative;
    border-radius: 8px;
    border: 1px solid #2962ff;
    .slider-fill {
      border-radius: 10px;
      position: absolute;
      width: 0px;
      height: 100%;
      background-color: #4fc3f7;
      opacity: 0.3;
    }
    .slider-thumb {
      width: 40px;
      height: 40px;
      background-color: #2962ff;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 6px;
      .slider-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 16px;
        height: 16px;
        transform: translate(-50%, -50%);
        -moz-user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        pointer-events: none;
      }
    }
    .slider-tips {
      margin: 0 auto;
      line-height: 40px;
      text-align: center;
      user-select: none;
      color: #3e6ffb;
    }
  }
  .drag-fail {
    background-color: #ffebee;
    border: 1px solid #f44336;
    .slider-fill {
      background-color: #e57373;
    }
    .slider-thumb {
      background-color: #d50000;
    }
    .slider-tips {
      color: #f44336;
    }
  }
  /* 三角形 */
  .triangle {
    clip-path: polygon(50% 25%, 0% 100%, 100% 100%);
  }

  /* 盾牌 */
  .shield {
    clip-path: polygon(50% 0%, 91% 23%, 80% 76%, 50% 100%, 20% 76%, 9% 23%);
  }

  /* 五角星 */
  .heart {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }

  /* 梯形 */
  .trapezoid {
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  }

  /* 五边形 */
  .pentagon {
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  }

  .bubble {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  }
  /* 箭头 */
  .arrow {
    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
  }
}
</style>
