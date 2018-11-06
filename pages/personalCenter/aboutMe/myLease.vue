<template>
    <div class="page">
       <div class="btn_box " >
            <button class="button actived">
                <span class="icon1">
                </span>
                <span class="texts">
                    我的租约
                </span>
            </button>
       </div>
       <!-- 合同编号 -->
       <div class="herong_box">
          <div class="title1" :class="{actived:index==ActIndex}" @click="Chouses(index)" :key="index" v-for="(item,index) in newPageData">{{`合同${index+1}`}}</div>
       
          <!-- 合同基本信息 -->
          <div class="hetong_NO">
              <div style="border-bottom: 1px solid #ccc;"><span>合同编号</span><span>{{pageData.saleContractId}}</span></div>
              <div>
                    <div class='leftContent'>
                        <span>物业地址</span><span>{{pageData.houseAddress}}</span>
                    </div>
                    <div class="rightContent">
                        <span>付款方式</span><span>{{pageData.receiptCycleName}}</span>
                    </div>
              </div>
              <div>
                  <div class='leftContent'>
                        <span>合&nbsp;约&nbsp;期</span><span>{{pageData.validDate}}-{{pageData.endDate}}</span>
                    </div>
                    <div class="rightContent">
                        <span>本&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期</span><span>{{pageData.currentNumber}}期</span>
                    </div>
              </div>
              <div>
                  <div class='leftContent'>
                        <span>租&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金</span><span><span style="padding-right:.1rem;color:#d6000f;">{{pageData.realRentMoney}}</span>元/月</span>
                    </div>
                    <div class="rightContent">
                        <span>支付状态</span><span v-show="pageData.payStatus=='待支付'">{{pageData.payStatus}}</span><span style="color:#d6000f;" v-show="pageData.payStatus=='已支付'">{{pageData.payStatus}}</span>
                    </div>
              </div>
          </div>
          <!-- 交费列表 -->
          <div class="payList"  :key="index" v-for="(item,index) in pageData.receiptPlanList">
              <div class="payListTop" :class="{'itemBjColor':item.realRent > 0}">
                  <div class='topInfo'>
                      <div>
                          <span style="font-size:.16rem;padding-left:.2rem;">第</span>
                            <span style="font-size:.48rem;font-weight:600;">{{item.number}}</span>
                            <span style="font-size:.16rem;">期&nbsp;</span>
                        </div>
                      <div>
                          STAGE
                      </div>
                  </div>
              </div>
              <div class='payListRight'>
                <div class='ActualPayment'>
                  <span>实际缴纳费用&nbsp;&nbsp;&nbsp;</span><span>{{item.realRent}}</span><span>&nbsp;&nbsp;&nbsp;元</span>
                </div>
                <div class='payData'>
                  <div class='Leaseterm'>
                    <span>租期&nbsp;&nbsp;&nbsp;</span>
                    <span>{{item.rentDateStart}}——{{item.rentDateEnd}}</span>
                  </div>
                  <div class='repayment'>
                    <span>应付款日&nbsp;&nbsp;&nbsp;</span>
                    <span>{{item.rentDate}}</span>
                  </div>
                </div>
                <div class='toBePay'>
                  <span>待付款&nbsp;&nbsp;&nbsp;</span>
                    <span>{{item.differencesRent}}</span>
                </div>
                <button v-show="item.realRent < item.planRent && item.realRent> 0" class='payDetial' @click="payDetialClick(item)">支付详情</button>
                <button v-show="item.payStatus" class='payDetial1' @click="payDetialClick(item)">支付详情</button>

                <button v-show="!item.payStatus" class='gopay' @click="goPayClick(item)">去支付</button>
              </div>
          </div>
       </div>
       <div style="width:100%;height:.5rem;background:#fff;"></div>
    </div>
</template>

<script>
import { objFn } from "~/plugins/axios.js";
// import crumbs from "../../../components/crumbs"
export default {
  data() {
    return {
      pageData: [],
      newPageData: [],
      ActIndex: 0
    };
  },
  components: {
    // crumbs
  },
  methods: {
    // 租约列表加载
    pageLoadFn() {
      let url = "agenthouseCutomer/RentContractController/getUserLease";
      let post_data = {};
      objFn
        .Axios(url, "post", post_data, { interfaceType: "RENT_HOUSE" })
        .then(res => {
          if (res.code == 0) {
            this.newPageData = res.data;
            this.Chouses(this.ActIndex);
          }
        });
    },
    // 合同编号的点击事件
    Chouses(i) {
      this.ActIndex = i;
      this.pageData = this.newPageData[i];
    },
    // 支付详情的点击事件
    payDetialClick(item) {
      let Data = {
        receiptPlanId: item.receiptPlanId,
        saleContractId: item.saleContractId
      };
      this.$router.push({
        path: "/personalCenter/aboutMe/payDatails",
        query: Data
      });
    },
    // 去支付的点击事件
    goPayClick(item) {
      // console.log('嘻嘻嘻',item);
      let Data = {
        receiptPlanId: item.receiptPlanId,
        saleContractId: item.saleContractId
      };
      sessionStorage.setItem("rentPayData", JSON.stringify(Data));
      this.$router.push({ path: "/personalCenter/aboutMe/payStep" });
    }
  },
  mounted() {
    this.pageLoadFn();
  }
};
</script>

