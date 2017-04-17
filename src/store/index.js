import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex);

const CentralStore = new Vuex.Store({
  modules: {
    stocks,
    portfolio,
  },
});

export default CentralStore;
