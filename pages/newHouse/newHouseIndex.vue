<template>
    <div class="bodyTop">
        <div style="width:100%;height:auto;position:absolute;left:0;top:0;z-index:10">
             <headeNav :NavActived="2"></headeNav>
        </div>
       <div>
            <div class="">
                <!-- 第一页部分 -->
                <div style="position:relative;">
                    <div class='newHouseIntroude bounceInLeft'>
                        <div class='slideInLeft'><span>新房服务</span></div>
                        <div class='slideInLeft'><span><p></p></span></div>
                        <div class='FloatingCenter slideInRight'><span>你选择远方的风景</span></div>
                        <div class='FloatingCenter slideInRight'><span>我们为你风雨兼程</span></div>
                         <div style="height:.2rem;"></div>
                        <div class='FloatingBottom slideInLeft'><span>在全国范围内</span></div>
                        <div class='FloatingBottom slideInLeft'><span>为您寻觅最合适的旅居产品</span></div>
                        <div class='FloatingBottom slideInLeft'><span>规划旅居生活</span></div>
                        <div class='FloatingBottom slideInLeft'><span>让诗和远方尽在身边</span></div>
                    </div>
                    <img style="width:100%;height:100%;" src="https://img.guoanfamily.com/rentPC/newHouseImg/newHouseIndex1.jpg" alt="">
                </div>
                <!-- 楼盘列表部分 -->
                <div>
                  <div style="width:100%;height:.3rem;"></div>
                    <div class='content_w newHouseList'>
                        <div class ='listTop'>
                            <div class="list"></div>
                            <div class='listTopName'>国安家新房</div>
                            <div class='listTopBottom'>自住房产优质可靠</div>
                        </div>
                        <!-- 房源列表部分 -->
                        <div class='listBottom'>
                            <div class='listHouseImg' :key="index"  v-for="(item,index) in listData" @click='builListClick(item.id)'>
                                <div class='listContent' >
                                    <div class="masker" @click='builListClick(item.id)'>
                                        <div class='listBuildName'>{{item.buildname}}</div>
                                        <!-- <div class='listBuildTag'>{{item.tenementtype}}</div> -->
                                        <div class='listBuildAddress'>{{item.province}}-{{item.city}}</div>
                                        <div class='listBuildPrice'>
                                            <span>均价：</span>
                                            <span v-if='item.averageprice !== 0'>{{item.averageprice}}</span>
                                            <span v-if='item.averageprice == 0'>售价待定</span>
                                            <span v-if='item.averageprice !== 0'>元/㎡</span>
                                        </div>
                                    </div>
                                    <img v-lazy="`https://img.guoanfamily.com/${item.firstpicture}?imageView2/1/w/370/h/240`" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="width:100%;height:1rem;"></div>
                </div>
                <div>
                    <div class="lastbj">
                         <div class='content_w videoContent'>
                             <div class ='listTop'>
                                <div class="list"></div>
                                <div class='listTopName'>中信国安峨眉秀湖第一届·十方界</div>
                                <div class='listTopBottom'>水域与城市自古以来就有不解的缘分，一座城有了水就有了灵性</div>
                                <div class='listTopBottom'>滨水地带一直对人们有一种隐秘的吸引力</div>
                                <div class='listTopBottom'>临水而居，择水而憩，自古就是人类亲近自然的本性，也是人类亘古不变的梦想。</div>
                            </div>
                            <div class='videoDiv'>
                                <video poster="https://img.guoanfamily.com/build.mp4?vframe/jpg/offset/3" src="https://img.guoanfamily.com/build.mp4" controls style="border-radius:.1rem;height:80%;cursor: pointer;">
                                    <source src="https://img.guoanfamily.com/build.mp4" type="video/mp4">
                                    您的浏览器不支持 video 标签。
                                </video>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>
