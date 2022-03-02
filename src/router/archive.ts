import { RouteRecordRaw } from 'vue-router';

export const archiveRoutes: RouteRecordRaw[] = [
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
    path: '/archive/search/:keyword',
    name: 'search',
    component: () => import('../pages/ArticleSearchPage.vue')
  }
];
