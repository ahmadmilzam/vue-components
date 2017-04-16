<template>
  <div class="c-panel">
    <div class="c-panel__body">
      <div class="c-panel__title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Stocks',
      };
    },
    created() {
      window.document.title = this.title;
    },
  };
</script>
