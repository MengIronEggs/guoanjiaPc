<template>
    <div style="height:100%;" class='innerPages1'>
        <div v-swiper:mySwiper="swiperOption" ref='mySwiper9' style="height: 80%; position:relative;" >
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="index" v-for="(item,index) in houseImgArr">
                  <!-- <img style="width:100%;height:85%;" :src="`https://img.guoanfamily.com/${item}`" alt=""/> -->
                  <div class='houseImgdiv' :style="{backgroundImage:`url(https://img.guoanfamily.com/${item})`}"></div>
                </div>
            </div>
            <div class="swiper-pagination newstat swiper-pagination-bullets" slot="pagination">
              
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["houseImgArr"],
  data() {
    let self = this;
    return {
      isShowtriangle:'',
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${index +
              1} </span>`;
          }
        }
      }
    };
  },
  computed:{
    swiper() {
      return this.$refs.mySwiper9.swiper;
    }
  }
};
</script>

<style lang='less' scoped>
.innerPages1 {
  .swiper-pagination-bullet {
    width: 0.2rem !important;
    height: 0.2rem !important;
    border-radius: 0;
    margin-right: 0.2rem !important;
    color: aqua !important;
  }
  .swiper-pagination-bullet-active {
    background: #f15044;
    margin-right: 0.2rem !important;
    display-inline: block;
    color: #000;
  }
  .newstat {
    margin: 0 auto;
    color: #000;
  }
  .swiper-slide{
    .houseImgdiv{
      width:100%;
      height:100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
}
</style>
<style lang='less'>
.innerPages1 {
  .swiper-pagination-bullet {
    width: 0.2rem !important;
    height: 0.2rem !important;
    border-radius: 0;
    margin-right: 0.2rem !important;
     color: #000 !important;
     background:none !important;
     font-size:.18rem;
     font-weight:600;
     opacity: inherit;
  }
  .swiper-pagination-bullet-active {
    background: #f15044;
    margin-right: 0.2rem !important;
    display-inline: block;
    
    color: #F15044 !important;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets{
    color:#000 !important;
  }
}
</style>

