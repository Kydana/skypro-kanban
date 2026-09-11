<template>
  <div class="wrapper">
    <Header />

    <main class="main">
      <div class="container">
        <div class="main__block">
          <Main :columns="columns" />
        </div>
      </div>
    </main>

    <PopBrowse />
    <PopNewCard />
    <ExitModal />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Main from '@/components/Main/Main.vue';
import PopBrowse from '@/components/PopBrowse/PopBrowse.vue';
import PopNewCard from '@/components/PopNewCard/PopNewCard.vue';

</script>


<!-- <template>
  <HomeView />
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>

<style>
@import '../../public/assets/main.css';
@import '../../public/assets/main_dark.css';
</style> -->
