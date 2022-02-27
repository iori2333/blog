<script setup lang="ts">
import { defineProps } from 'vue';

import CardContainer from '../common/CardContainer.vue';
import { Article } from '../../models/article';
import ArticleTile from '../article/ArticleTile.vue';
import RecentTile from '../tiles/RecentTile.vue';
import TagTile from '../tiles/TagTile.vue';

const { articles } = defineProps<{
  articles: Article[];
}>();
</script>

<template>
  <div class="article-wrapper">
    <div style="flex: 1">
      <ArticleTile
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      />
    </div>
    <div class="detail-container">
      <RecentTile />
      <TagTile />
      <CardContainer sticky top="64px" title="Links">Link1</CardContainer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-wrapper {
  display: flex;
  justify-content: space-between;
}

.detail-container {
  flex-direction: column;
  width: 300px;
  margin-left: 10px;
}

@media (max-width: 1020px) {
  .detail-container {
    display: none;
  }
}
</style>
