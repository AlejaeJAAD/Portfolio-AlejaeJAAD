/** @format */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing.vue';
import Error from '../components/Global/Error.vue';
import { auth } from '../firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Landing,
  },
  {
    path: '/error',
    name: 'error',
    component: Error,
  },
  {
    path: '/rickandmorty',
    name: 'rickandmorty',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Music.vue'),
    components: {
      default: () => import('../views/Rickandmorty.vue'),
    },
  },
  {
    path: '/music',
    name: 'music',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Music.vue'),
    components: {
      default: () => import('../views/Music.vue'),
    },
  },
  {
    path: '/crudLS',
    name: 'crudLS',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Music.vue'),
    components: {
      default: () => import('../views/CrudFirebase.vue'),
    },
  },
  {
    path: '/crudLS/register',
    name: 'crudLS/register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Music.vue'),
    components: {
      default: () => import('../components/CrudFirebase/Register.vue'),
    },
  },
  {
    path: '/crudLS/login',
    name: 'crudLS/login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Music.vue'),
    components: {
      default: () => import('../components/CrudFirebase/Login.vue'),
    },
  },
  {
    path: '/crudLS/dashboard',
    name: 'crudLS/dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Music.vue'),
    components: {
      default: () => import('../components/CrudFirebase/Dashboard.vue'),
    },
    meta: {
      auth: true,
    },
  },
  {
    path: '/json',
    name: 'json',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Music.vue'),
    components: {
      default: () => import('../views/Json.vue'),
      nav: () => import('../components/Global/Nav.vue'),
    },
  },
  {
    path: '/crud',
    name: 'crud',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Music.vue'),
    components: {
      default: () => import('../views/Crud.vue'),
    },
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Music.vue'),
    components: {
      default: () => import('../views/Test.vue'),
      nav: () => import('../components/Global/Nav.vue'),
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.auth);

  if (requiresAuth && !auth.currentUser) {
    next('/crudLS/login');
  } else {
    next();
  }
});

export default router;
