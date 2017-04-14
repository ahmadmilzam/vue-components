<template>
  <div id="app-container">
    <navbar></navbar>

    <div class="o-wrapper u-padding-top u-padding-bottom">
      <div class="o-layout">
        <div class="o-layout__item">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/layouts/navbar/Navbar.vue';

  export default {
    data() {
      return {

      };
    },
    components: {
      Navbar,
    },
    methods: {

    },
  };
</script>
