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
            <!--<div class="avatar">
                <p class="inf-label">头像：</p>
            </div>-->
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
                <p class="inf-value" style="margin-left:20px;">
                    <Tag  color="volcano" @click.native="onInvitingFriend">邀请好友</Tag>
                </p>
                
            </div>
        </div>
    </div>
    <div class="inf-card mt10">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <XIcon type="money-income" size="18" style="color:#2d8cf0;font-weight:600;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                收益管理
            </p>
        </div>
        <div class="content">
            <div style="margin-top:30px;margin-bottom:25px;">
                <Row :gutter="32">
                    <Col span="8">
                        <div style="height:90px;width:100%;text-align:center;display:inline-block;">
                            <div style="margin-top:15px;">
                                <p style="height: 35px;line-height: 35px;font-size: 16px;">近7日预估收益</p>
                                <p style="height: 35px;line-height: 35px;font-size: 16px;font-weight: 700;margin-top:5px;">
                                    <XIcon type="gold" size="21" style="color:rgb(244, 194, 34);"/>
                                    <span style="color:#ff464e;margin-left:3px;">
                                        {{revenue.anticipated}}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col span="8">
                        <div style="height:90px;width:100%;text-align:center;display:inline-block;">
                            <div style="margin-top:15px;">
                                <p style="height: 35px;line-height: 35px;font-size: 16px;">近7日结算收益</p>
                                <p style="height: 35px;line-height: 35px;font-size: 16px;font-weight: 700;margin-top:5px;">
                                    <XIcon type="gold" size="21" style="color:rgb(244, 194, 34);"/>
                                    <span style="color:#ff464e;margin-left:3px;">
                                        {{revenue.settlement}}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col span="8">
                        <div style="height:90px;width:100%;text-align:center;display:inline-block;">
                            <div style="margin-top:15px;">
                                <p style="height: 35px;line-height: 35px;font-size: 16px;">可提现余额</p>
                                <p style="height: 35px;line-height: 35px;font-size: 16px;font-weight: 700;margin-top:5px;">
                                    <XIcon type="gold" size="21" style="color:rgb(244, 194, 34);"/>
                                    <span style="color:#ff464e;margin-left:3px;">
                                        {{revenue.amount}}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div v-if="canWithdraw" style="padding-top:20px;margin-top:10px;margin-bottom:25px;">
                <div style="height:35px;line-height:35px;margin-top:10px;margin-bottom:25px;">
                    <Icon type="ios-card" size="19" style="color:#2d8cf0;"/>
                    <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                        收益提现
                    </p>
                </div>
                <!--支付体现结算卡-->
                <Row v-if="pays&&pays.length" :gutter="32">
                    <template v-for="(item,index) in pays">
                        <Col span="6" :key="index">
                            <div :class="'pay-withdraw-card '+(item.isdefault?' pay-default ':'') " :key="index">
                                <div class="title">
                                    <div v-if='item.platform=="alipay"' class="icon">
                                        <XIcon type="alipay2" size="14" style="color:#2d8cf0;"/>
                                    </div>
                                    <div v-else-if='item.platform=="wechat"' class="icon">
                                        <XIcon type="wechat2" size="14" style="color:#2d8cf0;"/>
                                    </div>
                                    <div class="text">
                                        {{item.platform=="alipay"?"阿里支付宝": (item.platform=="wechatpay"?"微信支付":item.platform)}}
                                    </div>
                                </div>
                                <div class="account">
                                    <div class="text">
                                        {{item.accountAlias}}
                                    </div>
                                </div>
                                <div class="footer">
                                    <div class="text">
                                        {{item.title}}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </template>
                </Row>
            </div>
            <div v-else class="mt20" style="margin-top:60px;">
                <div style="height:35px;line-height:35px;margin-top:10px;margin-bottom:25px;">
                    <Icon type="ios-card" size="19" style="color:#2d8cf0;"/>
                    <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                        收益提现
                    </p>
                </div>
                <div style="text-align:center;vertical-align:middle;margin-top:30px;margin-bottom:30px;">
                    <div>
                        <XIcon type="unauth-out" size="63" style="color:#2d8cf0;"/>
                    </div>
                    <div style="margin-top:15px;">
                        未绑定支付平台账号，无法进行体现，是否立即<span class="gocertify" @click="onRedirectToCertity">前往绑定</span>
                    </div>
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
            u:{
                nick:"Sekeys",
                invitecode:"",
                phone:"",
                avatar:"",
            },
            revenue:{
                amount:0,
                settlement:0,
                anticipated:0,
            },
            canWithdraw:false,
            pays:[
                {
                    type:"alipay",
                    account:"Awwwxxxxa",
                    "name":"微信支付",
                    isDefault:true,
                },
            ]
        }
    },
    created(){
        this.loadUserInfo();
        this.loadLatestRevenue();
        this.load4Pay();
    },
    methods:{
        onRedirectToCertity(){
            this.$router.push({
                path:"/m/account/payaccount",
            })
        },
        loadUserInfo(){
            this.$http.get("/qn.lego.user.info.get").then(res=>{
                console.log(res);
                this.u = res;

            }).catch(ex=>{
                this.$Message.warning(ex.message);
            });
        },
        onInvitingFriend(){
            this.$router.push({
                path:"/inviting/friends",
                query:{
                    reback:this.$router.fullpath
                }
            });
        },
        loadLatestRevenue(){
            this.$http.get("/qn.lego.revenue.promotion.u.latest.7").then(res=>{
                console.log(res);
                this.revenue = res;
            }).catch(ex=>{
                this.$Message.warning(ex.message);
            });
        },
        load4Pay(){
            this.$http.get("/qn.lego.user.capital.pay.account.get.4").then(res=>{
                console.log(res);
                this.pays = res;
                if(res &&res.length){
                    this.canWithdraw=true;
                }else{
                    this.canWithdraw=false;
                }
            }).catch(ex=>{
                this.$Message.warning(ex.message);
            });
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