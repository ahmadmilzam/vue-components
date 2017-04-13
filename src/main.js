import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import './scss/main.scss';

Vue.use(VueRouter);

window.app = new Vue({
  el: '#app',
  render: createElement => createElement(App),
});
