<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useStore } from './store';
import { useBanner } from './hooks';

import NavHeader from './components/HeaderNav.vue';
import FooterBar from './components/FooterBar.vue';
import BackTop from './components/BackTop.vue';

const store = useStore();
const banner = useBanner();

onMounted(() => store.dispatch('fetchArticles'));
onMounted(() => banner.print());
</script>

<template>
  <NavHeader />
  <div id="main">
    <RouterView />
    <FooterBar />
    <BackTop />
  </div>
</template>

<style lang="scss">
html {
  scroll-padding-top: 64px;
  scroll-behavior: smooth;
}

body {
  background-color: #f7f7f7;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    width: 7px;
    position: absolute;
  }

  &::-webkit-scrollbar-track {
    z-index: 100;
    margin: 10px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    &:hover {
      background: rgba(0, 0, 0, 0.35);
    }
  }

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  --primary-color: #258ab3;
  --inactive-color: #2c3e50;
  --border-color: #6d6d6d2f;
  margin-top: 64px;
}

#main {
  padding: 0 10rem;
}

@media (max-width: 1330px) {
  #main {
    padding: 0 5rem;
  }
}

@media (max-width: 720px) {
  #main {
    padding: 0 1rem;
  }
}
</style>
