<template>
  <div class="c-navbar">
    <div class="o-wrapper">
      <router-link class="c-navbar__title" :to="{ name: 'homeURL' }" exact active-class="">{{ title }}</router-link>
      <nav class="c-navbar__menu">
        <router-link class="c-navbar__link" :to="{ name: 'homeURL' }" exact active-class="is-active">Home</router-link>
        <router-link class="c-navbar__link" :to="{ name: 'portfolioURL' }" active-class="is-active">Portfolio</router-link>
        <router-link class="c-navbar__link" :to="{ name: 'stockURL' }" active-class="is-active">Stock</router-link>
        <router-link class="c-navbar__link" :to="{ name: 'stockURL' }" active-class="is-active">
          <span class="c-dropdown">
            Stocks
            <span class="c-dropdown__caret"></span>
          </span>
        </router-link>
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
