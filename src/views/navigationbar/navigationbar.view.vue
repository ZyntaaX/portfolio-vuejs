<template>
  <Card class="flex">
    <h2 class="header-title">Rasmus Svanberg</h2>

    <div class="flex-fill" />

    <nav>
      <!-- TODO: i18n -->
      <NavigationItemComponent
        :route="ROUTE_HOME"
        :title="'Home'"
      />
      <!-- TODO: i18n -->
      <NavigationItemComponent
        :route="ROUTE_ABOUT"
        :title="'About'"
      />
      <!-- TODO: i18n -->
      <NavigationItemComponent
        :route="ROUTE_PROJECTS"
        :title="'Projects'"
      />
      <!-- TODO: i18n -->
      <NavigationItemComponent
        :route="ROUTE_CONTACT"
        :title="'Contact'"
      />
    </nav>
  </Card>
</template>

<script>

import {
  ROUTE_HOME, ROUTE_ABOUT, ROUTE_CONTACT, ROUTE_PROJECTS,
} from '@/router/';

import Card from '@/components/cards/card.vue';
import NavigationItemComponent from './components/navigation.item.component.vue';

export default {
  name: 'NavigationBar',
  data() {
    return {
      ROUTE_HOME,
      ROUTE_ABOUT,
      ROUTE_CONTACT,
      ROUTE_PROJECTS,
    };
  },
  components: {
    Card,
    NavigationItemComponent,
  },
};

</script>

<style lang="scss" scoped>

  .header-title {
    margin-left: 20%;
  }

  .flex-fill {
    flex-grow: 1;
  }

  nav {
    display: inline-flex;
    margin-right: 20%;
    padding: 30px;

    // a {
    //   text-decoration: none;

    //   &:hover {
    //     text-decoration: underline;
    //   }
    // }

    // h3 {
    //   margin: 0;
    //   padding: 0 20px 0 20px;
    // }
  }

</style>
