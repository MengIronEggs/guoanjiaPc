<template>
    <div class='bottomContent'>
        <div class='content_w'>
            <div class='shopHomeHotLine'>服务热线&nbsp;&nbsp;&nbsp;400-900-2225</div>
            <div class='bottomTopContent'>
                <div class='bottomTop' :key="index" v-for="(item,index) in bottomTopList" @click="bottomClick(item.url,index)">{{item.name}}</div>
            </div>
            <div class='bottomLine'></div>
            <div class='bottomCneterTop'>
                <div :key="index" v-for="(item,index) in bottomCenterList" @click="bottomCenterListClick(item.url)">{{item.name}}</div>
            </div>
            <div class='bottomCenterFooter'>
                <div class="footer3" :key="index" v-for="(item,index) in bottomCenterFooter" @click="bottomCenterFooterClick(item)">{{item+'租房'}}</div>
            </div>
            <div class='bottomLine' style="margin-top:.2rem;"></div>
            <div class='bottomFooter' style="margin-top:.1rem;">Comyright@2013-2018&nbsp;西藏中信国安房地产项目管理有限公司北京分公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;京ICP备16058357号</div>
            
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bottomTopList: [
        {name:"网站地图",url:"/siteMap/siteMap/"},
        {name:"中信集团",url:"https://www.group.citic/#firstPage"},
        {name:"中信国安",url:"http://www.guoan.citic.com/"},
        {name:"国安城市",url:"http://www.gakj.citic.com/"},
        {name:"国安社区",url:"https://www.guoanshequ.com/"},
        {name:"国安创客",url:"https://www.gack.citic/#/"}
      ],
      bottomCenterList: [
      {name:"北京租房",url:"/rent/rentIndex"},
      {name:"城市新房",url:"/newHouse/newHouseIndex"},
      {name:"热门小区",url:"/rent/rentList/"}],
      bottomCenterFooter: [
        "东城",
        "西城",
        "朝阳",
        "海淀",
        "丰台",
        "石景山",
        "通州",
        "顺义",
        "大兴"
      ]
    };
  },
  methods:{
  	bottomCenterFooterClick(item){
  		this.$router.push({path:'/rent/rentList/',query:{searWords:item}})
  	},
  	bottomCenterListClick(item){
  		this.$router.push({path:item})
  	},
    bottomClick(item,index){
    	if(index == 0){
    		this.$router.push({path:item})
    	}else{
    		 window.open(item);
    	}
     
    }
  }
};
</script>

<style lang='less' scoped>
.bottomContent {
  width: 100%;
  background: #222222;
  padding-bottom:0.1rem ;
}
.shopHomeHotLine{
      width:25%;
      float:right;
      line-height: .6rem;
      height: .6rem;
      color:#f66f51;  
      text-align: right;
      font-size: .16rem;      
  }
.bottomTopContent {
  width: 65%;
  height: 0.6rem;
}
.bottomTop {
  flex-wrap: row;
  color: #fff;
  float: left;
  height: 0.2rem;
  font-size: 0.16rem;
  line-height: 0.2rem;
  width: 12%;
  cursor: pointer;
  box-sizing: border-box;
  border-right: 1px solid white;
  margin-right: 0.2rem;
  margin-top: 0.2rem;
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
.bottomTop:hover{
	color: #E34B3E;
}
.bottomTop:nth-child(6) > span {
  background: none;
}
.bottomCneterTop {
  width: 55%;
  height: 0.3rem;
  margin-top: 0.15rem;
  div {
    width: 20%;
    height: 100%;
    line-height: 0.3rem;
    float: left;
    margin-right: 6%;
    text-align: center;
    color: #999999;
    font-size: 0.16rem;
    background: #121212;
    cursor: pointer;
  }
  div:hover {
    background: #444;
    color: #fff;
  }
}
.bottomCenterFooter {
  margin-top: 0.1rem;
  width: 65%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  div {
    cursor: pointer;
    width: 16%;
    height: 0.3rem;
    line-height: 0.3rem;
    color: #999999;
    font-size: 0.16rem;
  }
  .footer3:hover{
  	color: #E34B3E;
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
