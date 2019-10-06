// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './OuthApp'
import Configure from './configure/index'
import router from './router/outh'
import Axios from 'axios';
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(VueCookies);

function getQueryString(){
  var index = location.hash.split('?');
  if(index.length<2){
    return {};
  }
  var qs = index[1].split("&") , result={};
  qs.forEach(el=>{
    if(!el){
      return;
    }
    var patterns = el.split("=");
    if(patterns.length<2){
      result[patterns[0]] =null;
    }else{
      result[patterns[0]] = patterns[1];
    }
  })
  return result;
}

Vue.prototype.$query=getQueryString
Vue.prototype.$querystring=function(name){
  var qs = getQueryString();
  return qs.name;
}

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
Vue.prototype.$redirectToLogin=function(){
    window.location.href = `//account.zhimifan.com/login?appkey=${Configure.appkey}&origin=${Configure.acceptLoginPage}`;
}

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
