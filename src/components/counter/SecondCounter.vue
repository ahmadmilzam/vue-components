<template>
  <div class="o-layout">
    <div class="o-layout__item">
      <button
        @click="decrement"
        type="button"
        class="c-btn c-btn--primary">Decrease (2nd)</button>
      <button
        @click="increment"
        type="button"
        class="c-btn c-btn--primary">Increase (2nd)</button>
      <button
        @click="sayHello"
        class="c-btn" type="button">Say Hello!</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions('counter', [
        'increment',
        'decrement',
      ]),
      sayHello() {
        alert('hello there');
      },
    },
  };
</script>
