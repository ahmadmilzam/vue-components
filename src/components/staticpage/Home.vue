<template>
  <div class="c-panel">
    <div class="c-panel__body">
      <div class="c-panel__title u-margin-bottom">{{ title }}</div>
      <p>Welcome</p>
      <p>Trade or View your Portfolio.</p>
      <p>You may Save &amp; Load your data.</p>
      <p>Click on 'End Day' to start a New Day!</p>
      <hr>
      <p>Your Funds: {{ funds | currency }}</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        title: 'Homepage Title',
      };
    },
    computed: {
      ...mapGetters('portfolio', [
        'funds',
      ]),
    },
    created() {
      window.document.title = this.title;
    },
  };
</script>
