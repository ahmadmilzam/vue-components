import dummy from '../../dummy/stocks';

export default {
  namespaced: true,
  state() {
    return {
      stocks: [],
    };
  },
  getters: {
    stocks(state) { return state.stocks; },
  },
  mutations: {
    set(state, stocks) {
      console.log('setting up stocks');
      const scope = state;
      scope.stocks = stocks;
    },
    random() {},
  },
  actions: {
    buy({ commit }, order) {
      console.log('stock ordered', order);
      commit('portfolio/buy', order, { root: true });
    },
    initStocks({ commit }) {
      console.log('will commit set stocks');
      commit('set', dummy);
    },
    randomizeStocks({ commit }) {
      commit('random');
    },
  },
};
