import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/SignLayout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('pages/LoginPage.vue')
      },
      {
        path: 'register',
        component: () => import('pages/RegisterPage.vue')
      },
      {
        path: 'forgot',
        component: () => import('pages/ForgotPage.vue')
      }
    ],
  },
  {
    path: '/detail',
    component: () => import('layouts/PageLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/DetailPage.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
