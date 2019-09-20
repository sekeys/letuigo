<template>
<div>
    <div class="inf-card">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <XIcon type="idcard" size="23" style="color:#2d8cf0;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                身份认证
            </p>
        </div>
        <div class="mt20 content " style="margin-top:30px;">
            <div class="inf-area" style="">
                <p class="title" style="">填写基本资料</p>
                <div class="area-content" style="">
                    <Form  :label-width="80">
                        <FormItem label="真实姓名">
                            <Input v-model="certify.name" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="身份证号码">
                            <Input v-model="certify.cardno" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="身份证地址">
                            <Input v-model="certify.address" placeholder=""></Input>
                        </FormItem>
                    </Form>
                </div>
            </div>
            <div class="inf-area" style="padding:10px 20px;margin-bottom:10px;">
                <p class="title" style="font-size:12px;font-weight:600;">上传身份证</p>
                <p class="annotation">

                </p>
                <div class="area-content-100" style="margin-top:15px;width:100%;">
                    <div style="margin:30px;">
                        <Row :gutter="46">
                            <Col span="12">
                                <Upload 
                                ref="upload_pos"
                                accept='image'
                                :show-upload-list="false"
                                :before-upload="onPoshandleBeforeUpload"
                                :on-success="onPosHandleSuccess"
                                :on-format-error="handleFormatError"
                                :on-exceeded-size="handleMaxSize"
                                :action="`//mscdn.zhimifan.com/image?path=user/certify`"
                                style="width:100%;"
                                >
                                    <div :class="'pay-withdraw-card '" style="width:70%;margin:50px;height:210px;text-align:center;line-height:210px;">
                                        <div style="font-size:16px;">上传身份证正面</div>
                                    </div>
                                </Upload>
                            </Col>
                            <Col span="12">
                                <Upload 
                                ref="upload_opp"
                                accept='image'
                                :show-upload-list="false"
                                :on-success="onOppositeHandleSuccess"
                                :on-format-error="handleFormatError"
                                :on-exceeded-size="handleMaxSize"
                                :action="`//mscdn.zhimifan.com/image?path=user/certify`"
                                style="width:100%;"
                                >
                                    <div :class="'pay-withdraw-card '" style="width:70%;margin:50px;height:210px;text-align:center;line-height:210px;">
                                        <div style="font-size:16px;">上传身份证反面</div>
                                    </div>
                                </Upload>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div class="inf-func inf-center" style="text-align:center;">
                <div class="two">
                    <Button type="primary" @click="onSubmitCertify">提交认证</Button>
                    <Button style="margin-left: 8px">取消返回</Button>
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
            certify:{
                name:"",
                cardno:"",
                address:"",
                imagePositive:"",
                imageOpposite:"",
                imagePositiveBase64:"",
                imageOppositeBase64:"",
                infoJson:"",
            }
        }
    },
    methods:{
        onBrowserBack(){
            this.$router.back();
        },
        onSubmitCertify(){
            this.$http.post("/qn.user.property.certication",this.certify).then(res=>{
                console.log(res);
                this.onBrowserBack();
            }).catch(ex=>{
                this.sending=false;
                this.$Message.warning(ex.message);
            });
        },
        onRedirectToCertity(){
            this.$router.push({
                path:"/m/account/certifing",
            })
        },
        handleMaxSize(file) {
            this.$Notice.warning({
                title: "文件过大",
                desc: file.name + "文件太大，上传文件不能超过2M."
            });
        },
        handleFormatError(file) {
            this.$Notice.warning({
                title: "文件格式错误",
                desc: file.name + "格式错误，只能上传图片格式"
            });
        },
        onPoshandleBeforeUpload(item){
            var reader = new FileReader();
            var _this = this;  
            reader.readAsDataURL(item);
            reader.onload=function(e){
                _this.image_positive_base64 = e.target.result
            }

        },
        onPosHandleSuccess(res, file) {
            this.$http.post("/route.api.t.qn?t=recognition.idcard.api",{
                typeid:"2",
                base64:this.image_positive_base64
            }).then(res=>{
                console.log(res);
                this.certify.image_positive = `//mscdn.zhimifan.com/`+ res.path;
            }).catch(ex=>{
                this.sending=false;
                this.$Message.warning(ex.message);
            });
        },
        onOppositeHandleSuccess(res, file) {
            this.$http.post("/route.api.t.qn?t=recognition.idcard.api",{
                typeid:"2",
                base64:this.image_opposite_base64
            }).then(res=>{
                console.log(res);
                this.certify.image_opposite = `//mscdn.zhimifan.com/`+ res.path;
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