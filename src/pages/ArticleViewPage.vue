<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '../store';

import ArticleDetail from '../components/article/ArticleDetail.vue';
import PageHeader from '../components/PageHeader.vue';
import SkeletonCard from '../components/SkeletonCard.vue';

const route = useRoute();
const store = useStore();

const article = computed(() =>
  store.state.article.articles.find(a => a.id == route.params.id)
);
</script>

<template>
  <PageHeader :title="article?.title ?? 'null?'" />
  <ArticleDetail v-if="article" :article="article" />
  <SkeletonCard v-else />
</template>
