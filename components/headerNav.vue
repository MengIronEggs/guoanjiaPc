<template>
  <div class="headerNav">
    <div class="nav">
			<div class="loco" name="logo"></div>
			<ul class="bav_ul">
				<li :class="{actived:NavActived==1}" @click="gotoIndex">首页</li>
				<li :class="{actived:NavActived==2}" @click="gotonewIndex">新房</li>
				<li :class="{actived:NavActived==3}">二手房</li>
				<li :class="{actived:NavActived==4}" @click="gotorent">租房</li>
				<li :class="{actived:NavActived==5}">展示中心</li>
				<li :class="{actived:NavActived==6}" @click="aboutMe">关于我们</li>
				<li :class="{actived:NavActived==7}">登录</li>
			</ul>

			<div class="tel clearfix">
				<div class="tel_ico"></div>
				<div class="tel_num">400-900-2225</div>
			</div>
			<!-- <div class="line " style="height:1px"></div> -->
		</div>
   </div>
</template>

<script>
export default {
  props:["NavActived"],
  data() {
    return {

		};
  },
  methods:{
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
    // 关于我们
    aboutMe(){
      this.$router.push({path: "/personalCenter/aboutMe"});
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
      float: left;
      height: .43rem;
      width: 1.28rem;
      background: url("../static/indexPage/logo.png") center no-repeat ;
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

      li{

        line-height: .7rem;
        vertical-align: top;
        font-size: .2rem;
				padding: 0 .21rem;
				margin: 0;
        &:hover{
          cursor: pointer;
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
    .tel{
      margin-left: 140*0.8/1920*100%;
      height: 0.22rem;
      margin-top: .24rem;
      float: left;
      .tel_ico{
        float: left;
        width: .22rem;
        height: .22rem;
        background: url("../static/indexPage/telIco.png") center no-repeat;
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
