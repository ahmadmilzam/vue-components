<template>
  <div id="app-container">
    <app-title></app-title>
    <app-status></app-status>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Title from './components/Title.vue';
  import Status from './components/Status.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      'app-title': Title,
      'app-status': Status,
      'app-footer': Footer,
    },
  };
</script>
