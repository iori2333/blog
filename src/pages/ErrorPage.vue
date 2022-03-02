<script setup lang="ts">
import { onMounted } from 'vue';
import { useToast } from '../hooks';

import PageHeader from '../components/common/PageHeader.vue';
import CardContainer from '../components/common/CardContainer.vue';

const toast = useToast();

onMounted(() => toast.error('Request failed with status code 404'));
</script>

<template>
  <PageHeader />
  <CardContainer class="error-page">
    <div class="emoji">&#129300;</div>
    <div class="title">404 Not Found</div>
    <div class="description">We're Lost</div>
  </CardContainer>
</template>

<style scoped lang="scss">
.error-page {
  justify-content: center;
  align-items: center;
  height: max-content;

  .emoji {
    user-select: none;
    font-size: 120px;
  }

  .title {
    font-size: 60px;
    text-decoration: underline;
    padding: 20px;
  }

  @media (max-width: 720px) {
    .title {
      font-size: 32px;
    }
  }
}
</style>
