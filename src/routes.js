import Home from './components/staticpage/Home.vue';
import About from './components/staticpage/About.vue';
import Contact from './components/staticpage/Contact.vue';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
];
