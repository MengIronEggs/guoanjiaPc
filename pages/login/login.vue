<template>
	<div class="login">
		<headeNav :NavActived="7"></headeNav>
		<div class="login-bgc">
			<div class="login-box">
				<h2>用户登录</h2>
				<input type="text" placeholder="请输入手机号" class="user-name" maxlength="11" v-model="userPhone">
				<div class="user-password">
					<input type="text" placeholder="请输入验证码" class="password" maxlength="6" v-model="authCode">
					<button class="auth-code" @click="getNumCode" :disabled='dis'>
						{{Numbers}}{{NumbersWord}}
					</button>
				</div>
				<div class="no-login" @click="freeLoginNum">
					<span>
						<img v-show="freeLonin" src="https://img.guoanfamily.com/rentPC/aboutus/checked.png" alt="" />
					</span>
					<p>一周之内免登录</p>
				</div>
				<button class="login-button" @click="loginBtn">登录</button>
			</div>
		</div>
		<BtnNav></BtnNav>
	</div>
</template>

<script>
	import { objFn } from "../../plugins/axios.js";
	import headeNav from "~/components/headerNav.vue"
	import BtnNav from "~/components/bottom.vue"
export default{
		components: {
		    headeNav,
		    BtnNav
		},
		data(){
			return{
				userPhone:"",		//手机号
                authCode:'',		//验证码
                Numbers:"获取验证码",	//倒计时数字
                dis:false,			//button按钮disabled
                freeLonin:false,	//一周内免登陆的参数
                NumbersWord:""
			}
		},
		methods:{
			freeLoginNum(){
				this.freeLonin = !this.freeLonin;
			},
			timer: function () {
                if (this.Numbers > 0) {
                    this.dis = true;
                    this.Numbers--;
                    setTimeout(this.timer, 1000);
                }else{
                    this.dis = false;
                    this.Numbers="获取验证码";
                    this.NumbersWord = "";
                }
            },
			getNumCode(){//获取验证码
				var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if(this.userPhone == ""){
                    this.$showErrorTip("请输入手机号码");
                    return false;
                }
				if(!myreg.test(this.userPhone)) { 
                   this.$showErrorTip("手机号码有误")
                    return false; 
                } 
				this.Numbers = 60;
				this.NumbersWord = "s后重新获取";
                this.timer();//倒计时
				
				objFn.Axios('user/smsAuthCodeController/unionSMSAuthCOde',"post", {
                    "phoneNum":this.userPhone//手机号
                },{interfaceType: "NEW_HOUSE"}).then((res) =>{
                })
			},
			//登录接口
			loginBtn(){
				var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if(!myreg.test(this.userPhone)){
					this.$showErrorTip("输入手机号")
			        return;
				}else if(!this.authCode){
					this.$showErrorTip("输入验证码")
			        return;
				}else{
					this.buttons();//执行注册登录的接口
				}
			},
			//登录接口
			buttons(){//登录接口
				objFn.Axios('user/userLoginController/unionlogin',"post",{
					"phoneNum":this.userPhone,
					"authCode":this.authCode,
					"freeLonin":this.freeLonin,
					"source":"2"
				},{interfaceType: "PERSONAL_CENTER"}).then((res) =>{
					if(res.code == 200){
						localStorage.setItem("collectList",res.data.userInfo.collectList);//收藏列表
						localStorage.setItem("standbyToken",res.data.standbyToken);//登录的时候存一下standbyToken
						localStorage.setItem("token",res.data.token);
						window.history.go(-1);
					}else{
						this.$showErrorTip('登录失败，请重试');
					}
					
				})
			},
		}
	}
</script>

<style spoend lang="less">
	.login{
		.login-bgc{
			width: 100%;
			height: 6.67rem;
			position: relative;
			background:url("https://img.guoanfamily.com/rentPC/rentIndex/login-bgc.jpg") no-repeat;
			background-size: cover;
			.login-box{
				width: 4.9rem;
				height: 4rem;
				position: absolute;
				right: 3.8rem;
				top:1.5rem;
				background-color: #fff;
				padding-top:0.32rem;
				padding-left: 0.38rem;
				h2{
					font-size: 0.3rem;
					color:#000;
					font-family: "宋体";
				}
				.user-name{
					margin-top:0.28rem;
					width: 4.15rem;
					height: 0.52rem;
					border:1px solid #DDDDDD;
					text-indent: 0.05rem;
				}
				.user-password{
					margin-top:0.2rem;
					width: 4.15rem;
					height: 0.52rem;
					
					.password{
						width: 2.4rem;
						height: 0.52rem;
						border:1px solid #DDDDDD;
						float: left;
						text-indent: 0.05rem;
					}
					.auth-code{
						float: right;
						// margin-left: 0.15rem;
						width: 1.55rem;
						height: 0.52rem;
						background-color: #E34B3E;
						color:#fff;
						line-height: 0.52rem;
						text-align: center;
						outline: none;
						border: 0;
						cursor: pointer;
					}
				}
				.no-login{
					margin-top:0.24rem;
					height: 0.3rem;
					span{
						display: block;
						float: left;
						width: 0.3rem;
						height: 0.3rem;
						margin-right: 0.18rem;
						border:1px solid #ccc;
						cursor: pointer;
						img{
							width: 0.2rem;
							height: 0.2rem;
							margin-top: 0.03rem;
							margin-left: 0.03rem;
							
						}
					}
					p{
						height: 0.3rem;
						display:inline-block;
						line-height: 0.3rem;
						color:#999;
					}
				}
				.login-button{
					width: 4.15rem;
					height: 0.7rem;
					background-color: #E34B3E;
					color:#fff;
					border:none;
					font-size: 0.3rem;
					line-height: 0.7rem;
					margin-top:0.36rem;
					cursor: pointer;
				}
				
			}
		}
	}
</style>