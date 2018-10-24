<template>
	<div>
		<headeNav></headeNav>
		<div class="banner">
			
		</div>
		<div class="pagecontent">
			<div class="left" ref="left">
				<div class="select-list" ref="list" :class="itemStyle[index]" @click="changeSelect(index)" v-for="(item,index) in list" :key="index">{{item}}</div>
			</div>
			<div class="right">
				<div class="page1" v-if=" listIndex == 0">
					<p class="title1">国安城市</p>
					<p class="tiele2">国安家</p>
					<p class="tiele3">西藏中信国安房地产项目管理有限公司(简称"国安家")，作为中信国安集团旗下中信国安城市发展控股有限公司的下属公司，秉承了中信的企业精神，发扬诚信、凝聚、奉献、创新、融合、卓越的企业文化。</p>
					<div class="vedio">
						<video src="http://img.guoanfamily.com/WeChatSight3.mp4" autoplay controls poster="https://media.guoanfamily.com/www/video_1.jpg">your browser does not support the video tag</video>
					</div>
					
					<p class="tiele2">国安家文化一切以客户为中心</p>
					<p class="tiele3">国安家全员，同心协力，精诚合作，在为客户提供最好产品与服务的同时，肩负时代使命，推进房地产行业持续创新。</p>
					
					<p class="tiele2">房地产创新服务平台</p>
					<p class="tiele3">随着中央提出供给侧结构性改革要求，地产商从“传统地产开发”转向“运营+服务”，成为当前主流趋势。用互联网思维增加产品和服务的创新，成为地产商提升自身竞争力的发展路径。在此时代背景下，中信国安城市发展控股有限公司倾力打造房地产创新服务平台———国安家。</p>
					<p class="tiele3">国安家以“互联网+”为发展路径，以大数据运用为支撑，以颠覆传统房地产开发模式为目标，涵盖新房、不动产托管、二手房、展示中心、金融五大产业板块，打造全产业链不动产管理平台</p>
					
					<p class="tiele2">中信国安集团</p>
					<p class="tiele3">亚太经合组织联席企业千亿规模永争第一</p>
					<p class="tiele3">38载央企，信任源自使命1979年，中国中信集团有限公司在邓小平同志支持下，由前国家副主席荣毅仁同志创立。成立以来，公司充分发挥经济改革试点和对外开放窗口的重要作用。在诸多领域进行了卓有成效的探索与创新，成功开辟出一条通过吸收和运用外资、引进先进技术、设备和管理经验，为中国改革开放和现代化建设服务的创新。</p>
					
					
					<p class="tiele3">千亿规模，亚太经合组织联席企业</p>
					<p class="tiele3">截至2015年末，国安集团合并总资产1580亿元，合并净资产325亿元。2015年，实现营业收入935亿元。</br>					强大实力备受国际、国内认可————</br>									1.成为亚太经合组织（APEC）中国企业联席会议成员企业。</br>									2.成为中国企业联合会、中国企业家协会成员企业。</br>									3.“国安”商标为著名商标和知名名牌。</br>									中信国安集团的雄厚实力和“永远争第一”的企业文化，赋予国安家勇于挑战、一往无前的企业性格。</p>
				
				</div>
				<div class="page2" v-if=" listIndex == 1">
					<p class="title1">公司活动</p>
					<p class="tiele2">国安家"0循环服务"惊艳北京春季房展会</p>
					<p class="tiele3">在众多地产项目的围绕中，凭借"不卖楼盘卖服务"的国安家,成为2017年春季房展会上的一大亮点。其中,国安家提出的"0循环服务",引发业内的广泛关注。</p>
					<div class="img-list">
						<div class="img-item">
							<img src="../../static/aboutus/activity11.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity12.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity13.png" alt="" />
						</div>
					</div>
					
					<p class="tiele2">国安社会518邻礼狂欢节　火爆津城</p>
					<p class="tiele3">一场暖心的邻里活动点燃津城。国安社区组织的这场狂欢节包括掷骰子,套圈,打保龄球等邻里趣味活动。通过这次邻里节活动,邻里之间的关系变得更加融治。</p>
					<div class="img-list">
						<div class="img-item">
							<img src="../../static/aboutus/activity21.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity22.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity23.png" alt="" />
						</div>
					</div>
					
					<p class="tiele2">一年匠心沉淀　国安家产品体系1.0面世</p>
					<p class="tiele3">2017年8月25日,国安家"媒玩媒聊"媒体见面会暨国安家产品体系1.0系列发布会在万通中心完美落幕。这一产品体系,将在一定程度上推动房产居住价值的回归,正如本次活动主题所言:"让房子更有生命力"。</p>
					<div class="img-list">
						<div class="img-item">
							<img src="../../static/aboutus/activity31.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity32.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity33.png" alt="" />
						</div>
					</div>
				
					<p class="tiele2">国安家公寓首场"家宴"五湖四海家友欢聚一堂</p>
					<p class="tiele3">国安家首场家宴于2017年8月xx日温馨开席。正如家宴主题所说:人生如宴,有幸遇见。来自五湖四海的家友因为缘分相聚在一起,家宴正是家友变密友的一个开端。</p>
					<div class="img-list">
						<div class="img-item">
							<img src="../../static/aboutus/activity4.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity42.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity3.png" alt="" />
						</div>
					</div>
					
					
					<p class="tiele2">秋季海南看房旅游团　国庆佳节登岛览胜</p>
					<p class="tiele3">2017年国庆期间,国安家秋季海南看房旅游团启程登岛,在考察晋唐海湾等项目之余,也饱览了海南盛景,真实体验到了"白浪逐沙滩,椰林醉斜阳",令人不虚一行。</p>
					<div class="img-list">
						<div class="img-item">
							<img src="../../static/aboutus/activity51.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity52.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity53.png" alt="" />
						</div>
					</div>
					
					<p class="tiele2">夏季葫芦岛旅游看房团　盛夏启程避暑之旅</p>
					<p class="tiele3">2017年盛夏,国安家葫芦岛旅游看房团向北进发,在葫芦岛度过了一段难忘之旅。背山面海的山海龙城项目给人以不同于南国的海岸风光,令人流连忘返。</p>
					<div class="img-list">
						<div class="img-item">
							<img src="../../static/aboutus/activity61.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity62.png" alt="" />
						</div>
						<div class="img-item">
							<img src="../../static/aboutus/activity63.png" alt="" />
						</div>
					</div>
				</div>
				<div class="page3" v-if=" listIndex == 2">
					<p class="title1">联系我们</p>
					<div class="map">
						<img src="../../static/aboutus/map-img.png" alt="" />
					</div>
					<p class="tiele3">地址：北京市朝阳区四惠东华腾世纪总部公园D座4层</p>
					<p class="tiele3">邮编：100124</p>
					<p class="tiele3">客服热线：400-900-2225</p>
				</div>
				<div class="page4" v-if=" listIndex == 4">
					<p class="title1">国安家隐私保护协议</p>
					<p class="tiele3">亲爱的朋友，欢迎您访问中信国安家的网站，我们尊重并保护您的个人隐私权，因此制订了隐私权保护政策( Privacy Policy)，并全力保护您的数据和隐私。请您详读以下内容并明白您个人数据被处理运用的方式。当您提供个人数据给予本网站后，我们将视为您已经同意并充分明白该隐私权的内容。</p>
					<p class="tiele2">使用范围</p>
					<p class="tiele3">以下的隐私权保护政策，适用于您在中信国安家网站的所有网络活动及行为，所涉及的个人数据搜集、运用与保护。隐私权保护政策不适用于国安家网站以外的网站，也不适用于国安家网站的管理员。国安家网站会保留您的网上浏览或查询时，硬件服务器自动所产生的相关记录，如IP地址、Cookie纪录时间、使用的浏览器及点选数据记录等所有相关信息，但不会提供给司法单位以外的其它用途。</p>
				
					<p class="tiele2">数据收集及使用方式</p>
					<p class="tiele3">当您申请成为国安家的合作伙伴时，会搜集您的个人识别资料；同时我们会了解您的姓名、电子邮件地址、电话信息等相关数据，并为您保密。</p>
						
					
					
					<p class="tiele2">数据分享及公开方式</p>
					<p class="tiele3">国安家网站不会向任何单位出借、交换、贩卖您的个人数据。</p>
					
					
					<p class="tiele2">数据的保全及安全性</p>
					<p class="tiele3">国安家网站会尊重并保障您数据的隐私及安全，所有您的相关数据将会严格保护。</p>
					
					
					<p class="tiele2">隐私权保护政策修订</p>
					<p class="tiele3">国安家网站可随时修订本政策，并于网页上公告，通知您相关内容。</p>
				</div>
				<div class="page5" v-if=" listIndex == 3">
					<p class="title1">租期服务</p>
					<div class="serve">
						<div class="serve-list">
							<img src="../../static/aboutus/img1.png" alt="" />
							<p class="tiele4">国安家客服服务</p>
							<p class="tiele3 title5">租期服务咨询</p>
							<p class="tiele3 title5">生活服务咨询</p>
						</div>
						
						
						<div class="serve-list" style="width: 13.7%;">
							<img src="../../static/aboutus/img2.png" alt="" />
							<p class="tiele4">宽带服务</p>
							<p class="tiele3 title5">高速网络</p>
							<p class="tiele3 title5">保障每个房间信号覆盖</p>
						</div>
						
						<div class="serve-list">
							<img src="../../static/aboutus/img3.png" alt="" />
							<p class="tiele4">保洁服务</p>
							<p class="tiele3 title5">月度保洁</p>
						</div>
						
						<div class="serve-list" style="width: 15.7%;">
							<img src="../../static/aboutus/img4.png" alt="" />
							<p class="tiele4">管家服务</p>
							<p class="tiele3 title5">租房服务 租期服务 带看服务</p>
						</div>
						
						<div class="serve-list" style="width: 19.7%;">
							<img src="../../static/aboutus/img5.png" alt="" />
							<p class="tiele4">房屋维修服务</p>
							<p class="tiele3 title5">电路维修 家具维修</p>
							<p class="tiele3 title5">房屋维修 门/锁/窗维修修</p>
							<p class="tiele3 title5">电器维修 管道疏通</p>
						</div>
						
						<div class="serve-list">
							<img src="../../static/aboutus/img6.png" alt="" />
							<p class="tiele4">安全服务</p>
							<p class="tiele3 title5">租客安全 保险安全</p>
						</div>
					</div>
					
					<p class="tiele2">特殊说明</p>
					<p class="tiele3">1、400电话服务时间9:00-20:00，超过此时间段问题可在国安家微信服务号后台留言，24小时内给予答复;</br>2、一般维修24小时内响应，最迟48小时内上门，紧急维修当天上门（报所有修如经维修师傅确认，物品未发现损坏，按照30元／次收取上门费用）;</br>3、门禁卡每个房间标配1个，超出数量按照50元／个标准收取;</br>4、房屋内现有物品即为入住交付物品，如非物品本身无法使用问题需要更换或者添加，所需费用由住户承担;</br>5、如维修师傅现场判断为人为原因导致，所需维修费用由行为责任人承担;</p>
					
					<p class="tiele3">注：</br>以年付总租金为基数，</br>季付，服务费收费标准为年租金的8% ;</br>半年付，服务费收费标准为年租金的7%;</br>年付，服务费收费标准为年租金的6%;</p>
					
				</div>
			
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
		data(){
			return{
				itemStyle:{
					"0":"selected"
				},
				list:["公司简介","公司活动","联系我们","租期服务","隐私保护"],
				listIndex:0
			}
		},
		methods:{
			changeSelect(index){
				this.listIndex = index;
				var oList = this.$refs.list;
				for(var i=0;i<oList.length;i++){
					if(index == i){
						oList[i].classList.add("selected");
					}else{
						oList[i].classList.remove("selected");
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
.banner{
	width: 100%;
	height: 5.5rem;
	background: url(../../static/aboutus/banner.jpg) no-repeat center;
	background-size:100% 100%;
}
.pagecontent{
	width: 12rem;
	margin: auto;
	overflow: hidden;
	padding-top:0.4rem ;
	padding-bottom: 1.2rem;
	.left{
		width: 2.4rem;
		height: 4.1rem;
		float: left;
		border: 1px solid #DDDDDD;
		.select-list{
			text-align: center;
			height:20%;
			box-sizing: border-box;
			border-bottom: 1px solid #DDDDDD;
			line-height: 0.9rem;
			color: #666666;
			cursor: pointer;
		}
		.selected{
			color: #d60006;
		}
		&:last-child{
			border: 0;
		}
	}
	.right{
		width:8.9rem;
		float: right;
		.title1 {
			font-size: 0.36rem;
		}
		.tiele2{
			font-size: 0.24rem;
			margin-top: 0.4rem;
		}
		.tiele3{
			color: #666666;
			font-size: 0.14rem;
			margin-top: 0.2rem;
			line-height: 0.25rem;
		}
		.tiele4{
			font-size: 0.16rem;
			margin-top: 0.3rem;
		}
		.title5{
			margin-top:0.1rem ;
		}
		.vedio{
			margin-top: 0.32rem;
		}
		.img-list{
			overflow: hidden;
			.img-item{
				float: left;
				width: 2.5rem;
				height: 1.7rem;
				background:lightsalmon;
				margin-right:0.4rem;
				margin-top:0.36rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
			&:last-child{
				margin-right: 0;
			}
		}
		.map{
			width: 8.6rem;
			margin: 0.32rem 0 0.3rem 0;
		}
		.serve{
			overflow: hidden;
		}
		.serve-list{
			width: 16.6%;
			float: left;
			text-align: center;
			margin-top: 0.3rem;
			img{
				width: 0.64rem;
				height: 0.64rem;
				margin: auto;
			}
		}
	}
}

</style>