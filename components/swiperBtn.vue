<template>
   <div class="swiperBtn">
       <div class="mySwipers" ref="mySwipers" v-swiper:mySwiper="swiperOption">
           <div class="swiper-wrapper">
                <div class="swiper-slide" :class="{actived:actindex===index}" @click="imgChange(index)" v-for="(item,index) in NewHouseList" :key="index">
                    <img v-lazy="`https://img.guoanfamily.com/${item.firstpicture}?imageView2/0/w/770/h/485`" alt="">
                    <div class="masks"></div>
                </div>
           </div>
       </div>
   </div>
</template>

<script>
export default {
    props:["NewHouseList"],
    data() {
        return {
            swiperOption:{
                resistanceRatio: 0,
                mousewheel: true,
                keyboard: true,
                direction: "vertical",
                slidesPerView: 5,
                spaceBetween: 5,
                freeMode: false
            },
            actindex:0

        }

    },
    methods:{
        imgChange(i){
            this.actindex = i;
            this.$emit("Schecked",i)
        }

    },
    components: {

    },
    computed:{
        stActIndex(){

            return this.$store.state.index.actIndex
        },
        swiper(){
            return this.$refs["mySwipers"].swiper
        }
    },
    watch:{
        stActIndex(){
            this.actindex = this.stActIndex;
        },
        actindex(){
            if(this.actindex>2){
                this.swiper.slideTo(this.actindex-2,400)
            } else if(this.actindex==0){
                this.swiper.slideTo(this.actindex,400)
            }else {
                this.swiper.slideTo(0,400)
            }


        }
    }
}
</script>

<style scoped lang="less">
.swiperBtn{
    width: 100%;
    height: 100%;
    .mySwipers{
         height: 100%;
         width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        border:none;
        vertical-align: top;
    }
    .swiper-slide{
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }
    .masks{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        // background-color: rgba(0,0,0,0.4);
    }
    .actived{
        border:2px solid #d6000f;
        img{
            border:none;
        }
        .masks{
            display: none;
        }
    }
}

</style>
