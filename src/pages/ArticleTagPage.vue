<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useStore } from '../store';

import TagTile from '../components/tiles/TagTile.vue';
import ArticleList from '../components/article/ArticleList.vue';
import LinkTile from '../components/tiles/LinkTile.vue';
import RecentTile from '../components/tiles/RecentTile.vue';

const store = useStore();
const route = useRoute();

const articles = computed(() => {
  const tag = route.params.tag as string;
  if (tag == 'all') {
    return store.state.article.articles;
  }
  return store.state.article.articles.filter(article =>
    article.tags?.includes(tag)
  );
});
</script>

<template>
  <TagTile />
  <ArticleList :articles="articles">
    <RecentTile />
    <LinkTile />
  </ArticleList>
</template>
