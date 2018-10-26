<template>
   <div class="WXpay">
        <div class="my-warp">

          <div class="my-warp-b">
            <div class="title">扫码支付</div>
            <div class="tab">
              <img :src="ErWeiMa" alt="" v-if="ErWeiMa">
            </div>
            <div class="bottom"><img src="https://img.guoanfamily.com/rentPC/rentAboutme/saoma.jpg"></div>
          </div>
          <div class="my-warp-bb">请使用手机微信二维码扫描支付</div>
          <img src="https://img.guoanfamily.com/rentPC/rentAboutme/wxpay.jpg" class="bgimg">
      </div>
   </div>
</template>

<script>
    import { objFn } from "~/plugins/axios.js";
   export default {
       data() {
           return {
                receiptId:"",//BJGAJSKJH21505896411569",//,   //收款id
                saleContractId:"",//"BJGAJCF1505896320103",//,//合同编号
                receiptPlanId:"",//"BJGAJCF1505896320103",//,//收款计划ID
                userId:"",//"BJGAJCF1505896320103",//,//合同编号
                realReceipt:"",//金额
                int:{},
                ErWeiMa:"",

                // 定金
                depositId:this.$route.query.depositId,//订单号
                amount:this.$route.query.amount,//金
                remark:this.$route.query.remark,
                int:{}

           }

       },
        created(){
          let reqData=this.$route.query
          if(reqData.IsDeposit==1){
            this.depositId = this.$route.query.depositId;
            this.amount = this.$route.query.amount;
            this.remark =  this.$route.query.remark;
            this.userId = this.$route.query.userId
            objFn.Axios("common/wxPay/createScanPayQrcode","post",{
                  "body": "国安家支付",//支付说明
                  "outTradeNo": this.depositId,//订单号
                  "notifyURL": "http://act.guoanfamily.com/common/wxPay/wxOrderNotify/8884",//通知地址 后面的8884是通知的url根据不同的支付途径跳转不同的页面，如定金下定8884 租金8885
                  "tradeType": "NATIVE",//固定参 数，不要动
                  "productId": "12235413214070356458058",//固定参数，不要动
                  "totalFee":  this.amount*100,//支付金额
                  "userId":this.userId,
                  "sideLength": "400"//二维码宽度
              },{interfaceType: "PAY"}).then((res)=>{
                // var res = res.data;
                if(res!=null&&res.data!=null){
                    this.ErWeiMa ='data:image/png;base64,'+ res.data.qrCode;
                }
            })
          }else{
            this.receiptId=this.$route.query.receiptId;//BJGAJSKJH21505896411569",//,   //收款id
            this.saleContractId=this.$route.query.saleContractId;//"BJGAJCF1505896320103",//,//合同编号
            this.receiptPlanId=this.$route.query.receiptPlanId;//"BJGAJCF1505896320103",//,//收款计划ID
            this.userId=this.$route.query.userId;//"BJGAJCF1505896320103",//,//合同编号
            this.realReceipt=this.$route.query.realReceipt;//金额
            var self = this;
            objFn.Axios("common/wxPay/createScanPayQrcode","post",{
                  "body": "国安家支付",//支付说明
                  "outTradeNo": this.receiptId,//订单号
                  "notifyURL": "http://act.guoanfamily.com/common/wxPay/wxOrderNotify/8884",//通知地址 后面的8884是通知的url根据不同的支付途径跳转不同的页面，如定金下定8884 租金8885
                  "tradeType": "NATIVE",//固定参 数，不要动
                  "productId": "12235413214070356458058",//固定参数，不要动
                  "totalFee": this.realReceipt*100,//支付金额
                  "userId":this.userId,
                  "sideLength": "400"//二维码宽度
              },{interfaceType: "PAY"}).then((res)=>{
                // var res = res.data;
                if(res!=null&&res.data!=null){
                    this.ErWeiMa ='data:image/png;base64,'+ res.data.qrCode;
                }
            })

          }
        },
        methods: {
            //查询订单状态的方法
            queryOrderBankState(){
                var self = this;
                var $orderList = $('.j_orderList');
                console.info(this.receiptId)
                var outTradeNo={"outTradeNo":this.receiptId}
                this.post("wxPay/queryOrder",outTradeNo,{interfaceType: "pay"}).then((res)=>{
                    if(res.code==0){
                        var tradeState =res.data.tradeState;
                        if(tradeState=='SUCCESS'){
                        //支付成功后跳转的路由
                              self.$router.push({path:"/PaySuccess",query:{receiptPlanId:self.receiptPlanId,receiptId:self.receiptId,saleContractId:self.saleContractId}});
                              window.clearInterval(self.int);
                        }else if(tradeState=='PAYERROR'){
                          //支付失败后跳转的路由
                            // window.location.href="http://www.58.com"
                        }else{
                          //继续查询支付成功没成功
                        }
                      }
                })
                // $.ajax({
                //     url: "http://act.guoanfamily.com/common/wxPay/queryOrder",
                //     type: "POST",
                //     dataType:"json",
                //     contentType: "application/json",
                //     data: JSON.stringify(outTradeNo),
                //     success: function (data) {
                //       if(data.code==0){
                //         var tradeState =data.data.tradeState;
                //         if(tradeState=='SUCCESS'){
                //         //支付成功后跳转的路由
                //               debugger;
                //               self.$router.push({path:"/PaySuccess",query:{receiptPlanId:self.receiptPlanId,receiptId:self.receiptId,saleContractId:self.saleContractId}});
                //               window.clearInterval(self.int);
                //         }else if(tradeState=='PAYERROR'){
                //           //支付失败后跳转的路由
                //             // window.location.href="http://www.58.com"
                //         }else{
                //           //继续查询支付成功没成功
                //         }
                //       }
                //     },
                //     error: function () {
                //         window.location.href="http://www.58.com"
                //     }
                // });

              }
        }
   }
