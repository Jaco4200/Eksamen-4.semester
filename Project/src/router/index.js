import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MedlemsskabView from '../views/MedlemsskabView.vue'
import kalenderView from '../views/kalenderView.vue'
import LegoView from '../views/LegoView.vue'
import MadsView from '../views/MadsView.vue'
import FilmView from '../views/FilmView.vue'
import MalView from '../views/MalView.vue'
import QuizView from '../views/QuizView.vue'
import SpilView from '../views/SpilView.vue'
import FallesView from '../views/FallesView.vue'
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
    {
      path: '/lego',
      name: 'lego',
      component: LegoView
    },
    {
      path: '/mads',
      name: 'mads',
      component: MadsView
    },
    {
      path: '/film',
      name: 'film',
      component: FilmView
    },
    {
      path: '/mal',
      name: 'mal',
      component: MalView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView
    },
    {
      path: '/faellesspisning',
      name: 'falles',
      component: FallesView
    },
    {
      path: '/braetspilscafe',
      name: 'spil',
      component: SpilView
    },
    
  ]
})
export default router
