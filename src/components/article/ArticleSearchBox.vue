<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SimpleButton from '../common/SimpleButton.vue';

const router = useRouter();
const keyword = ref('');

const onSearch = () => {
  const value = keyword.value;
  if (value == '') {
    return;
  }
  keyword.value = '';
  router.push('/archive/search/' + value);
};
</script>

<template>
  <div class="search-box">
    <input
      placeholder="Search articles"
      v-model="keyword"
      @keyup.enter="onSearch()"
    />
    <SimpleButton icon="search" @click="onSearch()" />
  </div>
</template>

<style scoped lang="scss">
.search-box {
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
</style>
