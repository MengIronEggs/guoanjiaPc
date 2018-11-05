<style scoend lang="less">
        .map-house{
            width: 100%;
            height:100%;
            .header{
                width: 100%;
                height: 60px;
                font-size:16px;
                padding: 14px 0px 10px 0px;
                min-width: 980px;
                overflow: hidden;
                .login{
                    width: 144px;
                    height: 100%;
                    float: left;
                    margin-left: 10px;
                    a{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        background: url('../../static/rent/rentIndex/title-logo.png') no-repeat left top;
                        background-size: 80%;
                    }
                }
                .header-search{
                    position: relative;
                    float: left;
                    width: 210px;
                    margin-right: 20px;
                    .downList{
                        width: 223px;
                        position:fixed;
                        top:48px;
                        left:153px;
                        z-index:1000;
                        background: white;
                        border-radius: 5px;
                        border:1px solid #ccc;
                        // border-bottom: 1px solid #ddd;
                        border-top:none;
                        box-sizing: border-box;
                        ul{
                            width: 100%;
                            li{
                                width: 100%;
                                height: 30px;
                                font-size: 15px;
                                line-height: 30px;
                                text-indent: 15px;
                                cursor: pointer;
                            }
                            li:hover{
                                background-color: #f7f7f7;
                            }
                        }
                    }
                    .search{
                        width:210px;
                        border:1px solid #ccc;
                        border-radius: 5px;
                        height: 32px;
                        padding-left:10px;
                        line-height: 32px;
                        font-size:12px;
                    }
                    .iconsearch{
                        background:url("../../static/rent/rentIndex/search_01.jpg") no-repeat;
                        width: 25px;
                        height: 23px;
                        position: absolute;
                        top:6px;
                        right:0px;
                        color:#c9161c;
                    }
                }
                .aspect{
                    float: left;
                    margin-right:20px;
                    width: 106px;
                    .price-class{
                        width: 106px;
                    }
                    .iconclear{
                        margin-top:10px;
                        display:inline-block;
                        width: 20px;
                        height: 37px;
                        background:url("../../static/rent/rentIndex/clear.png") no-repeat;
                        background-size: 100%;
                        vertical-align: middle;
                    }
                }
                .heating-type{
                    width: 140px;
                    color:#8e8e8e;
                    cursor:pointer;
                    font-size: 14px;
                    margin-top: -3px;
                }
                .logon{
                    float: right;
                    height: 42px;
                    line-height: 42px;
                    font-size: 16px;
                    margin-right: 50px;
                    cursor:pointer;
                    .loginhover{
                        &:hover{
                            color:#c9141c;
                        }
                    }
                    .loginimg{
                        width: 50px;
                        vertical-align: middle;
                    }
                    .userlist{
                        position: fixed;
                        z-index: 100000;
                        background-color: #fff;
                        text-align: center;
                        width: 180px;
                        .url-list{
                            &:hover{
                                background-color:#f5f5f5;
                            }
                        }
                    }
                    .userlogin{
                        width: 180px;
                    }
                }
                .logonchange{    //1198
                    display: none;
                }
                .ContentHeader-box-right-right{
                    width:180px;
                    height:100%;
                    float: right;
                    margin-left:200px;
                    margin-top: -5px;
                    img{
                        float: left;
                        width:30px;
                        height:30px;
                        margin-right:4px;
                        margin-top:12px;
                    }
                    p{
                        float:left;
                        color:#c91419;
                        font-size:18px;
                        line-height:54px;
                        font-weight:600;
                    }
                }
                .changewidth{   //1469
                    margin-left: 0px;
                }
                .changetwowidth{    //1369
                    display: none;
                }
            }
            .map-house-list{  //房源列表
                width: 100%;
                border-top: 1px solid #ccc;
                box-sizing: border-box;
                // margin-top: -82px;
                // padding: 0px 30px;
                
                .house-list{
                    width: 450px;
                    // float: left;
                    position: absolute;;
                    left:0px;
                    border-right: 1px solid #ccc;
                    transition: left 1s;
                    .ctrl{
                        width: 50px;
                        height: 100%;
                        background-color: #000;
                        display:inline-block;
                        float: left;
                        position: relative;
                        z-index: 10;
                        .region-area{
                            width: 50px;
                            height: 50px;
                            // background-color: red;
                            text-align: center;
                            line-height: 50px;
                            color:#fff;
                            z-index: 11;
                            cursor: pointer;
                            font-size: 14px;
                            padding-top:10px;
                            box-sizing: content-box;
                            .regin-icon{
                                width: 15px;
                                height: 15px;
                                display:block;
                                background:url("../../static/rent/rentIndex/city.png") no-repeat;
                                background-size: 100%;
                                margin: 0px 0px -14px 17.5px;
                            }
                        }
                        .subway{
                            width: 50px;
                            height: 50px;
                            // background-color: red;
                            text-align: center;
                            line-height: 50px;
                            color:#fff;
                            z-index: 11;
                            cursor: pointer;
                            font-size: 14px;
                            box-sizing: content-box;
                            .subway-icon{
                                width: 15px;
                                height: 15px;
                                display:block;
                                background:url("../../static/rent/rentIndex/subway.png") no-repeat;
                                background-size: 100%;
                                margin: 0px 0px -14px 17.5px;
                            }
                        }
                        .diamond{
                            position: absolute;
                            width: 50px;
                            height: 50px;
                            background-color: red;
                            z-index: -1;
                            top:0px;
                            transition: top 1s;
                        }
                        .diamond1{
                            top:50px;
                        }
                    }
                    #out{
                        width: 400px;
                        overflow: hidden;
                        // margin-left: 50px;
                        position: absolute;
                        top: 76px;
                        left:50px;
                        #box{
                            width: 9px;
                            height: 100%;
                            position: relative;
                            left: 391px;
                            top: 0;
                            background: #ccc;
                        }
                        #drag{
                            width: 9px;
                            height: 30%;
                            background: #000;
                            position: absolute;
                            top: 0;
                            opacity: .5;
                            filter: alpha(opacity=50);
                            border-radius: 5px;
                            z-index: 3;
                            cursor: pointer;
                        }
                        .inithieht{
                            height: 30%;
                        }
                    }
                    .house-ul{
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        height: auto;
                        width: 400px;
                        cursor: pointer;
                        // height: 650px;
                        // overflow-y: auto;
                    }

                    .house-ul-list{
                        width: 100%;
                        height: 185px;
                        border-bottom:1px solid #e4e4e4;
                        // margin-bottom:10px;
                        // margin-right:60px;
                        overflow: hidden;
                        box-sizing: border-box;
                        padding:0px 0px 0px 10px;
                        // margin-left:5px;
                        &:hover{
                            background-color: #f3f3f3;
                        }
                        .image-left{
                            float: left;
                            margin-top:15px;
                            .pull-left{
                                display: inline-block;
                                width: 193px;
                                height: 147px;
                                cursor:pointer;
                            }
                        }
                        .list-right{
                            float: left;
                            margin: 15px 0 0 10px;
                            width: 180px;
                            div:nth-child(1){
                                width: 100%;
                                font-weight: 500;
                                font-size: 18px;
                                cursor:pointer;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                                &:hover{
                                    color:#c9161c;
                                }
                            }
                            .area{
                                color:#a1a1a1;
                                margin-top:15px;
                                font-size: 16px;
                            }
                            .orientation{
                                margin-top:15px;
                                color:#a1a1a1;
                                font-size:16px;
                            }
                            .rent{
                                font-size: 18px;
                                margin-top:10px;
                                color:#cf0505;
                            }
                            .money{
                                font-size: 35px;
                            }
                        }
                    }
                    .header-list{
                        border-radius: 5px 5px 0 0 ;
                        width: 273px;
                        height: 34px;
                        line-height: 34px;
                        
                        margin-left: 50px;
                        font-size: 14px;
                        cursor:pointer;
                         background-color: #f9f9f9;
                        .filtrate-left{
                            border-bottom:1px solid #cccccc;
                            // float:left;
                            .default-sort{
                                display:inline-block;
                                width: 106px;
                                height: 34px;
                                line-height: 34px;
                                text-align: center;
                                border-right:1px solid #ccc;
                            }
                            .price-sort{
                                display:inline-block;
                                width: 78px;
                                height: 34px;
                                line-height: 34px;
                                // margin-left: -2px;
                                text-align: center;
                                border-right:1px solid #ccc;
                            }
                            .area-sort{
                                display:inline-block;
                                width: 78px;
                                height: 34px;
                                line-height: 34px;
                                // margin-left: -4px;
                                text-align: center;
                                background-color: #f9f9f9;
                                border-right:1px solid #ccc;
                            }
                            .defaultclass{
                                background-color: #fff;
                                color:#c9161c;
                            }
                            .priceclass,.areaclass{
                                background-color: #fff;
                                color:#c9161c;
                            }
                        }
                    }
                    .search-result{
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        background-color: #fefeee;
                        border-bottom:1px solid #ccc;
                        font-size: 14px;
                        .search-result-text{
                            display:inline-block;
                            margin-left: 20px;
                        }
                    }
                    .regloin{
                        position: absolute;
                        width: 400px;
                        height: 100%;
                        top:0px;
                        left:50px;
                        opacity: 1;
                        background-color: #fff;
                    }
                    .btn{
                        position: absolute;
                        z-index: 3;
                        top: 50%;
                        bottom: 0;
                        right: -13px;
                        width: 12px;
                        height: 52px;
                        margin-top: -2px;
                        cursor: pointer;
                        color: #8d939a;
                        background-color: #fff;
                        border: 1px solid #a6a6a6;
                        text-shadow: 0 0 1px #8d939a;
                        text-indent: 2px;
                        border-left: none;
                        &::before{
                            content: '\3c';
                            font-weight: 900;
                            font-size: 14px;
                            line-height: 50px;
                        }
                    }
                    .btnright{
                        position: absolute;
                        z-index: 3;
                        top: 50%;
                        bottom: 0;
                        right: -9px;
                        width: 12px;
                        height: 52px;
                        margin-top: -2px;
                        cursor: pointer;
                        color: #8d939a;
                        background-color: #fff;
                        border: 1px solid #a6a6a6;
                        text-shadow: 0 0 1px #8d939a;
                        text-indent: 2px;
                        &::before{
                            content: '\3e';
                            font-weight: 900;
                            font-size: 14px;
                            line-height: 50px;
                        }
                    }
                }
                .houseLeft{
                    left:-450px;
                }
                //无数据时样式
                .no-data{
                    overflow:hidden;
                    height: auto;
                    position: relative;
                    z-index: 100;
                    .data-content{
                        width: 81%;
                        height: 70px;
                        font-size: 16px;
                        padding: 10px 0px 0px 10px;
                        line-height: 30px;
                        margin: 60px auto;
                        background-color: #e8e8e8;
                        border-radius: 10px;
                        text-align: left;
                    }
                    .no-data-img{
                        float: left;
                        width: 160px;
                        height: 180px;
                        margin:40px 15px 0 10px;
                        background: url("../../static/rent/rentIndex/no_listdata.png") no-repeat;
                        background-size:100%;
                        margin-left:30px;
                    }
                    .no-data-content{
                        float: left;
                        margin-top:30px;
                        font-size: 14px;
                        .no-data-hint{
                            margin:25px 0 0 10px;
                            color:#ffa000;
                            li{
                                margin-top:10px;
                            }
                        }
                    }
                }
            }
            .page-path{
                height: 20px;
                font-size: 15px;
                color: #010300;
                line-height: 10px;
                cursor:pointer;
            }
        }
