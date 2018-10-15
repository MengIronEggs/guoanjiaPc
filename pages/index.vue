<template>
<div class="first">
  <div class="nav">
    <div class="loco" name="logo"></div>
    <ul class="bav_ul">
      <li>首页</li>
      <li>新房</li>
      <li>二手房</li>
      <li>租房</li>
      <li>展示中心</li>
      <li>关于我们</li>
      <li>登录</li>
    </ul>
    <div class="ipt">
      <div class="search">

      </div>
      <input class="search_int"  placeholder="请输入您要居住的地区" type="text" name="" id="">
    </div>
    <div class="tel clearfix">
      <div class="tel_ico"></div>
      <div class="tel_num">400-900-2225</div>
    </div>
    <!-- <div class="line " style="height:1px"></div> -->
  </div>
  <div class="mySwipers" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <!-- 第一屏 -->
      <div class="swiper-slide">
        <headeNav></headeNav>
        <div class="first_bg">
          <div class="Propaganda"></div>
          <div class="search_mask">
            <div class="int_box">
              <div class="inp_b">
                <div class="icon_search"></div>
                <input class="search_i" placeholder="请输入您要居住的地区" type="text">
              </div>
              <div class="hots">
                <ul class="left_b">
                  <li class="hotwards">热门区域：</li>
                  <li class="hotwards citys">东城</li>
                  <li class="hotwards citys">朝阳</li>
                  <li class="hotwards citys">海淀</li>
                  <li class="hotwards citys">西城</li>
                  <li class="hotwards citys">通州</li>
                  <li class="hotwards citys">呼家楼</li>
                  <li class="hotwards citys">国贸</li>
                </ul>
                <ul class="right_b">
                  <li class="hotwards">热门区域：</li>
                  <li class="hotwards citys">东城</li>
                  <li class="hotwards citys">朝阳</li>
                  <li class="hotwards citys">海淀</li>
                  <li class="hotwards citys">西城</li>
                  <li class="hotwards citys">通州</li>
                  <li class="hotwards citys">呼家楼</li>
                  <li class="hotwards citys">国贸</li>
                </ul>
                <div class="btn_box">
                  <div class="img_btn">地铁找房</div>
                  <div class="img_btn">地图找房</div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
      <!-- 第二屏 -->
      <div class="swiper-slide">
        <div class="titles">
          <div class="title_word">
            新房频道
          </div>
          <div class="in_w">
            梦在山海间，住在风景里
          </div>
        </div>
        <div class="houseList">
          <div class="content_w housebox">
            <div class="leftInfo">
              <div class="city">
                葫芦岛
              </div>
              <div class="build_name">
                首开国风海岸
              </div>
              <div class="tag">
                <ul class="tagul">
                  <li>海景地产</li>
                  <li>旅居地产</li>
                  <li>不限购</li>
                </ul>
              </div>

            </div>
            <div class="banner">
              <div class="img">
                <img src="https://img.guoanfamily.com/23f21c03-ea84-400a-a642-cf6cef96bf36.jpg?imageView2/0/w/240/h/240" alt="">
              </div>
              <div class="img_box">
                <ul>
                  <li class="sm_img">
                    <img src="https://img.guoanfamily.com/23f21c03-ea84-400a-a642-cf6cef96bf36.jpg?imageView2/0/w/240/h/240" alt="">

                  </li>
                </ul>
              </div>



            </div>
            <div class="Build_card">
              <div class="top_box">

                  <span class="num">3000</span>
                  <span class="danwei">元/㎡</span>
                  <span class="average">均价</span>

              </div>
              <div class="bottom_box">
                <div class="time">开盘时间</div>
                <div class="adress">开盘地址</div>
              </div>
              <div class="btn_con">
                <div class="left"></div>
                <div class="img_num">1/5</div>
                <div class="right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>
  </div>
</div>

</template>

<script>
import { objFn } from "../plugins/axios.js";
import headeNav from "~/components/headerNav.vue"
export default {
  components: {
    headeNav
  },
  // data(){

  asyncData() {
    return objFn
      .Axios(
        "palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList",
        "get",
        {},
        {interfaceType: "NEW_HOUSE"}
      )
      .then(res => {
        if(res.status == 200){
          return {
            data: res.data,
          }
        }

      });
  },
  data(){

    return {
      banners:[
         '/1.jpg',
          '/2.jpg',
          '/3.jpg'
      ],
      swiperOption:{
        resistanceRatio: 0,
        mousewheel: true,
        keyboard : true,
        direction: 'vertical'
      },

    }
  },
  created() {

  },
  beforeMount() {

  },
  mounted() {
    //在微信中打开

  }
};
</script>

