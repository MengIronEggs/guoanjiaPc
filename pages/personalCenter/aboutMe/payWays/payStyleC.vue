<template>
   <div class="payStyleC">
       <!-- 选择支付方式 -->
        <div class="payInfo_box clearfix" v-show="!isWx">
            <div class="card zhifubao" @click="PayWayCheck(0)">
                <div class="content">
                    <div class="left_box zhifuBao_ico"></div>
                    <div class="info_box ">
                        <div class="Cname">
                            支付宝支付
                        </div>
                        <div class="Ename">
                            pay treasure to pay
                        </div>

                    </div>

                </div>
                <div class="checked " :class="{actived:payWay===0}" >

                </div>
            </div>
            <div class="card weixin" @click="PayWayCheck(1)" v-if="IsDeposit">
                <div class="content">
                    <div class="left_box wx_ico"></div>
                    <div class="info_box ">
                        <div class="Cname">
                            微信支付
                        </div>
                        <div class="Ename">
                            WEICSTCH AY
                        </div>
                    </div>
                </div>
                <div class="checked" :class="{actived:payWay===1}" >

                </div>
            </div>

        </div>
        <button class="btn" @click="Topay">
            确认付款
        </button>
   </div>
</template>

<script>
import { objFn } from "~/plugins/axios.js";
export default {
    data() {
            return {
        userId: "",
        rentPrice: 1000,
        payWay: 0,
        receiptPlanId: "", //BJGAJSKJH21505896411569",//,   //收款计划id
        saleContractId: "",
        planRent: "",
        realReceipt: "",
        receiptWayCode: "0058003", //收款渠道
        receiptTypeCode: "0053004", //收款方式  pc默认支付宝   点击获取   alipay:0053004   wx :0053003  xpay:"0053008"
        receiptSubjectCode: "0057001", //收款主体
        isWx: false,

        IsDeposit: false,
        houseId: "",
        roomId: "",
        amount: "",
        signDate: "",
        remark: "",
        renterSex: "",
        renterName: "",
        productId: "",
        versionId: "",
        houseName: ""
        };

    },
    created() {
        var self = this;
        objFn
        .Axios(
            "agenthouseCutomer/common/getUserInfo",
            "poat",
            {},
            { interfaceType: "RENT_HOUSE" }
        )
        .then(res => {
            self.userId = res.data.userId;
        });
    },

    mounted() {
        let queryData = this.$route.query;
        if (queryData.IsDeposit == 1) {
            queryData.Data = JSON.parse(queryData.Data)
            queryData.rentData = JSON.parse(queryData.rentData)
            this.IsDeposit = true;
            this.houseId = queryData.Data.houseId;
            this.roomId = queryData.Data.roomId;
            this.amount = queryData.rentData.amount;
            this.signDate = queryData.rentData.signDate;
            this.remark = queryData.rentData.remark;
            this.renterSex = queryData.rentData.renterSex;
            this.renterName = queryData.rentData.renterName;
            // this.makeDepositInfo()
        } else {

            this.IsDeposit = false;
            let payWaysData = JSON.parse(sessionStorage.getItem("payWaysData"));
            this.receiptPlanId = payWaysData.receiptPlanId;
            this.saleContractId = payWaysData.saleContractId;
            this.planRent = payWaysData.planRent;
            this.realReceipt = payWaysData.realReceipt;
        }
    },
    methods: {
        // 改变支付值
        PriceChange(i) {
        if (this.rentPrice == 0 && i < 0) {
            this.rentPrice = 0;
        } else {
            this.rentPrice += i;
        }
        },
        Topay() {
        if (!this.IsDeposit) {
            var self = this;
            // 支付宝
            objFn
            .Axios(
                "agenthouseCutomer/PayController/rentChargePayOrder",
                "post",
                {
                // "userId":"113a7c43-9d14-460c-9642-d89940e25dbb",
                receiptPlanId: this.receiptPlanId,
                planRent: this.planRent,
                realReceipt: this.realReceipt,
                openId: "",
                receiptSubjectCode: this.receiptSubjectCode,
                receiptWayCode: this.receiptWayCode,
                receiptTypeCode: this.receiptTypeCode
                },
                { interfaceType: "RENT_HOUSE" }
            )
            .then(res => {
                if (res.code == 0) {

                self.receiptId = res.data.receiptId;
                if (self.receiptTypeCode == "0053004") {
                    let otherParams = escape(
                    "&receiptId=" +
                        self.receiptId +
                        "&saleContractId=" +
                        self.saleContractId +
                        "&receiptPlanId=" +
                        self.receiptPlanId
                    );
                    window.open(
                    "http://act.guoanfamily.com/common/AlipayController/toWebPay/8886?tradeNo=" +
                    self.receiptId +
                    "&payMoney=" +
                    self.realReceipt +
                    "&nameGoods=PC租房&userId=" +
                    self.userId +
                    "&otherParams=" +
                    otherParams) ;
                } else if (self.receiptTypeCode == "0053003") {
                    this.$router.push({
                    path: "/personalCenter/aboutMe/payWays/WXpay",
                    query: {
                        receiptPlanId: self.receiptPlanId,
                        userId: self.userId,
                        receiptId: self.receiptId,
                        saleContractId: self.saleContractId,
                        realReceipt: self.realReceipt
                    }
                    });
                } else if (self.receiptTypeCode == "0053008") {
                    let otherParams =
                    "&receiptId=" +
                    self.receiptId +
                    "&saleContractId=" +
                    self.saleContractId +
                    "&receiptPlanId=" +
                    self.receiptPlanId;
                    var data = {
                    tradeNo: self.receiptId, //订单号
                    payMoney: self.realReceipt, //支付金额
                    nameGoods: "正式环境测试支付", //商品名称
                    urlId: "8886", //支付渠道id 定金8884 租金8885
                    platform: "agenthouse", //支付平台
                    // "receiptPlanId":self.receiptPlanId,//待定
                    userID: self.userId,
                    otherParams: otherParams
                    };
                    // this.post("YFWebController/toYFPay",data,{interfaceType: "pay"}).then((res)=>{
                    //     window.location.href=res.data;
                    // })
                }
                }
            });
        } else {
             this.makeDepositInfo().then(()=>{
                  // 支付宝
                  if (this.payWay === 0) {
                        this.depositPayOrderAli();
                    } else {
                    // 微信
                        this.depositPayOrderWX()
                    }
             });


        }

        // this.$router.push({path:"/personalCenter/aboutMe/paySuccess"})
        },
        PayWayCheck(n) {
            this.payWay = n;
            if (n === 0) {
                this.receiptTypeCode = "0053004";
            } else {
                this.receiptTypeCode = "0053003";
            }
        },
        makeDepositInfo() {
            console.log(this.houseId,this.roomId)
           return objFn.Axios(
            "agenthouseCutomer/PcRentContractController/makeDepositInfo",
            "post",
            {
                // "userId":"113a7c43-9d14-460c-9642-d89940e25dbb",
                houseId: this.houseId,
                roomId: this.roomId
            },
            { interfaceType: "RENT_HOUSE" }
            )
            .then(res => {
                console.log(res)
                this.productId = res.data.productId;
                this.versionId = res.data.versionId;
                this.houseName = res.data.houseName + res.data.roomName;
            });
        },
        // 支付宝
        depositPayOrderAli() {
        //支付宝支付
        var selfAli = this;
        objFn
            .Axios(
            "agenthouseCutomer/PayController/depositPayOrder",
            "post",
            {
                houseId: this.houseId,
                roomId: this.roomId,
                amount: this.amount,
                signDate: this.signDate,
                remark: this.remark,
                productId: this.productId,
                versionId: this.versionId,
                renterSex: this.renterSex,
                renterName: this.renterName,
                receiptSubjectCode: "0057001",
                receiptWayCode: "0058003",
                sourceCode: "0020003",
                payWay: "0053004" //支付宝
            },
            { interfaceType: "RENT_HOUSE" }
            )
            .then(res => {
            if (res.code == 10039) {
                this.$showConfirm("该房源已被预订");
                // this.$alert("该房源已被预订", "提示", {
                //   confirmButtonText: "确定"
                // });
                return;
            } else if (res.code == 0) {
                window.location.href =
                "http://act.guoanfamily.com/common/AlipayController/toWebPay/8887?tradeNo=" +
                res.data.depositId +
                "&payMoney=" +
                res.data.amount +
                "&nameGoods=" +
                selfAli.houseName +
                "&userId=" +
                res.data.userId;
                //												window.location.href="http://act.guoanfamily.com/common/AlipayController/toWebPay/8887?tradeNo="+res.data.depositId+"&payMoney=0.01&nameGoods="+this.houseName+"&userId="+res.data.userId;
            } else {
                this.$showErrorTip("订单已过期，请重新下单");
            }

            //	                 	window.location.href="http://172.16.44.254:28082/common/AlipayController/toWebPay/8887?tradeNo=20171022&payMoney=0.01&nameGoods=哈哈哈&userId="+res.data.userId;
            });
        },
        // 微信
        depositPayOrderWX() {

        //微信支付
        objFn
            .Axios(
            "agenthouseCutomer/PayController/depositPayOrder",
            "post",
            {
                houseId: this.houseId,
                roomId: this.roomId,
                amount: this.amount,
                signDate: this.signDate,
                remark: this.remark,
                productId: this.productId,
                versionId: this.versionId,
                renterSex: this.renterSex,
                renterName: this.renterName,
                receiptSubjectCode: "0057001",
                receiptWayCode: "0058003",
                sourceCode: "0020003",
                payWay: "0053003" //微信支付
            },
            { interfaceType: "RENT_HOUSE" }
            )
            .then(res => {
            if (res.code == 10039) {
                this.$showConfirm("该房源已被预订");
                return;
            } else if (res.code == 0) {
                console.log(res)
                this.$router.push({
                path: "/personalCenter/aboutMe/payWays/WXpay",
                query: {
                    depositId: res.data.depositId,
                    amount: res.data.amount,
                    userId: res.data.userId,
                    IsDeposit:1
                }
                });
            } else {
                this.$showErrorTip("订单已过期，请重新下单");
            }
            });
        }
    },
    components: {

    }
}
</script>

