import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import * as actions from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const CentralStore = new Vuex.Store({
  actions,
  modules: {
    stocks,
    portfolio,
  },
  strict: debug,
});

export default CentralStore;
