<template>
    <div class="payWays">
         <div class="btn_box">
            <button class="button actived" >
                <span class="icon1">
                </span>
                <span class="texts1">
                    选择支付方式
                </span>
            </button>
        </div>
        <!-- 步骤条 -->
        <div class="steps">
            <div class="breads">
                <div class="step step1">1</div>
                <div class="step step2">2</div>
                <div class="step step3">3</div>
            </div>
            <div class="texts">
                <div class="stepinfo step1">
                    确认账单信息
                </div>
                <div class="stepinfo step2">
                    选择支付方式
                </div>
                <div class="stepinfo step3">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完成
                </div>
            </div>
        </div>

        <div>
          <nuxt-child/>
        </div>


    </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  created() {

  },



};
</script>

<style scoped lang="less">
.payWays {
  .btn_box {
    height: 0.96rem;
    padding-bottom: 0.44rem;
    border-bottom: 1px solid #ccc;
    .button {
      vertical-align: top;
      border: none;
      padding: 0;
      height: 0.5rem;
      font-size: 0.18rem;
      line-height: 0.48rem;
      text-align: center;
      width: 2rem;
      cursor: pointer;
      &:nth-child(2) {
        margin-left: 0.24rem;
      }
      &.actived {
        border: 2px solid #d6000f;
        color: #d6000f;
        background-color: #fff;
        .icon1 {
          background: #d6000f;
        }
        .texts1 {
          font-size: .18rem;
          color: #d6000f;
        }
      }
      .icon1 {
        float: left;
        height: 0.08rem;
        width: 0.08rem;
        margin-left: 0.2rem;
        margin-top: 0.2rem;
        background: #262d41;
        border-radius: 50%;
      }
      .texts {
        float: left;
        text-align: center;
        width: 1.6rem;
        font-size: 0.18rem;
        line-height: 0.48rem;
        color: #262d41;
      }
    }
  }
  .steps {
    padding-left: 0.4rem;
    height: 1rem;
  }
  .breads{
      width: 8.1rem;
      height: .4rem;
      background: url("https://img.guoanfamily.com/rentPC/rentAboutme/rightLong.png") center no-repeat;
      background-size: 100% 100%;
      margin-top: .9rem;
      .step{
          float: left;
          width: .4rem ;
          height: .4rem;
          border-radius: 50%;
          line-height: .4rem ;
          font-size: .3rem;
          color: #fff;
          text-align: center;
      }
      .step1{
          margin-left: .51rem;
          background:#D6000F;
      }
      .step2{
          margin-left: 2.9rem;
          background:#D6000F;
      }
      .step3{
          margin-left: 2.9rem;
          background:#ccc;
      }
  }
  .texts{
      margin-top: .12rem;
      .stepinfo{
          float: left;
          font-size: .18rem;
          color:#999;
      }
      .step1{
          margin-left: .15rem;
      }
      .step2{
          margin-left: 2.25rem;
      }
      .step3{
          margin-left: 2.25rem;
      }
  }
  .payInfo_box {
    padding-left: 0.4rem;
    margin-top: 0.4rem;
    .card {
      width: 4rem;
      height: 2.4*0.8rem;
      float: left;
      position: relative;
      cursor: pointer;
      &:hover {
        transform: scale(1.02);
      }
      &:nth-child(2) {
        margin-left: 0.2*0.8rem;
      }
      &.zhifubao {
        background: url("https://img.guoanfamily.com/rentPC/rentAboutme/bluejiao.png")
          no-repeat center;
        background-size: 100% 100%;
      }
      &.weixin {
        background: url("https://img.guoanfamily.com/rentPC/rentAboutme/greenjiao.png")
          no-repeat center;
        background-size: 100% 100%;
      }
      .content {
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -0.42rem;
        width: 100%;
        height: 0.84rem;
        padding-left: 0.64rem;
        .left_box {
          float: left;
          width: 0.84rem;
          height: 0.84rem;
        }
        .info_box {
          float: left;
          height: 0.84rem;
          padding: 0.1rem 0 0.1rem 0.6rem;
          .Cname {
            font-size: 0.25rem;
          }
          .Ename {
            margin-top: 0.02rem;
            color: #999;
            font-size: 0.24rem;
          }
        }
        .zhifuBao_ico {
          background: url("https://img.guoanfamily.com/rentPC/rentAboutme/zfb.png")
            center no-repeat;
          background-size: 100% 100%;
        }
        .wx_ico {
          background: url("https://img.guoanfamily.com/rentPC/rentAboutme/wx.png") center
            no-repeat;
          background-size: 100% 100%;
        }
      }
      .checked {
        width: 0.4rem;
        height: 0.4rem;
        position: absolute;
        right: 0.2rem;
        top: 0.2rem;
        border-radius: 50%;
        border: 1px solid #ccc;
        background: #fff;
        cursor: pointer;
        &.actived {
          border: none;
          background: url("https://img.guoanfamily.com/rentPC/rentAboutme/truecircle.png")
            center no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
  .btn {
    margin-top: 0.5rem;
    width: 1rem;
    height: 0.3rem;
    background: #d6000f;
    float: left;
    text-align: center;
    line-height: 0.3rem;
    color: #fff;
    font-size: 0.16rem;
    border: none;
    padding: 0;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #d6000f;
      border: 1px solid #d6000f;
    }
  }
}
</style>
