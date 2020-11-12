import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registrationpage from '../views/registrationpage.vue'
import Introducedpage from '../views/introduced/introducedpage.vue'
import Honorpage from '../views/introduced/honorpage.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/registrationpage',
        name: 'Registrationpage',
        component: Registrationpage
    },
    {
        path: '/introducedpage',
        name: 'Introducedpage',
        component: Introducedpage
    },
    {
        path: '/honorpage',
        name: 'Honorpage',
        component: Honorpage
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router