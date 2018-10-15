<style lang='less' scoped>
	.bannerBox{
		width: 100%;
		height: 9.5rem;
		box-sizing: border-box;
		background: url(../../static/rent/rentIndex/banner.png) no-repeat center;
		background-size:100% 100%;
		overflow: hidden;
		.bannerword{
			margin: 1rem 0 0 4.3rem;
			.p1{
				font-size: 0.6rem;
				color: white;
			}
			.p2{
				font-size: 0.2rem;
				color: white;
			}
		}
		.search-shadow{
			width: 100%;
			height:1.3rem;
			background:rgba(0,0,0,.5);
			margin:3.5rem 0 0 0 ;
			overflow:heidden;
			box-sizing: border-box;
			padding-top:0.2rem;
			.search-shadow-inner{
				width:9rem;
				height: 0.7rem;
				margin: auto ;
				background:rgba(0,0,0,.5);
				border-radius:0.35rem;
				input{
					width: 100%;
					height: 0.5rem;
					margin-top:0.1rem;
					outline:none;
					border:0;
					border-radius:0.25rem;
					text-indent:3em;
					font-size:0.16rem;
					color: #cccccc;
					background-image: url(../../static/rent/rentIndex/inputsearch.png);
					background-repeat:no-repeat ;
					background-position: 0.15rem 0.13rem;
    				background-size: 3%;
				}
			}
			.search-word{
				width:8.8rem;
				margin: 0.03rem auto 0;
				height: 0.26rem;
				line-height: 0.26rem;
				color: white;
				.search-li{
					float: left;
					font-size: 0.14rem;
					margin-right: 0.05rem;
				}
				.searchsubway{
					float: right;
					border-radius: 0.13rem;
					height: 0.26rem;
					line-height: 0.26rem;
					background: #e34b3e;
					width: 0.8rem;
					text-align: center;
					font-size: .14rem;
					cursor: pointer;
				}
			}
		}
	}
	.titleBox{
		width: 100%;
		height: 1.7rem;
		background: url(../../static/rent/rentIndex/title1.png) no-repeat center;
		box-sizing:border-box ;
		padding-top: 0.75rem;
		.p1{
			font-size: 0.36rem;
			text-align: center;
		}
		.p2{
			font-size: 0.12rem;
			color: #666666;
			text-align: center;
		}
	}
	.titleBox-tuijian{
		background: url(../../static/rent/rentIndex/Recommendation.png) no-repeat center;
	}
	.titleBox-story{
		background: url(../../static/rent/rentIndex/Guoanjia-Story.png) no-repeat center;
	}
	.rent-house{
		width: 10.7rem;
		margin: auto;
		height: 3.55rem;
		.rent-house-item{
			width: 2.4rem;
			height: 100%;
			float: left;
			margin-right: 0.35rem;
			&:last-child{
				margin-right: 0;
			}
			.rent-house-item-top{
				height: 1.8rem;
				width: 100%;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.rent-house-item-bottom{
				height: 1.7rem;
				width: 100%;
				border: 1px solid #ddd;
				border-top: 0;
				overflow: hidden;
				.rent-house-name{
					height: 0.2rem;
					font-size: 0.18rem;
					line-height: 0.2rem;
					margin-top: 0.15rem;
					box-sizing: border-box;
					padding-left: 0.1rem;
				}
				ul{
					overflow: hidden;
					.house-tags{
						float: left;
						padding: 0.03rem;
						background: #CCCCCC;
						color: white;
						font-size: 0.14rem;
						margin-left: 0.1rem;
						margin-top: 0.1rem;
					}
				}
				
				.hosue-address{
					font-size: 0.14rem;
					color: #999999;
					margin-top:0.1rem;
					box-sizing: border-box;
					padding-left: 0.1rem;
				}
				.house-price{
					border-top: 1px solid #ddd;
					height: 0.5rem;
					text-align: right;
					font-size: 0.26rem;
					line-height: 0.5rem;
					margin-top: 0.15rem;
					box-sizing: border-box;
					padding-right: 0.1rem;
					span{
						font-size: 0.18rem;
						
					}
				}
			}
		}
	}
	.content_w{
		overflow: hidden;
		.recommend-house-item{
			width: 3.8rem;
			height: 5.4rem;
			float: left;
			position:relative;
			margin-right:0.3rem;
			&:last-child{
				margin-right:0 ;
			}
			.recommend-top{
				width: 100%;
				height: 2.8rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.recommend-bottem{
				width: 3.2rem;
				height: 2.8rem;
				box-sizing: border-box;
				border: 1px solid #DDDDDD;
				background: white;
				margin: auto;
				position: relative;
				top: -0.3rem;
				left: 0;
				padding: 0.2rem;
				.recommend-titele{
					font-size: 0.18rem;
				}
				.recommend-des{
					font-size: 0.14rem;
					color: #999999;
					margin-top: 0.1rem;
				}
				.recommed-tags{
					margin-top:0.1rem ;
					ul{
						overflow: hidden;
						
					}
					li{
						float: left;
						padding: 0.03rem;
						background: #CCCCCC;
						color: white;
						font-size: 0.14rem;
						margin-right: 0.1rem;
						margin-top: 0.1rem;
					}
				}
				.recommend-address{
					color: #999999;
					height: 0.16rem;
					line-height: 0.16rem;
					overflow: hidden;
					margin-top:0.2rem ;
					.recommend-loge{
						float: left;
						height: 0.16rem;
						width: 0.13rem;
						margin-right: 0.1rem;
						background: url(../../static/rent/rentIndex/add-logo.png) no-repeat center;
						background-size:100% 100% ;
					}
				}
				.recommed-price{
					width: 1.2rem;
					height: 0.4rem;
					text-align: center;
					line-height: 0.4rem;
					font-size: 0.21rem;
					background: #e34b3e;
					color: white;
					position: absolute;
					right: -0.1rem;
					bottom: -0.1rem;
					span{
						font-size: 0.14rem;
					}
				}
			}
			
			
		}	
	}
	
	.searve{
		width: 100%;
		height: 4.8rem;
		background: url(../../static/rent/rentIndex/searvebg.png) no-repeat center;
		background-size:100% 100%;
		margin-top: 1.4rem;
		.searvr-num{
			width: 6.2rem;
			height: 1.8rem;
			background: rgba(0,0,0,.6);
			margin-top: 1rem;
			box-sizing: border-box;
			padding: 0.18rem 0.3rem;
			.p1{
				font-size: 0.36rem;
				color:white;
			}
		}
		.searve-word{
			float: left;
			width: 1.3rem;
			height: 0.8rem;
			color: white;
			box-sizing: border-box;
			padding-top: 0.1rem;
			p{
				margin-top: 0.07rem;
			}
		}
		.searve-word-des{
			float: right;
			height: 0.8rem;
			width: 4rem;
			.des1{
				float: left;
				padding: 0 0.25rem;
				text-align: center;
				border-right:1px solid white;
				.p1{
					font-size: 0.46rem;
					color: #E34B3E;
					span{
						font-size: 0.14rem;
					}
					
				}
				.p2{
					font-size: 0.14rem;
					color: white;
				}
				
			}
		}
		.lookhouse{
			width: 1.3rem;
			height: 0.4rem;
			text-align: center;
			line-height: 0.4rem;
			color: white;
			background: #E34B3E;
			margin-top: 0.2rem;
		}
	}
	/*国安家好故事*/
	.story-item{
		width: 25%;
		float: left;
		.story-item-img{
			width: 3rem;
			height: 2rem;
			background: url(../../static/rent/rentIndex/article01.png) no-repeat center;
			background-size:100% 100%;
		}
		.story-item-img2{
			background: url(../../static/rent/rentIndex/article02.png) no-repeat center;
			background-size:100% 100%;
		}
		.story-item-img3{
			background: url(../../static/rent/rentIndex/article03.png) no-repeat center;
			background-size:100% 100%;
		}
		.story-item-img4{
			background: url(../../static/rent/rentIndex/article04.png) no-repeat center;
			background-size:100% 100%;
		}
		.story-item-word{
			width: 3rem;
			height: 2rem;
			box-sizing: border-box;
			padding: 0.1rem 0.2rem;
			.p1{
				font-size: 0.2rem;
				margin-top: 0.3rem;
			}
			.p2{
				font-size: 0.14rem;
				color: #999999;
				margin-top: 0.2rem;
			}
		}
	}
	.entrust{
		width: 12rem;
		height: 5.6rem;
		margin: auto;
		overflow: hidden;
		.entrust-left{
			width: 5.6rem;
			height: 5.6rem;
			float: left;
			background: lightcoral;
		}
		.entrust-right{
			width: 5.9rem;
			height: 5.6rem;
			float: right;
			.entrust-right-top{
				height: 2rem;
				background: #E34B3E;
				box-sizing:border-box;
				padding:0.2rem;
				.rightTop-left{
					float: left;
					p{
						font-size: 0.42rem;
						color: white;
						margin-top: 0.12rem;
					}
					
				}
				.rightTop-right{
					float: left;
					margin: 0.18rem 0 0 0.5rem;
					p{
						font-size: 0.14rem;
						color: white;
						margin-top: 0.08rem;
					}
				}
			}
			.entrust-right-bottom{
				height: 3.6rem;	
				.entrust-right-bottom-item{
					height: 25%;
					.entrust-logo{
						width: 0.4rem;
						height: 0.4rem;
						float: left;
						background: url(../../static/rent/rentIndex/entrust1.png) no-repeat center;
						background-size:100%;
						margin-top: 0.25rem;
					}
					.entrust-logo2{
						background: url(../../static/rent/rentIndex/entrust2.png) no-repeat center;
						background-size:100%;
					}
					.entrust-logo3{
						background: url(../../static/rent/rentIndex/entrust3.png) no-repeat center;
						background-size:100%;
					}
					.entrust-logo4{
						background: url(../../static/rent/rentIndex/entrust4.png) no-repeat center;
						background-size:100%;
					}
					.entrust-word{
						float: left;
						margin-top: 0.23rem;
						width: 5.5rem;
						box-sizing: border-box;
						padding: 0 0.1rem;
						.p1{
							font-size: 0.2rem;
						}
						.p2{
							
							font-size: 0.12rem;
							color: #999999;
						}
					}
				}
			}
		}
	}
	.download-box{
		width: 100%;
		background: rgb(245,245,245);
		margin-top: 1.2rem;
		.download{
			width: 12rem;
			height: 3.2rem;
			margin: auto;
			position: relative;
			overflow: hidden;
			.download-left{
				float: left;
				.download-left-word1{
					font-size: 0.4rem;
					margin-top: 0.55rem;
				}
				.download-left-word2{
					font-size: 0.16rem;
					color: #CCCCCC;
					margin-top: 0.16rem;
				}
				.download-des{
					width: 4.5rem;
					height: 1rem;
					margin-top: 0.2rem;
					.download-des-item{
						width: 50%;
						height: 50%;
						float: left;
						.p1{
							font-size: 0.2rem;
						}
						.p2{
							font-size: 0.14rem;
							color: #999999;
						}
					}
				}
			}
			.download-middle{
				height: 1.5rem;
				width: 3.8rem;
				float: left;
				margin-top: 1.2rem;
				margin-left: 0.2rem;
				.downleft{
					width: 1.8rem;
					float: left;
				}
				.download-andirod{
					width: 1.8rem;
					height: 0.65rem;
					float: left;
					background: url(../../static/rent/rentIndex/andirod.png) no-repeat center;
					background-size:100% 100% ;
					margin-top: 0.16rem;
				}
				.download-ios{
					width: 1.8rem;
					height: 0.65rem;
					float: left;
					background: url(../../static/rent/rentIndex/ios.png) no-repeat center;
					background-size:100% 100% ;
					
				}
				.erweima{
					width: 1.5rem;
					height: 1.5rem;
					float: right;
					background: url('https://media.guoanfamily.com/rent/static/HomePage/erweimadownload.png') no-repeat center;
					background-size:100% 100% ;
				}
			}
			.phone{
				width: 2.6rem;
				height: 100%;
				float: right;
				background: url(../../static/rent/rentIndex/phone.png) no-repeat center;
				background-size:100% 100%;
				position: absolute;
				bottom: -0.4rem;
				right: 0.1rem;
			}
		}
	}
	
</style>
<template>
	<div>
		<!--banner-->
		<div class="bannerBox">
			<div class="bannerword">
				<p class="p1">专属管家为您</p>
				<p class="p1">贴心服务！</p>
				<p class="p2">拎包入住●品牌家具家电</p>
				<p class="p2">智能门锁●专业保洁●专业维修</p>
			</div>
			<div class="search-shadow">
				<div class="search-shadow-inner">
					<input type="text" placeholder="请输入您想要居住的小区" />
				</div>
				<div class="search-word">
					<ul>
						<li class="search-li">热门区域：</li>
						<li class="search-li search-li-ex" v-for="(item,index) in searcharea" :key='index'>{{item}}</li>
						<li class="search-li" style="margin-left: .3rem;">热门搜索：</li>
						<li class="search-li" v-for="(item,index) in searchhouse" :key='item'>{{item}}</li>
					</ul>
					<div class="searchsubway">地铁找房</div>
					<div class="searchsubway" style="margin-right: 0.1rem;">地图找房</div>
				</div>
			</div>
		</div>
		<!--国安家租房-->
		<div class="titleBox">
			<p class="p1">国安家租房</p>
			<p class="p2">梦在山海间 住在风景里</p>
		</div>
		<div class="rent-house">
			<div class="rent-house-item" v-for="item in 4">
				<div class="rent-house-item-top">
					<img src="http://img.guoanfamily.com/20180413123958_%E5%8D%A7%E5%AE%A4B1.jpg?imageView2/0/w/388/h/276" alt="" />
				</div>
				<div class="rent-house-item-bottom">
					<div class="rent-house-name">
						梨园  万盛北里  3居  C卧室
					</div>
					<ul>
						<li class="house-tags">朝南</li>
						<li class="house-tags">阳光好</li>
						<li class="house-tags">面朝大海</li>
					</ul>
					<div class="hosue-address">北京市通州区万盛北里</div>
					<div class="house-price">3600 <span>元/月</span></div>
				</div>
			</div>
		</div>
		
		<!--推荐房源-->
		<div class="titleBox titleBox-tuijian">
			<p class="p1">推荐房源</p>
			<p class="p2">梦在山海间 住在风景里</p>
		</div>
		<div class="recommend-house">
			<div class="content_w">
				<div class="recommend-house-item" v-for="item in 3">
					<div class="recommend-top">
						<img src="http://img.guoanfamily.com/20180802195522_WechatIMG66.jpeg?imageView2/0/w/388/h/276" alt="" />
					</div>
					<div class="recommend-bottem">
						<p class="recommend-titele">朝青 国美第一城四居</p>
						<div class="recommend-des">
							出小区对面即呼家楼宾馆，距离万通中心700米左右，拥有便利店、星巴克、购物街、美食店等便利生活场所。里屯不到3公里，购物出行娱乐方便快捷。
						</div>
						<div class="recommed-tags">
							<ul>
								<li>朝南</li>
								<li>阳光充足</li>
								<li>精装修</li>
							</ul>
						</div>
						<div class="recommend-address">
							<div class="recommend-loge"></div>
							<div class="recommend-address-word">出小区对面即呼家楼宾馆，距</div>
						</div>
						<div class="recommed-price">
							5500 <span>元/月</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!--高品质服务公寓-->
		<div class="searve">
			<div class="content_w">
				<div class="searvr-num">
					<p class="p1">高品质服务公寓</p>
					<div>
						<div class="searve-word">
							<p>实景拍摄让您体验</p>
							<p>身临其境版的感受</p>
						</div>
						<div class="searve-word-des">
							<div class="des1">
								<p class="p1">0</p>
								<p class="p2">中介费</p>
							</div>
							<div class="des1">
								<p class="p1">360°</p>
								<p class="p2">管家服务</p>
							</div>
							<div class="des1" style="border: 0;padding-right: 0;">
								<p class="p1">1500<span>元</span></p>
								<p class="p2">每平米装修标准</p>
							</div>
						</div>
					</div>
				</div>
				<div class="lookhouse">3D实景看房</div>
			</div>
		</div>
		
		
		<!--国安家故事-->
		<div class="titleBox titleBox-story">
			<p class="p1">国安家故事</p>
			<p class="p2">梦在山海间 住在风景里</p>
		</div>
		<div>
			<div class="content_w">
				<div class="story-item">
					<div class="story-item-img"></div>
					<div class="story-item-word">
						<p class="p1">有温暖的地方才是家</p>
						<p class="p2">品质不好，没有温度，不够美与人性化的东西，绝不可能出现在我们的作品中。</p>
					</div>
				</div>
				<div class="story-item">
					<div class="story-item-word">
						<p class="p1">从要求品质到追求品牌</p>
						<p class="p2">用稳定、安全、高颜值、承包你的租房痛点。</p>
					</div>
					<div class="story-item-img story-item-img2"></div>
				</div>
				<div class="story-item">
					<div class="story-item-img story-item-img3"></div>
					<div class="story-item-word">
						<p class="p1">百万房租免费送</p>
						<p class="p2">今年十一让我们来个改变之旅参加国安家品质租住节领取价值3500元礼包为自己找一个理想家~</p>
					</div>
				</div>
				<div class="story-item">
					<div class="story-item-word">
						<p class="p1">点亮北京</p>
						<p class="p2">在这个日渐寒冷的深秋时刻，为这座古老又崭新的城市，与在这城市漂泊的每一个认真生活的年轻人，点亮等你回家的灯火。</p>
					</div>
					<div class="story-item-img story-item-img4"></div>
				</div>
			</div>
		</div>
		<!--业主委托-->
		<div class="titleBox titleBox-story">
			<p class="p1">业主委托</p>
			<p class="p2">梦在山海间 住在风景里</p>
		</div>
		<div>
			<div class="entrust">
				<div class="entrust-left">
					
				</div>
				<div class="entrust-right">
					<div class="entrust-right-top">
						<div class="rightTop-left">
							<p class="p1">您的信任托付</p>
							<p class="p1">我们悉心照料</p>
						</div>
						<div class="rightTop-right">
							<p class="p1">租期一站式托管</p>
							<p class="p1">安全放心、稳定收益</p>
							<p class="p1">省时省心，国安家更懂你</p>
							<p class="p1">您的资产管理专家</p>
						</div>
					</div>
					<div class="entrust-right-bottom">
						<div class="entrust-right-bottom-item">
							<div class="entrust-logo"></div>
							<div class="entrust-word">
								<p class="p1">出租零费心生活更安逸</p>
								<p class="p2">为您代劳所有出租过程中的琐碎事务，您唯一需要做的是只有定期查收租金。</p>
							</div>
						</div>
						<div class="entrust-right-bottom-item">
							<div class="entrust-logo entrust-logo2"></div>
							<div class="entrust-word">
								<p class="p1">专业养护服务降低资产折旧率</p>
								<p class="p2">引入“房屋保洁和定期检修”两项资产保养服务确保您的房产得到周全的善待。</p>
							</div>
						</div>
						<div class="entrust-right-bottom-item">
							<div class="entrust-logo entrust-logo3"></div>
							<div class="entrust-word">
								<p class="p1">收益稳定丰厚 生活怡然自得</p>
								<p class="p2">定期支付租金，保障您获得持续稳定的收益</p>
							</div>
						</div>
						<div class="entrust-right-bottom-item">
							<div class="entrust-logo entrust-logo4" style="margin-top: 0.4rem;"></div>
							<div class="entrust-word">
								<p class="p1">装修零投入省心又安心</p>
								<div class="p2">采用环保材料精装，提升房产价值，房屋托管到期后把维护良好的装修赠与您。实现回报最大化。</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="download-box">
			<div class="download">
				<div class="download-left">
					<div class="download-left-word1">国安家APP全新改版</div>
					<div class="download-left-word2">New Version On The Line</div>
					<div class="download-des">
						<div class="download-des-item">
							<div class="p1">页面新换装</div>
							<div class="p2">新房、租房各种需求一键直达</div>
						</div>
						<div class="download-des-item">
							<div class="p1">委托新入口</div>
							<div class="p2">省心、省时，更快成为房东</div>
						</div>
						<div class="download-des-item">
							<div class="p1">签约新体验</div>
							<div class="p2">约看、租约全新改版，效率更高</div>
						</div>
						<div class="download-des-item">
							<div class="p1">展示更直观</div>
							<div class="p2">VR看房、弹幕，让您省心挑好房</div>
						</div>
					</div>
				</div>
				<div class="download-middle">
					<div class="downleft">
						<div class="download-ios"></div>
						<div class="download-andirod"></div>
					</div>
					
					<div class="erweima"></div>
				</div>
				<div class="phone"></div>
			</div>
		</div>
		
		
		<div style="height: 2rem;"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				searcharea:['东城','朝阳','海淀','西城','通州','呼家楼','国贸'],
				searchhouse:['林奥嘉园','安和家园','通惠家园','玉璞家园']
			}
		},
		asyncData(){

        },
        mounted() {
            
        },
	}
</script>