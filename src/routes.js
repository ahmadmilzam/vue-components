/* eslint-disable global-require */

const Home = (resolve) => {
  require.ensure([], () => resolve(require('./components/staticpage/Home.vue')), 'home');
};

const PortfolioList = (resolve) => {
  require.ensure([], () => resolve(require('./components/portfolio/List.vue')), 'portfolio');
};

const StockList = (resolve) => {
  require.ensure([], () => resolve(require('./components/stocks/List.vue')), 'stock');
};

const About = (resolve) => {
  require.ensure([], () => resolve(require('./components/staticpage/About.vue')), 'about');
};

const Contact = (resolve) => {
  require.ensure([], () => resolve(require('./components/staticpage/Contact.vue')), 'contact');
};

// function forceIDToNumber(route) {
//   return {
//     id: parseInt(route.params.id, 10),
//   };
// }

export default [
  {
    path: '/',
    name: 'homeURL',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'portfolioURL',
    component: PortfolioList,
  },
  {
    path: '/stock',
    name: 'stockURL',
    component: StockList,
  },
  {
    path: '/about',
    name: 'aboutURL',
    component: About,
  },
  {
    path: '/contact',
    name: 'contactURL',
    component: Contact,
  },
  // {
  //   path: '/news/:id(\\d+)',
  //   name: 'newsDetailURL',
  //   component: NewsDetail,
  //   props: forceIDToNumber,
  //   children: [
  //     {
  //       path: 'edit',
  //       name: 'newsEditURL',
  //       component: NewsEdit,
  //     },
  //   ],
  // },
  {
    path: '*',
    redirect: {
      name: 'homeURL',
    },
  },
];
