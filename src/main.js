import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Entrypoint for Sass
import '@/scss/index.scss';

createApp(App).use(router).mount('#app');
