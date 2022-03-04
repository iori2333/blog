<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { textColor } from '../../util/color';

const { name, color } = defineProps<{
  name: string;
  count?: number;
  color?: string;
}>();

const router = useRouter();

const onClick = () => router.push('/archive/tag/' + name);
</script>

<template>
  <span
    class="tag"
    :style="{
      backgroundColor: color,
      color: color ? textColor(color) : undefined
    }"
    @click="onClick"
  >
    {{ name }} {{ count ? count : '' }}
  </span>
</template>

<style scoped lang="scss">
.tag {
  width: fit-content;
  border: 1px var(--border-color) solid;
  padding: 2px 6px;
  font-size: 14px;
  border-radius: 2px;
  margin: 4px;
  break-inside: avoid;
  cursor: pointer;
}
</style>
