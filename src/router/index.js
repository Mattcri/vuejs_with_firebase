import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    meta: {
      login: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//callback del router
// to = donde va 
// from = donde vino - sino puede ir para adelante regresalo hacia atrás
// next = destino 
router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authRequire = to.matched.some(route => route.meta.login) //pregunta si tiene el meta login = true
  if(!user && authRequire) {
    next('/')
  } else {
    next()
  }

})

export default router
