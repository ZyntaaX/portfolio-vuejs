<template>
  <router-link :to="route">
    <h3> {{ title }} </h3>
    <div class="underline" />
  </router-link>
</template>

<script>

export default {
  name: 'NavigationItemComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
};

</script>

<style lang="scss" scoped>

  nav {
    display: inline-flex;
    margin-right: 20%;
    padding: 30px;
    width: 100%;

    a {
      text-decoration: none;

      &:hover {
          cursor: pointer;
        // text-decoration: underline;
      }
    }

    h3 {
      margin: 0;
      padding: 0 20px 0 20px;
    }

    .underline {
        margin: 0 5% 0 5%;
        width: 90%;
        // padding: 0 5px 0 5px;
        height: 4px;
        background-color: red;
    }
  }

</style>
