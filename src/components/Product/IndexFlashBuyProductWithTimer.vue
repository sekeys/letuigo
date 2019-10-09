<template>
<Card class="card product-card">
    <div class="card-img">
        <img :src="product.product.picUrl" width="220" height="220"></img>
    </div>
    <div class="title" >
        <span class="icon" v-if="product.platform='taobao'">
            <Avatar shape="square"  src="http://gw.alicdn.com/tfs/TB13jKla21G3KVjSZFkXXaK4XXa-172-172.png"  style="height:18px;width:18px;"  />
        </span>
        <span class="content" >
            {{product.product.title}}
        </span>
    </div>
    <div class="price">
        <div style="display:inline-block;float:left;">
            <span style="color:black; font-size:13px;margin-left:5px;"></span>
            <span style="color:#ff464e; fontreservePrice-size:17px;padding:0px;">
                ￥ {{parseFloat(product.product.zkFinalPrice).toFixed(2)}}
            </span>
            <span style="color:#ff464e;vertical-align:bottom; text-decoration:line-through;font-size:12px;padding:0px;"> 
                {{parseFloat(product.product.reservePrice).toFixed(2)}}
            </span>
        </div>
        <div v-if="product.gold" style="display:inline-block;float:right;font-size:9px;margin-right:6px;height:25px;line-height:25px;vertical-align:center;">
            可赚取<span style="color:#ff464e;">{{product.product.gold}}</span>金币
        </div>
        <div style="clear:both;width:0px;"></div>
    </div>
    <div class="product-card-hover-progress"  style="margin-top:10px;margin-left:15px;margin-right:15px;">
        <div v-if="product.product.totalAmount" style="">
            <Progress :stroke-width="3" :percent="(parseFloat(product.product.totalAmount) - parseFloat(product.product.soldNum))/parseFloat(product.product.totalAmount) * 100" status="wrong" hide-info/>
            <div class="hover-show" style="font-size:12px;color:#999;">
                剩余{{product.product.totalAmount - product.product.soldNum}}张
            </div>
            <div class="hover-hide" style="font-size: 12px;color: #999;">
            </div>
        </div>
        <div v-else style="height:33px;">
            
        </div>
    </div>
    <div class="functional">
        <Row>
            <Col span="24">
                <div class="func-item"  @click="onRedirectToBuyProduct">
                    立即抢购
                </div>
            </Col>
        </Row>
    </div>
    <Modal v-model="state.showLoginWarning" width="320" :z-index="99" style="margin-top:240px;"
         :mask="true" >
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>登录提示</span>
        </p>
        <div style="text-align:left;font-size:13px;">
            <p>你暂且未登录，请登录后再试,登录后即刻分享</p>
        </div>
        <div slot="footer">
            <div class="ivu-btn ivu-btn-default ivu-btn-large" style="border:none;"   @click="onCancelRedirectToLogin">
                取消
            </div>
            <Button type="primary" size="large"   @click="onRedirectToLogin">前往登录</Button>
        </div>
    </Modal>
</Card>
</template>

<script>
export default {
    props:{
        product:{type:Object,default:()=>{ return null }},
    },
    data(){
        return {
            hasLogin:false,
            state:{
                showLoginWarning:false,
            }
        }
    },
    created(){
        var token = this.$cookies.get("token");
        if(token){
            this.hasLogin = true;
        }else{
            this.hasLogin = false;
        }
    },
    methods:{
        onRedirectToBuyProduct(){
            //CouponShareUrl,click_url
            var relation = this.product.relation;
            if(url.indexOf('?')<1){
                url+="?";
            }
            
            if(relation)
                url+= (relation.relationid?("&relation_id="+relation.relationid):"") + (relation.specialid?("&special_id="+relation.specialid):"")
            window.open(this.product.product.clickUrl,"_blank")
        },
        onRedirectToLogin(){
            this.$redirectToLogin();
        },
        onCancelRedirectToLogin(){
            this.state.showLoginWarning = false;
        },
        onRedirectToShare(){
            if(!this.hasLogin){
                this.state.showLoginWarning= true;
                return;
            }
            this.$router.push({
                path:"/product/share",
                query:{
                    share:"",
                    id:this.product.id,
                    id:this.product.product.id,
                    item:this.product.product.ItemId,
                    clickUrl:this.product.product.CouponShareUrl,
                    platform:this.product.product.platform
                }
            });
            
        },
        getCouponAfPrice(item){
            return  parseFloat(item.ZkFinalPrice) - (item.CouponAmount? parseFloat(item.CouponAmount):0);
        },
        getCouponAfPriceRaw(item){
           return this.getCouponAfPrice(item).toFixed(2);
        },
        toFixLengthToAddZero(v,l){
            while(v.length<l){
                v+=0;
            }
            return v;
        },
    }
}
</script>

<style >
.ivu-modal-content{
    margin-top:240px;
}
.product-card{
    cursor: pointer;
}
.product-card .ivu-card-body{
    padding: 0px;
}
.ivu-modal-footer{
    border-top:none;
}
.ivu-modal-header{
    border-bottom:none;
}
.ivu-modal-body{
    padding-left:26px;
    padding-right:26px;
}
</style>
<style scoped>
.ivu-card-body{
    padding: 0px;
}
.card{
    width: 220;
    display: inline-block;
}
.card-img{
    width:220;
    height: 220;
    margin:0px;
    padding:0px;
    border:0px;
}
.title{
    height:30px;
    line-height: 30px;
    width: 210px;
    text-align:left;
    padding-left:5px;
    padding-right: 5px;
}
.title .content{
    font-size: 14px;
    width: 176px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    display: inline-block;
}
.price{
    margin-top:10px;
    margin-bottom:5px;
    text-align: left;
    padding-left: 5px;
}
.functional{
    margin-top:10px;
    text-align: left;
}
.func-item{
    width:100%;
    vertical-align: middle;
    text-align: center;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
}
.product-card:hover .func-item{
    background: #ff464e;
    color: white;
}
.product-card .hover-show{
    display:none;
}
.product-card:hover .hover-show{
    display:inline-block;
}
.product-card:hover .hover-hide{
    display:none;
    height:15px;
}
.product-card .hover-hide{
    display:inline-block;
    height:15px;
}
.product-card .product-card-hover-progress{
    display:none;
}

</style>
<!--
.product-card:hover .product-card-hover-progress{
    display:block;
}
-->