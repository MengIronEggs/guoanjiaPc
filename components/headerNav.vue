<template>
  <div class="headerNav">
    <div class="nav">
			<div class="loco" name="logo"></div>
			<ul class="bav_ul">
				<li :class="{actived:actived==1}">首页</li>
				<li :class="{actived:actived==2}">新房</li>
				<li :class="{actived:actived==3}">二手房</li>
				<li :class="{actived:actived==4}">租房</li>
				<li :class="{actived:actived==5}">展示中心</li>
				<li :class="{actived:actived==6}">关于我们</li>
				<li :class="{actived:actived==7}">登录</li>
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
  data() {
    return {
			actived:1
		};
  },
  components: {}
};
</script>

<style scoped lang="less">
	.nav{
    height: .6rem;
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
      margin-top: 0.08rem;
    }
    .bav_ul{
      float: left;
      height: 100%;
      margin-left: 650*0.8/1920*100%;
			display: flex;
      vertical-align: top;
			white-space: nowrap;

      li{
        height: .6rem;
        line-height: .6rem;
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
    .ipt{
      width: 4rem;
      height: .36rem;
      background-color: #f5f5f5;
      float: left;
      margin-top: .12rem;
      margin-left: .56rem;
      border-radius: .18rem;
      padding: .06rem .1rem;
      overflow: hidden;
      .search{
        width: .24rem;
        height: 0.24rem;
        float: left;
        background: url("../static/indexPage/search.png") center no-repeat;
        background-size: 100% 100%;

      }
      .search_int{
        width: 3.4rem;
        height: 100%;
        line-height:0.24rem;
        float: left;
        padding: 0;
        margin: 0;
        border:none;
        background-color: #f5f5f5;
        padding-left: 1.2em;
        font-size: 0.16rem;


        }
    }
    .tel{
      margin-left: 140*0.8/1920*100%;
      height: 0.22rem;
      margin-top: .19rem;
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
