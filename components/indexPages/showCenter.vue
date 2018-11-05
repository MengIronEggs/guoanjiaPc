<template>
    <div class="showCenter">
        <div class="banner">
            <!-- 头部 -->
            <div class="header_info">
                 <!-- <div class="title_word">
                    展示中心
                </div>
                <div class="in_w">
                    认真的公寓 犒赏认真生活的人
                </div> -->
            </div>
            <div class="banner-img">
                <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" :key="index" v-for="(item,index) in bannerArr">
                            <img  :src="item" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- 导航 -->
            <div class="shadow">
                <div style="width: 12rem;margin: auto;">

                    <!-- <div class="thireeD">
                        <img @click="gotoexhibition" src="https://img.guoanfamily.com/rentPC/exhibition/3d.png"/>
                    </div> -->
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
                    <div class="phone">
                        <img src="https://img.guoanfamily.com/rentPC/exhibition/phone.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            var _this = this;
			return{
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
        components: {

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
				console.log(index);
				var imgSlide = document.querySelector(".img-list-slider");

				if(index == 0){
					this.$refs.myimg1.style.border= '1px solid white';
					this.$refs.myimg2.style.border= '1px solid black';

					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid black';
					this.$refs.myimg5.style.border= '1px solid black';
					this.$refs.myimg6.style.border= '1px solid black';
					imgSlide.style.left = 0+'rem';
					this.swiper.slideTo(index, 0, false);

				}else if(index == 1){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid white';

					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid black';
					this.$refs.myimg5.style.border= '1px solid black';
					this.$refs.myimg6.style.border= '1px solid black';
					imgSlide.style.left = 0+'rem';
					this.swiper.slideTo(index, 0, false);
				}else if(index == 2){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid black';

					this.$refs.myimg3.style.border= '1px solid white';
					this.$refs.myimg4.style.border= '1px solid black';
					this.$refs.myimg5.style.border= '1px solid black';
					this.$refs.myimg6.style.border= '1px solid black';
					imgSlide.style.left = 0+'rem';
					this.swiper.slideTo(index, 0, false);
				}else if(index == 3){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid black';

					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid white';
					this.$refs.myimg5.style.border= '1px solid black';
					this.$refs.myimg6.style.border= '1px solid black';
					imgSlide.style.left = -1.1+'rem';
					this.swiper.slideTo(index, 0, false);
				}else if(index == 4){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid black';

					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid black';
					this.$refs.myimg5.style.border= '1px solid white';
					this.$refs.myimg6.style.border= '1px solid black';
					imgSlide.style.left = -2.1+'rem';
					this.swiper.slideTo(index, 0, false);
				}else if(index == 5){
					this.$refs.myimg1.style.border= '1px solid black';
					this.$refs.myimg2.style.border= '1px solid black';

					this.$refs.myimg3.style.border= '1px solid black';
					this.$refs.myimg4.style.border= '1px solid black';
					this.$refs.myimg5.style.border= '1px solid black';
					this.$refs.myimg6.style.border= '1px solid white';
					imgSlide.style.left = -3.2+'rem';
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
        .header_info{
            position: absolute;
            top: 1rem;
            left: 50%;
            margin-left: -4rem;
            width: 8rem;
            z-index: 100;
            height: 1rem;
            background: url("https://img.guoanfamily.com/rentPC/indexPage/ShowCenter.png") top center no-repeat/cover;
            .title_word{
                color: #fff;
                font:400 .4rem/1rem "微软雅黑";
                text-align: center

            }
            .in_w{
                color: #fff;
                text-align: center
            }
        }
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
				width: 2.55rem;
				height: 0.66rem;
				float: left;
				margin-top: 0.35rem;
				img{
					width: 80% ;
				}
			}
			.thireeD{
				width: 1rem;
				height: 0.5rem;
				float: left;
				margin-top: 0.5rem;
				img{
					width: 100%;
					cursor: pointer;
				}
			}
			.img-list{
				width: 8.7rem;
				height: 0.92rem;
				float: left;
				margin-left: 0.5rem;
				margin-top: 0.3rem;
				position: relative;
				overflow: hidden;
				.img-list-slider{
					width: 8.9rem;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					transition: all .3s;
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
