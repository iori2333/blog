<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Article } from '../models/article';
import { searchArticles } from '../api/article';
import { useToast } from '../hooks';

import TagTile from '../components/tiles/TagTile.vue';
import ArticleList from '../components/article/ArticleList.vue';
import RecentTile from '../components/tiles/RecentTile.vue';
import LinkTile from '../components/tiles/LinkTile.vue';
import PageHeader from '../components/common/PageHeader.vue';

const route = useRoute();
const toast = useToast();

const keyword = computed(() => route.params.keyword as string);
const articles = ref([] as Article[]);

watch(keyword, () => {
  document.title = `Search: ${keyword.value}`;
});

watch(keyword, () =>
  searchArticles(keyword.value)
    .then(res => (articles.value = res))
    .catch(err => toast.error(err.message))
);
</script>

<template>
  <PageHeader :title="keyword" />
  <ArticleList :articles="articles">
    <RecentTile />
    <LinkTile />
    <TagTile />
  </ArticleList>
</template>
