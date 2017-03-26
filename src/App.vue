<template>
  <div id="app-container" class="o-wrapper u-padding-top u-padding-bottom">
    <form-basic></form-basic>
  </div>
</template>

<script>
  import FormBasic from './components/forms/FormBasic.vue';

  export default {
    data() {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'quote',
      };
    },
    components: {
      formBasic: FormBasic,
    },
  };
</script>
