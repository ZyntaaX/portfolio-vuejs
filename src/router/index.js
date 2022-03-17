// eslint-disable-next-line no-unused-vars
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import HomeView from '@/views/home/home.view.vue';
import AboutView from '@/views/about/about.view.vue';
import ContactView from '@/views/contact/contact.view.vue';
import ProjectsView from '@/views/projects/projects.view.vue';
import NotFoundView from '@/views/404/404.vue';

// eslint-disable-next-line max-len
// const BASE_URL = '/portfolio-vuejs'; // process.env.NODE_ENV === 'production' ? '/portfolio-vuejs' : '';

export const ROUTE_HOME = '/';
export const ROUTE_ABOUT = '/about';
export const ROUTE_CONTACT = '/contact';
export const ROUTE_PROJECTS = '/projects';

const routes = [
  {
    path: ROUTE_HOME,
    name: 'home',
    component: HomeView,
  },
  {
    path: ROUTE_ABOUT,
    name: 'about',
    component: AboutView,
  },
  {
    path: ROUTE_CONTACT,
    name: 'contact',
    component: ContactView,
  },
  {
    path: ROUTE_PROJECTS,
    name: 'projects',
    component: ProjectsView,
  },

  /* This catchAll should always be placed as the last route-check! */
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHashHistory(/* process.env.BASE_URL */),
  routes,
});

export default router;
