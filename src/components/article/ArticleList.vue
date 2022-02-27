<script setup lang="ts">
import { defineProps } from 'vue';

import { Article } from '../../models/article';
import ArticleTile from '../article/ArticleTile.vue';
import RecentTile from '../tiles/RecentTile.vue';
import TagTile from '../tiles/TagTile.vue';
import LinkTile from '../tiles/LinkTile.vue';

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
    <div class="tile-container">
      <RecentTile />
      <TagTile />
      <LinkTile />
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
