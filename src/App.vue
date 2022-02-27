<script setup lang="ts">
import NavHeader from './components/HeaderNav.vue';
import { RouterView } from 'vue-router';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <NavHeader />
  <div id="main">
    <RouterView />
    <FooterBar />
  </div>
</template>

<style lang="scss">
html {
  scroll-padding-top: 64px;
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
