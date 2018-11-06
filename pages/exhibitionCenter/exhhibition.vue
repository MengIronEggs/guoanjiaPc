<template>
	<div>
		<!--头部-->
		<div style="width:100%;height:auto;position:absolute;left:0;top:0;z-index:10">
            <headeNav :NavActived="5"></headeNav>
        </div>
        <div style="height: 70px;"></div>
		<div class="banner">
			<div class="banner-img">
				<div v-swiper:mySwiper="swiperOption" ref="mySwiper">
	              	<div class="swiper-wrapper">
		                <div class="swiper-slide" :key="index" v-for="(item,index) in bannerArr">
		                  <img  class="banner-img-inner" :src="item" />
		                </div>
	             	 </div>
	            </div>
	            <div class="thireeD">
					<img @click="goThreeLook" src="https://img.guoanfamily.com/rentPC/exhibition/3d.png"/>
				</div>
			</div>
			
			<div class="shadow">
				<div style="width: 12rem;margin: auto;">
					<div class="phone">
						<img src="https://img.guoanfamily.com/rentPC/exhibition/phone.png"/>
					</div>
					<div class="img-list">
						<div class="img-list-slider">
							<div class="img1" ref="myimg1" @click="imgclick(0)" style="border: 1px solid white;">
								<img src="https://img.guoanfamily.com/rentPC/exibition/image1.png" alt="" />
							</div>
							<div class="img1" ref="myimg2" @click="imgclick(1)">
								<img src="https://img.guoanfamily.com/rentPC/exhibition/img5.png" alt="" />
							</div>
							<div class="img1" ref="myimg3" @click="imgclick(2)">
								<img src="https://img.guoanfamily.com/rentPC/exhibition/img3.png" alt="" />
							</div>
							<div class="img1" ref="myimg4" @click="imgclick(3)">
								<img src="https://img.guoanfamily.com/rentPC/exhibition/img4.png" alt="" />
							</div>
							<div class="img1" ref="myimg5" @click="imgclick(4)">
								<img src="https://img.guoanfamily.com/rentPC/exhibition/img6.png" alt="" />
							</div>
							<div class="img1" ref="myimg6" @click="imgclick(5)">
								<img src="https://img.guoanfamily.com/rentPC/exhibition/img7.png" alt="" />
							</div>
						
						</div>
					</div>
				</div>
			</div>
			
			
		</div>
		<!--实景看房-->
		<div class="threeFrame" v-if="threeFrameOpen">
			<div class="threeFrameClose" @click="goThreeClose"></div>
			<iframe src="https://beyond.3dnest.cn/play/?m=zhq_gaj_83" 
			    width="100%"
			    height="100%"
			    >
			</iframe>
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
			var _this = this;
			return{
				threeFrameOpen:false,
				bannerArr:["https://img.guoanfamily.com/rentPC/exhibition/banner1.jpg",
					"https://img.guoanfamily.com/rentPC/exhibition/banner5.jpg",
					"https://img.guoanfamily.com/rentPC/exhibition/banner4.jpg",
					"https://img.guoanfamily.com/rentPC/exhibition/banner2.jpg",
					"https://img.guoanfamily.com/rentPC/exhibition/banner6.jpg",
					"https://img.guoanfamily.com/rentPC/exhibition/banner7.jpg"
				],
				activeIndex:0,
				swiperOption: {
					loop:false,
					autoplay:true,
			        navigation: {
			          nextEl: ".swiper-button-next",
			          prevEl: ".swiper-button-prev"
			        },
			        on: {
			          slideChangeTransitionStart() {
						_this.imgclick(this.activeIndex)
			          }
			        }
			    },
				imgIndex:0
			}
		},
		mounted(){
			setTimeout(()=>{
				document.querySelector(".banner-img").style.height = document.querySelector(".banner-img-inner").clientHeight+'px';
				document.querySelector(".banner").style.height = document.querySelector(".banner-img-inner").clientHeight+'px';
			},500)
			
		},
		methods:{
			//打开3D看房的frame
            goThreeLook(){
            	this.threeFrameOpen = true;
            	
            },
            //关闭3D看房的frame
            goThreeClose(){
            	this.threeFrameOpen = false;
            },
			gotoexhibition(){
				window.open("https://beyond.3dnest.cn/play/?m=zhq_gaj_83");
			},
			// 跳转到指定图片方法
		    swiperTopTabClick(num) {
		      this.swiperIndex = num;
		      this.swiper.slideTo(num, 0, false);
		    },
			imgclick(index){
				var imgSlide = document.querySelector(".img-list-slider");
				
				if(index == 0){
					this.$refs.myimg1.style.border= '1px solid white';
					this.$refs.myimg2.style.border= '1px solid black';
					
					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid black';
					this.$refs.myimg5.style.border= '1px solid black';
					this.$refs.myimg6.style.border= '1px solid black';
					this.swiper.slideTo(index, 0, false);
					
				}else if(index == 1){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid white';
					
					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid black';
					this.$refs.myimg5.style.border= '1px solid black';
					this.$refs.myimg6.style.border= '1px solid black';
					this.swiper.slideTo(index, 0, false);
				}else if(index == 2){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid black';
					
					this.$refs.myimg3.style.border= '1px solid white';
					this.$refs.myimg4.style.border= '1px solid black';
					this.$refs.myimg5.style.border= '1px solid black';
					this.$refs.myimg6.style.border= '1px solid black';
					this.swiper.slideTo(index, 0, false);
				}else if(index == 3){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid black';
					
					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid white';
					this.$refs.myimg5.style.border= '1px solid black';
					this.$refs.myimg6.style.border= '1px solid black';
					this.swiper.slideTo(index, 0, false);
				}else if(index == 4){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid black';
					
					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid black';
					this.$refs.myimg5.style.border= '1px solid white';
					this.$refs.myimg6.style.border= '1px solid black';
					this.swiper.slideTo(index, 0, false);
				}else if(index == 5){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid black';
					
					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid black';
					this.$refs.myimg5.style.border= '1px solid black';
					this.$refs.myimg6.style.border= '1px solid white';
					
					this.swiper.slideTo(index, 0, false);
				}
			}
		},
		computed: {
		    swiper() {
		      return this.$refs.mySwiper.swiper;
		    }
		}
	}
