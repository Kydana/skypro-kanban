<template>
  <div class="pop-exit" id="popExit">
    <div class="pop-exit__container">
      <div class="pop-exit__block">

        <div class="pop-exit__ttl">
          <h2>Выйти из аккаунта?</h2>
        </div>

        <form class="pop-exit__form" id="formExit" action="#" @submit.prevent>
          <div class="pop-exit__form-group">
            <button class="pop-exit__exit-yes _hover01" id="exitYes" @click="handleExit">
              Да, выйти
            </button>
            <button class="pop-exit__exit-no _hover03" id="exitNo" @click="handleCancel">
              Нет, остаться
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  // import { defineEmits } from 'vue';
  import { useRouter } from 'vue-router';

  const emit = defineEmits(['exit', 'close']);

  const router = useRouter();

  const handleExit = () => {
    emit('exit');

    if (router) {
      router.push('/signin');
    } else {
      window.location.href = 'main.html';
    }
  };

  const handleCancel = () => {
    emit('close');
  };
</script>