</style>
<template>
    <div class="map-house">
        <div class="header">
            <h2 title="国安家租房" class="login">
                <a href="https://www.guoanfamily.com/"></a>
            </h2>
             <div class="header-search">
                <div class="downList" v-if="downshow">
                    <ul>
                        <li v-for="(item,index) in dowmlist" :key="index" @click="setinvalue(item)" @mouseenter="invalutenter(item,index)">{{item.name}}</li>
                    </ul>
                </div>
                <input class="search" placeholder="请输入区域、小区名开始找房..."  v-model="HouseListData.textSearch" 
                    @keydown="enterClick" 
                    :oninput="getResult()"
                    @blur="blurFunc"
                    @focus="focusFunc"/>
                <i class="iconsearch" @click="textSearch"></i>
            </div>
             <div class="aspect" v-if="noSSR">
                <el-select v-model="price" filterable placeholder="价格" size="small" class="price-class" @change="priceSearch">
                    <el-option
                        v-for="(item,index) in prices"
                        :key="index"
                        :label="item.label"
                        :value="item.label"
                        >
                    </el-option>
                </el-select>
            </div>
            <div class="aspect" v-if="noSSR">
                <el-select v-model="houseType" filterable placeholder="户型" size="small" @change="areaSearch">
                    <el-option
                        v-for="(item,index) in houseTypes"
                        :key="index"
                        :label="item.label"
                        :value="item.label">
                    </el-option>
                </el-select>
            </div>
            <div class="aspect" v-if="noSSR">
                <el-select v-model="houseArea" filterable placeholder="面积" size="small" @change="houseAreaSearch">
                    <el-option
                        v-for="(item,index) in houseAreaList"
                        :key="index"
                        :label="item.label"
                        :value="item.label">
                    </el-option>
                </el-select>
            </div>
            <div class="aspect" v-if="noSSR">
                <el-select v-model="scope" filterable placeholder="范围" size="small" @change="scopeSearch" v-show="isshowScope">
                    <el-option
                        v-for="(item,index) in scopeList"
                        :key="index"
                        :label="item.label"
                        :value="item.label">
                    </el-option>
                </el-select>
            </div>
            <div class="aspect heating-type" @click="ClearAll">
                <span class="iconclear"></span> 
                <span>清空全部条件</span>
            </div>
            <div class="logon" :class="{logonchange:loginchange}">
                <span class="loginhover" v-if="succeed" @click="loginClick">登录</span>
                <div v-if="!succeed" class="userlogin" @mouseenter="userenter" @mouseleave="userLeave">
                    <div>
                        <img :src="this.logoImg" alt="" class="loginimg">
                        <span>{{realName}}</span>
                    </div>
                    <div class="userlist" v-if="mylist">
                        <p class="url-list" v-for="(item,index) in listvalue" :key="index" @click="myContentHeaderList(item)">{{item.name}}</p>
                    </div>
                </div>
            </div>
             <div class="ContentHeader-box-right-right" :class="{changewidth:changewidth,changetwowidth:changetwowidth}">
                <img src="../../static/rent/rentIndex/call.png" alt="">
                <p>400-900-2225</p>
            </div>
        </div>
        
        <!--页面路径-->
        <div class="page-path" style="color: #333333 !important;padding-left: 5px;">
            <a class="aLink" @click="searchBtn1">首页</a><i class="el-icon-arrow-right arrowLink"></i><a class="aLink" @click="searchBtn2" >房源列表</a><i class="el-icon-arrow-right arrowLink"></i>
        </div>
        <div class="map-house-list">
            <div class="house-list" :class="{houseLeft:isHouseLeft}">
                <div class="ctrl" >
                    <ol style="padding:0;">
                        <li class="region-area" @mouseenter.stop="regionOver" @mouseleave.stop="regionLeave" @click.stop="regionClick">
                            <i class="regin-icon"/>
                            <span>区域</span>    
                        </li>
                        <li class="subway" @mouseenter.stop="subwayOver" @mouseleave.stop="subwayLeave" @click.stop="subwayClick">
                            <i class="subway-icon"/>
                            <span>地铁</span> 
                        </li>
                    </ol>
                    <div class="diamond" :class="{diamond1:isdiamond1}"></div>
                </div>
                <div class="search-result" >
                    <span class="search-result-text" v-if="SubwaySearch">为您找到<span style="color:red;">{{totalPageNo}}</span>套临近地铁的房源</span>
                    <span class="search-result-text" v-if="!SubwaySearch">为您找到该区域共<span style="color:red;">{{totalPageNo}}</span>套房源</span>
                </div>
                <div class="header-list">
                    <div class="filtrate-left">
                        <div class="default-sort" :class="{defaultclass:defaultClass}" @click="defaultSort">默认排序</div>
                        <div class="price-sort" @click="priceSort" :class="{priceclass:priceClass}" >价格
                            <i v-if="!priceUpDown" class="el-icon-arrow-down"></i>
                            <i v-if="priceUpDown" class="el-icon-arrow-up"></i>
                        </div>
                        <div class="area-sort" @click="areaSort" :class="{areaclass:areaClass}" >面积
                            <i v-if="!areaUpDown" class="el-icon-arrow-down"></i>
                            <i v-if="areaUpDown" class="el-icon-arrow-up"></i>
                        </div>
                    </div>
                </div>
                <div id="out" @mouseenter="scrollover" @mouseleave="scrollLeave" @mousewheel="scorllWheel">
                    <ul class="house-ul" v-if="!isData" @scroll="houseScroll" id="con">
                        <li class="house-ul-list" v-for="(item,index) in HouseLists" :key="index" @click="goHouseDetail(item.id,item.productType)">
                            <div class="image-left">
                                <img class="pull-left" :src="item.image || noDetailImg" :alt="item.communityName">
                            </div>
                            <div class="list-right">
                                <div :title="item.communityName||''">{{item.communityName}}&nbsp;&nbsp;{{item.houseName==="东大桥店"?item.roomFloor:item.roomName}}{{item.roomNumber||""}}</div>
                                <div class="area">{{item.houseName==="东大桥店"?item.roomFloor:item.buildFloor}}层&nbsp;&nbsp;|&nbsp;{{item.userArea}}㎡</div>
                                <div class="orientation">[朝{{item.orientationName}}-{{item.roomNo}}室{{item.livingNo}}厅-{{item.buildNo}}/{{item.buildFloor}}层]</div>
                                <div class="rent"><span class="money">{{item.price}}</span>/月</div>
                            </div>
                        </li>
                    </ul>
                     <div id="box" v-show="isScrollCss">
                        <p id="drag" @mousedown="dragDown" :style="{inithieht:initHieht}"></p>
                    </div>
                </div>
                <div class="mod-scroll" style="display: none;">
                    <div class="mod-scroll_bar-x" style="left: 0px; display: none;"></div>
                    <div class="mod-scroll_bar-y" style="right: 0px; display: block;"></div>
                    <div class="mod-scroll_thumb-x" style="margin: 0px auto auto 0px; left: 0px; width: 403px; display: none;"></div>
                    <div class="mod-scroll_thumb-y" style="margin: 0px auto auto 0px; height: 339px; right: 0px; display: block;"></div>
                </div>
                <div class="no-data" v-if="isData">
                    <div class="data-content">
                        <span>我们找不到任何与您的搜索条件匹配的结果，但是调整您的搜索条件可能会有所帮助。</span>
                    </div>
                    <div class="no-data-img"></div>
                    <div class="no-data-content">
                        <div class="no-data-hint">
                            <ul>
                                <li>以下是一些建议：</li>
                                <li>1.删除一些筛选条件</li>
                                <li>2.调整您输入的关键词</li>
                                <li>3.请扩大您的搜索范围</li>
                            </ul>
                        </div>
                    </div>
                    <el-button  type="danger" style="width:80%; background-color:#e24e59; color:#fff; margin-left: 40px;" @click="moverClick">继续找房</el-button>
                </div>  
                <!-- 地铁 --> 
                <div class="regloin" v-if="subway">
                    <map-subway :isShow="subway"  @changeSubway="changeSubway" ref="subwayCommpont" :subwayList = "subwayList" ></map-subway>
                </div> 
                <div class="btn" @click="btnClick" :class="{btnright:!btnFalt}"></div> 
            </div>
            <map-heat-map :textSearch="HouseListData" @mapSearchHouse="mapSearchHouse" ref="cangeReigon" :regionSearch="regionSearch" />
        </div>
    </div>
