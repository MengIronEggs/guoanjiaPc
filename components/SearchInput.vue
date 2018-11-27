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
					<li class="search-li" style="margin-left: 30px;">热门小区：</li>
					<li class="search-li search-li-ex" v-for="(item,index) in searchhouse" :key='item' @click="hotArea(item)">{{item}}</li>
					<li class="search-li more_li" @click="ToRentList">MORE+</li>

				</ul>
				<div class="searchsubway" @click="toToSubway">地铁找房</div>
				<div class="searchsubway" style="margin-right: 10px;" @click="toToMap">地图找房</div>
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
				searchhouse:['林奥嘉园','世华泊郡','玉璞家园'],
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
	height:150px;
	background:rgba(0,0,0,.5);
	overflow:heidden;
	box-sizing: border-box;
	padding-top:20px;
	.search-shadow-inner{
		width:860px;
		height: 70px;
		margin: auto ;
		background:transparent;
		border-radius:35px;
		position:relative;
		.search-btn{
			width: 40px;
			height: 40px;
			position: absolute;
			background: url("https://img.guoanfamily.com/rentPC/rentindex/searchBtn.png") no-repeat center;
			background-size:100% 100%;
			top: 15px;
    		right: 6px;
    		cursor: pointer;
		}
		input{
			width: 100%;
			height: 50px;
			margin-top:10px;
			outline:none;
			border:0;
			border-radius:25px;
			text-indent:20px;
			font-size:14px;
			color: #666666;
		}
	}
	.search-word{
		width:860px;
		margin: 6px auto 0;
		height: 26px;
		line-height: 26px;
		color: white;
		box-sizing: border-box;
		padding-left: 10px;
		.search-li{
			float: left;
			font-size: 12px;
			margin-right:5px;
			&.more_li{
				vertical-align: top;
				background-color: #fff;
				line-height: 24px;
				padding: 0 10px;
				height: 26px;
				border-radius: 13px;
				color: #000;
				margin-left: 6px;
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
			width: 100px;
			height:30px;
			line-height: 30px;
			float: right;
			border-radius: 15px;
			background: #e34b3e;
			text-align: center;
			font-size: 14px;
			cursor: pointer;
			position: relative;
			top: -3px;
			left: 0;
		}
		.searchsubway:active{
			background: white;
			color: #E34B3E;
		}
	}
}

</style>