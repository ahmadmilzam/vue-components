<template>
  <footer class="c-footer" v-html="footerText"></footer>
</template>

<script>
  export default {
    data() {
      return {
        footerText: '&copy; Your VUE app',
      };
    },
  };
</script>

<style>
  .c-footer {
    margin: 10px 0 0;
    padding: 10px;
    background-color: #fafafa;
    color: #999;
    font-size: 12px;
    text-align: center;
    border: 1px solid #bbb;
  }
</style>
