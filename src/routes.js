/* eslint-disable global-require */

const Home = (resolve) => {
  require.ensure([], () => resolve(require('./components/staticpage/Home.vue')), 'home');
};

const About = (resolve) => {
  require.ensure([], () => resolve(require('./components/staticpage/About.vue')), 'about');
};

const Contact = (resolve) => {
  require.ensure([], () => resolve(require('./components/staticpage/Contact.vue')), 'contact');
};

const NewsList = (resolve) => {
  require.ensure([], () => resolve(require('./components/news/List.vue')), 'news-group');
};

const NewsDetail = (resolve) => {
  require.ensure([], () => resolve(require('./components/news/Detail.vue')), 'news-group');
};

const NewsEdit = (resolve) => {
  require.ensure([], () => resolve(require('./components/news/Edit.vue')), 'news-group');
};


function forceIDToNumber(route) {
  return {
    id: parseInt(route.params.id, 10),
  };
}

export default [
  {
    path: '/',
    name: 'homeURL',
    component: Home,
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
  {
    path: '/news',
    name: 'newsURL',
    component: NewsList,
  },
  {
    path: '/news/:id(\\d+)',
    name: 'newsDetailURL',
    component: NewsDetail,
    props: forceIDToNumber,
    children: [
      {
        path: 'edit',
        name: 'newsEditURL',
        component: NewsEdit,
      },
    ],
  },
  {
    path: '*',
    redirect: {
      name: 'homeURL',
    },
  },
];
