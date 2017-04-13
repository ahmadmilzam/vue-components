import Vue from 'vue';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';

import App from './App.vue';
import './scss/main.scss';

Vue.use(VueResource);
Vue.use(VeeValidate);

Vue.directive('hl-basic', {
  bind(el) {
    const element = el;
    element.style.backgroundColor = '#ffe6e9';
  },
});

Vue.directive('hl-value', {
  bind(el, binding) {
    const element = el;
    element.style.backgroundColor = binding.value;
  },
});

Vue.directive('hl-arg', {
  bind(el, binding) {
    const element = el;
    if (binding.arg === 'background') {
      element.style.backgroundColor = binding.value;
    } else {
      element.style.color = binding.value;
    }
  },
});

Vue.directive('hl-mod', {
  bind(el, binding) {
    const element = el;
    let timeout = 0;
    if (binding.modifiers.delayed) {
      timeout = 3000;
    }
    setTimeout(() => {
      element.style.backgroundColor = binding.value;
    }, timeout);
  },
});

window.app = new Vue({
  el: '#app',
  render: createElement => createElement(App),
});
