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
				border: 1px solid #999999;
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
					border-top: 1px solid #999999;
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
						<li class="search-li" v-for="(item,index) in searchhouse" :key='index'>{{item}}</li>
					</ul>
					<div class="searchsubway">地铁找房</div>
					<div class="searchsubway" style="margin-right: 0.1rem;">地图找房</div>
				</div>
			</div>
		</div>
		<!--国安家租房-->
		<div class="titleBox">
			<p class="p1">国安家故事</p>
			<p class="p2">梦在山海间 住在风景里</p>
		</div>
		<div class="rent-house">
			<div class="rent-house-item">
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