</script>

<style lang="less" scoped>
	.threeFrame{
	    position: fixed;
	    z-index: 11;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    .threeFrameClose{
	    	position: absolute;
		    z-index: 3;
		    top: 20px;
		    right: 20px;
		    width: 50px;
		    height: 50px;
		    cursor: pointer;
		    background-color:rgba(0,0,0,.1) ;
			background-image: url("https://img.guoanfamily.com/rentPC/detaile/closewhite.png");
			transition: .3s;
			border-radius: 50%;
			background-size:61%  61%;
			background-position:10px 10px;
			background-repeat: no-repeat;
		}
		/*.threeFrameClose:hover{
			background: url("../../../../static/Detaile/close.png");
		}*/
    }
	.banner{
		width: 100%;
		box-sizing: border-box;
		position: relative;
		transition:all .3s;
		.banner-img{
			width: 100%;
			position: relative;
			top: 0;
			right: 0;
			z-index: 1;
			transition:all .3s;
			.banner-img-inner{
				width: 100%;
				height: 100%;
			}
			.thireeD{
				position: absolute;
				bottom: 200px;
    			left: 14%;
				z-index: 2;
				cursor: pointer;
				
			}
		}
		.shadow{
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: 2;
			height: 1.5rem;
			background: rgba(0,0,0,.8);
			.phone{
				width: 2.55rem;
				height: 0.66rem;
				float: left;
				margin-top: 0.35rem;
				img{
					width: 80% ;
				}
			}
			
			.img-list{
				height: 0.92rem;
				float: left;
				margin-left: 0.5rem;
				margin-top: 0.3rem;
				position: relative;
				overflow: hidden;
				.img-list-slider{
					height: 100%;
				}
				.img1{
					width: 1.22rem;
					height: 0.92rem;
					box-sizing: border-box;
					border:1px solid black;
					margin-right:0.2rem;
					float:left;
					cursor:pointer;
					img{
						width: 100%;
						height: 100%;
					}
					&:last-child{
						margin-right: 0;
					}
				}
				.img2{
					border:1px solid white;
				}
			}
		}
	}
</style>