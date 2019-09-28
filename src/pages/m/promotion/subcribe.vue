<template>
<div>
    <div class="inf-card mt10">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <Icon type="ios-card" size="19" style="color:#2d8cf0;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                我的订阅
            </p>
        </div>
        <div class="content" style="padding-top:30px;padding-bottom:30px;">
            <!--支付体现结算卡-->
            <Row :gutter="32">
                <template v-for="(item,index) in collections">
                    <Col span="4" :key="index">
                        <div :class="'pay-withdraw-card '" :key="index">
                            <div class="title" style="margin-top:10px;">
                                <div class="text">
                                    <span  style="font-size:14px;font-weight:600;">{{item.title}}</span><span  style="font-size:14px;display:inline-block;margin-left:5px;">({{item.count}})</span>
                                </div>
                            </div>
                            <div class="account">
                                <div style="display:inline-block;width:100%;">
                                     <Row :gutter="32">
                                        <template  v-for="(jtem,jndex) in item.latest">
                                            <Col span="6" :key="index">
                                            </Col>
                                        </template>
                                     </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </template>
            </Row>
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
            u:{
                nick:"Sekeys",
                invitecode:"",
                phone:"",
                avatar:"",
            },
            canWithdraw:true,
            collections:[
                {
                    title:"收藏",
                    count:200,
                    latest:[],
                }
            ]
        }
    },
    created(){
        this.load();
    },
    methods:{
        onRedirectToAddPayAccount(){
            this.$router.push({
                path:'/m/promotion/collect/add'
            });
        },
        load(){
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
        height: 219px;
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
</style>
<style>
.bck-app-content{
    background: transparent;
}
</style>