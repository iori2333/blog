<script setup lang="ts">
import { defineProps } from 'vue';

import { ArticlePreview } from '../../models/article';
import ArticleTile from '../article/ArticleTile.vue';
import SkeletonCard from '../common/SkeletonCard.vue';

const { articles } = defineProps<{
  articles: ArticlePreview[];
}>();
</script>

<template>
  <div class="article-wrapper">
    <div v-if="articles.length" style="flex: 1">
      <ArticleTile
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      />
    </div>
    <SkeletonCard v-if="!articles.length" style="flex: 1" />
    <div class="tile-container">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-wrapper {
  display: flex;
  justify-content: space-between;
}

.tile-container {
  flex-direction: column;
  width: 300px;
  margin-left: 10px;
}

@media (max-width: 1020px) {
  .tile-container {
    display: none;
  }
}
</style>
