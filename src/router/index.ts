import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/useUserStore";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: '/Pokemon',
            name: 'Pokemon',
            component: ()=> import('@/views/PokeRandomView.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: '/Form',
            name: 'add_trainers',
            component: ()=> import('@/views/AddTrainers.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: '/Trainers',
            name: 'trainers_list',
            component: ()=> import('@/views/TrainersList.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: '/login',
            name: 'login',
            component: ()=> import('@/views/Login.vue')
        },
        {
            path: '/:patMatch(.*)*',
            name: 'not-found',
            component: ()=> import('@/views/notFound.vue')
        }
    ]
})

export default router

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.requiresAuth && !userStore.isLogged) {
    next({ name: 'login' }) 
  } else {
    next() 
  }
})
