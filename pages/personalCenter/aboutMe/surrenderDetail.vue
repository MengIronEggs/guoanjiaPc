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
    .main-top{
        width: 100%;
        height: 1.5rem;
        padding:0.9rem 0 0 0.3rem;
        box-sizing: border-box;
        // background-color: red;
        .one{
            position: relative;
            width: 0.64rem;
            height: 0.3rem;
            float: left;
            .triangle{
                position: absolute;
                display: inline-block;  
                // border-left: 5px solid #d6000f;  
                border-bottom: 0.05rem solid #d6000f;
                width: 0.64rem;
                height: 0.3rem;
            }
            .triangle1{
                position: absolute;
                display: inline-block;  
                border-top: 5px solid #d6000f;
                width: 0.3rem;
                height: 0.3rem; 
                left: -0.15rem;
                top: -0.06rem;
                transform: rotate(135deg); 
            }
        }
        .circle{
            float: left;
            width: 0.4rem;
            height: 0.4rem;
            background-color: #ddd;
            color: #fff;
            border-radius: 50%;
            text-align: center;
            line-height: 0.4rem;
            margin-left: -0.05rem;
            font-size: 0.34rem;
            position: relative;
            z-index: 1;
            margin-top:0.05rem;
        }
        .circleone{
            background-color: #d6000f;
        }
        .two{
            float: left;
            margin-left: -0.05rem;
            .triangle{
                display: inline-block;  
                border-bottom:0.05rem solid #ddd;
                width: 1.7rem;
                height: 0.3rem; 
            }
        }
        .two1{
            .triangle{
                display: inline-block;  
                border-bottom:0.05rem solid #d6000f;
                width: 1.7rem;
                height: 0.3rem; 
            }
        }
        .end{
            position: relative;
            width: 0.64rem;
            height: 0.3rem;
            float: left;
            transform: rotate(180deg);
            .triangle{
                position: absolute;
                display: inline-block;  
                // border-left: 5px solid #d6000f;  
                border-top: 0.05rem solid #ddd;
                width: 0.64rem;
                height: 0.3rem; 
            }
            .triangle1{
                position: absolute;
                display: inline-block;  
                border-bottom: 0.05rem solid #ddd;
                width: 0.3rem;
                height: 0.05rem; 
                left: -0.03rem;
                top: -0.11rem;
                transform: rotate(-45deg); 
            }
        }
        .end1{
            .triangle{
                border-top: 0.05rem solid #d6000f;
            }
            .triangle1{
                border-bottom: 0.05rem solid #d6000f;
            }
        }
    }
    .step{
        width: 100%;
        margin-bottom: 1rem;
        span{
            display:inline-block;
            // width: 18%;
            &:nth-child(1){
                width: 1.3rem;
                text-align: right;
            }
            &:nth-child(2){
                width: 2.03rem;
                text-align: right;
            }
            &:nth-child(3){
                width: 1.95rem;
                text-align: right;
            }
            &:nth-child(4){
                width: 1.95rem;
                text-align: right;
            }
            &:nth-child(5){
                width: 1.95rem;
                text-align: right;
            }
        }
    }
    .main{
        font-size: 0.18rem;
        width: 100%;
        ul{
            width: 7.2rem;
            height: 1.8rem;
            margin-left: 1rem;
            li{
                width: 50%;
                line-height: 0.45rem;
                float: left;
                font-size: 0.18rem;
                span{
                    width: 1.1rem;
                    float: left;
                }
                p{
                    width: 2.5rem;
                    float: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .amount{
                    width: 1rem;
                    line-height: 0.3rem;
                    background-color: #d70010;
                    color: #fff;
                    text-align: center;
                    cursor: pointer;
                    margin-top: 10px;
                }
            }
        }
    }
    .submit{
        width: 100%;
        button{
            margin-top: 0.5rem;
            margin-left: 3rem;
            &:nth-child(2){
                margin-left: 1rem;
                background-color: #999;
            }
        }
    }
</style>
<template>
    <div class="contract">
        <div class="btn_box " >
            <button class="button actived">
                <span class="icon1">
                </span>
                <span style="display:inline-block;font-size:.18rem;">
                    退租进度
                </span>
            </button>
       </div>
       <div class="main-top">
            <div class="one">
                <span class="triangle"></span>
                <span class="triangle1"></span>
            </div>
            <div class="circle" :class="{circleone:isone}">
                1
            </div>
            <div class="two" :class="{two1:istwo}">
                <span class="triangle"></span>
            </div>
            <div class="circle" :class="{circleone:istwo}">
                2
            </div>
            <div class="two" :class="{two1:isthree}">
                <span class="triangle"></span>
            </div>
            <div class="circle" :class="{circleone:isthree}">
                3
            </div>
            <div class="two" :class="{two1:isfour}">
                <span class="triangle"></span>
            </div>
            <div class="circle" :class="{circleone:isfour}">
                4
            </div>
            <div class="two" :class="{two1:isfive}">
                <span class="triangle"></span>
            </div>
            <div class="circle" :class="{circleone:isfive}">
                5
            </div>
            <div class="end" :class="{end1:isfive}">
                <span class="triangle"></span>
                <span class="triangle1"></span>
            </div>
       </div>
       <div class="step">
           <span>待处理</span>
           <span>房管提交</span>
           <span>风控审批</span>
           <span>财务审批</span>
           <span>审批完成</span>
       </div>
       <div class="main">
           <ul>
               <li>
                   <span>姓名</span>
                   <p>{{form.ownerName}}</p>
               </li>
               <li>
                   <span>物业地址</span>
                   <p>{{form.houseAddress}}</p>
               </li>
               <li>
                   <span>手机号</span>
                   <p>{{form.ownerPhone}}</p>
               </li>
               <li>
                   <span>申请日期</span>
                   <p>{{form.unRentDate}}</p>
               </li>
               <li>
                   <span>证件类型</span>
                   <p>{{form.bankName}}</p>
               </li>
               <li>
                   <span>解约信息</span>
                   <p>{{form.unrentRemark}}</p>
               </li>
               <li>
                   <span>证件号码</span>
                   <p>{{form.bankUserIdCard}}</p>
               </li>
               <li>
                   <span>结算费用</span>
                   <span class="amount" @click="AmountClick">{{amountprice}}</span>
               </li>
           </ul>
       </div>
       <div class="submit">
           <button @click.stop="submit('save')">确认退租</button>
           <button @click.stop="submit">拒绝退租</button>
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
                    unrentRemark:"",
                    unRentDate:"",
                    houseAddress:"",
                    bankUserIdCard:"",
                    bankName:"",
                    amountprice:"",
                },
                amountprice:"查看",
                isone:true,
                istwo:false,
                isthree:false,
                isfour:false,
                isfive:false,
                unRentId:"",
            }
        },
        created(){
            
        },
        mounted(){
            if(objFn.getStorage('surrendId')){
                this.unRentId = objFn.getStorage('surrendId');
            }
            this.getUnRentById()
        },
        methods:{
            getUnRentById(){ 
                objFn.Axios("agenthouseCutomer/pc/unrentController/getUnRentById","post",{
                    id:this.unRentId
                },{ interfaceType: "RENT_HOUSE" }).then(res=>{
                    this.form = Object.assign(res.data);
                    let date = new Date(this.form.unRentDate)
                    let Str=date.getFullYear() + '-' +
                    (date.getMonth() + 1) + '-' + 
                    date.getDate()
                    this.form.unRentDate = Str;
                    var billStep = res.data.billStep.split(",")
                    billStep.forEach(item=>{
                        if(item=="0072001" || item=="0072002"){
                            this.isone = true;
                        }else if(item=="0072004"|| item=="0072005"){
                            this.istwo = true;
                        }else if(item=="0072006"){
                            this.isthree = true;
                        }else if(item=="0072007"){
                            this.isfour = true;
                        }else if(item=="0072008"){
                            this.isfive = true;
                        }
                    })
                })
            },
            AmountClick(){
                this.amountprice = this.form.realRefundAmount +'元';
            },
            submit(type){
                if(type==='save'){
                    if(this.form.billStep.indexOf("0072008")===-1){
                        this.$showErrorTip("退租流程还没审批完成请耐心等待!")
                        return;
                    }
                    objFn.Axios("agenthouseCutomer/pc/unrentController/confirm","post",{billStatus:'0072009',unRentId:this.unRentId},{ interfaceType: "RENT_HOUSE" }).then(res=>{
                        if(res.code==0){
                            this.$showMsgTip(res.msg)
                        }else{
                            this.$showErrorTip(res.msg)
                        }
                    })
                }else{
                    objFn.Axios("agenthouseCutomer/pc/unrentController/confirm","post",{billStatus:'0072010',unRentId:this.unRentId},{ interfaceType: "RENT_HOUSE" }).then(res=>{
                        if(res.code==0){
                            this.$showMsgTip(res.msg)
                        }else{
                            this.$showErrorTip(res.msg)
                        }
                    })
                }
            }
        }
    }
</script>