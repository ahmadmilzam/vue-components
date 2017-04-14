<template>
  <div class="c-panel">
    <div class="c-panel__head">
      <div class="c-panel__title">{{ title }}</div>
    </div>
    <div class="c-panel__body">About Page</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'About',
      };
    },
    created() {
      window.document.title = this.title;
    },
  };
</script>
