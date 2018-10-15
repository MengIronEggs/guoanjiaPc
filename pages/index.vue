<template>
    <div class="first">
        <div class="nav" :class="{showed:navShow}">
            <div class="loco" name="logo"></div>
            <ul class="bav_ul">
                <li class="Actived_ii">首页</li>
                <li>新房</li>
                <li>二手房</li>
                <li>租房</li>
                <li>展示中心</li>
                <li>关于我们</li>
                <li>登录</li>
            </ul>
            <div class="ipt">
                <div class="search"></div>
                <input class="search_int" @keyup.enter="FindRentBuild(rentQvyu)" placeholder="请输入您要居住的地区" type="text"  v-model="rentQvyu">
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
              <headeNav :NavActived="1"></headeNav>

              <div class="first_bg">
                <div class="Propaganda"></div>
                <div class="search_mask">
                    <div class="int_box">
                        <div class="inp_b">
                            <div class="icon_search"></div>
                            <input class="search_i" @keyup.enter="FindRentBuild(renCity)" placeholder="请输入您要居住的地区" type="text" v-model="renCity">
                        </div>
                        <div class="hots">
                            <ul class="left_b">
                                <li class="hotwards">热门区域：</li>
                                <li class="hotwards citys" @click="FindRentBuild('东城')">东城</li>
                                <li class="hotwards citys" @click="FindRentBuild('朝阳')">朝阳</li>
                                <li class="hotwards citys" @click="FindRentBuild('海淀')">海淀</li>
                                <li class="hotwards citys" @click="FindRentBuild('西城')">西城</li>
                                <li class="hotwards citys" @click="FindRentBuild('通州')">通州</li>
                                <li class="hotwards citys" @click="FindRentBuild('呼家楼')">呼家楼</li>
                                <li class="hotwards citys" @click="FindRentBuild('国贸')">国贸</li>
                            </ul>
                            <ul class="right_b">
                                <li class="hotwards">热门区域：</li>
                                <li class="hotwards citys" @click="FindRentBuild('林奥家园')">林奥家园</li>
                                <li class="hotwards citys"  @click="FindRentBuild('安和家园')">安和家园</li>
                                <li class="hotwards citys"  @click="FindRentBuild('通惠家园')">通惠家园</li>
                                <li class="hotwards citys"  @click="FindRentBuild('玉璞家园')">玉璞家园</li>
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
                        {{NewHouseList[nowHouseIndex]['city']}}
                    </div>
                    <div class="build_name">
                        {{NewHouseList[nowHouseIndex]['buildname']}}
                    </div>
                    <div class="tag">
                        <ul class="tagul">
                            <li v-for="(its,index) in NewHouseList[nowHouseIndex]['buildtagnameList']" :key="index">{{its}}</li>
                        </ul>
                    </div>
                </div>
                <div class="banner">
                  <div class="img" v-for="(item,index) in NewHouseList" :key="index" v-show="nowHouseIndex==index">
                      <img :src="`https://img.guoanfamily.com/${item.firstpicture}?imageView2/0/w/600/h/500`" alt="">
                  </div>
                  <div class="img_box">
                      <ul>
                          <li class="sm_img" :class="{ActivedLi:index==nowHouseIndex}" v-for="(item,index) in NewHouseList" :key="index" @click="ChouseHouse(index)">
                              <img :src="`https://img.guoanfamily.com/${item.firstpicture}?imageView2/0/w/600/h/500`" alt="">
                          </li>
                      </ul>
                  </div>
                </div>
                <div class="Build_card">
                    <div class="top_box">
                        <span class="num" v-if="NewHouseList[nowHouseIndex]['averageprice']>0">{{NewHouseList[nowHouseIndex]['averageprice']}}</span>
                        <span class="num" v-else>暂无定价</span>
                        <span class="danwei" v-if="NewHouseList[nowHouseIndex]['averageprice']>0">元/㎡</span>
                        <span class="average">均价</span>

                    </div>
                    <div class="bottom_box">
                        <div class="time">{{`开盘时间：${NewHouseList[nowHouseIndex]['openquotationtime']}`}}</div>
                        <div class="adress">{{`开盘地址：${NewHouseList[nowHouseIndex]['address']}`}}</div>
                    </div>
                    <div class="btn_con">
                        <div class="left" @click="Toprove()"></div>
                        <div class="img_num">{{`${nowHouseIndex+1}/${NewHouseList.length}`}}</div>
                        <div class="right" @click="Tonext()"></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 第三屏 -->
          <div class="swiper-slide">
              <div class="titles titles_BGC">
                  <div class="title_word">
                      租房频道
                  </div>
                  <div class="in_w">
                      认真的公寓 犒赏认真生活的人
                  </div>
              </div>
              <div class="topImg">
                <div class="top_box">

                </div>
              </div>
              <div class="houseBanner content_w">
                <template>
                  <rentSwiper :rentList="rentList"></rentSwiper>
                </template>

              </div>
              <div class="moreBtn" @click="ShowRents">
                >>更多品质房源<<
              </div>
          </div>
          <!-- 第四屏 -->
          <div class="swiper-slide">
            <div class="bg_img">
              <div class="info"></div>
              <div class="btn" @click="Show3d"></div>
            </div>
          </div>
          <!-- 第五屏 -->
          <div class="swiper-slide">
            <div class="half">
              <div class="titles">
                <div class="title_word">
                    二手房频道
                </div>
                <div class="in_w">
                  认真的公寓 犒赏认真生活的人
                </div>
              </div>
              <div class="infos ershou">

              </div>
            </div>

            <div class="half">
              <div class="titles">
                <div class="title_word">
                  展示中心
                </div>
                <div class="in_w">
                  认真的公寓 犒赏认真生活的人
                </div>
              </div>
              <div class="infos ">
                <div class="content_w">
                  <div class="house_img">
                    <img src="../static/indexPage/house1.png" alt="">
                  </div>
                  <div class="house_img">
                    <img src="../static/indexPage/house2.png" alt="">
                  </div>
                  <div class="house_img">
                    <img src="../static/indexPage/house3.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 第六屏 -->
          <div class="swiper-slide">
            <div class="top_box2">
              <div class="content_w clearfix Appinfo_box" >
                <!-- 头部 -->
                <div class="Appinfo">
                  <div class="App_title">
                    国安家App全新改版
                  </div>
                  <div class="AppEnglish">
                    New verson
                  </div>
                  <div class="tag_box">
                    <div class="tag_info">
                      <div class="tag_top">页面换新装</div>
                      <div class="tag_bottom">新房、租房各种需求一键直达</div>
                    </div>
                    <div class="tag_info">
                      <div class="tag_top">页面换新装</div>
                      <div class="tag_bottom">新房、租房各种需求一键直达</div>
                    </div>
                    <div class="tag_info">
                      <div class="tag_top">页面换新装</div>
                      <div class="tag_bottom">新房、租房各种需求一键直达</div>
                    </div>
                    <div class="tag_info">
                      <div class="tag_top">页面换新装</div>
                      <div class="tag_bottom">新房、租房各种需求一键直达</div>
                    </div>
                  </div>
                  <div class="erweima">
                    <div class="left_box">
                      <div class="btn_load1" @click="ChangeErWeiMa"></div>
                      <div class="btn_load2" @click="ChangeErWeiMa"></div>
                    </div>
                    <div class="right_box andriodE"></div>
                  </div>
                </div>
                <div class="appImg">

                </div>
              </div>
            </div>
            <div class="bottom_box2">
              <div>
                <BtnNav></BtnNav>
                <!-- 底部 -->
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>

