<template>
  
</template>

<script>
export default {
    created(){
        this.onRedirecting();
    },
    methods:{
        onRedirecting(){
            var q=this.$query();
            
            this.$http.post("/qn.outh.tplatform.taobao.redirect.url",{
                code:q.code,
                state:q.state
            }).then(data=>{
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
        }
    }
}
</script>

<style>

</style>