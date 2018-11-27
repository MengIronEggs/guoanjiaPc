<template>
    <div class="firstSwiper">
        <div class="mySwipers" ref="mySwipers21" v-swiper:mySwiper="swiperOption2">
            <div class="swiper-wrapper">
                <div class="swiper-slide first_bg" >
                    <div class="inforBox firstBg">
                        <img src="https://img.guoanfamily.com/rentPC/indexPage/shiyi.png" alt="">

                    </div>
                </div>
                <div class="swiper-slide second_bg" @click="ToNewHouse">
                    <div class="inforBox">
                        <div class="top_title">
                            <p>
                                你选择远方的风景
                            </p>
                            <p>
                                我们为你风雨兼程
                            </p>


                        </div>
                        <div class="msg">
                             <p>在全国范围内为您寻觅最合适的旅居产品</p>
                             <p>让诗和远方尽在身边</p>

                        </div>
                    </div>
                </div>
                <div class="swiper-slide third_bg" @click="ToRentHouse">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption2: {
                spaceBetween: 30,
                effect: 'fade',
                loop: true,
                speed:600,
                autoplay:{
                    delay: 5000,
                    disableOnInteraction: false
                //loop无效  stopOnLastSlide: true,
                },


            }
        }

    },
    methods:{
        ToNewHouse(){
            this.$router.push('/newHouse/newHouseIndex');
        },
        ToRentHouse(){
            this.$router.push('/rent/rentIndex');
        },
    },

    components: {

    }
}
</script>

<style scoped lang="less">
.firstSwiper{
    height: 100%;
    .mySwipers{
        height: 100%;
        .swiper-wrapper{
            height: 100%;
        }
        // height: ;
    }
    .swiper-slide{
        position: relative;

        &.first_bg{
            background: #fff url("https://img.guoanfamily.com/rentPC/indexPage/firsrBg.jpg") 65% center  no-repeat/cover;
            .firstBg{
                img{
                    width: 60%;
                    margin: 0 auto;
                }
            }
        }
        &.second_bg{
            cursor: pointer;
            background: #fff url("https://img.guoanfamily.com/rentPC/newHouseImg/newHouseIndex1.jpg") center top no-repeat/cover;

        }
        &.third_bg{
            cursor: pointer;
            background: #fff url("https://img.guoanfamily.com/rentPC/rentindex/rentIndex.jpg") center top no-repeat/cover;

        }
        .inforBox{
            position: absolute;
            top: 2rem;
            left: 3rem;
            width: 4.5rem;
            height: 2.2rem;
            .top_title{
                p{
                    font-size: .4rem;
                    line-height: .55rem;
                }
            }
            .msg{
                margin-top: .2rem;
                p{
                    font-size: .16rem;
                    line-height: 1.5em;

                }
            }

        }
    }
}

</style>
