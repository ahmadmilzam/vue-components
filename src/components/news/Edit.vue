<template>
  <div class="c-panel">
    <div class="c-panel__body">
      <h2>Edit News</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <button
        :disabled="confirmed"
        @click="confirmed = true"
        type="button" class="c-btn c-btn--primary">Save</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'News Edit',
        confirmed: false,
      };
    },
    methods: {},
    beforeRouteEnter(to, from, next) {
      const userIsAllowed = true;
      if (userIsAllowed) {
        next();
      } else {
        // next({ name: 'homeURL' });
        next(false);
      }
    },
    beforeRouteLeave(to, from, next) {
      if (this.confirmed) {
        next();
      } else if (confirm('Are you sure to leave the page? You are not edit anything yet.')) {
        console.log('need confirmation');
        next();
      } else {
        console.log('cannot leave the page');
        next(false);
      }
    },
    created() {
      window.document.title = this.title;
    },
  };
</script>
