<template>
  <div class="puzzle-wrapper">
    <img :src="IconRefresh" class="refresh" @click="reset" alt="">
    <div class="img-bg" >
      <img :src="currentPuzzle.backImg" alt="">
    </div>
    <div class="img-block" :style="{ left: dragBlockStyle.left }">
      <img :src="currentPuzzle.blockImg" alt="">
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
      <div class="slider-tips">{{ sliderStatus === 'success' ? '验证通过' : '按住按钮完成验证' }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineModel } from "vue";
import IconDoubleRight from "../../assets/icons/double-right.svg";
import IconCheck from "../../assets/icons/check.svg";
import IconFail from "../../assets/icons/fail.svg";
import IconRefresh from "../../assets/icons/refresh.svg";
import type { SliderStatus, Props } from "./types";

// const props = withDefaults(defineProps<Props>(), {
//   width: 300,
// });
const emit = defineEmits<{
  (e: "onSuccess", status: boolean): void;
  (e: "onFail", status: boolean): void;
  (e: "onDrag"): void;
  (e: "onDragEnd"): void;
}>();

const verifyPass = defineModel({ default: false, type: Boolean });
// 滑块状态
const sliderStatus = ref<SliderStatus>("default");
// 获取元素实例
const drag = ref();
const sliderBlock = ref();
const sliderFill = ref();
const currentPuzzle = ref({
  backImg: '../../assets/images/bg/1.jpg',
  blockImg: '../../assets/images/bg-block/1.png',
  x: 120,
});
const dragBlockStyle = ref({
  left: "0px",
});
// 是否拖动滑块
const isDragging = ref(false);
//存储鼠标按下的x坐标
const startX = ref(0);
//存储移动的位置
let offsetX = ref(0);

const sliderInfo = [
  {
    backImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/59Cu4kNYM1mj7dhB9IAD0DrcPdgzXeAv/bg-1.jpg',
    blockImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/P6ffi1OdnJ0kUTgzj4Mek4d897XmvxKI/block-1.png',
    x: 120,
  },
  {
    backImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/1q5iWUnzfUOxRLE68LM27Ogm4uz8ctOg/bg-2.jpg',
    blockImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/hgLgLgxr0wzlHxAUFCF1QO6u4F8I8waj/block-2.png',
    x: 86,
  },
  {
    backImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/D5ILHWHJWu6I2PQ4ltCujxjkl5S4o0Io/bg-3.jpg',
    blockImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/X554G805mj9H58D3cv1FISOCq9kpwh5K/block-3.png',
    x: 150,
  },
  {
    backImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/sx4Wr4PDISAxe3DWwyxXK9Gp4PkPXoUm/bg-4.jpg',
    blockImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/g1EzR0l04lwvPpa43pQjsLeTdjSdHODF/block-4.png',
    x: 142,
  },
  {
    backImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/zukCx9wdRl4Ld39rN8cXJqofetp4aFLH/bg-5.jpg',
    blockImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/hKi4kiBdGe6SMMPtQlOcrf8RYKkVxcdy/block-5.png',
    x: 186,
  },
  {
    backImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/89rCBs76bghwC0QIsxfXxfjUxQTwT1u5/bg-6.jpg',
    blockImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/MRFz26fh9AL1CmjlwXBMxEd4pRN6B8XR/block-6.png',
    x: 155,
  },
  {
    backImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/lmxXBSBy76cUgDCWUWuslWvHwOICtm3x/bg-7.jpg',
    blockImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/X91NtOkw0FugeDSyi3l9nRuRr2d2O9XE/block-7.png',
    x: 153,
  },
  {
    backImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/4CUht3QeNkqe93JFX275TfBunVfbb3Wh/bg-8.jpg',
    blockImg: 'http://lc-uwPGwsAs.cn-n1.lcfile.com/uezXcJVHACn8x9sxtH5eGao3OIAJM05z/block-8.png',
    x: 150,
  },
]

const onDrag = (event: MouseEvent) => {
  if (!isDragging.value) return;
  // 计算移动的位置
  offsetX.value = event.pageX - startX.value;
  //判断移动距离是否正确
  if (offsetX.value < 0 || offsetX.value > 261) return;
  //修改可移动盒子的 x坐标
  sliderBlock.value.style.transform = `translateX(${offsetX.value}px)`;
  // 设置被验证滑块left值
  dragBlockStyle.value.left = `${offsetX.value}px`;
  // 设置进度条长度
  sliderFill.value.style.width = offsetX.value + 25 + "px";
  emit('onDrag');
};

const startDrag = (event: MouseEvent) => {
  if (verifyPass.value) return;
  isDragging.value = true;
  startX.value = event.clientX;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", endDrag);
};

const setDefault = () => {
  sliderStatus.value = "default";
  sliderBlock.value.style.transform = "translateX(0px)";
  dragBlockStyle.value.left = "5px";
  sliderFill.value.style.width = "0px";
};

const endDrag = () => {
  isDragging.value = false;
  emit('onDragEnd');
  // 误差范围2px
  if (offsetX.value >= currentPuzzle.value.x - 2 && offsetX.value <= currentPuzzle.value.x + 2) {
    // console.log("验证成功");
    verifyPass.value = true;
    sliderStatus.value = "success";
    emit("onSuccess", verifyPass.value);
  } else {
    verifyPass.value = false;
    emit("onFail", verifyPass.value);
    sliderStatus.value = "fail";
    setTimeout(() => {
      // 验证失败 滑块和被验证块恢复坐标
      setDefault();
      init();
    }, 1000);
  }
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", endDrag);
};

const init = () => {
  const randomIndex = Math.floor(Math.random() * 8);
  currentPuzzle.value = sliderInfo[randomIndex];
  dragBlockStyle.value.left = '5px';
};

const reset = () => {
  init();
  verifyPass.value = false;
  setDefault();
};

defineExpose({
  onReset: reset,
  modelValue: verifyPass.value
});

onMounted(() => {
  init();
});

defineOptions({
  name: "PuzzleVerify",
})
</script>

<style scoped>
.puzzle-wrapper {
  position: relative;
  width: 300px;
  height: 150px;
  .refresh {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 24px;
    z-index: 9;
    cursor: pointer;
    &:hover {
      transform: rotate(-180deg);
      transition: all 0.5s;
    }
  }
  .img-content {
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

  .img-bg {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img-block {
    width: 15%;
    position: absolute;
    left: 0;
    top: 0;
    img {
      width: 100%;
      height: 100%;
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
      border-radius: 8px;
      cursor: pointer;
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
  .drag-success {
    background-color: #e8f5e9;
    border: 1px solid #4caf50;
    .slider-fill {
      background-color: #81c784;
    }
    .slider-thumb {
      background-color: #00c853;
    }
    .slider-tips {
      color: #4caf50;
    }
  }
}
</style>
