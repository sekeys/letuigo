<template>
<div>
    <div class="information-header">
        <div class="item" style="font-size:13px;">
            <h3>
                昵称: <span style="display:inline-block;margin-left:10px;"> {{u.nick}}</span>
            </h3>
        </div>
        <div class="item-light">
            <p>
                我的邀请码:  <span style="display:inline-block;margin-left:10px;"> {{invitecode}}</span>
            </p>
        </div>
        <div class="item-light">
            <p>
                获取认证:
                <span v-if="state.isCertifiedOne" style="display:inline-block;margin-left:10px;">
                    <template v-for="(item,index) in cretifies">
                        <Tag :key="index" color="volcano">{{item.title}}</Tag>
                    </template>
                </span>
                <span v-else style="display:inline-block;margin-left:10px;height:24px;line-height:24px;vertical-align:middle;"> 
                    <span class="ivu-tag-dot-inner" style="background-color:#FF0C0C;height:8px;width:8px;top:unset;margin-right:3px;"></span>
                    待认证
                </span>
            </p>
        </div>
    </div>
    <div class="information-header mt15 mh340">
        <div class="item" style="font-size:13px;margin-top:0px;">
            <IIcon type="trend" size="17" />
            <h3 style="display:inline-block;margin-left:5px;">
                收益趋势图
            </h3>
        </div>
        <div class="content">
            asdasdas
        </div>
    </div>
    <div class="information-header mt15 mh340">
        <div class="item" style="font-size:13px;margin-top:0px;">
            <IIcon type="ios-person-outline" size="18" />
            <h3 style="display:inline-block;margin-left:5px;">
                我的受邀好友
            </h3>
        </div>
        
    </div>
    <div class="information-header mt15 mh340">
        <div class="item" style="font-size:13px;margin-top:0px;">
            <IIcon type="ios-pulse-outline" size="18" />
            <h3 style="display:inline-block;margin-left:5px;">
                收益趋势图
            </h3>
        </div>
        
    </div>
    
</div>
</template>

<script>
import IIcon from '../../../components/icon'
export default {
    components:{IIcon},
    data(){
        return {
            u:{
                nick:"Sekeys",
            },
            invitecode:"543652",
            state:{
                isCertifiedOne:false,
            }
        }
    }
}
</script>

<style scoped>
.information-header{
    width: 90%;
    background: white;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    padding: 24px;
    box-shadow:0 2px 2px 0 rgba(0,0,0,.1);

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
.information-header .item{
    margin:10px 20px;
    height: 30px;
    line-height: 30px;
}
.information-header  .content{
    margin-left:20px;
    margin-top: 10px;
    margin-bottom: 10px;

}
.information-header .item-light{
    margin:5px 20px;
    font-size: 12px;
    color: #999999;
    height: 30px;
    line-height: 30px;
}
</style>

<style>
.bck-app-content{
    background: transparent;
}
</style>