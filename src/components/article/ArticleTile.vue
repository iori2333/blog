<script setup lang="ts">
import { defineProps } from 'vue';
import { formatDate } from '../../util/date';
import { Article } from '../../models/article';
import CardContainer from '../common/CardContainer.vue';
import { useRouter } from 'vue-router';
import SVGIcon from '../common/SVGIcon.vue';

const router = useRouter();

const { article } = defineProps<{
  article: Article;
}>();

const handleText = (text: string) => {
  let pos = text.indexOf('\n');
  if (pos === -1) {
    pos = text.length;
  }
  let send = text.substring(0, Math.min(pos, 100));
  if (send.length < pos) {
    send += '...';
  }
  return send;
};

const onClick = () => {
  console.log(article);
  router.push(`/archive/view/${article.id}`);
};
</script>

<template>
  <CardContainer
    :class="article.pinned ? 'pinned' : ''"
    class="card-item"
    :title="article.title"
    @click="onClick"
  >
    <div class="text-preview">
      <div>{{ handleText(article.content) }}</div>
      <img v-if="article.img" :src="article.img" :alt="article.title" />
    </div>
    <div class="actions">
      <span v-if="article.pinned">
        <SVGIcon name="pinned" />
        置顶
      </span>
      <span>
        <SVGIcon name="account" />
        作者: {{ article.author }}
      </span>
      <span>
        <SVGIcon name="calendar" />
        发布时间: {{ formatDate(article.timestamp) }}
      </span>
      <span>
        <SVGIcon name="comment-discussion" />
        评论: 0
      </span>
    </div>
  </CardContainer>
</template>

<style scoped lang="scss">
.card-item {
  flex-direction: column;
  justify-content: space-between;

  &.pinned {
    border: 1px #ff4931 solid;
  }

  .text-preview {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    img {
      width: 60px;
      height: 60px;
      padding: 0 10px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      font-size: 14px;
      font-weight: lighter;

      .codicon {
        padding-right: 4px;
      }
    }

    border-top: 1px solid var(--border-color);
    padding-top: 1rem;
  }
}
</style>
