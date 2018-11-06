<template>
    <div class="page">
        <div class="btn_box " >
            <button class="button actived">
                <span class="icon1">
                </span>
                <span style="dispaly:inline-block;font-size:.18rem;">
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
       <div class='ownerTop notInfo' style="margin-top:.15rem;">备注</div>
       <div class='InputDiv' style="margin-top:.2rem;width:6.5rem;height:auto;">
           <textarea name="" v-model="textAreaVal" placeholder="请输入其他情况，如果没有匹配到您的小区，请在此输入信息" id="" style="width:100%;resize:none;font-size: 0.16rem;padding-left:.2rem;padding-top:.2rem;border-left:1px solid #CECECE;background:#F5F5F5;" rows="7"></textarea>
       </div>
       <button class='submit' @click="submitInfoClick">提交</button>
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
      textAreaVal: "",
      isShowFrom: false,
      options4: []
    };
  },
  methods: {
    // 查询小区名称
    remoteMethod(item) {
      // console.log(item);
      // console.log(item,this.buildName)
      let url = "agenthouseCutomer/CommunityController/findCommunityList";
      let post_data = {
        communityName: item
      };
      // OWNER_URL
      objFn
        .Axios(url, "post", post_data, { interfaceType: "OWNER_URL" })
        .then(res => {
          // console.log(res);
          if (res.code == 0) {
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
      if (objFn.notEmpty(this.name)) {
        this.$showErrorTip("请输入姓名");
        return false;
      }
      let houseId = "";
      for (let i = 0; i < this.options4.length; i++) {
        if (this.buildName == this.options4[i].name) {
          houseId = this.options4[i].id;
        }
      }
      let post_data = {
        phone: this.phoneNumber, //电,//电话
        userName: this.name, //姓名
        communityId: houseId, //小区id
        remark: this.textAreaVal //留,//留言
      };
      let url = "agenthouseCutomer/CEntrusController/saveCEntrus";
      objFn
        .Axios(url, "post", post_data, { interfaceType: "RENT_HOUSE" })
        .then(res => {
          if (res.code === 0) {
            this.$showMsgTip("提交成功");
          }
        });
    }
  },
  mounted() {
    this.isShowFrom = true;
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
  height: 0.3rem;
  // width:5rem;
  margin-top: 0.35rem;
  margin-left: 0.1rem;
  line-height: 0.3rem;
  // background: url("https://img.guoanfamily.com/rentPC/rentAboutme/man1.png")
  //   no-repeat left;
  // background-size: 2.5%;
  // padding-left: 0.6rem;
  font-size: 0.18rem;
  color: #999;
  &.buildInfo {
    // background: url("https://img.guoanfamily.com/rentPC/rentAboutme/manloc1.png")
    //   no-repeat left;
    // background-size: 2.5% 100%;
  }
  &.notInfo {
    // background: url("https://img.guoanfamily.com/rentPC/rentAboutme/pencil.png")
    //   no-repeat left;
    // background-size: 3%;
  }
}
.InputDiv {
  height: 0.6rem;
  width: 5rem;
  // background: red;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  font-size: 0.22rem;
  .labesSpan {
    line-height: 0.6rem;
    font-size: 0.16rem;
    width: 1rem;
    display: inline-block;
  }
  .inputText {
    cursor: pointer;
    padding-left: 0.2rem;
    // margin-left: rem;
    width: 3rem;
    height: 0.4rem;
    border: 1px solid #ccc;
  }
  
}
.submit {
    cursor: pointer;
    width: 2rem;
    height: 0.35rem;
    background: #d6000f;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.16rem;
    border: none;
    color: #fff;
    margin-top: 0.4rem;
    margin-left: 0.2rem;
  }
</style>
<style lang='less'>
.InputDiv {
  .el-input__inner {
    padding-left: 0.2rem;
    margin-left: 0.1rem;
    width: 3rem;
    height: 0.4rem !important;
    font-size: 0.16rem;
    border: 1px solid #ccc;
    border-radius: 0px;
    border-color: #bbb;
  }
  .el-form-item__label {
    &::before {
      content: "*";
      color: red;
      float: left;
    }
    text-align: left;
    font-size: 0.16rem;
    color: #333;
  }
  .el-select .el-input.is-focus .el-input__inner {
    border-color: #bbb !important;
  }
  .el-select .el-tag {
    margin: 2px 0 2px 20px;
  }
  .el-select-dropdown__empty {
    padding: 0.1rem;
  }
}
</style>

