<template>
  <AuthForm :onClick="handLeSingnIn" />
</template>

<script setup>
import AuthForm from '@/components/AuthForm.vue';

async function handLeSingnIn() {
  console.log("Регистрация");
}
</script>
