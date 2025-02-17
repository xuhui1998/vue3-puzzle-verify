<template>
  <div class="modal-mask" @click="handleMaskClick">
    <div class="modal-content">
      <div class="modal-header">
        <span class="modal-close" @click="handleClose"></span>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineModel } from 'vue';

const emit = defineEmits(['update:visible']);

// 弹窗是否显示
const visible = defineModel({ type: Boolean, default: false });

// 显示弹窗的方法
const showModal = (config = {}) => {
  visible.value = true;
};

// 隐藏弹窗的方法
const handleClose = () => {
  emit('update:visible', false);
};

// 点击遮罩层隐藏弹窗
const handleMaskClick = (event) => {
  if (event.target === event.currentTarget) {
    handleClose();
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 12px 20px 20px;
  width: 300px;
}

.modal-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  height: 20px;
  position: relative;
}

.modal-close {
  position: absolute;
  color: #aaa;
  width: 18px;
  height: 18px;
  right: -5px;
  cursor: pointer;
  &::after, &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 2px;
    background-color: currentColor;
  }
  &:hover {
    color: #999;
  }
}
.modal-close::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.modal-close::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>