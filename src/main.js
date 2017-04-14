import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import routes from './routes';
import './scss/main.scss';

Vue.use(VueRouter);

// console.log(routes);

const router = new VueRouter({
  routes,
});

window.app = new Vue({
  router,
  el: '#app',
  render: createElement => createElement(App),
});
