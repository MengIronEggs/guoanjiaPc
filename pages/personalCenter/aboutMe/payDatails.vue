<template>
    <div class="payDatails">
         <div class="btn_box">
            <button class="button actived" >
                <span class="icon1">
                </span>
                <span class="texts1">
                    支付完成
                </span>
            </button>
        </div>
        <!-- 账单 -->
        <div class="payInfo">
            <div class="left_box">
                <div class="info_box">
                    <span class="titles">合同编号</span>
                    <span class="info">{{showData.contractInfo.saleContractId}}</span>
                </div>
                <div class="info_box">
                    <span class="titles">物业地址</span>
                    <span class="info">{{showData.contractInfo.houseAddress}}</span>
                </div>
                <div class="info_box">
                    <span class="titles">应缴金额</span>
                    <span class="info"> <span class="red_num">{{showData.receiptPlan.planRent}}</span> 元</span>
                </div>
                <div class="info_box">
                    <span class="titles">已抵扣　</span>
                    <span class="info"><span class="red_num">{{showData.receiptPlan.discount||0}}</span> 元</span>
                </div>
            </div>
            <div class="right_box">
                <div class="info_box">
                    <span class="titles">租金期数</span>
                    <span class="info">第{{showData.receiptPlan.number}}期</span>
                </div>
                <div class="info_box">
                    <span class="titles">已交次数</span>
                    <span class="info">{{showData.receiptPlan.submitCount}}次</span>
                </div>
                <div class="info_box">
                    <span class="titles">已交金额</span>
                    <span class="info">{{showData.receiptPlan.realRent}} 元</span>
                </div>
                <div class="info_box">
                    <span class="titles">已使用红包</span>
                    <span class="info five">{{showData.receiptPlan.couponsDiscount||0}} 元</span>
                </div>
            </div>
        </div>
        <!-- 摘要 -->
        <div class="bottom_box clearfix">
            <div class="sbox">
                <div class="top_ico ioc1"></div>

            </div>
             <div class="sbox">
                <div class="top_ico ioc2"></div>

            </div>
             <div class="sbox">
                <div class="top_ico ioc3"></div>

            </div>
             <div class="sbox sboxlast">
                <div class="top_ico ioc4"></div>

            </div>
        </div>
        <div class="tables clearfix">
            <div class="th">
                <div class="title">
                    支付次数
                </div>
            </div>
            <div class="th">
                <div class="title">
                    支付金额
                </div>
            </div>
            <div class="th">
                <div class="title">
                    支付日期
                </div>
            </div>
            <div class="th">
                <div class="title">
                    支付状态
                </div>
            </div>
        </div>

          <div class="tabl_body clearfix" v-for="(item,index) in receiptList" :key="index">
            <div class="td">
                <div class="info">
                    第{{index+1}}次
                </div>
            </div>
            <div class="td">
                <div class="info">
                    {{item.realReceipt}}元
                </div>
            </div>
            <div class="td">
                <div class="info">
                   {{item.realReceiptDate != null ?item.realReceiptDate.replace(/-/g,'.'):""}}
                </div>
            </div>
            <div class="td">
                <div class="info">
                   {{item.receiptStatusName}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { objFn } from "~/plugins/axios.js";
export default {
    data() {
        return {
            rentPrice:1000,
            receiptPlanId:this.$route.query.receiptPlanId,
            saleContractId:this.$route.query.saleContractId,//合同编号
            showData:{
                contractInfo:{},
                receiptPlan:{}
            },
            receiptList:[]
        }
    },
    mounted() {
        this.getData()
    },
    methods:{
        getData(){
            objFn.Axios("agenthouseCutomer/RentContractController/getPayReceiptList","post",{
                receiptPlanId:this.receiptPlanId,
                saleContractId:this.saleContractId,//当前第几页
            },{interfaceType: "RENT_HOUSE"}).then(res=>{
                if(res.code ===0){
                    this.showData = res.data;
                    this.receiptList = res.data.receiptList;
                }
            })
        }
    }
}
</script>

<style scoped lang="less">
.payDatails{
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
    .payInfo{
        margin-top: .4rem;
        padding: .3rem 0;
        width: 8rem;
        height: 2.3rem;
        background: #f5f5f5;
        .right_box,.left_box{
            padding-left:.44rem;
            float: left;
            width: 50%;
            .info_box{
                height: .2rem;
                line-height:.2rem;
                margin-bottom: .3rem;
                &:last-child{
                    margin-bottom: 0
                }
                .titles{
                    font-size: .18rem;
                    color:#262d41
                }
                .info{
                    font-size: .18rem;
                    color:#999;
                    .red_num{
                        color:#d6000f;
                        font-size: .18rem;
                    }
                }

            }

        }
        .left_box{
            border-right:1px solid #ccc;
            .info{
                margin-left: .3rem;
            }
        }
        .right_box{
            .info{
                margin-left: .4rem;
                 &.five{
                    margin-left: .22rem;
                }
            }
        }
    }
    .bottom_box{
        width: 8rem;
        margin-top: .65rem;
        .sbox{
            width: 2rem;
            float: left;
            &.sboxlast{
                .bottom_info{
                    border:none;
                }
            }
            .top_ico{
                width: 100%;
                height: .6rem;
                &.ioc1{
                    background: url("../../../static/rent/aboutMe/contract/hands.png") center no-repeat ;
                    background-size: contain;
                }
                &.ioc2{
                    background: url("../../../static/rent/aboutMe/contract/moneys.png") center no-repeat ;
                    background-size: contain;
                }
                &.ioc3{
                    background: url("../../../static/rent/aboutMe/contract/times.png") center no-repeat ;
                    background-size: contain;
                }
                &.ioc4{
                    background: url("../../../static/rent/aboutMe/contract/cards.png") center no-repeat ;
                    background-size: contain;
                }
            }
            .bottom_info{
                margin-top: .2rem;
                border-right:1px solid #ccc;
                height: .4rem;
                .title{
                    margin-top: .04rem;
                    text-align: center;
                    font-size: .18rem;
                }
                .infos{
                    margin-top: .36rem;
                    text-align: center;
                    font-size: .14rem ;
                    color: #999;
                }
            }
        }
    }
    .tables{
        margin-top: .1rem;
        width: 8rem;

        .th{
            height: .48rem;
            width: 2rem;

            border-right:1px solid #ccc;
            float: left;
            &:last-child{
                 border:none;
            }
            .title{
                text-align: center;
                font-size: .18rem;
            }

        }

    }
    .tabl_body{
        width: 8rem;
        margin-top: -1px;
        .td{
            width: 2rem;
            height: .3rem;
            border-right:1px solid #ccc;
            float: left;
            &:last-child{
                 border:none;
            }
            .info{
                text-align: center;
                line-height: .3rem;
                font-size: .14rem;
                color: #999;
            }
        }
    }


}

</style>
