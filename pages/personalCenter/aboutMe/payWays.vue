<template>
    <div class="payWays">
         <div class="btn_box">
            <button class="button actived" >
                <span class="icon1">
                </span>
                <span class="texts1">
                    选择支付方式
                </span>
            </button>
        </div>
        <!-- 步骤条 -->
        <div class="steps">
            <div class="breads">
                <div class="step step1">1</div>
                <div class="step step2">2</div>
                <div class="step step3">3</div>
            </div>
            <div class="texts">
                <div class="stepinfo step1">
                    确认账单信息
                </div>
                <div class="stepinfo step2">
                    选择支付方式
                </div>
                <div class="stepinfo step3">
                    选择支付方式
                </div>
            </div>
        </div>
        <!-- 选择支付方式 -->
        <div class="payInfo_box clearfix" v-if="!isWx">
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
            <div class="card weixin" @click="PayWayCheck(1)">
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
        <div>
            <nuxt-child/>
        </div>
        <button class="btn" @click="Topay" v-if="!isWx">
            确认付款
        </button>

    </div>
</template>
<script>
import { objFn } from "~/plugins/axios.js";
export default {
    data() {
        return {
            userId:"",
            rentPrice:1000,
            payWay:0,
            receiptPlanId:'',//BJGAJSKJH21505896411569",//,   //收款计划id
            saleContractId:'',
            planRent:'',
            realReceipt:'',
            receiptWayCode:"0058003",//收款渠道
            receiptTypeCode:"0053004",//收款方式  pc默认支付宝   点击获取   alipay:0053004   wx :0053003  xpay:"0053008"
            receiptSubjectCode:"0057001",//收款主体
            isWx:false,

        }
    },
    created(){
        var self = this;
        objFn.Axios("agenthouseCutomer/common/getUserInfo","poat",{
        },{ interfaceType: "RENT_HOUSE" }).then((res)=>{

        self.userId = res.data.userId;
        })
    },

    mounted() {
        if(this.$route.path =="/personalCenter/aboutMe/payWays/WXpay"){
            this.isWx = true
        }else{
            this.isWx = false
        }
        let payWaysData =JSON.parse(sessionStorage.getItem("payWaysData"))
        this.receiptPlanId=payWaysData.receiptPlanId;
        this.saleContractId=payWaysData.saleContractId;
        this.planRent=payWaysData.planRent;
        this.realReceipt=payWaysData.realReceipt;

    },
    methods:{

         // 改变支付值
        PriceChange(i){
            if(this.rentPrice==0&&i<0){
                this.rentPrice = 0
            }else{
                this.rentPrice += i
            }
        },
        Topay(){
            var self = this;
            // 支付宝
              objFn.Axios("agenthouseCutomer/PayController/rentChargePayOrder","post",{
                // "userId":"113a7c43-9d14-460c-9642-d89940e25dbb",
                "receiptPlanId":this.receiptPlanId,
                "planRent":this.planRent,
                "realReceipt":this.realReceipt,
                "openId":"",
                "receiptSubjectCode":this.receiptSubjectCode,
                "receiptWayCode":this.receiptWayCode,
                "receiptTypeCode":this.receiptTypeCode,
            },{ interfaceType: "RENT_HOUSE" }).then((res)=>{
                if(res.code == 0){
                    self.receiptId = res.data.receiptId;
                    if(self.receiptTypeCode == "0053004"){
                    let otherParams = escape("&receiptId="+self.receiptId+"&saleContractId="+self.saleContractId+"&receiptPlanId="+self.receiptPlanId);
                        window.location.href="http://act.guoanfamily.com/common/AlipayController/toWebPay/8886?tradeNo="+self.receiptId+"&payMoney="+self.realReceipt+"&nameGoods=PC租房&userId="+self.userId+"&otherParams="+otherParams;
                    }else if(self.receiptTypeCode == "0053003"){
                        this.$router.push({path:"/personalCenter/aboutMe/payWays/WXpay",query:{receiptPlanId:self.receiptPlanId,userId:self.userId,receiptId:self.receiptId,saleContractId:self.saleContractId,realReceipt:self.realReceipt}});

                    }else if(self.receiptTypeCode == "0053008"){
                        let otherParams = "&receiptId="+self.receiptId+"&saleContractId="+self.saleContractId+"&receiptPlanId="+self.receiptPlanId;
                        var data={
                            "tradeNo":self.receiptId,//订单号
                            "payMoney":self.realReceipt,//支付金额
                            "nameGoods":'正式环境测试支付',//商品名称
                            "urlId":"8886",//支付渠道id 定金8884 租金8885
                            "platform":'agenthouse',//支付平台
                            // "receiptPlanId":self.receiptPlanId,//待定
                            "userID":self.userId,
                            "otherParams":otherParams
                        };
                        // this.post("YFWebController/toYFPay",data,{interfaceType: "pay"}).then((res)=>{
                        //     window.location.href=res.data;
                        // })
                    }
                }
            });

            // this.$router.push({path:"/personalCenter/aboutMe/paySuccess"})
        },
        PayWayCheck(n){
            this.payWay = n
            if(n===0){
                this.receiptTypeCode = "0053004"
            }else{
                this.receiptTypeCode = "0053003"
            }
        }
    },
    watch:{
        $route(){
            console.log(11,this.$route.path)
            if(this.$route.path =="/personalCenter/aboutMe/payWays/WXpay"){
                this.isWx = true
            }else{
                this.isWx = false
            }
        }
    }
}
</script>

