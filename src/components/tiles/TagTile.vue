<script setup lang="ts">
import CardContainer from '../common/CardContainer.vue';
import ArticleTag from '../article/ArticleTag.vue';
</script>

<template>
  <CardContainer title="Tags">
    <div class="tiles">
      <ArticleTag name="all" color="#1f1e33" />
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
