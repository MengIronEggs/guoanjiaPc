<style scoped lang="less">
    .filtrate-type{
        width: 100%;
        // margin-top:15px;
        // padding: 0.05rem 0;
        line-height: .4rem;
            border-bottom:1px solid #ccc;
        .type{
            float: left;
            font-weight: 700;
            margin-left:.05rem;
        }
        .house-type-ul{

            // margin: 0 .15rem;
            padding-left: .32rem;
            position: relative;
            .no-limit{
                width: auto;
                height: .4rem;
                line-height: .4rem;
                float:left;
                margin-left:.1rem;
                cursor:pointer;
                &:hover{
                    color:#c9161c;
                }
                .region-name{
                    padding:.05rem  .08rem;
                    border-radius:5px;
                }
            }
            .btn{
                background-color: #c9161c;
                color: #fff;
                padding: .2em 1em;
                border:none;
                border-radius: .02rem;
                margin: 0;
                cursor: pointer;
            }
            .redColor {
                background-color: #c9161c;
                color: #fff;
                    &:hover{
                        color:#fff !important;
                    }
            }
            .area-list{
                width: auto;
                line-height: .4rem;
                float: left;
                text-align: center;
                cursor:pointer;
                .region-name{
                    padding: 0px .1rem;
                    height: .26rem;
                    display: inline-block;
                    border-radius: 5px;
                    position: relative;
                    line-height: .25rem;
                    &:hover{
                        color:#c9161c;
                    }
                    .triangleup {
                        position: absolute;
                        top: .2rem;
                        left:50%;
                        margin-left:-2.5px;
                        width:0;
                        height:0;
                        border:5px solid;
                        border-color: transparent transparent #ff3300 transparent;
                    }
                    .triangleSubwayUp{
                        position: absolute;
                        top: .2rem;
                        left:50%;
                        margin-left:-2.5px;
                        width:0;
                        height:0;
                        border:5px solid;
                        border-color: transparent transparent #ff3300 transparent ;
                    }
                }
            }
            .region-list{
                position: relative;
                &:hover{
                    color: #c9161c;
                }
            }
            .search{
                width: 1rem;
                height: .3rem;
                border-radius: .05rem;
                border:1px solid #ccc;
                padding-left: .05rem;
            }
            .el-input--small .el-input__inner{
                height: .3rem;

            }
            .suecss{
                background-color: #ca1820;
                border:none;
            }
            .region-definite{
                width: 96%;
                background-color: #fcfcfc;
                border:2px solid #e8e8e8;
                // overflow:hidden;
                border-radius: .1rem;
                padding:.05rem .15rem;
                position: absolute;
                top:97%;
                left:4%;
                font-size:.12rem;
                cursor:pointer;
                z-index: 10;
                .region-definite-ul{
                    padding:0 .15rem .15rem .15rem;
                    font-size: .12rem;
                }
                .region-all{
                    float:left;
                    margin-right: .15rem;
                    color:#333;
                    &:hover{
                        color:#c9161c;
                    }
                }
                .region-definite-list{
                    color:#333;
                    float: left;
                    margin-right:.15rem;
                    &:hover{
                        color:#c9161c;
                    }
                }
            }
        }
    }
    .filtrate-move{
        width: 100%;
        overflow: hidden;
        padding-top:.02rem;
        box-sizing: border-box;
        padding-left:6px;

        .move{
            float: left;
            display: block;
            font-weight: 700;
            line-height:  .4rem;
        }
        .no-limit{
            width: auto;
            line-height: .4rem;
            float:left;
            margin-left:.01rem;
            cursor:pointer;
            &.no-move{
                margin-left:9px;
            }
            &:hover{
                color:#c9161c;
            }
            .region-name{
                padding:.05rem .08rem;
                border-radius:.05rem;
            }
            .redColor {
                background-color: #c9161c;
                color: #fff;
                &:hover{
                    color:#fff !important;
                }
            }
        }
        .aspect{
            float: left;
            margin-left:.2rem;
            width: 1rem;
            color:#333;
        }
        .heating-type{
            margin-top: .07rem;
            width: 1rem;
        }
        .fangxiang{
            margin-top: .07rem;
        }
        .checked-type{
            width: auto;
            padding-top:.1rem;
            vertical-align: middle;
            position: relative;
            .checkbox{
                vertical-align: middle;
                -webkit-appearance: none;
                width: 18px;
                height: 20px;
                display: inline-block;
                background:url('../static/rent/RentList/nocheckbox_03.jpg') no-repeat;
                background-size:100%;
            }
             .checkbox:checked{
                -webkit-appearance: none;
                width: 18px;
                height: 20px;
                border:none;
                background:url('../static/rent/RentList/checkbox_03.jpg') no-repeat;
                background-size: 100%;
             }

        }
    }

    .filtrate-subway{
        &.filtrate-type{
            .house-type-ul{
                padding-left: 0px;
                float: left;
                width: 1070px;
                .subway-definite{
                    top:106%;
                }
                .twoline{
                    top:100%;
                }
                .region-definite{
                    left: 0;
                }
            }
        }


        .Sub_All{
            width: auto;
            height: 0.4rem;
            line-height: 0.4rem;
            float: left;
            margin-left: 0.1rem;
            cursor: pointer;
            .region-name{
                padding: 0.05rem 0.08rem;
                border-radius: 5px;
                &.redColor{
                    background-color: #c9161c;
                    color: #fff;
                }
            }
        }

    }
    .filtrate-rent{
        overflow: hidden;
    }
