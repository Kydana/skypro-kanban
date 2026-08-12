<template>
  <div class="header__pop-user-set pop-user-set" id="user-set-target">
    <p class="pop-user-set__name">{{ userName }}</p>
    <p class="pop-user-set__mail">{{ userMail }}</p>

    <div class="pop-user-set__theme">
      <p>Темная тема</p>
      <input
        v-model="isDarkTheme"
        type="checkbox"
        class="checkbox"
        name="checkbox"
      />
    </div>

    <button type="button" class="_hover03" @click="openExitModal">
      Выйти
    </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const emit = defineEmits(['open-exit']);

  const userName = ref('Ivan Ivanov');
  const userMail = ref('ivan.ivanov@gmail.com');

  const isDarkTheme = ref(false);

  const openExitModal = () => {
    emit('open-exit');
  };
</script>
