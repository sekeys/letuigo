<template>
<div>
    <div class="inf-card mt10">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <XIcon type="money-income" size="18" style="color:#2d8cf0;font-weight:600;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                收入记录
            </p>
        </div>
        <div class="content">
            <div style="margin-top:30px;margin-bottom:25px;">
                <Row :gutter="32">
                    <Col span="8">
                        <div style="height:90px;width:100%;text-align:center;display:inline-block;">
                            <div style="margin-top:15px;">
                                <p style="height: 35px;line-height: 35px;font-size: 16px;">近7天收益</p>
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
                        </div>
                    </Col>
                    <Col span="8">
                        <div style="height:90px;width:100%;text-align:center;display:inline-block;">
                            <div style="margin-top:15px;">
                                <p style="height: 35px;line-height: 35px;font-size: 16px;">账户余额</p>
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
        </div>
    </div>
    <div class="inf-card mt10 mh340">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <XIcon type="desktop-trend" size="17"  style="color:#2d8cf0;font-weight:500;"/>
            <h3 style="display:inline-block;margin-left:5px;">
                收益趋势图
            </h3>
        </div>
        <div class="content">
            <div class="filter">
                <DatePicker :value="filter.daterange" type="daterange" format="yyyy/MM/dd"   placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
            </div>
            <div class="list">
                
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
            revenue:{
                amount:0,
                settlement:0,
                anticipated:0,
            },
            revenues:[],
            filter:{
                daterange:[start,end]
            },
        }
    },
    created(){
        this.loadLatestRevenue();
        this.loadTrend();
    },
    methods:{
        loadLatestRevenue(){
            this.$http.get("/qn.lego.revenue.sub.promotion.u.latest.7").then(res=>{
                console.log(res);
                this.revenue = res;
            }).catch(ex=>{
                this.$Message.warning(ex.message);
            });
        },
        loadTrend(){
            this.$get("/qn.lego.revenue.sub.promotion.u.trending",{
                start:this.filter.daterange[0],
                end:this.filter.daterange[1],
            }).then(res=>{
                console.log(res);
                this.revenues = res;
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
</style>
<style>
.bck-app-content{
    background: transparent;
}
</style>