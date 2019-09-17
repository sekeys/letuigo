<template>
<div>
    <div  v-if="!certify" class="inf-card mt10">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <Icon type="ios-git-network" size="21" style="color:#2d8cf0;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                我是推广达人
            </p>
        </div>
        <div  class="mt20 content " style="margin-top:60px;">
            <div style="text-align:center;vertical-align:middle;margin-top:30px;margin-bottom:30px;">
                <div>
                    <XIcon type="unauth-out" size="63" style="color:#2d8cf0;"/>
                </div>
                <div style="margin-top:15px;">
                    未认证信息，是否即可<span class="gocertify" @click="onRedirectToCertity">认证信息</span>
                </div>
            </div>
        </div>
    </div>

    <div v-if="!certify" class="inf-card mt10">
        <div class="header" style="font-size:13px;">
            <h3>
                我的推广码: 
                <span v-if="unlockedFunctional" style="display:inline-block;margin-left:10px;"> 
                    {{promotioncode}}
                </span>
                <span style="display:inline-block;margin-left:10px;font-weight:500;font-size:13px">
                    未申请推广，<span class="gocertify" @click="onRedirectToPromotionCode">立即申请</span>分享推广赚钱
                </span>
            </h3>
        </div>
        <div v-if="unlockedFunctional" class="header" style="font-size:12px;margin-top:40px;">
            <p style="display:inline-block;margin-left:5px;font-size:13px;">
                推广码申请历史
            </p>
            <div style="margin-top:25px;">

            </div>
        </div>
    </div>
</div>
</template>

<script>
import XIcon from '../../../../components/icon'
export default {
    components:{XIcon},
    data(){
        var now=new Date(),start,end;
        now.setDate(now.getDate() - 1);
        end =new Date(now);
        now.setDate(now.getDate() - 7);
        start =new Date(now);
        return {
            promotioncode:"45654",
            unlockedFunctional:false,
            certify:false,
            
        }
    },
    created(){

    },
    methods:{
        onRedirectToCertity(){
            this.$router.push({
                path:"/m/account/talent/certifing",
            })
        },
        onRedirectToPromotionCode(){
            this.$router.push({
                path:"/m/account/talent/applypromotion",
            })
        }

    }

}
</script>

<style scoped>
    .inf-label{
        width:74px;
        text-align:right;
        font-size:12px;
        display: inline-block;
        color:#999999;
    }
    .inf-value{
        text-align:left;
        font-size:13px;
        padding-left: 5px;
        display: inline-block;
    }
    .inf-item{
        margin:5px 0;
    }
    .i-card{
        height: 239px;
        width: 100%;
        border: 1px solid #f0f0f0;
        cursor: pointer;
        padding:16px ;
        position: relative;
    }
    .i-card:hover{
        border: 1px solid #ff464e;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.1);
    }
    .i-card.pay-default{
        border: 1px solid #5cadff;
    }
    .i-card.pay-default:hover{
        border: 1px solid #ff464e;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.1);
    }
    .i-card .title .icon{
        display: inline-block;
    }
    .i-card .account{
        height: 35px;
        line-height: 35px;
    }
    .i-card .title .text{
        display: inline-block;
        font-size: 12px;
    }
    .i-card .account .text{
        margin-top: 25px;
        text-align: left;
        font-size: 16px;
        font-weight: 700;
    }
    .i-card .footer .text{
        margin-top:22px;
        width: 100%;
        text-align: right;
        font-size: 12px;
    }
    .gocertify{
        color:rgb(251, 86, 10);
        cursor: pointer;
    }
    .gocertify:hover{
        color: #5cadff;
    }
</style>
<style>
.bck-app-content{
    background: transparent;
}
</style>