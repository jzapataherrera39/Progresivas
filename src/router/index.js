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
    name: "NuevoC",
    component: () => import('../views/ComponenteNuevo.vue')
  },
  {
    path: "/contenido",
    name: "Contenido",
    component: () => import("../views/contenido.vue")
  },
  {
    path: "/evaluacion",
    name: "Evaluacion",
    component: () => import("../views/evaluacion.vue")
  },
  {
    path: "/creditos",
    name: "Creditos",
    component: () => import("../views/credito.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router