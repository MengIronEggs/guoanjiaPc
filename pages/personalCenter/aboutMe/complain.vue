<template>
    <div class="contract">
        <!-- 头部按钮部分 -->
        <div class="btn_box " v-if="showNum===1||showNum===2">
            <button class="button Bt_garty" :class="{actived:showNum===1}" @click="MakeChouse(1)">
                <span class="icon1">
                </span>
                <span class="texts">
                    投诉列表
                </span>
            </button>
            <button class="button Bt_garty" :class="{actived:showNum===2}" @click="MakeChouse(2)">
                <span class="icon1">
                </span>
                <span class="texts">
                    我要投诉
                </span>
            </button>
        </div>
        <!-- 投诉列表部分 -->
        <div class='complainList' v-show="listOrContent">
            <div class='complainListDiv' :key="index" v-for="(item,index) in complainListData">
                <div class='trapezoid' :class="{'grayTrapezoid': item.orderName =='已结束'}">{{item.orderName}}</div>
                <div class='complainTop'>
                    <div class='complainTopNum'>{{item.index}}</div>
                    <div class='complainTopRight'>
                        <div><span>投诉单号：</span><span style="color:#d6000f;">{{item.id}}</span></div>
                        <div><span>投诉时间：</span><span style="color:#999999;">{{item.createTime}}</span></div>
                    </div>
                </div>
                <div class='complainCenter'>
                    <div class='complainCenterLeft'></div>
                    <div class='complainCenterRight'>{{item.questionDescription}}</div>
                </div>
                <div class='complainBottom'>
                    <div class='complainBottomLeft'></div>
                    <div class='complainBottomRight'>{{item.dealResult}}</div>
                </div>
            </div>
            <div class="pagination">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="4"
                    layout="total,  prev, pager, next, jumper"
                    :total="total">
                </el-pagination>
            </div>
        </div>
        <!-- 投诉部分 -->
        <div class='complainContent' v-show="!listOrContent">
            <div class='ownerTop' style="marign-top:.2rem;">投诉详情</div>
            <div class='InputDiv' style="margin-top:.2rem;width:8.5rem;">
                <textarea  maxlength="200" name="" v-model="textAreaVal" placeholder="请你详细描述投诉对象及理由，保证国安家及时准确处理您的投诉（200个汉字以内）" id="" style="padding-top:.2rem;padding-left:.2rem;background:#fff;width:100%;resize:none;font-size: 0.16rem;border:1px solid #bbb" rows="7"></textarea>
            </div>
            <!-- <div class='ownerTop exclamatory'>


            </div> -->
            <div class='ownerTop iconInput' style="height:.6rem;">
                <span>联系电话</span>
                <span style="display:inline-block;margin-left:.1rem;font-size:.18rem;color:#ccc;">留下您的联系方式，我们会及时与您取得联系</span>
            </div>
            <div style="width:100%;">
            <input class='stateInput' type="text" v-model="phoneNumber" placeholder="请输入您的手机号">

            </div>
            <button class='submit' @click="submitClick">提交</button>
        </div>

    </div>
</template>

<script>
import { objFn } from "~/plugins/axios.js";
export default {
  data() {
    return {
      showNum: 1,
      ActIndex: 0,
      listOrContent: true,
      complainListData: [],
      textAreaVal: "",
      phoneNumber: "",
      total: 0,
      currentPage: 1
    };
  },
  methods: {
    // 翻页
    handleCurrentChange(val) {
      // console.log(val);
      this.currentPage = val;
      this.complainListLoad();
    },
    // 头部按钮点击事件
    MakeChouse(i) {
      this.showNum = i;
      if (i == 1) {
        this.listOrContent = true;
        this.complainListLoad();
      } else {
        this.listOrContent = false;
      }
    },
    // 列表加载
    complainListLoad() {
      let url = "agenthouseCutomer/CComplaintController/getComplaint";
      let post_data = {
        currentPageNo: this.currentPage,
        sourceCode: "0056001",
        pageCount: "4"
      };
      objFn
        .Axios(url, "post", post_data, { interfaceType: "RENT_HOUSE" })
        .then(res => {
          for (let i = 0; i < res.content.length; i++) {
            if (objFn.notEmpty(res.content[i].orderName)) {
              res.content[i].orderName = "受理中";
            }
          }
          this.complainListData = res.content;
          this.total = parseInt(res.totalCount);
        });
    },
    // 提交的点击事件
    submitClick() {
      if (this.phoneNumber.length !== 11) {
        this.$showErrorTip("请输入正确的手机号码");
        return false;
      }
      let url = "agenthouseCutomer/CComplaintController/save";
      let post_data = {
        questionDescription: this.textAreaVal,
        sourceCode: "0056001"
      };
      objFn
        .Axios(url, "post", post_data, { interfaceType: "RENT_HOUSE" })
        .then(res => {
          // console.log(res);
          if (res.code == 0) {
            this.$showMsgTip("提交成功");
            this.textAreaVal = "";
            this.phoneNumber = "";
            this.MakeChouse(1);
          }
        });
    }
  },
  mounted() {
    this.phoneNumber =  localStorage.getItem('phoneNum');
    this.MakeChouse(this.showNum);
  }
};
</script>

