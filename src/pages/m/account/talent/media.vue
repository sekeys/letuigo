<template>
<div>
    <div class="inf-card mt10">
        <div class="header" style="font-size:13px;margin-top:0px;">
            <Icon type="ios-contact-outline" size="21" style="color:#2d8cf0;"/>
            <p style="display:inline-block;margin-left:5px;font-size:13px;font-weight:600;">
                我的视频集
            </p>
        </div>
        <div v-if="unlockedFunctional" class="content">
            <div class="filter">
                <div>
                    共有<span style="margin-left:3px;margin-right:5px;color:#2d8cf0;">{{accCount}}</span>个视频,
                    <div style="display:inline-block;">
                        <Select v-model="filter.platform" size="small">
                            <Option v-for="(item) in platforms" :key="item.id" :value="item.id">
                                {{item.label}}
                            </Option>
                        </Select>
                    </div>
                    
                </div>
            </div>
            <div style="margin-top:50px;margin-bottom:25px;">
                <Row :gutter="32">
                    <template v-for="(item,index) in accounts">
                        <Col span="4" :key="index">
                        <div style="height:90px;width:100%;text-align:center;display:inline-block;" :key="index">
                            <div class="i-card">
                                <div style="margin-top:10px;">
                                    <Avatar icon="ios-person" size="large" :src="item.avatar" style="height:50px;width:50px;border-radius:25px;border: 1px solid #f0f0f0;"/>
                                </div>
                                <div style="margin-top:10px;font-size:13px;margin-top:15px">
                                    {{item.nick}}
                                </div>
                                <div style="text-align:left;margin-top:25px;">
                                    <div class="inf-item">
                                        <p class="inf-label">ID：</p>
                                        <p class="inf-value" style="font-size:12px;">{{item.tid}}</p>
                                    </div>
                                    <div class="inf-item">
                                        <p class="inf-label">账号：</p>
                                        <p class="inf-value" style="font-size:12px;">{{item.account}}</p>
                                    </div>
                                    <div class="inf-item">
                                        <p class="inf-label">平台：</p>
                                        <p class="inf-value" style="font-size:12px;">{{item.platform}}</p>
                                    </div>
                                    <div class="inf-item">
                                        <p class="inf-label">粉丝：</p>
                                        <p class="inf-value" style="font-size:12px;">{{item.fans}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Col>
                    </template>
                </Row>
            </div>
        </div>
        <div v-else class="mt20 content " style="margin-top:60px;">
            <div style="text-align:center;vertical-align:middle;margin-top:30px;margin-bottom:30px;">
                <div>
                    <XIcon type="unauth-out" size="63" style="color:#2d8cf0;"/>
                </div>
                <div style="margin-top:15px;">
                    未认证信息，是否即可<span class="gocertify" @click="onRedirectToCertity">认证信息</span>
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
        var now=new Date(),start,end;
        now.setDate(now.getDate() - 1);
        end =new Date(now);
        now.setDate(now.getDate() - 7);
        start =new Date(now);
        return {
            accCount:5,
            filter:{
                platform:"",
            },
            unlockedFunctional:false,
            platforms:[
                {
                    id:"1",
                    label:"抖音",
                }
            ],
            accounts:[
                {
                    nick:"我的号",
                    avatar:"https://file.iviewui.com/dist/e1cf12c07bf6458992569e67927d767e.png",
                    id:"",
                    account:"",
                    fans:"",
                }
            ]
        }
    },
    created(){

    },
    methods:{
        onRedirectToCertity(){
            this.$router.push({
                path:"/m/account/talent/certify",
            })
        }

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
        margin:5px 0;
    }
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