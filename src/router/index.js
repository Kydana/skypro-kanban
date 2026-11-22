import ExitModalView from '@/views/ExitModalView.vue'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import TaskModalView from '@/views/TaskModalView.vue'
import TasksView from '@/views/TasksView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const redirectQuery = window.location.search
if (redirectQuery.startsWith('?/')) {
  const restoredPath = redirectQuery.slice(2).replace(/~and~/g, '&')
  window.history.replaceState(null, '', import.meta.env.BASE_URL + restoredPath)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "home",
        },
        {
          path: "tasks/:id",
          name: "tasks",
          component: TasksView,
        },
        {
          path: "task-modal",
          name: "task",
          component: TaskModalView
        }
      ],
    },
    {
      path: "/sign-in",
      component: SignInView,
    },
    {
      path: "/sign-up",
      component: SignUpView,
    },
    {
      path: "/exit-modal",
      component: ExitModalView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('userInfo')

  if (to.meta.requiresAuth && !token) {
    next('/sign-in')
  } else {
    next()
  }
})

export default router
