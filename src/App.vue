<template>
  <div id="app-container" class="o-wrapper u-padding-top u-padding-bottom">
    <main-header></main-header>
    <quote></quote>
    <alert>
      <p>Info: Click on a close button inside a quote to delete it.</p>
    </alert>
  </div>
</template>

<script>
  import Quote from './components/quotes/Quote.vue';
  import Header from './components/layout/Header.vue';
  import Alert from './components/alerts/Alert.vue';

  export default {
    data() {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'quote',
      };
    },
    components: {
      quote: Quote,
      mainHeader: Header,
      alert: Alert,
    },
  };
</script>
