<script setup lang="ts">
import { defineProps, nextTick, onBeforeUnmount, ref } from 'vue';
import { Article } from '../../models/article';
import 'github-markdown-css';

import { convertMd } from '../../util/markdown';
import { formatDate } from '../../util/date';
import CardContainer from '../common/CardContainer.vue';
import LinkItem from '../common/LinkItem.vue';

const { article } = defineProps<{
  article: Article;
}>();

const { content, rendered } = convertMd(article.content);

const active = ref(null as string | null);

nextTick(() => {
  const anchors = content.map(entry => {
    return document.getElementById(entry.anchor)?.offsetTop as number;
  });

  const updateAnchor = () => {
    const index = anchors.findIndex(
      value => value > document.documentElement.scrollTop
    );
    active.value = content[index].anchor;
  };

  window.onscroll = updateAnchor;
  updateAnchor();
});

onBeforeUnmount(() => {
  window.onscroll = null;
});
</script>

<template>
  <div class="detail-container">
    <CardContainer class="article-body">
      <span class="description">
        本文由{{ article.author }}发布于{{ formatDate(article.timestamp) }}
      </span>
      <article class="markdown-body" v-html="rendered" />
    </CardContainer>
    <div class="tile-container">
      <CardContainer sticky top="64px" title="目录">
        <LinkItem
          v-for="entry in content"
          :key="entry.anchor"
          :class="active == entry.anchor ? 'active' : 'inactive'"
          :href="`#${entry.anchor}`"
        >
          <span class="anchor">{{ '#'.repeat(entry.level) }}</span>
          {{ entry.text }}
        </LinkItem>
      </CardContainer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail-container {
  display: flex;

  .article-body {
    flex: 1;

    .description {
      font-weight: lighter;
      padding-bottom: 10px;
      font-size: 14px;
    }
  }

  .tile-container {
    width: 300px;
    margin-left: 10px;
    flex-direction: column;

    a {
      &.inactive {
        opacity: 0.4;
      }
      .anchor {
        font-weight: 800;
        color: var(--inactive-color);
      }
    }
  }

  @media (max-width: 1020px) {
    .tile-container {
      display: none;
    }
  }
}
</style>
