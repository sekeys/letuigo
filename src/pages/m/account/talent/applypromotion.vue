<template>
<div>
    <div class="inf-card mt10">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <Icon type="ios-git-network" size="21" style="color:#2d8cf0;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                推广码申请
            </p>
        </div>
        <div  class="mt20 content " style="margin-top:60px;">
            <div class="inf-steps" style="margin-left:auto;margin-right:auto;">
                <Steps :current="step">
                    <Step title="阅读协议" :content="step==0?'阅读并同意推广协议':''"></Step>
                    <Step title="填写个人资料" :content="step==1?'填写个人资料':''"></Step>
                    <Step title="填写运营资料" :content="step==2?'填写运营资料':''"></Step>
                    <Step title="待审核" :content="step==3?'等待系统审核':''"></Step>
                    <Step title="开始推广" :content="step==3?'推广赚钱':''"></Step>
                </Steps>
            </div>
            <div v-if="step==0">
                <div class="inf-area" >
                    <div class="area-content-100" style="margin-top:60px;text-align:center;">
                        <div class="inf-instruction-text" style="overflow-x:auto;overflow-y:hidden;height:420px;border:1px solid #e0e0e0;width:85%;margin:15px auto;">
                        </div>
                    </div>
                </div>
                <div class="inf-func inf-center" style="text-align:center;">
                    <div class="one">
                        <Button type="primary" @click="onAgreeWithContact">同意</Button>
                    </div>
                </div>
            </div>
            <div v-else-if="step==1">
                <div class="inf-area" >
                    <div class="area-content" style="margin-top:60px;">
                        <Form  :label-width="80">
                            <FormItem label="姓名：">
                                <Input v-model="applyinfo.name" placeholder=""></Input>
                            </FormItem>
                            <FormItem label="联系电话：">
                                <Input v-model="applyinfo.phone" placeholder=""></Input>
                            </FormItem>
                            <FormItem label="微信：">
                                <Input v-model="applyinfo.wechat" placeholder=""></Input>
                            </FormItem>
                            <FormItem label="QQ：">
                                <Input v-model="applyinfo.qq" placeholder=""></Input>
                            </FormItem>
                            <FormItem label="运营场景：">
                                <Select v-model="applyinfo.scene" placeholder="">
                                    <Option value="微信群">微信群</Option>
                                    <Option value="QQ群">QQ群</Option>
                                    <Option value="自媒体">自媒体</Option>
                                    <Option value="抖音">抖音</Option>
                                    <Option value="3">其他</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="运营：">
                                <Input v-model="applyinfo.operation" type="textarea" :rows="3" placeholder=""></Input>
                            </FormItem>
                        </Form>
                        <div class="inf-func inf-center" >
                            <div class="one">
                                <Button type="primary" @click="onApplyTo">确认提交</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="step==2">
                <div class="inf-area" style="margin-top:60px;">
                    <div class="inf-item-lh25">
                        <p class="inf-label">姓名：</p>
                        <p class="inf-value">{{applyinfo.name}}</p>
                    </div>
                    <div class="inf-item-lh25">
                        <p class="inf-label">联系电话：</p>
                        <p class="inf-value">{{applyinfo.phone}}</p>
                    </div>
                    <div class="inf-item-lh25">
                        <p class="inf-label">微信：</p>
                        <p class="inf-value">{{applyinfo.wechat}}</p>
                    </div>
                    <div class="inf-item-lh25">
                        <p class="inf-label">QQ：</p>
                        <p class="inf-value">{{applyinfo.qq}}</p>
                    </div>
                    <div class="inf-item-lh25">
                        <p class="inf-label">运营：</p>
                        <p class="inf-value">{{applyinfo.operation}}</p>
                    </div>
                    <div class="inf-func" >
                        <div class="one">
                            <div style="display:inline-block;font-size:16px;color:#2d8cf0;height:25px;line-height:25px;padding-left:23px;">
                                <XIcon type="scan-person" size="23" style="color:#2d8cf0;"/>
                                <span style="margin-left:23px;">等待审核...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else-if="step==3">
                <div class="inf-area" style="margin-top:60px;">
                    <h3 style="font-size:16px;">
                        推广码: 
                        <span style="display:inline-block;margin-left:10px;"> 
                            {{applyinfo.promotioncode}}
                        </span>
                    </h3>
                    <div style="height:35px;"></div>
                    <div class="inf-item-lh25">
                        <p class="inf-label">姓名：</p>
                        <p class="inf-value">{{applyinfo.name}}</p>
                    </div>
                    <div class="inf-item-lh25">
                        <p class="inf-label">联系电话：</p>
                        <p class="inf-value">{{applyinfo.phone}}</p>
                    </div>
                    <div class="inf-item-lh25">
                        <p class="inf-label">微信：</p>
                        <p class="inf-value">{{applyinfo.wechat}}</p>
                    </div>
                    <div class="inf-item-lh25">
                        <p class="inf-label">QQ：</p>
                        <p class="inf-value">{{applyinfo.qq}}</p>
                    </div>
                    <div class="inf-item-lh25">
                        <p class="inf-label">运营：</p>
                        <p class="inf-value">{{applyinfo.operation}}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import XIcon from '../../../../components/icon'
