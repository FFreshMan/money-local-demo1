import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';


Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    component: Money
  },
  {
  path:'/Money',
    name:'Money',
    component:Money
  },
  {
    path: "/Labels",
    name: "Labels",
    component: Labels
  },
  {
    path: "/Statistics",
    component: Statistics
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;
