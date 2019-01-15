<template>
	<div>
		<div class="search-shadow">
			<div class="search-shadow-inner">
				<input type="text" v-model="searchInput" placeholder="请输入您想要居住的小区" @keydown="enterClick"/>
				<div class="search-btn" @click="btnClick">搜索 <img style="position: relative;top: 2px;"  src="https://media.guoanfamily.com/guoanjiaPc/static/search.jpg" alt="" /></div>
				<div class="search-btn" @click="toToMap">地图找房 <img style="position: relative;top: 2px;" src="https://media.guoanfamily.com/guoanjiaPc/static/map.jpg" alt="" /></div>
				<div class="search-btn" style="margin-right: 0;" @click="toToSubway" >地铁找房 <img src="https://media.guoanfamily.com/guoanjiaPc/static/bus.png" alt="" /></div>
			</div>
			<div class="search-word">
					<div style="float: left;">
						<div class="search-li">热门区域：</div>
						<div class="search-li search-li-ex" v-for="(item,index) in searcharea" :key='index' @click="hotArea(item)">{{item}}</div>
						<div class="search-li more_li" @click="ToRentList">MORE+</div>
					</div>
					<div style="float: left;">
						<div class="search-li" style="margin-left: 10px;">热门小区：</div>
						<div class="search-li search-li-ex" v-for="(item,index) in searchhouse" :key='item' @click="hotArea(item)">{{item}}</div>
						<div class="search-li more_li" style="margin-right: 0;" @click="ToRentList">MORE+</div>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data (){
			return{
				searchInput:'',
				searcharea:['朝阳','朝阳','海淀','西城','通州','国贸','呼家楼'],
				searchhouse:['林奥嘉园','世华泊郡','玉璞家园','远洋一方'],
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
	width: 1040px;
	height:140px;
	margin: auto;
	background:rgba(0,0,0,.5);
	overflow:heidden;
	box-sizing: border-box;
	padding-top:20px;
	.search-shadow-inner{
		width:100%;
		height: 60px;
		margin: auto ;
		background:transparent;
		position:relative;
		box-sizing:border-box;
		padding:0 20px;
		.search-btn{
			width: 120px;
			height: 60px;
			float: left;
			box-sizing: border-box;
			border: 1px solid white;
    		cursor: pointer;
    		text-align: center;
    		line-height: 60px;
    		background: rgb(227,75,62);
    		color: white;
    		font-size: 20px;
    		margin-right: 18px;
		}
		input{
			width: 600px;
			height: 60px;
			outline:none;
			border:0;
			text-indent:20px;
			font-size:14px;
			color: #666666;
			float: left;
		}
	}
	.search-word{
		width:100%;
		height: 26px;
		line-height: 26px;
		color: white;
		box-sizing: border-box;
		padding: 10px 20px 0;
		margin-top: 5px;
		.search-li{
			float: left;
			font-size: 12px;
			margin-right:12px;
			&.more_li{
				vertical-align: top;
				background-color: #fff;
				line-height: 24px;
				padding: 0 10px;
				height: 26px;
				border-radius: 13px;
				color: #000;
				margin-left: 30px;
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