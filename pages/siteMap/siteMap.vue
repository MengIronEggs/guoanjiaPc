<style lang='less' scoped>

.map {
    position:relative;
    z-index: 10;
    width: 1000px;
    height: auto;
    margin: 0 auto;
    margin-top:71px;
    max-width: 1000px;
    min-width: 1000px;
    margin-bottom: 30px;
    background: rgba(255, 255, 255, 0.85);
    a {
      text-decoration: none;
      color: #232323; 
    }
}
.mapList div span a {
    width: auto;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin: 0 10px;
    word-break: keep-all;
    font-size: 12px;
    font-weight: 600;
}
.mapList div{
	overflow: hidden;
}
.mapTop {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 60px;
    font-weight: 600;
}
.mapTopA1 {
    margin-left: 20px;
}
.mapBottom {
    width: 100%;
    height: auto;
    margin-top: 10px;
}
.mapBottomTitle {
    width: 89%;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    padding-left: 22px;
    border-bottom:  3px dashed #CCCCCC;
    font-size: 15px;
    margin-bottom: 3px;
    font-weight: 600;
}
.bodyTop {
  width: 100%;
  height: 100%;
  margin-top: -20px;
}
.mapList {
    width: 100%;
    height: auto;
}
.mapList div {
    width: 90%;
    height: auto;
    margin: 0 auto;
    padding: 14px 0;
    margin-bottom: 10px;
}
.mapList div p {
    font-size: 14px;
    height: 25px;
    line-height: 25px;
    margin-bottom: 15px;
    background: #F1F0F1;
    padding-left: 10px;
    position: relative;
    font-weight: 600;
}
.mapList div p:after {
    content: '';
    position: absolute;
    height: 15px;
    width: 3px;
    background: #EB6101;
    left: 2px;
    top: 5px;
}
.mapList div span {
    height: 20px;
    line-height: 20px;
    margin-top: 5px;
    display: inline-block;
}
</style>
<template>
    <div class="bodyTop">
    	<div style="width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: url('https://media.guoanfamily.com/sitemap.jpg') no-repeat center;background-size:cover ;"></div>
        <!--<img style="width:98.8%;position:fixed;z-index:1;" src="https://media.guoanfamily.com/sitemap.jpg" alt="">-->
        <div style="width:100%;height:auto;position:absolute;left:0;top:0;z-index:1000">
             <headeNav style="z-index:100" :NavActived="2"></headeNav>
        </div>
        <div class="map">
          <div class="mapTop">
              <a style="margin:0;" class="mapTopA1" href="">首页</a>
              <span>></span>
              <a href="">网站地图</a>
          </div>
        <div class="mapBottom">
            <p class="mapBottomTitle">网站地图</p>

          <div class="mapList">
                        <div>
                            <p>国安家业务</p>
                            <span><a href="https://www.guoanfamily.com/?initialSlide=1">国安家新房</a></span>
                            
                            <span>
                                <a href="https://www.guoanfamily.com/rent/rentIndex">国安家租房</a>
                            </span>
                            <span>
                                <a href="https://www.guoanfamily.com/exhibitionCenter/exhhibition">国安家展示中心</a>
                            </span>
                        </div>
                        <div>
                            <p>找房专区</p>
                            <span>
                                <a href="https://www.guoanfamily.com/rent/nuxtMapSearchHouse/">地图找房</a>
                            </span>
                            <span>
                                <a href="https://www.guoanfamily.com/rent/nuxtMapSearchHouse/?subway=subway">地铁找房</a>
                            </span>
                            <span>
                                <a href="https://www.guoanfamily.com/rent/rentList/">合租</a>
                            </span>
                            <span>
                                <a href="https://www.guoanfamily.com/rent/rentList/">整租</a>
                            </span>
                            <span>
                                <a href="https://www.guoanfamily.com/rent/rentList/">国安Home</a>
                            </span>
                        </div>
                        <div>
                            <p>关于我们</p>
                            <span>
                                <a href="https://www.guoanfamily.com/aboutus/aboutus">关于我们</a>
                            </span>
                            <span>
                                <a href="https://www.guoanfamily.com/aboutus/aboutus?index=1">公司活动</a>
                            </span>
                            <span>
                                <a href="https://www.guoanfamily.com/aboutus/aboutus?index=2">联系我们</a>
                            </span>
                            <span>
                                <a href="https://www.guoanfamily.com/aboutus/aboutus?index=3">国安家租房服务</a>
                            </span>
                            <span>
                                <a href="https://www.guoanfamily.com/aboutus/aboutus?index=4">隐私保护</a>
                            </span>
                        </div>
                        <div>
                            <p>东城租房</p>
                            <span>
                                <a style="display: block;float: left;cursor: pointer;" @click="searchhouse(item)" v-for="item in dongchengList">{{item}}</a>
                            </span>

                            
                        </div>
                        <div>
                            <p>西城租房</p>
                            <span>
                                <a style="display: block;float: left;cursor: pointer;" @click="searchhouse(item)" v-for="item in xichengList">{{item}}</a>
                            </span>
                        </div>
                        <div>
                            <p>朝阳</p>
                          	<span>
                                <a style="display: block;float: left;cursor: pointer;" @click="searchhouse(item)" v-for="item in chaoyangList">{{item}}</a>
                            </span>
                        </div>
                        <div>
                            <p>丰台租房</p>
                            <span>
                                <a style="display: block;float: left;cursor: pointer;" @click="searchhouse(item)" v-for="item in fengtaiList">{{item}}</a>
                            </span>
                        </div>
                        <div>
                            <p>石景山租房</p>
                            <span>
                                <a style="display: block;float: left;cursor: pointer;" @click="searchhouse(item.name)" v-for="item in shijingshanList">{{item.name}}</a>
                            </span>

                           
                        </div>
                        <div>
                            <p>海淀租房</p>
                            <span>
                                <a style="display: block;float: left;cursor: pointer;" @click="searchhouse(item.name)" v-for="item in haidianList">{{item.name}}</a>
                            </span>
                        </div>
                        <div>
                            <p>通州租房</p>
                            <span>
                                <a style="display: block;float: left;cursor: pointer;" @click="searchhouse(item.name)" v-for="item in tongzhouList">{{item.name}}</a>
                            </span>
                        </div>
                        <div>
                            <p>顺义租房</p>
                            <span>
                                <a style="display: block;float: left;cursor: pointer;" @click="searchhouse(item)" v-for="item in shunyiList">{{item}}</a>
                            </span>
                        </div>
                        <div>
                            <p>大兴租房</p>
                            <span>
                                <a style="display: block;float: left;cursor: pointer;" @click="searchhouse(item)" v-for="item in daxingList">{{item}}</a>
                            </span>
                        </div>
                    </div>

        
        
        
        
          </div>
        </div>
        <bottom style="z-index:10000;position:relative;"></bottom>
    </div>