export default {
    components:{XIcon},
    data(){
        return {
            step:0,
            applyinfo:{
                state:0,
                phone:"",
                name:"",
                wechat:"",
                qq:"",
                scene:"",
                promotioncode:"12312",
                operation:"",
            }
        }
    },
    created(){
        var rparams= this.$route.params
        if(rparams){
            var id = rparams.id;
            if(id){
                this.load(id);
            }
        }
    },
    methods:{
        onAgreeWithContact(){
            this.step =1;
        },
        load(id){
            this.$http.get("/qn.lego.user.media.talent.promotioncode.apply.get?id="+id).then(res=>{
                this.applyinfo =res;
                this.onState();
            }).catch(ex=>{
                this.$Message.warning(ex.message);
            });
        },
        onApplyTo(){
            this.onRedirectToTaobaoOauth();
            return;
            this.$http.post("/qn.lego.user.media.talent.promotioncode.apply.create",this.applyinfo).then(res=>{
                this.step =2;
                //this.applyinfo.state=1;
                this.onRedirectToTaobaoOauth();
                //this.onState();
            }).catch(ex=>{
                this.$Message.warning(ex.message);
            });
        },
        onRedirectToTaobaoOauth(){
            this.$http.get("/qn.lego.taobao.oauth.url?state=r.apply.letuigo").then(res=>{
                this.step =2;
                //this.applyinfo.state=1;
                window.location.href = res;
                //this.onState();
            }).catch(ex=>{
                this.$Message.warning(ex.message);
            });
        },
        onState(){
            if(this.applyinfo.state ==1){
                this.step =2;
            }else if(this.applyinfo.state ==2){
                this.step =3;
            }else {
                this.step = 0;
            }

        }

    }

}
</script>

<style scoped>
    .i-card{
        height: 239px;
        width: 100%;
        border: 1px solid #f0f0f0;
        cursor: pointer;
        padding:16px ;
        position: relative;
    }
    .i-card:hover{
        border: 1px solid #ff464e;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.1);
    }
    .i-card.pay-default{
        border: 1px solid #5cadff;
    }
    .i-card.pay-default:hover{
        border: 1px solid #ff464e;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.1);
    }
    .i-card .title .icon{
        display: inline-block;
    }
    .i-card .account{
        height: 35px;
        line-height: 35px;
    }
    .i-card .title .text{
        display: inline-block;
        font-size: 12px;
    }
    .i-card .account .text{
        margin-top: 25px;
        text-align: left;
        font-size: 16px;
        font-weight: 700;
    }
    .i-card .footer .text{
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
</style>