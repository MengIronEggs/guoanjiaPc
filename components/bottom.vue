<template>
    <div class='bottomContent'>
        <div class='content_w'>
            <div class='shopHomeHotLine'>购房热线&nbsp;&nbsp;&nbsp;400-706-1188</div>
            <div class='bottomTopContent'>
                <div class='bottomTop' :key="index" v-for="(item,index) in bottomTopList">{{item}}<span></span></div>
            </div>
            <div class='bottomLine'></div>
            <div class='bottomCneterTop'>
                <div :key="index" v-for="(item,index) in bottomCenterList">{{item}}</div>
            </div>
            <div class='bottomCenterFooter'>
                <div :key="index" v-for="(item,index) in bottomCenterFooter">{{item}}</div>
            </div>
            <div class='bottomLine' style="margin-top:.2rem;"></div>
            <div class='bottomFooter' style="margin-top:.1rem;">Comyright@2013-2018&nbsp;西藏中信国安房地产项目管理有限公司北京分公司</div>
            <div class='bottomFooter'>京ICP备16058357号</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bottomTopList: [
        "网站地图",
        "中信国安",
        "国安城市",
        "国安社区",
        "国安创客"
      ],
      bottomCenterList: ["北京租房", "城市新房", "热门小区", "国安二手房"],
      bottomCenterFooter: [
        "东城租房",
        "西城租房",
        "朝阳租房",
        "海淀租房",
        "丰台租房",
        "石景山租房",
        "通州租房",
        "顺义租房",
        "大兴租房"
      ]
    };
  }
};
</script>

<style lang='less' scoped>
.bottomContent {
  width: 100%;
  background: #222222;
  height: 4rem;
}
.shopHomeHotLine{
      width:25%;
      height: 100%;
      float:right;
      line-height: .8rem;
      height: .8rem;
      color:#f66f51;  
      text-align: right;
      font-size: .16rem;      
  }
.bottomTopContent {
  width: 65%;
  height: 0.8rem;
}
.bottomTop {
  // width:100%;
  display: flex;
  flex-wrap: row;
  color: #fff;
  float: left;
  height: 0.8rem;
  font-size: 0.16rem;
  line-height: 0.8rem;
  width: 20%;
  cursor: pointer;
  span {
    display: inline-block;
    width: 1px;
    height: 25%;
    margin-top: 20%;
    margin-left: 0.4rem;
    margin-right: 0.2rem;
    background: #fff;
  }
}
.bottomTop:nth-child(5) > span {
  background: none;
}
.bottomCneterTop {
  width: 65%;
  height: 0.4rem;
  margin-top: 0.15rem;
  div {
    width: 20%;
    height: 100%;
    line-height: 0.4rem;
    float: left;
    margin-left: 3%;
    text-align: center;
    color: #999999;
    font-size: 0.18rem;
    background: #121212;
    cursor: pointer;
  }
  div:hover {
    background: #444;
    color: #fff;
  }
}
.bottomCenterFooter {
  margin-top: 0.2rem;
  width: 65%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  div {
    cursor: pointer;
    width: 16%;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #999999;
    font-size: 0.16rem;
  }
}
.bottomFooter{
    color:#999999;
    line-height: .3rem;
}
.bottomLine {
  width: 100%;
  height: 1px;
  background: #444444;
}
</style>
