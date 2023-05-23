import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MedlemsskabView from '../views/MedlemsskabView.vue'
import kalenderView from '../views/kalenderView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/kalender',
      name: 'kalender',
      component: kalenderView,
    },
    {
      path: '/om',
      name: 'omBronx',
      component: AboutView,
    }, 
    {
      path: '/medlemsskab',
      name: 'medlemsskab',
      component: MedlemsskabView
    },
  ]
})
export default router
