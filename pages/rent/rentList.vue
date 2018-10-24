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
                    <input class="inpt" v-model="HouseListData.textSearch" type="text"  @keydown="enterClick" :oninput="getResult()" @blur="blurFunc" @focus="focusFunc" placeholder="请输入小区、地铁、商圈等开始搜索" name="" id="">
                </div>
            </div>
            <div class="act_img">
                <img class="act_img_dom" :src="mvAct" alt="">
                <div class="ral_btn"></div>
                <div class="map_btn"></div>
            </div>
            <div class="Chouse_box">
                <HouseSearch :HouseListData="HouseListData" :size="size" @changeHouseType="changeHouseType"></HouseSearch>
            </div>
            <div class="seiper_box" v-show="showSwiper" :class="{disAppear:disAppear}">
                <div class="left titles">
                    热门房屋推荐
                </div>
                <div class="left swiper_info">
                    <div class="rentSwiper">
                        <div class="myswiper2" v-swiper:mySwiper2="swiperOption2" >
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in houseReferral" :key="index">
                                    <div class="left img_box">
                                        <img :src="`//img.guoanfamily.com/${item.image}?imageView2/0/w/200/h/180`" alt="">
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
                    <div class="btn_icon" @click="closeSwiper">
                    </div>
                </div>
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
                </div>
                <div class="list_info"  v-loading="loading">
                    <ul v-if="HouseLists.length>0">
                        <li class="list_sty" v-for="(item,index) in HouseLists" :key="index">
                            <div class="build_img_box">
                                <img :src="`//img.guoanfamily.com/${item.image}?imageView2/1/w/280/h/210`" alt="">
                            </div>
                            <div class="build_list_info">
                                <div class="build_name">
                                    {{`${item.communityName}  ${item.houseName}${item.roomNumber} `}}
                                </div>
                                <div class="build_infos info_box">
                                    {{item.stationsOneName}} &nbsp;&nbsp;{{item.subwayLineOneName ? "地铁"+item.subwayLineOneName : ""}}
                                </div>
                                <div class="build_infos">
                                    {{item.buildFloor}}层&nbsp;&nbsp;|&nbsp;{{item.userArea}}㎡&nbsp;| {{item.roomNo}}室{{item.livingNo}}厅
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
                                    <button class="toBuileDetail">
                                        查看详情
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="noData" v-else>
                        <div class="no_data"></div>
                        <div class="no_Data_info">
                            <div class="no_mag">
                                我们找不到任何与您的搜索条件匹配的结果，但是调整您的搜索条件可能会有所帮助。
                            </div>
                            <div class="proposal">
                                <p>以下是一些建议：</p>
                                <p>1.删除一些筛选条件</p>
                                <p>2.调整您输入的关键词</p>
                                <p>3.请扩大您的搜索范围</p>




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
    </div>
</template>

