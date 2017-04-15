import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const counterStore = new Vuex.Store({
  state: {
    counter: 0,
  },
});

export default counterStore;
