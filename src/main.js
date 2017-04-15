import Vue from 'vue';
// import VueRouter from 'vue-router';

import counterStore from './store/counter';
import App from './App.vue';
// import routes from './routes';
import './scss/main.scss';

// Vue.use(VueRouter);

// console.log(routes);

// const router = new VueRouter({
  // routes,
//   mode: 'history',
//   scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition;
//     }
//     if (to.hash) {
//       return {
//         selector: to.hash,
//       };
//     }
//     return { x: 0, y: 0 };
//   },
// });

window.app = new Vue({
  // router,
  store: counterStore,
  el: '#app',
  render: createElement => createElement(App),
});
