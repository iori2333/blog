<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  padding: 10px;
  border: 1px var(--border-color) solid;
  line-height: 1.5em;
  margin: 10px;
  background: #fff;
  border-radius: 4px;
  transition: 0.4s;

  &:hover {
    filter: brightness(0.95);
  }
}
</style>
