<template>
  <div class="main-container">
      <slot/>
  </div>
</template>

<script>

export default {
  name: 'CardComponent',
};

</script>

<style lang="scss" scoped>

  .main-container {
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid #999;
  }

  .flex {
    display: inline-flex;
  }

</style>
