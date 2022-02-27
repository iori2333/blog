<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ArticleDetail from '../components/article/ArticleDetail.vue';
import { Article } from '../models/article';
import { get } from '../util/network';
import SkeletonCard from '../components/SkeletonCard.vue';

const article = ref(null as Article | null);

onMounted(() => {
  get('/static/me.md').then(
    r =>
      (article.value = {
        id: '-1',
        title: '关于我',
        content: r.data,
        author: 'Iori',
        timestamp: new Date(2022, 2, 28, 3, 8).getTime()
      })
  );
});
</script>

<template>
  <ArticleDetail v-if="article" :article="article" />
  <SkeletonCard v-else />
</template>
