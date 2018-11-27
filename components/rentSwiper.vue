<template>
   <div class="rentSwiper">
        <div class="myswiper2" v-swiper:mySwiper2="swiperOption2">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in rentList" @click="ToHouseDetail(item)" :key="index">
                    <div class="card">
                        <div class="build_img">
                            <img :src="item.image" :alt="item.houseName">
                        </div>
                        <div class="build_infos">
                            <div class="build_name">{{item.houseName}} {{item.roomName}}{{item.roomNumber}}</div>
                            <div class="tags">
                                <ul>
                                    <li v-for="(its,index) in item.tags" :key="index">
                                        {{its}}
                                    </li>

                                </ul>
                            </div>
                            <div class="dress">
                                <span class="icon"></span>
                                <span class="dress_info">

                                        {{item.communityAddress}}

                                </span>
                            </div>

                        </div>
                        <div class="price clearfix">
                            <span class="danwei">元/月</span>
                            <span class="num">{{item.price}}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
    export default {
        props:["rentList"],
        data() {
            return {
                swiperOption2:{
                    slidesPerView: 4,
                    spaceBetween: 18,
                    freeMode: false
                }
            }
        },
        mounted() {
        },
        methods:{
            // 跳转详情
            ToHouseDetail(item){
                console.log(item)
                this.$router.push({path:"/rent/housedetail",query:{id:item.id,productType:item.productType}})
            }
        },
        components: {

        }
    }
</script>

<style scoped lang="less">
.rentSwiper{
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    *{
        box-sizing: border-box;
    }
    .myswiper2{
        width: 100%;
        height: 100%;
        .card{
            border: 1px solid #ccc;
            box-shadow: 2px 2px 5px #ccc;

            height: 98%;
            margin: 0 auto;
            cursor: pointer;
        }
        .build_img{
            height:1.8rem;
            background: #000;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .build_infos{
            padding: 0 .1rem;

        }
        .build_name{
            margin: .1rem 0;
            font-size: .20rem;
            line-height: .4rem;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .tags{
            height: .24rem;
            overflow: hidden;
            ul{
                height: .24rem;
                display: inline-block;
                white-space: nowrap;
                li{
                    display: inline;
                    padding: 0 .8em;
                    margin-right: 0.1rem;
                    background-color: #CCCCCC;
                    color: #fff;
                };
            }
        }
        .dress{
            margin-top: .1rem;
            .icon{
                float: left;
                width: .2rem;
                height: .2rem;
                background: url("../static/indexPage/adress.png") center no-repeat;
                background-size: 100%;
            }
            .dress_info{
                margin-top: .02rem;
                float: left;
                height: .16rem;
                width: 1.9rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                line-height:.16rem;
                font-size: .12rem;
                margin-left: .1rem;
                color: #999;
                overflow: hidden;

            }
        }
        .price{
            margin-top: .4rem;
            height: .6rem;
            border-top: 1px solid #ccc;
            overflow: hidden;
            padding-right:.1rem;
            .num{
                float: right;
                text-align: right;
                line-height: .5rem;
                font-size: .26rem;
            }
            .danwei{
                margin-left: .4em;
                margin-top: .16rem;
                float: right;
                text-align: right;
            }
        }
    }
}
</style>
