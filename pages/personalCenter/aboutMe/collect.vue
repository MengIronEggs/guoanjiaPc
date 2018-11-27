<template>
   <div class="contract">
       <div class="btn_box " >
            <button class="button actived">
                <span class="icon1">
                </span>
                <span style="display:inline-block;font-size:.18rem;">
                    我的收藏
                </span>
            </button>
       </div>
       <div class='rentCollectList'>
           <div class='rentCollent' :key="index" v-for="(item,index) in collectList" @click="rentCollentListClick(item)">
               <div class='rentImg'><img style="width:100%;height:100%;" v-lazy="`https://img.guoanfamily.com/${item.imageName}`" alt="" /></div>
               <div class='rentInfo'>
                 <div>{{item.collectTitle}}&nbsp;{{item.buildFloor}}</div>
                 <div><span :key="index1" v-for="(items,index1) in item.advantageTagsArr">{{items}}</span></div>
                 <div>{{item.collectContent}}</div>
                 <div>{{item.collectResume}}&nbsp;<span>元/月</span><div @click.stop="cancelClick(item.collectUrl)">取消收藏</div></div>
               </div>
           </div>
           <div class="nodata" v-show="collectList.length<=0">
                <template>
                  <noData></noData>
                </template>
            </div>
       </div>
   </div>
</template>

<script>
import { objFn } from "~/plugins/axios.js";
import noData from "~/components/personal/noData.vue"
export default {
  components: {
        // payStep
        noData
    },
  data() {
    return {
      collectList: []
    };
  },
  methods: {
    // 收藏列表回显方法
    collectListFn(type) {
      let url = `user/CollectController/getAllByUid?size=100&type=${type}`;
      objFn
        .Axios(url, "get", {}, { interfaceType: "PERSONAL_CENTER" })
        .then(res => {
          if (res.code == 200) {
            for (let i = 0; i < res.data.collectList.length; i++) {
              if (!objFn.notEmpty(res.data.collectList[i].advantageTagsArr)) {
                res.data.collectList[i].advantageTagsArr = res.data.collectList[i].advantageTagsArr.split(",");
                if(res.data.collectList[i].advantageTagsArr.length > 3){
                  res.data.collectList[i].advantageTagsArr =  res.data.collectList[i].advantageTagsArr.slice(0,3);
                }
              }
            }
            this.collectList = res.data.collectList;
          }
        });
    },
    // 取消收藏的点击事件
    cancelClick(item) {
      let urll = item;
      let post_data = {
        collectUrl: item
      };
      let url = "user/CollectController/delCollectInfo";
      objFn
        .Axios(url, "post", post_data, { interfaceType: "PERSONAL_CENTER" })
        .then(res => {
          if (res.code == 200) {
          	let collectList=objFn.getStorage("collectList");
          	let collectListArr = collectList.split(",");
          	for(let i=0;i<collectListArr.length;i++){
            	if(collectListArr[i] == urll){
                  	collectListArr.splice(i,1);
                  	collectList = collectListArr.join(",");
                  	objFn.setStorage("collectList",collectList);
           	 	}
          	}

            this.$showMsgTip("取消收藏成功");
            this.collectListFn(3);
          }
        });
    },
    // 租房收藏列表的点击事件
    rentCollentListClick(item) {
      let productType = item.collectUrl.split("=")[2];
      var arrId = item.collectUrl.split("=")[1].split("&")[0];
      this.$router.push({
        path: "/rent/housedetail",
        query: { id: arrId, productType: productType }
      });
    }
  },
  mounted() {
    this.collectListFn(3);
  },
 
};
</script>

<style scoped lang="less">
.contract{
  width:10rem;
}
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
.rentCollectList {
  .nodata{
        width: 100%;
        height: 7.5rem;
    }
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom:1.4rem;
  .rentCollent {
    cursor: pointer;
    margin-top: 0.38rem;
    width: 3rem;
    height: 4rem;
    margin-right: 0.2rem;
    // box-shadow:0 0 10px #DDDDDD;
    .rentImg {
      width: 3rem;
      height: 2rem;
    }
    .rentInfo {
      width: 3rem;
      height: 2rem;
      padding-top: 0.1rem;
      display: flex;
      flex-direction: column;
      div {
        flex: 1;
      }
      div:nth-child(1) {
        font-size: 0.2rem;
      }
      div:nth-child(2) {
        span {
          display: inline-block;
          background: #ccc;
          padding: 2px 6px 2px 5px;
          font-size: 0.12rem;
          line-height: 0.3rem;
          color: #fff;
          margin-right: 0.05rem;
        }
      }
      div:nth-child(3) {
        background: url("https://img.guoanfamily.com/rentPC/newHouseImg/map.png") no-repeat left;
        background-size: 5%;
        background-position: 2%;
        padding-left: 0.3rem;
        line-height: 0.43rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #999;
        font-size: 0.16rem;
      }
      div:nth-child(4) {
        flex: 2;
        font-size: 0.25rem;
        line-height: 0.6rem;
        color: #000;
        position: relative;
        span {
          display: inline-block;
          font-size: 0.25rem;
          line-height: 0.6rem;
          color: #000;
        }
        div {
          cursor: pointer;
          position: absolute;
          right: 0.1rem;
          bottom: 0.35rem;
          width: 1rem;
          height: 0.3rem;
          background: #d6000f;
          text-align: center;
          color: #fff;
          line-height: 0.3rem;
          font-size: 0.16rem;
        }
      }
    }
  }
}
</style>
