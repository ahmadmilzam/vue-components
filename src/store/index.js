import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

const CentralStore = new Vuex.Store({
  state: {
    value: 0,
  },
  getters: {
    getValue: state => state.value,
  },
  mutations: {
    updateValue: (state, payload) => {
      const theState = state;
      theState.value = payload;
    },
  },
  actions: {
    updateValue: ({ commit }, payload) => {
      commit('updateValue', payload);
    },
  },
  modules: {
    counter,
  },
});

export default CentralStore;
