<template>
  <main class="main">
    <div class="container">
      <div class="main__block">
        <div class="main__content">
          <Column
            v-for="status in statuses"
            :key="status"
            :title="status"
            :cards="groupedCards[status]"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { computed } from 'vue';
  import { cardList } from "@/mockc/tasks";
  import Column from "@/components/Column/Column.vue";

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово"
  ];

  const groupedCards = computed(() => {
    return statuses.reduce((acc, status) => {
      acc[status] = cardList.filter(card => card.status === status);
      return acc;
    }, {});
  });
</script> 
