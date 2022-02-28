<script setup lang="ts">
import { computed, defineProps } from 'vue';
import SVGIcon from './SVGIcon.vue';
import { textColor } from '../../util/color';

const { message, level } = defineProps<{
  message: string;
  level: 'warning' | 'error' | 'info';
}>();

const color = computed(() => {
  switch (level) {
    case 'warning':
      return '#ffc107';
    case 'error':
      return '#dc3545';
    case 'info':
      return '#17a2b8';
    default:
      return '#17a2b8';
  }
});

const icon = computed(() => {
  switch (level) {
    case 'warning':
      return 'warning';
    case 'error':
      return 'error';
    case 'info':
      return 'info';
    default:
      return 'info';
  }
});
</script>

<template>
  <div class="toast-container">
    <div
      class="toast-message"
      :style="{ backgroundColor: color, color: textColor(color) }"
    >
      <SVGIcon :name="icon" /> {{ message }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.toast-container {
  position: fixed;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 64px;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.4s;
  .toast-message {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s;

    .codicon {
      margin-right: 4px;
    }

    &:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    }
  }

  &.visible {
    opacity: 1;
  }
}
</style>
