<template>
    <div class="contract">
        <div class="btn_box " v-if="showNum===1||showNum===2">
            <button class="button Bt_garty" :class="{actived:showNum===1}" @click="MakeChouse(1)">
                <span class="icon1">
                </span>
                <span class="texts">
                    承租合同
                </span>
            </button>
            <button class="button Bt_garty" :class="{actived:showNum===2}" @click="MakeChouse(2)">
                <span class="icon1">
                </span>
                <span class="texts">
                    定金合同
                </span>
            </button>
        </div>
        <!-- 承租合同 -->
        <div v-show="showNum===1">
             <div class="herong_box" v-show="contractArr.length>0">
                <div class="title_box clearfix">
                    <div class="title1" :class="{actived:index==ActIndex}" @click="Chouses(index)" v-for="(item,index) in contractArr" :key="index">{{`合同${index+1}`}}</div>
                </div>
                <!-- 合同信息 -->
                <div class="hetong_NO">
                    <div class="NO_info">
                        <span class="NO_title">
                            合同编号
                        </span>
                        <span class="NO_info">
                            {{ShowData.saleContractId}}
                        </span>
                    </div>
                    <div class="NO_info">
                        <span class="NO_title">
                            租　　金
                        </span>
                        <span class="NO_info">
                            <span class="NO_info_red">{{ShowData.planRent}}</span> 元/月
                        </span>
                    </div>
                    <div class="NO_info">
                        <span class="NO_title">
                            物业地址
                        </span>
                        <span class="NO_info">
                            {{ShowData.houseAddress}}
                        </span>
                    </div>
                    <div class="NO_info">
                        <span class="NO_title">
                            付款方式
                        </span>
                        <span class="NO_info">
                            <span class="NO_info_red">{{ShowData.receiptCycleName1}}</span> <span>{{ShowData.receiptCycleName2}}</span>
                        </span>
                    </div>

                </div>
                <!-- 缴费信息 -->
                <div class="rentMoney">
                    <!-- 本月应缴费 -->
                    <div class="month_money clearfix">
                        <span class="month_money_title">本月应缴费</span>
                        <span class="moneys">
                            <span class="num">{{ShowData.realRentMoney}}</span>
                            <span class="danwei"> &nbsp;元/月</span>
                            <span class="masag">{{`&nbsp;(${ShowData.rentDate}前交付)`}}</span>
                        </span>
                    </div>
                    <!-- 缴费列表 -->
                    <div class="table_boxs">
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
                            <div class="tr infos clearfix" v-for="(its,index) in ShowData.receiptPlanList" :key="index">
                                <span class="th qishu first">
                                    {{its.number}}
                                </span>
                                <span class="th payDate">
                                    {{its.rentDate}}
                                </span>
                                <span class="th renDate">
                                    <div>{{its.rentDateStart}}</div>
                                    <div>{{its.rentDateEnd}}</div>
                                </span>
                                <span class="th feiyong">
                                    <div class="shiPrice">{{its.planRent}} 元</div>
                                </span>
                                <span class="th shijiao">
                                    <div>{{its.realRent}} 元</div>
                                </span>
                                <span class="th feiyong status" v-if="!its.payStatus" >
                                    待支付
                                </span>

                                <span class="th feiyong status" v-if="its.payStatus" >
                                    已支付
                                </span>

                                <span class="th caozuo last">
                                    <span class="caozuo_btn" v-show="!its.payStatus" @click="Topay(its)">支付</span>
                                    <span class="caozuo_btn No_caozuo_btn" v-show="its.payStatus" >支付</span>
                                </span>
                                <span class="th msginfo">
                                    <span class="caozuo_btn xiangqing" @click="ShowDetails(its)">

                                        详情
                                    </span>

                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- 提示 -->
                    <div class="tips">
                        <div class="titles">

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
            <div class="nodata" v-show="contractArr.length<=0">
                <noData></noData>
            </div>
        </div>
        <!-- 定金合同 -->
        <div v-show="showNum===2">
            <div class="herong_box" v-show="DepositArr.length>0">
                <div class="title_box clearfix"  >
                    <div class="title1" :class="{actived:DepositAct==index}" v-for="(item,index) in DepositArr" :key="index" @click="DepositChouses(index)">合同{{index+1}}</div>
                </div>
                <div class="userInfo">
                    <div class="infoLeft">
                        <div class="text">
                            <span>合同编号</span>
                            <span>{{DepositData.id}}</span>
                        </div>
                        <div class="text">
                            <span>物业地址</span>
                            <span>{{DepositData.houseAddress}}</span>
                        </div>
                        <div class="text">
                            <span>租　　金</span>
                            <span>{{DepositData.rentPrice}}元</span>
                        </div>
                        <div class="text">
                            <span>定　　金</span>
                            <span>
                                <span class="redColor">{{DepositData.amount}} </span>元
                            </span>
                        </div>
                        <div class="text">
                            <span>定金状态</span>
                            <span class="redColor">{{DepositData.dealCodeName}}</span>
                        </div>
                    </div>
                    <div class="inforight">
                        <div class="title">
                            联系人信息
                        </div>
                        <div class="users">
                            <div class="touxiang">
                                <img :src="MyEarnestSex" alt="">
                            </div>
                            <div class="names">
                                <div>{{DepositData.ownerName}}</div>
                                <div>{{DepositData.ownerPhone}}</div>
                            </div>
                        </div>
                        <div class="Check-in_time">
                            <span class="titles">入住时间</span>
                            <span class="In_date" v-if="DepositData.signDate">{{DepositData.signDate}}</span>
                            <span class="In_date" v-else>暂未设置</span>

                        </div>
                    </div>
                    <div class="message clearfix">
                        <span class="titles">
                            留言
                        </span>
                        <span class="message_info">
                            {{DepositData.remark}}
                        </span>
                    </div>
                </div>

            </div>
             <div class="nodata" v-show="DepositArr.length<=0">
                <noData></noData>
            </div>
        </div>
    </div>
