<template>
    <div class="contract">
        <div class="btn_box " v-if="showNum===1||showNum===2">
            <button class="button" :class="{actived:showNum===1}" @click="MakeChouse(1)">
                <span class="icon1">
                </span>
                <span class="texts">
                    承租合同
                </span>
            </button>
            <button class="button" :class="{actived:showNum===2}" @click="MakeChouse(2)">
                <span class="icon1">
                </span>
                <span class="texts">
                    定金合同
                </span>
            </button>
        </div>

        <div class="btn_box" v-if="showNum===3">
            <button class="button" :class="{actived:showNum===3}" @click="MakeChouse(3)">
                <span class="icon1">
                </span>
                <span class="texts">
                    确认订单信息
                </span>
            </button>
        </div>
        <!-- 承租合同 -->
        <div v-show="showNum===1">
             <div class="herong_box">
               <div class="title_box clearfix">
                    <div class="title1" :class="{actived:true}">合同01</div>
                </div>
                <!-- 合同信息 -->
                <div class="hetong_NO">
                    <div class="NO_info">
                        <span class="NO_title">
                                合同编号
                        </span>
                        <span class="NO_info">
                            HSJHSSJJSJIA
                        </span>
                    </div>
                    <div class="NO_info">
                        <span class="NO_title">
                                租　　金
                        </span>
                        <span class="NO_info">
                            <span class="NO_info_red">900</span> 元/月
                        </span>
                    </div>
                    <div class="NO_info">
                        <span class="NO_title">
                            物业地址
                        </span>
                        <span class="NO_info">
                            康健家园42号
                        </span>
                    </div>
                    <div class="NO_info">
                        <span class="NO_title">
                                付款方式
                        </span>
                        <span class="NO_info">
                            <span class="NO_info_red">月付</span> <span>（押一付一）</span>
                        </span>
                    </div>

                </div>
                <!-- 缴费信息 -->
                <div class="rentMoney">
                    <!-- 本月应缴费 -->
                    <div class="month_money clearfix">
                        <span class="month_money_title">本月应缴费</span>
                        <span class="moneys">
                            <span class="num">900</span>
                            <span class="danwei"> &nbsp;元/月</span>
                            <span class="masag">&nbsp;(2018-09-30前交付)</span>
                        </span>
                    </div>
                    <!-- 缴费列表 -->
                    <div class="table_box">
                        <!-- 头部 -->
                        <div class="tr t_head  clearfix">
                            <span class="th qishu first">
                                期数
                            </span>
                            <span class="th payDate">
                                应付款日
                            </span>
                            <span class="th renDate">
                                房屋租金期间
                            </span>
                            <span class="th feiyong">
                                应缴费用
                            </span>
                            <span class="th shijiao">
                                实际缴纳费用
                            </span>
                            <span class="th feiyong">
                                付款状态
                            </span>
                            <span class="th caozuo last">
                                支付操作
                            </span>
                        </div>
                        <!-- 内容 -->
                        <div class="tr infos clearfix">
                            <span class="th qishu first">
                                1
                            </span>
                            <span class="th payDate">
                                2018-08-10
                            </span>
                            <span class="th renDate">
                                <div>2018-08-10</div>
                                <div>2018-08-10</div>
                            </span>
                            <span class="th feiyong">
                                <div class="shiPrice">900 元</div>
                            </span>
                            <span class="th shijiao">
                                <div>900 元</div>
                            </span>
                            <span class="th feiyong status">
                                待支付
                            </span>
                            <span class="th caozuo last">
                                <span class="caozuo_btn">支付</span>
                                <span class="caozuo_btn">详情</span>
                            </span>
                        </div>
                        <div class="tr infos clearfix">
                            <span class="th qishu first">
                                1
                            </span>
                            <span class="th payDate">
                                2018-08-10
                            </span>
                            <span class="th renDate">
                                <div>2018-08-10</div>
                                <div>2018-08-10</div>
                            </span>
                            <span class="th feiyong">
                                <div class="shiPrice">900 元</div>
                            </span>
                            <span class="th shijiao">
                                <div>900 元</div>
                            </span>
                            <span class="th feiyong status">
                                待支付
                            </span>
                            <span class="th caozuo last">
                                <span class="caozuo_btn">支付</span>
                                <span class="caozuo_btn">详情</span>
                            </span>
                        </div>


                    </div>
                    <!-- 提示 -->
                    <div class="tips">
                        <div class="titles">
                            <div class="atten_bg"></div>
                            <div class="title_info">
                                在线交租金提示
                            </div>
                        </div>
                        <div class="tips_info">
                            <p>1.当您首次交租金时，我们会在合同审核通过，释放下一次“支付”功能。</p>
                            <p>2.当您需要使用两张卡交租金时，可使用分次付款。</p>
                            <p>3.如果您有多份合同，交房租时，请分清合同，避免交错租金的情况。</p>
                            <p>4.您在线支付完租金后，看到支付状态为“支付成功”。</p>
                            <p>5.当期全部租金支付完成后，可点击支付详情，打印收据。</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div v-show="showNum===2">
            <div class="herong_box">
                <div class="title_box clearfix">
                    <div class="title1 actived">合同01</div>
                    <div class="title1">合同02</div>

                </div>
                <div class="userInfo">
                    <div class="infoLeft">
                        <div class="text">
                            <span>合同编号</span>
                            <span>1232131</span>
                        </div>
                        <div class="text">
                            <span>物业地址</span>
                            <span>1232131</span>
                        </div>
                        <div class="text">
                            <span>租金期数</span>
                            <span>1232131</span>
                        </div>
                        <div class="text">
                            <span>租　　金</span>
                            <span>1232131</span>
                        </div>
                        <div class="text">
                            <span>定　　金</span>
                            <span>1232131</span>
                        </div>
                        <div class="text">
                            <span>定金状态</span>
                            <span>1232131</span>
                        </div>
                    </div>
                    <div class="inforight">
                        <div class="title">
                            联系人信息
                        </div>
                        <div class="users">
                            <div class="touxiang">

                            </div>
                            <div class="names">
                                <div>刘女士</div>
                                <div>137****2123</div>
                            </div>

                        </div>
                        <div class="Check-in_time">
                            <span class="titles">入住时间</span>
                            <span class="In_date">2018-09-09</span>
                        </div>
                    </div>
                    <div class="message clearfix">
                        <span class="titles">
                            留言
                        </span>
                        <span class="message_info">
                            留言留言留言留言留言留言留言留言留言留言留言留言留言
                            留言留言留言留言留言留言留言留言留言留言留言留言留言
                            留言留言留言留言留言留言留言留言留言留言留言留言留言
                            留言留言留言留言留言留言留言留言留言留言留言留言留言
                            留言留言留言留言留言留言留言留言留言留言留言留言留言
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 支付 -->
        <div class="pay_step" v-if="showNum===3">
            <payStep></payStep>
        </div>
    </div>