</template>

<script>
import { objFn } from "../../plugins/axios.js";
import HeatMap from "../../components/HeatMap";
import noDetailImg from "../../static/rent/rentIndex/noimgAPP.jpg";
import booked from "../../static/rent/rentIndex/booked.png";   //已预约
import schipol from "../../static/rent/rentIndex/schipol.png"  //已出租
import logoImg from "../../static/rent/rentIndex/centre.png";
import MapSubway from "../../components/Subway";
    export default {
       
        data(){
            return{
                HouseListData:{
                    page: 1,											
                    roomNo: "",											
                    productType: "",											
                    districtId: "",	
                    regionId:"",										
                    communityId: "",											
                    stationsId: "",	
                    subwayLineId:"",										
                    priceMax: "",											
                    priceMin: "",
                    userAreaMax:"",
                    userAreaMin:"",											
                    textSearch: "",											
                    size: 10,
                    sortType:"",
                    asc:"", 
                    screenLog: "",    //西南
                    screenRightLog: "",   //东北
                    screenLeftLat: "",     //西南
                    screenRightLat: "",     //东北
                    distance:"",   //范围
                    longitude:"",
                    latitude:"",
                },	
                isData:false,
                // textSearch:"",
                defaultClass:true,
                priceClass:false,
                areaClass:false,
                priceAsc:true,
                areaAsc:true,
                priceUpDown:false,
                areaUpDown:false,
                bookedUrl:booked,
                schipolUrl:schipol,
                noDetailImg:noDetailImg,
                loading:true,
                isFromHome:false,
                
                SearchMap:false,
                bookedUrl:booked,
                schipolUrl:schipol,
                noDetailImg:noDetailImg,
                price: '',
                houseType:"",
                houseArea:"",
                scope:"",   //范围
                HouseLists:[],
                total:0,
                currentPage:1,
                isSubwayClick:false,
                isRegionClick:true,
                regionSearch:true,    //是否是按区域地图找房
                isScroll:true,
                subway:false,         //显示地铁
                subwayList:[],        //地铁线路
                totalPageNo:"",  // 地铁找房返回的房源总数
                SubwaySearch:false,      //是地铁找房
                btnFalt:true,
                succeed:true,//判断登录显示头像,没登录显示文字
                logoImg:logoImg,//头像显示的图片
                mylist:false,//登录后一定到头像显示下拉
                realName:"",//显示姓名
                phoneNum:"",//显示的电话
                isScrollCss:false,   //滚动条
                isshowScope:false,   //地铁的时候可以按范围查找
                
                screenWidth: true, //宽度
                changewidth:false,
                changetwowidth:false,
                loginchange:false,
                d_bkt:"",   //滚动条距离头部高度
                moveTop:"",
                isdown:false,
                isbottom:false,  //到底只请求一次
                dowmlist:"",
                downshow:false,
                noResult:true,
                searchstr:"",
                endconut:0,
                upconut:0,
                initHieht:false,
                isScope:false,  //范围查找
                isdiamond1:false,
                isHouseLeft:false,
                noSSR:false,
            }
        },
        asyncData(){
            // if (process.BROWSER_BUILD) {
            //     let lib=require('external_library')
            // }
            let prices = [{    //下拉
                value: '选项1',
                label: '不限'
            },{    //下拉
                value: '选项2',
                label: '1500元以下'
            }, {
                value: '选项3',
                label: '1500~2000元'
            }, {
                value: '选项4',
                label: '2000~3000元'
            }, {
                value: '选项5',
                label: '3000~5000元'
            }, {
                value: '选项6',
                label: '5000~6500元'
            },{
                value: '选项7',
                label: '6500~8000元'
            },{
                value: '选项8',
                label: '8000元以上'
            }]
            let houseTypes = [{    //下拉
                value: '选项1',
                label: '不限'
            },{    //下拉
                value: '选项2',
                label: '1居'
            }, {
                value: '选项3',
                label: '2居'
            }, {
                value: '选项4',
                label: '3居'
            }, {
                value: '选项5',
                label: '4居'
            }, {
                value: '选项6',
                label: '4居以上'
            }]
            let houseAreaList=[{    //下拉
                value: '选项1',
                label: '不限'
            },{    //下拉
                value: '选项2',
                label: '10㎡以下'
            }, {
                value: '选项3',
                label: '10-30㎡'
            }, {
                value: '选项4',
                label: '30-50㎡'
            }, {
                value: '选项5',
                label: '50-70㎡'
            }, {
                value: '选项6',
                label: '70-90㎡'
            }, {
                value: '选项7',
                label: '90㎡以上'
            }]
            let scopeList=[{    //下拉
                value: '选项1',
                label: '不限'
            },{    //下拉
                value: '选项2',
                label: '100米'
            }, {    //下拉
                value: '选项2',
                label: '300米'
            },{    //下拉
                value: '选项2',
                label: '500米'
            },{
                value: '选项3',
                label: '800米'
            }, {
                value: '选项4',
                label: '1000米'
            }, {
                value: '选项4',
                label: '2000米'
            }]
            let listvalue = [
                {name:"个人中心",url:"/Mybox/MyLookabout"},
                {name:"我的约看",url:"/Mybox/MyLease"},
                {name:"我的收藏",url:"/Mybox/MyCollection"},
                {name:"退出",url:"7"},
            ]
            return{
                prices,
                houseTypes,
                houseAreaList,
                scopeList,
                listvalue,
            }
        },
        created(){
             //判断有没有token
    //         if(localStorage.getItem("token")){
    //             if(localStorage.getItem("userId") == ""){
    //                 objFn.Axios('common/getUserInfo',{
    //                 }).then((res) =>{
    //                     if(res.code == 0){
    //                         this.succeed = false;
    //                         if(res.data.name ==""){
    //                             this.realName = "客官"
    //                             localStorage.setItem('userName',this.realName); 
    //                         }else{
    //                             this.realName = res.data.name;
    //                             localStorage.setItem('userName',this.realName);
    //                         }
    //                         localStorage.setItem("userId",res.data.userId);
    //                         return false;
    //                     }
    //                 })
    //             }else{
    //                 this.succeed = false;
    //                 this.realName = localStorage.getItem('userName');
    //             }                
    //         }
            // this.$emit("mapChange",true)
            
        },
        mounted () {
            // console.log("===============================",document.body.clientWidth)
            this.noSSR = true;
            this.screenWidth =  document.body.clientWidth; //宽度
            this.changewidth = document.body.clientWidth<=1469;
            this.changetwowidth = document.body.clientWidth<=1369;
            this.loginchange = document.body.clientWidth<=1198;
            this.getHouseList();
            this.getRegionSubway();
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                })()
            }
            if(this.$route.query.subway){
                document.querySelector('diamond').style.top = "50px";
                // $(".diamond").css("top","50px")
                this.isSubwayClick = true;
                this.isRegionClick = false;
                this.subway = true;
                this.regionSearch = false;
                this.SubwaySearch = true;
                this.isScrollCss = false;  //滚动条
            }
        },
        updated(){
            var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            // $('.map-house').css("height",h)
            document.querySelector('.map-house').style.height = h+"px";
            var h2 = h - 86.8;
            var h3 = h - 162.8;
            // $('.map-house-list').css("height",h2)
            document.querySelector('.map-house-list').style.height = h2+"px";
            // $('#out').css("height",h3)
            document.getElementById('out').style.height = h3+"px";
            // console.log()
            // $('#box').css("height",h3)
            document.getElementById('box').style.height = h3+"px";
            // $('.house-list').css("height",h3)
            // $('.ctrl').css("height",h2)
            document.querySelector('.ctrl').style.height = h2+"px";
        },
        methods:{
            searchBtn1(){
        		 this.$router.push({path:'/'})
        	},
        	searchBtn2(){
        		this.$router.push({path:"/rent/rentList"})
        	},
            getResult (e) {//输入事件
                if(this.HouseListData.textSearch!=""){
                    if(this.noResult){
                        this.downshow = true;
                        if(this.searchstr === this.HouseListData.textSearch){
                            //如果相等，则不执行检索接口
                        }else{
                            //如果不相等，则执行检索接口，并且把最新的检索关键字赋值给searchstr
                            objFn.Axios('CommunityController/findCommunityList',"post",{
                            'communityName':this.HouseListData.textSearch
                            },{interfaceType: "RENT_HOUSE"}).then((res) =>{
                                if(res.code===0){
                                    this.dowmlist = res.data.slice(0,9);
                                }
                                
                            })
                            this.searchstr = this.HouseListData.textSearch;
                        }
                    }
                }else{
                    this.downshow = false;
                }
        		
			},
			setinvalue(item){
                this.HouseListData.textSearch = item.name;
                this.$refs.cangeReigon.commitReigon(this.HouseListData);
                this.HouseLists=[];
                this.currentPage = 1;
                this.getHouseList();
            },
            blurFunc(){
				setTimeout(()=>{
					this.downshow = false;
				},200)
				
			},
			focusFunc(){
				// this.downshow = true;
			},
            //获取房源列表
            getHouseList(){
                let Url = "pc/HouseInfoController/getMapHouseList";
                // let req = Object.assign({}, this.HouseListData);
                objFn.Axios(Url,"post",{
                        page: this.currentPage,											
                        roomNo: this.HouseListData.roomNo,																						
                        districtId: this.HouseListData.districtId,	
                        regionId:this.HouseListData.regionId,										
                        communityId: this.HouseListData.communityId,																					
                        priceMax: this.HouseListData.priceMax,											
                        priceMin: this.HouseListData.priceMin,
                        userAreaMax:this.HouseListData.userAreaMax,
                        userAreaMin:this.HouseListData.userAreaMin,											
                        textSearch: this.HouseListData.textSearch,	
                        sortType:this.HouseListData.sortType,
                        asc:this.HouseListData.asc, 	
                        stationsId:this.HouseListData.stationsId,
                        subwayLineId:this.HouseListData.subwayLineId,	
                        screenLeftLog: this.HouseListData.screenLeftLog,    //西南
                        screenRightLog: this.HouseListData.screenRightLog,   //东北
                        screenLeftLat: this.HouseListData.screenLeftLat,     //西南
                        screenRightLat: this.HouseListData.screenRightLat ,
                        size: 10,																
                    },{interfaceType: "RENT_HOUSE"}).then((res)=>{
                        if(res.data.content.length > 0){
                            this.loading = false;
                            this.isData = false;
                            this.isScroll = true;
                            this.total = res.data.totalPageNo;
                            this.pages = Math.ceil(res.data.totalPageNo / 10);
                            res.data.content.forEach(item => {
                                item.tags= item.tags ? item.tags.split(",").slice(0,3) : "";
                                for( var i = 0; i < item.tags.length; i ++){
                                    if(item.tags[i] == ""){
                                        item.tags.splice(i,1)
                                    }
                                }
                                if(item.productType == "0019001"){
                                    if(item.roomRentStatus=="0015001"){
                                        item.image = this.bookedUrl;
                                    }else if(item.roomRentStatus=="0015004"){
                                        item.image = this.schipolUrl;
                                    }else{
                                        item.image = item.image ? objFn.concatFileUrl(item.image,200,180) : "";
                                    }
                                }else if(item.productType=="0019002"){
                                    if(item.houseRentStatus =="0026002"){
                                        item.image = this.bookedUrl;
                                    }else if(item.houseRentStatus =="0026004"){
                                        item.image = this.schipolUrl;
                                    }else{
                                        item.image = item.image ? objFn.concatFileUrl(item.image,200,180) : "";
                                    }
                                }else if(item.productType=="0019003"){
                                    if(item.houseRentStatus =="0026002"){
                                        item.image = this.bookedUrl;
                                    }else if(item.houseRentStatus =="0026004"){
                                        item.image = this.schipolUrl;
                                    }else{
                                        item.image = item.image ? objFn.concatFileUrl(item.image,200,180) : "";
                                    }
                                }
                                this.HouseLists.push(item);    
                            });
                        }else{
                            this.isData = true;
                            // this.HouseLists = [];
                        }
                        this.totalPageNo = res.data.totalPageNo;
                        this.isbottom = false;
                        return res;
                }).then(res=>{
                    if(res.data.content.length!==0){
                        parseFloat
                        // console.log(document.getElementById('con').style.height ,"===", document.getElementById('out').style.height)
                        if(document.getElementById('con').offsetHeight > parseFloat(document.getElementById('out').style.height)){
                            this.isScrollCss = true;
                        }else{
                            this.isScrollCss = false;
                        }
                        if(document.getElementById('con').offsetHeight > parseFloat(document.getElementById('out').style.height)){
                            // var biliy = $("#out").get(0).offsetHeight / $("#con").get(0).offsetHeight;     //小滚动条跟大滚动条的比例   小的除以大的
                            var biliy = document.getElementById('out').offsetHeight / document.getElementById('con').offsetHeight;
                            if(biliy){
                                
                                // $("#drag").css("height",$("#box").height() *biliy);    //设置小滚动条大小 
                                document.getElementById('con').style.height = document.getElementById('box').style.height *biliy;
                            }
                        }
                    }
                })
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
            //获取地铁数据
             getRegionSubway(){
                objFn.Axios("common/getSubwayLine","post",{},{interfaceType: "RENT_HOUSE"}).then((res)=>{
                    res.data = res.data.sort(this.compare("name"))
                    return res.data;
                }).then((res)=>{
                    objFn.Axios("pc/HouseInfoController/getEachSubwayLineHouseCount","post",{
                    },{interfaceType: "RENT_HOUSE"}).then(res2=>{
                        this.subwayList = res.map(item=>{
                            for(var k in res2.data){
                                if(k === item.id){
                                    item.totalNum = res2.data[k].totalNum;
                                }
                            }
                            return item;
                        })
                    })
                })
             },
             //地铁返回数据
            changeSubway(isAreaType){
                this.HouseListData.stationsId = isAreaType.subwayId || "";
                this.HouseListData.subwayLineId = isAreaType.subwayLineId || "";
                if(isAreaType.subwayId || isAreaType.subwayLineId){
                    this.subway = false;
                    this.currentPage = 1;
                    // $('#drag').css("top",0+'px');
                    // $('#con').css("top",0+'px');
                    if(this.HouseLists.length>0){
                        document.getElementById('drag').style.top = '0px';
                        document.getElementById('con').style.top = '0px';
                    }
                    
                    this.HouseLists = [];
                    this.getHouseList();
                }
            },
            //价格
            priceSearch(data){
                if(data=="不限"){
                    this.HouseListData.priceMin = "";
                    this.HouseListData.priceMax = "";
                    // if(this.HouseListData.roomNo == ""){
                        this.$refs.cangeReigon.commitReigon(this.HouseListData);
                        // this.SearchMap = false;
                        // $('#drag').css("top",0+'px');
                        // $('#con').css("top",0+'px');
                        // console.log(document.getElementById('drag').style.top,document.getElementById('con').style.top)
                        if(this.HouseLists.length>0){
                            document.getElementById('drag').style.top = '0px';
                            document.getElementById('con').style.top = '0px';
                        }
                        
                        this.currentPage = 1;
                        this.HouseLists = [];
                        this.getHouseList();
                        return;
                    // }
                }else{
                    let rent = data.split("~");
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
                }
                this.$refs.cangeReigon.commitReigon(this.HouseListData);
                this.SearchMap = true;
                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px');
                if(this.HouseLists.length>0){
                    document.getElementById('drag').style.top = '0px';
                    document.getElementById('con').style.top = '0px';
                }
                this.currentPage = 1;
                this.HouseLists = [];
                this.getHouseList();
            },
            //居室
            areaSearch(data){
                if(data=="不限"){
                    this.HouseListData.roomNo = "";
                    // if(this.HouseListData.priceMin == "" && this.HouseListData.priceMax == ""){
                        this.$refs.cangeReigon.commitReigon(this.HouseListData);
                        this.SearchMap = true;
                        this.currentPage = 1;
                        this.HouseLists = [];
                        this.getHouseList();
                        return;
                    // }
                }else{
                    let rent = data;
                    this.HouseListData.roomNo = data.charAt(0);   
                    if(rent.includes("以上")){
                        this.HouseListData.roomNo = 5;
                    }
                    this.$refs.cangeReigon.commitReigon(this.HouseListData);
                }
                this.SearchMap = true;
                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px');
                if(this.HouseLists.length>0){
                    document.getElementById('drag').style.top = '0px';
                    document.getElementById('con').style.top = '0px';
                }
                this.currentPage = 1;
                this.HouseLists = [];
                this.getHouseList();
                
            },
            //面积
            houseAreaSearch(data){
                if(data=="不限"){
                    this.HouseListData.userAreaMax = "";
                    this.HouseListData.userAreaMin = "";
                    this.$refs.cangeReigon.commitReigon(this.HouseListData);	
                }else{
                    let area = data.split("-");
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
                    this.$refs.cangeReigon.commitReigon(this.HouseListData);
                }
                this.SearchMap = true;
                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px');
                if(this.HouseLists.length>0){
                    document.getElementById('drag').style.top = '0px';
                    document.getElementById('con').style.top = '0px';
                }
                this.currentPage = 1;
                this.HouseLists = [];
                this.getHouseList();
            },
            //范围
            scopeSearch(data){
                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px');
                this.HouseListData.distance = parseInt(data)/1000;
                this.$refs.cangeReigon.scopeSubway(this.HouseListData);	
                this.currentPage = 1;
                this.HouseLists = [];
                objFn.Axios("pc/HouseInfoController/getHouseListNearbyPoint","post",{
                    page: this.currentPage,											
                    roomNo: this.HouseListData.roomNo,																						
                    districtId: this.HouseListData.districtId,	
                    regionId:this.HouseListData.regionId,										
                    communityId: this.HouseListData.communityId,																					
                    priceMax: this.HouseListData.priceMax,											
                    priceMin: this.HouseListData.priceMin,
                    userAreaMax:this.HouseListData.userAreaMax,
                    userAreaMin:this.HouseListData.userAreaMin,											
                    textSearch: this.HouseListData.textSearch,	
                    sortType:this.HouseListData.sortType,
                    asc:this.HouseListData.asc, 	
                    stationsId:this.HouseListData.stationsId,
                    subwayLineId:this.HouseListData.subwayLineId,	
                    longitude: this.HouseListData.longitude,                  //范围查找时加的三个参数
	                latitude: this.HouseListData.latitude,
                    distance:this.HouseListData.distance,  //范围
                    size: 10,										
                },{interfaceType: "RENT_HOUSE"}).then(res=>{
                    if(res.data.length > 0){
                        this.loading = false;
                        this.isData = false;
                        this.isScroll = true;
                        // this.total = res.data.totalPageNo;
                        // this.pages = Math.ceil(res.data.totalPageNo / 10);
                        res.data.forEach(item => {
                            item.tags= item.tags ? item.tags.split(",").slice(0,3) : "";
                            for( var i = 0; i < item.tags.length; i ++){
                                if(item.tags[i] == ""){
                                    item.tags.splice(i,1)
                                }
                            }
                            if(item.productType == "0019001"){
                                if(item.roomRentStatus=="0015001"){
                                    item.image = this.bookedUrl;
                                }else if(item.roomRentStatus=="0015004"){
                                    item.image = this.schipolUrl;
                                }else{
                                    item.image = item.image ? objFn.concatFileUrl(item.image,200,180) : "";
                                }
                            }else if(item.productType=="0019002"){
                                if(item.houseRentStatus =="0026002"){
                                    item.image = this.bookedUrl;
                                }else if(item.houseRentStatus =="0026004"){
                                    item.image = this.schipolUrl;
                                }else{
                                    item.image = item.image ? objFn.concatFileUrl(item.image,200,180) : "";
                                }
                            }else if(item.productType=="0019003"){
                                if(item.houseRentStatus =="0026002"){
                                    item.image = this.bookedUrl;
                                }else if(item.houseRentStatus =="0026004"){
                                    item.image = this.schipolUrl;
                                }else{
                                    item.image = item.image ? objFn.concatFileUrl(item.image,200,180) : "";
                                }
                            }
                            this.HouseLists.push(item);
                        });
                    }else{
                        this.isData = true;
                        // this.HouseLists = [];
                    }
                    this.isbottom = false;
                    return res;
                    // this.totalPageNo = res.data.totalPageNo;
                }).then(res=>{
                    // if(res.data.length!==0){
                    //     if($("#con").height() > $("#out").height()){
                    //         this.isScrollCss = true;
                    //     }else{
                    //         this.isScrollCss = false;
                    //     }
                    //     if($("#con").height() > $("#out").height()){
                    //         var biliy = $("#out").get(0).offsetHeight / $("#con").get(0).offsetHeight;     //小滚动条跟大滚动条的比例   小的除以大的
                    //         if(biliy){
                    //             $("#drag").css("height",$("#box").height() *biliy);    //设置小滚动条大小 
                    //         }
                    //     }
                    // }
                    if(res.data.content.length!==0){
                        // console.log(document.getElementById('con').style.height ,"===", document.getElementById('out').style.height)
                        if(document.getElementById('con').offsetHeight > parseFloat(document.getElementById('out').style.height)){
                            this.isScrollCss = true;
                        }else{
                            this.isScrollCss = false;
                        }
                        if(document.getElementById('con').offsetHeight > parseFloat(document.getElementById('out').style.height)){
                            // var biliy = $("#out").get(0).offsetHeight / $("#con").get(0).offsetHeight;     //小滚动条跟大滚动条的比例   小的除以大的
                            var biliy = document.getElementById('out').offsetHeight / document.getElementById('con').offsetHeight;
                            if(biliy){
                                
                                // $("#drag").css("height",$("#box").height() *biliy);    //设置小滚动条大小 
                                document.getElementById('drag').style.height = document.getElementById('box').style.height *biliy;
                            }
                        }
                    }
                })
            },
            //文字搜索
            textSearch(){
                this.$refs.cangeReigon.commitReigon(this.HouseListData);
                this.SearchMap = true;
                this.dowmlist = false;
                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px');
                if(this.HouseLists.length>0){
                    document.getElementById('drag').style.top = '0px';
                    document.getElementById('con').style.top = '0px';
                }
                this.currentPage = 1;
                this.HouseLists = [];
                this.getHouseList();
            },
            enterClick(e){
                if(this.downshow){
                    if(e.keyCode===40){  //下
                        if(this.endconut > document.querySelector("downList").querySelectorAll("li").length){
                            this.endconut = 0;
                        }
                        this.upconut = this.endconut;
                        document.querySelector("downList").querySelectorAll("li").forEach((item,index)=>{
                            document.querySelector("downList").querySelectorAll("li")[index].style.backgroundColor = "white";
                        })
                        document.querySelector("downList").querySelectorAll("li")[this.endconut].style.backgroundColor = "#f7f7f7";
                        if(this.endconut < document.querySelector("downList").querySelectorAll("li").length){
                            this.HouseListData.textSearch = this.dowmlist[this.endconut].name;
                        }
                        this.noResult = false;
                        this.endconut +=1;
                    }else if(e.keyCode===38){
                        if(this.upconut<=0){
                            this.upconut = document.querySelector("downList").querySelectorAll("li").length;
                        }
                        this.upconut-=1;
                        this.endconut = this.upconut;
                        this.HouseListData.textSearch = this.dowmlist[this.upconut].name;
                        this.noResult = false;
                        document.querySelector("downList").querySelectorAll("li").forEach((item,index)=>{
                            document.querySelector("downList").querySelectorAll("li")[index].style.backgroundColor = "white";
                        })
                        document.querySelector("downList").querySelectorAll("li")[this.endconut].style.backgroundColor = "#f7f7f7";
                    }else if(e.keyCode!==13){
                        this.noResult = true;
                    }
                }
                if(e.keyCode==13){
                    // this.noResult = true;
                    this.dowmlist = false;
                    this.$refs.cangeReigon.commitReigon(this.HouseListData);
                    this.SearchMap = true;
                    // $('#drag').css("top",0+'px');
                    // $('#con').css("top",0+'px');
                     if(this.HouseLists.length>0){
                        document.getElementById('drag').style.top = '0px';
                        document.getElementById('con').style.top = '0px';
                    }
                    this.currentPage = 1;
                    this.HouseLists = [];
                    this.getHouseList();
                }
            },
            invalutenter(item,index){
                document.querySelector("downList").querySelectorAll("li").forEach((item,index)=>{
                    document.querySelector("downList").querySelectorAll("li")[index].style.backgroundColor = "white";
                })
                document.querySelector("downList").querySelectorAll("li")[index].style.backgroundColor = "#f7f7f7";
                this.HouseListData.textSearch = item.name;
                this.noResult = false;
                this.endconut=index;
                this.upconut = index;
            },
            ClearAll(){  //清空筛选
                this.price = "";
                this.houseArea = "";
                this.houseType ="";
                this.scope="";
                this.HouseListData.distance = "";
                this.HouseListData.priceMin = "";
                this.HouseListData.priceMax = "";
                this.HouseListData.roomNo = "";
                this.HouseListData.userAreaMax = "";
                this.HouseListData.userAreaMin = "";
                this.HouseListData.textSearch = "";
                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px');
                 if(this.HouseLists.length>0){
                    document.getElementById('drag').style.top = '0px';
                    document.getElementById('con').style.top = '0px';
                }
                this.currentPage = 1;
                this.HouseLists = [];
                this.getHouseList();
                this.$refs.cangeReigon.commitReigon(this.HouseListData);
            },
            //地图搜索
            mapSearchHouse(data,isScope,scopeHouseCount){
                if(data.isshowScope){
                    this.isshowScope = data.isshowScope;
                }else{
                    this.isshowScope = false;
                }
                if(isScope){   //范围查找返回的总房数 
                    this.isScope = true;
                    this.currentPage = 1;
                    this.totalPageNo = scopeHouseCount;
                    this.HouseListData.communityId = "";
                    this.pages = Math.ceil(scopeHouseCount/10);
                    return;
                }
                this.scope = "";
                this.SearchMap = false;
                this.HouseListData.communityId = data.communityId;
                // this.HouseListData.districtId = data.districtId || "";
                // this.HouseListData.regionId = data.regionId;
                this.HouseListData.stationsId = data.stationsId;
                this.HouseListData.screenLeftLog = data.screenLeftLog,    //西南
                this.HouseListData.screenRightLog = data.screenRightLog,   //东北
                this.HouseListData.screenLeftLat =  data.screenLeftLat,     //西南
                this.HouseListData.screenRightLat = data.screenRightLat,  //东北
                this.HouseListData.longitude = data.longitude;                  
	            this.HouseListData.latitude = data.latitude;
                this.currentPage = 1;
                // $('#drag').css("top",0+'px');
                if(this.HouseLists.length>0){
                    document.getElementById('drag').style.top="0px";
                    // $('#con').css("top",0+'px');
                    document.getElementById('con').style.top="0px";
                }
                
                this.HouseLists = [];
                this.getHouseList();
            },
            //列表点击事件
            goHouseDetail(id,productType){
                if(this.isPublish()){
                    window.open('http://zufang.guoanfamily.com/#/MyDtail?id='+id+'&productType='+productType)
                }else{
                    window.open('http://localhost:8090/#/MyDtail?id='+id+'&productType='+productType)
                }
                // this.$router.push({path:'MyDtail',query:{id:id,productType:productType}})
                // 
            },
            isPublish () {
                return window.location.host.indexOf("guoanfamily.com") !== -1;
            },
            //返回首页
            // goHome(){
            //     this.$router.push({path:'/'})
            // },
            // goHouseList(){
            //     this.$router.push({path:'/HouseList'})
            // },
            //默认排序
            defaultSort(){
                this.defaultClass = true;
                this.priceClass = false;
                this.areaClass = false;
                this.HouseListData.sortType = "0";
                this.currentPage = 1;
                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px'); 
                 if(this.HouseLists.length>0){
                    document.getElementById('drag').style.top="0px";
                    // $('#con').css("top",0+'px');
                    document.getElementById('con').style.top="0px";
                }
                this.HouseLists = [];
                this.getHouseList();
            },
            //价格排序
            priceSort(){
                this.priceAsc = !this.priceAsc;
                this.HouseListData.asc = this.priceAsc;
                this.priceUpDown = !this.priceUpDown;
                this.defaultClass = false;
                this.priceClass = true;
                this.areaClass = false;
                this.HouseListData.sortType = "1";
                this.currentPage = 1;
                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px');
                 if(this.HouseLists.length>0){
                    document.getElementById('drag').style.top="0px";
                    // $('#con').css("top",0+'px');
                    document.getElementById('con').style.top="0px";
                }
                this.HouseLists = [];
                this.getHouseList();
            },
            //面积排序
            areaSort(){
                this.areaAsc = !this.areaAsc
                this.HouseListData.asc = this.areaAsc;
                this.areaClass = true;
                this.areaUpDown = !this.areaUpDown;
                this.defaultClass = false;
                this.priceClass = false;
                this.HouseListData.sortType = "2";
                this.currentPage = 1;
                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px');
                 if(this.HouseLists.length>0){
                    document.getElementById('drag').style.top="0px";
                    // $('#con').css("top",0+'px');
                    document.getElementById('con').style.top="0px";
                }
                this.HouseLists = [];
                this.getHouseList();
            },
            //关闭侧边栏
            btnClick(){
                if(this.btnFalt){
                    // console.log(123)
                    this.btnFalt = false;
                    // $(".house-list").animate({marginLeft:"-445px"});
                    this.isHouseLeft = true;
                    this.$refs.cangeReigon.colseBtn(true);                    
                }else{
                    this.btnFalt = true;
                    // $(".house-list").animate({marginLeft:"0px"});
                    this.isHouseLeft = false;
                    this.$refs.cangeReigon.colseBtn(false);
                }
                
            },
            //登录
            myContentHeaderList(ev){//mylist列表单击选中事件
                if(ev.url == 7){
                    this.succeed = true;
                    this.realName = "";
                    // localStorage.setItem("token","");//清空localstorage
                    // localStorage.setItem("standbyToken","");//清空localstorage
                    // localStorage.setItem("userId","");
                    // localStorage.setItem("collectList","");//清空收藏数组
                    // this.$router.push("/content")//首页
                    return false;
                }
                // Headerurl.$emit('prodsNumChange',ev.url);
                // this.$router.push(ev.url)//首页
                if(this.isPublish()){
                    // this.$router.push(ev.url)//首页
                    window.open('http://zufang.guoanfamily.com/#/'+ev.url)
                }else{
                    window.open('http://localhost:8090/#/'+ev.url)
                }
                this.mylist = false;//关闭列表
            },
            userenter(){
                this.mylist = true;
            },
            userLeave(){
                this.mylist = false;
            },
            loginClick(){
                // this.$router.push({path:"/Login",query:{url:"/content"}});
                if(this.isPublish()){
                    location.href='http://zufang.guoanfamily.com/#/Login?url=/content'
                }else{
                    location.href='http://localhost:8090/#/Login?url=/content';
                }
                
            },
            //方块动画
            regionOver(){
                // $(".diamond").animate({top:"0px"});
                this.isdiamond1 = false;
            },
            regionLeave(){
                if(this.isSubwayClick){
                    // $(".diamond").stop().animate({top:"50px"});
                    this.isdiamond1 = false;
                }else{
                    this.isdiamond1 = true;
                    // $(".diamond").stop().animate({top:"0px"});
                }
            },
            subwayOver(){
                // $(".diamond").stop().animate({top:"50px"});
                this.isdiamond1 = true;
            },
            subwayLeave(){
                if(this.isRegionClick){
                    // $(".diamond").stop().animate({top:"0px"});
                    this.isdiamond1 = false;
                }else{
                    // $(".diamond").stop().animate({top:"50px"});
                    this.isdiamond1 = true;
                }
            },
            subwayClick(){
                this.isSubwayClick = true;
                this.isRegionClick = false;
                this.subway = true;
                this.regionSearch = false;
                this.SubwaySearch = true;
                this.isScrollCss = false;  //滚动条
                this.downshow = false;
                this.noResult = true;
                // $(".diamond").css("top","50px")
                this.isdiamond1 = false;
                //排序
                this.defaultClass = true;
                this.priceClass = false;
                this.areaClass = false;
                this.HouseListData.sortType = "0";
                //筛选项
                this.price = "";
                this.houseArea = "";
                this.houseType ="";
                this.scope="";
                this.HouseListData.distance = "";
                this.HouseListData.priceMin = "";
                this.HouseListData.priceMax = "";
                this.HouseListData.roomNo = "";
                this.HouseListData.userAreaMax = "";
                this.HouseListData.userAreaMin = "";
                this.HouseListData.textSearch = "";
                this.HouseListData.screenLeftLog = "";    //西南
                this.HouseListData.screenRightLog = "";   //东北
                this.HouseListData.screenLeftLat =  "";     //西南
                this.HouseListData.screenRightLat = "";  //东北

                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px');
                if(this.HouseLists.length>0){
                    document.getElementById('drag').style.top = '0px';
                    document.getElementById('con').style.top = '0px';
                }
                this.currentPage = 1;
                this.HouseLists = [];
                this.getHouseList();
                // this.$refs.cangeReigon.commitReigon(this.HouseListData);
            },
            regionClick(){
                this.isScope = false;
                this.subway = false;
                this.isRegionClick = true;
                this.isSubwayClick = false;
                this.regionSearch = true;
                this.SubwaySearch = false;
                this.isshowScope = false;
                this.downshow = false;
                this.noResult = true;
                //排序
                this.defaultClass = true;
                this.priceClass = false;
                this.areaClass = false;
                this.HouseListData.sortType = "0";
                // this.isScrollCss = true;   //滚动条
                // $(".diamond").css("top","0px")
                this.isdiamond1 = true;
                //筛选项
                this.price = "";
                this.houseArea = "";
                this.houseType ="";
                this.scope="";
                this.HouseListData={
                    page: 1,											
                    roomNo: "",											
                    productType: "",											
                    districtId: "",	
                    regionId:"",										
                    communityId: "",											
                    stationsId: "",	
                    subwayLineId:"",										
                    priceMax: "",											
                    priceMin: "",
                    userAreaMax:"",
                    userAreaMin:"",											
                    textSearch: "",											
                    size: 10,
                    sortType:"",
                    asc:"", 
                    screenLeftLog: "",    //西南
                    screenRightLog: "",   //东北
                    screenLeftLat: "",     //西南
                    screenRightLat: ""     //东北
                }
                this.currentPage = 1;
                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px');
                 if(this.HouseLists.length>0){
                    document.getElementById('drag').style.top = '0px';
                    document.getElementById('con').style.top = '0px';
                }
                this.HouseLists = [];
                this.getHouseList();
            },
            houseScroll(){
                // var beforeScrollTop = $(".house-ul").scrollTop();
                // if($(".house-ul").scrollTop()/($(".house-ul").get(0).scrollHeight -$(".house-ul").height())>=1){ //到达底部100px时,加载新内容  
                //     if(this.isScroll){
                //         this.currentPage +=1;
                //         this.isScroll = false;
                //         if(this.currentPage <= this.pages){
                //             // $(".house-ul").scrollTop(0)
                //             this.getHouseList();
                //         }
                       
                //     }
                // }  
            },
            scrollover(ev){
                // parseFloat()
                if(document.getElementById('con').offsetHeight > parseFloat(document.getElementById('out').style.height)){
                    this.isScrollCss = true;
                }
                var str=window.navigator.userAgent.toLowerCase();
                if (str.indexOf('firefox')!=-1) {
                var scorllFirefox = document.getElementById('out');
                scorllFirefox.addEventListener('DOMMouseScroll',(e)=>{
                    var out=document.getElementById('out');
                    var con=document.getElementById('con');
                    var box=document.getElementById('box');
                    var drag=document.getElementById('drag');
                    // var dragHeight = $("#drag").height();
                    // var boxHeight = $("#box").height();
                    var dragHeight = document.getElementById('drag').style.height;
                    var boxHeight = document.getElementById('box').style.height;
                    var e=e||window.event;
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else{
                        e.returnValue=false;
                    };
                    if (e.detail<0) {
                       
                        var t=con.offsetTop+20;
                        if (t>=0) {
                            t=0;
                        };
                        if (t<=-(con.clientHeight-out.clientHeight)) {
                            t=-(con.clientHeight-out.clientHeight);
                        };
                        var scale=t/(con.clientHeight-out.clientHeight);
                        var top=scale*(box.clientHeight-drag.clientHeight);
                        // $('#drag').css("top",-top+'px');
                        // $('#con').css("top",t+'px');
                        document.getElementById('drag').style.top = -top+'px';
                        document.getElementById('con').style.top = t+'px';
                    };
                    if (e.detail>0) {
                        var t=con.offsetTop-20;
                        if (t>=0) {
                            t=0;
                        };
                        if (t<=-(con.clientHeight-out.clientHeight)) {
                            t=-(con.clientHeight-out.clientHeight);
                        };
                        var scale=t/(con.clientHeight-out.clientHeight);
                        var top=scale*(box.clientHeight-drag.clientHeight);
                        // $('#drag').css("top",-top+'px');
                        // $('#con').css("top",t+'px');
                        document.getElementById('drag').style.top = -top+'px';
                        document.getElementById('con').style.top = t+'px';
                        if(-top >= boxHeight-dragHeight-1){
                            if(!this.isbottom){
                                this.isbottom = true;
                                this.currentPage +=1;
                                if(this.currentPage <= this.pages){
                                // $(".house-ul").scrollTop(0)
                                    if(this.isScope){
                                        this.scopeSearch();
                                        // $('#drag').css("top",top-50+'px');
                                    }else{
                                        this.getHouseList();
                                        // $('#drag').css("top",top-50+'px');
                                    }
                                        
                                }
                            }
                            return false;
                        }
                    };     
                },false)
                }
            },
            scrollLeave(){
                if(!this.isdown){
                    this.isScrollCss = false;
                }
            },
            dragDown(e){
                var out=document.getElementById('out');
                var con=document.getElementById('con');
                var box=document.getElementById('box');
                var drag=document.getElementById('drag');
                // var dragHeight = $("#drag").height();
                // var boxHeight = $("#box").height();
                var dragHeight = document.getElementById('drag').style.height;
                var boxHeight = document.getElementById('box').style.height;
                if (e.preventDefault) {
                    e.preventDefault();
                } else{
                    e.returnValue=false;
                };
                this.d_bkt=e.clientY-drag.offsetTop;
                document.onmousemove=(ev)=>{
                    var e=ev||window.event;
                    var top=e.clientY-this.d_bkt;
                    if (top<=0) {
                        top=0;
                    };
                    if (top>=box.clientHeight-drag.clientHeight) {
                        top=box.clientHeight-drag.clientHeight;
                    };
                    var scale=top/(box.clientHeight-drag.clientHeight);
                    var cony=scale*(con.clientHeight-out.clientHeight);
                    // $('#drag').css("top",top+'px');
                    // $('#con').css("top",-cony+'px');
                    document.getElementById('drag').style.top = top+'px';
                    document.getElementById('con').style.top = -cony+'px';
                    this.isScrollCss = true;
                    if(top >= boxHeight-dragHeight-1){
                        if(!this.isbottom){
                            this.isbottom = true;
                            this.currentPage +=1;
                            if(this.currentPage <= this.pages){
                            // $(".house-ul").scrollTop(0)
                                this.getHouseList();
                                // $('#drag').css("top",top-50+'px');
                            }
                        }
                        return false;
                    }
                    return false;
                }
                document.onmouseup=function (){
                    this.isScrollCss = false;
                    document.onmousemove=null;
                }
            },
            scorllWheel(ev){
                if(!this.isScrollCss){
                    return;
                }
                var out=document.getElementById('out');
                var con=document.getElementById('con');
                var box=document.getElementById('box');
                var drag=document.getElementById('drag');
                // var dragHeight = $("#drag").height();
                // var boxHeight = $("#box").height();
                var dragHeight = document.getElementById('drag').offsetHeight;
                
                var boxHeight = parseFloat(document.getElementById('box').style.height);
                // console.log(dragHeight,"=====",boxHeight)
                var e=ev||window.event;
                if (e.preventDefault) {
                    e.preventDefault();
                } else{
                    e.returnValue=false;
                };
                if (e.wheelDelta>0) {
                    var t=con.offsetTop+20;
                    if (t>=0) {
                        t=0;
                    };
                    if (t<=-(con.clientHeight-out.clientHeight)) {
                        t=-(con.clientHeight-out.clientHeight);
                    };
                    var scale=t/(con.clientHeight-out.clientHeight);
                    var top=scale*(box.clientHeight-drag.clientHeight);
                    // $('#drag').css("top",-top+'px');
                    // $('#con').css("top",t+'px');
                    console.log(top,t)
                    document.getElementById('drag').style.top = -top+'px';
                    document.getElementById('con').style.top = t+'px';
                };
                if (e.wheelDelta<0) {
                    var t=con.offsetTop-20;
                    if (t>=0) {
                        t=0;
                    };
                    if (t<=-(con.clientHeight-out.clientHeight)) {
                        t=-(con.clientHeight-out.clientHeight);
                    };
                    var scale=t/(con.clientHeight-out.clientHeight);
                    var top=scale*(box.clientHeight-drag.clientHeight);
                    // $('#drag').css("top",-top+'px');
                    // $('#con').css("top",t+'px');
                    document.getElementById('drag').style.top = -top+'px';
                    document.getElementById('con').style.top = t+'px';
                    // console.log(-top >= boxHeight-dragHeight-1)
                    if(-top >= boxHeight-dragHeight-1){
                        if(!this.isbottom){
                            this.isbottom = true;
                            this.currentPage +=1;
                            if(this.currentPage <= this.pages){
                                // $(".house-ul").scrollTop(0)
                                // $('#drag').css("top",top-50+'px');
                                this.getHouseList();
                                
                            }
                        }
                        return false;
                    }
                };   
            },
            moverClick(){
                this.price = "";
                this.houseArea = "";
                this.houseType ="";
                this.scope="";
                this.HouseListData={
                    page: 1,											
                    roomNo: "",											
                    productType: "",											
                    districtId: "",	
                    regionId:"",										
                    communityId: "",											
                    stationsId: "",	
                    subwayLineId:"",										
                    priceMax: "",											
                    priceMin: "",
                    userAreaMax:"",
                    userAreaMin:"",											
                    textSearch: "",											
                    size: 10,
                    sortType:"",
                    asc:"", 
                    screenLeftLog: "",    //西南
                    screenRightLog: "",   //东北
                    screenLeftLat: "",     //西南
                    screenRightLat: ""     //东北
                }
                this.currentPage = 1;
                // $('#drag').css("top",0+'px');
                // $('#con').css("top",0+'px');
                document.getElementById('drag').style.top = 0+'px';
                document.getElementById('con').style.top = 0+'px';
                this.HouseLists = [];
                this.getHouseList();
                if(this.isSubwayClick){
                    this.subway = true;
                }else{
                    this.$refs.cangeReigon.commitReigon(this.HouseListData,true);
                }
                
            }
            // createCss(){
            //     $('#drag').css("height",'30%');
            //     $('#drag').css("top",0+'px');
            //     $('#con').css("top",0+'px');
            // }
        },
        components:{
            "map-heat-map":HeatMap,
            "map-subway":MapSubway
        },
        watch: {
            screenWidth (val) {
                this.screenWidth = val
                if(this.screenWidth<=1530){
                    this.changewidth = true;
                }else{
                    this.changewidth = false;
                }
                if(this.screenWidth<=1369){
                    this.changetwowidth = true;
                }else{
                    this.changetwowidth = false;
                }
                if(this.screenWidth<=1198){
                    this.loginchange = true;
                }else{
                    this.loginchange = false;
                }
            }
        },
    }
</script>