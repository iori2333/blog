<script setup lang="ts">
import { defineProps } from 'vue';
import '@vscode/codicons/dist/codicon.css';

const { name } = defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="codicon" :class="`codicon-${name}`" />
</template>
