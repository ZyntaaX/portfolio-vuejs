// import * as Vue from 'vue';
import { createApp } from 'vue';

import FontAwesomeIcon from '@/utilities/font.awesome.library';

import App from './App.vue';
import router from './router';

// Entrypoint for Sass
import '@/scss/index.scss';

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
