// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Configure from './configure/index'
import iview from 'iview'
import 'iview/dist/styles/iview.css';
import '../static/css/iconfont.css';
import Axios from 'axios';
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(iview);

Vue.use(VueCookies);


Axios.defaults.withCredentials=true;
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.url = `${Configure.host}${config.url}`
    config.headers["token"] = Configure.token();
    var reftoken = Configure.refererToken();
    if(reftoken){
      config.headers["referer-token"] = reftoken;
    }
    return  config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
Axios.interceptors.response.use(res=>{
    var data=res.data;
    if(!data){
      return data;
    }else{
      if(data.success){
        return data.data;
      }else{
        return Promise.reject(data);
      }
    }
},error=>{
    return Promise.reject(error);
})

Vue.prototype.$http=Axios;
Vue.prototype.$get=function(url,data){
  url+= (url.indexOf("?")>0?"&":"?")+this.$toUrl(data);
  return this.$http.get(url);
}
Vue.prototype.$toUrl=function(d){
  var r="";
  for(var i in d){
    r+=`&${i}=${d[i]}`;
  }
  return r;
}
Vue.prototype.$redirectToLogin=function(){
    window.location.href = `//account.zhimifan.com/login?appkey=${Configure.appkey}&origin=${Configure.acceptLoginPage}`;
}
Vue.prototype.$Message.config({
  top: 250,
  duration: 3
});


Vue.prototype.$hasLogin = !!Configure.token();



/**
 * 路由权限管理
 */
router.beforeEach((to, from, next) => {
  if(!to.matched){
    next({
      path:"/error/404",
      query:"",
    });

    return;
  }else{
    next();
  }

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
