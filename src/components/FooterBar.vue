<script setup lang="ts">
import CardContainer from './common/CardContainer.vue';

const onClick = () => window.open('https://github.com/iori2333');
</script>

<template>
  <CardContainer title="Iori's Blog" @click="onClick" class="footer">
    无人问津的破烂小站。
  </CardContainer>
</template>

<style scoped lang="scss">
.footer {
  background: url('../assets/footer.jpg') center center no-repeat;
  background-size: cover;
  line-height: 2rem;
  color: #fcfcfc;
}
</style>
