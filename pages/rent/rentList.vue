<template>
    <div class="rentList">
        <headeNav :NavActived="4"></headeNav>
        <div class="content_w infos">
            <div class="bread">
                <span class="bread_btn" @click="Tofirst">首页</span>
                <span>></span>
                <span class="bread_btn">国安家找房</span>
            </div>
            <div class="inp_box">
                <div class="left">
                    <input class="inpt" v-model="HouseListData.textSearch" type="text"  @keydown.enter="enterClick" :oninput="getResult()" @blur="blurFunc" @focus="focusFunc" placeholder="请输入小区、地铁、商圈等开始搜索" name="" id="">
                    <button class="btn" @click="enterClick"></button>
                </div>


            </div>
            <div class="act_img">
                <img class="act_img_dom" :src="mvAct" alt="">
                <div class="ral_btn" @click="ToSubWay"></div>
                <div class="map_btn" @click="ToMap"></div>
                <div class="R_btn" @click="CheckThreeD"></div>
            </div>
            <div class="Chouse_box">
                <HouseSearch :HouseListData2="HouseListData" :size="size" @changeHouseType="changeHouseType"></HouseSearch>
            </div>
            <div class="seiper_box" v-show="showSwiper" :class="{disAppear:disAppear}">
                <div class="left titles">
                    热门房屋推荐
                </div>
                <div class="left swiper_info">
                    <div class="rentSwiper">
                        <div class="myswiper2" v-swiper:mySwiper2="swiperOption2" >
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in houseReferral" :key="index" @click="showDetail(item)">
                                    <div class="left img_box">
                                        <img v-lazy="`//img.guoanfamily.com/${item.image}?imageView2/0/w/200/h/180`" :alt="item.houseName">
                                    </div>
                                    <div class="left build_info">
                                        <div class="name">{{item.houseName}}&nbsp;{{item.roomName}}{{item.roomNumber || ""}}</div>
                                        <div class="build">
                                           {{item.buildFloor}}层&nbsp;&nbsp;|&nbsp;{{item.userArea}}㎡&nbsp;| {{item.roomNo}}室{{item.livingNo}}厅
                                        </div>
                                        <div class="prices">{{`￥${item.price}/月`}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <!-- <div class="btn_icon" @click="closeSwiper">
                    </div> -->
                </div>
            </div>
            <!-- 筛选结果 -->
            <div class="results" v-show="SearchArr.length">
                <ul >
                    <li class="top_title">您已选择：</li>
                    <li class="results_li" v-for="(item,index) in SearchArr" :key="index">
                        <span class="Card"> {{item.val}}</span>
                        <span class="closed" @click="DelectTag(item,index)"></span>
                    </li>
                    <li class="Delate">
                        <span class="Delate_icon"></span>
                        <span class="Delate_text" @click="DelectTagAll">全部删除</span>
                    </li>
                </ul>
            </div>
            <!-- 楼盘列表 -->
            <div class="buildList">
                <div class="navs">
                    <button class="btns" @click="sortBuild(0)" :class="{actived:sortArr[0]>0}">
                        <span class="btn_text" >推荐排序</span>
                    </button>
                    <button class="btns"  @click="sortBuild(1)" :class="{actived:sortArr[1]>0}">
                        <span class="btn_text">价格</span>
                        <span class="up" v-if="sortArr[1]==2"></span>
                        <span class="down" v-else></span>
                    </button>
                    <button class="btns"  @click="sortBuild(2)" :class="{actived:sortArr[2]>0}">
                        <span class="btn_text">面积</span>
                        <span class="up" v-if="sortArr[2]==2"></span>
                        <span class="down" v-else></span>
                    </button>
                    <div class="right_box">
                        {{total}}套房屋符合条件
                    </div>
                </div>
                <div class="list_info"  v-loading="loading">
                    <ul v-if="HouseLists.length>0">
                        <li class="list_sty" v-for="(item,index) in HouseLists" :key="index"  @click="showDetail(item)">
                            <div class="build_img_box" >
                                <img v-lazy="`//img.guoanfamily.com/${item.image}?imageView2/1/w/280/h/210`" :alt="item.communityName">
                            </div>
                            <div class="build_list_info">
                                <div class="build_name">
                                    {{`${item.communityName}  ${item.houseName}`}} <span v-if="item.roomNumber">{{item.roomNumber}} </span>
                                </div>
                                <div class="build_infos info_box">
                                    {{item.stationsOneName}} &nbsp;&nbsp;{{item.subwayLineOneName ? "地铁"+item.subwayLineOneName : ""}}
                                </div>
                                <div class="build_infos">
                                    <span>
                                        {{item.buildFloor}}层&nbsp;&nbsp;|&nbsp;{{item.userArea}}㎡&nbsp;| {{item.roomNo}}室{{item.livingNo}}厅
                                    </span>
                                    <span class="product-type" :class="{producttype:item.productType == '0019001',producttypehome:item.productType==='0019003'}"></span>
                                    <i class="headabbr" v-if="item.lookUrl"></i>
                                </div>
                                <div class="adress clearfix">
                                    <span class="icons moved">
                                    </span>
                                    <span class="address">
                                        {{item.communityAddress}}
                                    </span>
                                </div>
                                <div class="rooms" v-if="item.leftRoomNo!=0">
                                    <span class="icon_s"></span>
                                    <span   class="vacant-room">还有{{item.leftRoomNo}}间空房</span>
                                </div>
                                <div class="tags">
                                    <ul>
                                        <li v-for="(label,index) in item.tags" :key="index">
                                            {{label}}
                                        </li>
                                    </ul>
                                </div>
                                <div class="prices">
                                    <div class="priceNum">
                                        <span class="num">{{item.price}}</span>
                                        <span class="danwei">元/月</span>
                                    </div>
                                    <button class="toBuileDetail"  >
                                        查看详情
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="noData" v-else>
                        <!-- <div class="no_data">
                            <div class="noData_mag">
                                未搜索到相关信息... ...
                            </div>
                            <p>我们找不到任何与您的搜索条件匹配的结果，</p>
                            <p>但是调整您的搜索条件可能会有所帮助。</p>
                        </div> -->
                        <div class="no_data"></div>
                        <div class="no_Data_info">
                            <div class="no_mag">
                                未搜索到相关信息... ...
                            </div>
                            <div class="proposal">
                                <p>我们找不到任何与您的搜索条件匹配的结果，</p>
                                <p>但是调整您的搜索条件可能会有所帮助。</p>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- 分页 -->
                <div class="pagination" v-if="isReady">
                    <el-pagination

                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="10"
                        layout="total,  prev, pager, next, jumper"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
        </div>
        <div>
            <BtnNav></BtnNav>
        </div>
    </div>
</template>

<script>
    import headeNav from "~/components/headerNav.vue";
	import BtnNav from "~/components/bottom.vue"
    import HouseSearch from "../../components/HouseSearch.vue";
    import { objFn } from "~/plugins/axios.js";
    export default {
        asyncData(){
            let houseReferral =[];
            return  objFn.Axios("agenthouseCutomer/common/homePage","post",{},{interfaceType:"RENT_HOUSE"}).then(res=>{
                if(res.code===0){
                    houseReferral = res.data.roomList.map(item=>{
                        item.image = item.image ?  item.image : 'https://img.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
                        if(item.houseName==="东大桥店"){
                            item.roomName=item.roomFloor;
                        }
                        return item;
                    })
                }
                return {
                    houseReferral
                }
            })
        },
        data() {
            return {
                subway:"",
                downshow:true,
                textSearch:"",
                loading:false,
                sortArr:[1,0,0],//排序控制
                mvAct:"https://img.guoanfamily.com/rentPC/RentList/newAct.gif",
                total:0,
                pages:1,
                type:"",
                HouseLists:[],
                bookedUrl:"",//booked
                schipolUrl:"",//schipol
                isReady:false,
                disAppear:false,
                showSwiper:true,
                HouseListData:{
                    page: 1,
                    roomNo: "",
                    productType: "",
                    districtId: "",
                    regionId:"",
                    subwayLineId: "",
                    stationsId: "",
                    priceMax: "",
                    priceMin: "",
                    userAreaMax:"",
                    userAreaMin:"",
                    textSearch: "",
                    size: 10,
                    sortType:"",
                    asc:"",
                    lookUrl:false,  //3D实景
                    roommateConstellation:"",  //星座
                    orientation:"",
                    roommateSex:this.$route.query.roommateSex,
                    hasIndieRestRoom:"",   //独卫
                    hasVeranda:"",    //独阳
                    active418:this.$route.query.active418,

                },
                size:[{id:'1',type:"10㎡以下",},{id:'2',type:"10-30㎡"},{id:'3',type:"30-50㎡"},{id:'4',type:"50-70㎡"},{id:'4',type:"70-90㎡"},{id:'5',type:"90㎡以上"}],
                swiperOption2:{
                    slidesPerView: 3,
                    spaceBetween: 10,
                    freeMode: false,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                currentPage:1,
                regionId:"",
                SearchArr:[]
            }

        },
        head() {
            return {
                title: "北京租房_【国安家公寓】",
                meta: [
                    {
                        hid:"description",
                        name: "description",
                        content: "国安家公寓是国安家倾力打造的高品质租住产品，产品覆盖了北京朝阳租房、海淀租房、通州租房、丰台租房、顺义租房、昌平租房、东城租房、西城租房等多个区域。"
                    },
                    {
                        name: "Keywords",
                        content: "北京租房,北京房屋出租,北京租房网,北京租房,北京个人房源出租,北京房屋出租,北京房屋租赁"
                    }
                ]
            };
        },
        components:{
            headeNav,
            HouseSearch,
            BtnNav
        },
        mounted() {
            this.isReady = true;
            this.HouseListData.textSearch = this.$route.query.searWords;
            this.getHouseList()
        },
        methods:{
            // 地铁找房
            ToSubWay(){
                this.$router.push({path:"/rent/nuxtMapSearchHouse/",query:{subway:"subway"}})
            },
            // 地图找房
            ToMap(){
                this.$router.push({path:"/rent/nuxtMapSearchHouse/"})

            },
            // 删选3d
            CheckThreeD(){
                if(!this.HouseListData.lookUrl){
                    this.HouseListData.lookUrl = true;
                    let obj = {
                            val:"3D实景",
                            key:"lookUrl"
                        }
                    this.SearchArr.push(obj);
                    this.$store.state.rentList.change = !this.$store.state.rentList.change;
                    this.getHouseList();
                }
            },
            // 返回首页
            Tofirst(){
                this.$router.push({path:"/"})
            },
            // 换页
            handleCurrentChange(val){
                this.currentPage = val
                this.getHouseList()

            },
            // 关闭
            closeSwiper(){
                this.disAppear = true;
                setTimeout(()=>{
                    this.showSwiper = false;
                },800)
            },
            // 选择结果
            changeHouseType(data){
                 //房源类型
                if(data.type){
                    switch(data.type){
                        case "0019001":
                            this.type="合租";
                        break;
                        case "0019002":
                            this.type="整租";
                        break;
                        case "0019003":
                            this.type="国安Home";
                        break;
                        default:
                            break;
                    }
                    this.HouseListData.productType = data.type;
                }else{
                    this.type="";
                    this.HouseListData.productType = "";
                }
                //区域
                if(data.regionId && data.districtId){
                    this.region=data.district;
                    this.HouseListData.districtId = data.regionId;
                    this.HouseListData.regionId = data.districtId;
                }else if(data.regionId){
                    this.region=data.region;
                    this.HouseListData.districtId = data.regionId;
                    this.HouseListData.regionId = "";

                }else if (data.districtId){
                    this.region=data.district;
                    this.HouseListData.regionId = data.districtId;
                }else{
                    this.HouseListData.regionId = "";
                    this.HouseListData.districtId = "";
                    this.region = "";
                }
                //地铁
                if(data.subwayId && data.stationsId){
                    this.subway=data.stations;
                    this.HouseListData.subwayLineId = data.subwayId;
                    this.HouseListData.stationsId = data.stationsId;
                }else if(data.subwayId){
                    this.subway=data.subway;
                    this.HouseListData.stationsId = "";
                    this.HouseListData.subwayLineId = data.subwayId;
                }else if (data.stationsId){
                    this.subway=data.stations;
                    this.HouseListData.stationsId = data.stationsId;
                }else{
                    this.HouseListData.subwayLineId = "";
                    this.HouseListData.stationsId = "";
                    this.subway = "";
                }
                //租金
                if(data.rent){
                    this.rent=data.rent;
                    let rent = data.rent.split("~");
                    this.HouseListData.priceMin = parseFloat(rent[0]);
                    this.HouseListData.priceMax = parseFloat(rent[1]);
                    if(rent.join("~").includes("元以下")){
                        this.HouseListData.priceMin = ""
                        this.HouseListData.priceMax = parseFloat(rent[0]);
                    }
                    if(rent.join("~").includes("元以上")){
                        this.HouseListData.priceMin = parseFloat(rent[0]);
                        this.HouseListData.priceMax = "";
                    }
                }else{
                    this.rent = "";
                    this.HouseListData.priceMin = "";
                    this.HouseListData.priceMax = "";
                }
                //居室
                if(data.room){
                    this.room=data.room;
                    let room = data.room;
                    switch(room.charAt(0)){
                        case "一":
                            this.HouseListData.roomNo="1";
                        break;
                        case "二":
                            this.HouseListData.roomNo="2";
                        break;
                        case "三":
                            this.HouseListData.roomNo="3";
                        break;
                        case "四":
                            this.HouseListData.roomNo="4";
                        break;
                        default:
                        break;
                    }
                    if(room.includes("以上")){
                        this.HouseListData.roomNo = "5";
                    }

                }else{
                    this.room = "";
                    this.HouseListData.roomNo="";
                }
                //面积
                if(data.area){
                    this.area=data.area;
                    let area = data.area.split("-");
                    this.HouseListData.userAreaMin = parseFloat(area[0]);
                    this.HouseListData.userAreaMax = parseFloat(area[1]) ? parseFloat(area[1]) : "";
                    if(area.join("-").includes("以下")){
                        this.HouseListData.userAreaMin = ""
                        this.HouseListData.userAreaMax = parseFloat(area[0]);
                    }
                    if(area.join("-").includes("以上")){
                        this.HouseListData.userAreaMin = parseFloat(area[0])
                        this.HouseListData.userAreaMax = "";
                    }

                }else{
                    this.area = "";
                    this.HouseListData.userAreaMin = "";
                    this.HouseListData.userAreaMax = "";
                }
                //主页来的搜索参数
                if(data.textSearch){
                    this.textSearch = data.textSearch;
                    this.HouseListData.textSearch = data.textSearch;
                    this.custom = data.textSearch;
                }
                this.SearchArr = []

                for(let key in data){
                    if(key!=="productType"&&key!=="size"&&key!=="page"&&key!=="userAreaMax"&&key!=="userAreaMin"&&key!=="roomNo"&&key!=="priceMax"&&key!=="priceMin"){
                        if(key!=="regionId"&&data[key]&&key!=="subwayId"&&key!=="subwayLineId"&&key!=="stationsId"&&key!=="districtId"){
                            let obj = {}
                            if(key=='type'){
                                obj = {
                                    val:this.type,
                                    key:"type"
                                }
                            }else if(key=='roommateSex'){
                                if(data[key]=="1"){
                                    obj = {
                                        val:"都是帅哥",
                                        key:"roommateSex"
                                    }
                                }else if(data[key]=="0"){
                                    obj = {
                                        val:"都是美女",
                                        key:"roommateSex"
                                    }
                                }else{
                                    obj = {
                                        val:"异性空间",
                                        key:"roommateSex"
                                    }
                                }

                            }else if(key=='orientation'){
                               let  orientationList=[{
                                            value: '0011002',
                                            label: '南'
                                        }, {
                                            value: '0011001',
                                            label: '南北'
                                        }, {
                                            value: '0011003',
                                            label: '东南'
                                        }, {
                                            value: '0011005',
                                            label: '东'
                                        }, {
                                            value: '0011004',
                                            label: '西'
                                        },{
                                            value: '0011006',
                                            label: '北'
                                        },
                                    ]
                                orientationList.forEach(its=>{
                                    if(data[key]==its.value){
                                        obj = {
                                            val:its.label,
                                            key:"orientation"
                                        }

                                    }
                                })
                            }else if (key=="lookUrl"){

                                if(data[key]){
                                    obj = {
                                        val:"3D实景",
                                        key
                                    }
                                }else{
                                    let indexs = 0
                                    this.SearchArr.forEach((obs,i)=>{
                                        if(obs.key==key){
                                            indexs = i
                                        }
                                    })
                                    this.SearchArr.splice(i,1)
                                }

                            }else if (key=="hasVeranda"){
                                if(data[key]){
                                    obj = {
                                        val:"独立阳台",
                                        key
                                    }
                                }else{
                                    let indexs = 0
                                    this.SearchArr.forEach((obs,i)=>{
                                        if(obs.key==key){
                                            indexs = i
                                        }
                                    })
                                    this.SearchArr.splice(i,1)
                                }
                            }else if (key=="hasIndieRestRoom"){
                                if(data[key]){
                                    obj = {
                                        val:"独卫",
                                        key
                                    }
                                }else{
                                    let indexs = 0
                                    this.SearchArr.forEach((obs,i)=>{
                                        if(obs.key==key){
                                            indexs = i
                                        }
                                    })
                                    this.SearchArr.splice(i,1)
                                }

                            }else{
                                obj = {
                                    val:data[key],
                                    key
                                }
                            }
                            this.SearchArr.push(obj)
                        }
                    }

                }
                this.getHouseList()
            },
            // 删除一项
            DelectTag(item ,index){

                this.HouseListData[item.key] = "";
                let Noregion = false;
                let NoSub = false;
                switch(item.key){
                    case "type":this.HouseListData["productType"] = "";
                    break;
                    case "subway":this.HouseListData["subwayLineId"] = "";
                    this.HouseListData["stationsId"] = "";
                    this.HouseListData["stations"] = "";
                    NoSub = true
                    break;
                    case "stations":this.HouseListData["stationsId"] = ""
                    break;
                    case "region": this.HouseListData.regionId = "";
                    this.HouseListData.districtId = "";
                    this.HouseListData.district = "";
                    Noregion = true
                    break;
                    case "district":this.HouseListData.districtId = "";
                    break;
                    case "room":this.HouseListData.roomNo = "";
                    break;
                    case "area":this.HouseListData.userAreaMax = "";this.HouseListData.userAreaMin = "";
                    break;
                    case "rent":this.HouseListData.priceMax = "";this.HouseListData.priceMax = "";
                    break;
                    default : this.HouseListData[item.key] = "";
                    break;
                }
                this.$store.state.rentList.change = !this.$store.state.rentList.change;
                this.currentPage = 1;
                if(Noregion||NoSub){
                    this.SearchArr.forEach((its,i)=>{
                        if(Noregion){
                            if(its.key=="district"){
                                this.SearchArr.splice(i,1)
                            }
                        }
                        if(NoSub){
                            if(its.key=="stations"){
                                this.SearchArr.splice(i,1)
                            }
                        }

                    })
                }
                this.SearchArr.splice(index,1)
                this.getHouseList()
            },
            DelectTagAll(){
                this.HouseListData.textSearch=""
                this.SearchArr.forEach(item => {
                    this.HouseListData[item.key] = "";
                    let Noregion = false;
                    let NoSub = false;
                    switch(item.key){
                        case "type":this.HouseListData["productType"] = "";
                        break;
                        case "subway":
                        this.HouseListData["subwayLineId"] = "";
                        this.HouseListData["stationsId"] = "";
                        this.HouseListData["stations"] = "";
                        NoSub = true
                        break;
                        case "stations":this.HouseListData["stationsId"] = ""
                        break;
                        case "region": this.HouseListData.regionId = "";
                        this.HouseListData.districtId = "";
                        this.HouseListData.district = "";
                        Noregion = true
                        break;
                        case "district":this.HouseListData.districtId = "";
                        break;
                        case "room":this.HouseListData.roomNo = "";
                        break;
                        case "area":this.HouseListData.userAreaMax = "";this.HouseListData.userAreaMin = "";
                        break;
                        case "rent":this.HouseListData.priceMax = "";this.HouseListData.priceMax = "";
                        break;
                        default : this.HouseListData[item.key] = "";
                        break;
                    }
                    if(Noregion||NoSub){
                        this.SearchArr.forEach((its,i)=>{
                            if(Noregion){
                                if(its.key=="district"){
                                    this.SearchArr.splice(i,1)
                                }
                            }
                            if(NoSub){
                                if(its.key=="stations"){
                                    this.SearchArr.splice(i,1)
                                }
                            }

                        })
                    }
                })
                this.$store.state.rentList.change = !this.$store.state.rentList.change;
                this.SearchArr = [];
                this.currentPage = 1;
                this.getHouseList()
            },
            showDetail(item){
                this.$router.push({path:"/rent/housedetail",query:{id:item.id,productType:item.productType}})
            },
            getHouseList(){
                this.loading = true;
                let PostData = {
                    page: this.currentPage,
                    roomNo: this.HouseListData.roomNo,
                    productType: this.HouseListData.productType,
                    districtId: this.HouseListData.districtId,
                    regionId:this.HouseListData.regionId,
                    subwayLineId: this.HouseListData.subwayLineId,
                    stationsId: this.HouseListData.stationsId,
                    priceMax: this.HouseListData.priceMax,
                    priceMin: this.HouseListData.priceMin,
                    userAreaMax:this.HouseListData.userAreaMax,
                    userAreaMin:this.HouseListData.userAreaMin,
                    textSearch: this.HouseListData.textSearch,
                    size: 10,
                    sortType:this.HouseListData.sortType,
                    asc:this.HouseListData.asc,
                    lookUrl:this.HouseListData.lookUrl,
                    orientation:this.HouseListData.orientation,
                    roommateConstellation:this.HouseListData.roommateConstellation,
                    roommateSex:this.HouseListData.roommateSex ==="2"? "" :this.HouseListData.roommateSex,
                    hasIndieRestRoom:this.HouseListData.hasIndieRestRoom,   //独卫
                    hasVeranda:this.HouseListData.hasVeranda,    //独阳
                    active418:this.HouseListData.active418,
                }
                // OWNER_URL
                objFn.Axios("agenthouseCutomer/pc/HouseInfoController/getHouseList","post",PostData,{interfaceType:"RENT_HOUSE"}).then(res=>{
                     if(res.data.content.length){
                        // this.loading = false;
                        // this.isData = false;
                        this.total = res.data.totalPageNo;
                        this.pages = Math.ceil(res.data.totalPageNo / 10);
                        let noImage = [];
                        this.HouseLists = res.data.content.map(item => {
                            for(let key in item){
                                if(!item[key]){
                                    item[key] = ""
                                }
                            }
                            item.tags= item.tags ? item.tags.split(",").slice(0,3) : "";
                            for( var i = 0; i < item.tags.length; i ++){
                                if(item.tags[i] == ""){
                                    item.tags.splice(i,1)
                                }
                            }
                            if(item.productType == "0019001" || item.productType == "0019003"){
                                if(item.roomRentStatus=="0015001"){
                                    item.image = this.bookedUrl;
                                }else if(item.roomRentStatus=="0015004"){
                                    item.image = this.schipolUrl;
                                }else{
                                    item.image = item.image ? item.image: "";
                                }
                            }else if(item.productType=="0019002"){
                                if(item.houseRentStatus =="0026002"){
                                    item.image = this.bookedUrl;
                                }else if(item.houseRentStatus =="0026004"){
                                    item.image = this.schipolUrl;
                                }else{
                                    item.image = item.image ? item.image : "";
                                }
                            }
                            if(item.houseName==="东大桥店"){
                                item.roomName=item.roomFloor;
                            }
                            return item;
                        });

                    }else{
                        // this.loading = false;
                        // this.isData = true;
                        this.total=0;
                        this.pages=1;
                        this.currentPage=1;
                        this.HouseLists = [];
                    }
                    this.loading = false;
                })
            },
            // 选择排序方式
            sortBuild(n){
                let NewArr = []
                this.sortArr.map((ele,index) => {
                    if(n==index){
                        if(ele===1){
                            ele=2
                        }else{
                            ele=1
                        }
                    }else{
                      ele = 0
                    }
                    NewArr.push(ele)
               });
               this.sortArr=NewArr;
                if( this.sortArr[0]>0){
                    this.HouseListData.sortType = "0";

                }else if(this.sortArr[1]>0){
                     this.HouseListData.sortType = "1";
                    if(this.sortArr[1]===1){
                        this.HouseListData.asc = false;
                    }else{
                        this.HouseListData.asc = true;
                    }
                }else if(this.sortArr[2]>0){
                    this.HouseListData.sortType = "2";
                    if(this.sortArr[2]===1){
                        this.HouseListData.asc = false;
                    }else{
                        this.HouseListData.asc = true;
                    }
                }
                this.getHouseList()


            },
            // 回车
            enterClick(){

               this.getHouseList();
            },
            // 输入事件
            getResult () {//输入事件

            },

            blurFunc(){

            },
            focusFunc(){
				// this.downshow = true;
			},
        },
        computed:{
             MykeyWards(){
                return this.$route.query.searWords
            }
        },
        watch:{
            MykeyWards(){
                console.log(this.MykeyWards)
                if(this.MykeyWards){
                    this.HouseListData.textSearch = this.MykeyWards
                }

            }
        }

    }
</script>

<style scoped lang="less">
.rentList{
    .infos{
        position: relative;
    }
    .left{
        float: left;
    }
    .bread{
        line-height: .8rem;
        font-size: .13rem;
        .bread_btn{
            cursor: pointer;
            &:hover{
                color: #D6000F;
            }
        }
    }
     .act_img{
        position: absolute;
        left: 5rem;
        top: 0.3rem;
        width: 6.9rem;
        height: 1rem;
        .act_img_dom{
            width: 100%;
        }
        .ral_btn{
            position: absolute;
            width: 1.1rem;
            height: 0.5rem;
            top: .14rem;
            left: 4.2rem;
            cursor: pointer;
        }
        .map_btn{
             position: absolute;
            width: 1.3rem;
            height: 0.5rem;
            top: .14rem;
            left: 2.85rem;
            cursor: pointer;

        }
        .R_btn{
            position: absolute;
            width: 1.3rem;
            height: 0.5rem;
            top:.14rem;
            left:5.46rem;
            cursor: pointer;
        }
    }
    .inp_box{
        height: .7rem;
        .left{
            position: relative;

        }
        .inpt{
            height: .42rem;
            width: 4rem;
            padding-left:.8em;
        }
        .btn{
            position: absolute;
            right:.06rem;
            top: .06rem;
            width: .3rem;
            height: .3rem;
            z-index: 1000;
            border:none;

            background: #fff url("https://img.guoanfamily.com/rentPC/rentindex/searchBtn.png") center no-repeat/100% 100%;
        }


    }
    .Chouse_box{
        padding: 0 .15rem;
        border:1px solid #ccc;
        // border-radius: 3px;
    }
    .seiper_box{
        height:1.46rem;
        margin-top: .3rem;
        overflow: hidden;
        &.disAppear{
            opacity: 0;
            height: 0;
            margin-top: 0;
            transition: all  .8s;
        }
        .titles{
            height: 100%;
            width: .4rem;
            font-size: .18rem;
            color:#fff;
            padding: 0 .1rem;
            line-height: 1.1em;
            padding-top: .07rem;
            background-color:#D6000F;
        }
        .swiper_info{
            position: relative;
            width: 11.6rem;
            height: 100%;
            padding: .15rem .42rem;
            background: #F7F7F7;
            .swiper-button-prev{
                background: url("https://img.guoanfamily.com/rentPC/RentList/left1.png") center no-repeat;
                left: .05rem;
                border:none;
            }
            .swiper-button-next{
                background: url("https://img.guoanfamily.com/rentPC/RentList/right1.png") center no-repeat;
                right: .05rem;
                border:none;
            }
            .btn_icon{
                z-index: 999;
                position: absolute;
                top: .1rem;
                right:.1rem;
                width: .2rem;
                height: .2rem;
                background:url("https://img.guoanfamily.com/rentPC/RentList/closed.png")center no-repeat ;
                background-size: 100% 100%;
                background-color: rgba(0,0,0,.3);
                &:hover{
                    background-color: rgba(0,0,0,.5);
                    transform: scale(1.2)
                }
            }
        }
    }
    .rentSwiper{
        box-sizing: border-box;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        *{
            box-sizing: border-box;
        }
        .myswiper2{

            width: 100%;
            height: 100%;
            .swiper-slide{
                cursor: pointer;
            }
            .card{
                margin: 0 auto;
                width: 2.4rem;
                height: 100%;

            }
            .build_img{
                width: 2.4rem;
                height:1.8rem;
                background: #000;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .build_name{
                margin: .1rem 0;
                font-size: .20rem;
                line-height: .4rem;
                // text-align: center;
                &:hover{
                    color: #D6000F;
                }
                span{
                    font-size: .20rem;
                    line-height: .4rem;
                    &:hover{
                        color: #D6000F;
                    }
                }
            }
            .tags{
                height: .24rem;
                overflow: hidden;
                ul{
                    height: .24rem;
                    display: inline-block;
                    white-space: nowrap;
                    li{
                        display: inline;
                        padding: 0 .8em;
                        margin-right: 0.1rem;
                        background-color: #CCCCCC;
                        color: #fff;
                    };
                }
            }
            .dress{
                margin-top: .1rem;
                .icon{
                    float: left;
                    width: .2rem;
                    height: .2rem;

                }
                .dress_info{
                    margin-top: .02rem;
                    float: left;
                    height: .16rem;
                    line-height:.16rem;
                    font-size: .12rem;
                    margin-left: .1rem;
                    color: #999
                }
            }
            .price{
                margin-top: .3rem;
                height: .6rem;
                overflow: hidden;
                .num{
                    float: right;
                    text-align: right;
                    line-height: .5rem;
                    font-size: .26rem;
                }
                .danwei{
                    margin-left: .4em;
                    margin-top: .16rem;
                    float: right;
                    text-align: right;
                }

            }
            .swiper-wrapper{

            }
            .img_box{
                width: 50%;
                height: 100%;
                padding-top: .05rem;
                padding-left: .1rem;

                img{
                    height: 1.05rem;
                    width: 1.5rem;
                    text-align: center;

                }
                &:hover{

                    img{
                        transform: scale(1.05)
                    }
                }
            }
            .build_info{
                width: 50%;
                height: 100%;
                .name{
                    font-size: 0.18rem ;
                    font-weight: 700;
                    line-height: .28rem;
                    color: #000;
                }
                .build{
                    font-size: 0.12rem ;
                    line-height: .24rem;
                    color: #666;
                }
                .swiper-wrapper{
                    overflow: hidden;
                }
                .prices{
                    margin-top: .1rem;
                    color: #D6000F;
                    font-size: 0.20rem ;
                }
            }
        }
    }
    .rentSwiper{
        box-sizing: border-box;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        *{
            box-sizing: border-box;
        }
        .myswiper2{
            width: 100%;
            height: 100%;

            .card{
                margin: 0 auto;
                width: 2.4rem;
                height: 100%;

            }
            .build_img{
                width: 2.4rem;
                height:1.8rem;
                background: #000;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .build_name{
                margin: .1rem 0;
                font-size: .20rem;
                line-height: .4rem;
                text-align: center;
                span{
                     font-size: .20rem;
                    line-height: .4rem;
                     &:hover{
                            color: #D6000F;
                            cursor: pointer;
                        }
                }
            }
            .tags{
                height: .24rem;
                overflow: hidden;
                ul{
                    height: .24rem;
                    display: inline-block;
                    white-space: nowrap;
                    li{
                        display: inline;
                        padding: 0 .8em;
                        margin-right: 0.1rem;
                        background-color: #CCCCCC;
                        color: #fff;
                    };
                }
            }
            .dress{
                margin-top: .1rem;
                .icon{
                    float: left;
                    width: .2rem;
                    height: .2rem;

                }
                .dress_info{
                    margin-top: .02rem;
                    float: left;
                    height: .16rem;
                    line-height:.16rem;
                    font-size: .12rem;
                    margin-left: .1rem;
                    color: #999
                }
            }
            .price{
                margin-top: .3rem;
                height: .6rem;
                overflow: hidden;
                .num{
                    float: right;
                    text-align: right;
                    line-height: .5rem;
                    font-size: .26rem;
                }
                .danwei{
                    margin-left: .4em;
                    margin-top: .16rem;
                    float: right;
                    text-align: right;
                }

            }

            .swiper-wrapper{

            }
            .img_box{
                width: 46%;
                height: 100%;
                padding-top: .05rem;
                padding-left: .1rem;
                img{
                    height: 1.05rem;
                    width: 1.4rem;
                    text-align: center;
                }
            }
            .build_info{
                width: 54%;
                height: 100%;
                overflow: hidden;
                .name{
                    font-size: 0.16rem ;
                    font-weight: 700;
                    line-height: .3rem;
                    height:.3rem;
                    overflow: hidden;
                    color: #000;
                    width: 150%
                }
                .build{
                    font-size: 0.14rem ;
                    line-height: .3rem;
                    color: #666;
                }
                .swiper-wrapper{
                    overflow: hidden;
                }
                .prices{
                    margin-top: .18rem;
                    color: #D6000F;
                    font-size: 0.20rem ;
                }
            }
        }
    }
    .results{
        height: .6rem;
        overflow-x: auto;
        li{
            // display: inline-block;
            cursor: default;
            margin-right: 10px;
            float: left;
            margin-top: .21rem;
            &.results_li{
                border: 1px solid #D6000F;
                height: 22px;
            }
            span{
                vertical-align: top;
                display: inline-table;
            }
            .Card{

                padding: 0 5px;
                color:#D6000F;
            }
            .closed{
                cursor: pointer;
                background: url("../../static/rent/RentList/clear_select.jpg") center no-repeat;
                background-size: contain;
                width: 20px;
                height: 20px;
            }
        }
        .Delate{
            cursor: pointer;
            float: left;
            height: 20px;
            width: 80px;
            .Delate_icon{
                float: left;
                width: 20px;
                height: 20px;
                background: url("../../static/rent/RentList/clear.png") center no-repeat;
                background-size: 78%;
            }
            .Delate_text{
                float: left;
                color: #D6000F;
            }
        }
    }
    .buildList{
        .navs{
            height: .75rem;
            border-bottom: 1px solid #ccc;
            .btns{
                float: left;
                height: 100%;
                line-height: .75rem;
                border:none;
                background-color: #fff;
                span{
                    vertical-align: middle;
                }
                &.actived{
                    .down{
                        background: url("https://img.guoanfamily.com/rentPC/RentList/ac_down.png") center no-repeat;
                        background-size: 100% 100%;
                    }
                    .up{
                        height: .18rem;
                        width: .14rem;
                         display: inline-block;
                        background: url("https://img.guoanfamily.com/rentPC/RentList/Ac_up.png") center no-repeat;
                        background-size: 120% 100%;
                    }
                    .btn_text{
                        color:#D6000F;
                    }
                }
                .btn_text{
                    font-size: .14rem;
                    color: #000;
                }
                .down{
                    height: .08rem;
                    width: .14rem;
                    display: inline-block;
                    background: url("https://img.guoanfamily.com/rentPC/RentList/down.png") center no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
        .list_info{
            .list_sty{
                cursor: pointer;
                padding: .3rem 0;
                border-bottom: 1px solid #ccc;
                height: 2.7rem;
                &:hover{
                    background-color: #eee;
                }
                .build_img_box{
                    width: 2.8rem;
                    height: 2.1rem;
                    float: left;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                        vertical-align: top;
                        transform: scale(1);
                        transition: transform .8s;
                        &:hover{
                            transform: scale(1.2);
                        }
                    }
                }
                .build_list_info{
                    // height: 2.7rem;
                    margin-left: 3.1rem;
                    position: relative;
                    .build_name{
                        font-size: .22rem;
                        line-height: .22rem;
                        font-weight: 700;
                        color: #000;
                        &:hover{
                            color: #D6000F;
                            cursor: pointer;
                            span{
                                color: #D6000F;
                            }
                        }
                        span{
                            vertical-align: top;
                            font-size: .22rem;
                             line-height: .22rem;
                            font-weight: 700;
                            color: #000;
                        }
                    }
                    .build_infos{
                        &.info_box{
                            margin-top: .18rem;
                        }
                         &:hover{
                            // color: #D6000F;
                            cursor: pointer;
                        }
                        font-size: .18rem;
                        line-height: 0.3rem;
                        color: #999;
                        .product-type{
                            width: 30px;
                            height: 30px;
                            display: inline-block;
                            background:url("../../static/rent/RentList/zmkm.png") no-repeat;
                            background-size: 100%;
                            margin-left:10px;
                            // position: absolute;
                            vertical-align:middle;
                        }
                        .producttype{
                            background:url("../../static/rent/RentList/shared.png") no-repeat;
                            background-size: 100%;
                            vertical-align:middle;
                        }
                        .producttypehome{

                            background: none;
                        }
                        .vacant-room{
                            color: #ffa000;
                        }
                        .headabbr{
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            background:url("../../static/rent/RentList/head3d.png") no-repeat;
                            background-size: 100%;
                            vertical-align:middle;
                            margin-left: 10px;
                        }
                        .icon {
                            width: 16px;
                            height: 16px;
                            vertical-align: -0.15em;
                            fill: currentColor;
                            overflow: hidden;
                            color:#ffa000;
                            margin-left:10%;
                        }
                    }
                    .adress{
                        margin-top: .1rem;
                        height: .3rem;

                        span{
                            float: left;
                        }
                        .icons{
                            // margin-top: .05rem;
                            width: .2rem;
                            height: .2rem;
                            background: url("../../static/rent/RentList/address.png") center no-repeat/contain;

                        }
                        .moved{
                            animation: mapicon 1s infinite ease-out 1s;
                        }
                        .address{
                             width: 280px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            line-height:.3rem;
                            font-size: .16rem;
                            color: #999;
                            margin-left: .1rem;
                        }
                    }
                    .rooms{
                        position: absolute;
                        top: 1.16rem;
                        left: 3rem;
                        width: 2rem;

                        span{
                            float: left;
                            height: .2rem;
                        }
                        .icon_s{
                            margin-top: .03rem;
                            width: .15rem;
                            height: .15rem;
                            background: url("../../static/rent/RentList/Attentions.png") center no-repeat/100% 100%;
                        }
                        .vacant-room{
                            margin-left: .1rem;
                            font-size: .16rem;

                            color: #999
                        }
                    }
                    .tags{
                        height: .28rem;
                        margin-top: .3rem;
                        ul{
                            height: 100%;
                            li{
                                float: left;
                                margin-right: .05rem;
                                background: #999;
                                color: #fff;
                                font-size: .16rem;
                                line-height: .28rem;
                                padding: 0 .05rem;
                            }
                        }
                    }
                    .prices{
                        position: absolute;
                        right: .22rem;
                        top: .56rem;
                        .priceNum{
                            color: #D6000F;
                            .danwei{
                                vertical-align: bottom;
                                font-size: .20rem;
                                line-height: .2rem;
                            }

                            .num{
                                vertical-align: bottom;
                                font-size: .32rem;
                                line-height: .32rem;
                            }
                        }
                        .toBuileDetail{
                            margin-top: .4rem;
                        }
                    }
                }

            }
            .noData{
                height: 4rem;
                 .no_data{
                    width: 3rem;
                    height: 3rem;
                    margin-top: 0.5rem;
                    margin-left: 2.3rem;
                    background: url("https://img.guoanfamily.com/rentPC/subway/nodata.png") center no-repeat;
                    background-size: 100% 100%;
                    float: left;
                }
                .no_Data_info{
                    margin-left: .6rem;
                    float: left;
                    .proposal{
                        margin-top: .5rem;
                        p{
                            line-height: .3rem;
                            font-size: .16rem;
                            // color: #ffa000;
                        }
                    }
                }
                .no_mag{
                    margin-top: 1rem;

                    border-radius: .04rem;
                    color: #D6000F;
                    // background: #e8e8e8;
                    font-size: .3rem;
                }
                // .no_data{
                //     overflow: hidden;
                //     width: 100%;
                //     height: 4rem;
                //     background: url("https://img.guoanfamily.com/rentPC/subway/nodata.png") center no-repeat;
                //     background-size: 20%;
                //     p{
                //         margin: 0 auto;
                //         width: 3rem;
                //         padding: .04rem 0;
                //         text-align: left;
                //         background-color: #fff;
                //     }
                // }
                // .no_Data_info{
                //     margin-left: .5rem;
                //     float: left;
                //     .proposal{
                //         margin-top: .3rem;
                //         p{
                //             line-height: .3rem;
                //             font-size: .16rem;
                //             color: #ffa000;
                //         }
                //     }
                // }
                // .noData_mag{
                //     margin: 0 auto;
                //     width: 3rem;
                //     text-align: left;
                //     color: #D6000F;
                //     font-size: .2rem;
                //     margin-top: 1rem;

                // }
            }
        }
        .pagination{
            height: .6rem;
            margin-top: .3rem;
        }
        .right_box{
            width: 3rem;
            line-height: .7rem;
            float: right;
            text-align: right;
            color: #999;
        }

    }

}

@keyframes mapicon {
    0% {
        transform: translateY(0px);
    }
    25% {
        transform: translateY(2px);
    }
    50% {
        transform: translateY(6px);
    }
    75% {
        transform: translateY(2px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>
<style lang="less">
    .rentList{
        .el-pagination{
            width: 600px;
            margin: 0 auto;
        }
        .el-pager li.active{
            background: #d6000f;
            color:#fff;
            border-radius:.05rem;
            &:hover{
                color:#fff;
            }
        }
        .el-pagination button:hover{
             color:#d6000f;
        }
        .el-pager li:hover{
            color:#d6000f;
        }

    }

</style>