<style lang='less' scoped>
.contract {
  width: 10rem;
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
        .texts {
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
  // 列表部分
  .complainList {
    width: 100%;
    margin-top: 0.28rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .complainListDiv {
      // flex: 1;
      width: 47%;
      margin-right: 0.3rem;
      background: url("https://img.guoanfamily.com/rentPC/newHouseImg/shdow.png")
        no-repeat center;
      background-size: 100% 100%;
      position: relative;
      margin-bottom: 0.5rem;
      .complainTop {
        width: 100%;
        height: 0.95rem;
        border-bottom: 1px solid #ccc;
        .complainTopNum {
          width: 0.5rem;
          height: 0.8rem;
          background: #d6000f;
          float: left;
          color: #fff;
          line-height: 1rem;
          text-align: center;
          font-size: 0.28rem;
        }
        .complainTopRight {
          height: 100%;
          float: left;
          margin-left: 0.16rem;
          div {
            height: 50%;
            line-height: 0.45rem;
            span {
              font-size: 0.18rem;
            }
          }
        }
      }
      .complainCenter {
        width: 100%;
        height: 1rem;
        .complainCenterLeft {
          width: 0.85rem;
          height: 100%;
          background: url("https://img.guoanfamily.com/rentPC/rentAboutme/listContent1.png")
            no-repeat center;
          background-size: 55%;
          float: left;
        }
        .complainCenterRight {
          float: left;
          // margin-left: 0.1rem;
          width: 3.7rem;
          height: 100%;
          line-height: 0.25rem;
          padding-top: 0.16rem;
          color: #999999;
          border-bottom: 1px solid #cccccc;
          overflow-y: auto;
          font-size: 0.18rem;
        }
      }
      .complainBottom {
        width: 100%;
        height: 1rem;
        .complainBottomLeft {
          width: 0.85rem;
          height: 100%;
          background: url("https://img.guoanfamily.com/rentPC/rentAboutme/listResult2.png")
            no-repeat center;
          background-size: 55%;
          float: left;
        }
        .complainBottomRight {
          float: left;
          // margin-left: 0.1rem;
          padding-top: 0.16rem;
          width: 3.7rem;
          height: 100%;
          line-height: 0.25rem;
          color: #999999;
          overflow-y: auto;
        }
      }
      .trapezoid {
        width: 1.2rem;
        height: 0.4rem;
        background: url("https://img.guoanfamily.com/rentPC/rentAboutme/redTrapezoid.png")
          no-repeat center;
        background-size: 80%;
        position: absolute;
        top: -0.1rem;
        right: 0.05rem;
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.14rem;
        color: #fff;
      }
      .grayTrapezoid {
        background: url("https://img.guoanfamily.com/rentPC/rentAboutme/grayTrapezoid.png")
          no-repeat center;
        background-size: 80%;
        color: #222222;
      }
    }
    .pagination {
      padding-bottom: 0.5rem;
      margin: 0 auto;
      position: absolute;
      bottom: 0.8rem;
      left: 40%;
    }
  }
  // 投诉部分
  .complainContent {
    width: 100%;
    height: 6rem;
    padding-top: 0.28rem;
    .ownerTop {
      height: 30px;
      // margin-left: 0.1rem;
      line-height: 30px;
      font-size: 0.2rem;
      color: #999;
      &.exclamatory {
        margin-top: 0.45rem;
        color: #d6000f;
        background: url("https://img.guoanfamily.com/rentPC/rentAboutme/exclamatory.png")
          no-repeat left;
        background-size: 3%;
      }
      &.iconInput {
        margin-top: 0.3rem;
        span {
          font-size: 0.2rem;
          color: #999;
        }
        input {
          width: 3.2rem;
          background: none;
          height: 0.55rem;
          padding-left: 0.1rem;
          margin-left: 0.28rem;
          border: 1px solid #bbbb;
        }
        input::-webkit-input-placeholder {
          color: #ccc;
        }
      }
    }
    .stateInput {
      width: 3.2rem;
      background: none;
      height: 0.55rem;
      padding-left: 0.1rem;
      // margin-left: 0.1rem;
      border: 1px solid #bbbb;
      color: #ccc;
    }
    .submit {
      cursor: pointer;
      width: 1.5rem;
      height: 0.5rem;
      color: #fff;
      line-height: 0.5rem;
      font-size: 0.18rem;
      text-align: center;
      border: none;
      background: #d5321c;
      margin-top: 0.4rem;
    }
  }
}
</style>
<style lang='less'>
.complainList {
  padding-bottom: 1.4rem;
  .el-pager li.active {
    background: #d6000f;
    color: #fff;
    border-radius: 0.05rem;
    &:hover {
      color: #fff;
    }
  }
  .el-pagination button:hover {
    color: #d6000f;
  }
  .el-pager li:hover {
    color: #d6000f;
  }
}
</style>
