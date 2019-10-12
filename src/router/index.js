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

Vue.use(Router)

export default new Router({
  routes: [

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
    }

  ]
})