</template>

<script>
import { objFn } from "~/plugins/axios.js";
import noData from "~/components/personal/noData.vue"
export default {
    data() {
        return {
            showNum:1,
            ActIndex:0,
            contractArr:[],
            Nan:"https://img.guoanfamily.com/rentPC/rentAboutme/MyEarnect-nan.png",
            Nv:"https://img.guoanfamily.com/rentPC/rentAboutme/MyEarnect-nv.png",
            MyEarnestSex:"https://img.guoanfamily.com/rentPC/rentAboutme/MyEarnect-nan.png",
            // 展示的数据
            ShowData:{},
            //定金数据
            DepositArr:[],
            DepositAct:0,
            DepositData:{}
        }

    },
    components: {
        // payStep
        noData
    },
    mounted() {
        this.getData();
    },
    methods:{
        MakeChouse(i){
            this.showNum = i;

        },
        Chouses(i){
            this.ActIndex = i
            this.ShowData = this.contractArr[i]

        },
        DepositChouses(i){
            this.DepositAct = i
            this.DepositData = this.DepositArr[i]
            this.DepositData.receiptDate = (new Date(this.DepositData.receiptDate)).Format("yyyy-MM-dd")
        },
        // 支付
        Topay(its){
            let Data = {
                receiptPlanId:its.receiptPlanId,
                saleContractId:its.saleContractId
            }
            sessionStorage.setItem("rentPayData",JSON.stringify(Data))
            this.$router.push({path:"/personalCenter/aboutMe/payStep"})
        },
        // 查看合同详情
        ShowDetails(its){
            let Data = {
                receiptPlanId:its.receiptPlanId,
                saleContractId:its.saleContractId
            }
            this.$router.push({path:"/personalCenter/aboutMe/payDatails" ,query: Data})
        },
        getData(){
            // 承租合同
            objFn.Axios("agenthouseCutomer/PcRentContractController/getContractList","post",{},{ interfaceType: "RENT_HOUSE" }).then(res=>{
                if(res.code===0){
                    res.data.forEach(item => {
                        if(item.receiptCycleName){
                            let index = item.receiptCycleName.indexOf("（")
                            item.receiptCycleName1 =  item.receiptCycleName.substring(0,index);
                            item.receiptCycleName2 =  item.receiptCycleName.substring(index,item.receiptCycleName.length);
                        }
                    });
                    this.contractArr = res.data
                    this.ShowData = res.data[0]
                }
            })
            // 定金合同
             objFn.Axios("agenthouseCutomer/PcRentContractController/getDepositContractList","post",{},{ interfaceType: "RENT_HOUSE" }).then(res=>{
                if(res.code===0){
                    res.data.forEach(items=>{
                        if(items.ownerPhone){
                            items.ownerPhone = items.ownerPhone.substring(0,3)+"****"+ items.ownerPhone.substring(7,11)
                        }
                        if(items.ownerSex=="0"){
                            this.MyEarnestSex = this.Nv
                        }else{
                            this.MyEarnestSex = this.Nan
                        }
                    })
                    this.DepositArr = res.data
                    this.DepositData = this.DepositArr[0]
                    this.DepositData.receiptDate = (new Date(this.DepositData.receiptDate)).Format("yyyy-MM-dd")
                }
                console.log(this.DepositArr)
             })
        }
    }
}
</script>
<style scoped lang="less">
.contract{
    width: 10rem;
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
        .title_box{
            white-space: nowrap;
            overflow: auto;
        }
        .title1{
            display: inline-block;
            vertical-align: top;
            height: 0.45rem;
            width: 1.3rem;
            background: url("https://img.guoanfamily.com/rentPC/rentAboutme/grayjiao.png") center no-repeat;
            background-size: 100% 100%;
            // background-color: red;
            text-align: center;
            line-height: .4rem;
            font-size: .14rem;
            cursor: pointer;
            z-index: 99;
            &.actived{
                background: url("https://img.guoanfamily.com/rentPC/rentAboutme/redjiao.png") center no-repeat;
                background-size: 100% 100%;
                 color: #fff;
                z-index: 100;
            }
        }
        // 合同信息
        .hetong_NO{
            margin-top: 0.09rem;
            height: 1.2rem;
            width: 9rem;
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
            width: 100%;
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

            .table_boxs{
                 overflow-x:auto;
                 width: 9.5rem;
            }
            .table_box{
                margin-top: 1rem;
                border-bottom:1px solid #ccc;
                padding: .1rem;
                white-space: nowrap;
                width: 9.5rem;
                *{
                    font-size: .16rem;
                }
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
                                padding: 0.05rem 0.12rem;

                                cursor: pointer;
                                &:nth-child(1){
                                    background-color: #d6000f;
                                    color: #fff;
                                    margin-left: .1rem;
                                    font-size: .14rem;
                                    cursor: pointer;
                                    &.No_caozuo_btn{
                                        background-color: #ccc;
                                        cursor: not-allowed;
                                    }
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
                    width: .36rem;
                    &.first{
                        text-align: left
                    }
                }
                .payDate{
                    width: 1.37rem;
                }
                .renDate{
                    width: 1.57rem;
                }
                .feiyong{
                    width: 1.27rem;
                    &.status{
                        color: #d6000f;
                    }
                    .shiPrice{
                        color: #d6000f;
                    }
                }
                .shijiao{
                    width: 1.42rem;
                }
                .caozuo{
                    width: 0.8rem;
                    &.last{
                        text-align: right
                    }

                }
                .msginfo{
                    width: 0.8rem;
                    .caozuo_btn{
                        display: inline-block;
                        border:1px solid  #039acc;
                        color: #039acc;
                        cursor: pointer;
                        &.xiangqing{
                            font-size: .14rem;
                            vertical-align: top;
                            padding:0.04rem 0.1rem;
                            margin-top: -0.03rem;

                        }

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
                        background: url("https://img.guoanfamily.com/rentPC/rentAboutme/attention.png") center no-repeat;
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
                        font:500  .16rem/.3rem "微软雅黑";
                    }
                }
            }
        }


        // 定金合同
        .userInfo{
            width: 9rem;
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
                        line-height: .48rem;
                        font-size:.18rem;
                        &:nth-child(2){
                            color: #999;
                            padding-left: .3rem;
                        }
                         .redColor{
                            color: #d6000f;
                        }
                        &.redColor{
                            color: #d6000f;
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
                    font-size: .18rem;
                }
                .users{

                    margin-top: .3rem;
                    .touxiang{
                        float: left;
                        width: 1.22rem;
                        height: 1.22rem;
                        border-radius: 50%;
                        background-color: #fff;
                        img{

                            width: 100%;
                            height: 100%;
                            vertical-align: top;
                        }
                    }
                    .names{
                        float: left;
                        width: 1.4rem;
                        height: 1.22rem;
                        padding: 0.15rem 0 ;
                        margin-left: .35rem;
                        div{
                            font-size: .18rem;
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
                        font-size: .18rem;
                    }
                    .In_date{
                        font-size: .18rem;
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
                    font-size:.18rem;
                    color: #999;
                }
            }
        }
    }
    .nodata{
        width: 100%;
        height: 7.5rem;
    }
}
</style>
