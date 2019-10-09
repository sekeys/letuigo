<template>
<div>
    <div >
        <Table :columns="table.column" :data="history"></Table>
    </div>
</div>
</template>

<script>
const colopts=[
    {
        title:"创建时间",
        key:"createtime",
    },
    {
        title:"商品信息",
        key:"state",
        render:(h,params)=>{
            var html = params.row.state ==1 ?"等待审核"
                :(params.row.state ==2 ?"正在使用"
                    : (params.row.state == 9?"已过期":"")
                )
            ;
            return h("div",{
                domProps:{
                    innerHTML:html,
                },
                style:{
                    color:params.row.state == 2?"blue":(params.row.state == 9?"red":"")
                }
            })
        }
    },
    {
        title:"订单状态",
        key:"status",
        render:(h,params)=>{
            var html =params.row.promotioncode;
            if(params.row.state == 1){
                html = "正在审核";
            }

            return h("div",{
                domProps:{
                    innerHTML:html,
                }
            })
        }
    },
    {
        title:"收入",
        key:"createdate",
    },
    {
        title:"订单金额",
        key:"createdate",
    },
    {
        title:"结算时间",
        key:"createdate",
    }
]
export default {
    props:{
        href:{type:Object,default:()=>{ return null }},
    },
    data(){
        return {
            data:[],
        };
    },
    created(){
        
    },
    methods:{
        load(){
            this.$get(this.href).then(data=>{
                if(data.isError){
                    this.$Message.warning("请求数据失败，请重新刷新");
                    return ;
                }
                this.data=data.result;
                this.$emit("on-load-complete",data);
            }).catch(ex=>{
                this.$emit("on-load-faild",ex);
                this.$Message.warning(ex.message);
            })
        }
    },
    watch:{
        href(old,value){
            this.load();
        }
    }
}
</script>

<style>

</style>