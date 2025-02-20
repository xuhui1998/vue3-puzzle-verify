<template>
  <div class="content">
    <div>111</div>
    <PuzzleVerify ref="puzzleVerifyRef" type="insert"></PuzzleVerify>
    <button @click="openModal">open modal</button>
    <button @click="onReset">reset</button>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const puzzleVerifyRef = ref()

  const openModal = () => {
    puzzleVerifyRef.value.open()
  };

  const onReset = () => {
    puzzleVerifyRef.value.reset()
  };
</script>

<style>
  .content {
    padding: 300px 500px 0;
  }
</style>
