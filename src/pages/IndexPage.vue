<script setup lang="ts">
import IndexBanner from '../components/IndexBanner.vue';
import ArticleList from '../components/article/ArticleList.vue';

const articles = [
  {
    title: '博客激情编写中',
    timestamp: new Date().getTime(),
    content: `哼哼哼，啊啊啊啊啊啊啊啊啊啊啊啊`,
    author: {
      id: '0',
      name: 'Iori'
    }
  }
];
</script>

<template>
  <IndexBanner />
  <ArticleList :articles="articles" />
</template>
