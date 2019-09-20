<template>
<div >
    <SlideMenu :category="category"></SlideMenu>
    <div :style="getContetnCss()">
        <div class="bck-app-content" :style="'min-height:'+(height-140) +'px;'">
            <router-view/>
        </div>
        <CopyWriter>
            
        </CopyWriter>
    </div>
</div>
</template>

<script>
import SlideMenu from '../../components/backend/SlideMenus'
import CopyWriter from '../../components/backend/CopyWriter'
export default {
    components:{SlideMenu,CopyWriter},
    name: 'App',
    data(){
        return {
            height: window.innerHeight,
            category:"",
        }
    },
    created(){
        var path =this.$route.fullPath;
        var segments = path.split('/');
        if(path.startsWith("/")){
            this.category = segments[2]
        }else{
            this.category = segments[1]
        }
        console.log(this.category);

    },
    methods:{
        getContetnCss(){
            return {'min-height': this.height+'px',width:'100%',paddingLeft:'210px',paddingRight:'10px',paddingTop:"80px",paddingBottom:'10px',background:'#f0f0f0'};
        }
    },
    watch:{
        $route(to,from){
            var geto= to;
            console.log(to);
            var path =to.fullPath;
            
            var segments = path.split('/');
            if(path.startsWith("/")){
                this.category = segments[2]
            }else{
                this.category = segments[1]
            }
        }
    }
    
}
</script>






<style>
.bck-app-content{
    background:white;
    width:100%;
    margin-top:15px;
}
.inf-card{
    width: 90%;
    background: white;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    padding: 24px;
    box-shadow:0 2px 2px 0 rgba(0,0,0,.1);
}
.inf-card .header{
    margin:10px 20px;
    height: 30px;
    line-height: 30px;
}
.inf-card  .content{
    margin-left:20px;
    margin-top: 10px;
    margin-bottom: 10px;

}
.inf-card .content .list{
    margin-top:15px;
}
.mt10{
    margin-top: 10px;
}
.mt15{
    margin-top: 15px;
}
.mt20{
    margin-top: 20px;
}
.mh340{
    min-height: 340px;
}
.inf-card .inf-area{
    padding:10px 20px;
}
.inf-card .inf-area .title{
font-size:12px;font-weight:600;margin-bottom:10px;
}
.inf-card .inf-area .area-content{
    margin-top:15px;width:460px;
}
.inf-card .inf-area .area-content-100{
    margin-top:15px;width:100%;
}
.inf-card .inf-area .annotation{
    
}
.inf-center{
    text-align: center;
}
.inf-func{
    margin-top: 45px;
}

    .inf-label{
        width:74px;
        text-align:right;
        font-size:12px;
        display: inline-block;
        color:#999999;
    }
    .inf-value{
        text-align:left;
        font-size:13px;
        padding-left: 5px;
        display: inline-block;
    }
    .inf-item{
        margin:5px 0;
    }
    .inf-item-lh25{
        margin:10px 0;
        height: 25px;
        line-height: 25px;
    }
</style>
