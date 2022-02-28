<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import SVGIcon from './common/SVGIcon.vue';

const hidden = ref(document.documentElement.scrollTop == 0);
const onClick = () => (document.documentElement.scrollTop = 0);
const onScroll = () => (hidden.value = document.documentElement.scrollTop == 0);

onMounted(() => document.addEventListener('scroll', onScroll));
onBeforeUnmount(() => document.removeEventListener('scroll', onScroll));
</script>

<template>
  <button class="back-top" @click="onClick" :class="hidden ? 'hidden' : ''">
    <SVGIcon name="arrow-up" size="72px" />
  </button>
</template>

<style scoped lang="scss">
.back-top {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 100;
  border-radius: 50%;
  border: 1px var(--border-color) solid;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  transition: 0.2s;
  opacity: 1;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    .codicon {
      color: var(--primary-color);
    }
  }

  &.hidden {
    opacity: 0;
    cursor: auto;
  }
  .codicon {
    font-size: 24px;
  }
}
</style>
