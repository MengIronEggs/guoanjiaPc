<template>
    <div class="bodyTop">
        <div style="width:100%;height:auto;position:absolute;left:0;top:0;z-index:10">
             <headeNav></headeNav>
        </div>
        <!-- 头部图片 -->
        <div class="topImg"></div>
        <!-- div分割线 -->
        <div class="divLine"></div>
        <!-- 图片展示部分 -->
        <div class='content_w imgShowdiv'>
            <div>
                <div class='title'>丰厚的收益</div>
                <div class='blow'>收益稳定丰厚&nbsp;生活怡然自得</div>
                <div class='divImg'></div>
                <div class='describe'>定期支付佣金，保障您获得持续稳定的收益</div>
            </div>
            <div>
                <div class='title'>房产保值</div>
                <div class='blow'>专业养护服务&nbsp;降低资产折旧率</div>
                <div class='divImg divImg1'></div>
                <div class='describe'>引入“房屋保洁和定期检修”两项资产保护服务，确保您的房产得到周全善待。</div>
            </div>
            <div>
                <div class='title'>省时省心</div>
                <div class='blow'>出租零费心&nbsp;生活更安逸</div>
                <div class='divImg divImg2'></div>
                <div class='describe'>为您代劳所有出租过程中的琐务，您唯一需要做的事便是定期查收租金。</div>
            </div>
        </div>
        <div class='divOuterLine'></div>
        <!-- 中间图片展示部分 -->
        <div class='content_w'>
            <div class='centerTitle'>国安家高品质服务公寓</div>
            <div class='outerLine'></div>
            <div class='imgContent'>
                <div class='imgContentLeft'></div>
                <div class='imgContentRight'>
                    <div class='imgContentRightTop'>
                        <div class='imgContentRightTopOne'></div>
                        <div class='imgContentRightTopTwo'></div>
                    </div>
                    <div class='imgContentRightbottom'></div>
                </div>
            </div>
        </div>
        <div class='divLine'></div>
        <!-- 添加信息部分 -->
        <div class='content_w' style="height:7rem;">
            <!-- 左侧说明 -->
            <div class="entrust-right">
                <div class="entrust-right-top">
                    <div class="rightTop-left">
                        <p class="p1">您的信任托付</p>
                        <p class="p1">我们悉心照料</p>
                    </div>
                    <div class="rightTop-right">
                        <p class="p1">租期一站式托管</p>
                        <p class="p1">安全放心、稳定收益</p>
                        <p class="p1">省时省心，国安家更懂你</p>
                        <p class="p1">您的资产管理专家</p>
                    </div>
                </div>
                <div class="entrust-right-bottom">
                    <div class="entrust-right-bottom-item">
                        <div class="entrust-logo"></div>
                        <div class="entrust-word">
                            <p class="p1">出租零费心生活更安逸</p>
                            <p class="p2">为您代劳所有出租过程中的琐碎事务，您唯一需要做的是只有定期查收租金。</p>
                        </div>
                    </div>
                    <div class="entrust-right-bottom-item">
                        <div class="entrust-logo entrust-logo2"></div>
                        <div class="entrust-word">
                            <p class="p1">专业养护服务降低资产折旧率</p>
                            <p class="p2">引入“房屋保洁和定期检修”两项资产保养服务确保您的房产得到周全的善待。</p>
                        </div>
                    </div>
                    <div class="entrust-right-bottom-item">
                        <div class="entrust-logo entrust-logo3"></div>
                        <div class="entrust-word">
                            <p class="p1">收益稳定丰厚 生活怡然自得</p>
                            <p class="p2">定期支付租金，保障您获得持续稳定的收益</p>
                        </div>
                    </div>
                    <div class="entrust-right-bottom-item">
                        <div class="entrust-logo entrust-logo4" style="margin-top: 0.4rem;"></div>
                        <div class="entrust-word">
                            <p class="p1">装修零投入省心又安心</p>
                            <div class="p2">采用环保材料精装，提升房产价值，房屋托管到期后把维护良好的装修赠与您。实现回报最大化。</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右侧添加信息 -->
            <div class='entrust-info'>
                <div class='InputDiv'>
                    <label class='labesSpan'><span style="display:inline-block;color:red;">*</span>手机号</label>
                    <input class='inputText' type="text" v-model="phoneNumber" placeholder="请输入您的手机号" />
                </div>
                <div class='InputDiv'>
                    <label class='labesSpan'><span style="display:inline-block;color:red;">*</span>姓&nbsp;&nbsp;&nbsp;&nbsp;名</label>
                    <input class='inputText' type="text" v-model="name" placeholder="请输入您的姓名" />
                </div>
                <div class='ownerTop' style="height:.6rem;margin-top:0;">房屋信息</div>
                <div class='InputDiv' style="margin-top:.2rem;">
                    <!-- <label class='labesSpan'><span style="display:inline-block;color:red;">*</span>小区名称</label>
                    <input class='inputText' type="text" v-model="buildName" placeholder="请输入小区名称" /> -->
                    <el-form label-width="1rem" v-if="isShowFrom" style="overflow-x:hidden;">
                        <el-form-item label="小区名称">
                              <el-select
                                v-model="buildName"
                                multiple
                                filterable
                                remote
                                v-show="isShowFrom"
                                reserve-keyword
                                placeholder="输入小区名称搜索"
                                :remote-method="remoteMethod"
                                >
                                <el-option
                                  v-for="item in options4"
                                  :key="item.id"
                                  :label="item.name"
                                  :value="item.name">
                                </el-option>
                              </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class='ownerTop' style="margin-top:.2rem;height:.6rem">备注</div>
                <div class='InputDiv' style="margin-top:.1rem;width5.7rem;">
                    <textarea name="" v-model="textAreaVal" placeholder="请输入其他情况，如果没有匹配到您的小区，请在此输入信息" id="" style="width:100%;resize:none;font-size: 0.16rem;padding-top:.2rem;padding-left:.2rem;" rows="5"></textarea>
                    <button @click="submitInfoClick">提交</button>
                </div>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