<script>
    import headeNav from "~/components/headerNav.vue";
    import mvAct from "../../static/rent/RentList/mv_act.gif";
    import HouseSearch from "../../components/HouseSearch.vue";
    // import booked from "../../../../static/img/booked.png";   //已预约
    // import schipol from "../../../../static/img/schipol.png";  //已出租
     import { objFn } from "~/plugins/axios.js";
    export default {
        asyncData(){
            let houseReferral =[];
            return  objFn.Axios("agenthouseCutomer/common/homePage","post",{},{interfaceType:"PAY"}).then(res=>{
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
                downshow:true,
                textSearch:"",
                loading:false,
                sortArr:[0,0,0],//排序控制
                mvAct,
                total:0,
                pages:1,
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
                    spaceBetween: 16,
                    freeMode: false,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                currentPage:1
            }

        },
        components:{
            headeNav,
            HouseSearch
        },
        mounted() {
            this.isReady = true;

             this.getHouseList()
        },
        methods:{
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
                    this.HouseListData.regionId = "";
                    this.HouseListData.districtId = data.regionId;
                }else if (data.districtId){
                    this.region=data.district;
                    this.HouseListData.regionId = data.districtId;
                }else{
                    this.HouseListData.regionId = "";
                    this.HouseListData.districtId = "";
                    this.region = "";
                    // this.district = "";
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
                    // this.district = "";
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


                // http://act.guoanfamily.com/agenthouseCutomer/pc/HouseInfoController/getHouseList
                // http://act.guoanfamily.com/agenthouseCutomer/pc/HouseInfoController/getHouseList
                this.getHouseList()
            },
            getHouseList(){
                this.loading = true;
                //  this.HouseLists = [];
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
                objFn.Axios("agenthouseCutomer/pc/HouseInfoController/getHouseList","post",PostData,{interfaceType:"PAY"}).then(res=>{
                     if(res.data.content.length){
                        // this.loading = false;
                        // this.isData = false;
                        this.total = res.data.totalPageNo;
                        this.pages = Math.ceil(res.data.totalPageNo / 10);
                        let noImage = [];
                        this.HouseLists = res.data.content.map(item => {
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
        // font-weight: 600;
    }
     .act_img{
        position: absolute;
        left: 5rem;
        top: 0.2rem;
        width: 3.4rem;
        height: 1rem;
        .act_img_dom{
            width: 100%;

        }
        .ral_btn{
            position: absolute;
            width: .8rem;
            height: 0.3rem;
            top:0.08rem;
            left: 1.8rem;
            cursor: pointer;
        }
        .map_btn{
            position: absolute;
            width: .8rem;
            height: 0.3rem;
            top: 0.08rem;
            left: 2.65rem;
            cursor: pointer;
        }
    }
    .inp_box{
        height: .7rem;
        .inpt{
            height: .42rem;
            width: 4rem;
            padding-left:.8em;
        }


    }
    .Chouse_box{
        padding: .15rem;
        border:1px solid #ccc;
        // border-radius: 3px;
    }
    .seiper_box{
        height:1.3rem;
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
                background: url("../../static/rent/RentList/left1.png") center no-repeat;
                left: .05rem;
                border:none;
            }
            .swiper-button-next{
                background: url("../../static/rent/RentList/right1.png") center no-repeat;
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
                background:url("../../static/rent/RentList/closed.png")center no-repeat ;
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
            // .swiper-button-prev{
            //     background: url("../../static/rent/RentList/left1.png") center no-repeat;
            //     left: .05rem;
            // }
            // .swiper-button-next{
            //     background: url("../../static/rent/RentList/right1.png") center no-repeat;
            //     right: .05rem;
            // }
            .swiper-wrapper{

            }
            .img_box{
                width: 50%;
                height: 100%;
                padding-top: .05rem;
                padding-left: .1rem;
                img{
                    height: 0.9rem;
                    width: 1.5rem;
                    text-align: center;

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
                    height: 0.9rem;
                    width: 1.5rem;
                    text-align: center;

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
                padding: 0 .35rem;
                span{
                    vertical-align: middle;

                }
                &.actived{
                    .down{
                        background: url("../../static/rent/RentList/ac_down.png") center no-repeat;
                        background-size: 100% 100%;

                    }
                    .up{
                        height: .18rem;
                        width: .14rem;
                         display: inline-block;
                        background: url("../../static/rent/RentList/Ac_up.png") center no-repeat;
                        background-size: 120% 100%;
                    }
                    .btn_text{
                        color:#D6000F;
                    }
                }
                .btn_text{
                    font-size: .14rem
                }
                .down{
                    height: .08rem;
                    width: .14rem;
                    display: inline-block;
                    background: url("../../static/rent/RentList/down.png") center no-repeat;
                    background-size: 100% 100%;

                }

            }
        }
        .list_info{
            .list_sty{
                padding: .3rem 0;
                border-bottom: 1px solid #ccc;
                height: 2.7rem;
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
                    height: 2.7rem;
                    margin-left: 3.1rem;
                    position: relative;
                    .build_name{
                        font-size: .22rem;
                        line-height: .22rem;
                        font-weight: 700;
                        color: #000;
                    }
                    .build_infos{
                        &.info_box{
                            margin-top: .18rem;
                        }
                        font-size: .18rem;
                        line-height: 0.3rem;
                        color: #999;
                    }
                    .tags{
                        height: .28rem;
                        margin-top: .7rem;
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
                            color: #999;
                            background: #fff;
                            border:none;
                            text-align: center;
                            font-size: .18rem;
                            width: 100%;
                            margin-top: .4rem;
                            cursor: pointer;
                            &:hover{
                                color: #D6000F;
                            }
                        }
                    }
                }

            }
            .noData{
                height: 4rem;
                .no_data{
                    width: 2rem;
                    height: 2rem;
                    margin-top: 1.5rem;
                    margin-left: 1rem;
                    background: url("../../static/rent/RentList/no_listdata.png") center no-repeat;
                    background-size: 100% 100%;
                    float: left;
                }
                .no_Data_info{
                    margin-left: .5rem;
                    float: left;
                    .proposal{
                        margin-top: .3rem;
                        p{
                            line-height: .3rem;
                            font-size: .16rem;
                            color: #ffa000;
                        }
                    }
                }
                .no_mag{
                    margin-top: 1.5rem;
                    padding: .16rem;
                    border-radius: .04rem;
                    background: #e8e8e8;
                    font-size: .2rem;
                }
            }
        }
        .pagination{
            height: .6rem;
            margin-top: 1rem;
            padding-left: 1.5rem;
        }

    }

}


</style>
<style lang="less">
    .rentList{
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
