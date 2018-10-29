<template>
  <div class="headerNav">
    <div class="nav">
			<div class="loco" @click="logoClick" name="logo"></div>
			<ul class="bav_ul">
				<li :class="{actived:NavActived==1}" @click="gotoIndex">首页</li>
				<li :class="{actived:NavActived==2}" @click="gotonewIndex">新房</li>
				<li :class="{actived:NavActived==4}" @click="gotorent">租房</li>
				<li :class="{actived:NavActived==5}" @click="gotoExhibition">展示中心</li>
				<li :class="{actived:NavActived==6}" @click="aboutMe">关于我们</li>

			</ul>

			<div class="nameBox" @click.stop="login" @mouseenter="mouselist" @mouseleave="leavelist">
				<img src="https://media.guoanfamily.com/rentPC/login/centre.png" alt="" />
				{{realName}}
				<div class="openList">
					<div class="list-item" v-for="(item,index) in listvalue" :key="index" @click="toPersonal(item,index,$event)">{{item.name}}</div>
				</div>
			</div>

			<div class="tel clearfix">
				<div class="tel_ico"></div>
				<div class="tel_num">400-900-2225</div>
			</div>
			<!-- <div class="line " style="height:1px"></div> -->
		</div>
   </div>
</template>

<script>
	import { objFn } from "../plugins/axios.js"
export default {
  props:["NavActived"],
  data() {
    return {
			realName:'登录',
			listvalue:[
			    {name:"个人中心",url:"/personalCenter/aboutMe/myLease"},
			    {name:"我的约看",url:"/personalCenter/aboutMe/appointment"},
			    {name:"我的收藏",url:"/personalCenter/aboutMe/collect"},
			    {name:"退出"},
			],
			isLogin:false
		};
  },
  mounted(){
  	//判断有没有token
    if(localStorage.getItem("token")){
    	objFn.Axios(
        "agenthouseCutomer/common/getUserInfo",
        "post",
        {},
        {interfaceType: "RENT_HOUSE"}).then((res) =>{
          console.log(res);
          if(res.data.name){
          	this.realName = res.data.name;
          }else{
          	this.realName = "客官";
          }
        	this.isLogin=true;
    	})
    }
  },
  methods:{
  	toPersonal(item,index,e){
  		e.cancelBubble = true;
  		if(index == 3){
  			//退出
  			this.realName = "登录";
        localStorage.setItem("token","");//清空localstorage
        localStorage.setItem("standbyToken","");//清空localstorage
        localStorage.setItem("collectList","");//清空收藏数组
        this.$router.push("/")//首页
        return false;
  			console.log("退出")
  		}else{
  			console.log(index)
  			this.$router.push({path:item.url})
  		}
  	},
  	mouselist(){
  		if(localStorage.getItem("token")){
  			var openList = document.querySelector(".openList");
  			openList.style.display="block";
  		}
  	},
  	leavelist(){
  		var openList = document.querySelector(".openList");
  		openList.style.display="none";
  	},
  	gotoExhibition(){
  		this.$router.push('/exhibitionCenter/exhhibition');
  	},
  	login(){
  		if(localStorage.getItem("token")){
  			return ;
  		}else{
  			this.$router.push('/login/login');
  		}

  	},
  	gotonewIndex(){
  		this.$router.push('/newHouse/newHouseIndex');
  	},
  	gotorent(){
      	this.$router.push('/rent/rentIndex');
    },
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
    height: .7rem;
    width: 100%;
    background: #fff;
    // border-bottom: 1px solid #ccc;
    .loco{
      cursor: pointer;
      float: left;
      height: .43rem;
      width: 1.28rem;
      background: url("https://img.guoanfamily.com/rentPC/indexPage/logo.png") center no-repeat ;
      background-size: 100% 100%;
      margin-left: 94*0.8/1920*100%;
      margin-top: 0.13rem;
    }
    .bav_ul{
      float: left;
      height: 100%;
      margin-left: 650*0.8/1920*100%;
			display: flex;
      vertical-align: top;
			white-space: nowrap;
			cursor: pointer;
      li{

        line-height: .7rem;
        vertical-align: top;
        font-size: .2rem;
				padding: 0 .21rem;
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
    	width: 2rem;
    	text-align: center;
    	font-size: .2rem;
    	float: left;
    	height:0.7rem;
    	line-height: 0.7rem;
    	position: relative;
    	cursor: pointer;
			margin-left: 0.3rem;
			font-size: .2rem;
    	img{
    		width: 0.7rem;
    		height: 0.5rem;
    		vertical-align: middle;
    	}
    	 .openList{
      	position: absolute;
      	top: 0.7rem;
      	left: 0;
      	width:2rem;
      	z-index: 1000;
      	background: white;
      	border-bottom-left-radius: 0.1rem;
      	border-bottom-right-radius: 0.1rem;
      	box-shadow: 0 2px 10px #DDDDDD;
      	display: none;
      	.list-item{
      		width: 100%;
      		height: 0.6rem;
      		color: #666666;
      	}
      	.list-item:last-child{
      		border-bottom-left-radius: 0.1rem;
      		border-bottom-right-radius: 0.1rem;
      	}
      	.list-item:hover{
      		background: #DDDDDD;
      	}
      }
    }
    .tel{
      margin-left: 140*0.8/1920*100%;
      height: 0.22rem;
      margin-top: .24rem;
      float: left;
      .tel_ico{
        float: left;
        width: .22rem;
        height: .22rem;
        background: url("https://img.guoanfamily.com/rentPC/indexPage/telIco.png") center no-repeat;
        background-size: 100% 100%;
      }
      .tel_num{
        float: left;
        height: .22rem;
        padding-left: 0.08rem;
        font-size: 0.22rem;
        color: rgb(0,0,0);
        line-height: .22rem;
      }
    }
  }
</style>
