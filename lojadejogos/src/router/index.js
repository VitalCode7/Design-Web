import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JogosView from '@/views/JogosView.vue'
import ContatoView from '@/views/ContatoView.vue'
import NoticiasView from '@/views/NoticiasView.vue'
import PromocoesView from '@/views/PromocoesView.vue'
import SobreView from '@/views/SobreView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/jogos', name: 'Jogos', component: JogosView },
  { path: '/noticias', name: 'Noticias', component: NoticiasView },
  { path: '/promocoes', name: 'Promocoes', component: PromocoesView },
  { path: '/sobre', name: 'Sobre', component: SobreView },
  { path: '/contato', name: 'Contato', component: ContatoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router