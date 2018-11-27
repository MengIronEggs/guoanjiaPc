<template>
    <div class="first" @mousewheel="MouseWheel" :class="{isSmall:isSmallScreen}">
        <div class="nav" :class="{showed:navShow}">
            <div class="loco" name="logo" @click="ToFirst"></div>
            <ul class="bav_ul" ref="bavUl" @mouseover="activedEnter" @mouseout="activedOut" @mouseleave="activeLeave">
              <li class="Actived_ii">首页</li>
              <li @click="ToNewHouse"  >新房</li>
              <li @click="ToRentHouse" >租房</li>
              <li @click="ToExhhibition" >展示中心</li>
              <li @click="aboutMe">关于我们</li>

            </ul>
            <div class="nameBox" @click.stop="login" @mouseenter="mouselist" @mouseleave="leavelist">
						  <img  src="https://img.guoanfamily.com/rentPC/login/denglu2.png" alt="" />
              {{$store.state.userName}}
              <div class="openList" ref="openList">
                <div class="list-item" v-for="(item,index) in listvalue" :key="index" @click="toPersonal(item,index,$event)">
                  <img :src="item.src" alt="" />
                  {{item.name}}
                </div>
              </div>
            </div>
            <div class="ipt" >
              <input class="search_int" @keyup.enter="FindRentBuild(rentQvyu)" placeholder="请输入您要居住的地区" type="text"  v-model="rentQvyu">
              <div class="in_btn" @click="FindRentBuild(rentQvyu)"></div>
            </div>
            <div class="tel clearfix">
                <div class="tel_ico"></div>
                <div class="tel_num">400-900-2225</div>
            </div>
        </div>
        <div class="mySwipers" ref="mySwipers2" v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <!-- 第一屏 -->
            <div class="swiper-slide">
              <headeNav :NavActived="1"></headeNav>
              <div class="first_bg">
                 <div class="bgSwiper">
                  <FirstSwiper ></FirstSwiper>
                </div>
                <div class="search_mask"  :class="{fadeInDown:SwiperIndex==0}">
                   <SearchInput ></SearchInput>
                </div>
              </div>
          </div>
          <!--  第二屏2.0 -->
          <div class="swiper-slide" >
            <div class="titles">
              <div class="title_box">
                <div class="title_word" :class="{fadeInDown:SwiperIndex==1}">
                    国安家新房
                </div>
                <div class="in_w" :class="{fadeInDown:SwiperIndex==1}">
                    梦在山海间，住在风景里
                </div>
              </div>
            </div>
            <div class="houseList" :class="{'content_w2':isSmallScreen}">
              <div class="second_box">
                <div class="top_name my_content_w" >
                  <div class="city" :class="{fadeInDown:SwiperIndex==1}">
                    {{NewHouseList[nowHouseIndex]['city']}}
                  </div>
                  <div class="build_name" :class="{fadeInDown:SwiperIndex==1}">
                    {{NewHouseList[nowHouseIndex]['buildname']}}
                  </div>
                  <div class="tag" :class="{fadeInDown:SwiperIndex==1}">
                    <ul class="tagul">
                      <li v-if="index<3" v-for="(its,index) in NewHouseList[nowHouseIndex]['buildtagnameList']" :key="index">{{its}}</li>
                    </ul>
                  </div>
                </div>
                <div class="middle_info">
                  <div class="infos my_content_w"  :class="{fadeInLeft:SwiperIndex==1}" >
                    <div class="top_box clearfix">
                        <span class="num" v-if="NewHouseList[nowHouseIndex]['averageprice']>0">{{NewHouseList[nowHouseIndex]['averageprice']}}</span>
                        <span class="num" v-else>暂无定价</span>
                        <span class="danwei" v-if="NewHouseList[nowHouseIndex]['averageprice']>0">元/㎡</span>
                        <span class="average">均价</span>

                      </div>
                      <div class="bottom_box">
                        <div v-if="NewHouseList[nowHouseIndex]['openquotationtime']" class="time">{{`开盘时间：${NewHouseList[nowHouseIndex]['openquotationtime']}`}}</div>
                        <div v-else class="time">开盘时间：暂无</div>
                        <div class="adress" v-if="NewHouseList[nowHouseIndex]['address']" >{{`开盘地址：${NewHouseList[nowHouseIndex]['address']}`}}</div>
                        <div class="adress" v-else>开盘地址：暂无</div>
                      </div>
                      <div class="btn_con">
                        <div class="left" @click="Toprove()"></div>
                        <div class="img_num">{{`${nowHouseIndex+1}/${NewHouseList.length}`}}</div>
                        <div class="right" @click="Tonext()"></div>
                      </div>
                  </div>
                </div>
                <div class="banners" :class="{bounceIn:SwiperIndex==1}">
                  <div class="img_box "  v-for="(item,index) in NewHouseList" :key="index" v-show="nowHouseIndex==index" :class="{actived:nowHouseIndex==index}">
                    <img @click="imgClick(item)" class="fadeIn" :src="`https://img.guoanfamily.com/${item.firstpicture}`" :alt="item.buildname">
                  </div>
                  <div class="swiper_btn_box" v-if="isReady">
                      <swiperBtn :NewHouseList="NewHouseList" @Schecked="Schecked"></swiperBtn>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 第三屏 -->
          <div class="swiper-slide">
            <div class="titles titles_BGC zufang">
              <div class="title_box">
                <div class="title_word" :class="{fadeInDown:SwiperIndex==2}">
                    国安家租房
                </div>
                <div class="in_w" :class="{fadeInDown:SwiperIndex==2}">
                    认真的公寓 犒赏认真生活的人
                </div>
              </div>
            </div>
              <div class="topImg">
                <div class="top_box">
                </div>
              </div>
              <div class="houseBanner content_w" :class="{'content_w2':isSmallScreen}">
                <template>
                  <rentSwiper  v-if="isReady" :rentList="rentList"  :class="{bounceIn:SwiperIndex==2}" ></rentSwiper>
                </template>
                <div class="btnL"></div>
                <div class="btnR"></div>

              </div>
              <div class="moreBtn" @click="ShowRents"  >
                {{btnTest}}
              </div>
          </div>
          <!-- 第四屏 -->
          <div class="swiper-slide">
            <div class="bg_img"   @click="Show3d">
              <div class="info" :class="{bounceInRight:SwiperIndex==3}"></div>
              <div class="btn" @click="Show3d" :class="{bounceInLeft:SwiperIndex==3}"></div>
            </div>
          </div>
          <!-- 第五屏 -->
          <div class="swiper-slide">
            <div class="Five_titles"  :class="{fadeInDown:SwiperIndex==4}">展示中心</div>
            <div class="infos2"  :class="{fadeInDown:SwiperIndex==4}">
              款待重要的人，会商重要的事
            </div>
            <div class="info_screen clearfix">
              <div class="left left_box" :class="{bounceIn:SwiperIndex==4}">
                <img :src="`${item}?imageView2/0/w/800/h/600`" class="fadeIn" alt="展示中心图片" v-show="ActivedIndex===index" @click="ToExhhibition" v-for="(item,index) in showCenterArr" :key="index">
              </div>
              <div class="right right_box">
                <div class="right_info">

                  <div class="img_boxs ">
                    <ul class="clearfix" :class="{fadeInRightBig:SwiperIndex==4}">
                      <li class="img_li" :class="{Actived:ActivedIndex===index}" v-for="(item,index) in showCenterArr" :key="index" @click="BannerChange(index)">
                        <img v-lazy="`${item}?imageView2/0/w/200/h/150`" alt="">
                      </li>
                    </ul>
                  </div>
                  <div class="card_info" :class="{fadeInRightBig:SwiperIndex==4}">
                    <p>款待重要的人</p>
                    <p>会商重要的事</p>
                  </div>
                  <div class="bottom_box1" :class="{fadeInUpBig:SwiperIndex==4}">
                    <div class="tels">
                      预约咨询电话
                    </div>
                    <div class="tel_num">
                      010-59070532
                    </div>
                  </div>
                </div>


              </div>
            </div>

          </div>
          <!-- 第六屏 -->
          <div class="swiper-slide">
            <div class="top_box2" @click="ChangeErWeiMa">
              <div class="content_w clearfix Appinfo_box" >
                <!-- 头部 -->
                <div class="Appinfo">
                  <div class="App_title" :class="{fadeInDownBig:SwiperIndex==5}" >
                    国安家App全新改版
                  </div>
                  <div class="AppEnglish" :class="{fadeInUpBig:SwiperIndex==5}" >
                    New Version on The Line
                  </div>
                  <div class="tag_box">
                    <div class="tag_info"  :class="{fadeInLeft:SwiperIndex==5}">
                      <div class="tag_top">页面换新装</div>
                      <div class="tag_bottom">新房、租房各种需求一键直达</div>
                    </div>

                    <div class="tag_info"  :class="{fadeInRight:SwiperIndex==5}">
                      <div class="tag_top">委托新入口</div>
                      <div class="tag_bottom">省心、省时，更快成为房东</div>
                    </div>
                    <div class="tag_info"  :class="{fadeInLeft:SwiperIndex==5}">
                      <div class="tag_top">签约新体验</div>
                      <div class="tag_bottom">约看、租约全面改版，效率更高</div>
                    </div>
                    <div class="tag_info"  :class="{fadeInRight:SwiperIndex==5}">
                      <div class="tag_top">展示更直观</div>
                      <div class="tag_bottom">VR看房、弹幕，让您省心挑好房</div>
                    </div>

                  </div>
                  <div class="erweima">
                    <div class="left_box">
                      <div class="btn_load1" @click="ChangeErWeiMa"></div>
                      <div class="btn_load2" @click="ChangeErWeiMa"></div>
                    </div>
                    <div class="right_box andriodE"></div>
                  </div>
                </div>
                <div class="appImg" :class="{bounceIn:SwiperIndex==5}">

                </div>
              </div>
            </div>
            <div class="bottom_box2">
              <div>
                <BtnNav></BtnNav>
                <!-- 底部 -->
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="left_manv">
          <ul>
            <li class="iocn_li human" @click="myAppointment">
              <div class="top_icon"></div>
              <div class="white_line"></div>
              <span class="humanInfo fadeInLeft">
                我的约看
              </span>
            </li>
            <li class="iocn_li heart" @click="myCollect">
              <div class="top_icon "></div>
              <div class="white_line"></div>
              <span class="humanInfo fadeInLeft">
                我的收藏
              </span>
            </li>
            <li class="iocn_li APP"  @click="ChangeErWeiMa">
              <div class="top_icon "></div>
              <div class="white_line"></div>
              <span class="APP_down fadeInLeft">
              </span>
            </li>
            <li class="iocn_li WX">
              <div class="top_icon "></div>
              <div class="white_line"></div>
              <span class="Wx_down fadeInLeft"></span>
            </li>
            <li class="iocn_li books" @click="myComplain">
              <div class="top_icon "></div>
              <div class="white_line"></div>
              <span class="humanInfo fadeInLeft">
                投诉反馈
              </span>
            </li>
            <li class="iocn_li Headset">
              <div class="top_icon "></div>
              <div class="white_line"></div>
              <span class="Headset_info fadeInLeft">
                <p>官方客服</p>
                <p>400-900-2225</p>
              </span>
            </li>
          </ul>
        </div>
    </div>

