import Vue from 'vue'
import Router from 'vue-router'
import Waimai from '@/components/Waimai'
import Faxian from '@/components/Faxian'
import Dingdan from '@/components/Dingdan'
import Wode from '@/components/Wode'
import Car from '@/components/Car'
import Regist from '@/components/Regist'
import Login from '@/components/Login'
import Xiangqing from '@/components/Xiangqing'
import Search from '@/components/Search'
import Details from "@/components/Details"
import Mtest from "@/components/Mtest"


import Hello from '@/components/Hello'

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Waimai',
      component: Waimai
    },
    {
      path: '/faxian',
      name: 'Faxian',
      component: Faxian
    },
    {
      path: '/dingdan',
      name: 'Dingdan',
      component: Dingdan
    },
    {
      path: '/wode',
      name: 'Wode',
      component: Wode
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/xiangqing',
      name: 'Xiangqing',
      component: Xiangqing
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/mtest',
      name: 'Mtest',
      component: Mtest
    }
  ]
})
