import { createRouter, /* createWebHistory */ createWebHashHistory } from 'vue-router'

import HomeView from '@/views/home/home.vue'
import AboutView from '@/views/about/about.vue';
import ContactView from '@/views/contact/contact.vue';
import ProjectsView from '@/views/projects/projects.vue';
import CatchAllView from '@/views/404/404.vue';

export const ROUTE_HOME = '/';
export const ROUTE_PROJECTS = '/projects';
export const ROUTE_CONTACT = '/contact';
export const ROUTE_ABOUT = '/about';

const routes = [
  {
    path: ROUTE_HOME,
    name: 'Home',
    component: HomeView
  },
  {
    path: ROUTE_PROJECTS,
    name: 'Projects',
    component: ProjectsView
  },
  {
    path: ROUTE_ABOUT,
    name: 'About',
    component: AboutView
  },
  {
    path: ROUTE_CONTACT,
    name: 'Contact',
    component: ContactView
  },



  
  /* This catchAll should always be placed as the last route-check! */
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: CatchAllView
  }
]

const router = createRouter({
  history: createWebHashHistory(), // createWebHistory(),
  routes
})

export default router
