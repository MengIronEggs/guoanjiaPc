<template>
    <div class="aboutMe">
        <!-- 关于我们 -->
        <headeNav :NavActived="6"></headeNav>
        <!-- 左侧菜单栏 -->
        <div class="contents clearfix">
            <div class="leftMenu">
                <ul class="MenuBox">
                    <li>
                        <div class="topM"></div>
                    </li>
                    <li @click="ChousMune(0)" :class="{actived:activeIndex==0}">
                        <div class="menus ">
                            <p class="icons"></p>
                            <p class="CH">我的租约</p>
                            <p class="EN">LEASE</p>
                        </div>

                    </li>
                     <li @click="ChousMune(1)" :class="{actived:activeIndex==1}">
                        <div class="menus ">
                            <p class="icons"></p>
                            <p class="CH">我的约看</p>
                            <p class="EN">PREVIEW</p>
                        </div>

                    </li>
                     <li @click="ChousMune(2)" :class="{actived:activeIndex==2}">
                        <div class="menus " >
                            <p class="icons"></p>
                            <p class="CH">我的合同</p>
                            <p class="EN">CONTRACT</p>
                        </div>

                    </li>
                     <li @click="ChousMune(3)" :class="{actived:activeIndex==3}">
                        <div class="menus ">
                            <p class="icons"></p>
                            <p class="CH">我的收藏</p>
                            <p class="EN">COLLECTION</p>
                        </div>

                    </li>
                     <li @click="ChousMune(4)" :class="{actived:activeIndex==4}">
                        <div class="menus ">
                            <p class="icons"></p>
                            <p class="CH">我的投诉</p>
                            <p class="EN">COMPLAINT</p>
                        </div>

                    </li>
                     <li @click="ChousMune(5)" :class="{actived:activeIndex==5}">
                        <div class="menus ">
                            <p class="icons"></p>
                            <p class="CH">业主委托</p>
                            <p class="EN">ENTRUST</p>
                        </div>

                    </li>
                </ul>
            </div>
            <!-- 引用子组件的地方 -->
            <div class="rightINFO">

            </div>
        </div>
        <BtnNav></BtnNav>
    </div>
</template>

<script>
import headeNav from "~/components/headerNav.vue";
import BtnNav from "~/components/bottom.vue"
export default {
    data() {
        return {
            activeIndex:0,
        }

    },
    methods:{
        ChousMune(i,e){
            if ( e && e.stopPropagation ){
                e.preventDefault();
            }else{
                window.event.returnValue = false;
            }
            this.activeIndex = i
        }
    },
    components: {
        headeNav,
        BtnNav
    }
}
</script>

<style scoped lang="less">
    .aboutMe{
        .contents{
            .leftMenu{
                float: left;
                width: 3.5rem;
                padding-left:.7rem;
                .MenuBox{
                    width: 100%;
                    // background-color: red;

                    li{
                        padding-left:.2rem;
                        :hover{
                            cursor:pointer;
                        }
                        .topM{
                            height: .6rem;
                            background-color: #262d40;
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
                                background: red;
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
                                color:#fff;
                            }
                        }
                    }
                }
            }
            .rightINFO{
                float: left;
                width: 15rem;
                height: 100px;
                padding: .66rem .58rem;
            }
        }
    }

</style>
