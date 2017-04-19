import Vue from 'vue';

const loadData = ({ commit }) => {
  Vue.http.get('data.json')
          .then(response => response.json())
          .then((data) => {
            if (data) {
              console.log('Loaded data', data);
              const funds = data.funds;
              const portfolioStocks = data.portfolioStocks;
              const stocks = data.stocks;
              const portfolio = {
                funds,
                stocks: portfolioStocks,
              };
              commit('stocks/set', stocks);
              commit('portfolio/set', portfolio);
            }
          });
};

const sayHello = () => {
  console.log('HELLOOOOOOOOOOOO');
};

export { loadData, sayHello };
