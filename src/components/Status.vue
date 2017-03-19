<template>
  <div class="c-status">
    <status-item v-for="item in 3"></status-item>
  </div>
</template>

<script>
  import statusItem from './StatusItem.vue';

  export default {
    components: {
      'status-item': statusItem,
    },
  };
</script>

<style lang="scss">
</style>