import headeNav from "~/components/headerNav.vue";
import bottom from '~/components/bottom.vue'
import { objFn } from '../../plugins/axios';
export default {
  components: {
    headeNav,
    bottom
  },
  data() {
    return {
      phoneNumber: "",
      name: "",
      buildName: [],
      textAreaVal: "",
      options4:[],
      isShowFrom:false,
    };
  },
  methods: {
    // 查询小区名称
    remoteMethod(item){
      // console.log(item);
      // console.log(item,this.buildName)
      let url = 'agenthouseCutomer/CommunityController/findCommunityList'
      let post_data = {
        communityName:item,
      }
      // OWNER_URL
      objFn.Axios(url,"post",post_data,{interfaceType:'OWNER_URL'}).then(res => {
          // console.log(res);
          if(res.code == 0){
            this.options4 = res.data;
          }
        });
    },
    //提交的点击事件
    submitInfoClick() {
      if (this.phoneNumber.length !== 11) {
        this.$showErrorTip("请输入正确电话号码");
        return false;
      }
      if (!objFn.noeEmpty(this.name)) {
        this.$showErrorTip("请输入姓名");
        return false;
      }
      let houseId = '';
      for(let i = 0;i < this.options4.length;i++){
        if(this.buildName == this.options4[i].name){
          houseId = this.options4[i].id;
        }
      }
      let post_data = {
        phone: this.phoneNumber, //电,//电话
        userName: this.name, //姓名
        communityId: houseId, //小区id
        remark: this.this.textAreaVal //留,//留言
      };
      let url = "agenthouseCutomer/CEntrusController/saveCEntrus";
      objFn
        .Axios(url, "post", post_data, { interfaceType: "RENT_HOUSE" })
        .then(res => {
          if (res.msg === 0) {
            this.$showMsgTip("提交成功");
          }
        });
    }
  },
  mounted() {
    this.isShowFrom = true;
  },
};
</script>