<style scoped lang="less">
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
    &.actived {
      border: 2px solid #d6000f;
      color: #d6000f;
      background-color: #fff;
    }
    .texts {
      color: #d6000f;
      display: inline-block;
      font-size: 0.18rem;
    }
    .icon1 {
      float: left;
      height: 0.08rem;
      width: 0.08rem;
      margin-left: 0.2rem;
      margin-top: 0.2rem;
      background: #d6000f;
      border-radius: 50%;
    }
  }
}
.herong_box {
  margin-top: 0.27rem;
  .title1 {
    float: left;
    height: 0.45rem;
    width: 1.3rem;
    background: url("https://img.guoanfamily.com/rentPC/rentAboutme/grayjiao.png")
      center no-repeat;
    background-size: 100% 100%;
    // background-color: red;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.18rem;
    cursor: pointer;
    z-index: 99;
    margin-bottom:.08rem;
    &.actived {
      background: url("https://img.guoanfamily.com/rentPC/rentAboutme/redjiao.png")
        center no-repeat;
      background-size: 100% 100%;
      color: #fff;
      z-index: 100;
    }
  }
}
// 合同基本信息部分
.hetong_NO {
  margin-top: 0.09rem;
  height: 2.4rem;
  width: 9rem;
  background-color: #f5f5f5;
  padding: 0.06rem;
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
    margin-left: 0.44rem;
    margin-right: 0.44rem;
  }
  div:nth-child(1) {
    span:nth-child(1) {
      font-size: 0.18rem;
      color: #262d41;
      line-height: 0.5rem;
      padding-right: 0.3rem;
    }
    span:nth-child(2) {
      color: #999999;
      font-size: 0.18rem;
    }
  }
  .leftContent {
    margin: 0;
    width: 50%;
    float: left;
    border: none;
    span:nth-child(1) {
      font-size: 0.18rem;
      color: #262d41;
      line-height: 0.5rem;
      padding-right: 0.3rem;
    }
    span:nth-child(2) {
      color: #999999;
    }
  }
  .rightContent {
    width: 50%;
    margin: 0;
    float: left;
    span:nth-child(1) {
      font-size: 0.18rem;
      color: #262d41;
      line-height: 0.5rem;
      padding-right: 0.3rem;
    }
    span:nth-child(2) {
      color: #999999;
    }
  }
}
// 交费列表部分

.payList {
  width: 9rem;
  height: 2rem;
  background: #f5f5f5;
  margin-top: 0.12rem;
  // display: flex;
  // flex-direction: column;

  .payListRight {
    position: relative;
    width: 82%;
    height: 100%;
    float: right;
    .gopay {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 1.5rem;
      height: 0.5rem;
      color: #fff;
      line-height: 0.5rem;
      font-size: 0.18rem;
      text-align: center;
      border: none;
      background: #d5321c;
    }
    .payDetial1 {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 1.5rem;
      height: 0.5rem;
      color: #fff;
      line-height: 0.5rem;
      font-size: 0.18rem;
      text-align: center;
      border: none;
      background: #d5321c;
    }
    .payDetial {
      position: absolute;
      right: 1.7rem;
      bottom: 0;
      width: 1.5rem;
      height: 0.5rem;
      color: #fff;
      line-height: 0.5rem;
      font-size: 0.18rem;
      text-align: center;
      border: none;
      background: #d5321c;
    }
    // background: goldenrod;
    .ActualPayment {
      width: 100%;
      height: 0.3rem;
      padding-left: 0.2rem;
      margin-top: 0.3rem;
      span {
        display: inline-block;
        line-height: 0.3rem;
        color: #262d41;
        font-size: 0.18rem;
      }
      span:nth-child(2) {
        font-size: 0.32rem;
        color: #d5321c;
      }
      span:nth-child(3) {
        color: #999999;
      }
    }
    .payData {
      width: 100%;
      height: 0.3rem;
      margin-top: 0.23rem;
      padding-left: 0.2rem;
      // background: yellow;
      .Leaseterm {
        width: 50%;
        float: left;
        height: 100%;
        span {
          display: inline-block;
          line-height: 0.3rem;
          font-size: 0.18rem;
          color: #262d41;
        }
        span:nth-child(2) {
          color: #999;
        }
      }
      .repayment {
        float: left;
        width: 50%;
        height: 0.3rem;
        span {
          display: inline-block;
          line-height: 0.3rem;
          font-size: 0.18rem;
          color: #262d41;
        }
        span:nth-child(1) {
          color: #999;
        }
      }
    }
    .toBePay {
      width: 100%;
      height: 0.3rem;
      // background: red;
      margin-top: 0.4rem;
      span {
        display: inline-block;
        padding-left: 0.2rem;
        font-size: 0.18rem;
        line-height: 0.3rem;
        color: #262d41;
      }
      span:nth-child(2) {
        color: #999;
      }
    }
  }
  .payListTop {
    &.itemBjColor {
      background: #666666;
    }
    width: 17%;
    float: left;
    height: 100%;
    // padding-left: 0.3rem;
    background: #d5321c;
    // margin-right: 0.3rem;
    border-right: 1px solid #ccc;
    .topInfo {
      background: #d5321c;
      // background: green;
      width: 20%rem;
      color: #fff;
      // height: 100%;
      div:nth-child(1) {
        width: 100%;
        height: 50%;
        float: left;
        text-align: left;
        line-height: 0.9rem;
      }
      div:nth-child(2) {
        text-align: left;
        width: 50%;
        height: 50%;
        font-size: 0.45rem;
        line-height: 1.1rem;
        font-weight: 600;
        color: #ccc;
        opacity: 0.1;
        float: left;
      }
    }
  }
}
</style>
