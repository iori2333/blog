import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { archiveRoutes } from './archive';
import { useLoadingBar } from '../hooks';

const loader = useLoadingBar();

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/IndexPage.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../pages/MyPage.vue'),
    meta: {
      title: 'Me'
    }
  },
  ...archiveRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import('../pages/ErrorPage.vue'),
    meta: {
      title: 'Error'
    }
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  loader.start();
  next();
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
});

router.afterEach(() => {
  loader.end();
});
