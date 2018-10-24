<template>
	<div>
		<div class="alertMsg" v-show="isShow">
    		<div class="alert-content">
    			<div class="modal-header">
    				<h4>我要预约看房<div class="close" @click="onClose">×</div></h4>
    			</div>
    			<div class="orderHouse">
    				<div class="orderHouse-left">
    					<img :src="houseMsg.image" alt="" />
    				</div>
    				<div class="orderHouse-right">
    					<p class="orderHouse-name">{{houseMsg.areaName}} {{houseMsg.houseName == '东大桥店'?houseMsg.dongdaqiaoName: houseMsg.shareName}}</p>
    					<p class="orderHouse-name"><span>{{houseMsg.Price}}</span>元/月</p>
    					<p class="orderHouse-name">{{houseMsg.Area}}㎡ |   {{houseMsg.buildFloor}}层</p>
    				</div>
    			</div>
    			<div class="modal-body">
    				<div class="sta-input1">
    					<div class="sta-input1-left">
    						<span>*</span> 您的姓名:
    					</div>
    					<div class="sta-input1-right">
    						<input type="text" v-model="userName" class="name-input" placeholder="请输入您的姓名"/>
    					</div>
    				</div>
    				<div class="sta-input1">
    					<div class="sta-input1-left">
    						<span>*</span> 您的电话:
    					</div>
    					<div class="sta-input1-right">
    						<input type="number" style="width: 55%;float: left;" v-model="userPhone"  class="name-input phone-input" maxlength="11" placeholder="请输入您的手机号"/>
    						<div class="switchBox" >
								<div class="sex-item" @click="changeSex">
									<div class="sex-color" :class="{'sex-color-change':isMan}" ></div>先生
									
								</div>
								<div class="sex-item" style="margin-right: 0;"  @click="changeSex">
									<div class="sex-color" :class="{'sex-color-change':!isMan}" ></div>女士
									
								</div>
							</div>
    					</div>
    				</div>
    				
    				<div class="sta-input1" v-if="!isLogin">
    					<div class="sta-input1-left">
    						<span>*</span> 验证码:
    					</div>
    					<div class="sta-input1-right">
    						<input type="text" v-model="yanzheng"  class="name-input num-input" />
    						<button class="getNum" @click="getNumCode" :disabled='dis'>{{Numbers}}</button>
    						
    					</div>
    				</div>
    				<div class="sta-input1" style="padding-top: 3px;">
    					<div class="sta-input1-left" style="line-height: 44px;">
    						<span>*</span> 预约时间:
    					</div>
    					<div class="sta-input1-right datePicker" v-if="showDate">
    						
						    <el-date-picker
						      v-model="dateTime"
						      type="datetime"
						      placeholder="选择日期时间"
						       :picker-options="pickerOptions0"
						       format="yyyy-MM-dd HH:mm">
						    </el-date-picker>
    					</div>
    				</div>
    				<div class="sta-input1" style="margin-top: 11px;">
    					<div class="sta-input1-left">
    						 备注:
    					</div>
    					<div class="sta-input1-right">
    						<input type="text" v-model="remark" class="name-input" placeholder="(选填)"/>
    					</div>
    				</div>
    				<div class="sta-input1 sta-order" >
    					<div class="confirmOrder" @click="nowButton">立即预约</div>
    				</div>
    			</div>
    			
    		</div>
    	</div>
	</div>
</template>

