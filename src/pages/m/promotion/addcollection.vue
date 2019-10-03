<template>
<div>
    <div class="inf-card">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <XIcon type="idcard" size="23" style="color:#2d8cf0;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                添加收藏
            </p>
        </div>
        <div class="mt20 content " style="margin-top:30px;">
            <div class="inf-area" style="">
                <div class="area-content" style="">
                    <Form  :label-width="80">
                        <FormItem label="标题名称">
                            <Input v-model="model.title" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="是否公开">
                            <RadioGroup v-model="model.public">
                                <Radio :label="true">公开</Radio>
                                <Radio :label="false">私密</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="描述">
                            <Input v-model="model.remark" type="textarea" :rows="3" placeholder=""></Input>
                        </FormItem>
                    </Form>
                    <div class="inf-func " style="margin-left:35px;">
                        <div class="two">
                            <Button type="primary" :loading="state.post" @click="onSubmitAdd">提交认证</Button>
                            <Button style="margin-left: 8px" :disabled="state.post" @click="onBrowserBack">取消返回</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import XIcon from '../../../components/icon'
export default {
    components:{XIcon},
    data(){
        return {
            unauthenication:true,
            model:{
                public:false,
                title:"",
                remark:"",
            },
            state:{
                post:false
            }
        }
    },
    methods:{
        onBrowserBack(){
            this.$router.back();
        },
        onSubmitAdd(){
            if(!this.pay.title){
                this.$Message.warning("未设置提现账号名称");
            }
            if(!this.pay.account){
                this.$Message.warning("未设置提现账号");
            }
            this.pay.alias =this.pay.account;
            this.$http.post("/qn.lego.user.capital.pay.account.create",this.pay).then(res=>{
                this.onBrowserBack();
            }).catch(ex=>{
                this.sending=false;
                this.$Message.warning(ex.message);
            });
        },
    }

}
</script>

<style scoped>
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
        margin:15px 0;
    }
    .pay-withdraw-card{
        height: 149px;
        width: 100%;
        border: 1px solid #bdc6cf;
        cursor: pointer;
        position: relative;
    }
    .pay-withdraw-card:hover{
        border: 1px solid #ff464e;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.1);
    }
    .pay-withdraw-card.pay-default{
        border: 1px solid #5cadff;
    }
    .pay-withdraw-card.pay-default:hover{
        border: 1px solid #ff464e;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.1);
    }
    .pay-withdraw-card .title .icon{
        display: inline-block;
    }
    .pay-withdraw-card .account{
        height: 35px;
        line-height: 35px;
    }
    .pay-withdraw-card .title .text{
        display: inline-block;
        font-size: 12px;
    }
    .pay-withdraw-card .account .text{
        margin-top: 25px;
        text-align: left;
        font-size: 16px;
        font-weight: 700;
    }
    .pay-withdraw-card .footer .text{
        margin-top:22px;
        width: 100%;
        text-align: right;
        font-size: 12px;
    }
    .gocertify{
        color:rgb(251, 86, 10);
        cursor: pointer;
    }
    .gocertify:hover{
        color: #5cadff;
    }
</style>
<style>
.bck-app-content{
    background: transparent;
}
.ivu-upload-select{
    display: unset;
}
</style>