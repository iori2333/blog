<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { fetchTags } from '../../api/article';
import { useToast } from '../../hooks';
import { Tag } from '../../models/tag';

import CardContainer from '../common/CardContainer.vue';
import ArticleTag from '../article/ArticleTag.vue';

const toast = useToast();
const tags = ref([] as Tag[]);

onMounted(() => {
  fetchTags()
    .then(r => (tags.value = r))
    .catch(e => toast.error(e.message));
});

const allTags = computed(() =>
  tags.value.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0)
);
</script>

<template>
  <CardContainer title="Tags">
    <div class="tiles">
      <ArticleTag name="all" color="#1f1e33" :count="allTags" />
      <ArticleTag v-for="tag in tags" :key="tag.name" {...tag} />
    </div>
  </CardContainer>
</template>

<style scoped lang="scss">
.tiles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
