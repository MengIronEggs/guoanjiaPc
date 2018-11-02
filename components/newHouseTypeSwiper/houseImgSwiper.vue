<template>
    <div style="height:100%;" class='innerPages'>
        <div v-swiper:mySwiper="swiperOption" style="height: 80%; position:relative;" >
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="index" v-for="(item,index) in houseImgArr">
                <img style="width:100%;height:100%;" :src="`https://img.guoanfamily.com/${item}`" alt=""/>
                </div>
            </div>
            <div class="swiper-pagination newstat" slot="pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["houseImgArr"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang='less' scoped>
.innerPages {
  .swiper-pagination-bullet {
    width: 0.2rem !important;
    height: 0.2rem !important;
    border-radius: 0;
    margin-right: 0.2rem !important;
  }
  .swiper-pagination-bullet-active {
    background: #f15044;
    margin-right: 0.2rem !important;
    display-inline: block;
  }
  .newstat{
      margin: 0 auto;
  }
}
</style>
