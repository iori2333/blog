<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import SimpleButton from './common/SimpleButton.vue';

const route = useRoute();
const keyword = ref('');

const onSearch = () => {
  console.log(keyword.value);
  keyword.value = '';
};
</script>

<template>
  <header class="nav-header">
    <nav>
      <RouterLink to="/" :class="route.name == 'home' ? 'active' : ''">
        首页
      </RouterLink>
      <RouterLink
        to="/archive/tag"
        :class="route.fullPath.startsWith('/archive') ? 'active' : ''"
      >
        文章
      </RouterLink>
      <RouterLink
        to="/me"
        :class="route.fullPath.startsWith('/me') ? 'active' : ''"
      >
        关于我
      </RouterLink>
    </nav>
    <div class="info-box">
      <input
        placeholder="Search articles"
        v-model="keyword"
        @keyup.enter="onSearch()"
      />
      <SimpleButton icon="search" @click="onSearch()" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.nav-header {
  top: 0;
  position: fixed;
  z-index: 100;
  display: flex;
  left: 0;
  right: 0;
  align-items: center;
  height: 52px;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  padding: 0 10em;
  border-bottom: 1px var(--border-color) solid;
  user-select: none;

  nav {
    display: flex;
    height: 100%;

    a {
      color: var(--inactive-color);
      font-size: 1.05em;
      text-decoration: none;
      height: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 12px;
      margin: 0;

      &:hover {
        border-bottom: var(--primary-color) 2px solid;
      }

      &.active {
        color: var(--primary-color);
      }
    }
  }

  .info-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    input {
      border: none;
      background-color: #f0f0f094;
      border-radius: 6px;
      transition: 0.6s;
      height: 30px;

      &:focus {
        border: none;
        outline: none;
        background-color: #e2e2e286;
      }
    }
  }
}

@media (max-width: 1330px) {
  .nav-header {
    padding: 0 5rem;
  }
}

@media (max-width: 720px) {
  .nav-header {
    padding: 0 1rem;
    .info-box {
      display: none;
    }
  }
}
</style>