</template>

<script>
import { objFn } from "../plugins/axios.js";
import headeNav from "~/components/headerNav.vue";
import rentSwiper from "~/components/rentSwiper.vue";
import BtnNav from "~/components/bottom.vue"
import swiperBtn from "~/components/swiperBtn.vue"
import SearchInput from "~/components/SearchInput.vue"
import FirstSwiper from "~/components/indexPages/firstSwiper.vue"
export default {
  components: {
    headeNav,
    rentSwiper,
    BtnNav,
    swiperBtn,
    SearchInput,
    FirstSwiper
  },

  asyncData() {
    let NewHouseList = {}
    let rentList = []
    return objFn
      .ntGet("palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList",{ interfaceType: "NEW_HOUSE" })
      .then(res => {
        if (res&&res.status == 200) {
          NewHouseList = res.data
        }
      }).then(()=>{
        return objFn.ntPost(
		        "agenthouseCutomer/common/homePage",
		        {"size":"7"},
		        {interfaceType: "RENT_HOUSE"}).then(res => {
              if(res){
                rentList = res.data.roomList.map((item)=>{
                item.image = objFn.concatFileUrl(item.image,240,180);
                item.tags =item.tags.split(",",2);
                return item;
              })
	            return { NewHouseList,rentList};
              }

		    	})
      });
  },
  head() {

    return {
      title: "国安家",
      meta: [
        {
          hid:"description",
          name: "description",
          content: "国安家是专业的互联网+房地产+金融创新平台,为您提供新房,二手房,租房，不动产托管等房地产信息和服务,为需要房屋出租租赁的用户提供区域租房和地铁租房,热线tel:400-900-2225。国安家，为每一个家的梦想全力以赴。"
        },
        {
          name: "Keywords",
          content: "VR看房,北京租房网,北京租房,北京个人房源出租,北京房屋出租,北京房屋租赁,北京新房,北京二手房,房地产金融,国安家,中信国安家"
        }
      ]
    };
  },
  data() {
    let self = this
    return {
      isReady:false,
      isSmallScreen:false,
      CanMouseWheel:true,
      btnTest:">>更多精品房源<<",
      navShow:false,
      nowHouseIndex:0,
      nowHouseImg:"",
      rentQvyu:"",
      ActivedIndex:0,
      ActiveNum:1,
      		listvalue:[
			    {name:"个人中心",url:"/personalCenter/aboutMe/myLease",src:"https://img.guoanfamily.com/rentPC/login/zhongxin1.png"},
			    {name:"我的约看",url:"/personalCenter/aboutMe/appointment",src:"https://img.guoanfamily.com/rentPC/login/yuakan1.png"},
			    {name:"我的收藏",url:"/personalCenter/aboutMe/collect",src:"https://img.guoanfamily.com/rentPC/login/shoucang1.png"},
			    {name:"退出登录",src:"https://img.guoanfamily.com/rentPC/login/tuichu1.png"},
      ],
      showCenterArr:["https://img.guoanfamily.com/rentPC/indexPage/centerShow01.jpg",
        "https://img.guoanfamily.com/rentPC/indexPage/centerShow02.jpg",
					"https://img.guoanfamily.com/rentPC/indexPage/centerShow03.jpg",
					"https://img.guoanfamily.com/rentPC/indexPage/centerShow04.jpg",
				"https://img.guoanfamily.com/rentPC/indexPage/centerShow05.jpg",
					"https://img.guoanfamily.com/rentPC/indexPage/centerShow06.jpg",

        ],
      ShowCenterImg:"https://img.guoanfamily.com/rentPC/exhibition/banner1.jpg",
      realName:'登录',
      isLogin:false,
      SwiperIndex:0,

      swiperOption: {
        resistanceRatio: 0,
        // mousewheel: true,
        keyboard: true,
        direction: "vertical",
        on: {
          slideChangeTransitionStart(){
            self.SwiperIndex = this.activeIndex
            if(this.activeIndex>0){
              self.navShow = true
            }else{
              self.navShow = false
            }
          },
          slideChangeTransitionEnd(){
            let timers= setTimeout(()=>{
              self.CanMouseWheel = true;
              clearTimeout(timers)
            },800)

          }
        },
      },

      renCity:"",
    };
  },
  methods:{
    FindRentBuild(val){
      // 暂时处理
      this.$router.push({path:"/rent/rentList",query:{searWords:val}})
    },
    activedEnter(e){
      let liArr = this.$refs.bavUl.querySelectorAll("li")
      liArr.forEach(element => {
        element.classList.remove("Actived_ii")
      });
      e.target.classList.add("Actived_ii");


		},
		activedOut(e){
      let liArr = this.$refs.bavUl.querySelectorAll("li")
      liArr.forEach(element => {
        element.classList.remove("Actived_ii")
      });
      liArr[0].classList.add("Actived_ii");
		},
		activeLeave(e){

		},
    // 跳首屏
    ToFirst(){
      this.swiper.slideTo(0,400)
    },
    Schecked(data){
      this.nowHouseIndex = data
    },
    ChouseHouse(i){
      // this.nowHouseImg = this.nowHouseImg = this.NewHouseList[i]['firstpicture'];
      this.nowHouseIndex = i;

    },
    // 新房大图片的点击事件
    imgClick(item){
      // console.log(item)
      this.$router.push({path:'/newHouse/newHouseDetails',query:{id:item.id}});
    },
    Toprove(){
      if(this.nowHouseIndex==0){
        this.nowHouseIndex = this.NewHouseList.length-1
      }else{
        this.nowHouseIndex--;
      }
      this.$store.state.index.actIndex = this.nowHouseIndex
    },
    Tonext(){
      if(this.nowHouseIndex == this.NewHouseList.length-1){
         this.nowHouseIndex = 0
      }else{
        this.nowHouseIndex++;
      }
      this.$store.state.index.actIndex = this.nowHouseIndex

    },
    ShowRents(){
      //
       this.$router.push({path:"/rent/rentList"})
    },
    Show3d(){
       this.$router.push({path:"/rent/rentList",query:{ThreeD:"1"}})

    },
    ChangeErWeiMa(val){
      this.$router.push({path:'/download/download'})

    },
    ToNewHouse(){
      	this.$router.push('/newHouse/newHouseIndex');
    },
    ToRentHouse(){
      	this.$router.push('/rent/rentIndex');
    },
    // 展示中心
    ToExhhibition(){
      this.$router.push('/exhibitionCenter/exhhibition');
    },
    BannerChange(n){
       this.ActivedIndex = n;
    },
    aboutMe(){
      this.$router.push({path:"/personalCenter/aboutMe/myLease"});
    },
    login(){
      this.$router.push('/loginIndex/loginIndex');

    },
    Tomap(val){
      if(val){

        this.$router.push({path:"/rent/nuxtMapSearchHouse",query:{subway:val}});
      }else{
        this.$router.push({path:"/rent/nuxtMapSearchHouse"});

      }
    },

    MouseWheel(e){
      if(this.SwiperIndex<5&&e.wheelDeltaY<0&&this.CanMouseWheel){
        this.CanMouseWheel = false
        this.SwiperIndex++;
        this.swiper.slideTo(this.SwiperIndex,500)
      }else if(this.SwiperIndex>0&&e.wheelDeltaY>0&&this.CanMouseWheel){
        this.SwiperIndex--;
        this.CanMouseWheel = false
        this.swiper.slideTo(this.SwiperIndex,500)
      }
    },
    toPersonal(item,index,e){
  		e.cancelBubble = true;
  		if(index == 3){
  			//退出
  			this.$store.state.userName = "登录";
        localStorage.setItem("token","");//清空localstorage
        localStorage.setItem("standbyToken","");//清空localstorage
        localStorage.setItem("collectList","");//清空收藏数组
        this.$router.push("/")//首页
        this.$refs.openList.style.display="none";
        return false;
  		}else{
  			this.$router.push({path:item.url})
  		}
  	},
  	mouselist(){
  		if(localStorage.getItem("token")){
        var openList = this.$refs.openList;

  			openList.style.display="block";
  		}
  	},
  	leavelist(){
  		var openList = this.$refs.openList
  		openList.style.display="none";
    },
    remSize(doc, win){
      var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
      };

      if (!doc.addEventListener) return;
      // win.addEventListener(resizeEvt, recalc, false);
      // doc.addEventListener('DOMContentLoaded', recalc, false);
      recalc();
    },
    // 我的约看
    myAppointment(){

       this.$router.push("/personalCenter/aboutMe/appointment")
    },
     // 我的收藏
    myCollect(){
      this.$router.push("/personalCenter/aboutMe/collect")
    },
    // 我的投诉
    myComplain(){
      this.$router.push("/personalCenter/aboutMe/complain")

    },

  },
  created() {},
  destroyed() {
    let docEl = document.documentElement;
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100  + 'px';
  },
  beforeMount() {
     if(window){

      if(screen.width/screen.height<4/2.5){
        this.isSmallScreen = true
      }


    }

  },

  mounted() {



      setTimeout(()=>{
        this.remSize(document, window);


      },10);
      setTimeout(()=>{
        this.isReady = true
      },100)

    // this.nowHouseImg = this.NewHouseList[0]['firstpicture'];
    // console.log(111,this.nowHouseImg);

    //判断有没有token
    if(localStorage.getItem("token")){
    	objFn.Axios(
        "agenthouseCutomer/common/getUserInfo",
        "post",
        {},
        {interfaceType: "RENT_HOUSE"}).then((res) =>{
          if(res.data.name){
          this.$store.state.userName = res.data.name;
          }else{
          	this.$store.state.userName = "客官";
          }
        	this.isLogin=true;
    	})
    }


  },
  computed:{
    swiper(){
      return this.$refs["mySwipers2"].swiper
    }


  }
};
</script>

