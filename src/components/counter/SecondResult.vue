<template>
  <div class="o-layout">
    <div class="o-layout__item">
      <p>Total Counter Doubled: {{ doubleCounter }}</p>
      <p>Total Counter Click: {{ clickCounter }}</p>
      <p>Total Counter Internal: {{ internalCounter }}</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        privateCounter: '',
      };
    },
    computed: {
      ...mapGetters('counter', [
        'doubleCounter',
        'clickCounter',
      ]),
      internalCounter() {
        console.log('State counter', this.$store.state.counter.counter);
        return `${this.$store.state.counter.counter} asdf`;
      },
    },
  };
</script>
