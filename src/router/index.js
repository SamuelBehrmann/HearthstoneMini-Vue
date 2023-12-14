import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import RulesView from '../views/RulesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      meta: {
        title: 'Home'
      },
      name: 'home',
      path: '/'
    },
    {
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: GameView,
      meta: {
        title: 'Game'
      },
      name: 'game',
      path: '/game',
    },
    {
      component: () => import('../views/GameSettings.vue'),
      meta: {
        title: 'GameSettings'
      },
      name: 'gameSettings',
      path: '/gameSettings'
    },
    {
      component: RulesView,
      meta: {
        title: 'Rules'
      },
      name: 'rules',
      path: '/rules'
    }
  ]
})

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Default Title'
})
export default router
