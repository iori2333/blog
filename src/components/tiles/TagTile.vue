<script setup lang="ts">
import CardContainer from '../common/CardContainer.vue';
import ArticleTag from '../article/ArticleTag.vue';
</script>

<template>
  <CardContainer title="Tags">
    <div class="tiles">
      <ArticleTag name="Tag1" color="#1f1e33" />
      <ArticleTag name="Tag2" color="#1f1e33" />
      <ArticleTag name="Tag3" color="#1f1e33" />
      <ArticleTag name="Tag4" color="#1f1e33" />
      <ArticleTag name="Tag5" color="#1f1e33" />
      <ArticleTag name="Tag6" color="#1f1e33" />
      <ArticleTag name="Tag7" color="#1f1e33" />
      <ArticleTag name="Tag8" color="#1f1e33" />
      <ArticleTag name="Tag9" color="#1f1e33" />
      <ArticleTag name="Tag10" color="#1f1e33" />
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
