import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { getAuth } from "firebase/auth";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tour',
      name: 'agenda',
      component: () => import('../views/AgendaView.vue'),
    },
    {
      path: '/bio',
      name: 'bio',
      component: () => import('../views/BioView.vue'),
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('../views/VideoView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});
export default router
