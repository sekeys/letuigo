<template>
<div class="body">
    <div class="filter">

    </div>
    <div class="products">
        <template v-for="(item,index) in data">
            <ProductCard class="product-item" :product="item" :key="index">

            </ProductCard>
        </template>
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
            data:{
            },
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
            this.$get("/qn.lego.taobao.tbk.dg.material.optional",reqd).then(data=>{
                this.state.loading=false;
                this.data=data.resultList;
                this.totalResult = data.totalResults;
            }).catch(ex=>{
                this.state.loading=false;
                this.$message.warn(ex.message);
            })
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

<style scoped>

    .body{
        margin-top: 10px;
        width:1024px;
        margin-left: auto;
        margin-right:auto;
        text-align: left;
    }
    .product-item{
        margin:10px;
    }
</style>