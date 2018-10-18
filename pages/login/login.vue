<template>
	<div class="login">
		<headeNav></headeNav>
		<div class="login-bgc">
			<div class="login-box">
				<h2>用户登录</h2>
				<input type="text" class="user-name">
				<div class="user-password">
					<input type="text" class="password">
					<div class="auth-code">
						获取验证码
					</div>
				</div>
				<div class="no-login">
					<span></span>
					<p>一周之内免登录</p>
				</div>
				<button class="login-button">登录</button>
			</div>
		</div>
		<BtnNav></BtnNav>
	</div>
</template>

<script>
	import headeNav from "~/components/headerNav.vue"
	import BtnNav from "~/components/bottom.vue"
export default{
		components: {
		    headeNav,
		    BtnNav
		},
	}
</script>

<style spoend lang="less">
	.login{
		.login-bgc{
			width: 100%;
			height: 6.67rem;
			position: relative;
			// left: 0;
			// right: 0;
			// top:0.7rem;
			// bottom:4rem;
			background:url("../../static/rent/rentIndex/login-bgc.jpg") no-repeat;
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
					border:1px solid #ccc;
				}
				.user-password{
					margin-top:0.2rem;
					width: 4.15rem;
					height: 0.52rem;
					.password{
						width: 2.85rem;
						height: 0.52rem;
						border:1px solid #ccc;
						float: left;
					}
					.auth-code{
						float: right;
						// margin-left: 0.15rem;
						width: 1.15rem;
						height: 0.52rem;
						background-color: red;
						color:#fff;
						line-height: 0.52rem;
						text-align: center;
					}
				}
				.no-login{
					margin-top:0.24rem;
					height: 0.3rem;
					span{
						float: left;
						width: 0.3rem;
						height: 0.3rem;
						margin-right: 0.18rem;
						border:1px solid #ccc;
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
					background-color: red;
					color:#fff;
					border:none;
					font-size: 0.3rem;
					line-height: 0.7rem;
					margin-top:0.36rem;
				}
				
			}
		}
	}
</style>