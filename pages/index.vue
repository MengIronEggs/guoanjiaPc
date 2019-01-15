<template>
	<div>
		<!--头部-->
		<div style="width:100%;height:auto;position:absolute;left:0;top:0;z-index:10">
            <headeNav :NavActived="1"></headeNav>
        </div>
        <div style="height: 60px;"></div>
		<!--banner-->
		<div class="bannerBox fadeIn">
			<div class="firstSwiper">
		        <div class="mySwipers" ref="mySwipers21" v-swiper:mySwiper="swiperOption2">
		            <div class="swiper-wrapper">
		                <div class="swiper-slide" v-for="(item,index) in bannerList">
		                    <img class="banner-img" :src="item" alt="" />
		                    <img class="wordimg" style="position: absolute;z-index: 10;top: 10%;left: 30%;" v-if="index == '0'" src="https://img.guoanfamily.com/guoanjiaPC/static/index/word1.png" alt="" />
		                    <img class="wordimg" style="position: absolute;z-index: 10;top: 10%;left: 30%;" v-else src="https://img.guoanfamily.com/guoanjiaPC/static/index/word2.png" alt="" />
		                </div>

		            </div>
		        </div>
		   </div>
			<div class="banner-search">
				<SearchInput></SearchInput>
			</div>
		</div>

		<!--快捷按钮-->
		<div class="quick-list">
			<div class="quick-item quick-item1" @click="gotoNewhouse">
				<div class="iem-box iem-box1"></div>
				<p class="p1">新房服务</p>
				<p class="p2">你选择远方的风景，我们为你风雨兼程</p>
			</div>
			<div class="quick-item quick-item2" @click="toToMap">
				<div class="iem-box iem-box2"></div>
				<p class="p1">地图找房</p>
				<p class="p2">为您精准定位，周边设施尽在掌握</p>
			</div>
			<div class="quick-item quick-item3" @click="toToSubway">
				<div class="iem-box iem-box3"></div>
				<p class="p1">地铁找房</p>
				<p class="p2">房源临近地铁，交通出行更加便捷</p>
			</div>
			<div class="quick-item quick-item4" @click="gotoEchibiton">
				<div class="iem-box iem-box4"></div>
				<p class="p1">展示中心</p>
				<p class="p2">款待重要的人，会商重要的事</p>
			</div>
		</div>
		<!--国安家新房-->
		<div class="title">
			<p class="p1">国安家新房</p>
			<p class="p2">梦在山海间 住在风景里</p>
		</div>
		<div class="newHouse-content">
			<div class="newhouse1" @click="gotoNewHouse">
				<div class="shadow-detaile">
					<p class="p1">雅居乐·御宾府</p>
					<p class="p2">YALEJU</p>
					<p class="p3">天津市</p>
					<p class="p4">21000 <span>元/㎡</span></p>

				</div>
			</div>
			<div style="width: 370px;height: 100%;float: left;">
				<div class="newhouse1 newhouse2" @click="gotoNewHouse2">
					<div class="shadow-detaile">
						<p class="p1">大成·玉墅湾</p>
						<p class="p2">ZHANGJIAKOU</p>
						<p class="p3">河北省-张家口市</p>
						<p class="p4">13000 <span>元/㎡</span></p>
					</div>
				</div>
				<div class="newhouse1 newhouse3" @click="gotoNewHouse3">
					<div class="shadow-detaile">
						<p class="p1">首开国风海岸</p>
						<p class="p2">HULUDAO</p>
						<p class="p3">辽宁省-葫芦岛市</p>
						<p class="p4">5500 <span>元/㎡</span></p>
					</div>
				</div>
			</div>

			<div class="newhouse1 newhouse4" @click="gotoNewHouse4">
				<div class="shadow-detaile">
					<p class="p1">峨眉秀湖第一城</p>
					<p class="p2">EMEIXIUHU</p>
					<p class="p3">四川省乐山市</p>
					<p class="p4">7500<span>元/㎡</span></p>
				</div>
			</div>
		</div>
		<div>
			<div class="lookmore" @click="gotoNewhouse"> >> 更多精品房源 << </div>
		</div>

		<!--国安家租房-->
		<div class="title">
			<p class="p1">国安家租房</p>
			<p class="p2">认真的公寓 犒赏认真生活的人</p>
		</div>
		<div class="rentHouse-content">
			<div class="rent-item" v-for="(item,index) in roomData":key="index" @click="gotoHouse(item)">
				<div class="room-img">
					<img :src="item.roomFirstImage" alt="" />
				</div>
				<div class="rent-detaile">
					<p class="house-name" :title="item.communityName+item.houseName+item.roomName+'房间'">{{item.communityName}}-{{item.houseName}}{{item.roomName+'房间'}}</p>
					<div class="rent-tags">
						<span v-for="(tagItem,tagindex) in item.tags" :key="tagindex">{{tagItem}}</span>
					</div>
					<p class="room-price"><span class="span1">￥</span>{{item.price}} <span class="span2">查看详情>></span></p>
				</div>

			</div>
		</div>
		<div>
			<div class="lookmore" @click="gotoRenthouse"> >> 更多精品房源 << </div>
		</div>
		<!--高品质服务公寓-->
		<div class="searve"  @click="gotolook">
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

		<!--展示中心-->
		<div class="title">
			<p class="p1">展示中心</p>
			<p class="p2">款待重要的人 会商重要的事</p>
		</div>
		<div class="exhibition" @click="gotoEchibiton">
			<div class="exhibition-left">
				<p class="p1">款待重要的人</p>
				<p class="p1">会商重要的事</p>
				<p class="p2">预约咨询电话</p>
				<p class="p3">010-59070532</p>
				<p class="p4">为商务会议团建而生</p>
				<p class="p4">更是私人会客的绝佳场所</p>
				<p class="p4">在此展开有关生意与生活的对话</p>
				<p class="p5">在繁华心中，入席一场盛宴</p>
			</div>
			<div class="exhibition-img">
				<img src="https://img.guoanfamily.com/guoanjiaPC/exhibition3.png" alt="" />
			</div>
			<div class="exhibition-img">
				<img src="https://img.guoanfamily.com/guoanjiaPC/exhibition2.png" alt="" />
			</div>
			<div class="exhibition-img">
				<img src="https://img.guoanfamily.com/guoanjiaPC/exhibition4.png" alt="" />
			</div>
			<div class="exhibition-img">
				<img src="https://img.guoanfamily.com/guoanjiaPC/exhibition1.png" alt="" />
			</div>
		</div>
		<div class="download-box">
			<div class="download" @click="gotodown">
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
					<div class="download-middle">
						<div class="downleft">
							<div class="download-ios" ></div>
							<div class="download-andirod" ></div>
						</div>

						<div class="erweima"></div>
					</div>
				</div>

				<img class="phone-img" src="https://img.guoanfamily.com/guoanjiaPC/img/phone.png" alt="" />
			</div>
		</div>
		<BtnNav></BtnNav>
		<!--固定在底部的footer-->
		<div class="fix-footer" @click="gotodown">
			<div class="fix-footer-main bounceIn">
				<img class="footer-img" src="https://img.guoanfamily.com/rentPC/rentindex/footerimg2.png" alt="" />
				<div class="footer-code">
					<img src="https://img.guoanfamily.com/rentPC/rentindex/code.png" alt="" />
				</div>
				<div class="footer-box">
					<p class="p1">国安家APP全新改版</p>
					<p class="p2">页面换新装</p>
					<p class="p2" style="text-align: right;">委托新入口</p>
					<p class="p2">签约新体验</p>
					<p class="p2" style="text-align: right;">展示更直观</p>
				</div>
				<div class="close" @click="closebottom($event)">
					<div class="close-inner">
						×
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>

	import headeNav from "~/components/headerNav.vue"
	import SearchInput from "~/components/SearchInput.vue"
	import BtnNav from "~/components/bottom.vue"
	import { objFn } from "../plugins/axios.js";
	export default{
		components: {
		    headeNav,
		  	SearchInput,
		  	BtnNav



		},
		data(){
			var _this = this;
			return{
				roomData:[],
				newData:[],
				bannerList:["https://img.guoanfamily.com/guoanjiaPC/static/index/banner1.jpg",
					"https://img.guoanfamily.com/guoanjiaPC/static/index/banner2.jpg"
				],
				//轮播图
				swiperOption2: {
	                spaceBetween: 30,
	                effect: 'fade',
	                loop: false,
	                speed:600,
	                autoplay:{
	                    delay: 3000,
	                    disableOnInteraction: false
	                },
	                on:{
	                	click(){
	                		if(this.activeIndex == 0){
	                			_this.$router.push({path:'/newHouse/newHouseIndex'})
	                		}else if(this.activeIndex == 1){
	                			_this.$router.push({path:'/rent/rentIndex'})
	                		}
	                	}
	                }

	            }
			}
		},
		async asyncData(context) {
			let [rentlist,newlist] = await Promise.all([
				objFn.Axios(
		        "agenthouseCutomer/common/homePage",
		        "post",
		        {"size":"6"},
		        {interfaceType: "RENT_HOUSE"}),
				objFn.ntGet("palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList",
					{ interfaceType: "NEW_HOUSE" })
			])
			var roomData = rentlist.data.roomList.map((item)=>{
				item.roomFirstImage = objFn.concatFileUrl(item.roomFirstImage,380,280);
				item.tags = item.tags.split(",",2);
				return item;
			})
			return{
				roomData:roomData,
			}

		},
		mounted(){
			// 处理统计的参数
			let Tid = localStorage.getItem("Tid");
			let Pid = sessionStorage.getItem("Pid");
			if(!Tid){
				Tid = this.uuidFn();
				localStorage.setItem("Tid",Tid)
			}
			if(!Pid){
				Pid = this.uuidFn();
				sessionStorage.setItem("Tid",Tid)
			}
			this.$store.state.uuidData.Tid = Tid;
			this.$store.state.uuidData.Pid = Pid;

			var BannerImg =document.querySelectorAll(".banner-img");
			if(screen.width>1920){
				document.querySelector(".bannerBox").style.height = (screen.width)/2+'px';
				document.querySelector(".wordimg").style.transform='scale(1.2)';

				for(var i=0;i<BannerImg.length;i++){
					BannerImg[i].style.height = (screen.width)/2+'px';
				}
			}





			//获取页面的滚动条高度
			if(window.addEventListener){
				window.addEventListener("scroll",this.getScrollTop,true);
			}else {
				window.attachEvent("scroll",this.getScrollTop,true);
			}
		},
		beforeDestroy(){
			if(window.addEventListener){
				window.removeEventListener("scroll",this.getScrollTop,true)
			}else{
				window.detachEvent("scroll",this.getScrollTop,true)
			}
		},
		methods:{
			closebottom(e){
        		e.cancelBubble=true;
        		var footerFix = document.querySelector(".fix-footer");
				footerFix.style.display="none";
        	},
        	//获取页面的滚动条高度
			getScrollTop(e){
				if(e.target.scrollTop>4500){
					var footerFix = document.querySelector(".fix-footer");
					footerFix.style.display="none";
				}


      },
			toToSubway(){
        		this.$router.push({path:'/rent/nuxtMapSearchHouse/',query:{subway:"subway"}})
        	},
        	toToMap(){
        		this.$router.push({path:'/rent/nuxtMapSearchHouse/'})
        	},
			gotoNewHouse(){
				this.$router.push({path:"/newHouse/newHouseDetails",query:{id:"2c91b0ce67076f7b016739fd1f980393"}})

			},
			gotoNewHouse2(){
				this.$router.push({path:"/newHouse/newHouseDetails",query:{id:"ff80808164f8744c016521f3b0ee01c8"}})

			},
			gotoNewHouse3(){
				this.$router.push({path:"/newHouse/newHouseDetails",query:{id:"ff808081637317170163af0e95e9016f"}})

			},
			gotoNewHouse4(){
				this.$router.push({path:"/newHouse/newHouseDetails",query:{id:"ff80808164f8744c016584f782fd0af5"}})

			},

			gotoHouse(item){
				this.$router.push({path:"/rent/housedetail",query:{id:item.id,productType:item.productType}})

			},
			gotoNewhouse(){
				this.$router.push({path:"/newHouse/newHouseIndex"})
			},
			gotoRenthouse(){
				this.$router.push({path:"/rent/rentList/"})
			},
			gotoEchibiton(){
				this.$router.push({path:"/exhibitionCenter/exhhibition"})
			},
			//3D实景看房
        	gotolook(){
        		this.$router.push({path:"/rent/rentList",query:{ThreeD:"1"}})
        	},
        	gotodown(){
        		this.$router.push({path:'/download/download'})
        	},
		}
	}
