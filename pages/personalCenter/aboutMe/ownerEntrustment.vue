<template>
    <div class="page">
        <div class="btn_box " >
            <button class="button actived">
                <span class="icon1">
                </span>
                <span>
                    业主委托
                </span>
            </button>
       </div>
       <div class='ownerTop'>留下您的联系方式与房屋信息，我们会及时和您取得联系</div>
       <div class='InputDiv'>
           <label class='labesSpan'><span style="display:inline-block;color:red;">*</span>手机号</label>
           <input class='inputText' type="text" v-model="phoneNumber" placeholder="请输入您的手机号" />
       </div>
       <div class='InputDiv' style="margin-top:.1rem">
           <label class='labesSpan'><span style="display:inline-block;color:red;">*</span>姓名</label>
           <input class='inputText' type="text" v-model="name" placeholder="请输入您的姓名" />
       </div>
       <div class='ownerTop buildInfo' style="margin-top:.2rem;">房屋信息</div>
       <div class='InputDiv' style="margin-top:.1rem">
           <label class='labesSpan'>小区名称</label>
           <input class='inputText' type="text" v-model="buildName" placeholder="请输入小区名称" />
       </div>
       <div class='ownerTop notInfo' style="margin-top:.2rem;">备注</div>
       <div class='InputDiv' style="margin-top:.1rem;width:6.5rem;">
           <textarea name="" v-model="textAreaVal" placeholder="请输入其他情况，如果没有匹配到您的小区，请在此输入信息" id="" style="width:100%;resize:none;font-size: 0.2rem;" rows="7"></textarea>
           <button @click="submitInfoClick">提交</button>
       </div>
       <div style="width:100%;height:3rem;"></div>
    </div>

</template>

<script>
import { objFn } from "~/plugins/axios.js";
export default {
  data() {
    return {
      phoneNumber: "",
      name: "",
      buildName: "",
      textAreaVal: ""
    };
  },
  methods: {
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
      let post_data = {
        phone: this.phoneNumber, //电,//电话
        userName: this.name, //姓名
        communityId: this.buildName, //小区id
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
  }
};
</script>

<style lang='less' scoped>
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
    &.actived {
      border: 2px solid #d6000f;
      color: #d6000f;
      background-color: #fff;
    }
    .icon1 {
      float: left;
      height: 0.08rem;
      width: 0.08rem;
      margin-left: 0.2rem;
      margin-top: 0.2rem;
      background: #d6000f;
      border-radius: 50%;
    }
  }
}
.ownerTop {
  height: .3rem;
  // width:5rem;
  margin-top: 0.55rem;
  margin-left: 0.1rem;
  line-height: .3rem;
  background: url("https://img.guoanfamily.com/rentPC/rentAboutme/man.png") no-repeat
    left;
  background-size: 3%;
  padding-left: 0.6rem;
  font-size: 0.22rem;
  color: #999;
  &.buildInfo {
    background: url("https://img.guoanfamily.com/rentPC/rentAboutme/manloc.png")
      no-repeat left;
    background-size: 3%;
  }
  &.notInfo {
    background: url("https://img.guoanfamily.com/rentPC/rentAboutme/pencli.png")
      no-repeat left;
    background-size: 3%;
  }
}
.InputDiv {
  height: 0.6rem;
  width: 5rem;
  // background: red;
  margin-top: 0.3rem;
  margin-left: 0.7rem;
  font-size: 0.22rem;
  .labesSpan {
    line-height: 0.6rem;
    font-size: 0.22rem;
    width: 1rem;
    display: inline-block;
  }
  .inputText {
    padding-left: 0.2rem;
    margin-left: 0.2rem;
    width: 3rem;
    height: 0.5rem;
    font-size: 0.2rem;
    border: 1px solid #ccc;
  }
  button {
    cursor: pointer;
    width: 1.5rem;
    height: 0.5rem;
    background: #d6000f;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.22rem;
    border: none;
    color: #fff;
    margin-top: 0.2rem;
  }
}
</style>
