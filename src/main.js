import Vue from 'vue';
import App from './js/App.vue';

import './scss/main.scss';

window.app = new Vue({
  el: '#app',
  render: createElement => createElement(App),
});
