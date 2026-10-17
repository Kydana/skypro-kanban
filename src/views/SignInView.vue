<script setup>
import AuthForm from '@/components/AuthForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

async function handLeSingnIn(e) {
  e.preventDefault()
  localStorage.setItem('userInfo', 'true')
  router.push('/')
}

</script>

<template>
  <AuthForm :onClick="handLeSingnIn" />
</template>
