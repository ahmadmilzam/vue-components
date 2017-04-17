import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/index';
import routes from './routes';
import App from './App.vue';
import './scss/main.scss';

Vue.use(VueRouter);

Vue.filter('currency', value => value.toLocaleString('id', { style: 'currency', currency: 'IDR' }));

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return { x: 0, y: 0 };
  },
});

window.app = new Vue({
  router,
  store,
  el: '#app',
  render: createElement => createElement(App),
});
