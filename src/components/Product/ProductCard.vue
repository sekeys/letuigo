<template>
<Card class="card product-card">
    <div class="card-img">
        <img src="//img.alicdn.com/imgextra/i3/3524223614/O1CN01Y84YEt1cZFvsPsSkM_!!0-item_pic.jpg" width="220" height="220"></img>
    </div>
    <div class="title"></div>
    <div class="price">

    </div>
</Card>
</template>

<script>
export default {
    props:{
        scr:{
            default:"",
        }
    }
}
</script>

<style >
.product-card{
    cursor: pointer;
}
.product-card .ivu-card-body{
    padding: 0px;
}
</style>
<style scoped>
.ivu-card-body{
    padding: 0px;
}
.card{
    width: 220px;
    display: inline-block;
}
.card-img{
    width:220px;
    height: 220px;
    margin:0px;
    padding:0px;
    border:0px;
}
</style>