<style scoped lang="less">
    .contract{
        width:10rem;
    }
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
    .form{
        width: 100%;
        height: 4.7rem;
        padding:0.28rem 0 0 0.8rem;
        .left{
            width: 4.4rem;
            height: 100%;
            // background: #ccc;
            padding: 0 0.2rem;
            float: left;
            position: relative;
            .input{
                width: 100%;
                height: 0.4rem;
                margin-top:0.18rem;
                span{
                    float: left;
                    height: 0.4rem;
                    line-height: 0.4rem;
                }
                input{
                    float: right;
                    width: 3rem;
                    height: 0.4rem;
                }
                .leave{
                    float: right;
                    width: 3rem;
                    height: 0.4rem;
                }
                
            }
            .payBtn{
                width: 1rem;
                height: 0.3rem;
                background-color: #d70010;
                line-height: 0.3rem;
                color: #fff;
                text-align: center;
                position: absolute;
                bottom: 0rem;
                cursor: pointer;
            }
        }
        .right{
            background-color: #f5f5f5;
            margin-left: 0.4rem;
            span{
                width: 1.2rem;
                margin-left: 0.4rem;
                float: left;
            }
            p{
                width: 2.4rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                line-height:0.4rem;
                color:#bbbbbb;
                float: left;
            }
        }
    }
</style>
<style lang="less">
    .el-picker-panel__icon-btn{
        width: 0 !important;
        margin-top: 0;
    }
</style>
<template>
    <div class="contract">
        <div class="btn_box " >
            <button class="button actived">
                <span class="icon1">
                </span>
                <span style="display:inline-block;font-size:.18rem;">
                    申请退租
                </span>
            </button>
       </div>
       <div class="form">
           <div class="left">
               <div class="input">
                    <span>姓名</span>
                    <input type="text" placeholder="请输入姓名" v-model="form.bankUserName">
                </div>
                <div class="input">
                    <span>身份证</span>
                    <input type="text" placeholder="请输入身份证" v-model="form.bankUserIdCard">
                </div>
                <div class="input">
                    <span>开户行</span>
                    <input type="text" placeholder="请输入开户行" v-model="form.bankName">
                </div>
                <div class="input">
                    <span>银行账号</span>
                    <input type="text" placeholder="请输入银行账号" v-model="form.bankCard">
                </div>
                <div class="input" v-if="showDate">
                    <span>搬离日期</span>
                    <!-- <input type="text" placeholder="请输入搬离日期" v-model="form.name"> -->
                    <el-date-picker
                        class="leave"
                        v-model="form.leaveDate"
                        type="date"
                        placeholder="选择日期" >
                    </el-date-picker>
                    <!-- <datetime v-model="form.leaveDate" format="YYYY-MM-DD" :placeholder="selectTime" class="date"></datetime> -->
                </div>
                <div class="input">
                    <span>退租原因</span>
                    <input type="text" placeholder="请输入退租原因" v-model="form.unrentRemark">
                </div>
                <div class="payBtn" @click="tojy">
                    提交申请
                </div>
           </div>
            <div class="left right">
               <div class="input">
                    <span>姓名</span>
                    <p>{{form.ownerName}}</p>
                </div>
                <div class="input">
                    <span>电话</span>
                    <p>{{form.ownerPhone}}</p>
                </div>
                <div class="input">
                    <span>起租日期</span>
                    <p>{{form.startDate}}</p>
                </div>
                <div class="input">
                    <span>房间地址</span>
                    <p>{{form.houseAddress}}</p>
                </div>
                <div class="input">
                    <span>房间号</span>
                    <p>{{form.roomName}}</p>
                </div>
                <div class="input">
                    <span>房间价格</span>
                    <p>{{form.rentPrice}}</p>
                </div>
                <div class="input" style="border:none;">
                    <span>申请日期</span>
                    <p>{{form.unRentDate}}</p>
                </div>
           </div>
       </div>
    </div>
</template>
<script>
    import { objFn } from "~/plugins/axios.js";
    export default {
        data(){
            return{
                form:{
                    ownerName:"",
                    ownerPhone:"",
                    startDate:"",
                    houseAddress:"",
                    roomName:"",
                    unrentRemark:"",
                    rentPrice:"",
                    unRentDate:"",
                    contentDate:"",
                    bankUserName:"",  //开户行姓名
                    bankUserIdCard:"", //银行卡身份证
                    bankName:"",   //开户行
                    bankCard:"",   //银行卡号
                    leaveDate:"",
                },
                showDate:false,
                id:""
            }
        },
        created(){
            
        },
        mounted(){
            
            // setTimeout(()=>{
                this.showDate = true;
            // },30)
            if(objFn.getStorage('saleId')){
                this.id = objFn.getStorage('saleId');
            }
            this.getUnRentBySaleContractId();
        },
        methods:{
           tojy(){
                if(!this.form.bankUserName){
                    this.$showErrorTip("请输入姓名")
                    return;
                }else if(!this.form.bankUserIdCard){
                    this.$showErrorTip("请输入身份证号")
                    return;
                }else if(!objFn.IC(this.form.bankUserIdCard)){
                    this.$showErrorTip("身份证号格式错误")
                    return;
                }else if(!this.form.bankName){
                    this.$showErrorTip("请输入开户行")
                    return;
                }else if(!this.form.bankCard){
                    this.$showErrorTip("请输入银行账号")
                    return;
                }else if(!this.form.leaveDate){
                    this.$showErrorTip("请输入搬离日期")
                    return;
                }else if(!this.form.unrentRemark){
                    this.$showErrorTip("请输入退租原因")
                    return;
                }
                objFn.Axios("agenthouseCutomer/pc/unrentController/save","post",Object.assign(this.form,{
                    saleContractId:this.id
                }),{ interfaceType: "RENT_HOUSE"}).then(res=>{
                    if(res.code==0){
                        this.$showMsgTip(res.msg)
                        this.$router.back();
                    }else{
                        this.$showErrorTip(res.msg)
                    }
                })
            },
            getUnRentBySaleContractId(){
                objFn.Axios("agenthouseCutomer/pc/unrentController/getUnRentBySaleContractId","post",{
                    saleContractId:this.id
                },{ interfaceType: "RENT_HOUSE"}).then(res=>{
                    if(res.code===0){
                        this.form = Object.assign(res.data);
                        var myDate = new Date();
                        myDate.getFullYear();    //获取完整的年份(4位,1970-????)
                        myDate.getMonth();       //获取当前月份(0-11,0代表1月)
                        myDate.getDate();        //获取当前日(1-31)
                        this.form.unRentDate = myDate.getFullYear() + '-'+( myDate.getMonth()+1)+'-'+myDate.getDate();
                    }else{
                        this.$showErrorTip(res.msg)
                    }
                })
                
            }
        }
    }
</script>