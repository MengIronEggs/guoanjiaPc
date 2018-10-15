<template>
    <div class="bodyTop">
        <div class="topTab">
             <headeNav></headeNav>
        </div>
        <div>
            <div class="topBj">
                <div class = 'topCenter'>
                    <div class='topCenterLeft'>
                        <div class='essentialInfo'>
                            <div class='essentName'>
                                <div class='leftName'>{{buildData.buildname}}</div>
                                <!-- <div class='essentTag'>
                                    <span :key="index" v-for="(item,index) in buildData.buildtagnameList">{{item}}</span>
                                </div> -->
                            </div>
                            <div class='mapCity'>{{buildData.province}}/{{buildData.city}}</div>
                            <div class='buildPrice'>
                                <span>均价：</span>
                                <span>{{buildData.averageprice}}</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class='topCenterRight'>
                        <div class='imgDiv'>
                            <img :src="`https://img.guoanfamily.com/${buildData.firstpicture}`" alt="">
                        </div>
                    </div>
                </div>
                <img :src="`https://img.guoanfamily.com/${buildData.firstpicture}`" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import headeNav from "~/components/headerNav.vue";
import bottom from "~/components/bottom.vue";
import { objFn } from "~/plugins/axios.js";
export default {
  data() {
    return {};
  },
  components: {
    headeNav,
    bottom
  },
  asyncData({ query }) {
    //   console.log('12342',query);
    return objFn
      .Axios(
        `palmsaleapp/api/v1/build/buildBaseInfoiIdApp?id=${query.id}`,
        "get",
        {},
        { interfaceType: "NEW_HOUSE" }
      )
      .then(res => {
        //   console.log('12342',res);
        if (res.status == 200) {
          console.log("1234", res);
          // console.log('111111111111111111111111111111111111',res.data);
          return { buildData: res.data };
        }
      });
  }
};
</script>

<style lang='less' scoped>
.bodyTop {
  width: 100%;
  height: 100%;
  .topTab {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .topBj {
    width: 100%;
    height: 7.1rem;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      //   height: 100%;
    }
    .topCenter {
      width: 70%;
      height: 5rem;
      position: absolute;
      top: 1.3rem;
      left: 15%;
      z-index: 1;
      background: #fff;
      display: flex;
      flex-direction: row;
      .topCenterLeft {
        width: 40%;
        height: 100%;
        background: peru;
        .essentialInfo {
          width: 90%;
          height: 90%;
          float: left;
          margin-top: 5%;
          margin-left: 5%;
          background: red;
          position: relative;
          .essentName {
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
            color: #222;
            .leftName {
              font-size: 0.24rem;
              font-weight: 600;
              float: left;
            }
            // .essentTag {
            //   float: left;
            //   margin-left: 0.2rem;
            //   span {
            //     display: inline-block;
            //     padding: 0.05rem;
            //     background: #666666;
            //     color: #fff;
            //     height: 0.4rem;
            //     line-height: 0.33rem;
            //     margin-right: 0.1rem;
            //   }
            // }
          }
          .mapCity{
              width:100%;
              height: .2rem;
              background:url('../../static/newHouseImg/map.png') no-repeat left;
              background-size: 3%;
              padding-left:.2rem;
              line-height: .2rem;
              font-size: .12rem;
              color:#e2e2e2;
          }
          // .buildPrice{

          // }
        }
      }
      .topCenterRight {
        width: 55%;
        margin-left: 3%;
        height: 100%;
        .imgDiv {
          width: 100%;
          height: 90%;
          margin-top: 4%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
