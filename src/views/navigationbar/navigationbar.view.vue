<template>
  <Card class="flex">
    <h2 class="header-title" @click="navigateHome">Rasmus Svanberg</h2>

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
    <font-awesome-icon class="search-icon" icon="magnifying-glass" />
    <!-- <input v-model="text" placeholder="Search" class="search-form"/> -->
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
  methods: {
    navigateHome() {
      console.log('Should navigate home');
      this.$router.push(ROUTE_HOME);
    },
  },
};

</script>

<style lang="scss" scoped>

  .header-title {
    margin-left: 20%;

    &:hover {
      cursor: pointer;
    }
  }

  .search-icon {
    color: var(--primary-color);
    height: 24px;
    width: 24px;
    margin: 25px 20% 25px 0;

    &:hover {
      cursor: pointer;
      color: var(--primary-color-light);
    }
  }

  .flex-fill {
    flex-grow: 1;
  }

  nav {
    display: inline-flex;
    // margin-right: 20%;
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
