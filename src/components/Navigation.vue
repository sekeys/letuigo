<template>
<div class="body">
    <div class="category layout-line ">
        <div>
            商品分类
        </div>
    </div>
    <div @click="onRedirectToPage('/')" :class="`layout-line navigation-item ${getActiveClass('/')}`">
        <div>
            首页
        </div>
    </div>
    <div @click="onRedirectToPage('/shopping')" :class="`layout-line navigation-item ${getActiveClass('/shopping')}`">
        <div>
            购物
        </div>
    </div>
    <div @click="onRedirectToPage('/hotpush')" :class="`layout-line navigation-item ${getActiveClass('/hotpush')}`">
        <div>
            优惠热推
        </div>
    </div>
    <div @click="onRedirectToPage('/miaosha')" :class="`layout-line navigation-item ${getActiveClass('/miaosha')}`">
        <div>
            限时秒杀
        </div>
    </div>
    <div @click="onRedirectToPage('/gold')" :class="`layout-line navigation-item ${getActiveClass('/gold')}`">
        <div>
            金币抢购
        </div>
    </div>
    <div @click="onRedirectToPage('/sharemoney')" :class="`layout-line navigation-item ${getActiveClass('/sharemoney')}`">
        <div>
            分享赚钱
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            activeName:"",
        }
    },
    methods:{
        getActiveClass(path){
            if(this.activeName == path){
                return "active";
            }
            return "";
        },
        onRedirectToPage(path,query){
            this.$router.push({
                path:path,
                query:query
            });
        }
    },
    watch:{
        $route(to, from) {
            var path = this.$route.path;
            var ps = path.replace(/^\//,'').split('/');
            this.activeName = "/"+ps[0];
        }
    }
}
</script>

<style scoped>

    .body{
        margin-top: 10px;
        width:1190px;
        margin-left: auto;
        margin-right:auto;
        text-align: left;
        border-bottom: 2px solid #ff464e;
    }
    .layout-line{
        display: inline-block;
    }
    .navigation-item{
        height: 40px;
        line-height: 40px;
        padding-left:10px;
        padding-right:10px;
        font-size: 15px;
        cursor: pointer;
    }
    .navigation-item:hover{
        color: #f13439;
    }
    .navigation-item.active{
        color: #f13439;
    }
    .category{
        height: 40px;
        line-height: 40px;
        padding-left:10px;
        padding-right:10px;
        font-size: 15px;
        cursor: pointer;
        background-color: #f13439;
        color: white;
    }
</style>