import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router=[
  //404
  {
    path: '/err/404',
    name: '/err/404',
    component: (resolve)=>{
      return require(['../pages/error/notfound'],resolve);
    }
  },
  {
    path: '/taobao',
    name: '/taobao',
    component: (resolve)=>{
      return require(['../pages/auth/taobao'],resolve);
    }
  },
]


export default new Router({
    //mode: 'history',
    routes: router
  })
  