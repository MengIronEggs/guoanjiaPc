<template>
  <div class="headerNav">
    <div class="nav">
			<div class="loco" @click="logoClick" name="logo"></div>
			<div class="nav_box">
				<div class="nav_box_info">
					<ul class="bav_ul" ref="headNavUl" @mouseover="activedEnter" @mouseout="activedOut" @mouseleave="activeLeave">
						<li :class="{actived:actNum==1}" @click="gotoIndex">首页</li>
						<li :class="{actived:actNum==2}" @click="gotonewIndex">新房</li>
						<li :class="{actived:actNum==4}" @click="gotorent">租房</li>
						<li :class="{actived:actNum==5}" @click="gotoExhibition">展示中心</li>
						<li :class="{actived:actNum==6}" @click="aboutMe">关于我们</li>
					</ul>
					<div class="nameBox" @click.stop="login" @mouseenter="mouselist" @mouseleave="leavelist">
						<div class="NameLogo">
							<img v-if="!isLogin" src="https://img.guoanfamily.com/rentPC/newlogin/denglu1.png" alt="" />
							<img v-if="isLogin" src="https://img.guoanfamily.com/rentPC/newlogin/denglu2.png" alt="" />
						</div>
						{{$store.state.userName}}
						<div class="openList" ref="openListTop">
							<div class="list-item" v-for="(item,index) in listvalue" :key="index" @click="toPersonal(item,index,$event)">
								<img :src="item.src" alt="" />
								{{item.name}}
							</div>
						</div>
					</div>
					<div class="tel clearfix">
					<div class="tel_ico"></div>
						<div class="tel_num">400-900-2225</div>
					</div>
				</div>
			</div>
		</div>
   </div>
</template>

<script>
	import { objFn } from "../plugins/axios.js"
export default {
  props:["NavActived"],
  data() {
    return {
			realName:this.$store.state.userName,
			listvalue:[
			    {name:"个人中心",url:"/personalCenter/aboutMe/myLease",src:"https://img.guoanfamily.com/rentPC/login/zhongxin1.png"},
			    {name:"我的约看",url:"/personalCenter/aboutMe/appointment",src:"https://img.guoanfamily.com/rentPC/login/yuakan1.png"},
			    {name:"我的收藏",url:"/personalCenter/aboutMe/collect",src:"https://img.guoanfamily.com/rentPC/login/shoucang1.png"},
			    {name:"退出登录",src:"https://img.guoanfamily.com/rentPC/login/tuichu1.png"},
			],
			isLogin:false,
			NavActivedTmp:0,
			actNum:0
		};
	},

	mounted(){
		//判断有没有token
		this.actNum = this.NavActived
    if(localStorage.getItem("token")){
    	objFn.Axios(
        "agenthouseCutomer/common/getUserInfo",
        "post",{},{interfaceType: "RENT_HOUSE"}).then((res) =>{
          if(res.data&&res.data.name){
          	this.$store.state.userName = res.data.name;
          }else{
          	this.$store.state.userName = "客官";
          }
					this.isLogin=true;
					console.log(this.isLogin)
    	})
    }else{
			this.isLogin=false;
			console.log(this.isLogin)
		}
  },
  methods:{
  	toPersonal(item,index,e){
  		e.cancelBubble = true;
  		if(index == 3){
  			//退出
  			this.$store.state.userName = "登录";
        localStorage.removeItem("token");//清空localstorage
        localStorage.removeItem("standbyToken");//清空localstorage
        localStorage.removeItem("collectList");//清空收藏数组
        localStorage.removeItem("phoneNum");//清空收藏数组
				this.$router.push("/")//首页
				this.$refs.openListTop.style.display="none";
				this.isLogin=false;
        return false;
  		}else{
  			this.$router.push({path:item.url})
  		}
		},
		// 鼠标进入
		activedEnter(e){
			this.NavActivedTmp = this.actNum;
			this.actNum = 999
		},
		// 鼠标移动开
		activedOut(e){
      this.actNum = this.NavActivedTmp
		},
		// 鼠标离开
		activeLeave(e){
			this.actNum = this.NavActivedTmp
		},
		// 登录鼠标停留
  	mouselist(){
  		if(localStorage.getItem("token")){
  			var openList =this.$refs.openListTop;
  			openList.style.display="block";
  		}
		},
		// 登录鼠标离开
  	leavelist(){
  		var openList =this.$refs.openListTop;
  		openList.style.display="none";
		},
		// 跳转展示中心
  	gotoExhibition(){
  		this.$router.push('/exhibitionCenter/exhhibition');
		},
		// 登录
  	login(){
  		if(localStorage.getItem("token")){
  			return ;
  		}else{
  			this.$router.push('/loginIndex/loginIndex');
  		}

		},
		//  跳转新房首页
  	gotonewIndex(){
  		this.$router.push('/newHouse/newHouseIndex');
		},
		// 跳转租房首页
  	gotorent(){
      	this.$router.push('/rent/rentIndex');
		},
		// 跳转首页
    gotoIndex(){
      if(this.NavActived==1){
        return false;
      }else{
      	this.$router.push({path: "/"});
      }
    },
    // logo的点击事件
  logoClick(){
    this.$router.push({path:"/"})
  },
    // 关于我们
    aboutMe(){
      if(this.NavActived==6){
        return false;
      }else{
      	 this.$router.push({path:"/aboutus/aboutus"});
      }
    }

  },
  components: {}
};
</script>

