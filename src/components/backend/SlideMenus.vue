<template>
<div class="SlideMenu" >
    <Menu  
        ref="menus" 
        accordion 
        :active-name="activeMenuName" 
        theme="dark" 
        width="auto" 
        :open-names="openMenuNames"
        style="height:100%;overflow: auto;" 
        @on-select="onMenuSelected"
        @on-open-change="onMenuSelected"
    >
        <template v-for="(item,index) in menus" >
            <Submenu v-if="item.children && item.children.length"
                :name="item.id" :key="index"
            >
                <template slot="title">
                    <icon  v-if="item.icon" :type="item.icon" size="large" ></icon>
                    {{item.title}}
                </template>
                <div 
                    v-for="(jtem,jndex) in item.children" 
                    :key="jndex"
                >   
                    <MenuGroup v-if="jtem.isgroup" :title="jtem.title">
                        <div v-for="(ktem,kndex) in jtem.children" :key="kndex">
                            <MenuItem :name="ktem.id">
                                <icon v-if="ktem.icon" :type="ktem.icon" size="large" ></icon>
                                {{ktem.title}}
                            </MenuItem>
                        </div>
                    </MenuGroup>
                    <MenuItem :name="jtem.id">
                        <icon v-if="jtem.icon" :type="jtem.icon" size="large" ></icon>
                        {{jtem.title}}
                    </MenuItem>
                </div>
            </Submenu>
            <MenuItem v-else :name="item.id" :key="index">
                <icon v-if="item.icon" :type="item.icon" size="large" ></icon>
                {{item.title}}
            </MenuItem>
        </template>
    </Menu>
</div>
</template>

<script>
import ExtractMenus from '../../configure/menus'
export default {
    data(){
        return {
            menus:[],
            activeMenuName:"",
            openMenuNames:[],
        };
    },
    props:{
        category:{
            type:String,
        }
    },
    created(){
        this.menus = ExtractMenus(this.category);
        //if()
        this.fixActiveMenuName();
    },
    methods:{
        onMenuSelected(d){
            var m = this.findMenus(d, this.menus);
            if(!this.handleEvent){
                this.$router.push(m.href);
            }else{
                this.$emit("on-navigation",m)
            }
        },
        findMenus(id, menus) {
            var result = null;
            for (var i = 0; i < menus.length; i++) {
                var item = menus[i];
                if (item.id == id) {
                    return item;
                    break;
                }
                if (item.children &&
                    item.children.length &&
                    (result = this.findMenus(id, item.children))
                ) {
                    return result;
                }
            }
            return null;
        },
        fixActiveMenuName() {
            var d = 1;
            var path = this.$route.path;
            if (this.$route.query && this.$route.query._pme) {
                path = this.$route.query._pme;
            }
            var m = this.findMenusByPath(path.replace(/\/$/, ""), this.menus, []);
            if (m != null) {
                this.openMenuNames = [m.parent ? m.parent[0] : ""];
                this.activeMenuName = m.selected;
            } 
            else {
                this.openMenuNames = [this.menus[0]];
                this.activeMenuName = this.menus[0];
            }
            this.$nextTick(() => {
                this.$refs.menus.updateOpened();
                this.$refs.menus.updateActiveName();
            });
        },
        findMenusByPath(path, menus, parent) {
            if (!path) {
                return;
            }
            var result = null;
            for (var i = 0; i < menus.length; i++) {
                var item = menus[i];
                if (item.href && item.href.toLowerCase() == path.toLowerCase()) {
                    return { selected: item.id, parent: parent };
                }
                if (item.children &&
                    item.children.length &&
                    (result = this.findMenusByPath(path,item.children,parent.concat(item.id)))
                ) {
                    return result;
                }
            }
            return null;
        },
    },
    watch:{
        category:{
            handler(){
                this.menus = ExtractMenus(this.category);
            }
        }
    }
}

</script>

<style>
.SlideMenu{
    padding-top:20px;
    position: fixed;
    top: 72px;
    left:0px;
    bottom: 0px;
    width: 200px;
    background: #515a6e;
    box-shadow: 4px 0 2px 0px rgba(0,0,0,.1);
    text-align: left;
}
.SlideMenu .ivu-menu .ivu-menu-item{
    padding-left: 46px;
}
.SlideMenu .ivu-menu-vertical .ivu-menu-item,.SlideMenu  .ivu-menu-vertical .ivu-menu-submenu-title{
    padding-left: 34px;
}

</style>