<script>
	import { objFn } from "../../plugins/axios.js";
	export default{
		props:{
			showalert:{
				type: Boolean,
                default: false,
			},
			houseMsg:{
				type:Object,
				default:null
			},
		},
		data(){
			return{
				userName:'',
				userPhone:'',
				yanzheng:'',
				isMan:true,
				isLogin:false,
				dis:false,
				Numbers:'获取验证码',
				dateTime:'',
				remark:'',
				renterSex:1,
				showDate:false,
				pickerOptions0: {
		            disabledDate(time) {
		            	return time.getTime() < Date.now() - 8.64e7;
		            }
		        },
		        isLogin:false
			}
		},
		computed:{
			isShow:function(){
				return this.showalert
			}
		},
		mounted(){
			this.showDate= true;
			var inputPhone = document.querySelector(".phone-input")
			inputPhone.onmousewheel= function(){
				return false;
			}
			this.isLogin = (function(){
				if(objFn.getStorage("token")){
					return true;
				}else{
					return false;
				}
			})()
			
		},
		methods:{
			changeSex(){
				this.isMan = !this.isMan;
				if(this.isMan){
					this.renterSex =1;
				}else{
					this.renterSex =0;
				}
			},
			timer: function () {
                if (this.Numbers > 0) {
                    this.dis = true;
                    this.Numbers--;
                    setTimeout(this.timer, 1000);
                }else{
                    this.dis = false;
                    this.Numbers="获取验证码"
                }
            },
			getNumCode(){//获取验证码
				var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if(this.userPhone == ""){
                    this.$showErrorTip("请输入手机号码")
                    return false;
                }
				if(!myreg.test(this.userPhone)) { 
                   this.$showErrorTip("手机号码有误")
                    return false; 
                } 
				this.Numbers = 60;
                this.timer();//倒计时
				
				objFn.Axios('user/smsAuthCodeController/unionSMSAuthCOde',"post", {
                    "phoneNum":this.userPhone//手机号
                },{interfaceType: "NEW_HOUSE"}).then((res) =>{
                    if(res.code == 200){
                    }else{
                       this.$showErrorTip(res.msg);
                    }
                })
			},
			
			//立即预约按钮
			nowButton(){
				var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
				
				//如果登录
				if(this.isLogin){
					if(!this.userName){
						this.$showErrorTip('请输入名字')
				        return;
					}else if(!myreg.test(this.userPhone)){
						this.$showErrorTip('请输入正确手机号码')
				        return;
					}else if(!this.dateTime){
						this.$showErrorTip('请输入约看时间')
				        return;
					}else{
						this.confirmOrderCheck()//先判断该房源是否已经约看
					}
				}else{
				//("没有登录")
					if(!this.userName){
						this.$showErrorTip('请输入名字')
				        return;
					}else if(!myreg.test(this.userPhone)){
						this.$showErrorTip('请输入正确手机号')
						
				        return;
					}else if(!this.yanzheng){
						this.$showErrorTip('请输入验证码')
				        return;
					}else if(!this.dateTime){
						
						this.$showErrorTip('请输入约看时间')
				        return;
					}else{
						this.buttons();//执行注册登录的接口
						
					}
				}
				
				
			},
			//登录接口
			buttons(){//登录接口
				objFn.Axios('user/userLoginController/unionlogin',"post",{
					"phoneNum":this.userPhone,
					"authCode":this.yanzheng,
					"source":"2"
				},{interfaceType: "NEW_HOUSE"}).then((res) =>{
					if(res.code == 200){
						localStorage.setItem("collectList",res.data.userInfo.collectList);//收藏列表
						localStorage.setItem("standbyToken",res.data.standbyToken);//登录的时候存一下standbyToken
						localStorage.setItem("token",res.data.token);
						
						//执行提交约看方法
						this.confirmOrderCheck()//首先判断该房源是否约看
					}else{
						this.$showErrorTip("登陆失败，请重试")
					}
					
				})
			},
			confirmOrderCheck(){
				objFn.Axios("agenthouseCutomer/CAppointController/isHaveAppoint",
		        "post",
		        {
		        	"houseId":this.houseMsg.hosueId,//房源id
					"roomId":this.houseMsg.roomId,//房间id
				},
		        {interfaceType: "RENT_HOUSE"}).then((res) => {
					if(res.data.hasAppoint == true){
						this.$alert("该房源您已约看过哦~再看看其他房源吧~~", {
							confirmButtonText: '确定',
								callback: action => {
							}
						});
						
					}else{//如果没有与看过该房间，执行约看接口
						this.confirmOrder()
					}
				})
			},
			
			//提交约看接口
			confirmOrder(){
				objFn.Axios('agenthouseCutomer/CAppointController/saveCAppoint',"post",{
					"houseId":this.houseMsg.hosueId,//房源id
					"roomId":this.houseMsg.roomId,//房间id
					"appointTime":this.dateTime,//看房时间
					"remark":this.remark,//留言
					"userName":this.userName,//姓名
					"phone":this.userPhone,//电话
					"sex":this.renterSex,//性别0男1女
					"sourceCode":"0020003"
				},{interfaceType: "RENT_HOUSE"}).then((res) => {
					if(res.code == 0){
						this.$showMsgTip("预约成功");
						this.onClose();
					}else{
						this.$showErrorTip("预约失败，请重试");
						this.onClose();
					}
				})
			},
			
			onClose(){
				this.userName='';
				this.userPhone='';
				this.yanzheng='';
				this.dateTime='';
				this.remark='';
                this.$emit('selected', null);
           },
		}
	}
</script>

