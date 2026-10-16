import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.css'
import router from './router'
// import '@/assets/css/main_dark.css'


// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
