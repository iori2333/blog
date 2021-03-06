<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import CardContainer from './CardContainer.vue';
import SimpleButton from './SimpleButton.vue';

const { title } = defineProps<{
  title?: string;
}>();

const route = useRoute();
const router = useRouter();

const routes = computed(() => route.fullPath.split('/'));
const base = computed(() => routes.value[routes.value.length - 1]);

const onRoute = (index: number) => {
  const jump = routes.value.slice(0, index + 1).join('/');
  router.push(jump);
};
</script>

<template>
  <CardContainer class="navigator">
    <SimpleButton icon="arrow-left" size="20px" @click="router.back()" />
    <div
      class="route"
      v-for="(route, index) in routes.slice(0, routes.length - 1)"
      :key="index"
    >
      <span @click="onRoute(index)">{{ route }}</span>
      <div class="slash">/</div>
    </div>
    <span class="title">{{ title ?? base }}</span>
  </CardContainer>
</template>

<style scoped lang="scss">
.navigator {
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;

  .route {
    display: inline-flex;
    align-items: center;
    text-transform: capitalize;

    span:hover {
      cursor: pointer;
      text-decoration: underline dashed;
    }
  }

  @media (max-width: 1020px) {
    .route {
      display: none;
    }
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    padding-left: 5px;
    user-select: none;
  }

  .slash {
    display: inline;
    user-select: none;
    font-size: 20px;
    color: var(--primary-color);
    padding: 0 0.5rem;
    font-weight: 900;
  }
}
</style>
