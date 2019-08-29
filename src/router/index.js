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
    path: '/err/500',
    name: '/err/500',
    component: (resolve)=>{
      return require(['../pages/error/internalerro'],resolve);
    }
  },
  {
    path: '/err/403',
    name: '/err/403',
    component: (resolve)=>{
      return require(['../pages/error/403'],resolve);
    }
  },
  //首页
  {
    path: '/',
    name: '/',
    component: (resolve)=>{
      return require(['../pages/index'],resolve);
    }
  },
  //用户页面
  {
    path: '/user',
    name: '/user',
    component: (resolve)=>{
      return require(['../pages/user/index'],resolve);
    }
  },
  //购物页面
  {
    path: '/shopping',
    name: '/shopping',
    component: (resolve)=>{
      return require(['../pages/shopping/index'],resolve);
    }
  },
]








export default new Router({
  mode: 'history',
  routes: router
})
