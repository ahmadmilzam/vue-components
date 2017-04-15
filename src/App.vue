<template>
  <div id="app-container" class="o-wrapper u-padding-top u-padding-bottom">
    <result></result>
    <counter></counter>
  </div>
</template>

<script>
  import Result from './components/counter/Result.vue';
  import Counter from './components/counter/Counter.vue';

  export default {
    components: {
      Result,
      Counter,
    },
    methods: {

    },
  };
</script>
