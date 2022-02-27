<script setup lang="ts">
import { onMounted, ref } from 'vue';

const show = ref(true);

onMounted(() => {
  window.onwheel = (event: WheelEvent) => {
    if (event.deltaY < 0 && document.body.scrollTop == 0) {
      show.value = true;
    }
  };
});
</script>

<template>
  <div class="banner" :class="show ? '' : 'hidden'">
    <div class="title" v-show="show">Iori's Blog</div>
    <div class="description" @click="show = !show">My Guiding Star</div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: url('../assets/banner.jpg') center center no-repeat;
  background-size: cover;
  height: min(calc(80vh - 64px), 600px);
  justify-content: center;
  align-items: center;
  user-select: none;
  opacity: 1;
  visibility: 1;
  transition: height 0.6s, box-shadow 0.2s;

  &.hidden {
    height: 80px;
  }

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .title {
    font-size: 72px;
    text-decoration: underline;
    transition: 0.2s;
    padding: 10px;

    &:hover {
      color: rgb(26, 74, 102);
      background-color: #fafafa60;
      backdrop-filter: blur(20px);
      border-radius: 10px;
    }
  }

  .description {
    margin: 10px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
