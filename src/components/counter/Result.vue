<template>
  <div class="o-layout">
    <div class="o-layout__item">
      <p>Total Counter: {{ counter }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      counter() {
        return this.$store.state.counter;
      },
    },
  };
</script>
