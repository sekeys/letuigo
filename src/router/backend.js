import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router=[
  {
    path: '/m/promotion',
    name: '/m/promotion',
    component: (resolve)=>{
      return require(['../pages/m/index'],resolve);
    },
    children:[
        //首页
        {
            path:"",
            name:"promotion/index",
            component:(resolve)=>{
                return require(['../pages/m/promotion/index'],resolve);
            }
        },
    ]
  },
  //团队
  {
    path: '/m/team',
    name: '/m/team',
    component: (resolve)=>{
      return require(['../pages/m/index'],resolve);
    },
    children:[
        //首页
        {
            path:"",
            name:"/m/team/index",
            redirect:"/m/team/information"
        },{
            path:"information",
            name:"/m/team/index",
            component:(resolve)=>{
                return require(['../pages/m/team/information'],resolve);
            }
        },{
            path:"members",
            name:"/m/team/members",
            component:(resolve)=>{
                return require(['../pages/m/team/information'],resolve);
            }
        }
    ]
  },
  //供应商
  {
    path: '/m/provider',
    name: '/m/provider',
    component: (resolve)=>{
      return require(['../pages/m/index'],resolve);
    },
    children:[
        //首页
        {
            path:"",
            name:"provider/index",
            component:(resolve)=>{
                return require(['../pages/m/promotion/index'],resolve);
            }
        },
    ]
  },
  
  //供应商
  {
    path: '/m/report',
    name: '/m/report',
    component: (resolve)=>{
      return require(['../pages/m/index'],resolve);
    },
    children:[
        //首页
        {
            path:"",
            name:"report/index",
            component:(resolve)=>{
                return require(['../pages/m/promotion/index'],resolve);
            }
        },
    ]
  },

  
  //供应商
  {
    path: '/m/account',
    name: '/m/account',
    component: (resolve)=>{
      return require(['../pages/m/index'],resolve);
    },
    children:[
        //首页
        {
            path:"",
            name:"account/index",
            component:(resolve)=>{
                return require(['../pages/m/promotion/index'],resolve);
            }
        },
    ]
  },
]






        


export default new Router({
  //mode: 'history',
  routes: router
})
