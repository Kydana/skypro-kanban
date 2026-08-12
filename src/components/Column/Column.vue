<script setup>
  import Card from '@/components/Card/Card.vue';

  defineProps({
    title: {
      type: String,
      required: true,
    },
    cardList: {
      type: Array,
      required: true,
    },
  });
</script>

<template>
  <div class="main__column">
    <div class="column__title">
      <p>{{ title }}</p>
    </div>

    <div class="cards">
      <Card
        v-for="card in cardList"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>