<style lang="less" scoped>
  .first{
    height: 100%;
    width: 100%;
    position: relative;
  }
  .line{
    width: 100%;
    float: left;
  }
  .nav{
    height: .6rem;
    width: 100%;
    background: #fff;
    position: fixed;
    left: 0;
    top: -100%;
    z-index: 2;
    // border-bottom: 1px solid #ccc;
    .loco{
      float: left;
      height: .43rem;
      width: 1.28rem;
      background: url("../static/indexPage/logo.png") center no-repeat ;
      background-size: 100% 100%;
      margin-left: 94*0.8/1920*100%;
      margin-top: 0.08rem;
    }
    .bav_ul{
      float: left;
      height: 100%;
      margin-left: 150*0.8/1920*100%;
      display: inline;
      vertical-align: top;
      white-space: nowrap;
      li{
        height: .6rem;
        line-height: .6rem;
        display: inline-block;
        vertical-align: top;
        font-size: .2rem;
        padding: 0 .16rem;
        &:hover{
          cursor: pointer;
          background-color: #D6000F;
          color: #fff;
        }
      }
    }
    .ipt{
      width: 4rem;
      height: .36rem;
      background-color: #f5f5f5;
      float: left;
      margin-top: .12rem;
      margin-left: .56rem;
      border-radius: .18rem;
      padding: .06rem .1rem;
      overflow: hidden;
      .search{
        width: .24rem;
        height: 0.24rem;
        float: left;
        background: url("../static/indexPage/search.png") center no-repeat;
        background-size: 100% 100%;

      }
      .search_int{
        width: 3.4rem;
        height: 100%;
        line-height:0.24rem;
        float: left;
        padding: 0;
        margin: 0;
        border:none;
        background-color: #f5f5f5;
        padding-left: 1.2em;
        font-size: 0.16rem;


        }
    }
    .tel{
      margin-left: 140*0.8/1920*100%;
      height: 0.22rem;
      margin-top: .19rem;
      float: left;
      .tel_ico{
        float: left;
        width: .22rem;
        height: .22rem;
        background: url("../static/indexPage/telIco.png") center no-repeat;
        background-size: 100% 100%;
      }
      .tel_num{
        float: left;
        height: .22rem;
        padding-left: 0.08rem;
        font-size: 0.22rem;
        color: rgb(0,0,0);
        line-height: .22rem;
      }
    }
  }
  .mySwipers{
    height: 100%;
    width: 100%;
    position: relative;
    .swiper-slide{
      position: relative;
      .first_bg{
        position: absolute;
        bottom: 0;
        top: 0.6rem;
        width: 100%;
        background: url("../static/indexPage/firsrBg.png") center no-repeat;
        background-size: cover;
        .Propaganda{
          position: absolute;
          left: 3.92rem;
          top: 1.45rem;
          width: 2.72rem;
          height: 2.28rem;
          background: url("../static/indexPage/shiyi.png") center no-repeat;
          background-size: 100% 100%;

        }
        .search_mask{
          position: absolute;
          bottom: 1.3rem;
          left: 0;
          height: 1.3rem;
          width: 100%;
          background-color: rgba(0,0,0,.6);
          .int_box{
            min-width: 900px;
            width: 9rem;
            height: 100%;
            margin: 0 auto;
            .inp_b{
              width: 100%;
              height: .5rem;
              line-height: 50px;
              margin-top: .28rem;
              border-radius: .25rem;
              background-color: #fff;
            }
            .icon_search{
              width: .24rem;
              height: .24rem;
              margin-top: .13rem;
              margin-left: .15rem;
              float: left;
              background: url("../static/indexPage/search.png") center no-repeat;
              background-size:100% 100%;
            }
            .search_i{
               min-width: 800px;
               width: 8rem;
               height: 0.5rem;
               line-height:0.5rem;
               border: none;
               padding-left:.27rem;
               float: left;
               font-size: 0.16rem;
            }
          }
          .hots{
            margin-top: 0.12rem;
            height: 0.26rem;
            padding-left:0.09rem;

            .left_b{
              float: left;
              display: flex;
              .hotwards{
                color: #fff;
                line-height: 0.26rem;
                padding: 0 0.03rem;
                font-size: 0.12rem;
                &.citys{
                  cursor: pointer;
                  &:hover{
                    color: #D6000F;
                  }
                }
              }

            }
            .right_b{
              float: left;
              display: flex;
              margin-left: 45px;
              .hotwards{
                color: #fff;
                line-height: 0.26rem;
                padding: 0 0.03rem;
                font-size: 0.12rem;
                &.citys{
                  cursor: pointer;
                  &:hover{
                    color: #D6000F;
                  }
                }
              }

            }
            .btn_box{
              min-width: 200px;
              width: 2.2rem;
              float: right;
                height: 0.26rem;
            }
            .img_btn{
              float: right;
              margin-right: 0.12rem;
              height: 0.26rem;
              border-radius: 0.13rem;
              padding: 0 0.16rem;
              line-height:0.26rem;
              vertical-align: top;
              background-color: pink;
              color: #fff;

            }
          }
        }
      }
      .titles{
        height: 2rem;
        background: url('../static/indexPage/NewHouses.png')   center 0.65rem no-repeat;
        background-size: 22%;
        overflow: hidden;
        .title_word {
          margin: 0 auto;
          margin-top: .9rem;
          width: 2.1rem;
          text-align: center;
          height: .5rem;
          line-height: .5rem;
          font-size: .5rem
        }
        .in_w{
          margin: 0 auto;
          margin-top: .15rem;
          width: 2.1rem;
          text-align: center;
          height: .12rem;
          line-height:.12rem;
          font-size: .12rem;

        }

      }
      .houseList{
        position: absolute;
        bottom: 0;
        width: 100%;
        top: 2rem;
        background: url("../static/indexPage/houseBg.png") center no-repeat;
        background-size: 100% 100%;
        .housebox{
          padding-top:.5rem;
          height: 100%;
          position: relative;
          .leftInfo{
            float: left;
            width: 2.7rem;
            height: 100%;
            .city{
              margin-top: .24rem;
              height: .24rem;
              font-size: .24rem;
              line-height: .24rem;
              text-align: center;
            }
            .build_name{
              height: .54rem;
              line-height: .54rem;
              font-size: .3rem;
              text-align:center;
            }
            .tag{
              height: .3rem ;
              width: 100%;
              overflow-x: auto;
            }
            .tagul{
              display: flex;
              li{
                vertical-align: top;
                display: inline-block;
                background: #ccc;
                color: #fff;
                padding: 0 0.3em;
                margin-right: .1rem;
              }
            }

          }
          .banner{
            width: 9.3rem;
            float: left;
            height: 100%;
            .img{
              width: 7.7rem;
              float: left;
              height: 4.85rem;
              img{
                width: 100%;
                height: 100%;
                vertical-align: top
              }
            }
            .img_box{
              float: left;
              width: 1.6rem;
              height: 4.85rem;
              border:1px solid #eee;
              .sm_img{
                height: 1.2rem;
                margin-bottom: 0.02rem;
                img{
                  width: 100%;
                  height: 100%;
                  vertical-align: top
                }
              }
            }
          }
          .Build_card{
            width: 3.65rem;
            height: 2.85rem;
            position: absolute;
            left: 0;
            top: 2.2rem;
            padding: .2rem;
            background: #000;
            .top_box{
              height: 25%;
              border-bottom: 1px solid #ccc;
              .num{
                line-height: .6rem;
                font-size: .4rem;
                float: left;
                color: #fff;
              }
              .average{
                margin-top: .22rem;
                margin-left: .15rem;
                color: #fff;
                float: left;
                font-size: .18rem;
              }
              .danwei{
                margin-top: .22rem;
                margin-left: .1rem;
                color: #fff;
                float: left;
                font-size: .18rem;
              }
            }
            .bottom_box{
               height: 30%;
               .time,.adress{
                 height: 50%;
                 line-height: .5rem;
                 font-size: .16rem;
                 color: #fff;
               }

            }
            .btn_con{
              height: .3rem;
              position: absolute;
              left: 0.2rem;
              bottom: .2rem;
              width: 1.2rem;
              .left{
                float: left;
                width: .3rem;
                height: .3rem;
                background: red;
              }
              .right{
                float: right;
                width: .3rem;
                height: .3rem;
                background: red;
              }
              .img_num{
                position: absolute;
                top: 0;
                width: .6rem;
                left: .3rem;
                color: #fff;
                font-size: .24rem;
                line-height: .3rem;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
</style>


