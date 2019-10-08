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
                //this.state.loading=false;
                window.location.href=data.redirect_url;
            }).catch(ex=>{
                //this.$Message.warning(ex.message);
            })
        }
    }
}
</script>

<style>

</style>