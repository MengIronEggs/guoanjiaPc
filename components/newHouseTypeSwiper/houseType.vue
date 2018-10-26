<template>
    <div style="height:100%;" class='innerPages'>
        <div v-swiper:mySwiper="swiperOption" style="height: auto; position:relative;" >
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="index" v-for="(item,index) in houseTypeArr">
                    <div class="content">
                        <div class='leftContet'>
                            <div style="font-weight:600;font-size:.24rem;center;margin-top:1rem;">{{item.buildname}}</div>
                            <div><span>建筑面积:</span><span>{{item.salearea}}</span></div>
                            <div><span>户　　型：</span><span>{{item.housetypecode}}　{{item.towards}}</span></div>
                            <div><span>厅&nbsp;室&nbsp;卫：</span><span>{{item.housetypedescribe}}</span></div>
                            <div><span>户型描述：</span>{{item.housetypefeature}}</div>
                            <div><span>户型详情：</span><span>{{item.housetypedetail}}</span></div>
                            <!-- <div></div> -->
                        </div>
                        <div class='rightImg'>
                            <img style="width:100%;height:100%;" :src="`https://img.guoanfamily.com/${item.newHouseFileImg}`" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
             <div class="swiper-pagination1" slot="pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["houseTypeArr"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination1",
           clickable: true,
        },
       
      },
    };
  },
  created() {
    // console.log(this.houseTypeArr);
  },
};
</script>

<style lang='less' scoped>
.swiper-pagination1 {
  position: absolute;
  left: 10%;
  bottom: 0;
  z-index: 10;
  // width: .2rem;
  // height: .2rem;
}

.content {
  width: 100%;
  height: 6rem;
  .leftContet {
    width: 50%;
    float: left;
    height: 100%;
    background: #fff;
    div {
      color: #222;
      width: 80%;
      margin-left: 15%;
      // height: .5rem;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      line-height: 0.5rem;
    }
  }
  .rightImg {
    float: left;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
<style lang='less'>

.innerPages {
  .swiper-pagination-bullet {
    width: 0.2rem !important;
    height: 0.2rem !important;
    border-radius:0;
    margin-right:.2rem !important;
  }
  .swiper-pagination-bullet-active{
      background:#f15044;
      margin-right:.2rem !important;
      display-inline:block;
  }
}
</style>

