<script setup lang="ts">
import ArticleDetail from '../components/article/ArticleDetail.vue';
import { Article } from '../models/article';

const content = `
# Iori

![me](https://avatars.githubusercontent.com/u/81511507?v=4)

> 電子の海を漂うオタク

南京大学2019级通信工程本科生，废物是也。
`.trim();

const article: Article = {
  id: '-1',
  title: '关于我',
  content,
  author: 'Iori',
  timestamp: new Date(2022, 2, 28, 3, 8).getTime()
};
</script>

<template>
  <ArticleDetail :article="article" />
</template>
