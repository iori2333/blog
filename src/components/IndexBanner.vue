<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import CardContainer from './common/CardContainer.vue';

const show = ref(true);

onMounted(() => {
  window.onwheel = (event: WheelEvent) => {
    if (
      document.documentElement.scrollTop == 0 &&
      event.deltaY < 0 &&
      !show.value
    ) {
      show.value = true;
    }
  };
});

onBeforeUnmount(() => {
  window.onwheel = null;
});
</script>

<template>
  <CardContainer class="banner" :class="show ? '' : 'hidden'">
    <div class="title" :class="show ? '' : 'hidden'">Iori's Blog</div>
    <div class="description" @click="show = !show">My Guiding Star</div>
  </CardContainer>
</template>

<style scoped lang="scss">
.banner {
  background: url('../assets/banner.webp') center center no-repeat;
  background-size: cover;
  height: min(calc(80vh - 64px), 600px);
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: height 0.6s, box-shadow 0.2s !important;

  &.hidden {
    height: 80px;
  }

  .title {
    font-size: 72px;
    text-decoration: underline;
    transition: 0.2s;
    padding: 10px;
    opacity: 1;
    transition: 0.6s;

    &.hidden {
      font-size: 40px;
      z-index: 0;
    }
  }

  .description {
    margin: 10px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    z-index: 1;
  }
}

@media (max-width: 720px) {
  .banner {
    align-items: flex-start;
  }
}
</style>
