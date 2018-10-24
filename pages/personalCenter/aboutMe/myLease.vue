<template>
    <div class="page">
       <div class="btn_box " >
            <button class="button actived">
                <span class="icon1">
                </span>
                <span>
                    我的租约
                </span>
            </button>
       </div>
       <!-- 合同编号 -->
       <div class="herong_box">
           <div class="title_box">{{pageData.saleContractId}}</div>
       </div>
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
       <div class="payList" :class="{'itemBjColor':index%2!==0}" :key="index" v-for="(item,index) in pageData.receiptPlanList">
           <div class="payListTop" >
               <div class='topInfo'>
                   <div>
                       <span>第</span>
                        <span style="font-size:.36rem;font-weight:600;">{{item.number}}</span>
                        <span>期&nbsp;STAGE</span></div>
                   <div>
                       <span>实际缴纳费用&nbsp;</span>
                        <span style="font-size:.36rem;font-weight:600;">{{item.realRent}}</span>
                        <span>元</span>
                   </div>
               </div>
           </div>
           <div class="payListCenter">
               <div>{{item.planRent}}</div>
               <div>租期&nbsp;&nbsp;{{item.rentDateStart}}-{{item.rentDateEnd}}</div>
               <div><span>应付款日&nbsp;&nbsp;{{item.rentDate}}</span></div>
           </div>
           <div class="payListBottom">
               <div class='paySuccess' v-show="item.payStatus">支付完成</div>
               <div class='paySuccess' v-show="!item.payStatus">待支付</div>
               <div class='payDetial'>支付详情</div>
           </div>
       </div>
       <div style="width:100%;height:.5rem;background:#fff;"></div>
    </div>
</template>

<script>
import { objFn } from "~/plugins/axios.js";
export default {
  data() {
    return {
      pageData: []
    };
  },
  methods: {
    pageLoadFn() {
      let url = "agenthouseCutomer/RentContractController/getUserLease";
      let post_data = {};
      objFn
        .Axios(url, "post", post_data, { interfaceType: "RENT_HOUSE" })
        .then(res => {
          if (res.code == 0) {
            this.pageData = res.data[0];
          }
        });
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
  .title_box {
    width: 3rem;
    padding-right: 0.2rem;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #fff;
    text-align: center;
    background: url("../../../static/rent/aboutMe/contract/redjiao.png") center
      no-repeat;
    background-size: 100% 100%;
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
  background: #f63d20;
  margin-top: 0.12rem;
  display: flex;
  flex-direction: column;
  &.itemBjColor {
    background: #ff9500;
  }
  .payListTop {
    height: 0.75rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    .topInfo {
      width: 100%;
      color: #fff;
      div:nth-child(1) {
        width: 50%;
        height: 100%;
        float: left;
        text-align: left;
        line-height: 0.9rem;
      }
      div:nth-child(2) {
        text-align: right;
        width: 50%;
        height: 100%;
        float: right;
        line-height: 0.9rem;
      }
    }
  }
  .payListCenter {
    height: 0.75rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    div {
      float: left;
      height: 100%;
    }
    div:nth-child(1) {
      width: 30%;
      color: #fff;
      font-size: 0.36rem;
      font-weight: 600;
      line-height: 0.8rem;
    }
    div:nth-child(2) {
      width: 40%;
      text-align: center;
      float: left;
      line-height: 0.8rem;
      color: #fff;
    }
    div:nth-child(3) {
      width: 30%;
      height: 100%;
      float: right;
      span {
        line-height: 0.9rem;
        display: inline-block;
        width: 100%;
        text-align: right;
        color: #fff;
      }
    }
  }
  .payListBottom {
    flex: 1;
    background: rgba(0, 0, 0, 0.2);
    .paySuccess {
      height: 100%;
      color: #fff;
      float: left;
      margin-left: 0.3rem;
      text-align: left;
      line-height: 0.5rem;
      font-size: 0.2rem;
      font-weight: 600;
    }
    .payDetial {
      cursor: pointer;
      margin-right: 0.3rem;
      height: 100%;
      color: #fff;
      float: right;
      margin-left: 0.3rem;
      text-align: left;
      line-height: 0.5rem;
      font-size: 0.2rem;
      font-weight: 600;
    }
  }
}
</style>
