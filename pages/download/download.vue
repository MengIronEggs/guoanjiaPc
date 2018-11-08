<style lang='less' scoped>
  .load1 {
      position: absolute;
      top: 69%;
      left: 23%;
      cursor: pointer;
      width: 130px;
  }
  .load2 {
      position: absolute;
      top: 77%;
      left: 23%;
      cursor: pointer;
      width: 130px;
  }
  .erweima {
      position: absolute;
      top: 68%;
      left: 32.5%;
      width: 100px;
  }
  .background{
    width: 100%;
    position: absolute;
    z-index: 1;
    background: url(https://media.guoanfamily.com/rent/static/HomePage/banjingtu.png) no-repeat;
    background-size: 100% 100%;
    top: 54px;
  }
  .center{
    position:relative;
    height: 768px;
    margin-top:65px;
    width: 100%;
    background: url(https://media.guoanfamily.com/rent/static/HomePage/banjingtu.png) no-repeat;
    background-size: 100% 100%;
  }
</style>
<template>
    <div class="bodyTop">
      <div style="width:100%;height:auto;position:absolute;left:0;top:0;z-index:10">
             <headeNav ></headeNav>
        </div>
        <div style="position:relative;">
          <img style="width:90%;display:block;margin:0 auto;postiion:relative;margin-top: 70px;" src="https://media.guoanfamily.com/rent/static/HomePage/banjingtu.png">
          <img class="load1" src="https://media.guoanfamily.com/rent/static/HomePage/Androiddownload.png"/>
          <img class="load2" src="https://media.guoanfamily.com/rent/static/HomePage/iosdownload.png"/>
          <img class="erweima" src="https://media.guoanfamily.com/rent/static/HomePage/erweimadownload.png" alt="国安家APP下载">
        </div>
        <bottom style="z-index:1;"></bottom>
    </div>
</template>
<script>
import headeNav from '~/components/headerNav.vue'
import bottom from '~/components/bottom.vue'
export default {
  data() {
    return {
      
    };
  },
  components:{
    headeNav,
    bottom
  },
  asyncData() {
    
  },
  methods:{
    
  },
  mounted() {}
};
</script>
