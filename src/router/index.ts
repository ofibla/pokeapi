import { createRouter, createWebHistory } from "vue-router"
import { useUserStore } from "@/stores/useUserStore"
import PrivateLayout from "@/components/PrivateLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: PrivateLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeView.vue")
        },
        {
          path: "pokemon",
          name: "pokemon",
          component: () => import("@/views/PokeRandomView.vue")
        },
        {
          path: "add_trainers", 
          name: "add_trainers",
          component: () => import("@/views/AddTrainers.vue")
        },
        {
          path: "trainers_list", 
          name: "trainers_list",
          component: () => import("@/views/TrainersList.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/notFound.vue")
    }
  ]
})

export default router


router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.isLogged) {
    next({ name: "login" })
  } else {
    next()
  }
})
