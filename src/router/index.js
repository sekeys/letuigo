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
  //优惠热推
  {
    path: '/hotpush',
    name: '/hotpush',
    component: (resolve)=>{
      return require(['../pages/hotpush/index'],resolve);
    }
  },
  //优惠热推
  {
    path: '/talent',
    name: '/talent',
    component: (resolve)=>{
      return require(['../pages/talent/index'],resolve);
    }
  },
  //优惠热推
  {
    path: '/flash',
    name: '/flash',
    component: (resolve)=>{
      return require(['../pages/flash/index'],resolve);
    }
  },
  {
    path: '/howto/howtomakemoney',
    name: '/howto/howtomakemoney',
    component: (resolve)=>{
      return require(['../pages/instruction/howtomakemoney'],resolve);
    }
  },
  
]








export default new Router({
  //mode: 'history',
  routes: router
})
