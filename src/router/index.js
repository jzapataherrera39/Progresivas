import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import("../components/Inicio.vue") 
  },
  {
    path: "/siguiente",
    name: "actividades",
    component: () => import('../components/Inicio.vue')
  },
  {
    path: "/contenido",
    name: "contenido",
    component: () => import("../components/contenido.vue")
  },
  {
    path: "/evaluacion",
    name: "evaluacion",
    component: () => import("../components/evaluacion.vue")
  },
  {
    path: "/creditos",
    name: "creditos",
    component: () => import("../components/creditos.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router