</style>
<style lang="less">
    .HouseSearch{
        .el-input--small{
            padding-top:.03rem;
            font-size:.13rem;
            .el-input__inner{
                padding: 0 .15rem;
                height: 0.4rem ;
                line-height: 0.38rem;
            }
            .el-input__icon{
                line-height: 0.4rem;
            }
        }
    }
</style>

<template>
    <div class="HouseSearch">
        <div class="filtrate-type" @mouseout.stop="allMouseOut()">
            <span class="type">类型:</span>
            <ul class="house-type-ul clearfix">
                <li  class="no-limit"  @click.stop="typeLimitClick">
                    <span class="region-name" :class="{redColor:isType===9999}" >不限</span>
                </li>
                <li v-for="(item,index) in productType" :key="index" class="area-list"  @click="allTypeClick(index,item.id)">
                    <span class="region-name" :class="{redColor:index===isType}">
                        {{item.type}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="filtrate-type">
            <span class="type">区域:</span>
            <ul class="house-type-ul  clearfix">
                <li  class="no-limit"  @click="regionLimitClick">
                    <span class="region-name" :class="{redColor:isRegionType===9999}" >不限</span>
                </li>
                <li v-for="(item,index) in RegionList" :key="index" class="area-list region-list"  @click.stop="regionClick(index,item.name,item.id)"  @mouseenter.stop="getRegionDefinite(item.id,index,item.name)" @mouseleave.stop="outRegionDefinite(item.id)" ref="getclient">
                    <span class="region-name" :class="{redColor:index===isRegionType}" >
                        {{item.name}}
                        <span :class="{triangleup:index===triangleUp}"></span>
                    </span>
                </li>
                <!--  -->
                <div class="region-definite" :style="`top:${QuyuTop}%`" v-if="isRegion" @mouseenter="mouseRegionDefinite" @mouseleave="mouseRegionall">
                    <span class="region-all" @click="districtAllClick">全部</span>
                    <span v-for="(itemDetails,index) in regionChildList" :key="index" class="region-definite-list" @click="districtClick(itemDetails.name,itemDetails.id)">
                        {{itemDetails.name}}
                    </span>
                </div>
            </ul>
        </div>
        <div class="filtrate-type filtrate-subway clearfix">
            <div class="type">地铁:</div>
            <div  class="Sub_All"  @click="subwayLimitClick">
                <span class="region-name" :class="{redColor:isSubwayType===9999}" >不限</span>
            </div>
            <ul class="house-type-ul  clearfix">
                <li v-for="(item,index) in subwayList" :key="index" class="area-list region-list"  @click.stop="subwayClick(index,item.name,item.id)"  @mouseenter.stop="getSubwayDefinite(item.id,index,item.name)" @mouseleave.stop="outSubwayDefinite()">
                    <span class="region-name" :class="{redColor:index===isSubwayType}" >
                        {{item.name}}
                        <span  :class="{triangleSubwayUp:index===triangleSubwayUp}"></span>
                    </span>
                </li>
                <div class="region-definite subway-definite"  :style="`top:${SubWayTop}%`" v-if="isSubway" @mouseenter.stop="mouseSubwayDefinite" @mouseleave.stop="mouseSubwayall" :class="{twoline:istowline}">
                    <span class="region-all" @click="stationsAllClick">全部</span>
                    <span v-for="(itemDetails,index) in subwayChildList" :key="index" class="region-definite-list" @click="stationsClick(itemDetails.name,itemDetails.id)">
                        {{itemDetails.name}}
                    </span>
                </div>
            </ul>
        </div>
        <div class="filtrate-type filtrate-rent">
            <span class="type">租金:</span>
            <ul class="house-type-ul  clearfix">
                <li  class="no-limit"  @click="rentLimitClick">
                    <span class="region-name" :class="{redColor:isRentType===9999}" >不限</span>
                </li>
                <li v-for="(item,index) in priceList" :key="index" class="area-list"  @click="rentClick(index,item)">
                    <span class="region-name" :class="{redColor:index===isRentType}">
                        {{item}}
                    </span>
                </li>
                <li class="no-limit"></li>
                <li class="no-limit">
                    <input class="search" v-model="minRent"  onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" oninput="if(value.length>5)value=value.slice(0,5)" />&nbsp;—
                    <input class="search" v-model="maxRent"  onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" oninput="if(value.length>5)value=value.slice(0,5)"  />
                    <button class="btn" @click="rentSucceed">确认</button>
                </li>
            </ul>
        </div>
        <div class="filtrate-type">
            <span class="type">居室:</span>
            <ul class="house-type-ul clearfix">
                <li  class="no-limit"  @click="roomLimitClick">
                    <span class="region-name" :class="{redColor:isRoomType===9999}" >不限</span>
                </li>
                <li v-for="(item,index) in roomNo" :key="index" class="area-list"  @click="roomClick(index,item.type)">
                    <span class="region-name" :class="{redColor:index===isRoomType}">
                        {{item.type}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="filtrate-type filtrate-area" @mouseover="allMouseOut()">
            <span class="type">面积:</span>
            <ul class="house-type-ul  clearfix">
                <li  class="no-limit"  @click="areaLimitClick">
                    <span class="region-name" :class="{redColor:isAreaType===9999}" >不限</span>
                </li>
                <li v-for="(item,index) in size" :key="index" class="area-list"  @click="allAreaClick(index,item.type)">
                    <span class="region-name" :class="{redColor:index===isAreaType}">
                        {{item.type}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="filtrate-move"   v-if="isReady">
            <span class="move ">更多:</span>
            <div class="no-limit no-move"  @click.stop="MoreNotAlled">
                <span class="region-name" :class="{redColor:isTypeLimit}">不限</span>
            </div>
            <div class="aspect heating-type" v-if="isReady">
                <el-select v-model="HouseListData.roommateSex" filterable placeholder="室友性别" size="mini" @change="genderChange">
                    <el-option
                    v-for="item in genderList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="aspect heating-type">
                <el-select v-model="HouseListData.roommateConstellation" filterable placeholder="室友星座" size="mini" @change="constellationChange">
                    <el-option
                    v-for="item in constellationList"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label">
                    <span :style="{float: 'left', width:'25px',height:'25px',backgroundSize:'100%',margin:'6px 8px 0px 0px',background:'url('+item.value+') no-repeat'}"></span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.label }}</span>
                    </el-option>
                </el-select>
            </div>
            <div class="aspect fangxiang">
                <el-select v-model="HouseListData.orientation" filterable placeholder="朝向" size="mini" @change="orientationChange">
                    <el-option
                    v-for="item in orientationList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="aspect checked-type" v-for="(item,index) in productList" :key="index">
                <input  type="checkbox"  v-model="item.isCheck" @click.stop="selectProduct(item,index)" class="checkbox">
                <label>{{item.val}}</label>
            </div>
        </div>
    </div>
</template>
<script>
    import { objFn } from "~/plugins/axios.js";
    import Aries from "../static/rent/RentList/Aries.png";
    import Taurus from "../static/rent/RentList/Taurus.png";
    import Gemini from "../static/rent/RentList/Gemini.png";
    import Cancer from "../static/rent/RentList/Cancer.png";
    import Leo from "../static/rent/RentList/Leo.png";
    import Virgo from "../static/rent/RentList/Virgo.png";
    import Libra from "../static/rent/RentList/Libra.png";
    import Scorpio from "../static/rent/RentList/Scorpio.png";
    import Sagittarius from "../static/rent/RentList/Sagittarius.png";
    import Capricorn from "../static/rent/RentList/Capricorn.png";
    import Aquarius from "../static/rent/RentList/Aquarius.png";
    import Pisces from "../static/rent/RentList/Pisces.png";
    export default {
        props:["size","HouseListData2"],
        data() {
            return {
                keyWards:"",
                Navshow:true,
                QuyuTop:"90",//区域 li的样式
                SubWayTop:"50",//地铁li样式
                isReady:false,
                productType:[{id:'0019001',type:"合租",},{id:'0019002',type:"整租"},{id:'0019003',type:"国安Home"}],
                isAreaType:9999,    //面积
                isType:9999,
                isRegionType:9999,
                isSubwayType:9999,
                isRentType:9999,
                isRoomType:9999,
                //点击具体变色
                isRegionDistrict:"",
                mousedistrictId:"",  //移入时获取下ID 点击全部时用
                mousedistrict:"",
                //地铁车站
                isStations : "",
                mouseStationsId : "",
                mouseStations : "",
                RegionList:[],  //区域

                // isRegionDefiniteclass:"", //区域详情
                isRegionDefinite:false,
                addressDefinite:"",  //地址详情
                regionChildList:[],
                AllRegionSubway:{},
                triangleUp:"", //三角
                triangleSubwayUp:"",

                subwayList:[],
                // isSubwayDefiniteclass:"",  //地铁
                isSubwayDefinite:false,
                subwayChildList:[],
                AllSubway:{},

                isTypeLimit:true,    //类型不限
                isTypeLimitTmp:true,//类型不限缓存
                isRegionLimit:true,    //区域不限
                isSubwayLimit:true,    //地铁不限
                isRentLimit:true,    //租金不限
                isRoomLimit:true,    //居室不限
                isAreaLimit:true,    //面积不限
                HouseListData:{
                    type:"",
                    region:"",
                    district:"",
                    subway:"",
                    stations:"",
                    rent:"",
                    room:"",
                    area:"",
                    regionId:"",
                    districtId:"",
                    subwayId:"",
                    stationsId:"",
                    rentId:"",
                    roomId:"",
                    areaId:"",
                    roommateSex:""
                },
                minRent:"",

                maxRent:"",
                priceList:["1500元以下","1500~2000元","2000~3000元","3000~5000元","5000~6500元","6500~8000元","8000元以上"],
                roomNo:[{id:'1',type:"一居",},{id:'2',type:"二居"},{id:'3',type:"三居"},{id:'4',type:"四居"},{id:'5',type:"四居以上"}],
                istowline:false,
                orientationList:[{
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
                ],
                constellationList:[
                    {
                        value: "https://img.guoanfamily.com/rentPC/RentList/Aquarius.png",
                        label: '水瓶座'
                    },{    //下拉
                        value: "https://img.guoanfamily.com/rentPC/RentList/Pisces.png",
                        label: '双鱼座'
                    },  {
                        value: "https://img.guoanfamily.com/rentPC/RentList/Aries.png",
                        label: '白羊座'
                    },{    //下拉
                        value: "https://img.guoanfamily.com/rentPC/RentList/Taurus.png",
                        label: '金牛座'
                    },  {
                        value: "https://img.guoanfamily.com/rentPC/RentList/Gemini.png",
                        label: '双子座'
                    },{    //下拉
                        value: "https://img.guoanfamily.com/rentPC/RentList/Cancer.png",
                        label: '巨蟹座'
                    },  {
                        value: "https://img.guoanfamily.com/rentPC/RentList/Leo.png",
                        label: '狮子座'
                    },{    //下拉
                        value: "https://img.guoanfamily.com/rentPC/RentList/Virgo.png",
                        label: '处女座'
                    },  {
                        value: "https://img.guoanfamily.com/rentPC/RentList/Libra.png",
                        label: '天秤座'
                    },{    //下拉
                        value: "https://img.guoanfamily.com/rentPC/RentList/Scorpio.png",
                        label: '天蝎座'
                    },  {
                        value: "https://img.guoanfamily.com/rentPC/RentList/Sagittarius.png",
                        label: '射手座'
                    },{    //下拉
                        value: "https://img.guoanfamily.com/rentPC/RentList/Capricorn.png",
                        label: '魔蝎座'
                    }
                ],
                genderList:[
                    {    //下拉
                        value: '1',
                        label: '都是帅哥'
                    },{    //下拉
                        value: '0',
                        label: '都是美女'
                    },{    //下拉
                        value: '2',
                        label: '异性空间'
                    },
                ],
                productList:[
                    {
                        isCheck:false,
                        val: '独卫'
                    },{
                        isCheck:false,
                        val: '独立阳台'
                    },{
                        isCheck:false,
                        val: '3D实景'
                    }
                ],
                checkedNames:[],
                selectkMove:[],
                checkbox:100,//被选中的索引值
            }
        },
        created(){


        },
        mounted(){
            this.HouseListData =this.HouseListData2
            this.getRegion();
            this.isReady = true;
            //从官网主页筛选跳过来的带的参数
            let str =  window.location.href; //取得整个地址栏
            var num = str.indexOf("?")
            str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
            let value = ""
            if(str.indexOf("searWords=") == -1 && num !=-1){
                value = JSON.parse(decodeURIComponent(str));

            }
            // 返显示
            this.keyWards = this.$route.query.searWords;
        },
        methods:{
            // 更多的不限
            MoreNotAlled(){
                this.isTypeLimit = true;
                this.HouseListData.orientation = "";
                this.HouseListData.roommateSex="";
                this.HouseListData.roommateConstellation = "";
                this.productList.forEach(item=>{
                    item.isCheck = false;
                });
                this.HouseListData.lookUrl = "";
                this.HouseListData.hasIndieRestRoom = "";
                this.HouseListData.hasVeranda = "";
                this.$emit("changeHouseType",this.HouseListData);
            },
            //朝向
            orientationChange(data){
                this.HouseListData.orientation = data;
                this.dynamicTags = this.HouseListData
                this.$emit("changeHouseType",this.dynamicTags)
            },
            // 性别
            genderChange(){
                this.dynamicTags = this.HouseListData
                if(this.HouseListData.roommateSex){
                    this.isTypeLimit = false
                }
                this.$emit("changeHouseType",this.dynamicTags);
            },
            //星座
            constellationChange(data){
                this.isTypeLimit = false;
                this.isTypeLimitTmp = false;
                this.HouseListData.roommateConstellation = data;
                if(this.HouseListData.roommateConstellation){
                    this.isTypeLimit = false
                }
                this.$emit("changeHouseType",this.HouseListData);
            },
            //多选框
            selectProduct(item,index){
                setTimeout(()=>{
                    this.productList.forEach(its=>{
                        if(its.val ==item.val){
                            its.isCheck = item.isCheck;
                            if(its.val=="3D实景"){
                                this.HouseListData.lookUrl = item.isCheck;
                                this.dynamicTags = this.HouseListData
                                if(this.HouseListData.lookUrl){

                                    this.isTypeLimit = false
                                }
                                this.$emit("changeHouseType",this.dynamicTags);
                            }
                            if(its.val=="独卫"){
                                this.HouseListData.hasIndieRestRoom = item.isCheck;
                                this.dynamicTags = this.HouseListData
                                if(this.HouseListData.hasIndieRestRoom){
                                    this.isTypeLimit = false
                                }
                                this.$emit("changeHouseType",this.dynamicTags);

                            }
                            if(its.val=="独立阳台"){
                                this.HouseListData.hasVeranda =item.isCheck;
                                this.dynamicTags = this.HouseListData
                                if(this.HouseListData.hasVeranda){
                                    this.isTypeLimit = false
                                }
                                this.$emit("changeHouseType",this.dynamicTags);
                            }
                            if(!this.HouseListData.roommateSex
                                &&!this.HouseListData.roommateConstellation
                                &&!this.HouseListData.orientation
                                &&!this.HouseListData.lookUrl
                                &&!this.HouseListData.hasIndieRestRoom
                                &&!this.HouseListData.hasVeranda
                            ){
                                this.isTypeLimit = true;
                            }
                        }

                    })
                },100)




            },
            compare(prop) {
                return function(obj1, obj2) {
                    let val1 = obj1[prop];
                    let val2 = obj2[prop];
                    if (!isNaN(parseInt(val1)) && !isNaN(parseInt(val2))) {
                        val1 = parseInt(val1);
                        val2 = parseInt(val2);
                    }
                    if (val1 < val2) {
                        return -1;
                    } else if (val1 > val2) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            },
            //获取区域和地铁数据
             getRegion(){
                objFn.Axios("agenthouseCutomer/common/getAreaList","post",{},{interfaceType:"PAY"}).then((res)=>{
                    this.RegionList = res.data;
                    if(this.keyWards){
                        this.RegionList.forEach((item,index)=>{
                           if (item.name==this.keyWards){
                                this.isRegionType = index;
                           }

                        })
                    }

                })
                 objFn.Axios("agenthouseCutomer/common/getSubwayLine","post",{},{interfaceType:"PAY"}).then((res)=>{
                    // compare();
                    res.data = res.data.sort(this.compare("name"))
                    this.subwayList = res.data;

                })
             },
             //获取区域具体
             getRegionDefinite(id,index,type){
                 this.QuyuTop = "90"
                //
                // console.log(this.$refs.getclient.screenX,this.$refs.getclient.screenY)
                // var rect = e.target.getBoundingClientRect()
                // this.popup.x = rect.left
                // this.popup.y = rect.top
                // console.log(rect.left , rect.top)
                this.triangleUp = index;
                this.isRegionDistrict = index;
                this.mousedistrictId = id;
                this.mousedistrict = type;
                    let url = "agenthouseCutomer/common/getRegionList"
                    if(this.AllRegionSubway[id] == undefined){
                        objFn.Axios(url,"post",{
                            areaId: id
                        },{interfaceType:"PAY"}).then((res)=>{
                        if(res.data.length>0){

                            this.isRegionDefinite = true;
                        }
                        this.regionChildList = res.data;
                        this.AllRegionSubway[id] = res.data;
                    })
                    }else{

                        this.isRegionDefinite = true;
                        this.regionChildList = this.AllRegionSubway[id];
                    }
             },
             //移出事件
             outRegionDefinite(id){
                this.isRegionDefinite = false;
                this.triangleUp = "";
             },
             //具体区域移入事件
             mouseRegionDefinite(){
                this.isRegionDefinite = true;
             },
             //具体区域移出事件
             mouseRegionall(){
                this.isRegionDefinite = false;
             },
             allMouseOut(){
                 this.isRegionDefinite = false;
                 this.isSubwayDefinite = false;
             },
            //获取地铁信息
            getSubwayDefinite(id,index,type){
                if(index<=15){
                    this.SubWayTop = "48"
                }else{
                    this.SubWayTop = "99"

                }


                this.isStations = index;
                this.triangleSubwayUp = index;
                this.mouseStationsId = id;
                this.mouseStations = type;
                if(index>=16){
                    this.istowline = true;
                }else{
                    this.istowline = false;
                }
                let url = "agenthouseCutomer/common/getStationLine"
                if(this.AllSubway[id] == undefined){
                    objFn.Axios(url,"post",{
                        subwayId: id
                    },{interfaceType:"PAY"}).then((res)=>{
                    if(res.data.length>0){
                        this.isSubwayDefinite = true;
                    }
                    this.subwayChildList = res.data;
                    this.AllSubway[id] = res.data;
                })
                }else{
                    this.isSubwayDefinite = true;
                    this.subwayChildList = this.AllSubway[id];
                }
            },
            outSubwayDefinite(){
                this.isSubwayDefinite = false;
                this.triangleSubwayUp = "";
            },
            mouseSubwayDefinite(){
                this.isSubwayDefinite = true;
            },
            mouseSubwayall(){
                this.isSubwayDefinite = false;
            },
            //类型
             allTypeClick(index,type){
                this.isType = index;
                this.isTypeLimit = false;
                this.isTypeLimitTmp = false;

                this.HouseListData.type=type
                this.$emit("changeHouseType",this.HouseListData);
             },
             //区域
             regionClick(index,type,id){
                this.isRegionDefinite = true;
                this.isRegionType = index;
                this.isRegionLimit = false;
                this.HouseListData.region = type;
                this.HouseListData.regionId=id
                this.HouseListData.district = "";
                this.HouseListData.districtId = "";
                this.$emit("changeHouseType",this.HouseListData);
             },
             //区域内地址点击
             districtClick(type,id){
                this.isRegionLimit = false;
                this.isRegionType = this.isRegionDistrict;
                this.HouseListData.region = this.mousedistrict;
                this.HouseListData.regionId=this.mousedistrictId;
                this.HouseListData.district = type;
                this.HouseListData.districtId = id;
                this.$emit("changeHouseType",this.HouseListData);
             },
             //区域内全部点击
             districtAllClick(){
                this.isRegionType = this.isRegionDistrict
                this.HouseListData.region = this.mousedistrict;
                this.HouseListData.regionId= this.mousedistrictId;
                this.HouseListData.district = "";
                this.HouseListData.districtId = "";
                this.$emit("changeHouseType",this.HouseListData);
             },
             //地铁
             subwayClick(index,type,id){
                this.isSubwayType = index;
                this.isSubwayLimit = false;
                this.HouseListData.stations = "";
                this.HouseListData.stationsId = "";
                this.HouseListData.subway = type;
                this.HouseListData.subwayId=id
                this.$emit("changeHouseType",this.HouseListData);
             },
             //地铁内车站点击
             stationsClick(type,id){
                this.isSubwayLimit = false;
                this.isSubwayType = this.isStations;
                this.HouseListData.subway = "";
                this.HouseListData.subwayId=""
                this.HouseListData.stations = type;
                this.HouseListData.stationsId = id;
                this.$emit("changeHouseType",this.HouseListData);
             },
             //地铁内全部车站点击
             stationsAllClick(){
                this.isSubwayType = this.isStations;
                this.HouseListData.subway = this.mouseStations ;
                this.HouseListData.subwayId=this.mouseStationsId;
                this.HouseListData.stations = "";
                this.HouseListData.stationsId = "";
                this.$emit("changeHouseType",this.HouseListData);
             },
             //租金
             rentClick(index,type){
                this.isRentType = index;
                this.isRentLimit = false;
                this.HouseListData.rent = type;
                this.$emit("changeHouseType",this.HouseListData);
             },
             rentSucceed(){
                if(this.minRent == "" || this.maxRent==""){
                    return false;
                }
                if(this.minRent-0>this.maxRent-0){
                    this.$showErrorTip("查找失败，您输入的最小金额大于最大金额")
                    this.minRent = this.maxRent = ""
                    return false;
                }
                this.HouseListData.rent = this.minRent + "~" + this.maxRent;
                this.$emit("changeHouseType",this.HouseListData);
             },
             //居室
             roomClick(index,type){
                this.isRoomType = index;
                this.isRoomLimit = false;
                this.HouseListData.room = type;
                this.$emit("changeHouseType",this.HouseListData);
             },
             //面积筛选
            allAreaClick(index,type){
                this.isAreaType = index;
                this.isAreaLimit = false;
                this.HouseListData.area = type;
                this.$emit("changeHouseType",this.HouseListData);
             },
             //类型不限
            typeLimitClick(){
                 this.isType = 9999;
                 this.isTypeLimitTmp = this.isTypeLimit
                 this.HouseListData.type = "";
                 this.$emit("changeHouseType",this.HouseListData);
             },
              //区域不限
            regionLimitClick(){
                 this.isRegionType = 9999;
                 this.HouseListData.region = "";
                 this.HouseListData.regionId = "";
                 this.HouseListData.district = "";
                 this.HouseListData.districtId = "";
                 this.$emit("changeHouseType",this.HouseListData);
             },
              //地铁不限
            subwayLimitClick(){
                this.isSubwayType = 9999;
                this.isSubwayLimit = !this.isSubwayLimit;
                this.HouseListData.subway = "";
                this.HouseListData.stations = "";
                this.HouseListData.stationsId = "";
                this.HouseListData.subwayId="";
                this.$emit("changeHouseType",this.HouseListData);
             },
              //租金不限
            rentLimitClick(){
                 this.isRentType = 9999;
                 this.HouseListData.rent = "";
                 this.$emit("changeHouseType",this.HouseListData);
             },
              //居室不限
            roomLimitClick(){
                 this.isRoomType = 9999;
                 this.HouseListData.room = "";
                 this.$emit("changeHouseType",this.HouseListData);
             },
               //面积不限
            areaLimitClick(){
                 this.isAreaType = 9999;
                 this.isAreaLimit = !this.isAreaLimit;
                 this.HouseListData.area = "";
                 this.$emit("changeHouseType",this.HouseListData);
             },
            //  //全部清除
            clear(type){
                if(type){
                    switch (type){
                    case "type":
                        this.isType = 9999,
                        this.HouseListData.type="";
                        this.isTypeLimit=true;    //类型不限
                        this.isTypeLimitTmp = this.isTypeLimit
                    break;
                    case "region":
                        this.isRegionType = 9999,
                        this.HouseListData.region = "";
                        this.HouseListData.regionId = "";
                        this.HouseListData.district = "";
                        this.HouseListData.districtId = "";

                        this.isRegionLimit=true;    //区域不限
                    break;
                    case "subway":
                        this.isSubwayType = 9999,
                        this.HouseListData.subway = "";
                        this.HouseListData.stations = "";
                        this.HouseListData.stationsId = "";
                        this.HouseListData.subwayId="";
                        this.isSubwayLimit=true;    //地铁不限
                    break;
                    case "rent":
                        this.isRentType =9999,
                        this.HouseListData.rent=""
                        this.isRentLimit=true;    //租金不限
                    break;
                    case "room":
                        this.isRoomType = 9999,
                        this.HouseListData.room=""
                        this.isRoomLimit=true;    //居室不限

                    break;
                    case "area":
                        this.isAreaType = 9999,
                        this.HouseListData.area=""
                        this.isAreaLimit=true;    //面积不限
                    break;
                    };
                }else{
                    this.isAreaType = 9999;
                    this.isRoomType = 9999;
                    this.isRentType = 9999;
                    this.isSubwayType = 9999;
                    this.isRegionType =9999;
                    this.isType = 9999;
                    this.isTypeLimit=true,    //类型不限
                    this.isTypeLimitTmp = this.isTypeLimit

                    this.isRegionLimit=true,    //区域不限
                    this.isSubwayLimit=true,    //地铁不限
                    this.isRentLimit=true,    //租金不限
                    this.isRoomLimit=true,    //居室不限
                    this.isAreaLimit=true,    //面积不限
                    this.HouseListData = {
                        type:"",
                        region:"",
                        subway:"",
                        rent:"",
                        room:"",
                        area:"",
                    }
                }
            },
        },
        computed:{
            isRegion(){
                return this.isRegionDefinite;
            },
            isSubway(){
                return this.isSubwayDefinite;
            },
            NavChange(){
                return this.$store.state.rentList.change;
            }
        },
        watch:{
            isRegionDefinite(){
                if(this.isRegionDefinite){
                    this.isSubwayDefinite = false
                }
            },
            isSubwayDefinite(){
                if(this.isSubwayDefinite){
                    this.isRegionDefinite = false
                }
            },
            NavChange(){
                if(!this.HouseListData.isType){
                    this.isType = 9999
                }
                if(!this.HouseListData.districtId){
                    this.isRegionType = 9999
                }
                if(!this.HouseListData.subwayLineId){
                    this.isSubwayType = 9999
                }
                if(!this.HouseListData.stationsId){
                    this.isSubwayType = 9999
                }
                if(!this.HouseListData.rent){
                    this.HouseListData.priceMin = this.HouseListData.priceMax = this.minRent=this.maxRent="";
                    this.isRentType = 9999
                }
                if(!this.HouseListData.roomNo){
                    this.isRoomType = 9999
                }
                if(!this.HouseListData.userAreaMax&&!this.HouseListData.userAreaMin){
                    this.isAreaType = 9999
                }
                if(!this.HouseListData.lookUrl){
                    this.productList[2].isCheck = false
                }else{
                    this.productList[2].isCheck = true
                }
                if(!this.HouseListData.hasIndieRestRoom){
                    this.productList[0].isCheck = false
                }
                 if(!this.HouseListData.hasVeranda){
                    this.productList[1].isCheck = false
                }
                if(!this.HouseListData.roommateSex
                    &&!this.HouseListData.roommateConstellation
                    &&!this.HouseListData.orientation
                    &&!this.HouseListData.lookUrl
                    &&!this.HouseListData.hasIndieRestRoom
                    &&!this.HouseListData.hasVeranda
                ){
                    this.isTypeLimit = true;
                    this.productList.forEach(item=>{
                        item.isCheck = false
                    })
                }




            }

        }
    }
</script>
