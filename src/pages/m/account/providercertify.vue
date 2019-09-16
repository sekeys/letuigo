<template>
<div>
    <div class="inf-card">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <XIcon type="auth-person" size="23" style="color:#2d8cf0;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                供应商认证
            </p>
        </div>
        <div class="mt20 content " style="margin-top:60px;">
            <div v-if="unauthenication" style="text-align:center;vertical-align:middle;margin-top:30px;margin-bottom:30px;">
                <div>
                    <XIcon type="unauth-out" size="63" style="color:#2d8cf0;"/>
                </div>
                <div style="margin-top:15px;">
                    未认证信息，是否即可<span class="gocertify" @click="onRedirectToCertity">认证信息</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import XIcon from '../../../components/icon'
export default {
    components:{XIcon},
    data(){
        return {
            unauthenication:true,
            showCertInformation:{

            }
        }
    },
    methods:{
        load(){

        },
        onRedirectToCertity(){
            this.$router.push({
                path:"/m/account/providering",
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
        margin:15px 0;
    }
    .pay-withdraw-card{
        height: 149px;
        width: 100%;
        border: 1px solid #bdc6cf;
        cursor: pointer;
        padding:16px ;
        position: relative;
    }
    .pay-withdraw-card:hover{
        border: 1px solid #ff464e;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.1);
    }
    .pay-withdraw-card.pay-default{
        border: 1px solid #5cadff;
    }
    .pay-withdraw-card.pay-default:hover{
        border: 1px solid #ff464e;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.1);
    }
    .pay-withdraw-card .title .icon{
        display: inline-block;
    }
    .pay-withdraw-card .account{
        height: 35px;
        line-height: 35px;
    }
    .pay-withdraw-card .title .text{
        display: inline-block;
        font-size: 12px;
    }
    .pay-withdraw-card .account .text{
        margin-top: 25px;
        text-align: left;
        font-size: 16px;
        font-weight: 700;
    }
    .pay-withdraw-card .footer .text{
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