<template>
  <div class="o-layout">
    <div class="o-layout__item u-margin-bottom--small">
      <button
        @click="decrementAsync(2)"
        type="button"
        class="c-btn c-btn--primary">Decrease by 2 (Async)</button>
      <button
        @click="incrementAsync(2)"
        type="button"
        class="c-btn c-btn--primary">Increase by 2 (Async)</button>
    </div>
    <div class="o-layout__item">
      <input
        :value="getValue"
        @input="updateValue"
        type="text" class="c-input">
      <p>Store Value: {{ getValue }}</p>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      getValue() {
        return this.$store.getters.getValue;
      },
    },
    methods: {
      ...mapActions('counter', [
        'incrementAsync',
        'decrementAsync',
      ]),
      updateValue(event) {
        this.$store.dispatch('updateValue', event.target.value);
      },
    },
  };
</script>
