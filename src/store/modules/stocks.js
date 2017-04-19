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
    randomize(state) {
      const theState = state;
      theState.stocks.forEach((stock) => {
        const theStock = stock;
        theStock.price = Math.round(stock.price * (1 + (Math.random() - 0.5)));
      });
    },
  },
  actions: {
    buy({ commit }, order) {
      commit('portfolio/buy', order, { root: true });
    },
    initStocks({ commit }) {
      commit('set', dummy);
    },
    randomize({ commit }) {
      commit('randomize');
    },
  },
};
