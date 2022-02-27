<script setup lang="ts">
import { useRoute } from 'vue-router';
import ArticleDetail from '../components/article/ArticleDetail.vue';

const route = useRoute();

const article = {
  id: route.params.id as string,
  title: '博客激情编写中',
  timestamp: new Date().getTime(),
  content: `
# 标题
> 哼哼哼，啊啊啊啊啊啊啊啊啊啊啊啊

## 二级标题

草，呜呜呜

草，呜呜呜草，呜呜呜草，呜呜呜草，呜呜呜草，呜呜呜草，呜呜呜草，呜呜呜草，呜呜呜草，呜呜呜草，呜呜

呜草，呜呜呜草，呜呜呜
`,
  author: {
    id: '0',
    name: 'Iori'
  }
};
</script>

<template>
  <ArticleDetail :article="article" />
</template>
