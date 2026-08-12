<template>
  <div class="pop-new-card" id="popNewCard">
    <div class="pop-new-card__container">
      <div class="pop-new-card__block">
        <div class="pop-new-card__content">
          <h3 class="pop-new-card__ttl">Создание задачи</h3>
          <a href="#" class="pop-new-card__close" @click.prevent="closeModal">✖</a>
          <div class="pop-new-card__wrap">
            <form class="pop-new-card__form form-new" id="formNewCard" action="#" @submit.prevent="createTask">
              <div class="form-new__block">
                <label for="formTitle" class="subttl">Название задачи</label>
                <input
                  v-model="taskTitle"
                  class="form-new__input"
                  type="text"
                  name="name"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autofocus
                />
              </div>
              <div class="form-new__block">
                <label for="textArea" class="subttl">Описание задачи</label>
                <textarea
                  v-model="taskDescription"
                  class="form-new__area"
                  name="text"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                ></textarea>
              </div>
            </form>

            <Calendar />

          </div>
          <div class="pop-new-card__categories categories">
            <p class="categories__p subttl">Категория</p>
            <div class="categories__themes">
              <div
                class="categories__theme _orange"
                :class="{ '_active-category': selectedCategory === 'Web Design' }"
                @click="selectedCategory = 'Web Design'"
              >
                <p class="_orange">Web Design</p>
              </div>
              <div
                class="categories__theme _green"
                :class="{ '_active-category': selectedCategory === 'Research' }"
                @click="selectedCategory = 'Research'"
              >
                <p class="_green">Research</p>
              </div>
              <div
                class="categories__theme _purple"
                :class="{ '_active-category': selectedCategory === 'Copywriting' }"
                @click="selectedCategory = 'Copywriting'"
              >
                <p class="_purple">Copywriting</p>
              </div>
            </div>
          </div>
          <button class="form-new__create _hover01" id="btnCreate" @click="createTask">
            Создать задачу
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Calendar from "@/components/Calendar/Calendar.vue";

  const emit = defineEmits(['close', 'create']);

  const taskTitle = ref('');
  const taskDescription = ref('');
  const selectedCategory = ref('Web Design');

  const closeModal = () => {
    emit('close');
  };

  const createTask = () => {
    if (!taskTitle.value.trim()) {
      alert('Пожалуйста, введите название задачи');
      return;
    }

    const newTask = {
      title: taskTitle.value,
      description: taskDescription.value,
      category: selectedCategory.value,
      status: 'Без статуса' // Начальный статус по умолчанию
    };

    emit('create', newTask);

    taskTitle.value = '';
    taskDescription.value = '';
  };
</script>