<style lang="less" scoped>
  .first {
    height: 100%;
    width: 100%;
    position: relative;
    .mySwipers{
      min-width: 1200px;

      // min-height: e("calc(100vh - 184px)")
    }
    .left_manv{
      position: fixed;
      right: 0;
      bottom: 0rem;
      height: 3.2rem;
      width: .53rem;
      background-color: rgba(0,0,0,.8);
      z-index: 99;
      .iocn_li{
        padding: 0 .1rem;
        margin-top: .08rem;
        cursor: pointer;
        position: relative;
        .humanInfo{
          display: none;
          position: absolute;
          left: -1.13rem;
          top: 0;
          height: 100%;
          width: 1.2rem;
          line-height: .44rem;
          text-align: center;
          color: #d6000f;
          background: url("https://img.guoanfamily.com/rentPC/indexPage/wordBg.png") center left no-repeat/ 100% 100%;

        }
        .Wx_down,.APP_down{
          position: absolute;
          left: -0.95rem;
          top: -0.25rem;
          height: 100%;
          width: 1rem;
          display: none;
          text-align: center;
          height: 1rem;
        }
        .APP_down{
          background: url("https://img.guoanfamily.com/rentPC/indexPage/AppDown.png") center right no-repeat/ contain;

        }
        .Wx_down{
          background: url("https://img.guoanfamily.com/rentPC/indexPage/WXDown.png") center right no-repeat/ contain;

        }
        .Headset_info{
          position: absolute;
          left: -1.34rem;
          top: -0.35rem;
          height: 100%;
          width: 1.4rem;
          display: none;
          text-align: center;
          height: 0.8rem;
          padding: .08rem 0;
          background: url("https://img.guoanfamily.com/rentPC/indexPage/HeadsetInfo.png") center right no-repeat/ contain;
          p{
            line-height: .32rem;
            width: 94%;
            text-align: center;
            color: #d6000f;
          }
        }
         &:hover{
            .Headset_info,
            .humanInfo,
            .Wx_down,
            .APP_down{
              display: block;
            }
          }
        &.human{
          background: url("https://img.guoanfamily.com/rentPC/indexPage/human1.png") center no-repeat/contain;
          &:hover{
            background-color: #d6000f;
          }
        }
        &.heart{
          background: url("https://img.guoanfamily.com/rentPC/indexPage/heart.png") center no-repeat/contain;
          &:hover{
            background-color: #d6000f;
          }
        }
        &.APP{
          background: url("https://img.guoanfamily.com/rentPC/indexPage/APP1.png") center no-repeat/contain;
          &:hover{
            background-color: #d6000f;
          }
        }
        &.WX{
          background: url("https://img.guoanfamily.com/rentPC/indexPage/WX1.png") center no-repeat/contain;
          &:hover{
            background-color: #d6000f;
          }
        }

        &.books{
          background: url("https://img.guoanfamily.com/rentPC/indexPage/books1.png") center no-repeat/contain;
          &:hover{
            background-color: #d6000f;
          }
        }
        &.Headset{
          background: url("https://img.guoanfamily.com/rentPC/indexPage/Headset1.png") center no-repeat/contain;
          &:hover{
            background-color: #d6000f;
          }

        }
        .top_icon{
          height: .44rem;
          width: 100%;


        }
        .white_line{
          width: 100%;
          height: 0;
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
  .line {
    width: 100%;
    float: left;
  }
  .nav {
    height: 0.6rem;
    width: 100%;
    min-width: 1200px;
    background: #fff;
    position: fixed;
    left: 0;
    top: -100%;
    z-index: 2;
    transition: top .8s;
    border-bottom: 1px solid #ccc;
    &.showed{
      top:0;
      transition: top .8s;
    }
    .loco {
      float: left;
      height: 0.43rem;
      width: 1.28rem;
      background: url("https://img.guoanfamily.com/rentPC/indexPage/logo.png") center no-repeat;
      background-size: 100% 100%;
      margin-left: 94 * 0.8/1920 * 100%;
      margin-top: 0.08rem;
      cursor: pointer;
    }
    .bav_ul {
      float: left;
      height: 100%;
      margin-left: 150 * 0.8/1920 * 100%;
      display:flex;
      vertical-align: top;
      white-space: nowrap;
      li {
        height: 0.6rem;
        line-height: 0.6rem;
        vertical-align: top;
        font-size: 0.16rem;
        padding: 0 0.16rem;
        &.Actived_ii{
          background-color: #d6000f;
          color: #fff;
        }
        &:hover {
          cursor: pointer;
          background-color: #d6000f;
          color: #fff;
        }
      }
    }
     .nameBox{
    	width: 2rem;
    	text-align: center;
    	font-size: .16rem;
    	float: left;
    	line-height: 0.6rem;
    	position: relative;
    	cursor: pointer;
    	margin-left: 0.3rem;
    	img{
    		width: .20rem;
    		height: .20rem;
        vertical-align: middle;
        margin-top: -0.04rem;
    	}
    	 .openList{
      	position: absolute;
      	top: 0.6rem;
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
    .ipt {
      width: 4rem;
      height: 0.36rem;
      background-color: #f5f5f5;
      float: left;
      margin-top: 0.12rem;
      margin-left: 0.56rem;
      border-radius: 0.18rem;
      padding: 0.06rem 0.1rem;
      overflow: hidden;

      .search {
        width: 0.24rem;
        height: 0.24rem;
        float: left;
        background: url("https://img.guoanfamily.com/rentPC/indexPage/search.png") center no-repeat;
        background-size: 100% 100%;
      }
      .search_int {
        width: 3rem;
        height: 100%;
        line-height: 0.24rem;
        float: left;
        padding: 0;
        margin: 0;
        border: none;
        background-color: #f5f5f5;
        padding-left: 1em;
        font-size: 0.16rem;
      }
      .in_btn{
        width: 0.24rem;
        height: 0.24rem;
        float: right;
        background: url("https://img.guoanfamily.com/rentPC/rentindex/searchBtn.png") center no-repeat;
        background-size: 100% 100%;
      }
    }
    .tel {
      margin-left: 140 * 0.8/1920 * 100%;
      height: 0.22rem;
      margin-top: 0.19rem;
      float: left;
      .tel_ico {
        float: left;
        width: 0.22rem;
        height: 0.22rem;
        background: url("https://img.guoanfamily.com/rentPC/indexPage/telIco.png") center no-repeat;
        background-size: 100% 100%;
      }
      .tel_num {
        float: left;
        height: 0.22rem;
        padding-left: 0.08rem;
        font-size: 0.22rem;
        color: rgb(0, 0, 0);
        line-height: 0.22rem;
      }
    }
  }
  .mySwipers {
    height: 100%;
    width: 100%;
    position: relative;
    .swiper-slide {
      position: relative;
      padding-top: 3%;
      .bgSwiper{
        width: 100%;
        height: 100%;
      }
      &:nth-child(1){
        padding-top: 0;
      }
      // 第一屏
      .first_bg {
        position: absolute;
        bottom: 0;
        top: 60px;
        // z-index: 20;
        width: 100%;
        // background: url("https://img.guoanfamily.com/rentPC/indexPage/firsrBg.jpg") center no-repeat;
        // background-size: cover;
        .Propaganda {
          position: absolute;
          left: 3.92rem;
          top: 1.45rem;
          width: 2.72rem;
          height: 2.28rem;
          background: url("https://img.guoanfamily.com/rentPC/indexPage/shiyi.png") center no-repeat;
          background-size: 100% 100%;
        }
        .search_mask {
          position: absolute;
          top:63%;
          left: 0;
          z-index: 20;
          height: 1.3rem;
          width: 100%;

          // .int_box {
          //   min-width: 860px;
          //   width: 9rem;
          //   height: 100%;
          //   margin: 0 auto;
          //   .inp_b {
          //     width: 100%;
          //     height: 0.5rem;
          //     line-height: 50px;
          //     margin-top: 0.28rem;
          //     border-radius: 0.25rem;
          //     background-color: #fff;
          //   }
          //   .icon_search {
          //     width: 0.24rem;
          //     height: 0.24rem;
          //     margin-top: 0.13rem;
          //     margin-left: 0.15rem;
          //     float: left;
          //     background: url("https://img.guoanfamily.com/rentPC/indexPage/search.png") center no-repeat;
          //     background-size: 100% 100%;
          //   }
          //   .search_i {
          //     min-width: 800px;
          //     width: 8rem;
          //     height: 0.5rem;
          //     line-height: 0.5rem;
          //     border: none;
          //     padding-left: 0.27rem;
          //     float: left;
          //     font-size: 0.16rem;
          //     &::-webkit-input-placeholder {
          //       color:#ccc;
          //     }
          //   }
          // }
          // .hots {
          //   margin-top: 0.12rem;
          //   height: 0.26rem;
          //   padding-left: 0.09rem;

          //   .left_b {
          //     float: left;
          //     display: flex;
          //     .hotwards {
          //       color: #fff;
          //       line-height: 0.26rem;
          //       padding: 0 0.05rem;
          //       font-size: 0.12rem;
          //       &.citys {
          //         cursor: pointer;
          //         &:hover {
          //           color: #d6000f;
          //         }
          //       }
          //     }
          //   }
          //   .right_b {
          //     float: left;
          //     display: flex;
          //     margin-left: 45px;
          //     .hotwards {
          //       color: #fff;
          //       line-height: 0.26rem;
          //       padding: 0 0.05rem;
          //       font-size: 0.12rem;
          //       &.citys {
          //         cursor: pointer;
          //         &:hover {
          //           color: #d6000f;
          //         }
          //       }
          //     }
          //   }
          //   .btn_box {
          //     min-width: 200px;
          //     width: 2.2rem;
          //     float: right;
          //     height: 0.26rem;
          //   }
          //   .img_btn {
          //     cursor: pointer;
          //     float: right;
          //     margin-right: 0.12rem;
          //     height: 0.26rem;
          //     border-radius: 0.13rem;
          //     padding: 0 0.16rem;
          //     line-height: 0.26rem;
          //     vertical-align: top;
          //     background-color: #e34b3e;
          //     color: #fff;
          //   }
          // }
        }
      }
      // 第二屏
      .titles {
        position: relative;
        height: 1.8rem;
        background: url("https://img.guoanfamily.com/rentPC/indexPage/NewHouses.png") center 30%
          no-repeat;
        background-size: 16%;
        overflow: hidden;
        &.titles_BGC {
          background-color: #f5f5f5;
        }
        &.zufang{
          background: url("https://img.guoanfamily.com/rentPC/indexPage/Tenement.png") center 30%
          no-repeat;
          background-size: 16%;
          background-color: #f5f5f5;
        }
        &.ershou{
          background: url("https://img.guoanfamily.com/rentPC/indexPage/Tenement.png") center 0.5rem
          no-repeat;
          background-size: 16%;
        }
        &.zhanshi{
          background: url("https://img.guoanfamily.com/rentPC/indexPage/ShowCenter.png") center 30%
          no-repeat;
          background-size: 16%;
        }
        .title_box{
          position: absolute;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);

        }

        .title_word {
          // margin: 7.5% auto 0;
          text-align: center;
          height: 0.5rem;
          line-height: 0.5rem;
          font-size: 0.4rem;
        }
        .in_w {
          margin: 0.15rem auto 0;
          color: #666;
          text-align: center;
          height: 0.12rem;
          line-height: 0.12rem;
          font-size: 0.12rem;
        }
      }
      // .houseList {
      //   position: absolute;
      //   bottom: 0;
      //   width: 100%;
      //   top: 2.2rem;
      //   background: url("../static/indexPage/NewHouseBG.jpg") center top no-repeat;
      //   background-size: cover;
      //   .housebox {
      //     padding-top:1rem;
      //     height: 100%;
      //     position: relative;
      //     .leftInfo {
      //       float: left;
      //       width: 2.7rem;
      //       height: 100%;
      //       .city {
      //         margin-top: 0.24rem;
      //         height: 0.24rem;
      //         font-size: 0.24rem;
      //         line-height: 0.24rem;
      //         text-align: left;
      //       }
      //       .build_name {
      //         height: 0.54rem;
      //         line-height: 0.54rem;
      //         font-size: 0.3rem;
      //         text-align: left;
      //       }
      //       .tag {
      //         height: 0.36rem;
      //         width: 100%;
      //         overflow: hidden;


      //       }
      //       .tagul {
      //         margin-top: .05rem;
      //         display: inline-block;
      //         width: 100%;
      //         height: 100%;
      //         overflow: hidden;
      //         li {
      //           display: inline;
      //           white-space: nowrap;
      //           background: #ccc;
      //           float: left;
      //           color: #fff;
      //           padding: 0.03rem 0.8em 0.05rem;
      //           vertical-align: top;
      //           margin-right: 0.1rem;
      //           cursor: pointer;
      //         }
      //       }
      //     }
      //     .banner {
      //       width: 9.3rem;
      //       float: left;
      //       height: 100%;
      //       .img {
      //         cursor: pointer;
      //         width: 7.7rem;
      //         float: left;
      //         height: 4.85rem;
      //         opacity: 0;

      //         &.actived{
      //           opacity: 1;
      //           transition: opacity 1s;
      //         }
      //         img {
      //           width: 100%;
      //           height: 100%;
      //           vertical-align: top;
      //         }
      //       }
      //       .img_box {
      //         overflow-y: auto;
      //         float: left;
      //         width: 1.6rem;
      //         height: 4.85rem;
      //         border: 1px solid #eee;
      //         .swiper_btn{
      //           height: 100%;
      //           width: 100%;
      //         }
      //         .sm_img {
      //           cursor: pointer;
      //           height: 1.2rem;
      //           margin-bottom: 0.02rem;
      //           &.ActivedLi{
      //             border: 1px solid red;
      //           }
      //           img {
      //             width: 100%;
      //             height: 100%;
      //             vertical-align: top;
      //           }
      //         }
      //       }
      //     }
      //     .Build_card {
      //       width: 3.65rem;
      //       height: 2.85rem;
      //       position: absolute;
      //       left: 0;
      //       top: 2.5rem;
      //       padding: 0.2rem;
      //       background: #000;
      //       .top_box {
      //         height: 25%;
      //         border-bottom: 1px solid #ccc;
      //         .num {
      //           line-height: 0.6rem;
      //           font-size: 0.4rem;
      //           float: left;
      //           color: #fff;
      //         }
      //         .average {
      //           margin-top: 0.22rem;
      //           margin-left: 0.15rem;
      //           color: #fff;
      //           float: left;
      //           font-size: 0.18rem;
      //         }
      //         .danwei {
      //           margin-top: 0.22rem;
      //           margin-left: 0.1rem;
      //           color: #fff;
      //           float: left;
      //           font-size: 0.18rem;
      //         }
      //       }
      //       .bottom_box {
      //         height: 30%;
      //         .adress,
      //         .time {
      //           height: 50%;
      //           margin-top: .16rem;
      //           font-size: 0.16rem;
      //           color: #fff;
      //           &:nth-child(2){
      //             margin-top: 0;
      //           }
      //         }
      //       }
      //       .btn_con {
      //         height: 0.3rem;
      //         position: absolute;
      //         left: 0.2rem;
      //         bottom: 0.2rem;
      //         width: 1.2rem;
      //         .left {
      //           float: left;
      //           width: 0.3rem;
      //           height: 0.3rem;
      //           border-radius: 50%;

      //           background: url("https://img.guoanfamily.com/rentPC/indexPage/prove.png") 34% center
      //             no-repeat;
      //           background-size: 70%;
      //           background-color: #e34b3e;
      //         }
      //         .right {
      //           float: right;
      //           width: 0.3rem;
      //           height: 0.3rem;
      //           border-radius: 50%;
      //           background: url("https://img.guoanfamily.com/rentPC/indexPage/next.png") 65% center
      //             no-repeat;
      //           background-size: 70%;
      //           background-color: #e34b3e;
      //         }
      //         .img_num {
      //           position: absolute;
      //           top: 0;
      //           width: 0.6rem;
      //           left: 0.3rem;
      //           color: #fff;
      //           font-size: 0.24rem;
      //           line-height: 0.3rem;
      //           text-align: center;
      //         }
      //       }
      //     }
      //   }
      // }


      .houseList{
        position: absolute;
        bottom: 0;
        width: 100%;
        top: 2.2rem;
        background: #F5F5F5;
        background-size: cover;
        &.content_w2{
          padding-top: 1rem;
         .banners{
            top: 1.4rem;
          }
        }
        .second_box{
          width: 100%;
          position: absolute;
          top:50%;
          left: 0;
          transform: translateY(-60%);
        }
        .top_name{
          margin-top: .6rem;
          height: 1.3rem;
          .city{
            height: 0.24rem;
            font-size: 0.24rem;
            line-height: 0.24rem;
            text-align: left;
          }
          .build_name{
            height: 0.54rem;
            line-height: 0.54rem;
            font-size: 0.3rem;
            text-align: left;
          }
          .tag {
            height: 0.5*1.3rem;
            width: 100%;
            overflow-x: hidden;
          }
          .tagul {
            margin-top: .05*1.3rem;
            display: inline-block;
            white-space: nowrap;
            li {
              display: inline;
              background: #ccc;
              color: #fff;
              padding: 0.03rem 0.2*1.3em 0.05rem;
              margin-right: 0.05rem;
              cursor: pointer;
            }
          }
        }
        .middle_info{
          height: 3.6rem;
          width: 100%;
          padding:.4rem 0;
          background: url("../static/indexPage/build_bg.png") bottom center no-repeat/cover;
          .infos{
            position: relative;
            height: 100%;
          }
          .top_box{
            width: 3rem;
            border-bottom: 1px solid #ccc;
            .num{
              line-height: 0.6rem;
              font-size: 0.4rem;
              float: left;
              color: #fff;
            }

            .danwei{
              margin-top: 0.22rem;
              margin-left: 0.1rem;
              color: #fff;
              float: left;
              font-size: 0.18rem;
            }
            .average{
              margin-top: 0.3rem;
              margin-left: 0.15rem;
              color: #fff;
              float: left;
              font-size: 0.18rem;
            }
          }
          .bottom_box{
            width: 3rem;

            .adress,
            .time {
              height: 48%;
              // line-height: 0.5*1.3rem;
              font-size: 0.16rem;
              color: #fff;
              margin-top: .2rem;
            }

          }
          .btn_con {
              height: 0.3rem;
              position: absolute;
              left: 0.05rem;
              bottom: 0.2rem;
              width: 1.2rem;
              .left_box{
                display: inline;
                border-radius: 50%;
                float: left;
              }
              .left {
                float: left;
                width: 0.3rem;
                height: 0.3rem;
                border-radius: 50%;
                cursor: pointer;
                background: url("https://img.guoanfamily.com/rentPC/indexPage/prove.png") 45% center
                  no-repeat;
                background-size: 70%;
                background-color: rgba(255,255,255,.25);
              }
              .right {
                float: right;
                width: 0.3rem;
                height: 0.3rem;
                border-radius: 50%;
                background: url("https://img.guoanfamily.com/rentPC/indexPage/next.png") 65% center
                  no-repeat;
                background-size: 70%;
                cursor: pointer;
                background-color: rgba(255,255,255,.25);
              }
              .img_num {
                position: absolute;
                top: 0;
                width: 0.6rem;
                left: 0.3rem;
                color: #fff;
                font-size: 0.24rem;
                line-height: 0.3rem;
                text-align: center;
              }
            }
        }
        .banners{
          position: absolute;
          width: 10rem;
          height: 6rem;
          top:.4rem;
          left: 6.1rem;
          .img_box{
            cursor: pointer;
            width: 100%;
            height: 100%;
            background-color: #ccc;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .swiper_btn_box{
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 1.6rem;
            padding: .08rem
          }
        }
      }
      .my_content_w{
        width: 13rem;
        margin: 0 auto;


      }
      // 第三屏
      .rent_title {
        height: 2rem;
        background: url("https://img.guoanfamily.com/rentPC/indexPage/Tenement.png") center 0.65rem
          no-repeat;
        background-size: 22%;
        background-color: #f5f5f5;
        overflow: hidden;
        .title_word {
          margin: 0.9rem auto 0;
          width: 2.1rem;
          text-align: center;
          height: 0.5rem;
          line-height: 0.5rem;
          font-size: 0.5rem;
        }
        .in_w {
          margin: 0.15rem auto 0;
          color: #666;
          text-align: center;
          height: 0.12rem;
          line-height: 0.12rem;
          font-size: 0.12rem;
        }
      }
      .topImg {
        height: 56%;
        position: absolute;
        width: 100%;
        top: 2.05rem;
        left: 0;
        background: url("https://img.guoanfamily.com/rentPC/indexPage/topImg.jpg") center no-repeat;
        background-size: cover;
        overflow: hidden;
        .top_box{
          height: 1.32*0.8rem;
          width: 100%;
          position: absolute;
          top: 10%;
          background: url("https://img.guoanfamily.com/rentPC/indexPage/rentFonts.png") center no-repeat;
          background-size: contain;
        }
      }
      .houseBanner {
        position: absolute;
        left: 50%;
        padding: 0.3rem 0.3rem 0;
        background-color: #fff;
        transform: translateX(-50%);
        bottom: 13%;
        height: 4rem;
      }
      .moreBtn {
        position: absolute;
        left: 50%;
        bottom: 0.3rem;
        transform: translateX(-50%);
        height: 0.5rem;
        width: 2.5rem;
        border: 1px solid #ccc;
        line-height: 0.5rem;
        text-align: center;
        color: #999;
        font-size: 0.14rem;
        cursor: pointer;
      }
      // 第4屏
      .bg_img {
        height: 100%;
        background: url("https://img.guoanfamily.com/rentPC/indexPage/page4Bg.jpg") center no-repeat;
        background-size:cover;
        cursor: pointer;
        .info {
          position: absolute;
          top: 3rem;
          left: 3rem;
          width: 5.64rem;
          height: 1.62rem;
          background: url("../static/indexPage/GaoPin2.png") top center no-repeat;
          // background: url("https://img.guoanfamily.com/rentPC/indexPage/GaoPin.png") top center no-repeat;
          background-size: 100% 100%;
        }
        .btn {
          width: 1.3rem;
          height: 0.4rem;
          position: absolute;
          left: 3rem;
          top: 5rem;
          background: url("https://img.guoanfamily.com/rentPC/indexPage/maroBtn.png") center no-repeat;
          background-size: 100%;
          box-shadow: 2px 2px 1px #666;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .Propaganda {
        height: 3rem;
      }
      // 第5屏
      .half {
        height: 50%;
        width: 100%;
        position: relative;
        .infos {
          position: absolute;
          top: 1.2rem;
          bottom: 0;
          width: 100%;
          overflow: hidden;
          &.ershou {
            background: url("https://img.guoanfamily.com/rentPC/indexPage/ershou.jpg") center no-repeat;
            background-size: cover;
          }


        }
      }
      .house_img {
        margin-top: 0.15rem;
        width: 3.9rem;
        height: 2.96rem;
        background: #000;
        float: left;
        margin-right: 0.15rem;
        &:nth-child(3),&:nth-child(6) {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      // 第5屏
      .left{
        float: left;
      }
      .right{
        float: right;
      }

      .left_box{
        width: 50%;
        height: 100%;
        overflow: hidden;
        position: relative;
        img{
          height: 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          cursor: pointer;


        }

      }

      .right_box{
        width: 50%;
        height: 100%;
        position: relative;
      }
      .Five_titles{
        margin-top: 0.3rem;
        width: 100%;
        text-align: center;
        height: .5rem;
        font-size: .4rem;
        line-height:.7rem;

        background: url("../static/indexPage/ShowCenter.png") center top no-repeat /contain;

      }
      .infos2{
        margin-top: .2rem;
        font-size: .12rem;
        color: #666;
        text-align: center;
      }
      .info_screen{
        position: absolute;
        left: 0;
        bottom: 0;
        top: 2.1rem;
        right: 0;
      }
      .img_boxs{
        margin-top: .15rem;
        ul{
          margin-left: .36rem;
          width: 6rem;
        }
        .img_li{
          margin-bottom: 0.16rem;
          width: 1.6rem;
          height: 1.2rem;
          background: #000;
          margin-right: 0.24rem;
          float: left;
          cursor: pointer;
          position: relative;
          &.Actived{
            &::before{
              content:"";
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              border:3px solid #d6000f;
            }

          }
          img{
            height: 100%;
            width: 100%;
          }
        }
      }
      .card_info{
        margin-top: .44rem;
        padding: .25rem 0;
        background-color: #E34B3E;
        p{
          color:#fff;
          font-size: .5rem;
          padding: 0;
          padding-left:.6rem;
        }

      }
      .bottom_box1{
        margin-left: .58rem;
        margin-top: .6rem;
      }
      .tels{
        font-size: .2rem;
        color: #E34B3E;
        margin-bottom: .18rem;
      }
      .tel_num{
        font-size: .4rem;
        color: #E34B3E;
      }

      // 第6屏
      .top_box2 {
        width: 100%;
        position: absolute;
        height: 55%;
        bottom: 3rem;
        .Appinfo_box {
          height: 100%;
          position: relative;
        }
        .Appinfo {
          float: left;
          width: 45%;
          .App_title {
            font-size: 0.4rem;
            text-align: left;
          }
          .AppEnglish {
            font-size: 0.16rem;
            margin-top: 2%;
            text-align: left;
            // text-align: left;

            color: #999;
          }
          .tag_box {
            padding-top: 4%;
            // margin-bottom: .5rem;
            min-height: 2.5rem;

            .tag_info {
              margin-top: 3%;
              float: left;
              width: 50%;
              .tag_top {
                font-size: 0.2rem;
              }
              .tag_bottom {
                font-size: 0.14rem;
                color: #999;
              }
            }
          }
          .erweima {
            float: left;

            height: 1.3rem;
            .left_box {
              float: left;
              width: 1.8rem;

              .btn_load1,
              .btn_load2 {
                height: 0.6rem;
                width: 100%;
                cursor: pointer;
              }
              .btn_load1 {
                background: url("https://img.guoanfamily.com/rentPC/rentindex/iosd.png") center  no-repeat;
                background-size: contain;
                margin-bottom: 0.1rem;
              }
              .btn_load2 {
                background: url("https://img.guoanfamily.com/rentPC/rentindex/andirod.png") center no-repeat;
                background-size: contain;
              }
            }
            .right_box {
              float: left;
              margin-left: 0.2rem;
              width: 1.3rem;
              height: 1.3rem;
              background: url("https://media.guoanfamily.com/rent/static/HomePage/erweimadownload.png") center no-repeat;
              background-size: 100% 100%;


            }
          }
        }
        .appImg {
          float: right;
          width: 55%;
          height: 100%;
          background: url("https://img.guoanfamily.com/rentPC/indexPage/phone.png") right bottom no-repeat;
          background-size: contain;
        }
      }
      .bottom_box2 {
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 3rem;
        background: #222;
      }
    }
  }
  .isSmall{
    .mySwipers .swiper-slide .first_bg .Propaganda{
      left:2rem;
      width: 2.72*1.3rem;
      top:2rem;
      height: 2.28*1.3rem;
    }
    .mySwipers .swiper-slide .first_bg .search_mask{
      height: 1.6rem;
    }
    .mySwipers .swiper-slide .first_bg .search_mask .int_box{
      width: 13rem;
    }
    .mySwipers .swiper-slide .first_bg .search_mask .int_box .icon_search{
      width: .3rem;
      height: .3rem;
      margin-top: 0.16rem;
      margin-left: 0.19rem;
    }
    .mySwipers .swiper-slide .first_bg .search_mask .int_box .inp_b{
      height: .6rem;
      margin-top: .36rem;
      line-height: .6rem;
    }
    .mySwipers .swiper-slide .first_bg .search_mask .int_box .search_i{
      height: .6rem;
      line-height: .6rem;
    }
    .mySwipers .swiper-slide .first_bg .search_mask .hots{
      margin-top: 0.16rem;
    }
    .hots .left_b .hotwards{
      font-size: .14rem;
    }

    // 第二屏
    .mySwipers {
        .titles {
          position: relative;
          height: 1.8*1.3rem;

          overflow: hidden;
          &.titles_BGC {
            background-color: #f5f5f5;
          }
          &.zufang{
            background: url("https://img.guoanfamily.com/rentPC/indexPage/Tenement.png") center 0.5rem
            no-repeat;
            background-size:22%;
            background-color: #f5f5f5;
          }
          &.ershou{
            background: url("https://img.guoanfamily.com/rentPC/indexPage/Tenement.png") center 0.5rem
            no-repeat;
            background-size: 16%;
          }
          &.zhanshi{
            height: 1.2rem;
            background: url("https://img.guoanfamily.com/rentPC/indexPage/ShowCenter.png") center 0.5rem
            no-repeat;
            background-size: 16%;
          }
          .title_box{
            position: absolute;
            top: 53%;
            width: 100%;
            transform: translateY(-50%);

          }

          .title_word {
            // margin: 7.5% auto 0;
            text-align: center;
            height: 0.5*1.3rem;
            line-height: 0.5*1.3rem;
            font-size: 0.4*1.3rem;
          }
          .in_w {
            margin: 0.15*1.3rem auto 0;
            color: #666;
            text-align: center;
            height: 0.12*1.3rem;
            line-height: 0.12*1.3rem;
            font-size: 0.12*1.3rem;
          }
        }
        .houseList {
          position: absolute;
          bottom: 0;
          width: 100%;
          top: 2.2*1.3rem;
          background: url("https://img.guoanfamily.com/rentPC/indexPage/houseBg.png") center top no-repeat;
          background-size: cover;
          .housebox {
            padding-top:1.3rem;
            height: 100%;
            position: relative;
            .leftInfo {
              float: left;
              width: 2.7*1.3rem;
              height: 100%;
              .city {
                margin-top: 0.24*1.3rem;
                height: 0.24*1.3rem;
                font-size: 0.24*1.3rem;
                line-height: 0.24*1.3rem;
                text-align: left;
              }
              .build_name {
                height: 0.54*1.3rem;
                line-height: 0.54*1.3rem;
                font-size: 0.3*1.3rem;
                text-align: left;
              }
              .tag {
                height: 0.5*1.3rem;
                width: 100%;
                overflow-x: hidden;

              }
              .tagul {
                margin-top: .05*1.3rem;
                display: inline-block;
                white-space: nowrap;
                li {
                  display: inline;
                  background: #ccc;
                  color: #fff;
                  padding: 0 0.2*1.3em;
                  margin-right: 0.13rem;
                  cursor: pointer;
                }
              }
            }
            .banner {
              width: 9.3*1.3rem;
              float: left;
              height: 100%;
              .img {
                cursor: pointer;
                width: 7.7*1.3rem;
                float: left;
                height: 4.85*1.3rem;
                opacity: 0;

                &.actived{
                  opacity: 1;
                  transition: opacity 1s;
                }
                img {
                  width: 100%;
                  height: 100%;
                  vertical-align: top;
                }
              }
              .img_box {
                overflow-y: auto;
                float: left;
                width: 1.6*1.3rem;
                height: 4.85*1.3rem;
                border: 1px solid #eee;
                .swiper_btn{
                  height: 100%;
                  width: 100%;
                }
                .sm_img {
                  cursor: pointer;
                  height: 1.2*1.3rem;
                  margin-bottom: 0.02*1.3rem;
                  &.ActivedLi{
                    border: 1px solid #d6000f;
                  }
                  img {
                    width: 100%;
                    height: 100%;
                    vertical-align: top;
                  }
                }
              }
            }
            .Build_card {
              width: 3.65*1.3rem;
              height: 2.85*1.3rem;
              position: absolute;
              left: 0;
              top: 2.6*1.3rem;
              padding: 0.2*1.3rem;
              background: #000;
              .top_box {
                height: 25%;
                border-bottom: 1px solid #ccc;
                .num {
                  line-height: 0.6*1.3rem;
                  font-size: 0.4*1.3rem;
                  float: left;
                  color: #fff;
                }
                .average {
                  margin-top: 0.3*1.3rem;
                  margin-left: 0.15*1.3rem;
                  color: #fff;
                  float: left;
                  font-size: 0.18*1.3rem;
                }
                .danwei {
                  margin-top: 0.22*1.3rem;
                  margin-left: 0.1*1.3rem;
                  color: #fff;
                  float: left;
                  font-size: 0.18*1.3rem;
                }

              }
              .bottom_box {
                height: 30%;
                .adress,
                .time {
                  height: 50%;
                  // line-height: 0.5*1.3rem;
                  font-size: 0.16*1.3rem;
                  color: #fff;
                }
              }
              .btn_con {
                height: 0.3*1.3rem;
                position: absolute;
                left: 0.2*1.3rem;
                bottom: 0.2*1.3rem;
                width: 1.2*1.3rem;
                .left {
                  float: left;
                  width: 0.3*1.3rem;
                  height: 0.3*1.3rem;
                  border-radius: 50%;

                  background: url("https://img.guoanfamily.com/rentPC/indexPage/prove.png") 34% center
                    no-repeat;
                  background-size: 70%;
                  background-color: #e34b3e;
                }
                .right {
                  float: right;
                  width: 0.3*1.3rem;
                  height: 0.3*1.3rem;
                  border-radius: 50%;
                  background: url("https://img.guoanfamily.com/rentPC/indexPage/next.png") 65% center
                    no-repeat;
                  background-size: 70%;
                  background-color: #e34b3e;
                }
                .img_num {
                  position: absolute;
                  top: 0;
                  width: 0.6*1.3rem;
                  left: 0.3*1.3rem;
                  color: #fff;
                  font-size: 0.24*1.3rem;
                  line-height: 0.3*1.3rem;
                  text-align: center;
                }
              }
            }
          }
        }
    }
    // 第三屏

  }
</style>

