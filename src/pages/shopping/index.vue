<template>
<div class="body">
    <div class="filter">

    </div>
    <div class="products">
        <div style="text-align:right;margin-top:10px;margin-right:20px;">
            <Page :total="page.totalResult" :current="searchOpts.pageNo" :page-size="searchOpts.pageSize" 
                simple
                @on-change="onPageChange" />
        </div>
        <div>
        <template v-for="(item,index) in data">
            <ProductCard class="product-item" :product="item" :key="index">

            </ProductCard>
        </template>
        <div style="clear:both;"></div>
        <div style="text-align:center;margin-top:10px;margin-right:20px;">
            <Page :total="page.totalResult" :current="searchOpts.pageNo" :page-size="searchOpts.pageSize" 
                simple
                @on-change="onPageChange" />
        </div>
        </div>
    </div>
</div>
</template>

<script>
import ProductCard from '../../components/Product/ProductCard'
export default {
    components:{ProductCard},
    data(){
        return {
            state:{
                loading:false
            },
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
                pageSize:100,
                pageNo:1
            },
            data:[],
            page:{
                totalResult:0,
            }
        }
    },
    created(){
        this.loadingProduct();
    },
    methods:{
        onSearchProduct(){

        },
        loadingProduct(){
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
                reqd.sort = reqd.sort+(this.desc?"_desc":"_asc")
            }
            this.$get("/qn.lego.product.query.taobao",reqd).then(data=>{
                this.state.loading=false;
                if(data.isError){
                    this.$Message.warning("请求数据失败，请重新刷新");
                    return ;
                }
                this.data=data.list;
                this.page.totalResult = data.totalResult;
            }).catch(ex=>{
                this.state.loading=false;
                this.$Message.warning(ex.message);
            })
        },
        toFixLengthToAddZero(v,l){
            while(v.length<l){
                v+=0;
            }
            return v;
        },
        onPageChange(index){
            this.searchOpts.pageNo = index;
            this.loadingProduct();
        },
        onResetPageLoading(){
            this.searchOpts.pageNo = 1;
            this.loadingProduct();
        }
    }
}
</script>

<style scoped>

    .body{
        margin-top: 10px;
        width:1184px;
        margin-left: auto;
        margin-right:auto;
        text-align: left;
    }
    .product-item{
        margin:9px;
    }
    .product-item:first-child{
        margin-left:0px;
    }
    .product-item:nth-child(5n+1){
        margin-left:0px;
    }
    .product-item:nth-child(5n){
        margin-right:0px;
    }
    .product-item:last-child{
        margin-right:0px;
    }
</style>