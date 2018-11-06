<template>
	<div>
		<div class="search-shadow">
			<div class="search-shadow-inner">
				<input type="text" v-model="searchInput" placeholder="请输入您想要居住的小区" @keydown="enterClick"/>
				<div class="search-btn" @click="btnClick"></div>
			</div>
			<div class="search-word">
				<ul>
					<li class="search-li">热门区域：</li>
					<li class="search-li search-li-ex" v-for="(item,index) in searcharea" :key='index' @click="hotArea(item)">{{item}}</li>
					<li class="search-li more_li" @click="ToRentList">MORE+</li>
					<li class="search-li" style="margin-left: .3rem;">热门小区：</li>
					<li class="search-li search-li-ex" v-for="(item,index) in searchhouse" :key='item' @click="hotArea(item)">{{item}}</li>
					<li class="search-li more_li" @click="ToRentList">MORE+</li>

				</ul>
				<div class="searchsubway" @click="toToSubway">地铁找房</div>
				<div class="searchsubway" style="margin-right: 0.1rem;" @click="toToMap">地图找房</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data (){
			return{
				searchInput:'',
				searcharea:['朝阳','海淀','西城','通州','呼家楼'],
				searchhouse:['林奥嘉园','安和家园','玉璞家园'],
			}
		},
		methods:{
			btnClick(){
				this.$router.push({path:'/rent/rentList/',query:{searWords:this.searchInput}})
			},
			//搜索框搜索
        	enterClick(e){
        		if(e.keyCode==13){
        			this.$router.push({path:'/rent/rentList/',query:{searWords:this.searchInput}})

                }
        	},
        	toToSubway(){
        		this.$router.push({path:'/rent/nuxtMapSearchHouse/',query:{subway:"subway"}})
        	},
        	toToMap(){
        		this.$router.push({path:'/rent/nuxtMapSearchHouse/'})
        	},
        	hotArea(item){
        		this.$router.push({path:'/rent/rentList/',query:{searWords:item}})
			},
			ToRentList(){
        		this.$router.push({path:'/rent/rentList/'})

			}
		}
	}
</script>

<style lang="less" scoped>
.search-shadow{
	width: 100%;
	height:1.5rem;
	background:rgba(0,0,0,.5);
	overflow:heidden;
	box-sizing: border-box;
	padding-top:0.2rem;
	.search-shadow-inner{
		width:860px;
		height: 0.7rem;
		margin: auto ;
		background:transparent;
		border-radius:0.35rem;
		position:relative;
		.search-btn{
			width: 0.4rem;
			height: 0.4rem;
			position: absolute;
			background: url("https://img.guoanfamily.com/rentPC/rentindex/searchBtn.png") no-repeat center;
			background-size:100% 100%;
			top: 0.15rem;
    		right: 0.06rem;
    		cursor: pointer;
		}
		input{
			width: 100%;
			height: 0.5rem;
			margin-top:0.1rem;
			outline:none;
			border:0;
			border-radius:0.25rem;
			text-indent:1.5em;
			font-size:0.14rem;
			color: #666666;
		}
	}
	.search-word{
		width:860px;
		margin: 0.06rem auto 0;
		height: 0.26rem;
		line-height: 0.26rem;
		color: white;
		box-sizing: border-box;
		padding-left: 0.1rem;
		.search-li{
			float: left;
			font-size: 0.12rem;
			margin-right: 0.05rem;
			&.more_li{
				vertical-align: top;
				background-color: #fff;
				line-height: 0.24rem;
				padding: 0 .1rem;
				height: 0.26rem;
				border-radius: .13rem;
				color: #000;
				margin-left: .06rem;
				cursor: pointer;
				&:hover{
					background-color: #D6000F;
					color: #fff;
				}
			}
		}
		.search-li-ex{
			cursor: pointer;
		}
		.search-li-ex:hover{
			color: #E34B3E;
		}
		.searchsubway{
			width: 1rem;
			height: 0.3rem;
			line-height: 0.3rem;
			float: right;
			border-radius: 0.15rem;
			background: #e34b3e;
			text-align: center;
			font-size: .14rem;
			cursor: pointer;
			position: relative;
			top: -0.03rem;
			left: 0;
		}
		.searchsubway:active{
			background: white;
			color: #E34B3E;
		}
	}
}

</style>