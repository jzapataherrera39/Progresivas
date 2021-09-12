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
_________________________________________________________________
import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/inicio'
import contenido from "../components/contenido";
import creditos from "../components/creditos";
import entrada from "../components/entrada.vue";
import acti1 from "../components/h5p/actividad1";
import acti2 from "../components/h5p/actividad2";
import actividades from"../components/actividades";
import evaluacion from"../components/evaluacion";
import eva from "../components/h5p/evaluacion";
Vue.use(VueRouter)

const routes = [
     {
        path: '/',
        name: 'inicio',
        component: Inicio
     },
    {
        path: '/entrada',
        name: 'entrada',
        component : entrada,
       
        children: [
         {
          path: '/contenido',
          name: 'contenido',
          component: contenido,
         },
         {
          path: '/actividades',
          name: 'actividades',
          component: actividades,
          children: [

          {
               path: 'acti1',
               name: 'acti1',
               component: acti1,
            },
            {
              path: 'acti2',
              name: 'acti2',
              component: acti2,
           }
        ],
        },
        {
          path: '/evaluacion',
          name: 'evaluacion',
          component: evaluacion,
          children: [
            {
               path: 'eva',
               name: 'eva',
               component: eva,
            },

        ],
          },
        {
         path: '/creditos',
         name: 'creditos',
         component: creditos,
         },
        ],
    }
 ]

const router = new VueRouter({
    mode: "history",
  base: process.env.BASE_URL,
    routes
})
 
export default router