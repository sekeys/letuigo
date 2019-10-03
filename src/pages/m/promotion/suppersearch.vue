<template>
<div>
    <div class="inf-card" style="padding:24px 0px 0px 0px;">
        <div  style="margin-top:10px;margin-bottom:10px;padding:10px;padding:15px;padding-left:30px;">
            
            <Input v-model="searchOpts.q" @on-enter="toSearching" placeholder="搜索名称" style="width: 480px"></Input>
            <ButtonGroup>
                <Button type="info" icon="ios-search" @click="toSearching"></Button>
            </ButtonGroup><!--<div style="display:inline-block;margin-right:10px;margin-left:20px;">收入比率≥</div><Input v-model="searchOpts.startTkRate" @on-enter="toSearching" style="width: 120px"></Input><div style="display:inline-block;margin-right:10px;margin-left:10px;">%</div>-->
            <div style="display:inline-block;margin-right:10px;margin-left:20px;"></div>
        </div>
        <div class="top-supersearch-filter" style="margin-bottom:0px;border:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;width:100%;padding:0px -24px;">
            <div :class="'top-supersearch-sort '+(!searchOpts.sort?'selected':'')" @click="onSort('')" style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                默认排序
            </div>
            <div  :class="'top-supersearch-sort '+(searchOpts.sort=='price'?'selected':'')"  @click="onSort('price')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                价格{{getAscText("price")}}
            </div>
            <div  :class="'top-supersearch-sort '+(searchOpts.sort=='total_sales'?'selected':'')"  @click="onSort('total_sales')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                销量{{getAscText("total_sales")}}
            </div>
                <!--<div  :class="'top-supersearch-sort '+(searchOpts.sort=='tk_rate'?'selected':'')"  @click="onSort('tk_rate')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    收入比率{{getAscText("tk_rate")}}
                </div>
                <div  :class="'top-supersearch-sort '+(searchOpts.sort=='tk_total_commi'?'selected':'')"  @click="onSort('tk_total_commi')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    总支出佣金{{getAscText("tk_total_commi")}}
                </div>-->
            <div  :class="'top-supersearch-sort '+(searchOpts.sort=='tk_total_sales'?'selected':'')"  @click="onSort('tk_total_sales')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                累计推广量{{getAscText("tk_total_sales")}}
            </div>
            <div style="padding:8px;display:inline-block;">
                <Checkbox v-model="searchOpts.isTmall">天猫</Checkbox>
                <Checkbox v-model="searchOpts.isOverseas">海外购</Checkbox>
                <Checkbox v-model="searchOpts.hasCoupon">优惠券</Checkbox>
                <Checkbox v-model="searchOpts.needFreeShipment">包邮</Checkbox>
                <Checkbox v-model="searchOpts.needPrepay">消费者保障</Checkbox>
                <Poptip placement="bottom"  trigger="hover">
                    <div style="display:inline-block;margin-right:10px;margin-left:20px;cursor:pointer;">
                        店铺评分:
                        <span style="color:blue;">{{searchOpts.startDsr?searchOpts.startDsr/10000:"不限"}}</span>
                    </div>
                    <div slot="content">
                        <Select  v-model="searchOpts.startDsr" clearable  filterable style="width:90px;disply:inline-block;" placeholder="dsr">
                            <Option :value="0" :key="0">不限</Option>
                            <Option :value="45000" :key="45000">4.5</Option>
                            <Option :value="46000" :key="46000">4.6</Option>
                            <Option :value="47000" :key="47000">4.7</Option>
                            <Option :value="48000" :key="48000">4.8</Option>
                            <Option :value="49000" :key="49000">4.9</Option>
                            <Option :value="50000" :key="50000">5.0</Option>
                        </Select>
                    </div>
                </Poptip>
                <Poptip placement="bottom" trigger="hover">
                    <div style="display:inline-block;margin-right:10px;margin-left:20px;cursor:pointer;">
                        价格:
                        <span style="color:blue;">{{getFilterPriceText()}}</span>
                    </div>
                    <div slot="content">
                        <Input v-model="searchOpts.startPrice" @on-enter="toSearching" style="width: 120px">
                        </Input> -- 
                        <Input v-model="searchOpts.endPrice" @on-enter="toSearching" style="width: 120px"></Input>
                    </div>
                </Poptip>
                <Poptip placement="bottom" trigger="hover">
                    <div style="display:inline-block;margin-right:10px;margin-left:20px;cursor:pointer;">
                        所在地
                        <span v-if="searchOpts.itemloc" style="color:blue;">{{searchOpts.itemloc}}</span>
                    </div>
                    <div slot="content">
                        <Input v-model="searchOpts.itemloc" @on-enter="toSearching" style="width: 120px"></Input>
                    </div>
                </Poptip>
                <Checkbox v-model="searchOpts.includePayRate30">成交转化高于平均值</Checkbox>
                <Checkbox v-model="searchOpts.includeGoodRate">好评率高于平均值</Checkbox>
                <Checkbox v-model="searchOpts.includeRfdRate">退款率低于平均值</Checkbox>
            </div>
        </div>
        
    </div>
        <!--<div style="margin-bottom:10px;border:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;">
                <div :class="'top-supersearch-sort '+(isCatSelected('1')?'selected':'')" @click="onCatClick('1')" style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    综合
                </div>
                <div  :class="'top-supersearch-sort '+(isCatSelected('2')?'selected':'')"  @click="onCatClick('2')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    女装
                </div>
                <div  :class="'top-supersearch-sort '+(isCatSelected('3')?'selected':'')"  @click="onCatClick('3')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    家居家装
                </div>
                <div  :class="'top-supersearch-sort '+(isCatSelected('4')?'selected':'')"  @click="onCatClick('4')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    数码家电
                </div>
                <div  :class="'top-supersearch-sort '+(isCatSelected('5')?'selected':'')"  @click="onCatClick('5')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    母婴
                </div>
                <div  :class="'top-supersearch-sort '+(isCatSelected('6')?'selected':'')"  @click="onCatClick('6')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    食品
                </div>
                <div  :class="'top-supersearch-sort '+(isCatSelected('7')?'selected':'')"  @click="onCatClick('7')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    鞋包配饰
                </div>
                <div  :class="'top-supersearch-sort '+(isCatSelected('8')?'selected':'')"  @click="onCatClick('8')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    美妆个护
                </div>
                <div  :class="'top-supersearch-sort '+(isCatSelected('9')?'selected':'')"  @click="onCatClick('9')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    男装
                </div>
                <div  :class="'top-supersearch-sort '+(isCatSelected('10')?'selected':'')"  @click="onCatClick('10')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    内衣
                </div>
                <div  :class="'top-supersearch-sort '+(isCatSelected('11')?'selected':'')"  @click="onCatClick('11')"  style="display:inline-block;height:40px;padding-left:15px;padding-right:15px;">
                    运动户外
                </div>
        </div>-->

    <div class="inf-card mt10" style="position:relative;">
        
        <div class="top-supersearch-product-list" style="margin-top:10px;padding:20px;">
            <template v-for="(item,index) in topdata">
                <Card class="top-supersearch-product-item" :key="index" :json-data="JSON.stringify(item)" style="width:236px;float:left;margin:15px;cursor:ponter;padding:0px;cursor:pointer;">
                    <div class="top-supersearch-product-item-img" style="width:100%;height:236px;position:relative;">
                        <img style="width:100%;height:236px;" :src="item.PictUrl"/>
                        <div class="top-supersearch-product-item-op" style="position:absolute;bottom:0px;left:0px;right:0px;background:rgba(254,72,0,.8);color:white;font-size:13px;vertical-align:middle;line-height:32px;">
                            <div @click="onCollectingProduct(item)" style="display:inline-block;height:32px;line-height:32px;text-align:center;width:48%;text-align:center;">
                                收藏
                            </div>
                            <div style="width:1px;height:32px;display:inline-block;">|</div>
                            <div @click="onPromotingProduct(item,index)" style="display:inline-block;height:32px;line-height:32px;text-align:center;width:48%;text-align:center;">
                                推广分享
                            </div>
                        </div>
                    </div>
                    <div class="pro-title" style="font-size:12px;padding:8px;" @click="onOpenTaobaoHref(item)">
                        <p>
                            {{item.Title}}
                        </p>
                    </div>
                    <div  style="margin-top:10px;margin-left:15px;margin-right:15px;">
                        <div v-if="item.CouponAmount" style="">
                            <Progress :percent="parseFloat(item.CouponRemainCount)/parseFloat(item.CouponTotalCount) * 100" status="wrong" hide-info/>
                            <div class="hover-show">
                                剩余{{item.CouponRemainCount}}张
                            </div>
                            <div class="hover-hide" >

                            </div>
                        </div>
                        <div v-else style="height:33px;">
                        </div>
                    </div>
                    <div style="margin-top:10px;margin-left:15px;margin-right:15px;margin-bottom:15px;">
                        <Row :gutter="24">
                            <Col span="8" style="text-align:center;">
                                <div style="font-size:12px;text-align:center;color:#fe4800;">
                                    {{getCouponAfPrice(item).toFixed(2)}}
                                </div>
                                <div style="color:#999;font-size:12px;text-align:center;">
                                    券后价
                                </div>
                            </Col>
                            <Col span="8" style="text-align:center;">
                                
                                <div style="font-size:12px;text-align:center;">
                                    {{parseFloat(item.CommissionRate)/100}}%
                                </div>
                                <div style="color:#999;font-size:12px;text-align:center;">
                                    {{getCommissionType(item.CommissionType)}}
                                </div>
                            </Col>
                            <Col span="8" style="text-align:center;">
                                <div style="font-size:12px;text-align:center;color:#fe4800;">
                                    {{((parseFloat(item.CommissionRate)/10000)*getCouponAfPrice(item)).toFixed(2) }}
                                </div>
                                <div style="color:#999;font-size:12px;text-align:center;">
                                    佣金
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div style="margin-top:10px;margin-bottom:10px;margin-left:15px;margin-right:15px;" class="has-coupon">
                        <div  class="coupon-info" >
                            <span v-if="item.CouponAmount" class="tag-coupon fl" style="display:inline-block;font-size:12px;border:1px solid #fe4800;height:25px;line-height:25px;">
                                <span class="icon" style="background-color:#fe4800;color:white;width:25px;display:inline-block;text-align:center;line-height:25px;">券</span>
                                <span style="line-height:25px;color:#fe4800;margin-right:5px;" class="money">{{item.CouponAmount}}元</span>
                            </span>
                            <span v-else class="tag-coupon fl" style="display:inline-block;font-size:12px;height:25px;line-height:25px;">

                            </span>
                        </div>
                        <div v-if="item.UserType=='1'" class="tmall-icon">
                            <Avatar shape="square"  src="http://gw.alicdn.com/tfs/TB13jKla21G3KVjSZFkXXaK4XXa-172-172.png"  style="height:23px;width:23px;"  />
                        </div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="margin-top:10px;margin-bottom:10px;">
                        <div class="selled-num">
                            月销量&nbsp;&nbsp;{{item.TkTotalSales}}
                        </div>
                        <div class="shop-name">
                            {{item.ShopTitle}}
                        </div>
                        <div style="clear:both;"></div>
                    </div>
                </Card>
            </template>
            <div style="clear:both;"></div>
            <Spin fix v-if="state.loading"></Spin>
        </div>
            <div style="text-align:right;margin-top:10px;margin-right:20px;">
                <Page :total="totalResult" :current="searchOpts.pageNo" :page-size="searchOpts.pageSize" size="small" 
                    show-elevator show-sizer show-total
                    @on-change="onPageChange" @on-page-size-change="onPageSizeChange"/>
            </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            topdata:[],
            searchOpts:{
                startDsr:null,
                platform:1,
                endTkRate:null,
                startTkRate:null,
                endPrice:null,
                startPrice:null,
                isOverseas:null,
                isTmall:null,
                hasCoupon:null,
                includePayRate30:null,
                includeGoodRate:null,
                includeRfdRate:null,
                sort:null,
                itemloc:null,
                cat:null,
                needFreeShipment:null,
                needPrepay:null,
                q:"女装",
                materialId:null,
                npxLevel:null,
                endKaTkRate:null,
                startKaTkRate:null,
                itemId:null,
                pageSize:20,
                pageNo:1
            },
            totalResult:0,
            desc:false,
            state:{
                loading:false
            }
        };
    },
    created(){
        this.search();
    },
    methods:{
        onPromotingProduct(){
            
        },
        onCollectingProduct(){
            this.$get("/qn.lego.taobao.tbk.dg.material.optional",reqd).then(resp=>{
                
                this.state.loading=false;
                
                if(resp && resp.isError){
                    this.$Message.warning(resp.errMsg ||resp.subErrMsg);
                    this.topdata=[];
                    this.totalResult =0;
                    return ;
                }
                this.topdata=resp.resultList;
                this.totalResult = resp.totalResults;
            }).catch(ex=>{
                this.state.loading=false;
                this.$Message.warning(ex.message);

            })
        },
        getFilterPriceText(){
            if(this.searchOpts.startPrice == this.searchOpts.endPrice){
                return this.searchOpts.startPrice;
            }
            else if(this.searchOpts.startPrice &&!this.searchOpts.endPrice){
                return "高于"+this.searchOpts.startPrice;
            }
             else if(!this.searchOpts.startPrice &&this.searchOpts.endPrice){
                return "低于"+this.searchOpts.endPrice;
            } else if(this.searchOpts.startPrice &&this.searchOpts.endPrice){
                return this.searchOpts.startPrice + "--" + this.searchOpts.endPrice;
            } 
            else 
                return "";
        },
        onSort(type){
            if(this.searchOpts.sort == type){
                this.desc=!this.desc;
                this.toSearching();
                return;
            }
            this.desc=false;
            this.searchOpts.sort=type;
            this.toSearching();
        },
        isCatSelected(v){
            if(this.searchOpts.cat==null ){
                return v=="1";
            }
            return this.searchOpts.cat.split(",").indexOf(v)>-1;
        },
        onCatClick(cat){
            this.searchOpts.cat=cat;
            this.toSearching();
        },
        getAscText(type){
            if(this.searchOpts.sort != type){
                return "";
            }
            return !this.desc?"从低到高":"从高到低";
        },
        toSearching(){
            this.searchOpts.pageNo=1;
            this.search();
        },
        getCouponAfPrice(item){
            return item.ZkFinalPrice - (item.CouponAmount? parseFloat(item.CouponAmount):0);
        },
        search(query){
            var reqd={};
            for(var i in this.searchOpts){
                if(this.searchOpts[i]!=null){
                    reqd[i]=this.searchOpts[i];
                }
            }
            if(reqd.startTkRate){
                reqd.startTkRate = reqd.startTkRate.toString();
                reqd.startTkRate = this.toFixLengthToAddZero(reqd.startTkRate,4);
            }
            if(reqd.sort){
                reqd.sort = reqd.sort+(this.desc?"_des":"_asc")
            }
            reqd.a=this.$appid;
            //reqd.adzoneId="109159850365";
            this.state.loading=true;
            this.$get("/qn.lego.taobao.tbk.dg.material.optional",reqd).then(resp=>{
                
                this.state.loading=false;
                
                if(resp && resp.isError){
                    this.$Message.warning(resp.errMsg ||resp.subErrMsg);
                    this.topdata=[];
                    this.totalResult =0;
                    return ;
                }
                this.topdata=resp.resultList;
                this.totalResult = resp.totalResults;
            }).catch(ex=>{
                this.state.loading=false;
                this.$Message.warning(ex.message);

            })
        },
        onOpenTaobaoHref(item){
            window.open(item.Url,"_blank");
        },
        onOpenTaobaoCouponHref(item){
            window.open(item.CouponShareUrl,"_blank");
        },
        toFixLengthToAddZero(v,l){
            while(v.length<l){
                v+=0;
            }
            return v;
        },
        getCommissionType(v){
            //	MKT表示营销计划，SP表示定向计划，COMMON表示通用计划
            switch(v){
                case "COMMON":
                    return "通用";
                case "MKT":
                    return "营销";
                case "SP":
                    return "定向";
            }
        },
        onPageChange(no){
            this.searchOpts.pageNo=no;
            this.search();
        },
        onPageSizeChange(size){
            this.searchOpts.pageSize=size;
            this.search();
        }
    }
}
</script>

