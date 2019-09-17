<template>
<div>
    <div class="inf-card mt10">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <XIcon type="-trend2" size="18" style="color:#2d8cf0;font-weight:600;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                整体报表
            </p>
        </div>
        <div class="content">
            <div style="margin-top:30px;margin-bottom:25px;">
                <Row :gutter="32">
                    <Col span="6">
                        <div style="height:90px;width:100%;text-align:left;display:inline-block;">
                            <div style="margin-top:15px;">
                                <p style="height: 25px;line-height: 25px;font-size: 12px;">点击数</p>
                                <p style="height: 30px;line-height: 30px;font-size: 14px;font-weight: 700;margin-top:5px;">
                                    <span style="margin-left:3px;">
                                        {{summary.click}}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col span="6">
                        <div style="height:90px;width:100%;text-align:left;display:inline-block;">
                            <div style="margin-top:15px;">
                                <p style="height: 25px;line-height: 25px;font-size: 12px;">付款笔数</p>
                                <p style="height: 30px;line-height: 30px;font-size: 14px;font-weight: 700;margin-top:5px;">
                                    <span style="margin-left:3px;">
                                        {{summary.pay}}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col span="6">
                        <div style="height:90px;width:100%;text-align:left;display:inline-block;">
                            <div style="margin-top:15px;">
                                <p style="height: 25px;line-height: 25px;font-size: 12px;">预估收入</p>
                                <p style="height: 30px;line-height: 30px;font-size: 14px;font-weight: 700;margin-top:5px;">
                                    <span style="margin-left:3px;">
                                        {{summary.prepareSettlement}}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col span="6">
                        <div style="height:90px;width:100%;text-align:left;display:inline-block;">
                            <div style="margin-top:15px;">
                                <p style="height: 25px;line-height: 25px;font-size: 12px;">结算收入</p>
                                <p style="height: 30px;line-height: 30px;font-size: 14px;font-weight: 700;margin-top:5px;">
                                    <span style="margin-left:3px;">
                                        {{summary.settlement}}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div style="margin-top:15px;margin-bottom:25px;">
                <!--整体趋势图表-->
            </div>
            <div>
                <!--整体趋势表格-->

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
            summary:{
                click:0,
                pay:0,
                prepareSettlement:0,
                settlement:0,
            },
            canWithdraw:false,
            pays:[
                {
                    type:"alipay",
                    account:"Awwwxxxxa",
                    "name":"微信支付",
                    isDefault:true,
                },
                {
                    type:"wechat",
                    account:"Awwwxxxxa",
                    "name":"微信支付",
                    isDefault:false,
                }
            ]
        }
    },
    created(){

    },
    methods:{
        onRedirectToCertity(){
            this.$router.push({
                path:"/m/account/payaccount",
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