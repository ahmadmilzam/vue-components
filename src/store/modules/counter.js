export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  getters: {
    counter: state => state.counter,
    doubleCounter: state => state.counter * 2,
    clickCounter: state => `${state.counter} click`,
  },
  mutations: {
    increment: (state, payload) => {
      const theState = state;
      theState.counter += payload;
    },
    decrement: (state, payload) => {
      const theState = state;
      theState.counter -= payload;
    },
  },
  actions: {
    increment: ({ commit }, payload) => {
      let param = payload;
      if (typeof param === 'object') {
        param = 1;
      }
      console.log('payload', param);
      commit('increment', param);
    },
    decrement: ({ commit }, payload) => {
      let param = payload;
      if (typeof param === 'object') {
        param = 1;
      }
      console.log('payload', param);
      commit('decrement', param);
    },
    incrementAsync: ({ commit }, payload) => {
      // payload can be pass as Object.
      // all you need to do is pass an object in the method call
      // payload = {
      //   param1: 'value',
      //   param2: 'value',
      //   paramN: 'valueN'
      // }
      let param = payload;
      if (typeof param === 'object') {
        param = 1;
      }
      setTimeout(() => {
        commit('increment', param);
      }, 2000);
    },
    decrementAsync: ({ commit }, payload) => {
      // payload can be pass as Object.
      // all you need to do is pass an object in the method call
      // payload = {
      //   param1: 'value',
      //   param2: 'value',
      //   paramN: 'valueN'
      // }
      let param = payload;
      if (typeof param === 'object') {
        param = 1;
      }
      setTimeout(() => {
        commit('decrement', param);
      }, 2000);
    },
  },
};
