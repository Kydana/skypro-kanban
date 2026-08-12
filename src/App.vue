<template>
  <div class="wrapper">
    <PopExit v-if="isExitModalOpen" @close="isExitModalOpen = false" />
    <PopNewCard v-if="isNewCardModalOpen" @close="isNewCardModalOpen = false" @create="addCard" />
    <PopBrowse v-if="isBrowseModalOpen" @close="isBrowseModalOpen = false" />

    <Header @open-new-card="isNewCardModalOpen = true" @open-exit="isExitModalOpen = true" />

    <Main>
      <div v-if="isLoading" class="loading">
        Данные загружаются...
      </div>

      <div v-else class="main__content">
        <Column
          v-for="status in statusList"
          :key="status"
          :title="status"
          :cardList="cards.filter(card => card.status === status)"
        />
      </div>
    </Main>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { cardList } from "./mockc/tasks";
  import './App.css';

  import PopBrowse from '@/components/PopBrowse/PopBrowse.vue';
  import PopExit from '@/components/PopExit/PopExit.vue';
  import PopNewCard from '@/components/PopNewCard/PopNewCard.vue';
  import Main from '@/components/Main/Main.vue';
  import Header from '@/components/Header/Header.vue';
  import Column from '@/components/Column/Column.vue';


  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const cards = ref(cardList);
  const isLoading = ref(true);

  const isExitModalOpen = ref(false);
  const isNewCardModalOpen = ref(false);
  const isBrowseModalOpen = ref(false);

// Функция добавления новой карточки
  const addCard = (customData = null) => {
    const nextId = cards.value.length > 0 ? Math.max(...cards.value.map(c => c.id)) + 1 : 1;

    const card = {
      id: nextId,
      topic: customData?.category || "Web Design",
      title: customData?.title || "Название новой задачи",
      date: new Date().toLocaleDateString(),
      status: "Без статуса",
    };

    cards.value.push(card);
  };

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);
  });
</script>
