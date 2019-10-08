<template>
<div class="body">
    <AreaPosition position="hotpush">
    </AreaPosition>

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
import AreasPosition from '../../components/areas/positions'
export default {
    components:{
        ProductCard,
        AreasPosition
    },
    data(){
        return {
            state:{
                loading:false
            },
            searchOpts:{
                materialId:4092
            },
            data:{
            },
            page:{
                totalResult:0,
            }
        }
    },
    created(){
        this.loadingRanking();
    },
    methods:{
        loadingRanking(){
            var reqd={};
            reqd.materialId = this.searchOpts.materialId;
            this.$get("/qn.lego.product.ranking.categories",reqd).then(data=>{
                this.state.loading=false;
                if(data.isError){
                    this.$Message.warning("请求数据失败，请重新刷新");
                    return ;
                }
                this.data=data.list;
                this.totalResult = data.totalResults;
            }).catch(ex=>{
                this.state.loading=false;
                this.$Message.warning(ex.message);
            }).then(()=>{
            });
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