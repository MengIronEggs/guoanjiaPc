<template>
    <div class="contract">
        <div class="btn_box " v-if="showNum===1||showNum===2">
            <button class="button Bt_garty" :class="{actived:showNum===1}" @click="MakeChouse(1)">
                <span class="icon1">
                </span>
                <span class="texts">
                    未完成的约看
                </span>
            </button>
            <button class="button Bt_garty" :class="{actived:showNum===2}" @click="MakeChouse(2)">
                <span class="icon1">
                </span>
                <span class="texts">
                    已完成的约看
                </span>
            </button>
        </div>
        <div class='rentCollectList'>
           <div class='rentCollent' :key="index" v-for="(item,index) in appointmentList" @click='appointmentListClick(item)'>
               <div class = 'apponitTimes'>
                 <span>约看时间：</span><span>{{item.appointTime}}</span>
               </div>
               <div class='rentImg'><img style="width:100%;height:100%;" v-lazy="`https://img.guoanfamily.com/${item.roomFirst}`" alt="" /></div>
               <div class='rentInfo'>
                 <div>{{item.communityName}}&nbsp;{{item.buildFloor}}</div>
                 <div><span :key="index1" v-for="(items,index1) in item.advantageTags">{{items}}</span></div>
                 <div>{{item.communityName}}</div>
                 <div>{{item.price}}&nbsp;<span>元/月</span><div v-show="showNum == 1" @click.stop="cancelApponitClick(item.id)">取消约看</div></div>
               </div>
           </div>
           <div class="nodata" v-show="appointmentList.length<=0">
                <template>
                  <noData></noData>
                </template>
            </div>
       </div>
    </div>
</template>

<script>
import { objFn } from "~/plugins/axios.js";
import noData from "~/components/personal/noData.vue"
export default {
  data() {
    return {
      showNum: 1,
      appointmentList: []
    };
  },
  components: {
        // payStep
        noData
    },
  methods: {
    //   默认定位已经约看
    MakeChouse(i) {
      this.showNum = i;
      if (i == 1) {
        this.appointmentListDataFn(0);
      } else {
        this.appointmentListDataFn(1);
      }
    },
    // 约看列表回显
    appointmentListDataFn(stateNum) {
      //stateNum == 0 为未完成的约看，反之亦然
      let url = "agenthouseCutomer/CAppointController/getCAppointList";
      let post_data = {
        currentPageNo: 1,
        isFinished: stateNum
      };
      objFn
        .Axios(url, "post", post_data, { interfaceType: "RENT_HOUSE" })
        .then(res => {
          // console.log('1234',res)
          for (let i = 0; i < res.content.length; i++) {
            // 时间转换
            res.content[i].appointTime = new Date(
              res.content[i].appointTime
            ).Format("yyyy-MM-dd hh:mm");
            if (!objFn.notEmpty(res.content[i].advantageTags)) {
              res.content[i].advantageTags = res.content[i].advantageTags.split(
                ","
              );
              if(res.content[i].advantageTags.length>3){
                res.content[i].advantageTags = res.content[i].advantageTags.slice(0,3);
              }
            }
          }
          this.appointmentList = res.content;
        });
    },
    // 取消约看的点击事件
    cancelApponitClick(item) {
      this.$showConfirm("确认取消约看？", () => {
        this.cancelApponitClick1(item);
      });
    },
    // 取消约看的点击事件
    // CAppointController/cancelCAppoint
    cancelApponitClick1(item) {
      let url = "agenthouseCutomer/CAppointController/cancelCAppoint";
      let post_data = {
        appointId: item
      };
      objFn
        .Axios(url, "post", post_data, { interfaceType: "RENT_HOUSE" })
        .then(res => {
          if (res.code == 0) {
            this.$showMsgTip("取消约看成功");
            this.appointmentListDataFn(0);
          }
        });
    },
    // 约看列表的点击事件
    appointmentListClick(item) {
      this.$router.push({
        path: "/rent/housedetail",
        query: { id: item.roomId, productType: item.productType }
      });
    }
  },
  mounted() {
    this.appointmentListDataFn(0);
  }
};
</script>

<style lang='less' scoped>
.contract {
  width: 10rem;
  .btn_box {
    height: 0.96rem;
    padding-bottom: 0.44rem;
    border-bottom: 1px solid #ccc;
    .button {
      vertical-align: top;
      border: none;
      padding: 0;
      height: 0.5rem;
      font-size: 0.18rem;
      line-height: 0.48rem;
      text-align: center;
      width: 2rem;
      cursor: pointer;
      &:nth-child(2) {
        margin-left: 0.24rem;
      }
      &.actived {
        border: 2px solid #d6000f;
        color: #d6000f;
        background-color: #fff;
        .icon1 {
          background: #d6000f;
        }
        .texts {
          color: #d6000f;
        }
      }
      .icon1 {
        float: left;
        height: 0.08rem;
        width: 0.08rem;
        margin-left: 0.2rem;
        margin-top: 0.2rem;
        background: #262d41;
        border-radius: 50%;
      }
      .texts {
        float: left;
        text-align: center;
        width: 1.6rem;
        font-size: 0.18rem;
        line-height: 0.48rem;
        color: #262d41;
      }
    }
  }
  .rentCollectList {
    .nodata{
        width: 100%;
        height: 7.5rem;
    }
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom:1.4rem;
    .rentCollent {
      cursor: pointer;
      margin-top: 0.38rem;
      width: 3rem;
      height: 4.4rem;
      margin-right: 0.2rem;
      .apponitTimes {
        width: 100%;
        height: 0.3rem;
        line-height: 0.3rem;
        color: #222;
        font-size: 0.2rem;
        span {
          font-size: 0.2rem;
        }
      }
      .rentImg {
        margin-top: 0.1rem;
        width: 3rem;
        height: 2rem;
      }
      .rentInfo {
        width: 3rem;
        height: 2rem;
        // margin-top: 0.1rem;
        padding-top:.1rem;
        display: flex;
        flex-direction: column;
        div {
          flex: 1;
        }
        div:nth-child(1) {
          font-size: 0.22rem;
        }
        div:nth-child(2) {
          span {
            display: inline-block;
            background: #ccc;
            padding: 2px 6px 2px 5px;
            font-size: 0.12rem;
            line-height: 0.3rem;
            color: #fff;
            margin-right: 0.05rem;
          }
        }
        div:nth-child(3) {
          background: url("https://img.guoanfamily.com/rentPC/newHouseImg/map.png")
            no-repeat left;
          background-size: 6%;
          padding-left: 0.3rem;
          line-height: 0.43rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #999;
          font-size: 0.16rem;
        }
        div:nth-child(4) {
          flex: 2;
          font-size: 0.25rem;
          line-height: 0.6rem;
          color: #000;
          position: relative;
          span {
            display: inline-block;
            font-size: 0.25rem;
            line-height: 0.6rem;
            color: #000;
          }
          div {
            cursor: pointer;
            position: absolute;
            right: 0.1rem;
            bottom: 0.35rem;
            width: 1rem;
            height: 0.3rem;
            background: #d6000f;
            text-align: center;
            color: #fff;
            line-height: 0.3rem;
            font-size: 0.16rem;
          }
        }
      }
    }
  }
}
</style>
