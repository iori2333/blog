<script setup lang="ts">
import { defineProps } from 'vue';

const { title, sticky, top } = defineProps<{
  title?: string;
  onClick?: () => void;
  sticky?: boolean;
  top?: string;
}>();
</script>

<template>
  <div
    class="article-container"
    :style="{
      position: sticky ? 'sticky' : undefined,
      top
    }"
  >
    <div v-if="title" class="title" @click="onClick">{{ title }}</div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.article-container {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px var(--border-color) solid;
  border-radius: 4px;
  background-color: #fff;
  transition: 0.2s;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 10px;
    width: fit-content;
    &:hover {
      text-decoration: underline dashed;
      cursor: pointer;
    }
  }
}
</style>
