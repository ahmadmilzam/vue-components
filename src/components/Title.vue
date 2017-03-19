<template>
  <h1 class="c-title">{{ title }}</h1>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello World! Welcome to your Vue Apps!',
      };
    },
  };
</script>

<style>
  .c-title {
    background-color: #fff;
    color: #333;
    font-size: 22px;
    text-align: center;
    padding: 10px;
    background-color: #fafafa;
  }
</style>
