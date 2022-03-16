<template>
  <NavigationBar/>
  <router-view class="main"/>
</template>

<script>

import NavigationBar from '@/views/navigationbar/navigationbar.view.vue';

export default {
  components: {
    NavigationBar,
  },
};

</script>

<style lang="scss" scoped>

</style>
