import Home from './components/staticpage/Home.vue';
import About from './components/staticpage/About.vue';
import Contact from './components/staticpage/Contact.vue';
import NewsList from './components/news/List.vue';
import NewsDetail from './components/news/Detail.vue';
import NewsEdit from './components/news/Edit.vue';

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
