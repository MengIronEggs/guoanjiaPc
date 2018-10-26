<template>
    <div class="aboutMe">
        <!-- 关于我们 -->
        <div style="width:100%;height:auto;position:absolute;left:0;top:0;z-index:10">
             <headeNav></headeNav>
        </div>
        <div class="contents clearfix">
            <!-- 左侧菜单栏 -->
            <div class="leftMenu_bg"></div>
            <div class="leftMenu">
                <ul class="MenuBox">
                    <li>
                        <div class="topM"></div>
                    </li>
                    <li @click="MyleaseClick" :class="{actived:activeIndex==0}">
                        <div class="menus">
                            <p class="icons center1"></p>
                            <p class="CH">我的租约</p>
                            <p class="EN">LEASE</p>
                        </div>
                    </li>
                     <li @click="appointmentClick" :class="{actived:activeIndex==1}">
                        <div class="menus ">
                            <p class="icons center2"></p>
                            <p class="CH">我的约看</p>
                            <p class="EN">PREVIEW</p>
                        </div>

                    </li>
                     <li @click="contracts" :class="{actived:activeIndex==2}">
                        <div class="menus " >
                            <p class="icons center3"></p>
                            <p class="CH">我的合同</p>
                            <p class="EN">CONTRACT</p>
                        </div>

                    </li>
                     <li :class="{actived:activeIndex==3}" @click="collectClick">
                        <div class="menus ">
                            <p class="icons center4"></p>
                            <p class="CH">我的收藏</p>
                            <p class="EN">COLLECTION</p>
                        </div>

                    </li>
                     <li @click="complainClick" :class="{actived:activeIndex==4}">
                        <div class="menus ">
                            <p class="icons center5"></p>
                            <p class="CH">我的投诉</p>
                            <p class="EN">COMPLAINT</p>
                        </div>

                    </li>
                     <li @click="ownerEntrustmentClick" :class="{actived:activeIndex==5}">
                        <div class="menus ">
                            <p class="icons center6"></p>
                            <p class="CH">业主委托</p>
                            <p class="EN">ENTRUST</p>
                        </div>

                    </li>
                </ul>
            </div>
            <!-- 引用子组件的地方 -->
            <div class="rightINFO">
                <nuxt-child/>
            </div>
        </div>
        <BtnNav></BtnNav>
    </div>
</template>

<script>
import headeNav from "~/components/headerNav.vue";
import BtnNav from "~/components/bottom.vue";
export default {
    data() {
        return {
            activeIndex:null,
        }
    },
    methods:{
        ChousMune(i,e){
            if ( e && e.stopPropagation ){
                e.preventDefault();
            }else{
                window.event.returnValue = false;
            }
            this.activeIndex = i;
            // if(i)
        },
        // 我的租约
        MyleaseClick(){
            this.ChousMune(0);
            this.$router.push({path:"/personalCenter/aboutMe/myLease"});
        },
        // 我的合同
        contracts(){
            this.ChousMune(2);
            this.$router.push({path:"/personalCenter/aboutMe/contract"});
        },
        // 我的约看
        appointmentClick(){
            this.ChousMune(1);
            this.$router.push({path:"/personalCenter/aboutMe/appointment"});
        },
        // 收藏的点击事件
        collectClick(){
            this.ChousMune(3);
            this.$router.push({path:"/personalCenter/aboutMe/collect"});
        },
        // 我要投诉的点击事件
        complainClick(){
            this.ChousMune(4);
            this.$router.push({path:"/personalCenter/aboutMe/complain"});
        },
        // 业主委托的点击事件
        ownerEntrustmentClick(){
            this.ChousMune(5);
            this.$router.push({path:"/personalCenter/aboutMe/ownerEntrustment"});
        }
    },
    components: {
        headeNav,
        BtnNav
    },
    mounted() {
        // console.log('1234234',this.$route);
        if(this.$route.path =='/personalCenter/aboutMe/myLease')
            this.activeIndex = 0;
        if(this.$route.path =='/personalCenter/aboutMe/appointment')
            this.activeIndex = 1;
        if(this.$route.path =='/personalCenter/aboutMe/contract')
            this.activeIndex = 2;
        if(this.$route.path =='/personalCenter/aboutMe/collect')
            this.activeIndex = 3;
        if(this.$route.path =='/personalCenter/aboutMe/complain')
            this.activeIndex = 4;
        if(this.$route.path =='/personalCenter/aboutMe/ownerEntrustment')
            this.activeIndex = 5;       
    },
    watch:{
        $route:function() {
            if(this.$route.path =='/personalCenter/aboutMe/myLease')
            this.activeIndex = 0;
            if(this.$route.path =='/personalCenter/aboutMe/appointment')
                this.activeIndex = 1;
            if(this.$route.path =='/personalCenter/aboutMe/contract')
                this.activeIndex = 2;
            if(this.$route.path =='/personalCenter/aboutMe/collect')
                this.activeIndex = 3;
            if(this.$route.path =='/personalCenter/aboutMe/complain')
                this.activeIndex = 4;
            if(this.$route.path =='/personalCenter/aboutMe/ownerEntrustment')
                this.activeIndex = 5; 
        }
    }
}
</script>