<style>
.top-supersearch-filter .ivu-input,.top-supersearch-filter .ivu-select-input{
    height:26px;
    line-height: 26px;
}
.top-supersearch-filter .ivu-select-selection{
    height:26px;
    line-height: 26px;
}
.top-supersearch-product-list .ivu-card-body{
    padding: 0px;
}
.pro-title{
    cursor:pointer;
}
.pro-title:hover{
    color:#fe4800;
}
.shop-name{
    float: right;
    font-size:12px;
    margin-right:10px;
    cursor: pointer;
    
}
.coupon-info{
    float:left;
    font-size: 12px;
    margin-left:15px;
}
.tmall-icon{
    float: right;
    margin-right: 15px;
}
.shop-name:hover{
    color:#fe4800;
}
.selled-num{
    float: left;
    font-size: 12px;
    margin-left:15px;
}
.hover-show{
    color:#999;
}
.top-supersearch-product-item .hover-show{
    display:none;
}
.top-supersearch-product-item:hover .hover-show{
    display:inline-block;
}
.top-supersearch-product-item:hover .hover-hide{
    display:none;
    height:15px;
}
.top-supersearch-product-item .hover-hide{
    display:inline-block;
    height:15px;
}
.top-supersearch-sort{
    cursor:pointer;
    text-align: center;
    line-height: 40px;
    height: 40px;
}
.top-supersearch-sort:hover{
    cursor:pointer;
}
.top-supersearch-sort.selected{
    color:#fe4800;
    border:1px solid #fe4800;
}
.top-supersearch-product-item .top-supersearch-product-item-op{
    display: none;
}
.top-supersearch-product-item:hover .top-supersearch-product-item-op{
    display: block;
}
.ivu-progress-success .ivu-progress-bg{
    background: #ed4014;
}
.ivu-progress-bg{
    background: #ed4014;
}
</style>

<style>
.bck-app-content{
    background: transparent;
}
</style>
