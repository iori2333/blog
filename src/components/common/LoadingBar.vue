<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const progress = ref(0);
const interval = ref(undefined as number | undefined);
onMounted(() => {
  interval.value = setInterval(() => {
    const curr = progress.value;
    let speed: number;
    if (curr < 45) {
      speed = 10;
    } else if (curr < 70) {
      speed = 5;
    } else if (curr < 85) {
      speed = 2;
    } else if (curr < 95) {
      speed = 1;
    } else if (curr < 99) {
      speed = 0.5;
    } else {
      speed = 0;
      clearInterval(interval.value);
      interval.value = undefined;
    }
    progress.value += speed;
  }, 10);
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>

<template>
  <div class="loading-bar" :style="{ width: `${progress}%` }"></div>
</template>

<style scoped lang="scss">
.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background-color: var(--primary-color);
  box-shadow: 0 1px 2px var(--primary-color);
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  &.done {
    width: 100% !important;
    transition: 0.2s;
  }

  &.hidden {
    opacity: 0;
    transition: 0.2s;
  }
}
</style>