</template>

<script>
import payStep from "./payStep.vue"
export default {
    data() {
        return {
            showNum:3
        }

    },
    components: {
        payStep
    },
    methods:{
        MakeChouse(i){
            this.showNum = i
        },
    }
}
</script>

<style scoped lang="less">
.contract{
    width: 11.8rem;
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
                .texts{
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
    .herong_box{
        margin-top: .27rem;
        .title1{
            float: left;
            height: 0.45rem;
            width: 1.3rem;
            background: url("../../../static/rent/aboutMe/contract/grayjiao.png") center no-repeat;
            background-size: 100% 100%;
            // background-color: red;
            text-align: center;
            line-height: .4rem;
            font-size: .14rem;
            cursor: pointer;
            // transform: translateX(-0.1rem);
            z-index: 99;
            &:nth-child(1){
                // transform: translateX(0);
            }
            &.actived{
                background: url("../../../static/rent/aboutMe/contract/redjiao.png") center no-repeat;
                background-size: 100% 100%;
                 color: #fff;
                z-index: 100;
            }
        }
        // 合同信息
        .hetong_NO{
            margin-top: 0.09rem;
            height: 1.2rem;
            width: 8rem;
            background-color: #F5F5F5;
            padding: 0.06rem;
            .NO_info{
                width: 50%;
                height: 50%;
                float: left;

                // background: #000;
                .NO_title{
                    float: left;
                    padding-left: .38rem;
                    font-size: .18rem;
                    line-height: .54rem;
                    color: #262d41;
                }
                .NO_info{
                    float: left;
                    margin-left: .28rem;
                    font-size: .18rem;
                    line-height: .54rem;
                    text-align: left;
                    color:#999;
                    span{
                        font-size: .18rem;
                        line-height: .54rem;
                    }
                    .NO_info_red{
                        color:#d6000f;
                    }
                }

            }

        }
        // 缴费信息
        .rentMoney{
            padding: .2rem .44rem 1.2rem;

            .month_money{
                span{
                    float: left;
                    font-size: .18rem;
                }
                .moneys{
                    margin-left: .4rem;
                }
                .num{
                    color:#d6000f;
                }
                .danwei{
                    color: #999;
                }
                .masag{
                    margin-top: .01rem;
                    font-size: .12rem;
                    color: #999;
                }
            }
            // 缴费列表
            .table_box{
                margin-top: 1rem;
                border-bottom:1px solid #ccc;
                .t_head{
                    border-bottom:1px solid #ccc;
                }
                .tr{
                    &.infos{
                        span{
                            padding: .24rem 0;
                        }
                        .renDate{
                            padding: .12rem 0;

                        }
                        .caozuo{
                             .caozuo_btn{

                                min-height: 20px;
                                padding: 0.02rem 0.05rem;
                                cursor: pointer;
                                &:nth-child(1){
                                    background-color: #d6000f;
                                    color: #fff;
                                    margin-left: .1rem;
                                    font-size: .14rem;
                                }
                                &:nth-child(2){
                                    color: #039acc;
                                }

                            }
                        }
                    }
                    .th{
                        display: inline;
                        float: left;
                        padding-bottom: .18rem;
                        text-align: center;
                    }
                }
                .qishu{
                    width: .77rem;
                    &.first{
                        text-align: left
                    }
                }
                .payDate{
                    width: 1.77rem;
                }
                .renDate{

                     width: 1.97rem;
                }
                .feiyong{
                    width: 1.67rem;
                    &.status{
                        color: #d6000f;
                    }
                    .shiPrice{
                        color: #d6000f;
                    }
                }
                .shijiao{
                    width: 1.86rem;

                }
                .caozuo{
                    width: 1.15rem;
                    &.last{
                        text-align: right
                    }

                }
            }
            // 提示
            .tips{
                margin-top: .5rem;
                .titles{
                    height: .3rem;
                    .atten_bg{
                        float: left;
                        width: .3rem;
                        height: .3rem;
                        background: url("../../../static/rent/aboutMe/contract/attention.png") center no-repeat;
                        background-size: 100% 100%;
                    }
                    .title_info{
                        float: left;
                        height: .3rem;
                        padding-left:.15rem;
                        // font-size:.18rem;
                        // line-height: .3rem;
                        font:700  .18rem/.3rem "微软雅黑";
                        color: #d6000f;
                    }
                }
                .tips_info{
                    padding: 0.1rem;
                    p{
                        color: #000;
                        font:500  .14rem/.26rem "微软雅黑";
                    }
                }
            }
        }


        // 定金合同
        .userInfo{
            width: 8rem;
            padding: .2rem .45rem;
            margin-top: 0.05rem;
            height: 4.4rem;
            background: #f5f5f5;
            .infoLeft{
                width: 50%;
                float: left;
                border-right:1px dashed #ccc;
                .text{
                    span{
                        line-height: .4rem;
                        font-size:.2rem;
                        &:nth-child(2){
                            color: #999;
                            padding-left: .3rem;
                        }
                    }
                }
            }
            .inforight{
                float: left;
                width: 50%;
                height: 2.25rem;
                padding-left:.3rem;
                position: relative;
                .title{
                    font-size: .2rem;
                }
                .users{

                    margin-top: .3rem;
                    .touxiang{
                        float: left;
                        width: 1.22rem;
                        height: 1.22rem;
                        border-radius: 50%;
                        background-color: #fff;
                    }
                    .names{
                        float: left;
                        width: 1.4rem;
                        height: 1.22rem;
                        padding: 0.15rem 0 ;
                        margin-left: .35rem;
                        div{
                            font-size: .2rem;
                            line-height: .4rem;
                            color: #999;
                        }
                    }
                }
                .Check-in_time{
                    position: absolute;
                    bottom: 0;
                    left: 0.3rem;
                    .titles{
                        font-size: .2rem;
                    }
                    .In_date{
                        font-size: .2rem;
                        color: #999;
                        margin-left: .55rem;
                    }
                }
            }
            .message{
                float: left;
                width: 100%;
                margin-top: .15rem;
                padding-top:.15rem;
                border-top:1px solid #ccc;
                .titles{
                    float: left;
                    width: 1rem;
                    font-size: .2rem
                }
                .message_info{
                    float: left;
                    width:5.98rem;
                    font-size:.2rem;
                    color: #999;
                }
            }
        }
    }
}
</style>
