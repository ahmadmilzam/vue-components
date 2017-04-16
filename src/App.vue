<template>
  <div id="app-container" class="o-wrapper u-padding-top u-padding-bottom">
    <result></result>
    <second-result></second-result>
    <hr>
    <counter></counter>
    <second-counter></second-counter>
    <third-counter></third-counter>
  </div>
</template>

<script>
  import Result from './components/counter/Result.vue';
  import SecondResult from './components/counter/SecondResult.vue';
  import Counter from './components/counter/Counter.vue';
  import SecondCounter from './components/counter/SecondCounter.vue';
  import ThirdCounter from './components/counter/ThirdCounter.vue';

  export default {
    components: {
      Result,
      SecondResult,
      Counter,
      SecondCounter,
      ThirdCounter,
    },
  };
</script>
