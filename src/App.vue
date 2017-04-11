<template>
  <div id="app-container" class="o-wrapper u-padding-top u-padding-bottom" style="background-color: #f5f5f5;">
    <div class="o-layout">
      <div class="o-layout__item">
        <h1>{{ title }}</h1>
        <hr>
        <h2>Animate Single Element</h2>
        <button class="c-btn c-btn--primary" type="button" @click="toggleAlert">Toggle Alert</button>
        <br>
        <br>
        <transition name="alert">
          <div v-if="showAlert === true" class="c-alert">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  // import Alert from './components/alerts/Alert.vue';

  export default {
    data() {
      return {
        title: 'Transition and Animation',
        showAlert: false,
      };
    },
    // components: {
    //   alert: Alert,
    // },
    methods: {
      toggleAlert() {
        this.showAlert = !this.showAlert;
      },
    },
  };
</script>
