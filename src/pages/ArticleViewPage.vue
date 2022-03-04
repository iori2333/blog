<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Article } from '../models/article';
import { useToast } from '../hooks';
import { fetchArticle } from '../api/static';

import ArticleDetail from '../components/article/ArticleDetail.vue';
import PageHeader from '../components/common/PageHeader.vue';
import SkeletonCard from '../components/common/SkeletonCard.vue';

const route = useRoute();
const toast = useToast();

const article = ref(null as Article | null);
watch(
  () => route.params.id,
  () => {
    const id = route.params.id;
    if (!id) {
      return;
    }
    fetchArticle(id as string)
      .then(res => (article.value = res))
      .catch(err => toast.error(err.message));
  },
  { immediate: true }
);

watch(
  article,
  () => {
    document.title = article.value?.title ?? 'Loading...';
  },
  { immediate: true }
);
</script>

<template>
  <PageHeader :title="article?.title ?? 'Loading...'" />
  <ArticleDetail v-if="article" :article="article" />
  <SkeletonCard v-else />
</template>