<style lang="less" scoped>
	.alertMsg{
		width: 100%;
		height: 100%;
		position: fixed;
		background: rgba(0,0,0,0.4);
		/*display: none;*/
		z-index: 999;
		top: 0;
		left: 0;
		padding-top:20px;
		input::-webkit-outer-spin-button,
	    input::-webkit-inner-spin-button {
	        -webkit-appearance: none;
	    }
	    input[type="number"]{
	        -moz-appearance: textfield;
	    }
		.alert-content{
			width: 600px;
			/*height: 610px;*/
			padding-bottom: 30px;
			margin:50px auto 0;
			background-color: #fff;
			box-shadow: 0 5px 15px rgba(0,0,0,.5);
			border: 1px solid rgba(0,0,0,.2);
		    border-radius: 6px;
		    outline: 0;
		    .modal-header{
		    	height: 56px;
		    	box-sizing: border-box;
		    	padding: 15px;
				border-bottom: 1px solid #e5e5e5;
				.close{
					width: 20px;
					height: 20px;
					float: right;
					font-size: 20px;
					font-weight: 700;
					cursor:pointer;
				}
				.close:hover{
					color: #E24E5A;
				}
		    }
		    .orderHouse{
		    	height:112px;
		    	box-sizing: border-box;
		    	
		    	padding: 10px 0 0 93px;
		    	.orderHouse-left{
		    		width: 150px;
		    		height: 112px;
		    		float: left;
		    		img{
		    			width: 100%;
		    			height: 100%;
		    		}
		    	}
		    	.orderHouse-right{
		    		width: 270px;
		    		height: 112px;
		    		float: left;
		    		margin-left: 10px;
		    		box-sizing: border-box;
		    		padding-top: 10px;
		    		padding-left: 20px;
		    		.orderHouse-name{
		    			font-size: 16px;
		    			margin-top: 5px;
		    			span{
		    				font-size: 23px;
		    				color: #c9151e;
		    			}
		    		}
		    	}
		    	
		    }
		    .modal-body{
		    	/*height: 380px;*/
		    	box-sizing: border-box;
		    	padding: 20px 15px 15px ;
		    	.sta-input1{
		    		height: 36px;
		    		padding: 6px 0;
		    		margin-bottom: 5px;
		    		.sta-input1-left{
		    			width: 150px;
		    			height: 36px;
		    			font-size: 14px;
		    			line-height: 36px;
		    			color: #666666;
		    			float: left;
		    			text-align: right;
		    			.liuyan{
		    				width: 200px;
		    				height: 100px;
		    				border: 1px solid black;
		    				outline: none;
		    			}
		    			span{
		    				color: #ff643a;
		    			}
		    		}
		    		.sta-input1-right{
		    			width: 350px;
		    			height: 36px;
		    			float: left;
		    			margin-left: 10px;
		    			.name-input{
		    				width:100%;
		    				height: 100%;
		    				box-sizing: border-box;
		    				outline: none;
		    				border: 1px solid #bfcbd9;
						    border-radius: 4px;
						    color: #333;
						    text-indent: 10px;
						    font-size: 14px;
						    line-height: 36px;
						    transition: .5s;
		    			}
		    			.name-input:hover{
		    				border:1px solid #888;
		    			}
		    			.name-input:focus{
		    				border:1px solid #20a0ff;
		    			}
		    			.num-input{
		    				width: 55%;
		    			}
		    			.getNum{
		    				width: 39%;
		    				background: #4BB4BB;
		    				float: right;
						    height: 36px;
						    color: #fff;
						    text-align: center;
						    font-size: 16px;
						    line-height: 36px;
						    cursor: pointer;
						    outline: none;
						    border: #41B883;
		    			}
		    			.switchBox{
							width: 120px;
							height: 30px;
							box-sizing: border-box;
							padding: 2px;
							position: relative;
							float: left;
							margin-left: 20px;
							margin-top: 2px;
							cursor: pointer;
							.sex-item{
								float: left;
								height: 100%;
								line-height:22px;
								color:#666666;
								font-size: 14px;
								margin-right:10px;
								.sex-color{
									width: 20px;
									height: 20px;
									float: left;
									border: 1px solid #DDDDDD;
									border-radius: 50%;
									margin-right:3px;
								}
								.sex-color-change{
									background: #E34B3E;
								}
							}
							
						}
		    		}
		    		.datePicker{
		    			box-sizing: border-box;
		    			padding-top: 4px;
		    		}
		    		.confirmOrder{
		    			width: 348px;
		    			height: 45px;
		    			margin: auto;
		    			background: #c9161c;
		    			line-height: 45px;
		    			color: white;
		    			font-size: 18px;
		    			font-weight: 500;
		    			border-radius: 10px;
		    			text-align: center;
		    			cursor: pointer;
		    		}
		    	}
		    	.sta-order{
		    		margin-top: 20px;
		    	}
		    }
		}
	}
	
</style>