</script>

<style scoped lang="less">
    .WXpay{
        margin: .4rem;
        .my-warp{
        width:10rem;
        height: auto;
        position: relative;
    .my-warp-t{
      height: 11rem;
      margin: 0 auto;
      position: relative;
    }
    .my-warp-b{
      height: 6rem;
      margin: 0 auto;
      border:1px solid #ccc;
      position: relative;
      .title{
        height: .6rem;
        line-height: .6rem;
        background-color: #FAFAFA;
        border-bottom:1px solid #ccc;
        color: #000;
        text-indent: .4rem;
      }
      .tab{
        margin-top: .8rem;
        width: 3rem;
        height: 3rem;
        border:1px solid #ccc;
        position: relative;
        margin-left: 1.2rem;
        img{
            width: 100%;
        }
        .paytap {
          width: 90%;
          height: .6rem;
          line-height:  .6rem;
          margin:0 auto;
          position: relative;
          border-bottom: 1px solid #ccc;
          img{
            width: 100%;
            position: absolute;
            top: 50%;
            margin-left: .4rem;
            margin-top: -.18rem;
          }
          span{
            display: inline-block;
            text-indent: .9rem;
            font-size: .15rem;
          }
          .icon {
            background-color: #e24e59;
            text-align:center;
            height: .2rem;
            width: .4rem;
            position: absolute;
            top: 50%;
            line-height: .2rem;
            color: #fff;
            font-size:.13rem;
            border-radius: 0px;
            margin-top:-.1rem;
            left:28%;
          }
        }
      }
      .bottom{
        margin-top: .2rem;
        width: 3rem;
        height: .5rem;
        line-height: .5rem;
        margin-left: 1.2rem;
        border:none;
        img{
          width: 100%;
        }
      }
    }
    .my-warp-bb{
      height: .5rem;
      line-height: .5rem;
      text-align: center;
      margin: 0 auto;
      border:1px solid #ccc;
      border-top: none;
    }
  }
  .my-warp:after {
      clear:both;
      content:'';
      display:block;
  }
  #weixinImageURL{
    width: 2.58rem;
    position: absolute;
    top: 50%;
    margin-top: -1.28rem;
    left: 50%;
    margin-left: -1.28rem;
  }
  .bgimg {
    position: absolute;
    width: 3.3rem;
    top: 18%;
    right: 12%;
  }
    }

</style>
