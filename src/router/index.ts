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
    path: '/archive/view/:id',
    name: 'view archive',
    component: () => import('../pages/ArticleViewPage.vue')
  },
  {
    path: '/archive/tag/:tag',
    name: 'tag',
    component: () => import('../pages/MyPage.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../pages/MyPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import('../pages/ErrorPage.vue')
  }
] as RouteRecordRaw[];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
