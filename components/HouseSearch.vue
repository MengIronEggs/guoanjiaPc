<style scoped lang="less">
    .filtrate-type{
        width: 100%;
        // margin-top:15px;
        padding: 0.05rem 0;
        line-height: .4rem;
            border-bottom:1px solid #ccc;
        .type{
            float: left;
            font-weight: 700;
            margin-left:.05rem;
        }
        .house-type-ul{

            margin: 0 .15rem;
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
                padding: 0 .1rem;
                text-align: center;
                // margin-right: 10px;
                // padding:3px;
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
                width: 90%;
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
                    // position: relative;
                    // margin-top:5px;
                    &:hover{
                        color:#c9161c;
                    }
                }
            }
        }
    }
    .filtrate-move{
        width: 100%;
        // margin:15px 0;
        overflow: hidden;
        // border-bottom: 1px dashed #ccc;
        padding-top:.02rem;
        box-sizing: border-box;
        .move{
            float: left;
            display: block;
            font-weight: 700;
            margin-left:.05rem;
            line-height:  .4rem;
            padding-right: .15rem;
        }
        .no-limit{
            width: auto;
            line-height: .4rem;
            float:left;
            margin-left:.01rem;
            cursor:pointer;
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
            width: 1.4rem;
        }
        .checked-type{
            width: auto;
            padding-top:.14rem;
            vertical-align: middle;
            position: relative;
            .checkbox{
                vertical-align: middle;
                // margin-top: .04rem;
            }
        }
    }

    .filtrate-subway{
        .house-type-ul{
            .subway-definite{
                top:106%;
            }
            .twoline{
                top:100%;
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
                    <span class="region-name" :class="{redColor:isTypeLimit}" >不限</span>
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
                    <span class="region-name" :class="{redColor:isRegionLimit}" >不限</span>
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
        <div class="filtrate-type filtrate-subway">
            <div class="type">地铁:</div>
            <ul class="house-type-ul  clearfix">

                <li  class="no-limit"  @click="subwayLimitClick">
                    <span class="region-name" :class="{redColor:isSubwayLimit}" >不限</span>
                </li>
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
                    <span class="region-name" :class="{redColor:isRentLimit}" >不限</span>
                </li>
                <li v-for="(item,index) in priceList" :key="index" class="area-list"  @click="rentClick(index,item)">
                    <span class="region-name" :class="{redColor:index===isRentType}">
                        {{item}}
                    </span>
                </li>
                <li class="no-limit"></li>
                <li class="no-limit">
                    <input class="search" v-model="minRent"  onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" oninput="if(value.length>5)value=value.slice(0,5)" ></input>&nbsp;—
                    <input class="search" v-model="maxRent"  onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" oninput="if(value.length>5)value=value.slice(0,5)"  ></input>
                    <!-- <el-button type="danger" size="small" @click="rentSucceed" class="suecss">确认</el-button> -->
                    <button class="btn" @click="rentSucceed">确认</button>
                </li>
            </ul>
        </div>
        <div class="filtrate-type">
            <span class="type">居室:</span>
            <ul class="house-type-ul clearfix">
                <li  class="no-limit"  @click="roomLimitClick">
                    <span class="region-name" :class="{redColor:isRoomLimit}" >不限</span>
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
                    <span class="region-name" :class="{redColor:isAreaLimit}" >不限</span>
                </li>
                <li v-for="(item,index) in size" :key="index" class="area-list"  @click="allAreaClick(index,item.type)">
                    <span class="region-name" :class="{redColor:index===isAreaType}">
                        {{item.type}}
                    </span>
                </li>

            </ul>
        </div>
        <div class="filtrate-move"  @click.stop="typeLimitClick"  v-if="isReady">
            <span class="move">更多:</span>
            <div class="no-limit" >
                <span class="region-name" :class="{redColor:isTypeLimit}">不限</span>
            </div>
            <div class="aspect heating-type" v-if="isReady">
                <el-select v-model="HouseListData.roommateSex" filterable placeholder="室友性别" size="small" @change="genderChange">
                    <el-option
                    v-for="item in genderList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div class="aspect heating-type">
                <el-select v-model="HouseListData.roommateConstellation" filterable placeholder="室友星座" size="small" @change="constellationChange">
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
            <div class="aspect">
                <el-select v-model="HouseListData.orientation" filterable placeholder="朝向" size="small" @change="orientationChange">
                    <el-option
                    v-for="item in orientationList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="aspect checked-type" v-for="(item,index) in productList" :key="index">
                <input  type="checkbox" :value="item" v-model="item.isCheck" @click.stop="selectProduct(item)" class="checkbox">
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
        props:["size","HouseListData"],

        data() {
            return {
                keyWards:"",
                QuyuTop:"51",//区域 li的样式
                SubWayTop:"50",//地铁li样式
                isReady:false,
                productType:[{id:'0019001',type:"合租",},{id:'0019002',type:"整租"},{id:'0019003',type:"国安Home"}],
                //点击变色时用的
                isAreaType:"",    //面积
                isType:"",
                isRegionType:"",
                isSubwayType:"",
                isRentType:"",
                isRoomType:"",
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
                dynamicTags:{
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
                    roommateSex:"1"
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


            // if(value){
            //     let rent = "";
            //     if(value.priceValue){
            //         value.priceValue = value.priceValue.split(",")
            //         this.minRent  = value.priceValue[0] || "";
            //         this.maxRent = value.priceValue[1]==0? 10000 : value.priceValue[1];
            //         if(this.minRent && this.maxRent){
            //             rent = this.minRent + "~" + this.maxRent;
            //         }
            //     }

            //     if(value.subwayLineHtmlRight == "不限"){
            //         value.subwayLineHtmlRight = "";
            //         value.subwayLineIdRight = "";
            //     }
            //     if(value.threePopupHtmlRight == "不限"){
            //         value.threePopupHtmlRight = "";
            //         value.threePopupAreaidRight = "";
            //     }
            //     this.dynamicTags={
            //         type:value.productType || "",
            //         region:value.threePopupHtml || "",
            //         district:value.threePopupHtmlRight || "",
            //         subway:value.subwayLineHtml || "",
            //         stations:value.subwayLineHtmlRight || "",
            //         rent: rent,
            //         room:value.roomNo || "",
            //         area:value.userArea || "",
            //         regionId:value.threePopupAreaid || "",
            //         districtId:value.threePopupAreaidRight || "",
            //         subwayId:value.subwayLineId || "",
            //         stationsId:value.subwayLineIdRight || "",
            //         textSearch:value.textSearch || "",
            //         roommateSex:this.HouseListData.roommateSex

            //     };
            //     if(value.name){
            //         if(value.name == "海淀" || value.name ==  "朝阳" || value.name ==  "西城" || value.name ==  "通州" ){
            //             this.post("common/getAreaList",{}).then((res)=>{
            //                 return  res.data;
            //             }).then(res=>{
            //                 res.forEach((item,index) =>{
            //                     if(item.name == value.name){
            //                         this.dynamicTags.regionId =  item.id;
            //                         this.dynamicTags.region = item.name;
            //                         this.isRegionType = index;
            //                         this.isRegionLimit = false;
            //                         this.$emit("changeHouseType",this.dynamicTags);
            //                     };
            //                 })
            //             })
            //         }else if (value.name == "呼家楼" || value.name ==  "国贸"){
            //             this.post("common/getSubwayLine",{}).then((res)=>{
            //                 return  res.data;
            //             }).then(res=>{
            //                 res.sort(this.compare("name")).forEach((item,index) =>{
            //                     this.post("common/getStationLine",{
            //                             subwayId: item.id
            //                         }).then((res)=>{
            //                             res.data.forEach(item=>{
            //                                 if(item.name == value.name){
            //                                     this.dynamicTags.stationsId =  item.id;
            //                                     this.dynamicTags.stations = item.name;
            //                                     this.isSubwayType = index;
            //                                     this.isSubwayLimit = false;
            //                                     this.$emit("changeHouseType",this.dynamicTags);
            //                                     window.location.href = window.location.href.slice(0,num)
            //                                     return;
            //                                 };
            //                             })
            //                     })
            //                 })
            //             })
            //         }else {
            //              this.dynamicTags.textSearch = value.name;
            //              this.$emit("changeHouseType",this.dynamicTags);

            //         }
            //     }
            //     if(value.productType){
            //         switch(value.productType){
            //             case "0019001":
            //                 this.isType =0
            //             break;
            //             case "0019002":
            //                 this.isType =1
            //             break;
            //             case "0019003":
            //                 this.isType =2
            //             break;
            //             default:
            //                 break;
            //         }
            //         // if(value.productType == "0019001"){
            //         //     this.isType =0;
            //         // }else if(value.productType == "0019002"){
            //         //     this.isType =1;
            //         // }else if(value.productType == "0019003"){
            //         //     this.isType =2;
            //         // }
            //         this.isTypeLimit = false;
            //         this.isTypeLimitTmp = this.isTypeLimit

            //     }
            //     if(value.roomNo){
            //         this.roomNo.forEach((element,index) => {
            //             if(element.type==value.roomNo){
            //                 this.isRoomType = index;
            //                 this.isRoomLimit = false;
            //             }
            //         })
            //     }
            //     if(value.userArea){
            //         this.size.forEach((element,index) => {
            //             if(element.type==value.userArea){
            //                 this.isAreaType = index;
            //                 this.isAreaLimit = false;
            //             }
            //         })
            //     }
            //     if(value.threePopupHtml || value.threePopupHtml){
            //         this.isRegionType = value.threePopupIndex -1;
            //         this.isRegionLimit = false;
            //     }
            //     if(value.subwayLineHtml || value.subwayLineHtmlRight){
            //         this.isSubwayType = value.subwayLineIndex - 1;
            //         this.isSubwayLimit = false;
            //     }
            //     this.$emit("changeHouseType",this.dynamicTags);
            //     window.location.href = window.location.href.slice(0,num)
            // }
        },
        methods:{
            //朝向
            orientationChange(data){
                this.HouseListData.orientation = data;
                var data = data;
                switch(data){
                    case "0011001":
                        data = "南北";
                    break;
                    case "0011002":
                        data = "南";
                    break;
                    case "0011003":
                        data = "东南";
                    break;
                    case "0011004":
                        data = "西";
                    break;
                    case "0011005":
                        data = "东";
                    break;
                    case "0011006":
                        data = "北";
                    break;
                    case "0011007":
                        data = "暗";
                    break;
                    default:
                    break;
                }
                this.isTypeLimit = false;
                this.isTypeLimitTmp = this.isTypeLimit
                this.$emit("changeHouseType",this.dynamicTags);



                // if(this.selectkMove.length===0){
                //     this.selectkMove.push(data)
                // }else{
                //     this.orientationList.forEach((item,index)=>{
                //         if(this.selectkMove.indexOf(item.label)!==-1){
                //             this.selectkMove.splice(this.selectkMove.indexOf(item.label),1)
                //         }
                //     })
                //     this.selectkMove.push(data)
                // }
                // this.currentPage = 1;



            },
            // 性别
            genderChange(){

                console.log(this.HouseListData.roommateSex)
                // switch(data){
                //     case "1":

                //         this.HouseListData.roommateSex = "1";
                //     break;
                //     case "0":

                //         this.HouseListData.roommateSex = "0";
                //     break;
                //     case "2":

                //         this.HouseListData.roommateSex = "2";
                //     break;
                //     default:
                //     break;
                // }

                this.$emit("changeHouseType",this.dynamicTags);

                // if(this.selectkMove.length===0){
                //     this.selectkMove.push(data)
                // }else{
                //     this.genderList.forEach((item,index)=>{
                //         if(this.selectkMove.indexOf(item.label)!==-1){
                //             this.selectkMove.splice(this.selectkMove.indexOf(item.label),1)
                //         }
                //     })
                //     this.selectkMove.push(data)
                // }
                // this.currentPage = 1;

            },
            //星座
            constellationChange(data){
                this.isTypeLimit = false;
                this.isTypeLimitTmp = false;

                this.HouseListData.roommateConstellation = data;
                this.$emit("changeHouseType",this.dynamicTags);
            },
            //多选框
            selectProduct(item,index){

                // console.log(1111,this.HouseListData.roommateSex)
                // this.checkbox = index;
                // if(this.dynamicTags.indexOf(item)===-1){
                //     // this.dynamicTags.push(item);
                //     this.isTypeLimit = false;
                //     if(item==="3D实景"){
                //         this.HouseListData.lookUrl = true;
                //     }else if (item ==="独卫"){
                //         this.HouseListData.hasIndieRestRoom = true;
                //     }else if(item ==="独立阳台"){
                //         this.HouseListData.hasVeranda = true;
                //     }
                // }else{
                //     // this.dynamicTags.splice(this.dynamicTags.indexOf(item),1);
                //     // if(this.dynamicTags.length===0 && this.selectkMove.length===0){
                //     //     this.isTypeLimit = true;
                //     // }
                //     if(item==="3D实景"){
                //         this.HouseListData.lookUrl = false;
                //     }else if (item ==="独卫"){
                //         this.HouseListData.hasIndieRestRoom = false;
                //     }else if(item ==="独立阳台"){
                //         this.HouseListData.hasVeranda = false;
                //     }
                // }


                this.isTypeLimit = true;
                this.HouseListData.lookUrl = true;
                this.HouseListData.hasIndieRestRoom = true;
                this.HouseListData.hasVeranda = true;
                this.productList.forEach(its=>{
                    if(its.isCheck){
                        bool = true;
                        if(its.val=="3D实景"){
                            this.HouseListData.lookUrl = false;
                        }
                        if(its.val=="独卫"){
                            this.HouseListData.hasIndieRestRoom = false;
                        }
                        if(its.val=="独立阳台"){
                            this.HouseListData.hasVeranda = false;
                        }
                        this.isTypeLimit = false;
                    }
                })

                this.$emit("changeHouseType",this.dynamicTags);



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
                 if(index<=12){
                     this.QuyuTop = "51"
                 }else{
                     this.QuyuTop = "99"
                 }
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
                if(index<=10){
                    this.SubWayTop = "50"
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

                this.dynamicTags.type=type
                this.$emit("changeHouseType",this.dynamicTags);
             },
             //区域
             regionClick(index,type,id){
                 this.isRegion = true;
                this.isRegionType = index;
                this.isRegionLimit = false;
                this.dynamicTags.region = type;
                this.dynamicTags.regionId=id
                this.dynamicTags.district = "";
                this.dynamicTags.districtId = "";
                this.$emit("changeHouseType",this.dynamicTags);
             },
             //区域内地址点击
             districtClick(type,id){
                this.isRegionLimit = false;
                this.isRegionType = this.isRegionDistrict;
                this.dynamicTags.region = this.mousedistrict;
                this.dynamicTags.regionId=this.mousedistrictId;
                this.dynamicTags.district = type;
                this.dynamicTags.districtId = id;
                this.$emit("changeHouseType",this.dynamicTags);
             },
             //区域内全部点击
             districtAllClick(){
                this.isRegionType = this.isRegionDistrict
                this.dynamicTags.region = this.mousedistrict;
                this.dynamicTags.regionId= this.mousedistrictId;
                this.dynamicTags.district = "";
                this.dynamicTags.districtId = "";
                this.$emit("changeHouseType",this.dynamicTags);
             },
             //地铁
             subwayClick(index,type,id){
                this.isSubwayType = index;
                this.isSubwayLimit = false;
                this.dynamicTags.stations = "";
                this.dynamicTags.stationsId = "";
                this.dynamicTags.subway = type;
                this.dynamicTags.subwayId=id
                this.$emit("changeHouseType",this.dynamicTags);
             },
             //地铁内车站点击
             stationsClick(type,id){
                this.isSubwayLimit = false;
                this.isSubwayType = this.isStations;
                this.dynamicTags.subway = "";
                this.dynamicTags.subwayId=""
                this.dynamicTags.stations = type;
                this.dynamicTags.stationsId = id;
                this.$emit("changeHouseType",this.dynamicTags);
             },
             //地铁内全部车站点击
             stationsAllClick(){
                this.isSubwayType = this.isStations;
                this.dynamicTags.subway = this.mouseStations ;
                this.dynamicTags.subwayId=this.mouseStationsId;
                this.dynamicTags.stations = "";
                this.dynamicTags.stationsId = "";
                this.$emit("changeHouseType",this.dynamicTags);
             },
             //租金
             rentClick(index,type){
                this.isRentType = index;
                this.isRentLimit = false;
                this.dynamicTags.rent = type;
                this.$emit("changeHouseType",this.dynamicTags);
             },
             rentSucceed(){
                if(this.minRent == "" || this.maxRent==""){
                    return false;
                }
                this.dynamicTags.rent = this.minRent + "~" + this.maxRent;
                this.$emit("changeHouseType",this.dynamicTags);
             },
             //居室
             roomClick(index,type){
                this.isRoomType = index;
                this.isRoomLimit = false;
                this.dynamicTags.room = type;
                this.$emit("changeHouseType",this.dynamicTags);
             },
             //面积筛选
            allAreaClick(index,type){
                this.isAreaType = index;
                this.isAreaLimit = false;
                this.dynamicTags.area = type;
                this.$emit("changeHouseType",this.dynamicTags);
             },
             //类型不限
            typeLimitClick(){
                 this.isType = "";
                 this.isTypeLimit = !this.isTypeLimit;
                 this.isTypeLimitTmp = this.isTypeLimit
                 this.dynamicTags.type = "";
                 this.$emit("changeHouseType",this.dynamicTags);
             },
              //区域不限
            regionLimitClick(){
                 this.isRegionType = "";
                 this.isRegionLimit = !this.isRegionLimit;
                 this.dynamicTags.region = "";
                 this.dynamicTags.regionId = "";
                 this.dynamicTags.district = "";
                 this.dynamicTags.districtId = "";
                 this.$emit("changeHouseType",this.dynamicTags);
             },
              //地铁不限
            subwayLimitClick(){
                 this.isSubwayType = "";
                 this.isSubwayLimit = !this.isSubwayLimit;
                 this.dynamicTags.subway = "";
                 this.dynamicTags.stations = "";
                 this.dynamicTags.stationsId = "";
                 this.dynamicTags.subwayId="";
                 this.$emit("changeHouseType",this.dynamicTags);
             },
              //租金不限
            rentLimitClick(){
                 this.isRentType = "";
                 this.isRentLimit = !this.isRentLimit;
                 this.dynamicTags.rent = "";
                 this.$emit("changeHouseType",this.dynamicTags);
             },
              //居室不限
            roomLimitClick(){
                 this.isRoomType = "";
                 this.isRoomLimit = !this.isRoomLimit;
                 this.dynamicTags.room = "";
                 this.$emit("changeHouseType",this.dynamicTags);
             },
               //面积不限
            areaLimitClick(){
                 this.isAreaType = "";
                 this.isAreaLimit = !this.isAreaLimit;
                 this.dynamicTags.area = "";
                 this.$emit("changeHouseType",this.dynamicTags);
             },
            //  //全部清除
            clear(type){
                if(type){
                    switch (type){
                    case "type":
                        this.isType = "",
                        this.dynamicTags.type="";
                        this.isTypeLimit=true;    //类型不限
                        this.isTypeLimitTmp = this.isTypeLimit
                    break;
                    case "region":
                        this.isRegionType = "",
                        this.dynamicTags.region = "";
                        this.dynamicTags.regionId = "";
                        this.dynamicTags.district = "";
                        this.dynamicTags.districtId = "";

                        this.isRegionLimit=true;    //区域不限
                    break;
                    case "subway":
                        this.isSubwayType = "",
                        this.dynamicTags.subway = "";
                        this.dynamicTags.stations = "";
                        this.dynamicTags.stationsId = "";
                        this.dynamicTags.subwayId="";
                        this.isSubwayLimit=true;    //地铁不限
                    break;
                    case "rent":
                        this.isRentType = "",
                        this.dynamicTags.rent=""
                        this.isRentLimit=true;    //租金不限
                    break;
                    case "room":
                        this.isRoomType = "",
                        this.dynamicTags.room=""
                        this.isRoomLimit=true;    //居室不限

                    break;
                    case "area":
                        this.isAreaType = "",
                        this.dynamicTags.area=""
                        this.isAreaLimit=true;    //面积不限
                    break;
                    };
                }else{
                    this.isAreaType = "";
                    this.isRoomType = "";
                    this.isRentType = "";
                    this.isSubwayType = "";
                    this.isRegionType = "";
                    this.isType = "";
                    this.isTypeLimit=true,    //类型不限
                    this.isTypeLimitTmp = this.isTypeLimit

                    this.isRegionLimit=true,    //区域不限
                    this.isSubwayLimit=true,    //地铁不限
                    this.isRentLimit=true,    //租金不限
                    this.isRoomLimit=true,    //居室不限
                    this.isAreaLimit=true,    //面积不限
                    this.dynamicTags = {
                        type:"",
                        region:"",
                        subway:"",
                        rent:"",
                        room:"",
                        area:"",
                    }
                }


                // this.dynamicTags.splice(0,this.dynamicTags.length);
            },
        },
    //     directives:{

    //         mouse:{
    //             inserted: function (el) {
    //                  this.el.style.color = '#fff'
    //             }
    // 　　　　}
    // 　　},
        computed:{
            isRegion(){
                return this.isRegionDefinite;
            },
            isSubway(){
                return this.isSubwayDefinite;
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
            }
        }
    }
</script>
