import Vue from 'vue'
import VueRouter from 'vue-router'

//后台引入
import serveHome from '../views/serveHome.vue'
import imain from '../components/serve/home/Main.vue'
import docs from '../components/serve/users/doc.vue'
import patients from '../components/serve/users/patients.vue'
import regist from '../views/serve/registration.vue'
import drugs from '../views/serve/drugAdmin.vue'
import sys from '../views/serve/system.vue'
import work from '../views/serve/working.vue'
import pay from '../views/serve/charge.vue'



//前台引入
import Home from '../views/Home.vue'
import Introducedpage from '../views/client/introduced/introducedpage.vue'
import Honorpage from '../views/client/introduced/honorpage.vue'
import Leadershippage from '../views/client/introduced/leadershippage.vue'
import Registrationpage from '../views/client/hospitalize/registrationpage.vue'
import DoctorInformation from '../views/client/hospitalize/doctorinformationpage.vue'
import DoctorInformationpage2 from '../views/client/hospitalize/doctorinformationpage2.vue'
import Searchpage from '../views/client/hospitalize/searchpage.vue'
import Haoyuanpage from '../views/client/hospitalize/haoyuanpage.vue'
import Haoyuanxiapage from '../views/client/hospitalize/haoyuanxiapage.vue'
import Querenpage from '../views/client/hospitalize/querenpage.vue'
import Guahaodan from '../views/client/hospitalize/guahaodanpage.vue'
import PersonalCenter from '../views/client/personalcenters/personalcenter.vue'
import RegistrationRecord from '../views/client/personalcenters/registrationrecord.vue'
import Patientrecord from '../views/client/personalcenters/patientrecord.vue'

import drug from '../views/client/drug/drug.vue'
import monad from '../views/client/drug/monad.vue'


import Administrativepage from '../views/client/administrative office/Administrativepage.vue'
import outpatient from '../views/client/administrative office/outpatient.vue'
import dept from '../views/client/administrative office/dept.vue'
import alldept from '../views/client/administrative office/alldept.vue'
import relation from '../views/client/exchange/relation.vue'
import library from '../views/client/research/library.vue'
import user from '../views/client/users/user.vue'

import client from '../views/client/Client.vue'

Vue.use(VueRouter)

const routes = [

  // 后台系统
  {
    path: '/serve',
    name: 'serveHome',
    component: serveHome,
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
  // 前台/首页
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{

      path: '',
      name: 'client',
      component: client
    },
    {
      path: 'introducedpage',
      name: 'Introducedpage',
      component: Introducedpage
    },
    {
      path: 'honorpage',
      name: 'Honorpage',
      component: Honorpage
    },
    {
      path: 'leadershippage',
      name: 'Leadershippage',
      component: Leadershippage
    },
    {
      path: 'personalcenter',
      name: 'PersonalCenter',
      component: PersonalCenter,
      children: [{
        path: 'registrationrecord',
        name: 'RegistrationRecord',
        component: RegistrationRecord
      },
      {
        path: 'patientrecord',
        name: 'Patientrecord',
        component: Patientrecord
      },
      ]
    },
    {
      path: 'registrationpage',
      name: 'Registrationpage',
      component: Registrationpage,
      children: [{
        path: 'doctorInformation',
        name: 'DoctorInformation',
        component: DoctorInformation
      },

      {
        path: 'doctorInformationpage2',
        name: 'DoctorInformationpage2',
        component: DoctorInformationpage2
      },
      {
        path: 'searchpage',
        name: 'Searchpage',
        component: Searchpage
      },
      {
        path: 'haoyuanpage',
        name: 'Haoyuanpage',
        component: Haoyuanpage,
        children: [{
          path: 'querenpage',
          name: 'Querenpage',
          component: Querenpage
        }]
      },
      {
        path: 'haoyuanxiapage',
        name: 'Haoyuanpagexia',
        component: Haoyuanxiapage
      },
      {
        path: 'guahaodanpage',
        name: 'Guahaodan',
        component: Guahaodan
      }

      ]
    },

    {
      path: '/drug',
      name: 'drug',
      component: drug
    },
    {
      path: '/monad',
      name: 'monad',
      component: monad
    },
    // 部门路由
    {
      path: 'dept',
      name: 'dept',
      component: dept,
      children: [
        {
          path: 'administrativepage',
          name: 'Administrativepage',
          component: Administrativepage,
          children: [
            {
              path: 'alldept',
              name: 'alldept',
              component: alldept
            }]
        },
        {
          path: 'outpatient',
          name: 'outpatient',
          component: outpatient,
          children: [
            {
              path: 'alldept',
              name: 'alldept',
              component: alldept
            },]
        },
      ]
    },
    {
      path: 'relation',
      name: 'relation',
      component: relation
    }, {
      path: 'library',
      name: 'library',
      component: library
    },
    {
      path: 'user',
      name: 'user',
      component: user,
      meta: {
        keepAlive: true
      }
    }
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
