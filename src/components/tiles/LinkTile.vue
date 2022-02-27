<script setup lang="ts">
import CardContainer from '../common/CardContainer.vue';
import LinkItem from '../common/LinkItem.vue';

const urls = {
  repo: 'https://github.com/iori2333/blog',
  me: 'https://iori2333.github.io',
  lug: 'https://blogroll.njulug.org'
};
</script>

<template>
  <CardContainer sticky top="64px" title="Links">
    <LinkItem icon="github-alt" :href="urls.repo" target="_blank">
      Source Code
    </LinkItem>
    <LinkItem icon="account" :href="urls.me" target="_blank">
      My Homepage
    </LinkItem>
    <LinkItem icon="terminal-linux" :href="urls.lug" target="_blank">
      LUG@NJU
    </LinkItem>
  </CardContainer>
</template>
