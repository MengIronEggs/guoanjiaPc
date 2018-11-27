<style lang='less' scoped>
  .frame-window {
      position: relative;
      top: 50%;
      width: 50%;
      margin-left: 8%;
      min-width: 721px;
      height: 650px;
      margin-top: 60px ;
      display: block;
  }
  .bg {
    background: url(https://img.guoanfamily.com/rentPC/error/errorBG.jpg) no-repeat center;
    background-size: cover;

  }
  .bottom_box{
    height: 50px;
    overflow: hidden;
    position: relative;
    .bottom_info{
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
</style>
<template>
    <div class="bodyTop bg">
      <div style="width:100%;height:auto;position:absolute;left:0;top:0;z-index:10">
             <headeNav :NavActived="2"></headeNav>
        </div>
        <iframe class="frame-window" src="https://error.guoanfamily.com/404/404iframe.html" frameborder="0"></iframe>
        <div class="bottom_box">
          <div class="bottom_info">
            <bottom style="z-index:1;"></bottom>
          </div>


        </div>
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
