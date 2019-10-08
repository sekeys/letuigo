<template>
<div class="body">
    <div class="filter">

    </div>

    <AreaPosition position="shoping">
    </AreaPosition>

    <div style="margin-top:30px;width: 100%;background: white;margin-left: auto;margin-right: auto;text-align: left;-webkit-box-shadow:rgba(0, 0, 0, 0.2) 0px 5px 7px 0px;box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 7px 0px;">
        <template v-for="(item,index) in categories">
            <div :class="'cat-item ' +getActive(item)" :style="'width:'+(100/categories.length).toFixed(2)+'%;text-align:center;'" :key="index" @click="onClickCategoriesItem(item)">
                {{item.text}}
            </div>
        </template>
        <div style="clear:both;"></div>
    </div>
    <div class="products" style="margin-top:20px;">
        <div>
            <template v-for="(item,index) in data">
                <ProductCard class="product-item" :product="item" :key="index">

                </ProductCard>
            </template>
            <div style="clear:both;"></div>
        </div>
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
                pageSize:50,
                pageNo:1
            },
            selectedMaterialId:"",
            categories:[],
            data:[],
            page:{
                totalResult:0,
            }
        }
    },
    created(){
        //this.loadingProduct();
        this.loadCategories();
    },
    methods:{
        onSearchProduct(){

        },
        getActive(item){
            return item.id == this.selectedMaterialId?"active":"";
        },
        onClickCategoriesItem(item){
            this.selectedMaterialId = item.id;
            this.loadRankingProduct();
        },
        loadCategories(){
            this.$get("/qn.lego.product.ranking.categories.get",{cat:"hqlive"}).then(data=>{
                this.categories=data;
                this.selectedMaterialId = this.categories[0].id;
                this.loadRankingProduct();
            }).catch(ex=>{
                this.state.loading=false;
                this.$Message.warning(ex.message);
            })
        },
        loadRankingProduct(){
            this.$get("/qn.lego.product.ranking.categories",{
                materialId:this.selectedMaterialId
            }).then(data=>{
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

.shopping-filter .ivu-input,.shopping-filter .ivu-select-input{
    height:26px;
    line-height: 26px;
}
.shopping-filter .ivu-select-selection{
    height:26px;
    line-height: 26px;
}
.shopping-product-list .ivu-card-body{
    padding: 0px;
}
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

    .cat-item{
        height: 40px;
        cursor: pointer;
        line-height: 40px;
        font-size: 15px;
        font-weight: 800;
        float: left;
    }
    .cat-item:hover{
        color:#fe4800;
    }
    .cat-item.active{
        color:#fe4800;
        border:1px solid #fe4800;
    }
</style>