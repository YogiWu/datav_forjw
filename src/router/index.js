import Vue from 'vue'
import Router from 'vue-router'

import Home from 'bus/home/Home'
import index from 'bus/home/index'
import dataV from 'bus/home/dataView'
import Test1 from 'bus/home/Test1'
import Test2 from 'bus/home/Test2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/',
        name: 'index',
        component: index
      },{
        path: '/test1',
        name: 'test1',
        component: Test1
      },{
        path: '/test2',
        name: 'test2',
        component: Test2
      }]
    },
    {
      path: '/dataV',
      name: 'dataV',
      component: dataV
    }
  ]
})
