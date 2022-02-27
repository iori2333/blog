<script setup lang="ts">
import { defineProps } from 'vue';
import SVGIcon from './SVGIcon.vue';
const { icon, label, onClick } = defineProps<{
  icon?: string;
  label?: string;
  onClick?: (e: MouseEvent) => void;
  size?: string;
}>();
</script>

<template>
  <button class="icon-button" @click="onClick">
    <SVGIcon v-if="icon" :name="icon" :style="{ fontSize: size }" />
    <div class="button-text" v-if="label" :style="{ fontSize: size }">
      {{ label }}
    </div>
  </button>
</template>

<style scoped lang="scss">
.icon-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  margin: 4px;
  transition: all 0.2s;
  border-radius: 4px;
  border: none;
  background: none;
  width: fit-content;

  .button-text {
    padding-left: 6px;
  }

  &:hover {
    color: var(--primary-color);
    cursor: pointer;
  }
}
</style>
