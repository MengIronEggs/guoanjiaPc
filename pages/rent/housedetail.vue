<template>
		<div class="detaile" ref="detailePage">
			 <div style="width:100%;height:auto;position:absolute;left:0;top:0;z-index:10">
	             <headeNav :NavActived="4"></headeNav>
	        </div>
			<div style="height: 70px;"></div>
			<!--约看的弹窗-->
			<appointAlert :showalert = "showalert" :houseMsg="houseMsg" v-on:selected="selectCommunity"></appointAlert>
			<div class="page-content fadeIn">
				<!--左侧页面-->
				<div class="page-left">
					<h1 class="house-title1">{{houseData.areaXName}} {{houseData.areaName}}</h1>
					<!--<h1 class="house-title2">{{houseData.areaName}} {{houseMsg.shareName?houseMsg.shareName+'房间':'国安家'}}</h1>-->
					<h1 class="house-title2">{{houseData.areaName}} {{houseMsg.shareName+'房间'}}</h1>
						
					<!--轮播图-->
		    		<div class="detaile-swiper">
		    			<div class="swiper-left">
		    				<div class="swiper-item" v-for="(item,index) in roomBanners" :key="index" :class="swiperItemStyle[index]">
		    					<img :src="item.img" alt="" />
		    				   
		    				</div>
		    			</div>
		    			<div class="swiper-right">
		    				<div class="pre"></div>
		    				<div class="swiper-right-content">
		    					<div class="swiper-indicator" ref="swiperIndicator">
		    						<div class="swiper-indicator-item" v-for="(item,index) in roomBannersLittle" :key="index" @click="clickImg(index)" :class="indicatorItemStyle[index]">
		    							<img :src="item.img" alt="" />
		    							
		    						</div>
		    						
		    					</div>
		    				</div>
		    				<div class="next"></div>
		    			</div>
		    		</div>
		    		
		    		<!--房源周边-->
		    		<div class="srounding">
		    			房源周边
		    		</div>
		    		<div class="srounding-word">
		    			<div class="word-instrudoction">
			    			<p class="p1"><span class="instrudoction-title">编号</span>： {{productType == '0019002' ? houseData.houseId :houseData.roomId}}</p>
			    			<div class="house-miaoshu">
			    				<div class="house-zhoubian"><span class="instrudoction-title">周边：</span> </div>
			    				<div class="house-jiaotong">{{houseData.surrounding}}</div>
			    			</div>
			    			<div class="house-miaoshu">
			    				<div class="house-zhoubian"> <span class="instrudoction-title">交通：</span></div>
			    				<div class="house-jiaotong">{{houseData.circumjacentTraffic}}</div>
			    			</div>
		    			</div>
		    			<div class="srounding-arrow" @click="toggleUp(1)">
		    				{{toggle1}}<img class="isRotate1" src="https://img.guoanfamily.com/rentPC/rentdetail/sroundingarrow.png" alt="" />
		    			</div>
		    		</div>
		    		
		    		<!--房源介绍-->
		    		<div class="srounding introduction">
		    			房源介绍
		    		</div>
		    		<div>
		    			<div class="introduction-word" style="overflow: hidden;">
		    				<pre class="houseintroduction">
			    				{{houseMsg.environment}}
			    			</pre>
		    			</div>
		    			
		    			<div class="srounding-arrow" style="margin-left: 0.2rem;" @click="toggleUp(2)">
		    				{{toggle2}}<img class="isRotate2" src="https://img.guoanfamily.com/rentPC/rentdetail/sroundingarrow.png" alt="" />
		    			</div>
		    		</div>
		    		<div class="srounding peizhi">
		    			房间配置
		    		</div>
		    		<div class="peizhi-item-out">
			    		<div class="peizhi-item">
			    			<div class="peizhi-toggle" style="overflow: hidden;">
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/yizi.png"/>椅子
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/bingxiang.png"/>冰箱
				    			</div>
				    			
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/linyu.png"/>热水器
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/zhuozi.png"/>桌子
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/xiyiji.png"/>洗衣机
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/zhinengchazuo.png"/>智能插座
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/yigui.png"/>衣柜
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/kongtiao.png"/>空调
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/weibolu.png"/>微波炉
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/chuangtougui.png"/>床头柜
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/luyouqi.png"/>路由器
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/youyanji.png"/>油烟机
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/chuang.png"/>双人床
				    			</div>
				    			
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/zhinengchazuo.png"/>智能锁
				    			</div>
				    			<div class="peizhi-list">
				    				<img src="https://img.guoanfamily.com/rentPC/rentdetail/ranqizhao.png"/>燃气罩
				    			</div>
			    			</div>
			    			<div class="srounding-arrow" @click="toggleUp(3)">
			    				{{toggle3}}<img class="isRotate3" src="https://img.guoanfamily.com/rentPC/rentdetail/sroundingarrow.png" alt="" />
			    			</div>
			    		</div>
		    		</div>
					
					<div class="hezutiele">
						<div class="srounding hezu" style="float: left;">
			    			合租舍友
			    		</div>
			    		<div class="turn-hezu">
			    			<div class="hezuleft swiper-button-prev" slot="button-prev"></div>
			    			<div class="hezuright swiper-button-next" slot="button-next"></div>
			    		</div>
					</div>
					<div class="hezulist">
						<div class='bannerImg' >
			                <div v-swiper:mySwiper="swiperOption1" ref="mySwiper">
			                  <div class="swiper-wrapper">
			                    <div class="swiper-slide" v-for="(item,index) in roommateList" :key="index">
									<div class="hezu-li">
										<div class="hezu-img">
											<img :src="item.icon" alt="" />
										</div>
										
										<div class="isRent" v-if="item.isIntakeState">
											<div class="hezuaihao-title">爱好</div>
											<div class="hezu-aihao">{{item.hobby}}</div>
											<div class="hezu-zhiye-xingzou">
												<div class="hezu-zhiye">
													<p class="p1">职业</p>
													<p class="p2">{{item.job || "保密"}}</p>
												</div>
												<div class="hezu-zhiye hezu-xingzuo">
													<p class="p1">星座</p>
													<p class="p2">{{item.constellation || "保密"}}</p>
												</div>
											</div>
										</div>
										<div class="isRent" v-else>
											<div class="hezu-zhiye-xingzou weihezu">
												<div class="hezu-price">
													<p class="p1">租金</p>
													<p class="p2">￥{{item.price}}元/月</p>
												</div>
												<!--<div class="hezu-zhiye hezu-xingzuo">
													<p class="p1">状态</p>
													<p class="p2">待入住</p>
												</div>-->
											</div>
											<div class="hezu-zhiye-xingzou weihezu">
												<div class="hezu-zhiye">
													<p class="p1">朝向</p>
													<p class="p2">{{item.orientation}}</p>
												</div>
												<div class="hezu-zhiye hezu-xingzuo">
													<p class="p1">面积</p>
													<p class="p2">{{item.usedArea}}㎡</p>
												</div>
											</div>
										</div>
										<div class="hezu-self" v-if="item.roomId == id">当前浏览</div>
										<div class="hezu-zhuangtai" v-else-if="item.isIntakeState">已入住</div>
										<div class="hezu-zhuangtai kanfang" v-else @click="toOtherRoom(item,index)">去看房</div>
										
										<div class="hezu-zuqi" v-if="item.isIntakeState">租期：{{item.signDate}} - {{item.endDate}}</div>
										<div class="hezu-zuqi dairuzhu" v-if="!item.isIntakeState">待入住</div>
									</div>
									
			                    </div>
			                  </div>
			                </div>
			            </div>
			            
					</div>
					
					<div class="srounding fukuan">
		    			付款方式
		    		</div>
					
					<div>
						<ul class="fukuan-ul">
							<li class="fukuan-li"> </li>
							<li class="fukuan-li fukuan-li2"> </li>
							<li class="fukuan-li fukuan-li3"> </li>
						</ul>
						<ul class="jifu-ul">
							<li class="jifu-li jifu-li-title">季付</li>
							<li class="jifu-li jifu-li-right">￥{{houseMsg.Price}}/月</li>
							<li class="jifu-li jifu-li-right" style="margin-left: 0.75rem;">￥{{houseMsg.Price}}/月 </li>
							<li class="jifu-li jifu-li-right" style="margin-left: 0.75rem;">￥{{Math.round(houseMsg.Price*12*0.08)}}/年 </li>
						</ul>
						
						<ul class="jifu-ul">
							<li class="jifu-li jifu-li-title">半年付</li>
							<li class="jifu-li jifu-li-right">￥{{houseMsg.Price}}/月</li>
							<li class="jifu-li jifu-li-right" style="margin-left: 0.75rem;">￥{{houseMsg.Price}}/月 </li>
							<li class="jifu-li jifu-li-right" style="margin-left: 0.75rem;">￥{{Math.round(houseMsg.Price*12*0.07)}}/年</li>
						</ul>
						<ul class="jifu-ul">
							<li class="jifu-li jifu-li-title">年付</li>
							<li class="jifu-li jifu-li-right">￥{{houseMsg.Price}}/月</li>
							<li class="jifu-li jifu-li-right" style="margin-left: 0.75rem;">￥{{houseMsg.Price}}/月 </li>
							<li class="jifu-li jifu-li-right" style="margin-left: 0.75rem;">￥{{Math.round(houseMsg.Price*12*0.06)}}/年</li>
						</ul>
					</div>
					
					<div class="srounding zhoubian">
		    			项目周边
		    		</div>
					
					<div class="map">
						<!--筛选tab-->
						<div class="map-search">
							<ul>
								<li v-for="(item,index) in mapSearch" :key="index" class="map-li" @click="getMapSearch(item,index)">{{item}}</li>
								<li class="location-room" @click="locationHouse"><img src="https://img.guoanfamily.com/rentPC/rentdetail/location-room.png" alt="" /> 定位当前房源</li>
							</ul>
						</div>
						
						<!--地图-->
						<div class="map-show">
							<div class="mapBox" id="mapBox"></div>
						</div>
						<!--乘车路线-->
						<div class="byType">
							<div class="comehere"@click="toOther"><img src="https://img.guoanfamily.com/rentPC/rentdetail/location-room.png"/>到这里去</div>
							<div class="goother" @click="comeHere"><img src="https://img.guoanfamily.com/rentPC/rentdetail/goother.png" />从这里出发</div>
						</div>
						<div class="routeLine">
	    					<input id="position" type="text" v-model="myInputValue" placeholder="请输入有效的地址名称" ref="toOtherInput"/> 
	    					<button @click="by('bus')">公交</button>
	    					<button @click="by('walk')">步行</button>
	    					<button @click="by('car')">驾车</button>
	    				</div>
	    				<div class="router-content">
	    					<div id="result_div"></div>
	    				</div>
					</div>
					
				</div>
				<!--右侧页面-->
				<div class="page-right">
					
					
					
					<!--<div class="shoucang-fenxiang">
						<img src="https://img.guoanfamily.com/rentPC/rentdetail/shoucang.png" v-if="!isCollect"  @click="collectFunc" />
						<img src="https://img.guoanfamily.com/rentPC/rentdetail/yesCollect.png" v-else @click="collectFunc" />
						收藏
						<img src="https://img.guoanfamily.com/rentPC/rentdetail/fenxiang.png" @click="createQrc"/>分享
					</div>-->
					<div class="room-detaile">
						<p class="room-price"><span class="span1">￥</span>{{houseMsg.Price}} <span class="span2">元/月</span></p>
						<p class="price-method">（季付）</p>
						<div class="shoucang" @click="collectFunc">
							<img src="https://img.guoanfamily.com/rentPC/rentdetail/shoucang.png" v-if="!isCollect"   />
							<img src="https://img.guoanfamily.com/rentPC/rentdetail/yesCollect.png" v-else />
							收藏
						</div>
						<div class="shoucang" @click="createQrc">
							<img src="https://img.guoanfamily.com/rentPC/rentdetail/fenxiang.png" />
							分享
						</div>
						
						<div style="clear: both;"></div>
			
						<div class="room-detaile-peizhi">
							<div class="room-detaile-peizhi-item">面积：{{houseMsg.Area}}</div>
							<div class="room-detaile-peizhi-item">户型：{{houseData.changeRoomNo}}室{{houseData.changeLivingNo}}厅</div>
							<div class="room-detaile-peizhi-item">楼层：{{houseData.buildFloor}}</div>
							<div class="room-detaile-peizhi-item">朝向：{{houseMsg.orientation}}</div>
						</div>
						<div class="tese" :title="houseMsg.advantageTagsArr">特色：<span v-for="item in houseMsg.advantageTagsArr">{{item}}&nbsp;&nbsp;</span></div>
						<div class="jioatong" :title="houseData.communityAddress">交通：{{houseData.communityAddress}}</div>
						<div class="yuekan1" @click="showAppoint">我要看房</div>
						<div class="yuekan yuding" @click="getDeposite">我要预定</div>
					</div>
					<div class="guanjia">
						<div class="guanjia-top">
							<div class="erweima-share" v-show="isShowShare">
								<div class="erweima-close" @click="closeErweima">×</div>
								<div class="erweima-box">
									<canvas  id="qrccode-canvas"></canvas >
								</div>
								<img class="logo" src="https://img.guoanfamily.com/rentPC/Logo/guoanjialogo.png" alt="" />
							</div>
							<div class="erweima-share"  v-show="isSharePhone">
								<img class="checkCode-img" :src="checkCode" alt="" />
								<img class="logo" src="https://img.guoanfamily.com/rentPC/Logo/guoanjialogo.png" alt="" />

							</div>
							<div class="guanjia-touxinag"></div>
							<div class="guanjia-jieshao-out">
								<div class="guanjia-jieshao">
									<p class="p1">国安家高品质公寓</p>
									<p class="p2">拎包入住，智能门锁，品牌家电、家居，</p>
									<p class="p2">专业保洁、维修、专属管家为您贴心服务！</p>
								</div>
								
							</div>
						</div>
						
						<div class="jieshao-list">
							<div class="jieshao-list-left">
								<div class="list-item">
									<div class="list-item-title">品质</div>真实房源、环保家具
								</div>
								<div class="list-item">
									<div class="list-item-title">服务</div>月度保洁、及时维修
								</div>
								<div class="list-item">
									<div class="list-item-title">设计</div>风格多样、国安家严选
								</div>
								<div class="list-item">
									<div class="list-item-title">安全</div>智能门锁、客户信用体系
								</div>
								
								
							</div>
							<div class="jieshao-list-right" @mouseenter="qrcheckin" @mouseleave="qrcheckout">
								<img src="https://img.guoanfamily.com/rentPC/rentdetail/weixin.png" alt="" />
								<p>微信扫一扫</p>
								<p>快速拨打电话</p>
							</div>
						</div>
						<div class="phone-call" ><img src="https://img.guoanfamily.com/rentPC/rentdetail/PHONE.png" alt="" />400-900-2225</div>
					</div>
					
					
				</div>
				
				
				<div style="clear: both;"></div>
				<div class="recommend">
					<div class="srounding recommend-titele">推荐房源</div>
					<div class="recommend-item" v-for="(item,index) in recommendList" @click="recommendDetali(item)">
						<img :src="item.image" alt="" />
						<p class="p1">{{item.houseName}}-{{item.houseName == '东大桥店'? item.roomFloor:item.roomName}}{{item.roomNumber}}</p>
						<p class="p2">[{{item.guoanjiaArea}}]{{item.communityAddress}}</p>
						<p class="p3">￥{{item.price}}/月</p>
					</div>
				</div>
			</div>
			<BtnNav></BtnNav>
		</div>
