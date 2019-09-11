
<template>
    <div class="header">
        <div class="logo" style="float:left;">
            <h2 style="display:inline-block;">埃勒苟</h2>
            <div style="display:inline-block;margin-left:10px;">
                <div @click="onRedirectToHome" class="info-nav-item high-light-font">
                    首页
                </div>
                <div  @click="onRedirectToPromotion" class="info-nav-item high-light-font">
                    我要推广
                </div>
                <div  @click="onRedirectToTeam" class="info-nav-item high-light-font">
                    推广团队
                </div>
                <div  @click="onRedirectToProvider" class="info-nav-item high-light-font">
                    我是供应商
                </div>
                <div  @click="onRedirectToReport" class="info-nav-item high-light-font">
                    效果报表
                </div>
                <div  @click="onRedirectToAccount" class="info-nav-item high-light-font">
                    账号管理
                </div>
            </div>
        </div>
        <div class="info" style="float:right;">
            <div style="display:inline-block;">
                {{u.nick}}
                <span style="display:inline-block;margin-left:6px;">,</span>
                <span style="display:inline-block;margin-left:6px;cursor:pointer;">退出</span>
            </div>
            <div class="info-item" @click="onRedirectToMessage">
                <Badge :count="msgcount">
                    <Icon type="ios-mail-outline" size="18"/>
                </Badge>
            </div>
            <div class="info-item" @click="onRedirectToHelp">
                <Icon  type="ios-help-circle-outline" size="18"/>
            </div>
        </div>
        <div style="clear:both;"></div>
    </div>
</template>

<script>
import Configure from '../../configure/index'
export default {
    data(){
        return {
            u:{
                nick:"Sekeys",
            },
            role:{
                isInTeam:false,
                isProvider:false,
                isTalent:false
            },
            msgcount:0

        };
    },
    created(){

    },
    methods:{
        onRedirectToHome(){
            this.$router.push({
                path:"/"
            })
        },
        onRedirectToPromotion(){
            this.$router.push({
                path:"/m/promotion"
            })
        },
        onRedirectToTeam(){
            this.$router.push({
                path:"/m/team"
            })
        },
        onRedirectToProvider(){
            this.$router.push({
                path:"/m/provider"
            })
        },
        onRedirectToReport(){
            this.$router.push({
                path:"/m/report"
            })
        },
        onRedirectToAccount(){
            this.$router.push({
                path:"/m/account"
            })
        },
        onRedirectToHelp(){
            this.$router.push({
                path:"/help"
            })
        },
        onRedirectToMessage(){
            this.$router.push({
                path:"/m/account/message"
            })
        },
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
     padding:0px 26px;
     border:0px;
     width: 100%;
     background: white;
     height: 70px;
     line-height: 70px;
     
     vertical-align: middle;
     font-size: 12px;
     box-shadow:0 2px 4px 0 rgba(0,0,0,.1);
     position: fixed;
}
.info-item{
    display:inline-block;
    cursor: pointer;
    width: 24px;
    height:24px;
    line-height:24px;
    margin-left:10px;
    margin-right: 10px;
    vertical-align: middle;
}
.info-nav-item{
    display:inline-block;
    cursor: pointer;
    height:70px;
    font-size: 14px;
    font-weight: 500;
    padding-left:10px;
    padding-right: 10px;
    line-height:70px;
    margin-left:10px;
    margin-right: 10px;
    vertical-align: middle;
}
.info-nav-item.select{
    border-bottom:#ff464e solid 3px;
}
</style>>