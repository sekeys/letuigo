<template>
<div class="body">
    <div v-if="promotions.length">

    </div>
    <div class="filter">

    </div>
    <div class="products product-prog-bck">
        <template v-for="(item,index) in data">
            <ProductCard class="product-item" :product="item" :key="index">
            </ProductCard>
        </template>
    </div>
</div>
</template>

<script>
import ProductCard from '../../components/Product/IndexFlashBuyProduct'
export default {
    components:{ProductCard},
    data(){
        return {
            state:{
                loading:false
            },

            searchOpts:{
                startDate:null,
                endDate:null,
                pageNo:1,
                pageSize:40
            },
            data:[],
            promotions:[],
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
            this.$get("/qn.lego.product.query.flashbuy",reqd).then(data=>{
                this.state.loading=false;
                if(data.isError){
                    this.$Message.warning("请求数据失败，请重新刷新");
                    return ;
                }
                this.data=data.list;
                this.totalResult = data.totalResult;
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
    }
}
</script>

<style>


.product-prog-bck .ivu-progress-success .ivu-progress-bg{
    background: #ed4014;
}
.product-prog-bck .ivu-progress-bg{
    background: #ed4014;
}
</style>
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