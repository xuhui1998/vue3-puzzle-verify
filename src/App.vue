<template>
  <div class="content">
    <PuzzleVerify ref="puzzleVerify" type="popover"></PuzzleVerify>
    <button @click="openModal">open modal</button>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const puzzleVerify = ref()

  const openModal = () => {
    puzzleVerify.value.open()
  };
</script>

<style>
  .content {
    padding: 300px 500px 0;
  }
</style>
