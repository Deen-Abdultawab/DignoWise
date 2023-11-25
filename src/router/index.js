import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import '../assets/global.css'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/UserDetails.vue')
  },
  {
    path: '/chat/:userId',
    name: 'chat',
    component: () => import('../views/ChatPage.vue'),
    props: true
  },
  {
    path: '/settings/:userId',
    name: 'settings',
    component: () => import('../views/Settings.vue'),
    props: true
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/Terms.vue'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/Privacy.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
