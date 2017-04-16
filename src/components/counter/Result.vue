<template>
  <div class="o-layout">
    <div class="o-layout__item">
      <p>Total Counter: {{ counter }}</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('counter', [
        'counter',
        'clickCounter',
      ]),
    },
  };
</script>
