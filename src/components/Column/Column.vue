<script setup>
  import Card from '@/components/Card/Card.vue';

  const props = defineProps({
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
      <div style="background: yellow; color: black; padding: 10px; font-weight: bold;">
        Количество карточек в массиве: {{ props.cardList ? props.cardList.length : 'Массив undefined' }}
      </div>
      <Card
        v-for="(card, index) in cardList"
        :key="index"
        :card="card"
      />
    </div>
  </div>
</template>

        <!-- v-for="card in cardList"
        :key="card.id"
        :card="card" -->
