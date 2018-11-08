<template>
    <div class="payStep">
         <div class="btn_box">
            <button class="button actived" >
                <span class="icon1">
                </span>
                <span class="texts1">
                    确认订单信息
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完成
                </div>
            </div>
        </div>
        <!--  租房合同信息 -->
        <div class="payInfo_box clearfix" v-if="!IsDeposit">
            <div class="payInfo">
                <span>合同编号</span>
                <span>{{showData.contractInfo.saleContractId}}</span>
            </div>
            <div class="payInfo">
                <span>租金期数</span>
                <span>第{{showData.receiptPlan.number}}期</span>
            </div>
            <div class="payInfo">
                <span>应缴金额</span>
                <span>{{showData.receiptPlan.planRent}}元</span>
            </div>
            <div class="payInfo">
                <span>已缴金额</span>
                <span>{{showData.receiptPlan.realRent}}元</span>
            </div>
            <div class="payInfo">
                <span>已缴次数</span>
                <span>{{showData.receiptPlan.submitCount}}次</span>
            </div>
            <div class="payInfo ">
                <span>已抵扣</span>
                <span class="three" >{{showData.receiptPlan.discount||0}}元</span>
            </div>
            <div class="payInfo five">
                <span>已使用红包</span>
                <span class="five">{{showData.receiptPlan.couponsDiscount||0}}元</span>
            </div>
        </div>
        <div class="dingjin clearfix" v-if="IsDeposit">
            <div class="info_box">
                <div class="infos">
                    <span class="labels">手机号</span>
                    <span class="nums">{{showData2.renterPhone}}</span>
                </div>
                <div class="infos">
                    <span class="labels">
                        <i>*</i>姓名
                    </span>
                    <span class="nums">
                        <input type="text" v-model="showData2.renterName" placeholder="请输入您的姓名" name="" id="">
                    </span>
                </div>
                <div class="infos">
                    <span class="labels"><i>*</i>称呼</span>
                    <span class="nums gender">
                        <div class="gender_box" :class="{Chous:showData2.renterSex=='0'}" @click="Chousegender('0')">
                            <span class="sex">男士</span>
                            <span class="Point"></span>
                        </div>
                        <div class="gender_box" :class="{Chous:showData2.renterSex=='1'}" @click="Chousegender('1')">
                           <span class="sex">女士</span>
                            <span class="Point"></span>
                        </div>
                    </span>
                </div>
                <div class="infos">
                    <span class="labels">期待入住时间</span>
                    <span class="nums">
                        <!-- <input type="text" placeholder="输入日期"> -->
                        <el-date-picker
                            class="datepicker"
                            v-model="signDate"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </span>
                </div>
            </div>
            <div class="info_box">
                 <div class="infos">
                    <span class="labels textarea_label">留言</span>
                    <span class="textarea">
                        <textarea placeholder="请输入留言信息（选填）" v-model="showData2.remark" name="" id=""></textarea>
                    </span>
                </div>
            </div>
        </div>
        <!-- 账单 -->
        <div class="payList_box">
            <div class="pay_operation">
                <div class="titles">
                    本期应付金额 (单位：元)
                </div>
                <div class="operations">
                    <div class="left" @click="PriceChange(-1)"></div>
                    <div class="price">
                       <input  @keyup.enter="Topay"  onkeyup="this.value=this.value.replace(^\\d+(\\.\\d{2})?$,'')" type="number" maxlength="7" v-model="rentPrice">
                    </div>
                    <div class="right" @click="PriceChange(1)"></div>
                </div>
            </div>
            <button class="btn" @click="Topay" >
                确认付款
            </button>
        </div>
    </div>
</template>
<script>
import { objFn } from "~/plugins/axios.js";