<style scoped lang="less">
  .headerNav{
    border-bottom: 1px solid #ccc;
  }
	.nav{
    height: 60px;
    width: 100%;
		background: #fff;
		position: relative;
    // border-bottom: 1px solid #ccc;
    .loco{
      cursor: pointer;
      float: left;
      height: 43px;
      width: 128px;
      background: url("https://img.guoanfamily.com/rentPC/indexPage/logo.png") center no-repeat ;
      background-size: 100% 100%;
      margin-left: 94*0.8/1920*100%;
      margin-top:8px;
		}
		.nav_box{
			position: absolute;
			left: 300px;
			right: 0;
			top:0;
			height: 100%;
			.nav_box_info{
				width: 910px;
				height: 100%;
				float: right;

			}
		}
    .bav_ul{
      float: left;
      height: 100%;
      margin-left: 0%;

			display: flex;
      vertical-align: top;
			white-space: nowrap;
			cursor: pointer;
			list-style:none;
      li{

        line-height: 60px;
        vertical-align: top;
        font-size: 16px;
				padding: 0 21px;
				margin: 0;
				position: relative;
        &:hover{
          background-color: #D6000F;
          color: #fff;
				}
				&.actived{
					cursor: pointer;
          background-color: #D6000F;
          color: #fff;
				}
      }



    }
    .nameBox{
    	width: 160px;
    	text-align: center;
    	font-size: 20px;
    	float: left;
    	height:60px;
    	line-height: 60px;
    	position: relative;
    	cursor: pointer;
			margin-left: 22/1920*100%;
			font-size: 16px;
			.NameLogo{
				width: 13px;
				height: 15px;
				display: inline-block;
				position: relative;
				top: -2px;
				img{
					width: 100%;
					height: 100%;
				}
			}
    	img{
    		width: 20px;
    		height: 20px;
    		vertical-align: middle;
    	}
    	 .openList{
      	position: absolute;
      	top: 60px;
      	left: 0;
      	width:150px;
      	z-index: 1000;
      	background: white;

      	box-shadow: 0 2px 10px #DDDDDD;
      	display: none;
      	.list-item{
      		width: 100%;
					height: 60px;
					font-size: 16px;
      		color: #666666;
      		img{
      			width: 20px;
      			height: 20px;
      			vertical-align: middle;
      		}
      	}
      	.list-item:hover{
      		background: #DDDDDD;
      	}
      }
    }
    .tel{
      height: 22px;
      margin-top:19px;
      float: left;
			margin-left: 5%;

      .tel_ico{
				// margin-top: 1px;
        float: left;
        width: 20px;
        height: 20px;
        background: url("https://img.guoanfamily.com/rentPC/indexPage/telIco.png") center no-repeat;
				background-size: 100% 100%;
				margin-top: 1px;
      }
      .tel_num{
        float: left;
        height: 22px;
        padding-left: 8px;
        font-size: 18px;
        color: rgb(0,0,0);
        line-height: 22px;
      }
    }
  }
</style>