</template>

    <script>
import { objFn } from "../plugins/axios.js";
import headeNav from "~/components/headerNav.vue";
import rentSwiper from "~/components/rentSwiper.vue";
import BtnNav from "~/components/bottom.vue"

export default {
  components: {
    headeNav,
    rentSwiper,
    BtnNav
  },
  asyncData() {
    let NewHouseList = {}
    let rentList = []
    return objFn
      .Axios("palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList","get",{},{ interfaceType: "NEW_HOUSE" })
      .then(res => {
        if (res.status == 200) {
          NewHouseList = res.data
        }
      }).then(()=>{
        return objFn.Axios(
		        "agenthouseCutomer/common/homePage",
		        "post",
		        {"size":"7"},
		        {interfaceType: "RENT_HOUSE"}).then(res => {
              rentList = res.data.roomList.map((item)=>{
		            		item.image = objFn.concatFileUrl(item.image,240,180);
		            		item.tags =item.tags.split(",",2);
		            		return item;
		            	})
	            return { NewHouseList,rentList};
		    	})
      });
  },
  data() {
    let self = this
    return {
      banners: ["/1.jpg", "/2.jpg", "/3.jpg"],
      navShow:false,
      nowHouseIndex:0,
      nowHouseImg:"",
      rentQvyu:"",
      ActiveNum:1,
      SwiperIndex:0,
      swiperOption: {
        resistanceRatio: 0,
        mousewheel: true,
        keyboard: true,
        direction: "vertical",
        on: {
          // 轮播滑动的函数
          slideChangeTransitionStart() {
            self.SwiperIndex = this.activeIndex
            if(this.activeIndex>0){
              self.navShow = true
            }else{
              self.navShow = false

            }

          }
        },
      },

      renCity:"",
    };
  },
  methods:{
    FindRentBuild(val){
      // 暂时处理
      window.location.href = `http://zufang.guoanfamily.com/#/HouseList?textSearch=${val}`
    },
    ChouseHouse(i){
      // this.nowHouseImg = this.nowHouseImg = this.NewHouseList[i]['firstpicture'];
      this.nowHouseIndex = i;

    },
    Toprove(){
      if(this.nowHouseIndex==0){
        this.nowHouseIndex = this.NewHouseList.length-1
      }else{
        this.nowHouseIndex--;

      }
    },
    Tonext(){
      if(this.nowHouseIndex == this.NewHouseList.length-1){
         this.nowHouseIndex = 0
      }else{
        this.nowHouseIndex++;
      }

    },
    ShowRents(){
      //
      window.location.href = "http://zufang.guoanfamily.com/#/HouseList"
    },
    Show3d(){
      window.location.href = "http://zufang.guoanfamily.com/#/HouseList"
    },
    ChangeErWeiMa(val){
      if(val==='1'){
        this.IsAndroid = true
      }else{
        this.IsAndroid = false

      }
    }
  },
  created() {},
  beforeMount() {},
  mounted() {

    // this.nowHouseImg = this.NewHouseList[0]['firstpicture'];
    // console.log(111,this.nowHouseImg);
  }
};
</script>

    <style lang="less" scoped>
