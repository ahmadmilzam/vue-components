<template>
  <div class="c-navbar">
    <div class="o-wrapper">
      <router-link class="c-navbar__title" to="/" exact active-class="">{{ title }}</router-link>
      <nav class="c-navbar__menu">
        <router-link class="c-navbar__link" to="/" exact active-class="is-active">Home</router-link>
        <router-link class="c-navbar__link" to="/about" active-class="is-active">About</router-link>
        <router-link class="c-navbar__link" to="/contact" active-class="is-active">Contact</router-link>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: 'Mini Vue App',
      };
    },
  };
</script>
