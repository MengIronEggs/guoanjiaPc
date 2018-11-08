<template>
    <div class="paySuccess">
         <div class="btn_box">
            <button class="button actived" >
                <span class="icon1">
                </span>
                <span class="texts1">
                    支付完成
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
        <!-- 成功 -->
        <div class="seccess_box">
            <div class="centerBox">
                <!-- 成功图标 -->
                <div class="finishIco"></div>

                <div class="msg">
                    支付成功
                </div>
                <button class="btn" @click="toDetails">
                    查看详情
                </button>
            </div>
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
    methods:{

        toDetails(){
            this.$router.push({path:"/personalCenter/aboutMe/payDatails"})
        }
    }
}
</script>

<style scoped lang="less">
.paySuccess{
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
        width: 10.1rem;
        height: .4rem;
        background: url("https://img.guoanfamily.com/rentPC/rentAboutme/dbjiao.png") center no-repeat;
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
            background:#d6000F;
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
    .seccess_box{
        width: 10.2rem;
        margin-top: .8rem;
        position: relative;
        .centerBox{
            width: 2rem;
            position: absolute;
            left: 50%;
            margin-left:-0.7rem;
            top: 0;
            height: 4rem;
            .finishIco{
                height: 2.2rem;
                width: 100%;
                background: url("https://img.guoanfamily.com/rentPC/rentAboutme/Correct.png") center no-repeat;
                background-size: 100% 100%;
            }
            .msg{
                padding: .25rem;
                font-size: .24rem;
                text-align: center;
            }
            .btn{
                margin-left: .5rem;
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
}

</style>
