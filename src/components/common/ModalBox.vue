<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue';

import CardContainer from './CardContainer.vue';

const { title, onOpen, onClose } = defineProps<{
  open: boolean;
  title?: string;
  onOpen?: () => void;
  onClose?: () => void;
}>();

const visible = ref(true);
const existence = ref(true);

watch(
  () => open,
  () => {
    if (!open) {
      destroy();
    } else {
      openModal();
    }
  }
);

onMounted(() => onOpen?.());

const destroy = () => {
  onClose?.();
  visible.value = false;
  const tm = setTimeout(() => {
    existence.value = false;
    clearTimeout(tm);
  }, 1000);
};

const openModal = () => {
  onOpen?.();
  existence.value = true;
  visible.value = true;
};
</script>

<template>
  <div
    class="modal-container"
    :class="visible ? '' : 'hidden'"
    v-if="existence"
    @click.self="destroy"
  >
    <CardContainer class="modal-box" :title="title">
      <slot />
    </CardContainer>
  </div>
</template>

<style scoped lang="scss">
.modal-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 101;
  transition: 0.2s;
  opacity: 1;

  &.hidden {
    opacity: 0;
  }

  .modal-box {
    min-width: min(90%, 400px);
    background: #fff;
    min-height: 300px;
  }
}
</style>