.first {
  height: 100%;
  width: 100%;
  position: relative;
}
.line {
  width: 100%;
  float: left;
}
.nav {
  height: 0.6rem;
  width: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: -100%;
  z-index: 2;
  transition: top .8s;
  border-bottom: 1px solid #ccc;
  &.showed{
    top:0;
    transition: top .8s;
  }
  .loco {
    float: left;
    height: 0.43rem;
    width: 1.28rem;
    background: url("../static/indexPage/logo.png") center no-repeat;
    background-size: 100% 100%;
    margin-left: 94 * 0.8/1920 * 100%;
    margin-top: 0.08rem;
  }
  .bav_ul {
    float: left;
    height: 100%;
    margin-left: 150 * 0.8/1920 * 100%;
    display:flex;
    vertical-align: top;
    white-space: nowrap;
    li {
      height: 0.6rem;
      line-height: 0.6rem;
      vertical-align: top;
      font-size: 0.2rem;
      padding: 0 0.16rem;
      &.Actived_ii{
        background-color: #d6000f;
        color: #fff;
      }
      &:hover {
        cursor: pointer;
        background-color: #d6000f;
        color: #fff;
      }
    }
  }
  .ipt {
    width: 4rem;
    height: 0.36rem;
    background-color: #f5f5f5;
    float: left;
    margin-top: 0.12rem;
    margin-left: 0.56rem;
    border-radius: 0.18rem;
    padding: 0.06rem 0.1rem;
    overflow: hidden;
    .search {
      width: 0.24rem;
      height: 0.24rem;
      float: left;
      background: url("../static/indexPage/search.png") center no-repeat;
      background-size: 100% 100%;
    }
    .search_int {
      width: 3.4rem;
      height: 100%;
      line-height: 0.24rem;
      float: left;
      padding: 0;
      margin: 0;
      border: none;
      background-color: #f5f5f5;
      padding-left: 1.2em;
      font-size: 0.16rem;
    }
  }
  .tel {
    margin-left: 140 * 0.8/1920 * 100%;
    height: 0.22rem;
    margin-top: 0.19rem;
    float: left;
    .tel_ico {
      float: left;
      width: 0.22rem;
      height: 0.22rem;
      background: url("../static/indexPage/telIco.png") center no-repeat;
      background-size: 100% 100%;
    }
    .tel_num {
      float: left;
      height: 0.22rem;
      padding-left: 0.08rem;
      font-size: 0.22rem;
      color: rgb(0, 0, 0);
      line-height: 0.22rem;
    }
  }
}
.mySwipers {
  height: 100%;
  width: 100%;
  position: relative;
  .swiper-slide {
    position: relative;
    padding-top: .3rem;
    &:nth-child(1){
      padding-top: 0;
    }
    // 第一屏
    .first_bg {
      position: absolute;
      bottom: 0;
      top: 0.6rem;
      width: 100%;
      background: url("../static/indexPage/firsrBg.png") center no-repeat;
      background-size: cover;
      .Propaganda {
        position: absolute;
        left: 3.92rem;
        top: 1.45rem;
        width: 2.72rem;
        height: 2.28rem;
        background: url("../static/indexPage/shiyi.png") center no-repeat;
        background-size: 100% 100%;
      }
      .search_mask {
        position: absolute;
        bottom: 1.3rem;
        left: 0;
        height: 1.3rem;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        .int_box {
          min-width: 900px;
          width: 9rem;
          height: 100%;
          margin: 0 auto;
          .inp_b {
            width: 100%;
            height: 0.5rem;
            line-height: 50px;
            margin-top: 0.28rem;
            border-radius: 0.25rem;
            background-color: #fff;
          }
          .icon_search {
            width: 0.24rem;
            height: 0.24rem;
            margin-top: 0.13rem;
            margin-left: 0.15rem;
            float: left;
            background: url("../static/indexPage/search.png") center no-repeat;
            background-size: 100% 100%;
          }
          .search_i {
            min-width: 800px;
            width: 8rem;
            height: 0.5rem;
            line-height: 0.5rem;
            border: none;
            padding-left: 0.27rem;
            float: left;
            font-size: 0.16rem;
          }
        }
        .hots {
          margin-top: 0.12rem;
          height: 0.26rem;
          padding-left: 0.09rem;

          .left_b {
            float: left;
            display: flex;
            .hotwards {
              color: #fff;
              line-height: 0.26rem;
              padding: 0 0.05rem;
              font-size: 0.12rem;
              &.citys {
                cursor: pointer;
                &:hover {
                  color: #d6000f;
                }
              }
            }
          }
          .right_b {
            float: left;
            display: flex;
            margin-left: 45px;
            .hotwards {
              color: #fff;
              line-height: 0.26rem;
              padding: 0 0.05rem;
              font-size: 0.12rem;
              &.citys {
                cursor: pointer;
                &:hover {
                  color: #d6000f;
                }
              }
            }
          }
          .btn_box {
            min-width: 200px;
            width: 2.2rem;
            float: right;
            height: 0.26rem;
          }
          .img_btn {
            float: right;
            margin-right: 0.12rem;
            height: 0.26rem;
            border-radius: 0.13rem;
            padding: 0 0.16rem;
            line-height: 0.26rem;
            vertical-align: top;
            background-color: #e34b3e;
            color: #fff;
          }
        }
      }
    }
    // 第二屏
    .titles {
      height: 1.6rem;
      background: url("../static/indexPage/NewHouses.png") center 0.5rem
        no-repeat;
      background-size: 16%;
      overflow: hidden;
      &.titles_BGC {
        background-color: #f5f5f5;
      }
      .title_word {
        margin: 0.64rem auto 0;
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.4rem;
      }
      .in_w {
        margin: 0.15rem auto 0;
        color: #666;
        text-align: center;
        height: 0.12rem;
        line-height: 0.12rem;
        font-size: 0.12rem;
      }
    }
    .houseList {
      position: absolute;
      bottom: 0;
      width: 100%;
      top: 1.9rem;
      background: url("../static/indexPage/houseBg.png") center no-repeat;
      background-size: 100% 100%;
      .housebox {
        padding-top: 0.5rem;
        height: 100%;
        position: relative;
        .leftInfo {
          float: left;
          width: 2.7rem;
          height: 100%;
          .city {
            margin-top: 0.24rem;
            height: 0.24rem;
            font-size: 0.24rem;
            line-height: 0.24rem;
            text-align: center;
          }
          .build_name {
            height: 0.54rem;
            line-height: 0.54rem;
            font-size: 0.3rem;
            text-align: center;
          }
          .tag {
            height: 0.5rem;
            width: 100%;
            overflow-x: auto;

          }
          .tagul {
            display: inline-block;
            white-space: nowrap;
            li {
              display: inline;
              background: #ccc;
              color: #fff;
              padding: 0 0.2em;
              margin-right: 0.1rem;
              cursor: pointer;
            }
          }
        }
        .banner {
          width: 9.3rem;
          float: left;
          height: 100%;
          .img {
            width: 7.7rem;
            float: left;
            height: 4.85rem;
            img {
              width: 100%;
              height: 100%;
              vertical-align: top;
            }
          }
          .img_box {
            overflow-y: auto;
            float: left;
            width: 1.6rem;
            height: 4.85rem;
            border: 1px solid #eee;
            .sm_img {
              height: 1.2rem;
              margin-bottom: 0.02rem;
              &.ActivedLi{
                border: 1px solid red;
              }
              img {
                width: 100%;
                height: 100%;
                vertical-align: top;
              }
            }
          }
        }
        .Build_card {
          width: 3.65rem;
          height: 2.85rem;
          position: absolute;
          left: 0;
          top: 2.2rem;
          padding: 0.2rem;
          background: #000;
          .top_box {
            height: 25%;
            border-bottom: 1px solid #ccc;
            .num {
              line-height: 0.6rem;
              font-size: 0.4rem;
              float: left;
              color: #fff;
            }
            .average {
              margin-top: 0.22rem;
              margin-left: 0.15rem;
              color: #fff;
              float: left;
              font-size: 0.18rem;
            }
            .danwei {
              margin-top: 0.22rem;
              margin-left: 0.1rem;
              color: #fff;
              float: left;
              font-size: 0.18rem;
            }
          }
          .bottom_box {
            height: 30%;
            .adress,
            .time {
              height: 50%;
              line-height: 0.5rem;
              font-size: 0.16rem;
              color: #fff;
            }
          }
          .btn_con {
            height: 0.3rem;
            position: absolute;
            left: 0.2rem;
            bottom: 0.2rem;
            width: 1.2rem;
            .left {
              float: left;
              width: 0.3rem;
              height: 0.3rem;
              border-radius: 50%;

              background: url("../static/indexPage/prove.png") 34% center
                no-repeat;
              background-size: 70%;
              background-color: #e34b3e;
            }
            .right {
              float: right;
              width: 0.3rem;
              height: 0.3rem;
              border-radius: 50%;
              background: url("../static/indexPage/next.png") 65% center
                no-repeat;
              background-size: 70%;
              background-color: #e34b3e;
            }
            .img_num {
              position: absolute;
              top: 0;
              width: 0.6rem;
              left: 0.3rem;
              color: #fff;
              font-size: 0.24rem;
              line-height: 0.3rem;
              text-align: center;
            }
          }
        }
      }
    }
    // 第三屏
    .rent_title {
      height: 2rem;
      background: url("../static/indexPage/Tenement.png") center 0.65rem
        no-repeat;
      background-size: 22%;
      background-color: #f5f5f5;
      overflow: hidden;
      .title_word {
        margin: 0.9rem auto 0;
        width: 2.1rem;
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.5rem;
      }
      .in_w {
        margin: 0.15rem auto 0;
        color: #666;
        text-align: center;
        height: 0.12rem;
        line-height: 0.12rem;
        font-size: 0.12rem;
      }
    }
    .topImg {
      height: 4.5rem;
      background: url("../static/indexPage/topImg.png") center no-repeat;
      background-size: cover;
      overflow: hidden;
      .top_box{
        height: 1.32*0.8rem;
        width: 4.82*0.8rem;
        margin: .7rem auto;
        background: url("../static/indexPage/rentFonts.png") center no-repeat;
        background-size: 100% 100%;
      }
    }
    .houseBanner {
      position: absolute;
      left: 50%;
      padding: 0.3rem 0.3rem 0;
      background-color: #fff;
      transform: translateX(-50%);
      top: 4rem;
      height: 3.8rem;
      // background: #000;
    }
    .moreBtn {
      position: absolute;
      left: 50%;
      bottom: 0.3rem;
      transform: translateX(-50%);
      height: 0.5rem;
      width: 2.5rem;
      border: 1px solid #ccc;
      line-height: 0.5rem;
      text-align: center;
      color: #999;
      font-size: 0.14rem;
      cursor: pointer;
    }
    // 第4屏
    .bg_img {
      height: 100%;
      background: url("../static/indexPage/page4Bg.png") center no-repeat;
      background-size: 100%;
      .info {
        position: absolute;
        top: 3rem;
        left: 3rem;
        width: 5.64rem;
        height: 1.62rem;
        background: url("../static/indexPage/GaoPin.png") top center no-repeat;
        background-size: cover;
      }
      .btn {
        width: 1.3rem;
        height: 0.4rem;
        position: absolute;
        left: 3rem;
        top: 5rem;
        background: url("../static/indexPage/maroBtn.png") center no-repeat;
        background-size: 100%;
        box-shadow: 2px 2px 1px #666;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .Propaganda {
      height: 3rem;
    }
    // 第5屏
    .half {
      height: 50%;
      width: 100%;
      position: relative;
      .infos {
        position: absolute;
        top: 1.6rem;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        &.ershou {
          background: url("../static/indexPage/ershou.png") center no-repeat;
          background-size: cover;
        }

        .house_img {
          width: 3.9rem;
          height: 2.96rem;
          background: #000;
          float: left;
          margin-right: 0.15rem;
          &:nth-child(3) {
            margin-right: 0;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    // 第6屏
    .top_box2 {
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 3.35rem;
      padding-top: 1rem;
      .Appinfo_box {
        height: 100%;
      }
      .Appinfo {
        float: left;
        width: 45%;
        .App_title {
          font-size: 0.4rem;
          text-align: center;
        }
        .AppEnglish {
          font-size: 0.16rem;
          margin-top: 0.05rem;
          text-align: center;
          color: #999;
        }
        .tag_box {
          padding-top: 0.1rem;
          // margin-bottom: .5rem;
          height: 2rem;
          .tag_info {
            margin-top: 0.2rem;
            float: left;
            width: 50%;
            .tag_top {
              font-size: 0.2rem;
            }
            .tag_bottom {
              font-size: 0.14rem;
              color: #999;
            }
          }
        }
        .erweima {
          float: left;

          height: 1.3rem;
          .left_box {
            float: left;
            width: 1.8rem;

            .btn_load1,
            .btn_load2 {
              height: 0.6rem;
              width: 100%;
            }
            .btn_load1 {
              background: url("../static/indexPage/iosLoad.png") center  no-repeat;
              background-size: 100% 100%;
              margin-bottom: 0.1rem;
            }
            .btn_load2 {
              background: url("../static/indexPage/andrend.png") center no-repeat;
              background-size: 100% 100%;
            }
          }
          .right_box {
            float: left;
            margin-left: 0.2rem;
            width: 1.3rem;
            height: 1.3rem;
            background: url("https://media.guoanfamily.com/rent/static/HomePage/erweimadownload.png") center no-repeat;
            background-size: 100% 100%;


          }
        }
      }
      .appImg {
        float: left;
        width: 55%;
        height: 100%;
        background: url("../static/indexPage/phone.png") center no-repeat;
        background-size: contain;
      }
    }
    .bottom_box2 {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 3.65rem;
    }
  }
}
</style>