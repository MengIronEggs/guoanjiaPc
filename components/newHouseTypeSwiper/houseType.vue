<template>
    <div style="height:100%;" class='innerPages'>
        <div v-swiper:mySwiper="swiperOption" style="height:auto; max-height:4.6rem; position:relative;" >
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="index" v-for="(item,index) in houseTypeArr">
                    <div class="content">
                        <div class='leftContet'>
                            <div style="font-weight:600;font-size:.24rem;center;">{{item.buildname}}</div>
                            <div><span>建筑面积:</span><span>{{item.salearea}}㎡</span></div>
                            <div><span>户　　型：</span><span>{{item.housetypecode}}　{{item.towards}}</span></div>
                            <div><span>厅&nbsp;室&nbsp;卫：</span><span>{{item.housetypedescribe}}</span></div>
                            <div><span>户型描述：</span>{{item.housetypefeature}}</div>
                            <div><span>户型详情：</span><span>{{item.housetypedetail}}</span></div>
                            <!-- <div></div> -->
                        </div>
                        <div class='rightImg'>
                            <houseImgSwiper :houseImgArr='item.housetypefilename'></houseImgSwiper>
                        </div>
                    </div>
                </div>
            </div>
             <div class="swiper-pagination1" slot="pagination"></div>
        </div>
    </div>
</template>

<script>
import houseImgSwiper from './houseImgSwiper.vue';
export default {
  props: ["houseTypeArr"],
  components:{
    houseImgSwiper
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination1",
          clickable: true
        }
      },
      swiperOption1:{
        pagination: {
          el: ".swiper-pagination1",
          clickable: true
        }
      }
    };
  },
  mounted() {
    // console.log(this.houseTypeArr);
    for(let i = 0; i <this.houseTypeArr.length;i++){  
      if(this.houseTypeArr[i].salearea.charAt(this.houseTypeArr[i].salearea.length-1) == '㎡'){
        this.houseTypeArr[i].salearea = this.houseTypeArr[i].salearea.substring(0,this.houseTypeArr[i].salearea.length-1);
      }
      this.houseTypeArr[i].housetypefilename = this.houseTypeArr[i].housetypefilename.split(',');
    }
    // console.log(this.houseTypeArr);
  }
};
</script>

<style lang='less' scoped>
.swiper-pagination1 {
  position: absolute;
  bottom: 0rem;
  z-index: 10;
  width:50%;
  background:#fff;
}

.content {
  width: 100%;
  height: 5.8rem;
  .leftContet {
    width: 50%;
    float: left;
    // height: 100%;
    background: #fff;
    div {
      color: #222;
      width: 100%;
      // margin-left: 15%;
      // height: .5rem;
      // padding-left: 0.2rem;
      padding-right: 0.2rem;
      line-height: 0.35rem;
    }
    div:last-child{
      max-height: 3.2rem;
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
    border-radius: 0 !important;
    margin:4px 4px !important;
    margin-right: 0.2rem !important;
  }
  .swiper-pagination-bullet-active {
    background: #f15044;
    margin-right: 0.2rem !important;
    display-inline: block;
  }
}
</style>

