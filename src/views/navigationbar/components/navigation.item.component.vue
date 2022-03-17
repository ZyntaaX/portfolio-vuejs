<template>
  <router-link :to="route">
    <h3> {{ title }} </h3>
    <div
      class="underline"
      :class="{'selected': isSelected}"
    />
  </router-link>
</template>

<script>

export default {
  name: 'NavigationItemComponent',
  data() {
    return {
      isSelected: true,
    };
  },
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

    a {
      width: fit-content;
      text-decoration: none;

      &:hover {
          cursor: pointer;

        .underline {
          transform: scaleX(1);
        }

        h3 {
          color: var(--primary-color);
        }
      }

      &:active {
        .underline {
          transform: scaleX(1);
        }
      }
    }

    h3 {
      margin: 0;
      padding: 0 20px 0 20px;

      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }

    .underline {
        margin: 0 10% 0 10%;
        width: 80%;
        transform: scaleX(0);
        height: 4px;
        background-color: var(--primary-color);

        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }
  }

</style>
