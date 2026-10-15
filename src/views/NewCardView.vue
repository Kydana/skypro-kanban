<template>
  <div class="new-card-view">
    <NewCardModal />
  </div>
</template>

<script setup>
import NewCardModal from '@/components/PopNewCard/NewCardModal.vue';
</script>

<style scoped>
.new-card-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
</style>
