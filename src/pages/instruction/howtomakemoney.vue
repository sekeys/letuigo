<template>
<div class="body">
    <div style="padding:30px;background-color:#fefefe;border:1px solid #e0e0e0;margin-top:30px;">
        <h3 style="margin-bottom:30px;font-size:17px;font-weight:600;">新手教程</h3>
        <Timeline>
            <TimelineItem>
                <p class="time">申请账号</p>
                <p class="content">首先点击用户登陆，注册账号</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">登陆账号</p>
                <p class="content">登陆账号后，进入用户后台管理，账号管理</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">获取推广码</p>
                <p class="content">获取推广码后，可进行分享推广商品</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">分享赚钱</p>
                <p class="content">获取推广码后，边可进行分享推广商品</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">等待结算</p>
                <p class="content">推广后商品被购买后，确认收获便可获取相应的佣金金币</p>
            </TimelineItem>
        </Timeline>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<style scoped>
    .time{
        font-size: 15px;
        font-weight: bold;
    }
    .content{
        padding-left: 15px;
        padding-top: 15px;
    }
</style>