<style lang='less' scoped>
	.bannerBox{
		width: 100%;
		height: 9.5rem;
		box-sizing: border-box;
		background: url(https://img.guoanfamily.com/rentPC/rentIndex/banner.jpg) no-repeat center;
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
		.banner-search{
			margin-top:2.6rem ;
		}
	}
	.titleBox{
		width: 100%;
		height: 1.7rem;
		background: url(https://img.guoanfamily.com/rentPC/rentIndex/title1.png) no-repeat center;
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
	.titleBox1{
		margin-top: 0.3rem;
	}
	.titleBox-tuijian{
		background: url(https://img.guoanfamily.com/rentPC/rentIndex/Recommendation.png) no-repeat center;
	}
	.titleBox-story{
		background: url(https://img.guoanfamily.com/rentPC/rentIndex/Guoanjia-Story.png) no-repeat center;
	}
	.gaj-renthouse{
		width: 12rem;
		margin: auto;
		position: relative;
		.rent-pre{
			width: 0.4rem;
			height: 0.4rem;
			background: url("https://img.guoanfamily.com/rentPC/rentindex/arrow12.png") no-repeat center;
			background-size:100% 100% ;
			
			cursor: pointer;
			position: absolute;
			top: 50%;
			left: 0;
			margin-top: -0.2rem;
			transition: .3s;
		}
		.rent-pre:hover{
			background: url("https://img.guoanfamily.com/rentPC/rentindex/arrow11.png") no-repeat center;
			background-size:100% 100% ;
			transition: .3s;
		}
		.rent-next{
			width: 0.4rem;
			height: 0.4rem;
			background: url("https://img.guoanfamily.com/rentPC/rentindex/arrow22.png") no-repeat center;
			background-size:100% 100% ;
		
			cursor: pointer;
			position: absolute;
			top: 50%;
			right: 0;
			margin-top: -0.2rem;
			transition: .3s;
		}
		.rent-next:hover{
			background: url("https://img.guoanfamily.com/rentPC/rentindex/arrow21.png") no-repeat center;
			background-size:100% 100% ;
			transition: .3s;
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
				cursor:pointer; 
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
					border: 0.01rem solid #ddd;
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
						height: 0.2rem;
						line-height: 0.2rem;
						font-size: 0.14rem;
						color: #999999;
						margin-top:0.1rem;
						box-sizing: border-box;
						padding-left: 0.1rem;
						overflow: hidden;
						
					}
					.house-price{
						border-top: o solid #ddd;
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
	}
	
	
	
	
	
	
	
	.rent-house :last-child{
		margin-right:0 ;
	}
	.content_w{
		overflow: hidden;
		.recommend-house-item{
			width: 3.8rem;
			height: 5.4rem;
			float: left;
			position:relative;
			margin-right:0.3rem;
			cursor: pointer;
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
				border: 0.01rem solid #DDDDDD;
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
					height: 1rem;
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
						background: url(https://img.guoanfamily.com/rentPC/rentIndex/add-logo.png) no-repeat center;
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
		background: url(https://img.guoanfamily.com/rentPC/rentIndex/searvebg.jpg) no-repeat center;
		background-size:100% 100%;
		margin-top: 1.4rem;
		.searvr-num{
			width: 6.9rem;
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
			width: 1.6rem;
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
			width: 4.5rem;
			.des1{
				float: left;
				padding: 0 0.25rem;
				text-align: center;
				border-right:0.01rem solid white;
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
			cursor: pointer;
		}
	}
	/*国安家好故事*/
	.story-item{
		width: 25%;
		float: left;
		cursor: pointer;
		.story-item-img{
			width: 3rem;
			height: 2rem;
			background: url(https://img.guoanfamily.com/rentPC/rentIndex/article01.png) no-repeat center;
			background-size:100% 100%;
		}
		.story-item-img2{
			background: url(https://img.guoanfamily.com/rentPC/rentIndex/article02.png) no-repeat center;
			background-size:100% 100%;
		}
		.story-item-img3{
			background: url(https://img.guoanfamily.com/rentPC/rentIndex/article03.png) no-repeat center;
			background-size:100% 100%;
		}
		.story-item-img4{
			background: url(https://img.guoanfamily.com/rentPC/rentIndex/article04.png) no-repeat center;
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
		cursor: pointer;
		.entrust-left{
			width: 5.6rem;
			height: 5.6rem;
			float: left;
			img{
				width: 100%;
				height: 100%;
			}
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
						background: url(https://img.guoanfamily.com/rentPC/rentIndex/entrust1.png) no-repeat center;
						background-size:100%;
						margin-top: 0.25rem;
					}
					.entrust-logo2{
						background: url(https://img.guoanfamily.com/rentPC/rentIndex/entrust2.png) no-repeat center;
						background-size:100%;
					}
					.entrust-logo3{
						background: url(https://img.guoanfamily.com/rentPC/rentIndex/entrust3.png) no-repeat center;
						background-size:100%;
					}
					.entrust-logo4{
						background: url(https://img.guoanfamily.com/rentPC/rentIndex/entrust4.png) no-repeat center;
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
					background: url(https://img.guoanfamily.com/rentPC/rentIndex/andirod.png) no-repeat center;
					background-size:100% 100% ;
					margin-top: 0.16rem;
				}
				.download-ios{
					width: 1.8rem;
					height: 0.65rem;
					float: left;
					background: url(https://img.guoanfamily.com/rentPC/rentIndex/ios.png) no-repeat center;
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
				background: url(https://img.guoanfamily.com/rentPC/rentIndex/phone.png) no-repeat center;
				background-size:100% 100%;
				position: absolute;
				bottom: -0.4rem;
				right: 0.1rem;
			}
		}
	}
	.lookmore{
		width: 2.5rem;
		height: 0.5rem;
		margin:0.5rem auto 0;
		border: 1px solid #DDDDDD;
		font-size:0.14rem ;
		color: #999999;
		text-align: center;
		line-height: 0.5rem;
		cursor: pointer;
	}
	.lookmore:active{
		background: #E34B3E;
		color: white;
	}
	
</style>
<template>
	<div>
		<!--头部-->
		<headeNav :NavActived="4"></headenav>
		<!--banner-->
		<div class="bannerBox fadeIn">
			<div class="bannerword">
				<p class="p1">专属管家为您</p>
				<p class="p1">贴心服务！</p>
				<p class="p2">拎包入住●品牌家具家电</p>
				<p class="p2">智能门锁●专业保洁●专业维修</p>
			</div>
			<div class="banner-search">
				<SearchInput></SearchInput>
			</div>
			
			
			
		</div>
		
		<!--国安家租房-->
		<div class="titleBox titleBox1">
			<p class="p1">国安家租房</p>
			<p class="p2">梦在山海间 住在风景里</p>
		</div>
		<div class="gaj-renthouse">
			<div class="rent-pre"></div>
			
			<div class="rent-house">
				<div class="rent-house-item fadeIn" @click="gotodeatile(item)" v-for="(item,index) in list1" :key="index" v-if="index < 4">
					<div class="rent-house-item-top">
						<img :src="item.image" alt="" />
					</div>
					<div class="rent-house-item-bottom">
						<div class="rent-house-name">
							{{item.houseName}} {{item.houseName == '东大桥店'?item.roomFloor:item.roomName}}{{item.roomNumber}}
						</div>
						<ul>
							<li class="house-tags" v-for="(taglist,tagindex) in item.tags" :key="tagindex">{{taglist}}</li>
							
						</ul>
						<div class="hosue-address" :title="item.communityAddress">{{item.communityAddress}}</div>
						<div class="house-price">{{item.price}} <span>元/月</span></div>
					</div>
				</div>
			</div>
			<div class="rent-next"></div>
		</div>
		
		<div>
			<div class="lookmore" @click="lookmore"> >> 更多精品房源 << </div>
		</div>
		<!--推荐房源-->
		<div class="titleBox titleBox-tuijian">
			<p class="p1">推荐房源</p>
			<p class="p2">梦在山海间 住在风景里</p>
		</div>
		<div class="recommend-house">
			<div class="content_w">
				<div class="recommend-house-item" v-for="(item,index) in list1" :key="index" @click="gotodeatile(item)" v-if="index > 3">
					<div class="recommend-top">
						<img :src="item.image" alt="" />
					</div>
					<div class="recommend-bottem">
						<p class="recommend-titele">{{item.houseName}} {{item.houseName == '东大桥店'?item.roomFloor:item.roomName}}{{item.roomNumber}}</p>
						<div class="recommend-des">
							{{item.surrounding}}
						</div>
						<div class="recommed-tags">
							<ul>
								<li v-for="(taglist,tagindex) in item.tags" :key="tagindex">{{taglist}}</li>
							
							</ul>
						</div>
						<div class="recommend-address">
							<div class="recommend-loge"></div>
							<div class="recommend-address-word">{{item.communityAddress}}</div>
						</div>
						<div class="recommed-price">
							{{item.price}} <span>元/月</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<div class="lookmore" @click="lookmore"> >> 更多精品房源 << </div>
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
				<div class="lookhouse" @click="gotolook">3D实景看房</div>
			</div>
		</div>
		
		
		<!--国安家故事-->
		<div class="titleBox titleBox-story titleBox1">
			<p class="p1">国安家故事</p>
			<p class="p2">梦在山海间 住在风景里</p>
		</div>
		<div>
			<div class="content_w">
				<div class="story-item" @click="toartical01">
					<div class="story-item-img"></div>
					<div class="story-item-word">
						<p class="p1">有温暖的地方才是家</p>
						<p class="p2">品质不好，没有温度，不够美与人性化的东西，绝不可能出现在我们的作品中。</p>
					</div>
				</div>
				<div class="story-item" @click="toartical02">
					<div class="story-item-word">
						<p class="p1">从要求品质到追求品牌</p>
						<p class="p2">用稳定、安全、高颜值、承包你的租房痛点。</p>
					</div>
					<div class="story-item-img story-item-img2"></div>
				</div>
				<div class="story-item" @click="toartical03">
					<div class="story-item-img story-item-img3"></div>
					<div class="story-item-word">
						<p class="p1">百万房租免费送</p>
						<p class="p2">今年十一让我们来个改变之旅参加国安家品质租住节领取价值3500元礼包为自己找一个理想家~</p>
					</div>
				</div>
				<div class="story-item" @click="toartical04">
					<div class="story-item-word">
						<p class="p1">点亮北京</p>
						<p class="p2">在这个日渐寒冷的深秋时刻，为这座古老又崭新的城市，与在这城市漂泊的每一个认真生活的年轻人，点亮等你回家的灯火。</p>
					</div>
					<div class="story-item-img story-item-img4"></div>
				</div>
			</div>
		</div>
		<!--业主委托-->
		<div class="titleBox titleBox-story titleBox1">
			<p class="p1">业主委托</p>
			<p class="p2">梦在山海间 住在风景里</p>
		</div>
		<div>
			<div class="entrust" @click="toEntrust">
				<div class="entrust-left">
					<img src="https://img.guoanfamily.com/rentPC/rentIndex/weituo.png" alt="" />
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
		<BtnNav></BtnNav>
	</div>
</template>

<script>
	import { objFn } from "../../plugins/axios.js";
	import headeNav from "~/components/headerNav.vue"
	import BtnNav from "~/components/bottom.vue"
	import SearchInput from "~/components/SearchInput.vue"
	export default{
		components: {
		    headeNav,
		    BtnNav,
		    SearchInput
		},
		data(){
			return{
				list1:[],
				list2:[]
			}
		},
        beforeCreate(){
          	objFn.Axios(
		        "agenthouseCutomer/common/homePage",
		        "post",
		        {"size":"7"},
		        {interfaceType: "RENT_HOUSE"}).then(res => {
	            	this.list1= res.data.roomList.map((item)=>{
	            		item.image = objFn.concatFileUrl(item.image,240,180);
	            		item.tags =item.tags.split(",",2);
	            		if(item.surrounding && item.surrounding.length>30){
	            			item.surrounding = item.surrounding.substring(0,60)+"..."
	            		}
	            		return item;
	            	})
		    	})
        },
        mounted(){
        },
        methods:{
        	//跳转到房源列表
        	lookmore(){
        		this.$router.push({path:'/rent/rentList/'})
        	},
        	//业主委托
        	toEntrust(){
        		this.$router.push({path:'/rent/ownerBig'})
        	},
        	toartical01(){
        		window.open("https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&amp;mid=2247484366&amp;idx=1&amp;sn=ece2b438cd3a18ba0b8efe44e7165a4b&amp;chksm=ea191850dd6e91462d38197e72d842e08b3c2052013b7a297adfbb690f037fe26d80fb21a97c#rd");  
        	},
        	toartical02(){
        		window.open("https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&amp;mid=2247484345&amp;idx=1&amp;sn=271c9ca5e837a7506749f864ae7e4960&amp;chksm=ea191827dd6e91311b6eba03dcc7677a1a44480c262dacdb19020ccfb51af4ab61b7b32d41d5#rd");  
        	},
        	toartical03(){
        		window.open("https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&mid=2247484447&idx=1&sn=5742f69dbacf8664df9cab90c712c043&chksm=ea191f81dd6e969713ea45ba70a9837cef94ed37f2dd6f93837ce509ac7704fd3ce9c2140afe#rd");  
        	},
        	toartical04(){
        		window.open("https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&mid=2247484478&idx=1&sn=dd7412962e6c1fa477d9c821e8d04205&chksm=ea191fa0dd6e96b674e15a0edd3b8fa6f7ffc9d117519bbaea8592a65454ab75ec99f0199fb6#rd");  
        	},
        	//3D实景看房
        	gotolook(){
        		this.$router.push({path:'/rent/rentList/'})
        		console.log("3D实景看房")
        	},
        	//跳转至详情页面
        	gotodeatile(item){
        		this.$router.push({path:"/rent/housedetail",query:{id:item.id,productType:item.productType}})
        	}
        }
	}
</script>