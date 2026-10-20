import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JogosView from '@/views/JogosView.vue'
import ContatoView from '@/views/ContatoView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/jogos',
    name: 'Jogos',
    component: JogosView
  },
  {
    path: '/contato',
    name: 'Contato',
    component: ContatoView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router