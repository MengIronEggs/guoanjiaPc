<template>
	<div>
		<headeNav :NavActived = "5"></headeNav>
		<div class="banner">
			<!--<div class="banner-img">
				<img class="bannerImg" ref="bannerImg0" style="display: block;"  src="https://img.guoanfamily.com/rentPC/exhibition/banner1.jpg"/>
				<img class="bannerImg" ref="bannerImg1"  src="https://img.guoanfamily.com/rentPC/exhibition/banner3.jpg"/>
				<img class="bannerImg" ref="bannerImg2"  src="https://img.guoanfamily.com/rentPC/exhibition/banner4.jpg"/>
				<img class="bannerImg" ref="bannerImg3"  src="https://img.guoanfamily.com/rentPC/exhibition/banner2.jpg"/>
			</div>-->
			<div class="banner-img">
				<div v-swiper:mySwiper="swiperOption" ref="mySwiper">
	              	<div class="swiper-wrapper">
		                <div class="swiper-slide" :key="index" v-for="(item,index) in bannerArr">
		                  <img  :src="item" />
		                </div>
	             	 </div>
	            </div>
			</div>
			
			<div class="shadow">
				<div style="width: 12rem;margin: auto;">
					<div class="phone">
						<img src="https://img.guoanfamily.com/rentPC/exhibition/phone.png"/>
					</div>
					<div class="thireeD">
						<img @click="gotoexhibition" src="https://img.guoanfamily.com/rentPC/exhibition/3d.png"/>
					</div>
					<div class="img-list">
						<div class="img1" ref="myimg1" @click="imgclick(0)" style="border: 1px solid white;">
							<img src="https://img.guoanfamily.com/rentPC/exibition/image1.png" alt="" />
						</div>
						<div class="img1" ref="myimg2" @click="imgclick(1)">
							<img src="https://img.guoanfamily.com/rentPC/exhibition/img2.png" alt="" />
						</div>
						<div class="img1" ref="myimg3" @click="imgclick(2)">
							<img src="https://img.guoanfamily.com/rentPC/exhibition/img3.png" alt="" />
						</div>
						<div class="img1" ref="myimg4" @click="imgclick(3)">
							<img src="https://img.guoanfamily.com/rentPC/exhibition/img4.png" alt="" />
						</div>
					</div>
				</div>
			</div>
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
				bannerArr:["https://img.guoanfamily.com/rentPC/exhibition/banner1.jpg",
					"https://img.guoanfamily.com/rentPC/exhibition/banner3.jpg",
					"https://img.guoanfamily.com/rentPC/exhibition/banner4.jpg",
					"https://img.guoanfamily.com/rentPC/exhibition/banner2.jpg"
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
		methods:{
			gotoexhibition(){
				window.open("https://beyond.3dnest.cn/play/?m=zhq_gaj_83");
			},
			// 跳转到指定图片方法
		    swiperTopTabClick(num) {
		      this.swiperIndex = num;
		      this.swiper.slideTo(num, 0, false);
		    },
			imgclick(index){
				if(index == 0){
					this.$refs.myimg1.style.border= '1px solid white';
					this.$refs.myimg2.style.border= '1px solid black';
					
					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid black';
					
					this.swiper.slideTo(index, 0, false);
					
				}else if(index == 1){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid white';
					
					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid black';
					
					this.swiper.slideTo(index, 0, false);
				}else if(index == 2){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid black';
					
					this.$refs.myimg3.style.border= '1px solid white';
					this.$refs.myimg4.style.border= '1px solid black';
					
					this.swiper.slideTo(index, 0, false);
				}else if(index == 3){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid black';
					
					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid white';
					
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
	.banner{
		width: 100%;
		height: 8.5rem;
		box-sizing: border-box;
		padding-top: 6rem;
		position: relative;
		.banner-img{
			width: 100%;
			height: 8.5rem;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 1;
			img{
				width: 100%;
				height: 8.5rem;
			}
		}
		.shadow{
			position: relative;
			z-index: 2;
			height: 1.5rem;
			background: rgba(0,0,0,.8);
			.phone{
				width: 3.55rem;
				height: 0.66rem;
				float: left;
				margin-top: 0.35rem;
				img{
					width: 80% ;
				}
			}
			.thireeD{
				width: 2rem;
				height: 0.5rem;
				float: left;
				margin-top: 0.4rem;
				img{
					width: 100%;
					cursor: pointer;
				}
			}
			.img-list{
				height: 0.92rem;
				float: left;
				margin-left: 0.2rem;
				margin-top: 0.3rem;
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
				}
				.img2{
					border:1px solid white;
				}
			}
		}
	}
</style>