export default {
    data() {
        return {
            // 展示数据
            showData:{
                contractInfo:{},
                receiptPlan:{}
            },
            // 支付金额
            rentPrice:0,
            showData2:{},
            dateVal:"",
            IsDeposit:false,
            signDate:"",
        }
    },
    mounted() {
        // this.IsDeposit = this.$route.query.IsDeposit
        // this.IsDeposit = true
        let queryData = this.$route.query;

        if(queryData.frompage==="1"){
            this.IsDeposit = true;
        }else{
            this.IsDeposit = false;
        }
        if(!this.IsDeposit){
            this.getPayList()
        }else{
            this.getDepositList()
        }
    },
    methods:{
        // 改变支付值
        PriceChange(i){
            this.rentPrice = Number(this.rentPrice)
            if(this.rentPrice<=0&&i<0){
                this.rentPrice = 0
            }else{
                this.rentPrice += i
            }
            if(this.IsDeposit){
                 if(this.rentPrice<=500&&i<0){
                    this.rentPrice = 500
                }
            }
        },
        Topay(){
            if(!this.IsDeposit){
                let Data = JSON.parse(sessionStorage.getItem("rentPayData"))
                let data = {
                    receiptPlanId:Data.receiptPlanId,
                    saleContractId:this.showData.contractInfo.saleContractId,
                    planRent:this.showData.receiptPlan.planRent,
                    realReceipt:this.rentPrice
                }

                sessionStorage.setItem("payWaysData",JSON.stringify(data))
                this.$router.push({path:"/personalCenter/aboutMe/payWays/payStyleC"})
            }else{
                let Data = {
                    houseId:this.$route.query.houseId,
                    roomId:this.$route.query.roomId,
                }
                Data = JSON.stringify(Data)
                if(!this.showData2.renterName){
                    this.$showErrorTip("请填写真实姓名")
                    return false;
                }
                if(!this.showData2.renterSex){
                    this.$showErrorTip("请设置您的称呼")
                    return false;
                }
                if(Number(this.rentPrice)<500){
                    this.$showErrorTip("设置金额不能小于500元")
                    return false;
                }
                let amount,signDate,remark,renterSex,renterName;
                let obj = {remark,renterSex,renterName} = this.showData2
                amount = this.rentPrice;
                if(this.signDate){
                    signDate = this.signDate.Format("yyyy-MM-dd")
                }else{
                    signDate = ""
                }
                let rentData = {amount,signDate,remark,renterSex,renterName}
                rentData = JSON.stringify(rentData)
                this.$router.push({path:"/personalCenter/aboutMe/payWays/payStyleC",query:{IsDeposit:1,Data,rentData}})
            }

        },
        // 获取订单
        getPayList(){
            let Data = JSON.parse(sessionStorage.getItem("rentPayData"))
            objFn.Axios("agenthouseCutomer/RentContractController/getPayReceiptList","post",Data,{ interfaceType: "RENT_HOUSE" }).then(res=>{
               if(res.code===0){
                   this.showData = res.data
                   if(!res.data.receiptPlan.differencesRent){
                       res.data.receiptPlan.differencesRent = 0;
                   }
                   this.rentPrice = res.data.receiptPlan.differencesRent < 0 ? 0 : res.data.receiptPlan.differencesRent;
               }
            })
        },
        // -------------------定金-----------------
        // 获取定金信息
        getDepositList(){
            let QueryData = this.$route.query
            let Data = {
                houseId:QueryData.houseId,
                roomId:QueryData.roomId
            }
            objFn.Axios("agenthouseCutomer/PcRentContractController/makeDepositInfo","post",Data,{ interfaceType: "PAY" }).then(res=>{
               if(res.code===0){
                   this.showData2 = res.data
                    if(!res.data.amount){
                        res.data.amount  = 500;
                    }
                   this.rentPrice = res.data.amount < 500 ? 500 : res.data.amount;

               }
            })
        },
        // 选择性别
        Chousegender(a){
            this.showData2.renterSex = a
        }



    }
}
</script>

