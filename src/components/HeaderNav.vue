<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const onSearch = (event: KeyboardEvent) => {
  const keyword = (event.target as HTMLInputElement).value;
  console.log(keyword);
};
</script>

<template>
  <header class="nav-header">
    <nav>
      <RouterLink to="/" :class="route.name == 'home' ? 'active' : ''">
        首页
      </RouterLink>
      <RouterLink
        to="/archive"
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
      <input placeholder="Search articles" @keyup.enter="onSearch" />
      <img src="../assets/logo.png" width="30" height="30" />
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
    flex-direction: row-reverse;
    justify-content: flex-end;

    input {
      border: none;
      background-color: #f0f0f0;
      border-radius: 6px;
      margin-left: 10px;
      transition: 0.6s;

      &:focus {
        border: none;
        outline: none;
        background-color: #e2e2e2;
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
