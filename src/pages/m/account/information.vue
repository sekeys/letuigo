<template>
<div>
    <div class="inf-card">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <Icon type="ios-contact" size="17" style="color:#2d8cf0;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                账号信息
            </p>
        </div>
        <div class="mt20 content " style="margin-top:60px;">
            <div class="avatar">
                <p class="inf-label">头像：</p>
            </div>
            <div class="inf-item">
                <p class="inf-label">昵称：</p>
                <p class="inf-value">{{u.nick}}</p>
            </div>
            <div class="inf-item">
                <p class="inf-label">手机号码：</p>
                <p class="inf-value">{{u.phone}}</p>
            </div>

            
            <div class="inf-item">
                <p class="inf-label">邀请码：</p>
                <p class="inf-value">{{u.invitecode}}</p>
            </div>
        </div>
    </div>
    <div class="inf-card mt10">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <Icon type="ios-card" size="19" style="color:#2d8cf0;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                提现管理
            </p>
        </div>
        <div class="content">
            <div v-if="canWithdraw" style="padding-top:20px;">
                <!--支付体现结算卡-->
                <Row>
                    <template v-for="(item,index) in pays">
                        <Col span="4" :key="index">
                            <div :class="'pay-withdraw-card '+(item.isDefault?' pay-default ':'') " :key="index">
                                <div class="title">
                                    <div class="icon">
                                        <Icon type="ios-card" size="19" style="color:#2d8cf0;"/>
                                    </div>
                                    <div class="text">
                                        {{item.type=="alipay"?"阿里支付宝": (item.type=="wechatpay"?"微信支付":item.type)}}
                                    </div>
                                </div>
                                <div class="account">
                                    <div class="text">
                                        {{item.account}}
                                    </div>
                                </div>
                                <div class="footer">
                                    <div class="text">
                                        {{item.name}}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </template>
                </Row>
            </div>
            <div v-else>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            u:{
                nick:"Sekeys",
                invitecode:"",
                phone:"",
                avatar:"",
            },
            canWithdraw:true,
            pays:[
                {
                    type:"alipay",
                    account:"Awwwxxxxa",
                    "name":"微信支付",
                    isDefault:true,
                }
            ]
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
        height: 129px;
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
        margin-top:12px;
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