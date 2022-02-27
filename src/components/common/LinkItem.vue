<script setup lang="ts">
import { defineProps } from 'vue';
import SVGIcon from './SVGIcon.vue';

const { icon, href, target } = defineProps<{
  icon?: string;
  href?: string;
  target?: string;
}>();
</script>

<template>
  <a :href="href" :target="target">
    <SVGIcon v-if="icon" :name="icon" />
    <span>
      <slot />
    </span>
  </a>
</template>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-color);
  width: fit-content;
  line-height: 2rem;

  .codicon {
    padding-right: 6px;
  }

  span:hover {
    text-decoration: underline;
  }
}
</style>