<style scoped lang="less">
.payWays{
    .btn_box{
        height: .96rem;
        padding-bottom: .44rem;
        border-bottom:1px solid #ccc;
        .button{
            vertical-align: top;
            border:none;
            padding: 0;
            height: .5rem;
            font-size: .18rem;
            line-height: .48rem;
            text-align: center;
            width: 2rem;
            cursor: pointer;
            &:nth-child(2){
                margin-left: .24rem;
            }
            &.actived{
                border: 2px solid  #d6000f;
                color: #d6000f;
                background-color: #fff;
                .icon1{
                    background: #d6000f;
                }
                .texts1{
                    color: #d6000f;
                }
            }
            .icon1{
                float: left;
                height: .08rem;
                width: .08rem;
                margin-left: .2rem;
                margin-top: .2rem;
                background: #262d41;
                border-radius: 50%;
            }
            .texts{
                float: left;
                text-align: center;
                width: 1.60rem;
                font-size: .18rem;
                line-height: .48rem;
                color: #262d41;
            }
        }
    }
    .steps{
        padding-left:.4rem;
        height: 1rem;
    }
    .breads{
        width: 10.1rem;
        height: .4rem;
        background: url("../../../static/rent/aboutMe/contract/rightLong.png") center no-repeat;
        background-size: 100% 100%;
        margin-top: .9rem;
        .step{
            float: left;
            width: .4rem ;
            height: .4rem;
            border-radius: 50%;
            line-height: .4rem ;
            font-size: .3rem;
            color: #fff;
            text-align: center;
        }
        .step1{
            margin-left: .6rem;
            background:#D6000F;
        }
        .step2{
            margin-left: 3.8rem;
            background:#d6000F;
        }
        .step3{
            margin-left: 3.8rem;
            background:#ccc;
        }
    }
    .texts{
        margin-top: .12rem;
        .stepinfo{
            float: left;
            font-size: .18rem;
            color:#999;
        }
        .step1{
            margin-left: .3rem;
        }
        .step2{
            margin-left: 3.1rem;
        }
        .step3{
            margin-left: 3.1rem;
        }
    }
    .payInfo_box{
        padding-left: .4rem;
        margin-top: 0.4rem;
        .card{
            width: 5rem;
            height: 2.4rem;
            float: left;
            position: relative;
            cursor: pointer;
            &:hover{
                transform: scale(1.02);
            }
            &:nth-child(2){
                margin-left: .2rem;
            }
            &.zhifubao{
                background: url("../../../static/rent/aboutMe/contract/bluejiao.png") no-repeat center;
                background-size: 100% 100%;
            }
            &.weixin{
                background: url("../../../static/rent/aboutMe/contract/greenjiao.png") no-repeat center;
                background-size: 100% 100%;
            }
            .content{
                position: absolute;
                top: 50%;
                left: 0;
                margin-top: -0.42rem;
                width: 100%;
                height: .84rem;
                padding-left: .64rem;
                .left_box{
                    float: left;
                    width: .84rem;
                    height:.84rem;
                }
                .info_box{
                    float: left;
                    height:.84rem;
                    padding: .1rem 0 .1rem .6rem;
                    .Cname{
                        font-size: .25rem
                    }
                    .Ename{
                        margin-top: .02rem;
                        color: #999;
                        font-size: .24rem
                    }
                }
                .zhifuBao_ico{
                    background: url("../../../static/rent/aboutMe/contract/zfb.png") center no-repeat;
                    background-size: 100% 100%;
                }
                .wx_ico{
                    background: url("../../../static/rent/aboutMe/contract/wx.png") center no-repeat;
                    background-size: 100% 100%;
                }

            }
            .checked{
                width: .4rem;
                height: .4rem;
                position: absolute;
                right: .2rem;
                top: .2rem;
                border-radius: 50%;
                border: 1px solid #ccc;
                background: #fff;
                cursor: pointer;
                &.actived{
                    border:none;
                    background: url("../../../static/rent/aboutMe/contract/truecircle.png") center no-repeat;
                    background-size:100% 100%;
                }
            }
        }
    }
    .btn{
        margin-top: .5rem;
        width: 1rem;
        height: .3rem;
        background: #D6000F;
        float: left;
        text-align: center;
        line-height: .3rem;
        color: #fff;
        font-size: .16rem;
        border:none;
        padding: 0;
        cursor: pointer;
        &:hover{
            background-color: #fff;
            color: #D6000F;
            border:1px solid #D6000F;
        }
    }

}

</style>
