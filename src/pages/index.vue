
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


        <template v-for="(item,index) in areas">
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
                    <template v-for="(jtem,jndex) in item.list">
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
import ProductCard from '../components/Product/ProductCard'
import RecommentProductCard from '../components/Product/RecommentProductCard'
import IndexFlashBuyProduct from '../components/Product/IndexFlashBuyProduct'
import IndexGoldProduct from '../components/Product/IndexGoldProduct'
import IndexProviderProduct from '../components/Product/IndexProviderProduct'
import IndexShareProduct from '../components/Product/IndexSubcribeProduct'
import IndexSubcribeProduct from '../components/Product/IndexShareProduct'

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
            carsouelIndex:0,
            categories:[],
            areas:[]
        };
    },
    created(){
        //加载推荐
        this.loadRecommend();
        //加载域模块
        this.loadAreas();
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
        loadAreas(){
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
                path:item.href
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