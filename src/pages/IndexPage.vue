<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../store';

import IndexBanner from '../components/IndexBanner.vue';
import ArticleList from '../components/article/ArticleList.vue';
import RecentTile from '../components/tiles/RecentTile.vue';
import TagTile from '../components/tiles/TagTile.vue';
import LinkTile from '../components/tiles/LinkTile.vue';

const store = useStore();
const articles = computed(() => store.state.article.articles);
</script>

<template>
  <IndexBanner />
  <ArticleList :articles="articles">
    <RecentTile />
    <TagTile />
    <LinkTile />
  </ArticleList>
</template>