<style scoped lang="less">
    .aboutMe{
        margin-top: .7rem;
        .contents{
            height: auto;
            position: relative;
            .leftMenu_bg{
                position: absolute;
                top: 0;
                bottom: 0;
                left: .9rem;
                width: 2.6rem;
                background-color: #262d40;
                z-index: 1;
            }
            .leftMenu{
                position: relative;
                float: left;
                width: 3.5rem;
                padding-left:.7rem;
                height: 100%;
                z-index: 2;
                .MenuBox{
                    width: 100%;
                    li{
                        padding-left:.2rem;
                        :hover{
                            cursor:pointer;
                        }
                        .topM{
                            height: .6rem;

                        }
                        &.actived{
                            background-color: #d7000f;
                            .menus{
                                background-color:#d7000f;
                                .icons{
                                     background: #ccc;
                                }
                            }
                        }
                        .menus{
                            width: 100%;
                            height: 1.4rem;
                            background-color: #262d40;
                            text-align: center;
                            padding: .4rem 0 0 .30rem;
                            .icons{
                                float: left;
                                margin-top: .05rem;
                                width: 0.5rem;
                                height: 0.5rem;
                                // background: red;
                                 &.center1{
                                        background: url('https://img.guoanfamily.com/rentPC/rentAboutme/center1.png') no-repeat center;
                                        background-size:100%;
                                     }
                                     &.center2{
                                        background: url('https://img.guoanfamily.com/rentPC/rentAboutme/center2.png') no-repeat center;
                                        background-size:100%;
                                     }
                                     &.center3{
                                        background: url('https://img.guoanfamily.com/rentPC/rentAboutme/center3.png') no-repeat center;
                                        background-size:100%;
                                     }
                                     &.center4{
                                        background: url('https://img.guoanfamily.com/rentPC/rentAboutme/center4.png') no-repeat center;
                                        background-size:100%;
                                     }
                                     &.center5{
                                        background: url('https://img.guoanfamily.com/rentPC/rentAboutme/center5.png') no-repeat center;
                                        background-size:100%;
                                     }
                                     &.center6{
                                        background: url('https://img.guoanfamily.com/rentPC/rentAboutme/center6.png') no-repeat center;
                                        background-size:100%;
                                     }
                            }
                            .CH{
                                line-height: .36rem;
                                padding: 0;
                                font-size: .2rem;
                                color:#fff;
                            }
                            .EN{
                                padding: 0;
                                line-height: .20rem;
                                font-size: .12rem;
                                color:#8F9197;
                            }
                        }
                    }
                }
            }
            .rightINFO{
                float: left;
                width: 15rem;
                padding: .66rem .58rem;
                padding-bottom: 0;
            }
        }
    }

</style>
