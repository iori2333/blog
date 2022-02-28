import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

NProgress.configure({ showSpinner: false });

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/IndexPage.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/archive/view/:id',
    name: 'view archive',
    component: () => import('../pages/ArticleViewPage.vue')
  },
  {
    path: '/archive/tag',
    name: 'all tags',
    redirect: '/archive/tag/all'
  },
  {
    path: '/archive/tag/:tag',
    name: 'tag',
    component: () => import('../pages/ArticleTagPage.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../pages/MyPage.vue'),
    meta: {
      title: 'Me'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import('../pages/ErrorPage.vue'),
    meta: {
      title: 'Error'
    }
  }
] as RouteRecordRaw[];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
});

router.afterEach(() => {
  NProgress.done();
});