<script>
import headeNav from "~/components/headerNav.vue";
import bottom from "~/components/bottom.vue";
import { objFn } from "~/plugins/axios.js";
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        resistanceRatio: 0,
        mousewheel: true,
        keyboard: true
      }
    };
  },
  components: {
    headeNav,
    bottom
  },
  asyncData() {
    return objFn
      .Axios(
        "palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList",
        "get",
        {},
        { interfaceType: "NEW_HOUSE" }
      )
      .then(res => {
        if (res.status == 200) {
          return { listData: res.data };
        }
      });
  },
  methods: {
    // 楼盘的点击事件
    builListClick(item) {
      this.$router.push({
        path: "/newHouse/newHouseDetails",
        query: { id: item }
      });
    }
  },
  mounted() {}
};
</script>
<style lang='less' scoped>
.bodyTop {
  width: 100%;
  height: 100%;
  .mySwipers {
    width: 100%;
    height: 100%;
  }
  //   头部简介
  .newHouseIntroude {
    width: 25%;
    height: 4.2rem;
    background: #d6000f;
    opacity: 0.8;
    position: absolute;
    left: 2rem;
    top: 30%;
    transform: translateY(-50%);
    div {
      float: right;
      width: 75%;
      text-align: left;
      span {
        display: inline-block;
        width: 70%;
        text-align: left;
      }
    }
    div:nth-child(1) {
      height: 0.7rem;
      margin-top:.3rem;
      span {
        font-size: 0.34rem;
        color: #fff;
        line-height: 0.7rem;
        height: 100%;
      }
    }
    div:nth-child(2) {
      height: 0.3rem;
      span {
        height: 100%;
        width: 75%;
        p {
          width: 0.7rem;
          height: 0.05rem;
          background: #fff;
          // margin: 0 auto;
        }
      }
    }
    .FloatingCenter {
      height: 0.5rem;
      span {
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.5rem;
        height: 100%;
      }
    }
    .FloatingBottom {
      height: 0.3rem;
      span {
        font-size: 0.2rem;
        color: #fff;
        line-height: 0.3rem;
        height: 100%;
      }
    }
  }
  //   中间楼盘列表
  .newHouseList {
    height: 100%;
    // background: yellow;
    // border-top: 1px solid #d6000f;
    // background: url("https://img.guoanfamily.com/rentPC/newHouseImg/hulodao.png")
      // no-repeat;
    // background-size: 65%;
    // background-position: center 22%;
    .listTop {
      width: 100%;
      height: 20%;
      .list {
        width: 100%;
        height: 30%;
      }
      .listTopName {
        width: 100%;
        height: 40%;
        text-align: center;
        font-size: 0.35rem;
        font-weight: 600;
        line-height: 0.6rem;
        color: #222222;
      }
      .listTopBottom {
        width: 100%;
        height: 30%;
        color: #666666;
        text-align: center;
      }
    }
    .listBottom {
      width: 100%;
      height: 65%;
      margin-top: 1%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .listHouseImg {
        cursor: pointer;
        width: 31%;
        margin-left: 2%;
        // margin-top: 0.2rem;
        img {
          width: 100%;
          vertical-align: top;
        }
        .listContent {
          width: 100%;
          overflow: hidden;
          margin-top: 7%;
          position: relative;
          .masker {
            cursor: pointer;
            width: 100%;
            height: 0.7rem;
            position: absolute;
            transition: 0.5s;
            bottom: 0rem;
            left: 0;
            // top: 0;
            //   background:red;
            background: rgba(0, 0, 0, 0.7);
            .listBuildName {
              margin-top: 0.2rem;
              margin-left: 0.5rem;
              font-size: 0.28rem;
              font-weight: 600;
              color: #fff;
            }
            .listBuildPrice {
              margin-left: 0.5rem;
              margin-top: 0.6rem;
              height: 0.5rem;
              span {
                display: inline-block;
              }
              span:nth-child(1) {
                font-size: 0.12rem;
                color: #b1b1b2;
                line-height: 0.5rem;
              }
              span:nth-child(2) {
                font-size: 0.28rem;
                color: #fff;
                line-height: 0.5rem;
                font-weight: 600;
              }
              span:nth-child(3) {
                font-size: 0.12rem;
                color: #fff;
                line-height: 0.5rem;
              }
            }
            // .listBuildTag{
            //     width:30%;float: right;
            // }
            .listBuildAddress {
              margin-left: 0.5rem;
              height: 0.4rem;
              background: url("https://img.guoanfamily.com/rentPC/newHouseImg/map.png")
                no-repeat left;
              color: #b1b1b2;
              padding-left: 0.3rem;
              line-height: 0.4rem;
              font-size: 0.12rem;
            }
          }
          .masker:hover {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  //   结尾video 样式
  .lastbj {
    width: 100%;
    height: 100%;
    background: url("https://img.guoanfamily.com/rentPC/newHouseImg/videobj.jpg")
      no-repeat center;
    background-size: cover;
    .listTop {
      width: 100%;
      height: 20%;
      .list {
        width: 100%;
        height: 30%;
      }
      .listTopName {
        width: 100%;
        height: 40%;
        text-align: center;
        font-size: 0.35rem;
        font-weight: 600;
        // line-height: 0.6rem;
        color: #222222;
        padding-top: .4rem;
      }
      .listTopBottom {
        width: 100%;
        color: #666666;
        text-align: center;
      }
    }
    .videoDiv {
      cursor: pointer;
      width: 100%;
      height: 7rem;
      margin-top:.5rem;
      //   background: red;
      text-align: center;
      border-radius: 10px;
    }
    .videoContent {
      cursor: pointer;
      height: 100%;
      background: url("https://img.guoanfamily.com/rentPC/newHouseImg/hulodao.png")
        no-repeat;
      background-size: 65%;
      background-position: center 26%;
    }
  }
}
</style>