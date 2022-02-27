<script setup lang="ts">
import CardContainer from '../common/CardContainer.vue';
import LinkItem from '../common/LinkItem.vue';

const recent = [
  {
    title: '文章标题',
    link: '#'
  },
  {
    title: '文章标题',
    link: '#'
  },
  {
    title: '文章标题',
    link: '#'
  }
];
</script>

<template>
  <CardContainer class="recent-tile" title="Recent">
    <LinkItem v-for="(item, index) in recent" :key="index" :href="item.link">
      {{ item.title }}
    </LinkItem>
  </CardContainer>
</template>
