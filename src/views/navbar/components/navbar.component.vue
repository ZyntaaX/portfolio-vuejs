<template>
  <div id="nav">
    <Card>
      <ul id="nav-list">
        <li>
          <router-link :to="ROUTE_HOME">Home</router-link>
        </li>
        <li>
          <router-link :to="ROUTE_PROJECTS">Projects</router-link>
        </li>
        <li>
          <router-link :to="ROUTE_ABOUT">About me</router-link>
        </li>
        <li>
          <router-link :to="ROUTE_CONTACT">Contact</router-link>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>

import { ROUTE_HOME, ROUTE_PROJECTS, ROUTE_ABOUT, ROUTE_CONTACT } from '@/router/';

import Card from '@/components/cards/card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      ROUTE_HOME,
      ROUTE_PROJECTS,
      ROUTE_ABOUT,
      ROUTE_CONTACT
    };
  }
};

</script>

<style>

  #nav {
      position: absolute;
      right: 0;
      margin: 0px 30px 0px 0px;
  }

  #nav-list {
      display: flex;
  }

  #nav-list li::before {
      position: fixed;
      text-align: center;
  }

  #nav-list li {
      margin: 0px 20px 0px 20px;
  }

  #nav a {
      text-shadow: var(--text-shadow);
      vertical-align: middle;
      font-size: 1.5rem;
      text-decoration: none;
      color: var(--text-primary-color);
      transition: font-size 0.2s;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  } 

  #nav a:hover {
      color: var(--link-highlight-color);
  }

  #nav a.router-link-exact-active {
      color: var(--link-active-color);  
      font-size: 2rem;
      transition: font-size 0.2s;
  }

</style>