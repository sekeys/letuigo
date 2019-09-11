<template>
<div >
    <SlideMenu :category="category"></SlideMenu>
    <div :style="getContetnCss()">
        <div :style="'background:white;width:100%;min-height:'+(height-140) +'px;margin-top:15px;'">
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
</style>
