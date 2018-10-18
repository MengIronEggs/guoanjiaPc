<template>
    <div class="payStep">
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
        <!-- 合同信息 -->
        <div class="payInfo_box clearfix">
            <div class="payInfo">
                <span>合同编号</span>
                <span>JFFUIKFJFH</span>
            </div>
            <div class="payInfo">
                <span>租金期数</span>
                <span>1期</span>
            </div>
            <div class="payInfo">
                <span>应缴金额</span>
                <span>900元</span>
            </div>
            <div class="payInfo">
                <span>已缴金额</span>
                <span>900元</span>
            </div>
            <div class="payInfo">
                <span>已缴次数</span>
                <span>1次</span>
            </div>
            <div class="payInfo ">
                <span>已抵扣</span>
                <span class="three" >900元</span>
            </div>
            <div class="payInfo five">
                <span>已使用红包</span>
                <span class="five"  >0元</span>
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
                        <input type="text" v-model="rentPrice">
                    </div>
                    <div class="right" @click="PriceChange(1)"></div>
                </div>
            </div>
            <button class="btn">
                确认付款
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rentPrice:1000,
        }
    },
    components: {

    },
    methods:{
        // 改变支付值
        PriceChange(i){
            if(this.rentPrice==0&&i<0){
                this.rentPrice = 0
            }else{
                this.rentPrice += i
            }
        }
    }
}
</script>

<style scoped lang="less">
.payStep{
    .steps{
        padding-left:.4rem;
    }
    .breads{
        width: 10.1rem;
        height: .4rem;
        background: url("../../../static/rent/aboutMe/contract/toright.png") center no-repeat;
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
            background:#D6000F;
        }
        .step3{
            margin-left: 3.8rem;
            background:#D6000F;
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
        padding-left:.4rem;
        margin-top: 1rem;
        width: 9rem;
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
                background:url("../../../static/rent/aboutMe/contract/minusSign.png") center no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
            }
            .right{
                position: absolute;
                top:0;
                right: 0;
                width: .4rem;
                height: .4rem;
                background:url("../../../static/rent/aboutMe/contract/add.png") center no-repeat;
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
            margin-top: .3rem;
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

}

</style>
