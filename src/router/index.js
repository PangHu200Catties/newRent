import Vue from 'vue'
import Router from 'vue-router'

import homepage from '@/components/homepage'
import search from '@/components/search'
import user from '@/components/user'
import login from '@/components/login'
import userinfo from '@/components/userinfo'
import admin from '@/components/admin'
import topbar from '@/components/topbar'
import foot from '@/components/foot'
import show from '@/components/show'
import register from '@/components/register'
import end_login from '@/components/end_login'
import end_index from '@/components/end_index'
import end_users from '@/components/end_users'
import end_nohouse from '@/components/end_nohouse'
import end_dohouse from '@/components/end_dohouse'
import end_checkhouse from '@/components/end_checkhouse'
import end_landlord from '@/components/end_landlord'
import end_landlorduser from '@/components/end_landlorduser'
import end_housepic from '@/components/end_housepic'
import pay from '@/components/pay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/end_login',
      name: 'end_login',
      component: end_login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },{
      path: '/foot',
      name: 'foot',
      component: foot
    },
    {
      path: '/topbar',
      name: 'topbar',
      component: topbar,
      children:[
        {path:"",name:"homepage",component:homepage},
      ]
    },
    {
      path: '/show/:hid',
      name: 'show',
      component: show
    },
    {
      path: '/pay/:htitle/:price',
      name: 'pay',
      component: pay

    },
    {
      path: '/end_index',
      name: 'end_index',
      component: end_index,
      children:[
        {
          path: '/end_users',
          name: 'end_users',
          component: end_users,
        },
        {
          path: '/end_dohouse',
          name: 'end_dohouse',
          component: end_dohouse
        },
        {
          path: '/end_nohouse',
          name: 'end_nohouse',
          component: end_nohouse
        },
        {
          path: '/end_checkhouse',
          name: 'end_checkhouse',
          component: end_checkhouse
        },
        {
          path: '/end_landlord',
          name: 'end_landlord',
          component: end_landlord
        },
        {
          path: '/end_landlorduser/:ausername',
          name: 'end_landlorduser',
          component: end_landlorduser
        },
        {
          path: '/end_housepic',
          name: 'end_housepic',
          component: end_housepic
        }

      ]

    }
  ]
})
