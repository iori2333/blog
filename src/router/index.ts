import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

NProgress.configure({ showSpinner: false });

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/IndexPage.vue')
  },
  {
    path: '/archive',
    name: 'archives',
    component: () => import('../pages/IndexPage.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../pages/MyPage.vue')
  }
] as RouteRecordRaw[];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
