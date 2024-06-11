import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView/HomeView.vue';
import ExpenseListView from '../views/ExpenseListView/ExpenseListView.vue';
import LogInView from '../views/LogInView/LoginView.vue';
import SignUpView from '../views/SignUpView/SignUpView.vue';
import ProfileView from '../views/ProfileView/ProfileView.vue';
import ExpenseAnalysisView from '../views/ExpenseAnalysisView/ExpenseAnalysisView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: ExpenseListView,
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: ExpenseAnalysisView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
