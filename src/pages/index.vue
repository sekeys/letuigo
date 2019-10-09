
<template>
  <div>
        <div style="width:100%;text-align:center;height:386px;background-color:rgb(88, 119, 250);">
            <div class="body" style="margin-top:0px;height:386px;position:relative;">
                <div style="position:absolute;z-index:2;left:0px;top:0px;width:162px;background-color:rgba(34,34,34, 0.8);height:386px;">

                </div>
                <div style="margin-left:162px;">
                    <Carousel  v-model="carsouelIndex" loop class="ppt-body" style="margin-top:0px;height:386px;">
                        <CarouselItem style="vertical-align: middle;zoom: 1;height:386px;cursor:pinter;" >
                            <img class="ppt-body" style="transition: transform 3s linear 0s;transform: scaleX(1) scaleY(1);margin-top:0px;" src="//image.meituitui.com/upload/Banner/2019/6/28/c6180455-365e-413d-95b3-875a005271a8" />
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        </div>
        <!--热门推荐-->
        <div  class="area-item">
            <div class="header">
                <div class="title">
                    <div class="signal"></div>
                    推荐好货 
                </div>
                <div class="more">
                    <a href="seemore">查看更多</a>
                </div>
            </div>
            <div class="content">
                <template v-for="(item,index) in categories">
                    <RecommentProductCard class="content-mg" :product="item" :key="index">
                    </RecommentProductCard>
                </template>
            </div>
        </div>

        
        <AreasPosition  :position="'index'">
        </AreasPosition>
  </div>
</template>

<script>
import ProductCard from '../components/Product/ProductCard'
import RecommentProductCard from '../components/Product/RecommentProductCard'
import IndexFlashBuyProduct from '../components/Product/IndexFlashBuyProduct'
import IndexGoldProduct from '../components/Product/IndexGoldProduct'
import IndexProviderProduct from '../components/Product/IndexProviderProduct'
import IndexShareProduct from '../components/Product/IndexSubcribeProduct'
import IndexSubcribeProduct from '../components/Product/IndexShareProduct'
import AreasPosition from '../components/areas/positions'

export default {
    components:{
        ProductCard,
        RecommentProductCard,
        IndexFlashBuyProduct,
        IndexGoldProduct,
        IndexProviderProduct,
        IndexSubcribeProduct,
        IndexShareProduct,
        AreasPosition

    },
    data(){
        return {
            carsouelIndex:0,
            categories:[]
        };
    },
    created(){
        //加载推荐
        this.loadRecommend();
    },
    methods:{
        loadRecommend(){
            this.$get("/qn.lego.product.query.taobao",{
                q:"女装",
                pageSize:5,
                pageNo:1,
                platform:1,
            }).then(data=>{
                if(data.isError){
                    this.$Message.warning("请求数据失败，请重新刷新");
                    return ;
                }
                this.categories=data.list;
            }).catch(ex=>{
                this.$Message.warning(ex.message);
            })
        },
        onClickAreaFaceRedirect(item){
            this.$router.push({
                path:item.morehref
            });
        }
    },
    
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