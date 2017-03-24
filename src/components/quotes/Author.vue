<template>
  <div class="o-layout u-padding-top u-padding-bottom">
    <div class="o-layout__item">
      <div class="c-panel">
        <div class="c-panel__head u-text-center">{{ title }}</div>
        <div class="c-panel__body">
          <slot></slot>
          <button type="button" @click="counter++">Increase counter ({{ counter }})</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: 'Your Author',
        counter: 0,
      };
    },
    destroyed() {
      console.log('Author component destroyed!');
    },
    deactivated() {
      console.log('Author deactivated!');
    },
    activated() {
      console.log('Author activated!');
    },
  };
</script>