<style scoped lang="less">
.payStep{
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
                    font-size: .18rem;
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
    }
    .breads{
        width: 8.1rem;
        height: .4rem;
        background: url("https://img.guoanfamily.com/rentPC/rentAboutme/toright.png") center no-repeat;
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
            margin-left: .51rem;
            background:#D6000F;
        }
        .step2{
            margin-left: 2.9rem;
            background:#ccc;
        }
        .step3{
            margin-left: 2.9rem;
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
            margin-left: .15rem;
        }
        .step2{
            margin-left: 2.25rem;
        }
        .step3{
            margin-left: 2.25rem;
        }
    }
    .payInfo_box{
        padding-left:.4rem;
        margin-top: 1rem;
        width: 8rem;
        .payInfo{
            width: 50%;
            float: left;
            span{
                line-height: .4rem;
                font-size: .18rem;
                font-size: .18rem;
                &:nth-child(1){
                    color: #262d41;
                }
                &:nth-child(2){
                    margin-left: .5rem;
                    color: #999;
                    &.three{
                        margin-left: .68rem;
                    }
                    &.five{
                        margin-left: .32rem;
                    }
                }
            }
        }
    }
    .dingjin{
        padding-left:.4rem;
        margin-top: 1rem;
        width: 10rem;
        .info_box{
            float: left;
            width: 50%;
            .infos{
                height: .44rem;
                i{
                    float: left;
                    color: #D6000F;
                    width: .18rem;
                }
                span{
                    float: left;
                    input{
                        height: .4rem;
                        width: 2.6rem;
                        padding-left:1em;
                    }
                }
                .labels{
                    line-height:  .4rem;
                    width: 1.32rem;
                    font-size: .18rem;
                    &.textarea_label{
                        width: .6rem;

                    }
                }
                .nums{
                    font-size: .18rem;
                    line-height:  .4rem;
                    color: #999;
                    &.gender{
                        width: 2.6rem;
                    }
                    .gender_box{
                        cursor: pointer;
                        float: left;
                        width: 50%;
                        &.Chous{
                             .Point{
                                 background-color: #d6000f;
                             }
                        }
                        .sex{
                            height: .4rem;
                            line-height: .4rem;
                            font-size: .18rem;
                            float: left;
                        }
                        .Point{
                            width: .18rem;
                            height: .18rem;
                            border: 1px solid #ccc;
                            border-radius: 50%;
                            margin-left: .14rem;
                            margin-top: .11rem;
                            float: left;
                        }
                    }
                }
                .textarea{
                    margin-top: 0.1rem;

                    width: 4rem;
                    textarea{
                        width: 100%;
                        padding: .1rem;
                        height: 1.6rem;
                        resize:none;
                    }
                }
            }
        }
    }
    .payList_box{
        padding-left:.4rem;
        margin-top: .8rem;
        width: 8rem;
        .titles{
            float: left;
            width: 50%;
            font-size: .18rem;
            line-height: .4rem;
        }
        .operations{
            height: .4rem;
            float: left;
            width: 3.1rem;
            position: relative;
            .left{
                position: absolute;
                top:0;
                left: 0;
                width: .4rem;
                height: .4rem;
                background:url("https://img.guoanfamily.com/rentPC/rentAboutme/minusSign.png") center no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
            }
            .right{
                position: absolute;
                top:0;
                right: 0;
                width: .4rem;
                height: .4rem;
                background:url("https://img.guoanfamily.com/rentPC/rentAboutme/add.png") center no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
            }
            .price{
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 1.8rem;
                height: .4rem;
                input{
                    width: 100%;
                    height: 100%;
                    border:none;
                    color: #d6000f;
                    line-height: .4rem;
                    font-size: .36rem;
                    text-align: center;

                }
            }
        }
        .btn{
            margin-top: .5rem;
            width: 1.5rem;
            height: .5rem;
            background: #D6000F;
            float: left;
            text-align: center;
            line-height: .5rem;
            color: #fff;
            font-size: .16rem;
            border:none;
            padding: 0;
            cursor: pointer;

        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }


}

</style>
<style lang="less">
    .payStep{
        .datepicker{
            width: 2.6rem;
            height: 0.4rem;
            .el-input__inner{
                height: 0.4rem;
                line-height: 0.4rem;
                border:1px solid #A9A9A9;
                border-radius:0;
                // #757575

            }
            .el-input__icon{
                line-height: 0.4rem;

            }
        }
    }
</style>