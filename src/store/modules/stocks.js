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
      const scope = state;
      scope.stocks = stocks;
    },
    random() {},
  },
  actions: {
    buy({ commit }, order) {
      commit('portfolio/buy', order, { root: true });
    },
    initStocks({ commit }) {
      commit('set', dummy);
    },
    randomizeStocks({ commit }) {
      commit('random');
    },
  },
};