</script>
<style lang="less" scoped>
.bannerBox{
	width: 100%;
	height: 640px;
	box-sizing: border-box;
	position: relative;
	z-index: 1;
	overflow: hidden;
	cursor:pointer;
	.banner-search{
		width: 100%;
		position: absolute;
		z-index: 10;
		top:58% ;
		left: 0;
	}
	.firstSwiper{
	    height: 100%;
	    overflow: hidden;
	    .mySwipers{
	        height: 100%;
	        .swiper-wrapper{
	            height: 100%;
	        }
	    }
	    .swiper-slide{
	        position: relative;
	        height: 100%;
	        overflow: hidden;
	       	img{
	       		position: absolute;
	       		right: 0;
	       		top: 0;
	       	}
	    }
	}
}
.quick-list{
	width: 1200px;
	height: 180px;
	margin: 60px auto 0;
	.quick-item{
		width: 25%;
		height: 100%;
		float: left;
		text-align: center;
		cursor:pointer;
		.iem-box{
			width: 90px;
			height: 90px;
			margin: auto;

		}
		.iem-box1{
			background: url(https://img.guoanfamily.com/guoanjiaPc/img11.png) no-repeat center;
			background-size:100% ;
			transition: all .3s;
		}
		.iem-box2{
			background: url(https://img.guoanfamily.com/guoanjiaPc/img21.png) no-repeat center;
			background-size:100% ;
			transition: all .3s;
		}
		.iem-box3{
			background: url(https://img.guoanfamily.com/guoanjiaPc/img32.png) no-repeat center;
			background-size:100% ;
			transition: all .3s;
		}
		.iem-box4{
			background: url(https://img.guoanfamily.com/guoanjiaPC/static/show1.png) no-repeat center;
			background-size:100% ;
			transition: all .3s;
		}
		.p1{
			font-size:20px;
			color:#333333;
			margin-top: 32px;
			font-weight: 600;
		}
		.p2{
			font-size: 14px;
			color: #999999;
			margin-top: 14px;
		}
	}
	.quick-item1:hover .iem-box1{
		background: url(https://img.guoanfamily.com/guoanjiaPc/img12.png) no-repeat center;
		background-size:100% ;
		transition: all .3s;
	}
	.quick-item2:hover .iem-box2{
		background: url(https://img.guoanfamily.com/guoanjiaPc/img22.png) no-repeat center;
		background-size:100% ;
		transition: all .3s;
	}
	.quick-item3:hover .iem-box3{
		background: url(https://img.guoanfamily.com/guoanjiaPc/img31.png) no-repeat center;
		background-size:100% ;
		transition: all .3s;
	}
	.quick-item4:hover .iem-box4{
		background: url(https://img.guoanfamily.com/guoanjiaPC/static/show2.jpg) no-repeat center;
		background-size:100% ;
		transition: all .3s;
	}
}

.title{
	margin-top: 130px;
	margin-bottom:50px;
	text-align: center;
	.p1{
		font-size: 40px;
	}
	.p2{
		font-size: 12px;
		color:#666666;
		margin-top: 12px;
	}
}
.newHouse-content{
	width: 1200px;
	height: 500px;
	margin: auto;
	.newhouse1{
		width: 500px;
		height: 100%;
		float: left;
		background: url(https://img.guoanfamily.com/guoanjiaPC/static/home1.jpg) no-repeat center;
		background-size:100% 100% ;
		overflow: hidden;
		position:relative;
		cursor:pointer;
		.shadow-detaile{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 75%;
			left: 0;
			background: rgba(0,0,0,.5);
			transition:all 0.5s;
			box-sizing: border-box;
			padding: 18px 0 0 30px;
			.p1{
				font-size: 26px;
				font-weight: 600;
				color: white;

			}
			.p2{
				font-size: 31px;
				font-weight: 100;
				color: white;
				margin-top: 12px;
			}
			.p3{
				font-size: 16px;
				color: white;

				margin-top: 34px;
			}
			.p4{
				font-size: 31px ;
				font-weight: 100;
				color: white;
				position: absolute;
				bottom: 10%;
				span{
					font-size: 16px ;
				}
			}
		}
	}
	.newhouse2{
		background: url(https://img.guoanfamily.com/guoanjiaPc/home2.png) no-repeat center;
		background-size:100% 100% ;
	}
	.newhouse2,.newhouse3{
		height: 245px;
		width: 360px;
		float: left;
		margin-left: 10px;
		.shadow-detaile{
			top: 55%;
			.p3{
				font-size: 16px;
				color: white;

				margin-top: 14px;
			}
		}
	}
	.newhouse3{
		margin-top: 10px;
		background: url(https://img.guoanfamily.com/guoanjiaPc/home3.png) no-repeat center;
		background-size:100% 100% ;
	}
	.newhouse4{
		width: 320px;
		height: 500px;
		float: right;
		background: url(https://img.guoanfamily.com/guoanjiaPC/static/home4.jpg) no-repeat center;
		background-size:100% 100% ;
	}
	.newhouse1:hover .shadow-detaile{
		top: 0;
		background: rgba(227,75,62,.8);
		padding: 46px 0 0 30px;
		transition:all 0.5s;
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
.rentHouse-content{
	width: 1230px;
	height: 855px;
	margin: auto;
	position: relative;
	right: -10px;
	.rent-item{
		width: 380px;
		height: 410px;
		float: left;
		margin:0 30px 35px 0;
		box-shadow:0 0 10px #DDDDDD;
		cursor:pointer;
		.room-img{
			width: 100%;
			height: 280px;
			img{
				width: 100%;
				height: 100%;
			}

		}
		.rent-detaile{
			width: 100%;
			height: 130px;
			background: white;
			box-sizing: border-box;
			padding: 18px 22px;
			.house-name{
				font-size: 21px;
				color: #333333;
				overflow:hidden;
	       		text-overflow:ellipsis;
				white-space:nowrap;
			}
			.rent-tags{
				height: 20px;
				line-height: 20px;
				font-size: 14px;
				color: #999999;
				margin-top: 5px;
				span{
					display: inline-block;
					margin-right: 10px;
				}
			}
			.room-price{
				font-size: 28px;
				color: #e34b3e;
				margin-top: 10px;
				.span1{
					font-size: 19px;
				}
				.span2{
					font-size: 14px;
					color: #666666;
					float: right;
					margin-top:15px ;
				}

			}
		}

	}
}
.searve{
	width: 100%;
	height: 4.8rem;
	background: url(https://img.guoanfamily.com/guoajiaPc/shiing.png) no-repeat center;
	background-size:cover ;
	margin-top: 1.4rem;
	cursor: pointer;
	overflow: hidden;
	.searvr-num{
		width: 6.9rem;
		height: 1.8rem;
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
				color:white;
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
		color: #E34B3E;
		background: white;
		margin-top: 0.2rem;
		cursor: pointer;
		margin-left: 30px;
	}
}
.exhibition{
	width: 1200px;
	height: 635px;
	margin: auto;
	cursor: pointer;
	.exhibition-left{
		width: 350px;
		height: 100%;
		background: rgb(227,75,62);
		float: left;
		box-sizing: border-box;
		padding: 56px 0 0 32px;
		.p1{
			font-size:44px;
			color:white;
			font-weight: 100;
			margin-bottom:5px;
		}
		.p2{
			font-size: 20px;
			color: white;
			margin-top: 20px;
		}
		.p3{
			font-size: 40px;
			color: white;
			margin-bottom: 210px;
		}
		.p4{
			font-size: 16px;
			color: white;
			margin-top: 5px;
		}
		.p5{
			font-size: 24px;
			color: white;
			margin-top: 20px;
		}
	}
	.exhibition-img{
		width: 420px;
		height: 315px;
		float: left;
		margin:  0 0 5px 5px;
		overflow: hidden;
		img{
			width: 100%;
			height: 100%;
			transition:all 0.5s;
		}
	}
	.exhibition-img:hover img {
		transform: scale(1.2);
		transition:all 0.5s;
	}
}

.download-box{
	width: 100%;
	margin-top: 1.2rem;
	cursor: pointer;
	.download{
		width: 12rem;
		height: 5.8rem;
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
				margin-top: 0.5rem;
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
			.download-middle{
				height: 1.5rem;
				width: 3.8rem;
				float: left;
				margin-top: 0.8rem;
				.downleft{
					width: 1.8rem;
					float: left;
				}
				.download-andirod{
					width: 1.8rem;
					height: 0.60rem;
					float: left;
					background: url(https://img.guoanfamily.com/rentPC/rentindex/andirod.png) no-repeat center;
					background-size:100% 100% ;
					margin-top: 0.16rem;
					cursor: pointer;
				}
				.download-ios{
					width: 1.8rem;
					height: 0.6rem;
					float: left;
					cursor: pointer;
					background: url(https://img.guoanfamily.com/rentPC/rentindex/iosd.png) no-repeat center;
					background-size:100% 100% ;

				}
				.erweima{
					width: 1.4rem;
					height: 1.4rem;
					float: left;
					margin-left: 20px;
					background: url('https://media.guoanfamily.com/rent/static/HomePage/erweimadownload.png') no-repeat center;
					background-size:100% 100% ;
				}
			}


		}

		.phone-img{
			margin-left: 120px;
		}
	}
}
.fix-footer{
	width: 100%;
	height: 160px;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #fafafb;
	z-index: 100;
	cursor: pointer;
	.fix-footer-main{
		width: 719px;
		height: 100%;
		margin: auto;
		position:relative;
		.close{
			width: 24px;
			height: 24px;
			position: absolute;
			right: -80px;
			top: 10px;

			padding: 2px;
			.close-inner{
				width: 20px;
				height: 20px;
				font-size: 20px;
				text-align: center;
				line-height: 18px;
				background: #999999;
				color: white;

				border-radius: 50%;
			}
			.close-inner:hover{
				color: #E34B3E;
			}
		}
		.footer-img{
			position: absolute;
			left: 0;
			bottom: 0;
		}
		.footer-code{
			width: 120px;
			height: 120px;
			float: right;
			margin-top: 20px;
		}
		.footer-box{
			width: 206px;
			height: 100px;
			float: right;
			margin-right: 100px;
			margin-top: 30px;
			.p1{
				width: 250px;
				font-size: 24px;
				color: #231815;
				font-family: '黑体';
				margin-bottom: 8px;
			}
			.p2{
				width: 50%;
				font-size: 18px;
				float: left;
				color: #727171;
			}
		}
	}
}
</style>