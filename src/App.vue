<template>
  <div id="app-container" class="o-wrapper">
    <user></user>
  </div>
</template>

<script>
  import User from './components/users/User.vue';

  export default {
    components: {
      user: User,
    },
  };
</script>
