<template>
  <div class="o-layout">
    <div class="o-layout__item">
      <button
        @click="decrement"
        type="button"
        class="c-btn c-btn--primary">Decrease
      </button>
      <button
        @click="increment"
        type="button"
        class="c-btn c-btn--primary">Increase
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {},
    methods: {
      decrement() {
        this.$store.state.counter -= 1;
      },
      increment() {
        this.$store.state.counter += 1;
      },
    },
  };
</script>
