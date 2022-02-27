<script setup lang="ts">
import { defineProps } from 'vue';
import CardContainer from './common/CardContainer.vue';

const { repeat } = defineProps<{
  repeat?: number;
}>();

const arr = Array(repeat ?? 3);
</script>

<template>
  <CardContainer>
    <div class="skeleton" v-for="(_, index) in arr" :key="index" />
  </CardContainer>
</template>

<style scoped lang="scss">
div {
  .skeleton {
    margin-bottom: 10px;
    height: 20px;
    background: rgba($color: #000000, $alpha: 0.1);
    animation: blink 1.5s infinite;
  }

  &:last-child {
    width: 80%;
  }

  @keyframes blink {
    0% {
      background-color: rgba($color: #000000, $alpha: 0.1);
    }

    50% {
      background-color: rgba($color: #000000, $alpha: 0.15);
    }

    100% {
      background-color: rgba($color: #000000, $alpha: 0.1);
    }
  }
}
</style>
