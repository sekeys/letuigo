<template>
<div>
    <template v-for="(item,index) in areas" style="margin-top:30px;">
        <div class="area-item" :key="index">
        <div class="header">
                <div class="title">
                    <div class="signal"></div>
                    {{item.title}} 
                </div>
                <div class="more">
                    <a :href="item.href">查看更多</a>
                </div>
            </div>
            <div class="content">
                <div v-if="item.face" class="content-mg" style="width:220px;height:296px;float:left;" @click="onClickAreaFaceRedirect(item)">
                    <img style="width:100%;height:100%;" :src="item.face"/>
                </div>
                <template v-for="(jtem,jndex) in item.items">
                    <RecommentProductCard v-if="item.controllerType=='default' " class="content-mg" :product="jtem" :key="jndex">
                    </RecommentProductCard>
                    <IndexFlashBuyProduct v-else-if="item.controllerType == 'flash'" class="content-mg" :product="jtem" :key="jndex">
                    </IndexFlashBuyProduct>
                    <IndexSubcribeProduct v-else-if="item.controllerType == 'subscribe'" class="content-mg" :product="jtem" :key="jndex">
                    </IndexSubcribeProduct>
                    <IndexGoldProduct v-else-if="item.controllerType == 'gold'" class="content-mg" :product="jtem" :key="jndex">
                    </IndexGoldProduct>
                    <IndexProviderProduct v-else-if="item.controllerType == 'provider'" class="content-mg" :product="jtem" :key="jndex">
                    </IndexProviderProduct>
                    <IndexShareProduct v-else-if="item.controllerType == 'share'" class="content-mg" :product="jtem" :key="jndex">
                    </IndexShareProduct>
                    <RecommentProductCard v-else class="content-mg" :product="jtem" :key="jndex">
                    </RecommentProductCard>
                </template>
            </div>
        </div>
    </template>
</div>
</template>

<script>

import ProductCard from '../Product/ProductCard'
import RecommentProductCard from '../Product/RecommentProductCard'
import IndexFlashBuyProduct from '../Product/IndexFlashBuyProduct'
import IndexGoldProduct from '../Product/IndexGoldProduct'
import IndexProviderProduct from '../Product/IndexProviderProduct'
import IndexShareProduct from '../Product/IndexSubcribeProduct'
import IndexSubcribeProduct from '../Product/IndexShareProduct'

export default {
    components:{
        ProductCard,
        RecommentProductCard,
        IndexFlashBuyProduct,
        IndexGoldProduct,
        IndexProviderProduct,
        IndexSubcribeProduct,
        IndexShareProduct

    },
    data(){
        return {
            areas:[]
        }
    },
    props:{
        position:{type:String,default:()=>{ return null }},
        type:{type:String,default:()=>{ return null }},
    },
    created(){
        this.load();
    },
    methods:{
        load(){
            var params ={};
            if(this.position){
                params.position = this.position;
            }
            if(this.type){
                params.type = this.type;
            }
            this.$get("/qn.lego.promotion.areas",params).then(data=>{
                this.areas=data;
                this.$emit("on-load-success",data);
            }).catch(ex=>{
                this.$emit("on-load-faild",ex);
                this.$Message.warning(ex.message);
            })
        }
    }

}
</script>

<style scoped>

    .ppt-body{
        margin-top: 10px;
        width:1028px;
        margin-left: auto;
        margin-right:auto;
        text-align: left;
    }
    .body{
        margin-top: 10px;
        width:1190px;
        margin-left: auto;
        margin-right:auto;
        text-align: left;
    }
    .area-item{
        margin-top:15px;
        width: 1190px;
        margin-left: auto;
        margin-right:auto;
        text-align: left;
    }
    .area-item .header{
        border-bottom: 1px solid #ddd;
        height: 35px;
        line-height: 30px;
    }
    .area-item .header .more{
        font-size: 14px;
        height: 30px;
        float: right;
        vertical-align: middle;
    }
    .area-item .header .title{
        font-size: 18px;
        font-weight: 1000;
        height: 30px;
        display: inline-block;
        vertical-align: middle;
    }
    .area-item .header  .title .signal{
        border-left: 6px solid #ff464e;
        width:5px;
        height: 24px;
        margin-top:3px;
        float: left;
        margin-right: 10px;
    }
    
    .area-item .content{
        margin-top:10px;
    }
    .area-item .content .content-mg{
        margin:10px;
    }
    .area-item .content .content-mg:first-child{
        margin-left:0px;
    }
    .area-item .content .content-mg:nth-child(5n+1){
        margin-left:0px;
    }
    .area-item .content .content-mg:nth-child(5n){
        margin-right:0px;
    }
    .area-item .content .content-mg:last-child{
        margin-right:0px;
    }
</style>