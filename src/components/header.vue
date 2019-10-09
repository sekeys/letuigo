
<template>
    <div class="header">
        <div class="body h35px">
            <div style="float:left;">
                <span>分享赚钱<span class="high-light-font-alway">月入5000</span>不是问题，购物也能赚金币</span>
            </div>
            <div style="float:right;">
                <div v-if="!hasLogin"  @click="onRedirectToLogin" class="layout_line high-light-font-alway high-light-font">
                    用户登陆
                </div>
                <div v-else  @click="onRedirectToPersonInfo" class="layout_line high-light-font-alway high-light-font">
                    <span>{{nick}}</span>
                    <span style="display:inline-block;margin-left:5px;">欢迎回来</span>
                </div>
                <div  v-if="hasLogin" class="layout-line-split">|</div>
                <div @click="onRedirectToMessage"  v-if="hasLogin" class="layout_line high-light-font">
                    消息({{msgcount}})
                </div>
                <div class="layout-line-split">|</div>
                <!--<div class="layout_line high-light-font">
                    公众号
                </div>
                <div class="layout-line-split">|</div>-->
                <div @click="onRedirectToHelpPage" class="layout_line high-light-font">
                    帮助中心
                </div>
                <div class="layout-line-split">|</div>
                <div class="layout_line high-light-font" >
                    网站导航
                </div>
                <div class="layout-line-split">|</div>
                <div @click="onFavorite"  class="layout_line high-light-font" >
                    收藏
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Configure from '../configure/index'
export default {
    data(){
        return {
            hasLogin:false,
            nick:"Sekeys",
            msgcount:0

        };
    },
    created(){
       this.nick =  this.$Identity.nick;
       this.hasLogin =  this.$hasLogin;
    },
    methods:{
        onRedirectToLogin(){
            this.$redirectToLogin();
        },
        onRedirectToPersonInfo(){
            window.location.href="/m/account";
        },
        onRedirectToHelpPage(){
            
        },
        onRedirectToMessage(){

        },
        onFavorite(){
            try{
                if(document.all){
                    window.external.AddFavorite(url,"收藏");
                }
                else if(window.sidebar && window.sidebar.addPanel){
                    window.sidebar.addPanel(title,url,"收藏");
                }
                else if(window.external){
                    window.external.AddFavorite(url,"收藏");
                }
                else if(window.opera && window.print){
                    return true;
                }
            }
            catch(e){
                this.$Message.warning("加入收藏失败，\n请使用Ctrl+D进行添加！"); 
　　        }
        }
    }
}
</script>

<style scoped>
.high-light-font-alway{

    color:#ff464e;
}
.high-light-font{
    cursor: pointer;
}
.high-light-font:hover{
    color:#ff464e;
    cursor: pointer;
}
.header{
     margin:0;
     padding:0px;
     border:0px;
     width: 100%;
     background: #F2F2F2;
     height: 35px;
     line-height: 35px;
     vertical-align: middle;
     font-size: 12px;
}
.h35px{
    height: 35px;
    line-height: 35px;
    width:1190px;
    margin-left: auto;
    margin-right:auto;
}
 .layout_line{
    display: inline-block;
 }
 .layout-line-split{
    display: inline-block;
    width: 1px;
    color:  #c5c5c5;
    margin-right:5px;
    height: 20px;
    margin-left:6px;
 }
</style>>