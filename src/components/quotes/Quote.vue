<template>
  <div class="o-layout u-padding-top u-padding-bottom">
    <div class="o-layout__item">
      <div class="c-panel">
        <div class="c-panel__head u-text-center">{{ title }}</div>
        <div class="c-panel__body"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: 'Your Awesome Quote',
      };
    },
  };
</script>
