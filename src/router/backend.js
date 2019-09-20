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
        {
          path:"supersearch",
          name:"promotion/supersearch",
          component:(resolve)=>{
              return require(['../pages/m/promotion/index'],resolve);
          }
        },
        {
          path:"collect",
          name:"/m/promotion/collect",
          component:(resolve)=>{
              return require(['../pages/m/promotion/index'],resolve);
          }
        },
        {
          path:"/m/promotion/subscribe",
          name:"/m/promotion/subscribe",
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
                return require(['../pages/m/report/index'],resolve);
            }
        },
        //首页
        {
            path:"orders",
            name:"report/orders",
            component:(resolve)=>{
                return require(['../pages/m/report/orders'],resolve);
            }
        },
        //首页
        {
            path:"revenue",
            name:"report/revenue",
            component:(resolve)=>{
                return require(['../pages/m/report/revenue'],resolve);
            }
        },
        //分佣记录
        {
            path:"subcommission",
            name:"report/subcommission",
            component:(resolve)=>{
                return require(['../pages/m/report/subcommission'],resolve);
            }
        },
    ]
  },

  
  //账号
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
                return require(['../pages/m/account/index'],resolve);
            }
        },
        //首页
        {
            path:"information",
            name:"account/information",
            component:(resolve)=>{
                return require(['../pages/m/account/information'],resolve);
            }
        },
        //certify
        {
          path:"certify",
          name:"account/certify",
          component:(resolve)=>{
              return require(['../pages/m/account/idcertify'],resolve);
          }
        },
        //certifing
        {
          path:"certifing",
          name:"account/certifing",
          component:(resolve)=>{
              return require(['../pages/m/account/idcertifing'],resolve);
          }
        },
        //payaccount
        {
          path:"payaccount",
          name:"account/payaccount",
          component:(resolve)=>{
              return require(['../pages/m/account/payaccount'],resolve);
          }
        },
        {
          path:"payaccount/add",
          name:"account/payaccount/add",
          component:(resolve)=>{
              return require(['../pages/m/account/payaccount.add'],resolve);
          }
        },
        //payaccount/add
        {
          path:"payaccount/add",
          name:"account/payaccount/add",
          component:(resolve)=>{
              return require(['../pages/m/account/payaccount'],resolve);
          }
        },
        //provider
        {
          path:"provider",
          name:"account/provider",
          component:(resolve)=>{
              return require(['../pages/m/account/providercertify'],resolve);
          }
        },
        //settlement/income
        {
          path:"settlement/income",
          name:"account/settlement/income",
          component:(resolve)=>{
              return require(['../pages/m/account/settlement/income'],resolve);
          }
        },
        //settlement/cashout
        {
          path:"settlement/withdraw",
          name:"account/settlement/withdraw",
          component:(resolve)=>{
              return require(['../pages/m/account/settlement/cashout'],resolve);
          }
        },
        //talent/media
        {
          path:"talent/media",
          name:"account/talent/media",
          component:(resolve)=>{
              return require(['../pages/m/account/talent/mediaaccount'],resolve);
          }
        },
        //talent/video
        {
          path:"talent/video",
          name:"account/talent/video",
          component:(resolve)=>{
              return require(['../pages/m/account/talent/media'],resolve);
          }
        },
        //talent/video
        {
          path:"talent/applypromotion",
          name:"account/talent/configure",
          component:(resolve)=>{
              return require(['../pages/m/account/talent/applypromotion'],resolve);
          }
        },
        //talent/configure
        {
          path:"talent/configure",
          name:"account/talent/configure",
          component:(resolve)=>{
              return require(['../pages/m/account/talent/configure'],resolve);
          }
        },
    ]
  },
]






        


export default new Router({
  //mode: 'history',
  routes: router
})