<style lang='less' scoped>
.bodyTop {
  width: 100%;
  height: 100%;
}
.topImg {
  width: 100%;
  height: 5.5rem;
  background: url("https://img.guoanfamily.com/rentPC/ownerImg/ownerTop.jpg") no-repeat center;
  background-size: cover;
  margin-top: 0.7rem;
}
.divLine {
  width: 100%;
  height: 1rem;
  background: #fff;
}
.imgShowdiv {
  display: flex;
  flex-direction: row;
  div {
    flex: 1;
    height: 3.5rem;
    margin-right: 0.6rem;
    .title {
      width: 100%;
      height: 0.5rem;
      color: #000000;
      font-size: 0.32rem;
      line-height: 0.32rem;
      text-align: center;
    }
    .blow {
      width: 100%;
      height: 0.16rem;
      color: #999;
      font-size: 0.16rem;
      line-height: 0.16rem;
      text-align: center;
    }
    .divImg {
      width: 100%;
      height: 1.5rem;
      background: url("https://img.guoanfamily.com/rentPC/ownerImg/shouyi.png") no-repeat center;
      background-size: cover;
      margin-top: 0.24rem;
      &.divImg1 {
        background: url("https://img.guoanfamily.com/rentPC/ownerImg/baozhi.png") no-repeat center;
        background-size: cover;
      }
      &.divImg2 {
        background: url("https://img.guoanfamily.com/rentPC/ownerImg/shengshi.png") no-repeat center;
        background-size: cover;
      }
    }
    .describe {
      width: 100%;
      height: 0.8rem;
      text-align: left;
      color: #999;
      font-size: 0.16rem;
      margin-top: 0.3rem;
    }
  }
}
.divOuterLine {
  width: 100%;
  height: 1.28rem;
}
.centerTitle {
  width: 100%;
  height: 0.32rem;
  font-size: 0.32rem;
  line-height: 0.32rem;
  color: #000000;
  text-align: center;
}
.outerLine {
  width: 100%;
  height: 0.4rem;
}
.imgContent {
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: row;
  .imgContentLeft {
    flex: 1;
    background: url("https://img.guoanfamily.com/rentPC/ownerImg/imgContentL.png") no-repeat center;
    background-size: cover;
    margin-right: 0.2rem;
  }
  .imgContentRight {
    flex: 2;
    display: flex;
    flex-direction: column;
    .imgContentRightTop {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: row;
      .imgContentRightTopOne {
        flex: 1;
        width: 50%;
        margin-right: 0.2rem;
        background: url("https://img.guoanfamily.com/rentPC/ownerImg/imgContentRightTopOne.png")
          no-repeat center;
        background-size: cover;
      }
      .imgContentRightTopTwo {
        flex: 1;
        width: 50%;
        background: url("https://img.guoanfamily.com/rentPC/ownerImg/imgContentRightTopTwo.png")
          no-repeat center;
        background-size: cover;
      }
    }
    .imgContentRightbottom {
      width: 100%;
      flex: 2;
      margin-top: 0.2rem;
      background: url("https://img.guoanfamily.com/rentPC/ownerImg/imgRightBottom.png") no-repeat
        center;
      background-size: cover;
    }
  }
}
// 房源委托左半部分
.entrust-right {
  width: 5.9rem;
  height: 5.6rem;
  float: left;
  .entrust-right-top {
    height: 2rem;
    background: #e34b3e;
    box-sizing: border-box;
    padding: 0.2rem;
    .rightTop-left {
      float: left;
      p {
        font-size: 0.42rem;
        color: white;
        margin-top: 0.12rem;
      }
    }
    .rightTop-right {
      float: left;
      margin: 0.18rem 0 0 0.5rem;
      p {
        font-size: 0.14rem;
        color: white;
        margin-top: 0.08rem;
      }
    }
  }
  .entrust-right-bottom {
    height: 3.6rem;
    .entrust-right-bottom-item {
      height: 25%;
    }
    .entrust-logo {
      width: 0.4rem;
      height: 0.4rem;
      float: left;
      background: url("https://img.guoanfamily.com/rentPC/rentIndex/entrust1.png") no-repeat
        center;
      background-size: 100%;
      margin-top: 0.25rem;
    }
    .entrust-logo2 {
      background: url(https://img.guoanfamily.com/rentPC/rentIndex/entrust2.png) no-repeat center;
      background-size: 100%;
    }
    .entrust-logo3 {
      background: url(https://img.guoanfamily.com/rentPC/rentIndex/entrust3.png) no-repeat center;
      background-size: 100%;
    }
    .entrust-logo4 {
      background: url(https://img.guoanfamily.com/rentPC/rentIndex/entrust4.png) no-repeat center;
      background-size: 100%;
    }
    .entrust-word {
      float: left;
      margin-top: 0.23rem;
      width: 5.5rem;
      box-sizing: border-box;
      padding: 0 0.1rem;
      .p1 {
        font-size: 0.2rem;
      }
      .p2 {
        font-size: 0.12rem;
        color: #999999;
      }
    }
    .entrust-word {
      float: left;
      margin-top: 0.23rem;
      width: 5.5rem;
      box-sizing: border-box;
      padding: 0 0.1rem;
      .p1 {
        font-size: 0.2rem;
      }
      .p2 {
        font-size: 0.12rem;
        color: #999999;
      }
    }
  }
}
.entrust-info {
  width: 5.8rem;
  height: 5.6rem;
  float: right;
  .InputDiv {
    height: 0.6rem;
    width: 5rem;
    margin-left: 0.3rem;
    font-size: 0.22rem;
    .labesSpan {
      line-height: 0.6rem;
      font-size: 0.18rem;
      width: 0.8rem;
      display: inline-block;
    }
    .inputText {
      padding-left: 0.2rem;
      margin-left: 0.2rem;
      width: 3rem;
      height: 0.4rem;
      font-size: 0.16rem;
      border: 1px solid #ccc;
    }
  }
  .ownerTop {
    height: 0.3rem;
    margin-top: 0.45rem;
    margin-left: 0.15rem;
    line-height: 0.3rem;
    padding-left: 0.2rem;
    font-size: 0.18rem;
    color:#ccc;
  }
  button {
    cursor: pointer;
    width: 1rem;
    height: 0.3rem;
    background: #d6000f;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.16rem;
    border: none;
    color: #fff;
    margin-top: 0.2rem;
  }
}
</style>
<style lang='less'>
  .InputDiv{
    .el-input__inner{
      padding-left: 0.2rem;
      margin-left: 0.1rem;
      width: 3rem;
      height: 0.4rem !important;
      font-size: 0.16rem;
      border: 1px solid #ccc;
      border-radius:0px;
      border-color:#bbb;
    }
    .el-form-item__label{
      &::before{
        content:"*";
        color:red;
        float:left;
      }
      text-align:left;
      font-size:.16rem;
      color:#333;
    }
    .el-select .el-input.is-focus .el-input__inner{
      border-color:#bbb !important;
    }
    .el-select .el-tag{
          margin: 2px 0 2px 20px;
    }
    .el-select-dropdown__empty{
      padding:.1rem;
    }
  }
</style>