<style scoped lang="less">
.payStyleC {
  .btn_box {
    height: 0.96rem;
    padding-bottom: 0.44rem;
    border-bottom: 1px solid #ccc;
    .button {

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
        .texts1 {
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
  .steps {
    padding-left: 0.4rem;
    height: 1rem;
  }
  .breads {
    width: 10.1rem;
    height: 0.4rem;
    background: url("https://img.guoanfamily.com/rentPC/rentAboutme/rightLong.png")
      center no-repeat;
    background-size: 100% 100%;
    margin-top: 0.9rem;
    .step {
      float: left;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      line-height: 0.4rem;
      font-size: 0.3rem;
      color: #fff;
      text-align: center;
    }
    .step1 {
      margin-left: 0.6rem;
      background: #d6000f;
    }
    .step2 {
      margin-left: 3.8rem;
      background: #d6000f;
    }
    .step3 {
      margin-left: 3.8rem;
      background: #ccc;
    }
  }
  .texts {
    margin-top: 0.12rem;
    .stepinfo {
      float: left;
      font-size: 0.18rem;
      color: #999;
    }
    .step1 {
      margin-left: 0.3rem;
    }
    .step2 {
      margin-left: 3.1rem;
    }
    .step3 {
      margin-left: 3.1rem;
    }
  }
  .payInfo_box {
    padding-left: 0.4rem;
    margin-top: 0.4rem;
    .card {
      width: 4rem;
      height: 2.4*0.8rem;
      float: left;
      position: relative;
      cursor: pointer;
      &:hover {
        transform: scale(1.02);
      }
      &:nth-child(2) {
        margin-left: 0.2*0.8rem;
      }
      &.zhifubao {
        background: url("https://img.guoanfamily.com/rentPC/rentAboutme/Zhifubao.png")
          no-repeat center;
        background-size: 100% 100%;
      }
      &.weixin {
        background: url("https://img.guoanfamily.com/rentPC/rentAboutme/Weixin.png")
          no-repeat center;
        background-size: 100% 100%;
      }
      .content {
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -0.42*0.8rem;
        width: 100%;
        height: 0.84*0.8rem;
        padding-left: 0.64*0.8rem;
        .left_box {
          float: left;
          width: 0.84*0.8rem;
          height: 0.84*0.8rem;
        }
        .info_box {
          float: left;
          height: 0.84*0.8rem;
          padding: 0.08rem 0 0.08rem 0.3rem;
          .Cname {
            font-size: 0.25*0.8rem;
          }
          .Ename {
            margin-top: 0.02*0.8rem;
            color: #999;
            font-size: 0.24rem;
          }
        }

      }
      .checked {
        width: 0.4*0.8rem;
        height: 0.4*0.8rem;
        position: absolute;
        right: 0.2*0.8rem;
        top: 0.2*0.8rem;
        border-radius: 50%;
        border: 1px solid #ccc;
        background: #fff;
        cursor: pointer;
        &.actived {
          border: none;
          background: url("https://img.guoanfamily.com/rentPC/rentAboutme/truecircle.png")
            center no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
  .btn {
    margin-top: 0.5rem;
    width: 1.5rem;
    height: 0.5rem;
    background: #d6000f;
    float: left;
    text-align: center;
    line-height: 0.5rem;
    color: #fff;
    border: none;
    padding: 0;
    margin-left: .4rem;
    // &:hover {
    //   background-color: #fff;
    //   color: #d6000f;
    //   border: 1px solid #d6000f;
    // }
  }
}
</style>