</template>
<script>
import headeNav from '~/components/headerNav.vue'
import bottom from '~/components/bottom.vue'
export default {
  data() {
    return {
      dongchengList:['前门 ','天坛', '东花市' ,'广渠门内' ,'雍和宫' ,'磁器口', '永定门', '新世界', '灯市口' ,'王府井', '交道口' ,'光明楼' ,'东城门', '东直门' ,'东单', '东四十条', '北新桥', '龙潭湖', '和平里' ,'金宝街' ,'朝阳门内', '安定门', '东四'],
      xichengList:['木樨地', '阜成门', '六铺炕', '西城门', '先农坛' ,'新街口', '小马厂', '月坛', '地安门', '右安门内' ,'白纸坊' ,'西便门' ,'白云路' ,'虎坊桥' ,'和平门' ,'礼士路', '展览路' ,'德胜门' ,'天桥' ,'西直门', '什刹海', '鼓楼大街', '陶然亭' ,'大观园' ,'西单' ,'马连道', '大栅栏' ,'官园', '天宁寺' ,'积水潭' ,'牛街', '复兴门', '广安门' ,'西四', '长椿街', '金融街' ,'车公庄', '三里河'],
      chaoyangList:['和平里' ,'健翔桥', '左家庄' ,'平房', '六里屯' ,'来广营', '太阳宫', '东四十条', '东坝', '西坝', '京广', '石佛营', '北苑', '劲松', '四惠', '朝阳公园', '潘家园' ,'华威' ,'建国门', '柳芳', '四惠东', '北沙滩', '东大桥', '西坝河', '青年路', '花家地', '朝阳门', '麦子店', '大山子', '北工大', '金台路', '国展', '安贞', '燕莎', '亚运村', '百子湾', '常营', '定福庄', '延静里', '豆各庄', '广渠门', '望京', '十八里店', '十里河', '酒仙桥', '十里堡', '姚家园', '欢乐谷', '团结湖', '常营' ,'垡头' ,'三元桥', '朝青' ,'管庄', '三里屯' ,'大望路' ,'高碑店', '东风苑', '双桥', '常营' ,'国贸' ,'东八里庄', '亚运村', '双井', 'CBD', '红庙', '甘露园', '惠新西街', '立水桥', '芍药居', '工体', '奥林匹克公园', '安慧桥', '红庙', '传媒大学', '黄渠', '西客站', '双井', '望京'],
      fengtaiList:['科丰桥', '和义', '京石高速', '东高地', '右安门', '大红门', '菜户营', '赵公口', '西局' ,'科技园区' ,'玉泉营', '左安门' ,'成寿寺', '丽泽桥' ,'长辛店', '马家堡', '方庄', '木樨园', '西罗园', '宋家庄', '草桥', '岳各庄', '青塔', '看丹桥', '西客站' ,'洋桥', '卢沟桥', '北大地', '蒲黄榆', '云岗', '丰台体育馆' ,'花乡' ,'角门', '刘家窑', '新发地', '六里桥'],
      shijingshanList:[
			{id: "2962e107-9296-4255-9d29-35085b087ae3", name: "老山"},
			
			{id: "29bf805a-801e-419d-85b6-047d94880604", name: "金顶街"},
			
			{id: "2acecbed-9981-4b28-adaa-1730bfcff08e", name: "八角"},
			
			{id: "41a68599-1967-40e0-8855-192f3e4c2664", name: "鲁谷"},
			
			{id: "5b634ae0-885c-45d9-9234-f6b52be947ac", name: "八大处"},
			
			{id: "7115c3d1-7e93-4cad-bded-87d0c3f3387a", name: "古城"},
			
			{id: "75eb5561-5001-434c-97fe-73c1de5da81c", name: "模式口"},
			
			{id: "adb60e3b-6fd6-446a-8215-3488a370c016", name: "杨庄"},
			
			{id: "b1daae41-398b-4020-9a3c-947a8fa3823e", name: "老古城"},
			
			{id: "c5c7b239-99ea-4151-9e6d-7e5729b42bcf", name: "苹果园"},
			
			{id: "cc91e5bb-a4de-4db4-bd66-485bc41d098d", name: "永乐"},
			
			{id: "efcfb8cc-54bd-4959-97ff-c4307cc3c56c", name: "高井"},
			
			{id: "f28c1629-1852-44fe-b8eb-a78c63b473e0", name: "石景山"},
			
			{id: "f7d070d7-34c0-44d4-8cf7-6f48dc4353c2", name: "八宝山"}],
      haidianList:[{"id":"00d00dc1-2cb1-4e87-9ef7-49cccd808a26","name":"玉泉路"},{"id":"02fc3a24-03a0-4a8e-84c6-ae1ae029425f","name":"北京大学"},{"id":"0634fd20-4c1d-4ae1-ab9d-aa540024e6d9","name":"圆明园"},{"id":"086c1cef-da04-4000-aeb9-7f60287f149f","name":"马甸"},{"id":"0fdac313-faa4-4fa6-a60e-1333373c7b5e","name":"牡丹园"},{"id":"1446c3cc-593c-49f0-bf98-b1b07c0e927a","name":"清华园"},{"id":"197e1d9d-ca8d-4131-9422-1bed02a27a6b","name":"苏州桥"},{"id":"19a68b04-42b3-441e-87e8-6e4f82f3ebf0","name":"西直门外"},{"id":"24accbd4-18e7-4345-b06d-d955ddc2b212","name":"万柳"},{"id":"39960351-cdb4-4835-81e2-7f818933d77f","name":"公主坟"},{"id":"3b818430-fe48-45e1-a0a4-93f6b7e005b0","name":"马连洼"},{"id":"3bbe540b-1d25-4da9-9701-b9b7b83c9605","name":"西二旗"},{"id":"3c00d60f-1358-4a9d-b7d6-45d9bba1b68c","name":"颐和园"},{"id":"3d7a97e0-9aed-46c6-9818-b1536952cd1d","name":"双榆树"},{"id":"3f4b3c24-1bdb-482c-8c95-e53b58e44e15","name":"上地"},{"id":"4181ef29-e8dd-4d73-ba8c-f8c8ce0e185e","name":"西三旗"},{"id":"41a46ba0-8a92-40e0-a552-b96246927822","name":"定慧寺"},{"id":"4347bad4-3884-4895-99b1-95c60e25fc1b","name":"北安河"},{"id":"46566dc5-b14b-4a3c-9930-c2d67eb8a3eb","name":"农大"},{"id":"4a4ab502-0ec9-42f7-a291-021248e02ef9","name":"四季青"},{"id":"4aa1ed2f-4da6-4938-bfce-cd09e5c480ab","name":"田村"},{"id":"4c6fedf4-6b9a-42d3-b6b0-b3285f8311a6","name":"车道沟"},{"id":"5356af5e-0f29-47e9-99ee-e876e5a891ff","name":"五棵松"},{"id":"57ebb2ff-7fd5-4f46-9edb-8912b88d4c0e","name":"魏公村"},{"id":"614f7012-8f8c-4248-82e3-8845869e1e55","name":"花园桥"},{"id":"6c240ae5-1b86-4c43-8f5f-982849d32230","name":"西山"},{"id":"6c5a490d-8965-4c1b-a97f-ca75f0ae0005","name":"军博"},{"id":"6d89e120-88ed-409c-9667-d03c85c43b46","name":"万寿寺"},{"id":"74cbbdad-2220-4c0e-b8b6-19debb8c3c97","name":"厂洼"},{"id":"7bc45f40-b5f9-4a3a-b559-19613462f4f0","name":"西二旗"},{"id":"7f467ff6-4889-421c-8100-aab34e4ddff9","name":"中关村"},{"id":"824998de-13c8-4d29-851d-9e7a25856483","name":"八里庄"},{"id":"86e228e5-e7d5-42be-8490-ba7ec43970ca","name":"五道口"},{"id":"873acc89-d557-4c8e-8c17-804411e91cd8","name":"二里庄"},{"id":"8a3cc4bb-a8da-437f-9fe8-3b9fee2fd9b7","name":"皂君庙"},{"id":"9807032b-066b-4805-be30-9dd5570095b3","name":"上地"},{"id":"9c3d56a2-63e8-4df0-b7eb-1ba7306335d0","name":"知春路"},{"id":"a5a2e262-40bf-43ff-8621-e1ee6f19932f","name":"田村"},{"id":"a9d850ca-f7e9-441c-825c-54ca2472effb","name":"大钟寺"},{"id":"aa2791ed-0f41-4f74-b801-30e8a1e46f54","name":"清河"},{"id":"bcd404dc-f256-487c-96df-b77a8ec214e8","name":"万泉河"},{"id":"bde80645-5bdb-403d-b2fc-48a362d4a737","name":"蓟门桥"},{"id":"bfa267ae-eb37-456d-be51-0a0d3b3ce884","name":"永定路"},{"id":"c0da227d-6da5-4e3b-bd05-da546187a71b","name":"西北旺"},{"id":"c20a30be-425b-433f-9f2a-b5cee8f03adb","name":"学院路"},{"id":"cf3a96f4-4cec-4ce7-8471-5aba5012dd1c","name":"北京大学"},{"id":"d378be85-93f1-4a48-abe0-00d25dcd2ba4","name":"甘家口"},{"id":"d3acb138-9611-4d9c-9efe-ec05a16b7781","name":"增光路"},{"id":"d5bad763-d748-4e64-93e6-b02a8bf51c84","name":"世纪城"},{"id":"da409363-0baa-4b2c-ae56-8923d978d15f","name":"花园桥"},{"id":"e34db1cb-247a-48a2-b319-c8ee79f7b57d","name":"航天桥"},{"id":"e8c93276-0ac1-4278-a5a5-31ca2b2bc814","name":"香山"},{"id":"f1f6dacf-cd30-4709-9023-8ae8c1192151","name":"紫竹桥"},{"id":"f535b1b3-4d61-4f35-9480-388149055936","name":"小西天"},{"id":"fb4dda1e-21c5-4320-8e90-01f5ebc83e29","name":"北太平庄"}],
      tongzhouList:[{"id":"0306c149-f9d0-4f4b-9ad1-25dac22432f8","name":"玉桥"},{"id":"395c4628-5cce-4de5-adad-72adbe781898","name":"西上园"},{"id":"42e94e77-b32c-4bed-8600-3c87c91ad495","name":"潞苑南大街"},{"id":"4576af32-b5f0-4fcf-abb0-d6423ec6154e","name":"马驹桥"},{"id":"4ff19e16-6576-46d4-bc6b-7feb374c43e7","name":"焦王庄"},{"id":"505934ab-bda9-40ce-a340-72130529fece","name":"西马庄"},{"id":"529aea51-f9c8-4c11-bc3f-1c054643d6f5","name":"石门"},{"id":"5d66162c-1fec-41e1-9547-a8b47e8a3f8b","name":"中仓"},{"id":"62149c07-a15d-4331-a655-5f376b2cfe9c","name":"果园"},{"id":"71af1451-3f71-48e6-aceb-539fe798e624","name":"梨园南街"},{"id":"75f72cd5-ab9d-436e-91f5-87dd02b8ec6e","name":"永顺"},{"id":"7917b856-99fb-46e0-891b-1192bfed9b84","name":"九棵树"},{"id":"7d8eb2eb-a14b-4870-a780-bb2f4fce146d","name":"乔庄"},{"id":"85788daf-44f9-41e1-8af4-1a14e4aa9742","name":"八里桥市场"},{"id":"8a93e7ef-8130-498b-949d-0e1c76246ebb","name":"土桥"},{"id":"a0144518-c99b-44f4-931b-c1d64dab276e","name":"富丽惠然美居"},{"id":"af30036b-bafb-4732-90b6-119c4ada699c","name":"新华大街"},{"id":"b0c8f7a1-4ba8-4db7-b426-7a813f41b765","name":"次渠"},{"id":"b7a9a263-72f8-4487-96f1-c64a4c6f3264","name":"通州"},{"id":"cc84e2f4-057d-458e-a32f-572ea7b2b3bf","name":"梨园"},{"id":"d0ef499c-9712-45be-abdd-b64276ac38a3","name":"北关"},{"id":"dc46f0e3-f581-436f-854d-c5b4249a5cec","name":"东关"},{"id":"ec265eaa-896b-4a74-a54d-1abeeca70f41","name":"武夷花园"},{"id":"eca52f80-cd63-4824-bf4c-04d977efcc48","name":"通州北苑"},{"id":"f1cdc208-2a75-4791-b3a4-11cda60258c9","name":"北运河西"},{"id":"fe749edb-7b49-4e79-aaaf-0625276263a3","name":"通州北关"},{"id":"ffd02921-7d6e-4239-aa90-cb4d2ee11c54","name":"运河大街"}],
      shunyiList:['马坡', '天竺' ,'后沙峪' ,'花梨坎', '李桥', '石门', '顺义城' ,'杨镇', '机场南楼'],
      daxingList:['旧宫西', '黄村北', '西红门' ,'大兴', '旧宫' ,'亦庄' ,'黄村南' ,'黄村东']
      
      
    };
  },
  components:{
    headeNav,
    bottom
  },
  asyncData() {
    
  },
  methods:{
    searchhouse(item){
    	this.$router.push({path:"/rent/rentList/",query:{searWords:item}})
    }
  },
  mounted() {}
};
</script>
