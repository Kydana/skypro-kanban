<script setup>
  import { ref } from 'vue';
  import PopUser from '@/components/PopUser/PopUser.vue';

  defineProps({
    addCard: {
      type: Function,
      required: true,
    },
  });

  const isOpen = ref(false);

  const togglePopUser = () => {
    isOpen.value = !isOpen.value;
  };
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__block">
        <div class="header__logo _show _light">
          <a href="" target="_self">
            <img src=".assets/images/logo.png" alt="logo" />
          </a>
        </div>
        <div class="header__logo _dark">
          <a href="" target="_self">
            <img src=".assets/images/logo_dark.png" alt="logo" />
          </a>
        </div>
        <nav class="header__nav">
          <button class="header__btn-main-new _hover01" @click="addCard">
            Создать новую задачу
          </button>
          <span @click="togglePopUser" class="header__user _hover02">
            Ivan Ivanov
          </span>
          <PopUser v-if="isOpen" />
        </nav>
      </div>
    </div>
  </header>
</template>
