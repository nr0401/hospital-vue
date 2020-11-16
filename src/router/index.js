import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/serveHome.vue'

import imain from '../components/serve/home/Main.vue'

import docs from '../components/serve/users/doc.vue'
import patients from '../components/serve/users/patients.vue'

import regist from '../views/serve/registration.vue'

import drugs from '../views/serve/drugAdmin.vue'
import sys from '../views/serve/system.vue'
import work from '../views/serve/working.vue'

import pay from '../views/serve/charge.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/serve',
    name: 'Home',
    component: Home,
    children: [
      // 主页
      {
        path: '',
        component: imain
      },
      // 医生
      {
        path: 'users/doc',
        component: docs,
      },
      // 患者
      {
        path: 'users/patients',
        component: patients
      },
      // 挂号系统
      {
        path: 'registration',
        component: regist
      },
      // 排班信息
      {
        path: 'working',
        component: work
      },
      // 收费信息
      {
        path: 'logistics/charge',
        component: pay,
      },
      // 药房管理
      {
        path: 'logistics/drug',
        component: drugs
      },
      // 系统管理
      {
        path: 'system',
        component: sys
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
