import { createRouter, createWebHistory } from 'vue-router'
import PokemonListView from '../views/PokemonListView.vue'
import PokemonDetailsView from '@/views/PokemonDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonListView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemon/:name',
      name: 'pokemon-details',
      props: true,
      component: PokemonDetailsView
    }
  ]
})

export default router
