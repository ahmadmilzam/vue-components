import Vue from 'vue';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';

import App from './App.vue';
import './scss/main.scss';

Vue.use(VueResource);
Vue.use(VeeValidate);

window.app = new Vue({
  el: '#app',
  render: createElement => createElement(App),
});