</template>

<script>
	
	var QRCode = require('qrcode')
	import { objFn } from "../../plugins/axios.js"
	import headeNav from "~/components/headerNav.vue"
	import BtnNav from "~/components/bottom.vue"
	import appointAlert from "~/components/rent/appiontAlert"
	

	
	export default {
		components: {
		    headeNav,
		    BtnNav,
		    appointAlert
		},
		data(){
			return{
				swiperOption1: {
					slidesPerView: 3,
			        navigation: {
			          nextEl: ".swiper-button-next",
			          prevEl: ".swiper-button-prev"
			        },
			    },
				swiperItemStyle:{
                	"0":'swiper-item-change',
                },
                indicatorItemStyle:{
                	"0":'changeIndicator',
                },
                userId:'',
                id:this.$route.query.id,
                productType:this.$route.query.productType,
                houseData:'',	//其他信息
                houseMsg:{},		//面积、朝向价格信息
                roommateList:'',	//合租舍友
                roomBanners:[],//轮播图，大
                roomBannersLittle:[],//轮播图，小
                swiperIndex:0,		//轮播图下标
                longitude:116.404,
				latitude:39.915,
				mapSearch:["交通","餐饮","银行","景点","超市","火车站"],
				myInputValue:"",
				toFrom:true,//地图路线
				communityName:'',//小区名字
				recommendList:'',
				toggle1:'收起',
				toggle2:'收起',
				toggle3:'收起',
				showalert:false,
				isCollect:false,
				images:'',			//收藏的图片
				type:'',
				bannerUrl:'https://www.guoanfamily.com/guoanjiaApp/#/HouseList/houseDetail?id='+this.$route.query.id+'&productType='+this.$route.query.productType,		//分享的二维码链接
				collectUrl:'#/HouseList/houseDetail?id='+this.$route.query.id+'&productType='+this.$route.query.productType,
				isShowShare:false,
				checkCode:'',
				isSharePhone:false
			}
		},
//		beforeRouteLeave (to, from, next) {
//		    // 导航离开该组件的对应路由时调用
//		    // 可以访问组件实例 `this`
//		   
//		   next()	
//		},
		
		beforeMount(){
			//获取token判断用户是否登录，若登录则获取登陆者的userid，进而获取用户的约看房间信息
			
			//正常登录
			if(objFn.getStorage("token")){
				objFn.Axios(
		        "agenthouseCutomer/common/getUserInfo",
		        "post",
		        {},
		        {interfaceType: "RENT_HOUSE"}).then(res => {
		        	if(res.code == 0){
		        		this.userId = res.data.userId;
	            		this.getHouseDetaile()
		        	}else{
		        		this.getHouseDetaile()
		        	}
	            	
		    	})
			}else{
        	//未登录
        		this.getHouseDetaile()
        	}
			this.getRecommendHouse();
			

		},
		mounted(){
			this.initImageSwiper();
			this.initInputSearch();//初始化地图搜索控件
			let userCollectList = objFn.getStorage("collectList");
			if(userCollectList){
				if(userCollectList.indexOf(this.collectUrl) == -1){
					this.isCollect = false;
				}else{
					this.isCollect = true;
				}
			}
			//获取页面的滚动条高度
			window.addEventListener("scroll",this.getScrollTop,true);
			
			let swiperIndecator = document.querySelector(".page-left");
			
		},
		beforeDestroy(){
			window.removeEventListener("scroll",this.getScrollTop,true)
		},
		methods:{
			//获取页面的滚动条高度
			getScrollTop(e){
				if(e.target.scrollTop<700 ){
					document.querySelector(".guanjia").style.top =0 +'px';
				}else if( e.target.scrollTop<3232 && e.target.scrollTop>700 ){
					document.querySelector(".guanjia").style.top = e.target.scrollTop-700 +'px';
				}else{
					document.querySelector(".guanjia").style.top = 3260-700 +'px';
				}
            },
			//微信扫一扫拨打电话
			qrcheckin(){
				this.isSharePhone=true;
				this.isShowShare = false;
				let domain = 'https://www.guoanfamily.com/guoanjiaApp/#/HouseList/houseDetail?'+'id='+this.id+'+&productType='+this.productType+"&supernatant=400-900-2225";
        		let content=escape(domain);
				objFn.Axios("common/qrCode/createQrcodeBase64?content="+content,"post",{},{
				 		interfaceType:"RENT_HOUSE"
				 }).then((res)=>{
				 		this.checkCode ="data:image/png;base64," +res.data;
				 	})
			},
			qrcheckout(){
				this.isSharePhone=false;
			},
			
			//关闭二维码
			closeErweima() {
				var c=document.getElementById("qrccode-canvas");  
			    var cxt=c.getContext("2d");  
			    c.height=c.height;
			    this.isShowShare = false;
			},
			//分享的二维码
			createQrc () {
				
				this.isShowShare = true;
				this.isSharePhone=false;
				let canvas = document.getElementById('qrccode-canvas');
			    if (!this.bannerUrl) {
			        window.alert('链接不能为空')
			        return false
			    }
			    QRCode.toCanvas(canvas, this.bannerUrl, (error) => {
			        if (error) {
			          console.log(error)
			        } else {
			          console.log('success')
			        }
			    })
		    },
			
			//收藏
			collectFunc(){
				if(objFn.getStorage("token")){//判断是否登录
					this.collect()
				}else{
					this.$router.push({path:"/login/login"})
				}
			},
			collect(){
				switch(this.productType){
					case "0019001":
					this.type = 3;
					break;
					case "0019003":
					this.type = 3;
					break;
					case "0019002":
					this.type = 4;
					break;
				}	
				//isCollect初始值为false，
				if(!this.isCollect){//收藏
					objFn.Axios("user/CollectController/saveCollectInfo","post",{
						"collectTitle":this.houseMsg.shareName,//名称
						"collectResume":this.houseMsg.Price,//价格
						"collectContent":this.houseMsg.areaName,//地址
						"adjunctContent":'',//摘要内容为空
						"imageName":this.images,//如123.png
						"collectUrl":this.collectUrl,//当前url,hash值
						"type":this.type,//收藏类型
						"roomName":this.houseMsg.CollectName,//房间名，没有主卧次卧的字段
						"advantageTagsArr":this.houseMsg.advantageTags,//标签
						"afterRoom":this.houseMsg.afterRoom+"室",//几室
						"afterLiving":this.houseMsg.afterLiving+"厅",//几厅
						"buildFloor":this.houseMsg.buildFloor+"层",//楼层
						"subWay":'',//地铁
						"whichBuild":'',//几号楼
						"adjunctContent":this.houseMsg.Area,//面积
						"productType":this.productType,
						"productId":this.id,
						"source":'2'
				 	},{
				 		interfaceType:"NEW_HOUSE"
				 	}).then((res) =>{
				 		if(res.code == 200){
				 			let userCollectList = objFn.getStorage("collectList");	//获取localstorage
				 			userCollectList =userCollectList+',' + this.collectUrl;  				//将当前页面的hash值存到收藏数组
				 			objFn.setStorage("collectList",userCollectList);		//设置localstorge
				 			
				 			//收藏成功后将isCollect改为true
					 		this.isCollect = true;//将按钮的颜色改变
					 		
					 		
					 		this.$showMsgTip("收藏成功");
				 		}
				 	})
				}else{//取消收藏
					var urll = this.collectUrl;
					var self = this;
					this.$confirm('删掉本条收藏？', '提示', {
		              	confirmButtonText: '确定',
		             	cancelButtonText: '取消',
		              	type: 'warning',
			            beforeClose: (action, instance, done) => {
			                if (action === 'confirm') {
			                  objFn.Axios("user/CollectController/delCollectInfo","post",{
			                    "collectUrl":this.collectUrl,
			                  },{
			                    interfaceType:"NEW_HOUSE"
			                  }).then((res)=>{
			                    if(res.code == 200){
		                    		//取消收藏成功后将isCollect改为false
						 			this.isCollect = false;//将按钮的颜色改变
						 			
			                      	let collectList=objFn.getStorage("collectList");
			                      	let collectListArr = collectList.split(",");
			                      	for(let i=0;i<collectListArr.length;i++){
			                        	if(collectListArr[i] == urll){
				                          	collectListArr.splice(i,1);
				                          	collectList = collectListArr.join(",");
				                          	objFn.setStorage("collectList",collectList);
			                       	 	}
			                      	}
			                      done();
			                    }
			                  })
			                } else {
			                  done();
			                }
			            }
		            }).then(() => {
		              this.$message({
		                type: 'success',
		                message: '删除成功!'
		              });
		            }).catch(() => {
		              this.$message({
		                type: 'info',
		                message: '已取消删除'
		              });          
		            });
				}
			},
			
			
			//显示约看弹窗
			showAppoint(){
				this.showalert = true;
			},
			selectCommunity(data){
                this.showalert = false;
            },
			//预订
			getDeposite(){
				if(this.houseData.hasDepositContract){
					this.$showErrorTip('该房源已被预定~再看看其他房源吧~~');
				    return;
				}else{
					//10-31日修改
					if(objFn.getStorage("token")){
						this.$router.push({path:"/personalCenter/aboutMe/payStep",query:{roomId:this.id,houseId:this.houseMsg.hosueId,productType:this.productType,frompage:'1'}})				

					}else{
						this.$router.push({path:"/login/login"})

					}

				}
			},
			
			
			
			
			
			//收起展示
			toggleUp(i){
				if(i==1){//周边收起
					if(document.querySelector(".word-instrudoction").className.indexOf("toggleHight") == -1){
						document.querySelector(".word-instrudoction").classList.add("toggleHight");
						document.querySelector(".isRotate1").style.transform = "rotate(180deg)";
						
						this.toggle1 = '展开';
					}else{
						document.querySelector(".word-instrudoction").classList.remove("toggleHight");
						document.querySelector(".isRotate1").style.transform = "rotate(0deg)";
						this.toggle1 = '收起';
					}
				}else if(i == 2){
					if(document.querySelector(".introduction-word").className.indexOf("toggleHight") == -1){
						document.querySelector(".introduction-word").classList.add("toggleHight");
						document.querySelector(".isRotate2").style.transform = "rotate(180deg)";
						
						this.toggle2 = '展开';
					}else{
						document.querySelector(".introduction-word").classList.remove("toggleHight");
						document.querySelector(".isRotate2").style.transform = "rotate(0deg)";
						this.toggle2 = '收起';
					}
				}else if(i == 3){
					if(document.querySelector(".peizhi-toggle").className.indexOf("toggleHight") == -1){
						document.querySelector(".peizhi-toggle").classList.add("toggleHight");
						document.querySelector(".isRotate3").style.transform = "rotate(180deg)";
						
						this.toggle3 = '展开';
					}else{
						document.querySelector(".peizhi-toggle").classList.remove("toggleHight");
						document.querySelector(".isRotate3").style.transform = "rotate(0deg)";
						this.toggle3 = '收起';
					}
				}
			},
			
			
			//跳转到同房源的其他房间
			toOtherRoom(item,index){
				this.$router.push({path:"/rent/housedetail",query:{id:item.roomId,productType:this.productType}})
			},
			
			//跳转到国安家推荐房间详情
			recommendDetali(item){
				this.$router.push({path:"/rent/housedetail",query:{id:item.id,productType:item.productType}})

				//window.location.reload();
			},
			
			//地图tab切换
			getMapSearch(item,index){
				let facilityItemTitle = document.querySelectorAll(".map-li");
				for(let i=0;i<facilityItemTitle.length;i++){
					if(i== index){
						facilityItemTitle[i].style.color="#E34B3E";
					}else{
						facilityItemTitle[i].style.color="rgb(34,34,34)";
					}
				}
				let search = item;
        		this.baiduMap(search);
			},
			//定位当前房源
			locationHouse(){
				let search = '';
				this.baiduMap(search)
			},
			//创建地图
			baiduMap(search){
				// 百度地图API功能
				this.bmap=new BMap.Map("mapBox");
				this.bmap.centerAndZoom(new BMap.Point(this.longitude,this.latitude), 11);  // 初始化地图,设置中心点坐标和地图级别
				this.bmap.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
				
				var point = new BMap.Point(this.longitude,this.latitude);//创建点
				this.bmap.centerAndZoom(point, 15);
				var marker = new BMap.Marker(point);  // 创建标注
				this.bmap.addOverlay(marker);               // 将标注添加到地图中
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
				
				var circle = new BMap.Circle(point,300,{fillColor:"grey", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
			    this.bmap.addOverlay(circle);
			    var map =this.bmap;
			    var local =  new BMap.LocalSearch(this.bmap, {renderOptions: {map: map, autoViewport: false}});  
			    local.searchNearby(search,point,5000);
			
			},
			toOther(){
		    	this.toFrom = true
		    },
		    comeHere(){
		    	this.toFrom = false
		    },
			initInputSearch(){
		    	const _this=this;
		    	
				var ac=new BMap.Autocomplete({
					"input":"position",
					"location":_this.bmap
				});
		    },
		    setPlace(){
		    	const _this=this;
		    	
		    	var local=new BMap.LocalSearch(_this.bmap,{
		    		onSearchComplete:function(){
		    			var endPoint = local.getResults().getPoi(0).point; 
		    			_this.thisEndPoint=endPoint;
		    		}
		    	});
		    	local.search(_this.myInputValue);
		    },
		    by(byType){
		    	if(!this.myInputValue){
		    		alert('请输入您选择的位置');
		    		return false;
		    	}
		    	var transit=null;
		    	if(byType==='bus'){
		    		transit = new BMap.TransitRoute(this.bmap, {
			    			pageCapacity:1,
							renderOptions: {map: this.bmap, panel: "result_div"}
					});
		    	}
		    	if(byType==='walk'){
		    		transit = new BMap.WalkingRoute(this.bmap, {
		    				pageCapacity:1,
		    				renderOptions: {map: this.bmap, panel: "result_div", autoViewport: true}
		    		});
		    	}
		    	if(byType==='car'){
		    		transit = new BMap.DrivingRoute(this.bmap, {
		    				pageCapacity:1,
		    				renderOptions: {map: this.bmap, panel: "result_div", autoViewport: true}
		    		});
		    	}
		    	//更换起点终点
		    	if(this.toFrom){ 
		    		//从这里出发--当前输入的地点到小区
		    		transit.search(this.myInputValue,this.communityName);
		    	}else{
		    		//到这里去--当前小区到输入的地点
		    		transit.search(this.communityName,this.myInputValue);
		    	}
		    },
			
			//封装获取元素的方法
			$ (dom,type){
				if(type == 'all'){
					return document.querySelectorAll(dom);
				}else{
					return document.querySelector(dom);
				}
				
			},
			
			//轮播图上下点击按钮切换图片
			initImageSwiper() {
				var _this = this;
				
				//绑定向上按钮
				
				this.$(".pre").onclick=function(){
					_this.swiperIndex--;
					if(_this.swiperIndex < 0) {
						_this.swiperIndex = _this.$(".swiper-item","all").length - 1;
					}
					_this.switchSwiper();
				}

				//绑定向下按钮
				this.$(".next").onclick=function() {
					_this.swiperIndex++;
					if(_this.swiperIndex > _this.$(".swiper-item","all").length - 1) {
						_this.swiperIndex = 0;
					}
					_this.switchSwiper();
				}

			},
			//绑定图片点击
			clickImg(i){
				this.swiperIndex = i;
				this.switchSwiper();
			},
			//缩略图平移方法
			switchSwiper() {
				if(this.swiperIndex == 0) {
					this.$(".swiper-indicator").style.left = 0;
				}
				if(this.swiperIndex >= 1 && this.swiperIndex < (this.$(".swiper-item","all").length-1)){
				    if(this.roomBanners.length > 2){//如果图片多于两张的话才让缩略图上下滑动
				    
				     	this.$(".swiper-indicator").style.left = -(this.swiperIndex-1)*1.7+'rem';
				     	
				    }
				}
				if(this.swiperIndex >= (this.$(".swiper-item","all").length-2)){
				    if(this.roomBanners.length > 2) {//如果图片多于两张的话才让缩略图上下滑动
				    	this.$(".swiper-indicator").style.left = -(this.$(".swiper-item","all").length-4)*1.7+'rem';
				    }
				    
				}
				
				//去除现有的class
				for(var i=0;i<this.$(".swiper-item","all").length;i++){
					this.$(".swiper-item","all")[i].classList.remove("swiper-item-change");
					this.$(".swiper-indicator-item","all")[i].classList.remove("changeIndicator");
                    
				}
				this.$(".swiper-item","all")[this.swiperIndex].classList.add("swiper-item-change");
				this.$(".swiper-indicator-item","all")[this.swiperIndex].classList.add("changeIndicator");
		    },
			
			
			
			getHouseDetaile(){
				objFn.Axios(
		        "agenthouseCutomer/pc/HouseInfoController/getHouseDetail",
		        "post",
		        {"id":this.id,"productType":this.productType},
		        {interfaceType: "RENT_HOUSE"}).then(res => {
		        	//合租
					if(this.productType == "0019001" || this.productType == "0019003"){
						if(res.data.houseName == '东大桥'){
							this.houseMsg.shareName = res.data.houseName +" "+ res.data.roomFloor + res.data.roomNumber;
						}else{
							this.houseMsg.shareName = res.data.houseName +" "+ res.data.roomName + res.data.roomNumber;
						}
						
						this.houseMsg.dongdaqiaoName = res.data.houseName+" " +res.data.roomFloor+res.data.roomNumber;
						this.houseMsg.orientation = res.data.roomOrientation;
						this.houseMsg.Area = res.data.usedArea;
						if(res.data.price){
							this.houseMsg.Price = res.data.price;
						}else{
							this.houseMsg.Price =0;
						}
						if(res.data.assessmentRoom){
							this.houseMsg.environment = res.data.assessmentRoom;
						}
						this.houseMsg.roomNumber = res.data.roomNumber;
						
						if(res.data.roomAdvantageTags ){//房间标签
							this.houseMsg.advantageTags = res.data.roomAdvantageTags;
							this.houseMsg.advantageTagsArr =res.data.roomAdvantageTags.split(",");
						}
						
						this.houseMsg.isHaveRoomList = true;//合租有好室友列表
						this.houseMsg.roomFloor = res.data.roomFloor;
					}else if(this.productType == "0019002"){//整租
						this.houseMsg.shareName = res.data.houseName;
						this.houseMsg.orientation = res.data.orientation; 
						this.houseMsg.Area = res.data.coveredArea;
						if(res.data.rentPrice){
							this.houseMsg.Price = res.data.rentPrice;
						}else{
							this.houseMsg.Price = 0;
						}
						if(res.data.advantageEnvironment){
							this.houseMsg.environment = res.data.advantageEnvironment;
						}
						this.houseMsg.roomNumber = res.data.roomNumber;
						if(res.data.advantageTags){//房源标签
							this.houseMsg.advantageTags = res.data.advantageTags;
							this.houseMsg.advantageTagsArr = res.data.advantageTags.split(",")
						}
						this.houseMsg.isHaveRoomList = false;//整租没有好室友列表
					}
	            	this.houseData = res.data;
	            	this.communityName = res.data.communityName;
	            	this.roommateList = res.data.roomList.map((item,index) => {
							if(item.intakeStateCode == "0015004"){
									item.isIntakeState = true;
									switch(item.ownerSex){
										case "1":
										item.icon = 'https://img.guoanfamily.com/rentPC/rentdetail/Userpic.png';
										break;
										case "0":
										item.icon = 'https://img.guoanfamily.com/rentPC/rentdetail/girl.png';
										break;
										case null:
										item.icon = 'https://img.guoanfamily.com/rentPC/rentdetail/weiruzhu.png';
										break;
									}
									if(item.job ==="无"){
										item.job = "保密";
									}
								} else{
									item.isIntakeState = false;
									switch(item.ownerSex){
										case "1":
										item.icon = 'https://img.guoanfamily.com/rentPC/rentdetail/Userpic.png';
										break;
										case "0":
										item.icon = 'https://img.guoanfamily.com/rentPC/rentdetail/girl.png';
										break;
										case null:
										item.icon = 'https://img.guoanfamily.com/rentPC/rentdetail/weiruzhu.png';
										break;
									}
								}
							return item;
						});
						/********轮播图数据开始***********/
						for(let i=0; i<res.data.roomBanners.length;i++){
							//添加每个房间的照片
							if(res.data.roomBanners[i].roomFirst == null || res.data.roomBanners[i].roomFirst == ""){
								
							} else{
								this.roomBanners.push({img:objFn.concatFileUrl(res.data.roomBanners[i].roomFirst,648,472)})//所有房间的第一张照片				
	
							}
							if(res.data.roomBanners[i].roomSecond == null || res.data.roomBanners[i].roomSecond == ""){
								
							} else{
								this.roomBanners.push({img:objFn.concatFileUrl(res.data.roomBanners[i].roomSecond,648,472)})//所有房间的第一张照片				
	
							}
							if(res.data.roomBanners[i].roomThird == null || res.data.roomBanners[i].roomThird == ""){
								
							} else{
								this.roomBanners.push({img:objFn.concatFileUrl(res.data.roomBanners[i].roomThird,648,472)})//所有房间的第一张照片				
	
							}
						}
						//最后添加一张户型图
						for(let i=0; i<res.data.roomBanners.length;i++){
							if(res.data.roomBanners[i].typeCode == "0014002"){
								if(res.data.roomBanners[i].layoutImage == null || res.data.roomBanners[i].layoutImage == ""){
								
								} else {
									this.roomBanners.push({img:objFn.concatFileUrl(res.data.roomBanners[i].layoutImage,648,472)})			
								}
							}
						}
						this.images=res.data.roomBanners[0].roomFirst;
						if(this.roomBanners.length>0){
							this.houseMsg.image = this.roomBanners[0].img;
						}
						this.houseMsg.houseName = res.data.houseName;
						this.houseMsg.areaName = res.data.areaName;
						this.houseMsg.buildFloor = res.data.buildFloor;
						this.houseMsg.hosueId = res.data.houseId;
						this.houseMsg.roomId = res.data.roomId;
						this.roomBannersLittle = this.roomBanners;
						
						this.latitude = res.data.latitude;
						this.longitude = res.data.longitude;
						this.baiduMap();
	            	
		    	})
				
				
			},
			getRecommendHouse(){//获取推荐房源
				objFn.Axios(
		        "agenthouseCutomer/pc/HouseInfoController/recommendHouse",
		        "post",
		        {"id":this.id,"productType":this.productType},
		        {interfaceType: "RENT_HOUSE"}).then((res) => {
					this.recommendList = res.data.map((item) => {
						item.image = !item.image ||objFn.concatFileUrl(item.image,360,226);
						return item;
					})
					this.recommendList = this.recommendList.slice(0,4);
				})	
       	 },
		},
		watch: {
			'$route' (to, from) {
				// this.$router.push({path:"/HouseList/houseDetail",query:{id:item.id,productType:item.productType}});
				
				document.getElementsByClassName("detaile")[0].scrollTop = 0;
				
				
				this.id = this.$route.query.id;
				this.productType=this.$route.query.productType;
				this.collectUrl='#/HouseList/houseDetail?id='+this.$route.query.id+'&productType='+this.$route.query.productType;
				
				this.roomBanners=[],//轮播图，大
				this.roomBannersLittle=[],//轮播图，小
				
				this.getHouseDetaile();
				this.getRecommendHouse();
				
				
	        	
	        	
			}
		},
		
	}
</script>

<style lang="less" scoped>
	.page-content{
		width: 12rem;
		margin: auto;
	}
	.toggleHight{
		height: 0;
		transition: all .3s;
	}
	.isRotate1,.isRotate2,.isRotate3{
		transition: all .3s;
	}
	.srounding{
		width: 6.45rem;
		height: 0.48rem;
		background: url(https://img.guoanfamily.com/rentPC/rentdetail/The-periphery-of-the-house.png) no-repeat center;
		background-size:100% 100%;
		font-size:0.3rem ;
		color: rgb(187,187,187);
		box-sizing: border-box;
		padding-top: 0.1rem;
		margin-top: 0.4rem;
	}
	.recommend{
		overflow: hidden;
		margin: 0.2rem 0 0.6rem;
		.recommend-titele{
			width: 5.5rem;
			background: url(https://img.guoanfamily.com/rentPC/rentdetail/Payment-method.png) no-repeat center;
			background-size:100% 100%;
		}
		.recommend-item{
			width: 2.85rem;
			float: left;
			margin-right: 0.2rem;
			margin-top: 0.3rem;
			cursor: pointer;
			&:last-child{
				margin-right: 0;
			}
			img{
				width: 100%;
				height: 1.95rem;
			}
			.p1,.p2{
				font-size: 0.16rem;
				color: rgb(37,50,56);
				box-sizing: border-box;
				padding-left: 0.1rem;
				margin-top: 0.03rem;
			}
			.p3{
				font-size: 0.16rem;
				color: rgb(216,80,61);
				box-sizing: border-box;
				padding-left: 0.1rem;
				margin-top: 0.03rem;
			}
		}
	}
	.page-left{
		width: 7.1rem;
		float: left;
		padding-top: 0.48rem;
		 .bannerImg {
	      position: relative;
	    
	    }
		.house-title1{
			font-size: 0.18rem;
			color: rgb(187,187,187);
			
		}
		.house-title2{
			font-size: 0.36rem;
			color: rgb(68,68,68);
			
		}
		/*轮播图*/
    	.detaile-swiper{
    		margin-top: 0.3rem;
    		.swiper-left{
    			width: 6.8rem;
    			margin: auto;
				height: 5.1rem;
				
    			position: relative;	
    			.swiper-item{
    				width: 100%;
    				height: 100%;
    				position: absolute;
    				top: 0;
    				left: 0;
    				transition: all .3s;
    				opacity: 0;
    				img{
    					width: 100%;
    					height: 100%;
    				}
    			}
    			.swiper-item-change{
    				opacity: 1;
    			}
    			.transferShowHouse{
    				width:1.13rem;height: .80rem;position: absolute;top: .13rem;right: .16rem;z-index: 11;cursor: pointer;
    				img{
    					width: 100%;
    				}
    			}
    		}
    		.swiper-right{
    			width: 6.8rem;
				height: 1.3rem;
				margin: auto;
				margin-top: 0.06rem;
    			position: relative;
    			.pre{
    				width: 0.25rem;
    				height: 1.22rem;
    				position: absolute;
    				top: 5px;	
    				left: 0;
    				background: url(https://img.guoanfamily.com/rentPC/rentdetaile/arrow1.png) no-repeat center;
    				background-size:100% 100% ;
    				z-index: 10;
    				cursor: pointer;
    			}
    			.next{
    				width: 0.25rem;
    				height: 1.22rem;
    				position: absolute;
    				top: 5px;	
    				right: 0;
    				background: url(https://img.guoanfamily.com/rentPC/rentdetaile/arrow2.png) no-repeat center;
    				background-size:100% 100% ;
    				z-index: 10;
    				cursor: pointer;
    			}
    			
    			
    			.swiper-right-content{
    				height:100%;
    				width: 100%;
    				position: relative;
    				overflow: hidden;
    				.swiper-indicator{
    					width: 20rem;
    					height:100%;
    					position: absolute;
    					left: 0;
    					top:0;
    					z-index: 0;
    					transition: all .3s;
    					overflow:hidden;
    					.swiper-indicator-item{
    						width: 1.65rem;
    						height: 1.24rem;
    						float: left;
    						margin-right: 0.06rem;
    						border: 0.01rem solid #dadada;
    						margin-top:0.04rem ;
    						img{
    							width: 100%;
    							height: 100%;
    							cursor: pointer;
    						}
    						
    					}
    					.changeIndicator{
    						border: 0.01rem solid #fea100;
    						width: 1.65rem;
    						height: 1.24rem;
    						img{
    							width: 100%;
    							height: 100%;
    							
    						}
    					}
    				}
    			}
    		}
    	}
		
		
		.introduction{
			width: 4.6rem;
			background: url(https://img.guoanfamily.com/rentPC/rentdetail/Room-introduction.png) no-repeat center;
			background-size:100% 100%;
		}
		.peizhi{
			width: 4.86rem;
			background: url(https://img.guoanfamily.com/rentPC/rentdetail/Room-configuration--.png) no-repeat center;
			background-size:100% 100%;
		}
		.hezu{
			width: 4.24rem;
			background: url(https://img.guoanfamily.com/rentPC/rentdetail/Shared-roommate.png) no-repeat center;
			background-size:100% 100%;
		}
		.fukuan{
			width: 4.24rem;
			background: url(https://img.guoanfamily.com/rentPC/rentdetail/Payment-method.png) no-repeat center;
			background-size:100% 100%;
		}
		.zhoubian{
			width: 5.5rem;
			background: url(https://img.guoanfamily.com/rentPC/rentdetail/Real-estate-information.png) no-repeat center;
			background-size:100% 100%;
		}
		.srounding-word{
			box-sizing: border-box;
			padding: 0.25rem 0.1rem 0.3rem 0.2rem;
			border-bottom: 1px solid #DDDDDD;
			
			.p1{
				font-size: 0.18rem;
				span{
					color: rgb(68,68,68);
				}
			}
		}
		.word-instrudoction{
			overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
			transition: all .3s;
			.p1{
				color: #444444;
			}
			.instrudoction-title{
				font-size: 18px;
				color: black;
			}
		}
		.house-miaoshu{
			overflow: hidden;
			margin-top:0.1rem ;
			.house-zhoubian{
				width: 0.6rem;
				float: left;
				
			}
			.house-jiaotong{
				width: 5.9rem;
				float: left;
				color: #444444;
				font-size: 18px;
			}
		}
		.houseintroduction{
			text-align: left;
			white-space: pre-wrap;
			font-size: 0.18rem;
			color: rgb(68,68,68);
			box-sizing: border-box;
			padding:.25rem .25rem 0;
			text-indent: -23.6em;
		}
		.srounding-arrow{
			width: 1rem;
			font-size: 0.18rem;
			color: #E34B3E;
			margin-top: 0.35rem;
			cursor: pointer;
			img{
				width: 24%;
				margin-left: 0.05rem;
			}
		}
		
		.peizhi-item-out{
			border-bottom: 1px solid #DDDDDD;
			padding-bottom: 0.2rem;
		}
		.peizhi-item{
			box-sizing: border-box;
			padding: 0.3rem;
			overflow: hidden;
			.peizhi-list{
				width: 33.33%;
				float: left;
				height: 0.4rem;
				line-height:0.4rem;
				margin:0.05rem 0 ;
				font-size:18px;
				color:#444444;
				
				img{
					width: 0.4rem;
					height: 0.4rem;
					float: left;
					margin-right: 0.05rem;
				}
				
			}
		}
		.hezutiele{
			width: 100%;
			overflow: hidden;
			position: relative;
			.turn-hezu{
				width: 0.66rem;
				height: 0.3rem;
				/*float: right;*/
				position:absolute;
				bottom:0;
				right:0;
				.hezuleft,.hezuright{
					width: 0.3rem;
					height: 0.3rem;
					cursor: pointer;
					outline: none;
					border: 0;
					cursor: pointer;
				}
				.hezuleft{
					float: left;
					background: url(https://img.guoanfamily.com/rentPC/rentdetail/hezuright.png) no-repeat center;
					background-size:100% 100%;
					position: relative;
					left: -0.2rem;
    				top: 0.15rem;
    				transform:rotate(-180deg);
				}
				.hezuright{
					float: right;
					background: url(https://img.guoanfamily.com/rentPC/rentdetail/hezuright.png) no-repeat center;
					background-size:100% 100%;
				}
			}
		}
		.hezulist{
			position: relative;
			padding-bottom: 30px;
			.hezu-ul{
				overflow: hidden;
			}
				.hezu-li{
					width: 2.3rem;
					text-align: center;
					float: left;
					padding:0.6rem 0 0.2rem;
					background: rgb(244,244,244);
					margin-top: 48px;
					.hezu-img{
						width: 1.6rem;
						height: 1.6rem;
						margin: auto;
						background-size: 100% 100%;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.hezu-weiruzhu{
						width: 1.6rem;
						height: 1.6rem;
						margin: auto;
						background-size: 100% 100%;
						
					}
					.isRent{
						height: 3rem;
						overflow: hidden;
						.hezuaihao-title{
							font-size: 0.24rem;
							color: rgb(241,80,68);
							text-align: center;
							margin: 0.7rem 0 0.22rem;
						}
						.hezu-aihao{
							width: 2.3rem;
							margin:0 auto 0.5rem;
							font-size: 0.16rem;
							color: rgb(187,187,187);
							
						}
						.hezu-zhiye-xingzou{
							width: 2.2rem;
							margin: auto;
							overflow: hidden;
							.hezu-zhiye{
								width: 50%;
								float: left;
								box-sizing: border-box;
								border-right: 1px solid #DDDDDD;
								.p1{
									font-size: 0.24rem;
									color: rgb(241,80,68);
									text-align: center;
								}
								.p2{
									font-size: 0.16rem;
									color: rgb(187,187,187);
									text-align: center;
									margin-top: 5px;
								}
							}
							.hezu-price{
								width: 50%;
								margin: auto;
								.p1{
									font-size: 0.24rem;
									color: rgb(241,80,68);
									text-align: center;
								}
								.p2{
									font-size: 0.18rem;
									color: rgb(187,187,187);
									text-align: center;
								}
							}
							.hezu-xingzuo{
								border-right: 0;
							}
						}
						.weihezu{
							margin: 0.7rem auto 0;
						}
					}
					.hezu-zhuangtai{
						width: 1.66rem;
						height: 0.6rem;
						background: rgb(187,187,187);
						text-align: center;
						line-height: 0.6rem;
						color: white;
						border-radius: 0.3rem;
						margin: 0.2rem auto 0rem;
						font-size: 0.14rem;
					}
					.hezu-self{
						width: 1.66rem;
						height: 0.6rem;
						box-sizing: border-box;
						border: 2px solid #E34B3E;
						text-align: center;
						line-height: 0.6rem;
						color: #E34B3E;
						border-radius: 0.3rem;
						margin: 0.2rem auto 0rem;
						font-size: 0.14rem;
					}
					.kanfang{
						background: #E34B3E;
						cursor: pointer;
					}
					.hezu-zuqi{
						width: 2.2rem;
						margin: auto;
						height: 0.5rem;
						line-height: 0.5rem;
						font-size: 0.14rem;
						color: rgb(105,109,111);
						text-align: center;
					}
					.dairuzhu{
						font-size: 0.19rem;
						color: #696d6f;
					}
					
				}
					
		}
		
		.fukuan-ul{
			overflow: hidden;
			.fukuan-li{
				width: 1.08rem;
				height: 1.08rem;
				float: right;
				margin-top:0.4rem ;
				background: url(https://img.guoanfamily.com/rentPC/rentdetail/fuwu.png) no-repeat center;
				background-size:100% 100% ;
				margin-right:0.76rem ;
			}
			.fukuan-li2{
				background: url(https://img.guoanfamily.com/rentPC/rentdetail/yajin.png) no-repeat center;
				background-size:100% 100% ;
			}
			
			.fukuan-li3{
				background: url(https://img.guoanfamily.com/rentPC/rentdetail/zujin.png) no-repeat center;
				background-size:100% 100% ;
			}
		}
		
		.jifu-ul{
			width: 100%;
			overflow: hidden;
			margin-top: 0.2rem;
			.jifu-li{
				width: 1.1rem;
				height: 0.28rem;
				text-align: center;
				line-height: 0.28rem;
				float: left;
				font-size: 0.18rem;
				color: rgb(33,29,52);
			}
			.jifu-li-title{
				background: #E34B3E;
				color: white;
			}
			.jifu-li-right{
				float: left;
				margin-left: 0.4rem;
			}
		}
		
		.map{
			width: 7rem;
			margin: 0.4rem 0 ;
			box-sizing: border-box;
			padding: 0.2rem;
			background: rgb(250,250,250);
			box-shadow: 0px 0px 10px #DDDDDD;
			
			.map-search{
				font-size: 0.16rem;
				ul{
					overflow: hidden;
				}
				li{
					height: 0.3rem;
					line-height: 0.3rem;
					margin-right: 0.2rem;
					float:left;
					cursor: pointer;
				}
				.location-room{
					float: right;
					color: rgb(173,219,247);
					margin-right: 0;
					img{
						width: 0.1rem;
						height: 0.12rem;
						float: left;
						margin-top: 0.08rem;
						margin-right: 0.1rem;
					}
				}
			}
			.map-show{
				margin-top:0.2rem ;
				height: 4.2rem;
				.mapBox{
					width: 100%;
					height: 100%;
				}
			}
			.byType{
				overflow: hidden;
				margin: 0.3rem 0;
				.comehere ,.goother {
					width: 1.6rem;
					font-size: 0.16rem;
					color: rgb(34,34,34);
					float: left;
					margin-right: 0.3rem;
					cursor: pointer;
					img{
						margin-right: 0.1rem;
					}
				}
			}
			.routeLine{
				height: 0.46rem;
				input{
					width: 3rem;
					height: 100%;
					border: 1px solid #cdcdcd;
					outline: none;
					border-radius:5px ;
					text-indent: 1em;
				}
				button{
					width: 0.9rem;
					height: 100%;
					border: 1px solid #cdcdcd;
					outline: none;
					border-radius:5px ;
					margin-right: 5px;
					box-sizing: border-box;
					cursor: pointer;
				}
			}
			
		}
		
		
	}
	
	
	.page-right{
		width: 4.3rem;
		float: right;
		padding-top: 0.76rem;
		.room-detaile{
			width: 100%;
			box-sizing: border-box;
			border: 1px solid #DDDDDD;
			margin-top: 0.73rem;
			padding: 0.36rem 0.24rem;
			.room-price{
				color: rgb(68,68,68);
				font-size: 0.36rem;
				.span1{
					font-size: 0.24rem;
				}
				.span2{
					font-size: 0.16rem;
				}
			}
			.price-method{
				font-size: 0.16rem;
				color: rgb(187,187,187);
			}
			.shoucang{
				width: 1.66rem;
				height: 0.5rem;
				background: rgb(239,239,239);
				border-radius: 0.25rem;
				float: left;
				vertical-align: middle;
				font-size: 0.14rem;
				line-height: 0.5rem;
				text-align: center;
				cursor: pointer;
				margin: 0.2rem 0.2rem 0.2rem 0;
				img{
					vertical-align: middle;
				}
			}
			.room-detaile-peizhi{
				overflow: hidden;
				.room-detaile-peizhi-item{
					float: left;
					width: 50%;
					height: 0.2rem;
					font-size: 0.18rem;
					line-height: 0.2rem;
					margin-top: 0.2rem;
				}
			}
			.tese,.jioatong{
				font-size: 0.18rem;
				overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
				margin-top: 0.1rem;
				span{
					font-size: 18px;
					color: black;
				}
			}
			.yuekan{
				width: 3.8rem;
				height: 0.55rem;
				text-align: center;
				line-height: 0.55rem;
				color: white;
				background: #E34B3E;
				border-radius: 0.05rem;
				margin-top: 0.4rem;
				cursor: pointer;
				border: 1px solid white;
				transition: all .3s
			}
			.yuekan1{
				width: 3.8rem;
				height: 0.55rem;
				text-align: center;
				line-height: 0.55rem;
				
				border-radius: 0.05rem;
				margin-top: 0.4rem;
				cursor: pointer;
				
				transition: all .3s;
				
				color: #E34B3E;
				background: white;
				border: 1px solid #E34B3E;
			}
			.yuding{
				margin-top:0.15rem ;
				background: #E34B3E;
			}
			
			
		}
		.guanjia{
			width: 100%;
			padding-top: 0.2rem;
			box-sizing: border-box;
			border: 1px solid #DDDDDD;
			margin-top: 0.32rem;
			position: relative;
			.guanjia-top {
				position:relative;
				.erweima-share{
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					background: rgba(0,0,0,.7);
					.logo{
						width: 0.4rem;
						height: 0.4rem;
						position: absolute;
						top: 0;
						bottom: 0;
						right: 0;
						left: 0;
						margin: auto;
						z-index: 10;
					}
					.checkCode-img{
						height: 136px ;
    					width: 136px ;
						position: absolute;
						top: 0;
						bottom: 0;
						right: 0;
						left: 0;
						margin: auto;
					}
					.erweima-close{
						width: 0.5rem;
						height: 0.5rem;
						position: absolute;
						right: 0;
						color: white;
						font-size: 0.5rem;
						text-align: center;
						line-height: 0.5rem;
						cursor: pointer;
					}
					.erweima-close:hover{
						color: #E34B3E;
					}
					canvas{
						height: 136px !important;
    					width: 136px !important;
						position: absolute;
						top: 0;
						bottom: 0;
						right: 0;
						left: 0;
						margin: auto;
						border-radius: 0.1rem;
					}
				}
				.guanjia-touxinag{
					height: 1.2rem;
					background: url(https://img.guoanfamily.com/rentPC/rentdetail/guanjia.png) no-repeat center;
					background-size:71% 100% ;
				}
				.guanjia-jieshao-out{
					box-sizing: border-box;
					padding: 0 0.18rem 0.18rem 0.18rem;
					.guanjia-jieshao{
						border-bottom: 1px solid #DDDDDD;
						padding-bottom:0.15rem;
						.p1{
							font-size: 0.18rem;
							color: rgb(37,50,56);
							font-weight: 600;
						}
						.p2{
							font-size: 0.16rem;
							color: rgb(37,50,56);
							margin-top:0.05rem ;
						}
					}
					
				}
			}
			
			.jieshao-list{
				padding-left:0.18rem;
				overflow: hidden;
				
				.jieshao-list-left{
					float:left;
					box-sizing: border-box;
					border-right:1px solid #DDDDDD;
					.list-item{
						width: 2.7rem;
						height: 0.25rem;
						line-height: 0.25rem;
						font-size: 0.16rem;
						color: rgb(37,50,56);
						padding-right: 0.15rem;
						margin-top: 0.05rem;
						overflow: hidden;
						text-overflow: ellipsis;
					    white-space: nowrap;
						margin-top: 0.1rem;
						.list-item-title{
							width: 0.6rem;
							height: 0.25rem;
							color: white;
							text-align: center;
							line-height: 0.25rem;
							float: left;
							font-size: 0.16rem;
							background: rgb(187,187,187);
							margin-right: 0.1rem;
						}
					}
				}
				.jieshao-list-right{
					width: 1.3rem;
					float: left;
					text-align: center;
					margin-top: 0.25rem;
					cursor: pointer;
					img{
						width: 0.6rem;
						height: 0.48rem;
						margin: auto;
						
					}
					p{
						font-size: 0.16rem;
						color: rgb(37,50,56);
					}
				}
				
				
			}
			.phone-call{
				width: 3.96rem;
				margin: auto;
				border-top: 1px solid #DDDDDD;
				height: 0.6rem;
				box-sizing: border-box;
				text-align: center;
				font-size: 0.24rem;
				color: rgb(214,0,15);
				line-height: 0.6rem;
				margin-top: 0.1rem;
				img{
					width: 0.2rem;
					height: 0.2rem;
					margin-top: 0.05rem;
					margin-right: 0.1rem;
				}
			}
			
		}
		.guanjiaFix{
			width: 4.3rem;
			padding-top: 0.2rem;
			box-sizing: border-box;
			border: 1px solid #DDDDDD;
			margin-top: 0.32rem;
			position: absolute;
			top: 0;
			right: 0;
		}
		
		
	}
</style>