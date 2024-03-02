import {createRouter, createWebHashHistory} from "vue-router"

const routes =[
    {
        path: '/token',
        component: () => import('../pages/AutorizacionToken.vue')
    },
    {
        path: '/guardar',
        component: () => import('../pages/EstudiantePagina.vue')
    }
    ,
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/NotFoundPage.vue')
    }
]

const router = createRouter({history: createWebHashHistory(), routes})

export default router;