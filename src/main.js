import Vue from 'vue';
import App from './App.vue';

import './scss/main.scss';

window.app = new Vue({
  el: '#app',
  render: createElement => createElement(App),
});
