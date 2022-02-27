<script setup lang="ts">
import CardContainer from '../common/CardContainer.vue';

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
    <a v-for="(item, index) in recent" :key="index" :href="item.link">
      {{ item.title }}
    </a>
  </CardContainer>
</template>

<style scoped lang="scss">
.recent-tile > a {
  color: var(--primary-color);
  text-decoration: none;
  width: fit-content;
  line-height: 2rem;

  &:hover {
    text-decoration: underline;
  }
}
</style>
