export default {
  namespaced: true,
  state() {
    return {
      funds: 10000000,
      stocks: [],
    };
  },
  getters: {
    stocks(state, getters, rootState, rootGetters) {
      const theStocks = state.stocks.map((stock) => {
        const record = rootGetters['stocks/stocks'].find(element => element.id === stock.id);
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price,
        };
      });
      return theStocks;
    },
    funds(state) {
      return state.funds;
    },
  },
  mutations: {
    buy(state, { id, quantity, price }) {
      const record = state.stocks.find(item => item.id === id);
      const theState = state;

      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({
          id,
          quantity,
        });
      }

      theState.funds -= price * quantity;
    },
    sell(state, { id, quantity, price }) {
      const record = state.stocks.find(item => item.id === id);
      const theState = state;

      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }

      theState.funds += price * quantity;
    },
  },
  actions: {
    sell({ commit }, order) {
      commit('sell', order);
    },
  },
};
