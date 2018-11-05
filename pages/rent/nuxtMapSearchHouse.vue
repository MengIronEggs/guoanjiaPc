<style scoend lang="less">
.map-house {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  .header {
    width: 100%;
    height: 0.8rem;
    font-size: 0.16rem;
    border-bottom: 1px solid #e4e4e4;
    display: flex;
    text-align: center;
    min-width: 980px;
    // overflow: hidden;
    .regloin {
      position: absolute;
      width: 2.4rem;
      min-height: 4rem;
      max-height: 8rem;
      // min-width: 6;
      top: .94rem;
      left: 0rem;
      opacity: 1;
      z-index: 200;
    }
    .house-map{
      height: 100%;
      width: 2.4rem;
      line-height: .8rem;
      position: relative;
      // z-index: 1000;
      border-right: 1px solid #e4e4e4;
      cursor: pointer;
    }
    .regin-icon {
      width: 0.2rem;
      height: 0.2rem;
      display: block;
      background: url("../../static/rent/mapSearchHouse/map1.png") no-repeat;
      background-size: 100%;
      position: absolute;
      left: .5rem;
      top: .29rem;
    }
    .reginicon2{
      color:#f1081e;
      i{
        background: url("../../static/rent/mapSearchHouse/map2.png") no-repeat;
      }
      
    }
    .subway-icon {
      width: 0.2rem;
      height: 0.2rem;
      display: block;
      background: url("../../static/rent/mapSearchHouse/subway1.png") no-repeat;
      background-size: 100%;
      position: absolute;
      left: .5rem;
      top: .29rem;
    }
    .subwayicon2{
      color:#f1081e;
      i{
        background: url("../../static/rent/mapSearchHouse/subway2.png") no-repeat;
      }
      
    }
    .header-search {
      position: relative;
      float: left;
      width: 5rem;
      border-right: 1px solid #e4e4e4;
      input::-webkit-input-placeholder{
          color:#000;
      }
      input::-moz-placeholder{   /* Mozilla Firefox 19+ */
          color:#000;
      }
      input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
          color:#000;
      }
      input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
          color:#000;
      }
      .downList {
        width: 3.8rem;
        position: fixed;
        top: 0.96rem;
        z-index: 1000;
        background: white;
        border-top: none;
        box-sizing: border-box;
        ul {
          width: 80%;
          li {
            width: 100%;
            height: 0.3rem;
            font-size: 0.15rem;
            line-height: 0.3rem;
            text-indent: 0.15rem;
            cursor: pointer;
          }
          li:hover {
            background-color: #f7f7f7;
          }
        }
      }
      .search {
        width: 100%;
        height: 100%;
        border: none;
        padding-left: 0.2rem;
        line-height: 0.62rem;
        font-size: 0.12rem;
      }
      .iconsearch {
        background: url("https://img.guoanfamily.com/rentPC/indexPage/search.png") no-repeat;
        width: 0.35rem;
        height: 0.33rem;
        position: absolute;
        top: 0.3rem;
        right: 0.38rem;
        color: #c9161c;
        cursor: pointer;
      }
    }
    .aspect {
      width: 1.2rem;
      border-right: 1px solid #e4e4e4;
      height: 100%;
      float: left;
      display: block;
      position: relative;
      // select {
      //   border: none;
      //   outline: none;
      //   width: 1.2rem;
      //   height: 0.4rem;
      //   line-height: 0.4rem;
      //   font-size: .12rem;
      //   padding-left: 60px;
      // }
    }
    .aspect /deep/ .el-select {
        width: 100%;
        height: 100%;
        .el-input--suffix{
          height: 100%;
          .el-input__inner{
            height: 100%;
            border: none;
            padding-left: .3rem;
          }
          .el-input__suffix{
            right: .2rem;
          }
        }
      }
    .heating-type {
      float: left;
      width: 1.8rem;
      color: #8e8e8e;
      line-height: .8rem;
      cursor: pointer;
      font-size: 0.2rem;
      margin-top: -3px;
      .iconclear {
        margin-top: 0.1rem;
        display: inline-block;
        width: 0.3rem;
        height: 0.4rem;
        background: url("../../static/rent/mapSearchHouse/clear.png") no-repeat;
        background-size: 100%;
        vertical-align: middle;
      }
    }
  // .logon {
    //   float: right;
    //   height: 0.43rem;
    //   line-height: 0.43rem;
    //   font-size: 0.24rem;
    //   margin-right: 1rem;
    //   cursor: pointer;
    //   .loginhover {
    //     &:hover {
    //       color: #c9141c;
    //     }
    //   }
    //   .loginimg {
    //     width: 50px;
    //     vertical-align: middle;
    //   }
    //   .userlist {
    //     position: fixed;
    //     z-index: 100000;
    //     background-color: #fff;
    //     text-align: center;
    //     width: 180px;
    //     .url-list {
    //       &:hover {
    //         background-color: #f5f5f5;
    //       }
    //     }
    //   }
    //   .userlogin {
    //     width: 180px;
    //   }
    // }
    // .logonchange {
    //   //1198
    //   display: none;
  // }
    .changewidth {
      //1469
      margin-left: 0px;
    }
    .changetwowidth {
      //1369
      display: none;
    }
  }
  .map-house-list {
    //房源列表
    width: 100%;
    box-sizing: border-box;
    position: relative;
    .submask{ // 遮罩
      width: 100%;
      height: 100%  ;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(40, 40, 40, .5);
      z-index: 100;
    }
    .house-list {
      width: 4.8rem;
      float: left;
      position: relative;
      // margin-right:-6rem;
      border-right: 1px solid #ccc;
      .ctrl {
        // width: 0.7rem;
        // height: 100%;
        // background-color: #000;
        // display: inline-block;
        // float: left;
        // position: relative;
        // z-index: 10;
        // .region-area {
        //   width: 0.7rem;
        //   height: 0.7rem;
        //   // background-color: red;
        //   text-align: center;
        //   line-height: 0.7rem;
        //   color: #fff;
        //   z-index: 11;
        //   cursor: pointer;
        //   padding-top: 0.1rem;
         
        // }
        // .subway {
        //   width: 0.7rem;
        //   height: 0.7rem;
        //   // background-color: red;
        //   text-align: center;
        //   line-height: 0.7rem;
        //   color: #fff;
        //   z-index: 11;
        //   cursor: pointer;
        //   padding-top: 0.1rem;
          
        // }
        // .diamond {
        //   position: absolute;
        //   width: 0.7rem;
        //   height: 0.7rem;
        //   background-color: red;
        //   z-index: -1;
        //   top: 0px;
        // }
      }
      #out {
        width: 4.3rem;
        overflow: hidden;
        position: absolute;
        top: 1.25rem;
        left: .5rem;
        #box {
          width: .1rem;
          height: 100%;
          position: relative;
          left: 4.1rem;
          top: 0;
          background: #ccc;
        }
        #drag {
          width: 9px;
          height: 30%;
          background: #000;
          position: absolute;
          top: 0;
          opacity: 0.5;
          filter: alpha(opacity=50);
          border-radius: 5px;
          z-index: 3;
          cursor: pointer;
        }
        .inithieht {
          height: 30%;
        }
      }
      .house-ul {
        position: absolute;
        left: 0px;
        top: 0px;
        height: auto;
        width: 3.8rem;
        cursor: pointer;
      }

      .house-ul-list {
        width: 100%;
        border-bottom: 1px solid #e4e4e4;
        overflow: hidden;
        box-sizing: border-box;
        &:hover {
          background-color: #f3f3f3;
        }
        .image-left {
          float: left;
          margin-top: .25rem;
          .pull-left {
            display: inline-block;
            width: 3.8rem;
            height: 2.5rem;
            cursor: pointer;
          }
        }
        .list-right {
          float: left;
          margin: .2rem 0 .15rem .15rem;
          width: 3.5rem;
          div:nth-child(1) {
            width: 100%;
            font-weight: 500;
            font-size: .26rem;
            font-weight: 600;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover {
              color: #c9161c;
            }
          }
          .cum-address{
            color: #b9b9b9;
            font-size: .16rem;
            margin-top: .1rem;
          }
          .area {
            margin-top: .1rem;
            font-size: .17rem;
          }
          .requirements {
            margin-top: .2rem;
            color: #cf0505;
            font-size: .17rem;
          }
          .rent {
            font-size: 18px;
            margin-top: 10px;
            // color: #cf0505;
          }
          .money {
            font-size: .17rem;
          }
        }
      }
      .lists-house{
        width: 3.8rem;
        height: 1.25rem;
        border-bottom: 1px solid #e4e4e4;
        position: absolute;
        top: 0;
        left: .5rem;
      }
      .header-list {
        width: 4rem;
        height: .3rem;
        line-height: .3rem;
        cursor: pointer;
        // .filtrate-left{
        // float:left;
        .filtrate-sort {
          float: left;
          padding: 0 .1rem;
          height: .3rem;
          line-height: .3rem;
          text-align: center;
          border: 1px solid #ccc;
          margin-right: .14rem;
        }
        
        .defaultclass {
          background-color: #fff;
          color: #c9161c;
        }
        .priceclass,
        .areaclass {
          background-color: #fff;
          color: #c9161c;
        }
        // }
      }
      .search-result {
        width: 100%;
        height: 0.64rem;
        padding-top: .2rem;
        line-height: 0.44rem;
        // background-color: #fefeee;
        .search-result-text {
          display: inline-block;
          margin-left: 3px;
        }
      }
      
      .btn {
        position: absolute;
        z-index: 3;
        top: 50%;
        bottom: 0;
        right: -.3rem;
        width: .3rem;
        height: .7rem;
        cursor: pointer;
        color: #8d939a;
        background-color: #fff;
        border: 1px solid #a6a6a6;
        text-shadow: 0 0 1px #8d939a;
        border-left: none;
        text-align: center;
        &::before {
          content: "\3c";
          font-weight: 900;
          
          font-size: .2rem;
          line-height: .7rem;
        }
      }
      .btnright {
        position: absolute;
        z-index: 3;
        top: 50%;
        bottom: 0;
        right: -.3rem;
        width: .3rem;
        height: .7rem;
        cursor: pointer;
        color: #8d939a;
        background-color: #fff;
        border: 1px solid #a6a6a6;
        text-shadow: 0 0 1px #8d939a;
        &::before {
          content: "\3e";
          font-weight: 900;
          font-size: .2rem;
          line-height: .7rem;
        }
      }
    }
    .houseLeft{
      left:-4.8rem;
    }
    //无数据时样式
    .no-data {
      overflow: hidden;
      height: auto;
      position: absolute;
      top: 1.2rem;
      z-index: 100;
      .data-content {
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
      .no-data-img {
        float: left;
        width: 160px;
        height: 180px;
        margin: 40px 15px 0 10px;
        background: url("https://img.guoanfamily.com/rentPC/mapSearchHouse/no_listdata.png")
          no-repeat;
        background-size: 100%;
        margin-left: 30px;
      }
      .no-data-content {
        float: left;
        margin-top: 30px;
        font-size: 14px;
        .no-data-hint {
          margin: 25px 0 0 10px;
          color: #ffa000;
          li {
            margin-top: 10px;
          }
        }
      }
    }
  }
  // .redactive{
  //   background-color: red;
  // }
  // .page-path {
  //   height: 0.16rem;
  //   color: #010300;
  //   line-height: 0.16rem;
  //   cursor: pointer;
  //   a {
  //     font-size: 0.12rem;
  //   }
  // }
}
</style>
<template>
 <div class="map-house">
    <headeNav :NavActived="4"></headenav>
    <div class="header">
      <div class=" house-map" :class="{reginicon2: isredActive}"  @click.stop="regionClick">
          <i class="regin-icon"/>
          <span>地图找房</span>    
      </div>
      <div class="house-map" :class="{subwayicon2: !isredActive}" @click.stop="subwayClick">
          <i class="subway-icon"/>
          <span>地铁找房</span> 
          <!-- 地铁 --> 
          <div class="regloin" v-show="subway">
              <map-subway :isShow="subway"  @changeSubway="changeSubway"  :subwayList = "subwayList" ></map-subway>
          </div> 
      </div>

      <div class="header-search">
        <!-- downshow -->
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
      <div v-if="isMountedDatas" >
        <div class="aspect">
          <el-select v-model="price" filterable placeholder="价格" size="small" class="price-class" @change="priceSearch">
            <el-option
                v-for="item in prices"
                :key="item.value"
                :label="item.label"
                :value="item.label"
                >
            </el-option>
          </el-select>
        </div>
        <div class="aspect">
          <el-select v-model="houseType" filterable placeholder="户型" size="small" @change="areaSearch">
            <el-option
                v-for="item in houseTypes"
                :key="item.value"
                :label="item.label"
                :value="item.label">
            </el-option>
          </el-select>
        </div>
        <div class="aspect">
            <el-select v-model="houseArea" filterable placeholder="面积" size="small" @change="houseAreaSearch">
                <el-option
                    v-for="item in houseAreaList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                </el-option>
            </el-select>
        </div>
        <div class="aspect" v-show="isshowScope">
            <el-select v-model="scope" filterable placeholder="范围" size="small" @change="scopeSearch" v-show="isshowScope">
                <el-option
                    v-for="item in scopeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                </el-option>
            </el-select>
        </div>
      </div>
      
      <div class="heating-type" @click="ClearAll">
          <span class="iconclear"></span> 
          <span>清空全部条件</span>
      </div>
      <!-- <div class="logon" :class="{logonchange:loginchange}">
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
      </div> -->
    </div>
    <div class="map-house-list" >
        <div v-if="subway" class="submask"></div>
        <div class="house-list" :class="{houseLeft:isHouseLeft}" ref="houseList">
            <div class="ctrl" >
                <div>
                </div>
                <!-- <div class="diamond"></div> -->
            </div>
            <div class="lists-house">
              <div class="search-result" >
                  <span class="search-result-text" v-if="SubwaySearch">为您找到<span style="color:red;">{{totalPageNo}}</span>套临近地铁的房源</span>
                  <span class="search-result-text" v-if="!SubwaySearch">为您找到该区域共<span style="color:red;">{{totalPageNo}}</span>套房源</span>
              </div>
              <div class="header-list">
                  <div class="filtrate-left">
                      <div class="filtrate-sort" :class="{defaultclass:defaultClass}" @click="defaultSort">默认排序</div>
                      <div class="filtrate-sort" @click="priceSort" :class="{priceclass:priceClass}" >价格
                          <i v-if="!priceUpDown" class="el-icon-arrow-down"></i>
                          <i v-if="priceUpDown" class="el-icon-arrow-up"></i>
                      </div>
                      <div class="filtrate-sort" @click="areaSort" :class="{areaclass:areaClass}" >面积
                          <i v-if="!areaUpDown" class="el-icon-arrow-down"></i>
                          <i v-if="areaUpDown" class="el-icon-arrow-up"></i>
                      </div>
                  </div>
              </div>
            </div>
            <div id="out" ref="out" @mouseenter="scrollover" @mouseleave="scrollLeave" @mousewheel="scorllWheel">
                <ul class="house-ul" v-show="!isData" @scroll="houseScroll" id="con" ref="con">
                    <li class="house-ul-list" v-for="item in HouseLists" :key="item.id" @click="goHouseDetail(item.id,item.productType)">
                        <div class="image-left">
                            <img class="pull-left" :src="item.image || noDetailImg" :alt="item.communityName">
                        </div>
                        <div class="list-right">
                            <div :title="item.communityName||''">{{item.communityName}}&nbsp;&nbsp;{{item.houseName==="东大桥店"?item.roomFloor:item.roomName}}{{item.roomNumber||""}}</div>
                            <div class="cum-address">
                              <i class="el-icon-location"></i>
                              {{item.communityAddress}}
                            </div>
                            <div class="area">户型面积：{{item.houseName==="东大桥店"?item.roomFloor:item.buildFloor}}层&nbsp;&nbsp;|&nbsp;{{item.userArea}}㎡ [朝{{item.orientationName}}-{{item.roomNo}}室{{item.livingNo}}厅-{{item.buildNo}}/{{item.buildFloor}}层]</div>
                            
                            <div class="rent"><span class="money">月租均价：{{item.price}}</span>/月</div>
                            <div class="requirements">查看详情 <i class="el-icon-arrow-right"></i></div>
                        </div>
                    </li>
                </ul>
                <div id="box" ref="box" v-show="isScrollCss">
                  <p id="drag" ref="drag" @mousedown="dragDown" :style="{inithieht:initHieht}"></p>
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
            
            <div class="btn" @click="btnClick" :class="{btnright:!btnFalt}"></div> 
        </div>
        <map-heat-map :textSearch="HouseListData" @mapSearchHouse="mapSearchHouse" ref="cangeReigon" :regionSearch="regionSearch" />
        </div>
 </div>
</template>

<script>
import HeatMap from "../../components/HouseListSearch/HeatMap";
import MapSubway from "../../components/HouseListSearch/Subway";
import headeNav from "~/components/headerNav.vue"
//import noDetailImg from "https://img.guoanfamily.com/rentPC/mapSearchHouse/noimgAPP.jpg";
//import booked from "https://img.guoanfamily.com/rentPC/mapSearchHouse/booked.png"; //已预约
//import schipol from "https://img.guoanfamily.com/rentPC/mapSearchHouse/schipol.png"; //已出租
//import logoImg from "https://img.guoanfamily.com/rentPC/mapSearchHouse/centre.png";
import { objFn } from "~/plugins/axios.js";
export default {
  // head: {
	//     script: [
	//       { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
	//     ]
	// },
  data() {
    return {
      prices: [
        {
          //下拉
          value: "选项1",
          label: "不限"
        },
        {
          //下拉
          value: "选项2",
          label: "1500元以下"
        },
        {
          value: "选项3",
          label: "1500~2000元"
        },
        {
          value: "选项4",
          label: "2000~3000元"
        },
        {
          value: "选项5",
          label: "3000~5000元"
        },
        {
          value: "选项6",
          label: "5000~6500元"
        },
        {
          value: "选项7",
          label: "6500~8000元"
        },
        {
          value: "选项8",
          label: "8000元以上"
        }
      ],
      houseTypes: [
        {
          //下拉
          value: "选项11",
          label: "不限"
        },
        {
          //下拉
          value: "选项21",
          label: "1居"
        },
        {
          value: "选项31",
          label: "2居"
        },
        {
          value: "选项41",
          label: "3居"
        },
        {
          value: "选项51",
          label: "4居"
        },
        {
          value: "选项61",
          label: "4居以上"
        }
      ],
      houseAreaList: [
        {
          //下拉
          value: "选项12",
          label: "不限"
        },
        {
          //下拉
          value: "选项22",
          label: "10㎡以下"
        },
        {
          value: "选项32",
          label: "10-30㎡"
        },
        {
          value: "选项42",
          label: "30-50㎡"
        },
        {
          value: "选项52",
          label: "50-70㎡"
        },
        {
          value: "选项62",
          label: "70-90㎡"
        },
        {
          value: "选项72",
          label: "90㎡以上"
        }
      ],
      scopeList: [
        {
          //下拉
          value: "选项13",
          label: "不限"
        },
        {
          //下拉
          value: "选项23",
          label: "100米"
        },
        {
          //下拉
          value: "选项231",
          label: "300米"
        },
        {
          //下拉
          value: "选项232",
          label: "500米"
        },
        {
          value: "选项34",
          label: "800米"
        },
        {
          value: "选项44",
          label: "1000米"
        },
        {
          value: "选项444",
          label: "2000米"
        }
      ],
      HouseListData: {
        page: 1,
        roomNo: "",
        productType: "",
        districtId: "",
        regionId: "",
        communityId: "",
        stationsId: "",
        subwayLineId: "",
        priceMax: "",
        priceMin: "",
        userAreaMax: "",
        userAreaMin: "",
        textSearch: "",
        size: 10,
        sortType: "",
        asc: "",
        screenLeftLog: "", //西南
        screenRightLog: "", //东北
        screenLeftLat: "", //西南
        screenRightLat: "", //东北
        distance: "", //范围
        longitude: "",
        latitude: ""
      },
      isData: false,
      // textSearch:"",
      defaultClass: true,
      priceClass: false,
      areaClass: false,
      priceAsc: true,
      areaAsc: true,
      priceUpDown: false,
      areaUpDown: false,
      bookedUrl: "https://img.guoanfamily.com/rentPC/mapSearchHouse/booked.png",
      schipolUrl: "https://img.guoanfamily.com/rentPC/mapSearchHouse/schipol.png",
      noDetailImg: "https://img.guoanfamily.com/rentPC/mapSearchHouse/noimgAPP.jpg",
      loading: true,
      isFromHome: false,

      SearchMap: false,
      price: "",
      houseType: "",
      houseArea: "",
      scope: "", //范围
      HouseLists: [],
      total: 0,
      currentPage: 1,
      isSubwayClick: false,
      isRegionClick: true,
      regionSearch: true, //是否是按区域地图找房
      isScroll: true,
      subway: false, //显示地铁
      subwayList: [], //地铁线路
      totalPageNo: "", // 地铁找房返回的房源总数
      SubwaySearch: false, //是地铁找房
      btnFalt: true,
      succeed: true, //判断登录显示头像,没登录显示文字
      logoImg: "https://img.guoanfamily.com/rentPC/mapSearchHouse/centre.png", //头像显示的图片
      mylist: false, //登录后一定到头像显示下拉
      realName: "", //显示姓名
      phoneNum: "", //显示的电话
      isScrollCss: false, //滚动条
      isshowScope: false, //地铁的时候可以按范围查找
      listvalue: [
        { name: "个人中心", url: "/Mybox/MyLookabout" },
        { name: "我的约看", url: "/Mybox/MyLease" },
        { name: "我的收藏", url: "/Mybox/MyCollection" },
        { name: "退出", url: "7" }
      ],
      screenWidth: "",
      changewidth: "",
      changetwowidth: "",
      loginchange: "",
      // screenWidth: document.body.clientWidth, //宽度
      // changewidth:document.body.clientWidth<=1469,
      // changetwowidth:document.body.clientWidth<=1369,
      // loginchange:Window.document.body.clientWidth<=1198,
      d_bkt: "", //滚动条距离头部高度
      moveTop: "",
      isdown: false,
      isbottom: false, //到底只请求一次
      dowmlist: "",
      downshow: false,
      noResult: true,
      searchstr: "",
      endconut: 0,
      upconut: 0,
      initHieht: false,
      isScope: false, //范围查找
      isMountedDatas: false, // element 组件mounted之后加载
      isredActive: true, // 是否为活动状态
      isHouseLeft:false, // 是否运动
      $drag: '',
      $con: '',
      $box: '',
      $out: '',
    };
  },
  mounted() {
    if(localStorage.getItem("token")){ //判断有没有token
        if(localStorage.getItem("userId") == "") {
            objFn.Axios(
		        "agenthouseCutomer/common/getUserInfo",
		        "post",
		        {},
                {interfaceType: "RENT_HOUSE"}
            )
            // this.post('common/getUserInfo',{})
                .then((res) =>{
                if(res.code == 0){
                    this.succeed = false;
                    if(res.data.name ==""){
                        this.realName = "客官"
                        localStorage.setItem('userName',this.realName); 
                    }else{
                        this.realName = res.data.name;
                        localStorage.setItem('userName',this.realName);
                    }
                    localStorage.setItem("userId",res.data.userId);
                    return false;
                }
            })
        }else{
            this.succeed = false;
            this.realName = localStorage.getItem('userName');
        }                
    }
    this.$emit("mapChange",true)
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
        this.isSubwayClick = true;
        this.isRegionClick = false;
        this.subway = true;
        this.regionSearch = false;
        this.SubwaySearch = true;
        this.isScrollCss = false;  //滚动条
    }
    this.isMountedDatas = true;
    this.isTypeNavigation()
  },
  updated(){
    this.getMountDoms();
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // $('.map-house').css("height",h)
    document.getElementsByClassName('map-house')[0].style.height = h+"px";
    var h2 = h - 150;
    var h3 = h - 278.5;
    var h4 = parseInt(h2 * 0.9)
    // $('.map-house-list').css("height",h2)
    document.getElementsByClassName('map-house-list')[0].style.height = h2+"px";
    // $('#out').css("height",h3)
    // $('#box').css("height",h3)
    this.$out.style.height = h3 + "px"
    this.$box.style.height = h3 + "px"
    // $('.ctrl').css("height",h2)
    document.getElementsByClassName('ctrl')[0].style.height = h2+"px";
    document.getElementsByClassName('regloin')[0].style.height = h4+"px";
  },
  components: {
    "map-heat-map": HeatMap,
    "map-subway": MapSubway,
    'headeNav': headeNav,
  },
  methods: {
    getMountDoms() {
      this.$drag = this.$refs['drag']
      this.$con = this.$refs['con']
      this.$box = this.$refs['box']
      this.$out = this.$refs['out']
    },
    getResult(e) {
      //输入事件
      if (this.HouseListData.textSearch != "") {
        if (this.noResult) {
          this.downshow = true;
          if (this.searchstr === this.HouseListData.textSearch) {
            //如果相等，则不执行检索接口
          } else {
            //如果不相等，则执行检索接口，并且把最新的检索关键字赋值给searchstr
            // this.post('CommunityController/findCommunityList',{
            // 'communityName':this.HouseListData.textSearch
            // })
            objFn
              .Axios(
                "agenthouseCutomer/CommunityController/findCommunityList",
                "post",
                { communityName: this.HouseListData.textSearch },
                { interfaceType: "NEW_HOUSE" }
              )
              .then(res => {
                if (res.code === 0) {
                  this.dowmlist = res.data.slice(0, 9);
                }
              });
            this.searchstr = this.HouseListData.textSearch;
          }
        }
      } else {
        this.downshow = false;
      }
    },
    setinvalue(item) {
      this.HouseListData.textSearch = item.name;
      this.$refs.cangeReigon.commitReigon(this.HouseListData);
      this.HouseLists = [];
      this.currentPage = 1;
      this.getHouseList();
    },
    blurFunc() {
      setTimeout(() => {
        this.downshow = false;
      }, 200);
    },
    focusFunc() {
      // this.downshow = true;
    },
    //获取房源列表
    getHouseList() {
      let Url = "pc/HouseInfoController/getMapHouseList";
      // let req = Object.assign({}, this.HouseListData);
      var data = {
        page: this.currentPage,
        roomNo: this.HouseListData.roomNo,
        districtId: this.HouseListData.districtId,
        regionId: this.HouseListData.regionId,
        communityId: this.HouseListData.communityId,
        priceMax: this.HouseListData.priceMax,
        priceMin: this.HouseListData.priceMin,
        userAreaMax: this.HouseListData.userAreaMax,
        userAreaMin: this.HouseListData.userAreaMin,
        textSearch: this.HouseListData.textSearch,
        sortType: this.HouseListData.sortType,
        asc: this.HouseListData.asc,
        stationsId: this.HouseListData.stationsId,
        subwayLineId: this.HouseListData.subwayLineId,
        screenLeftLog: this.HouseListData.screenLeftLog, //西南
        screenRightLog: this.HouseListData.screenRightLog, //东北
        screenLeftLat: this.HouseListData.screenLeftLat, //西南
        screenRightLat: this.HouseListData.screenRightLat,
        size: 10
      };
      objFn
        .Axios("agenthouseCutomer/" + Url, "post", data, {
          interfaceType: "NEW_HOUSE"
        })
        //   this.post(Url,data)
        .then(res => {
          if (res.data.content.length > 0) {
            this.loading = false;
            this.isData = false;
            this.isScroll = true;
            this.total = res.data.totalPageNo;
            this.pages = Math.ceil(res.data.totalPageNo / 10);
            res.data.content.forEach(item => {
              item.tags = item.tags ? item.tags.split(",").slice(0, 3) : "";
              for (var i = 0; i < item.tags.length; i++) {
                if (item.tags[i] == "") {
                  item.tags.splice(i, 1);
                }
              }
              if (item.productType == "0019001") {
                if (item.roomRentStatus == "0015001") {
                  item.image = this.bookedUrl;
                } else if (item.roomRentStatus == "0015004") {
                  item.image = this.schipolUrl;
                } else {
                  item.image = item.image
                    ? objFn.concatFileUrl(item.image, 200, 180)
                    : "";
                }
              } else if (item.productType == "0019002") {
                if (item.houseRentStatus == "0026002") {
                  item.image = this.bookedUrl;
                } else if (item.houseRentStatus == "0026004") {
                  item.image = this.schipolUrl;
                } else {
                  item.image = item.image
                    ? objFn.concatFileUrl(item.image, 200, 180)
                    : "";
                }
              } else if (item.productType == "0019003") {
                if (item.houseRentStatus == "0026002") {
                  item.image = this.bookedUrl;
                } else if (item.houseRentStatus == "0026004") {
                  item.image = this.schipolUrl;
                } else {
                  item.image = item.image
                    ? objFn.concatFileUrl(item.image, 200, 180)
                    : "";
                }
              }
              this.HouseLists.push(item);
            });
          } else {
            this.isData = true;
            // this.HouseLists = [];
          }

          this.totalPageNo = res.data.totalPageNo;
          this.isbottom = false;
          return res;
        })
        .then(res => {
          if (res.data.content.length !== 0) {
            let outHeight = parseFloat(this.$out.style.height)
            let conHeight = this.$con.offsetHeight
            if (conHeight > outHeight) {
              var biliy =
                this.$out.offsetHeight / conHeight; //小滚动条跟大滚动条的比例   小的除以大的
              if (biliy) {
                this.$drag.style.height = (parseFloat(this.$box.style.height) * biliy) + 'px'
                // $("#drag").css("height", $("#box").height() * biliy); //设置小滚动条大小
              }
              this.isScrollCss = true;
            } else {
              this.isScrollCss = false;
            }
            // if (conHeight > conHeight) {
              
            // }
          }
        });
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
      };
    },
    //获取地铁数据
    getRegionSubway() {
      objFn
        .Axios(
          "agenthouseCutomer/common/getSubwayLine",
          "post",
          {},
          { interfaceType: "NEW_HOUSE" }
        )
        // this.post("common/getSubwayLine",{})
        .then(res => {
          res.data = res.data.sort(this.compare("name"));
          return res.data;
        })
        .then(res => {
          objFn
            .Axios(
              "agenthouseCutomer/pc/HouseInfoController/getEachSubwayLineHouseCount",
              "post",
              {},
              { interfaceType: "NEW_HOUSE" }
            )
            // this.post("pc/HouseInfoController/getEachSubwayLineHouseCount",{})
            .then(res2 => {
              this.subwayList = res.map(item => {
                for (var k in res2.data) {
                  if (k === item.id) {
                    item.totalNum = res2.data[k].totalNum;
                  }
                }
                return item;
              });
            });
        });
    },
    //地铁返回数据
    changeSubway(isAreaType) {
      this.HouseListData.stationsId = isAreaType.subwayId || "";
      this.HouseListData.subwayLineId = isAreaType.subwayLineId || "";
      if (isAreaType.subwayId || isAreaType.subwayLineId) {
        this.currentPage = 1;
        // $("#drag").css("top", 0 + "px");
        // $("#con").css("top", 0 + "px");
        if(!this.btnFalt) {
          this.btnClick()
        }
        this.$drag.style.top = 0 + "px"
        this.$con.style.top = 0 + "px"
        this.HouseLists = [];
        this.$nextTick(() => {
          this.subway = false;
        })
        this.getHouseList();
      }
    },
    //价格
    priceSearch(data) {
      if (data == "不限") {
        this.HouseListData.priceMin = "";
        this.HouseListData.priceMax = "";
        // if(this.HouseListData.roomNo == ""){
        this.$refs.cangeReigon.commitReigon(this.HouseListData);
        // this.SearchMap = false;
         this.$drag.style.top = 0 + "px"
        this.$con.style.top = 0 + "px"
        this.currentPage = 1;
        this.HouseLists = [];
        this.getHouseList();
        return;
        // }
      } else {
        let rent = data.split("~");
        this.HouseListData.priceMin = parseFloat(rent[0]);
        this.HouseListData.priceMax = parseFloat(rent[1]);
        if (rent.join("~").includes("元以下")) {
          this.HouseListData.priceMin = "";
          this.HouseListData.priceMax = parseFloat(rent[0]);
        }
        if (rent.join("~").includes("元以上")) {
          this.HouseListData.priceMin = parseFloat(rent[0]);
          this.HouseListData.priceMax = "";
        }
      }
      this.$refs.cangeReigon.commitReigon(this.HouseListData);
      this.SearchMap = true;
       this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.currentPage = 1;
      this.HouseLists = [];
      this.getHouseList();
    },
    //居室
    areaSearch(data) {
      if (data == "不限") {
        this.HouseListData.roomNo = "";
        // if(this.HouseListData.priceMin == "" && this.HouseListData.priceMax == ""){
        this.$refs.cangeReigon.commitReigon(this.HouseListData);
        this.SearchMap = true;
        this.currentPage = 1;
        this.HouseLists = [];
        this.getHouseList();
        return;
        // }
      } else {
        let rent = data;
        this.HouseListData.roomNo = data.charAt(0);
        if (rent.includes("以上")) {
          this.HouseListData.roomNo = 5;
        }
        this.$refs.cangeReigon.commitReigon(this.HouseListData);
      }
      this.SearchMap = true;
       this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.currentPage = 1;
      this.HouseLists = [];
      this.getHouseList();
    },
    //面积
    houseAreaSearch(data) {
      if (data == "不限") {
        this.HouseListData.userAreaMax = "";
        this.HouseListData.userAreaMin = "";
        this.$refs.cangeReigon.commitReigon(this.HouseListData);
      } else {
        let area = data.split("-");
        this.HouseListData.userAreaMin = parseFloat(area[0]);
        this.HouseListData.userAreaMax = parseFloat(area[1])
          ? parseFloat(area[1])
          : "";
        if (area.join("-").includes("以下")) {
          this.HouseListData.userAreaMin = "";
          this.HouseListData.userAreaMax = parseFloat(area[0]);
        }
        if (area.join("-").includes("以上")) {
          this.HouseListData.userAreaMin = parseFloat(area[0]);
          this.HouseListData.userAreaMax = "";
        }
        this.$refs.cangeReigon.commitReigon(this.HouseListData);
      }
      this.SearchMap = true;
       this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.currentPage = 1;
      this.HouseLists = [];
      this.getHouseList();
    },
    //范围
    scopeSearch(data) {
      this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.HouseListData.distance = parseInt(data) / 1000;
      this.$refs.cangeReigon.scopeSubway(this.HouseListData);
      this.currentPage = 1;
      this.HouseLists = [];
      var data = {
        page: this.currentPage,
        roomNo: this.HouseListData.roomNo,
        districtId: this.HouseListData.districtId,
        regionId: this.HouseListData.regionId,
        communityId: this.HouseListData.communityId,
        priceMax: this.HouseListData.priceMax,
        priceMin: this.HouseListData.priceMin,
        userAreaMax: this.HouseListData.userAreaMax,
        userAreaMin: this.HouseListData.userAreaMin,
        textSearch: this.HouseListData.textSearch,
        sortType: this.HouseListData.sortType,
        asc: this.HouseListData.asc,
        stationsId: this.HouseListData.stationsId,
        subwayLineId: this.HouseListData.subwayLineId,
        longitude: this.HouseListData.longitude, //范围查找时加的三个参数
        latitude: this.HouseListData.latitude,
        distance: this.HouseListData.distance, //范围
        size: 10
      };
      objFn
        .Axios(
          "agenthouseCutomer/pc/HouseInfoController/getHouseListNearbyPoint",
          "post",
          data,
          { interfaceType: "NEW_HOUSE" }
        )
        // this.post("pc/HouseInfoController/getHouseListNearbyPoint",data)
        .then(res => {
          if (res.data.length > 0) {
            this.loading = false;
            this.isData = false;
            this.isScroll = true;
            // this.total = res.data.totalPageNo;
            // this.pages = Math.ceil(res.data.totalPageNo / 10);
            res.data.forEach(item => {
              item.tags = item.tags ? item.tags.split(",").slice(0, 3) : "";
              for (var i = 0; i < item.tags.length; i++) {
                if (item.tags[i] == "") {
                  item.tags.splice(i, 1);
                }
              }
              if (item.productType == "0019001") {
                if (item.roomRentStatus == "0015001") {
                  item.image = this.bookedUrl;
                } else if (item.roomRentStatus == "0015004") {
                  item.image = this.schipolUrl;
                } else {
                  item.image = item.image
                    ? objFn.concatFileUrl(item.image, 200, 180)
                    : "";
                }
              } else if (item.productType == "0019002") {
                if (item.houseRentStatus == "0026002") {
                  item.image = this.bookedUrl;
                } else if (item.houseRentStatus == "0026004") {
                  item.image = this.schipolUrl;
                } else {
                  item.image = item.image
                    ? objFn.concatFileUrl(item.image, 200, 180)
                    : "";
                }
              } else if (item.productType == "0019003") {
                if (item.houseRentStatus == "0026002") {
                  item.image = this.bookedUrl;
                } else if (item.houseRentStatus == "0026004") {
                  item.image = this.schipolUrl;
                } else {
                  item.image = item.image
                    ? objFn.concatFileUrl(item.image, 200, 180)
                    : "";
                }
              }
              this.HouseLists.push(item);
            });
          } else {
            this.isData = true;
            // this.HouseLists = [];
          }
          this.isbottom = false;
          return res;
          // this.totalPageNo = res.data.totalPageNo;
        })
        .then(res => {
          if (res.data.length !== 0) {
            var conHeight = this.$con.offsetHeight
            let outHeight = parseFloat(this.$out.style.height)
            if (conHeight > outHeight) {
              this.isScrollCss = true;
            } else {
              this.isScrollCss = false;
            }
            if (conHeight > outHeight) {
              var biliy =
                this.$out.offsetHeight / conHeight; //小滚动条跟大滚动条的比例   小的除以大的
              if (biliy) {
                this.$drag.style.height = (parseFloat(this.$drag.style.height) * biliy) + 'px'
                // $("#drag").css("height", $("#box").height() * biliy); //设置小滚动条大小
              }
            }
          }
        });
    },
    //文字搜索
    textSearch() {
      this.$refs.cangeReigon.commitReigon(this.HouseListData);
      this.SearchMap = true;
      this.dowmlist = false;
       this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.currentPage = 1;
      this.HouseLists = [];
      this.getHouseList();
    },
    enterClick(e) {
       if(this.downshow){
          if(e.keyCode===40){  //下
              if(this.endconut > document.getElementsByClassName("downList")[0].querySelectorAll("li").length){
                  this.endconut = 0;
              }
              this.upconut = this.endconut;
              document.getElementsByClassName("downList")[0].querySelectorAll("li").forEach((item,index)=>{
                  document.getElementsByClassName("downList")[0].querySelectorAll("li")[index].style.backgroundColor = "white";
              })
              document.getElementsByClassName("downList")[0].querySelectorAll("li")[this.endconut].style.backgroundColor = "#f7f7f7";
              if(this.endconut < document.getElementsByClassName("downList")[0].querySelectorAll("li").length){
                  this.HouseListData.textSearch = this.dowmlist[this.endconut].name;
              }
              this.noResult = false;
              this.endconut +=1;
          }else if(e.keyCode===38){
              if(this.upconut<=0){
                  this.upconut = document.getElementsByClassName("downList")[0].querySelectorAll("li").length;
              }
              this.upconut-=1;
              this.endconut = this.upconut;
              this.HouseListData.textSearch = this.dowmlist[this.upconut].name;
              this.noResult = false;
              document.getElementsByClassName("downList")[0].querySelectorAll("li").forEach((item,index)=>{
                  document.getElementsByClassName("downList")[0].querySelectorAll("li")[index].style.backgroundColor = "white";
              })
              document.getElementsByClassName("downList")[0].querySelectorAll("li")[this.endconut].style.backgroundColor = "#f7f7f7";
          }else if(e.keyCode!==13){
              this.noResult = true;
          }
      }
      if (e.keyCode == 13) {
        // this.noResult = true;
        this.dowmlist = false;
        this.$refs.cangeReigon.commitReigon(this.HouseListData);
        this.SearchMap = true;
        if(this.HouseLists.length > 0){
          this.$drag.style.top = 0 + "px"
          this.$con.style.top = 0 + "px"
        }
        
        this.currentPage = 1;
        this.HouseLists = [];
        this.getHouseList();
      }
    },
    invalutenter(item, index) {
      document.getElementsByClassName("downList")[0].querySelectorAll("li").forEach((item,index)=>{
        document.getElementsByClassName("downList")[0].querySelectorAll("li")[index].style.backgroundColor = "white";
      })
      document.getElementsByClassName("downList")[0].querySelectorAll("li")[index].style.backgroundColor = "#f7f7f7";
      this.HouseListData.textSearch = item.name;
      this.noResult = false;
      this.endconut = index;
      this.upconut = index;
    },
    ClearAll() {
      //清空筛选
      this.price = "";
      this.houseArea = "";
      this.houseType = "";
      this.scope = "";
      this.HouseListData.distance = "";
      this.HouseListData.priceMin = "";
      this.HouseListData.priceMax = "";
      this.HouseListData.roomNo = "";
      this.HouseListData.userAreaMax = "";
      this.HouseListData.userAreaMin = "";
      this.HouseListData.textSearch = "";
       this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.currentPage = 1;
      this.HouseLists = [];
      this.getHouseList();
      this.$refs.cangeReigon.commitReigon(this.HouseListData);
    },
    //地图搜索
    mapSearchHouse(data, isScope, scopeHouseCount) {
      if (data.isshowScope) {
        this.isshowScope = data.isshowScope;
      } else {
        this.isshowScope = false;
      }
      if (isScope) {
        //范围查找返回的总房数
        this.isScope = true;
        this.currentPage = 1;
        this.totalPageNo = scopeHouseCount;
        this.HouseListData.communityId = "";
        this.pages = Math.ceil(scopeHouseCount / 10);
        return;
      }
      this.scope = "";
      this.SearchMap = false;
      this.HouseListData.communityId = data.communityId;
      // this.HouseListData.districtId = data.districtId || "";
      // this.HouseListData.regionId = data.regionId;
      this.HouseListData.stationsId = data.stationsId;
      (this.HouseListData.screenLeftLog = data.screenLeftLog), //西南
        (this.HouseListData.screenRightLog = data.screenRightLog), //东北
        (this.HouseListData.screenLeftLat = data.screenLeftLat), //西南
        (this.HouseListData.screenRightLat = data.screenRightLat), //东北
        (this.HouseListData.longitude = data.longitude);
      this.HouseListData.latitude = data.latitude;
      this.currentPage = 1;
       this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.HouseLists = [];
      this.getHouseList();
    },
    //列表点击事件
    goHouseDetail(id, productType) {
      if (this.isPublish()) {
        window.open(
          "http://zufang.guoanfamily.com/#/MyDtail?id=" +
            id +
            "&productType=" +
            productType
        );
      } else {
        window.open(
          "http://localhost:8090/#/MyDtail?id=" +
            id +
            "&productType=" +
            productType
        );
      }
      // this.$router.push({path:'MyDtail',query:{id:id,productType:productType}})
      //
    },
    isPublish() {
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
    defaultSort() {
      this.defaultClass = true;
      this.priceClass = false;
      this.areaClass = false;
      this.HouseListData.sortType = "0";
      this.currentPage = 1;
       this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.HouseLists = [];
      this.getHouseList();
    },
    //价格排序
    priceSort() {
      this.priceAsc = !this.priceAsc;
      this.HouseListData.asc = this.priceAsc;
      this.priceUpDown = !this.priceUpDown;
      this.defaultClass = false;
      this.priceClass = true;
      this.areaClass = false;
      this.HouseListData.sortType = "1";
      this.currentPage = 1;
       this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.HouseLists = [];
      this.getHouseList();
    },
    //面积排序
    areaSort() {
      this.areaAsc = !this.areaAsc;
      this.HouseListData.asc = this.areaAsc;
      this.areaClass = true;
      this.areaUpDown = !this.areaUpDown;
      this.defaultClass = false;
      this.priceClass = false;
      this.HouseListData.sortType = "2";
      this.currentPage = 1;
       this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.HouseLists = [];
      this.getHouseList();
    },
    //关闭侧边栏
    btnClick() {
      var houseList = this.$refs['houseList']
      if (this.btnFalt) {
        this.btnFalt = false;
        // houseList.style.
        // $(".house-list").animate({ marginLeft: "-6.01rem" });
        this.isHouseLeft = true;
        this.$refs.cangeReigon.colseBtn(true);
      } else {
        this.btnFalt = true;
        this.isHouseLeft = false;
        this.$refs.cangeReigon.colseBtn(false);
      }
    },
    //登录
    myContentHeaderList(ev) {
      //mylist列表单击选中事件
      if (ev.url == 7) {
        this.succeed = true;
        this.realName = "";
        localStorage.setItem("token", ""); //清空localstorage
        localStorage.setItem("standbyToken", ""); //清空localstorage
        localStorage.setItem("userId", "");
        localStorage.setItem("collectList", ""); //清空收藏数组
        // this.$router.push("/content")//首页
        return false;
      }
      // Headerurl.$emit('prodsNumChange',ev.url);
      // this.$router.push(ev.url)//首页
      if (this.isPublish()) {
        // this.$router.push(ev.url)//首页
        window.open("http://zufang.guoanfamily.com/#/" + ev.url);
      } else {
        window.open("http://localhost:8090/#/" + ev.url);
      }
      this.mylist = false; //关闭列表
    },
    userenter() {
      this.mylist = true;
    },
    userLeave() {
      this.mylist = false;
    },
    loginClick() {
      // this.$router.push({path:"/Login",query:{url:"/content"}});
      if (this.isPublish()) {
        location.href = "http://zufang.guoanfamily.com/#/Login?url=/content";
      } else {
        location.href = "http://localhost:8090/#/Login?url=/content";
      }
    },
    subwayClick() {
      this.isSubwayClick = true;
      this.isRegionClick = false;
      this.subway = true;
      this.regionSearch = false;
      this.SubwaySearch = true;
      this.isScrollCss = false; //滚动条
      this.downshow = false;
      this.noResult = true;
      //排序
      this.defaultClass = true;
      this.priceClass = false;
      this.areaClass = false;
      this.HouseListData.sortType = "0";
      this.isredActive = false;
      //筛选项
      this.price = "";
      this.houseArea = "";
      this.houseType = "";
      this.scope = "";
      this.HouseListData.distance = "";
      this.HouseListData.priceMin = "";
      this.HouseListData.priceMax = "";
      this.HouseListData.roomNo = "";
      this.HouseListData.userAreaMax = "";
      this.HouseListData.userAreaMin = "";
      this.HouseListData.textSearch = "";
      (this.HouseListData.screenLeftLog = ""), //西南
        (this.HouseListData.screenRightLog = ""), //东北
        (this.HouseListData.screenLeftLat = ""), //西南
        (this.HouseListData.screenRightLat = ""), //东北
         this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.currentPage = 1;
      this.HouseLists = [];
      this.getHouseList();
      // this.$refs.cangeReigon.commitReigon(this.HouseListData);
    },
    regionClick() {
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
      this.isredActive = true;
      //筛选项
      this.price = "";
      this.houseArea = "";
      this.houseType = "";
      this.scope = "";
      this.HouseListData = {
        page: 1,
        roomNo: "",
        productType: "",
        districtId: "",
        regionId: "",
        communityId: "",
        stationsId: "",
        subwayLineId: "",
        priceMax: "",
        priceMin: "",
        userAreaMax: "",
        userAreaMin: "",
        textSearch: "",
        size: 10,
        sortType: "",
        asc: "",
        screenLeftLog: "", //西南
        screenRightLog: "", //东北
        screenLeftLat: "", //西南
        screenRightLat: "" //东北
      };
      this.currentPage = 1;
      this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.HouseLists = [];
      if(!this.btnFalt) {
        this.btnClick()
      }
      this.getHouseList();
    },
    houseScroll() {
    },
    scrollover(ev) {
      if (this.$con.offsetHeight >parseFloat(this.$out.style.height)) {
        this.isScrollCss = true;
      }
      var str = window.navigator.userAgent.toLowerCase();
      if (str.indexOf("firefox") != -1) {
        var scorllFirefox = document.getElementById("out");
        scorllFirefox.addEventListener(
          "DOMMouseScroll",
          e => {
            var out = document.getElementById("out");
            var con = document.getElementById("con");
            var box = document.getElementById("box");
            var drag = document.getElementById("drag");
            var dragHeight = this.$drag.style.height;
            var boxHeight = this.$box.style.height;
            var e = e || window.event;
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
            if (e.detail < 0) {
              var t = con.offsetTop + 20;
              if (t >= 0) {
                t = 0;
              }
              if (t <= -(con.clientHeight - out.clientHeight)) {
                t = -(con.clientHeight - out.clientHeight);
              }
              var scale = t / (con.clientHeight - out.clientHeight);
              var top = scale * (box.clientHeight - drag.clientHeight);
              // $("#drag").css("top", -top + "px");
              // $("#con").css("top", t + "px");
              this.$drag.style.top = -top + "px"
              this.$con.style.top = t + "px"
              
            }
            if (e.detail > 0) {
              var t = con.offsetTop - 20;
              if (t >= 0) {
                t = 0;
              }
              if (t <= -(con.clientHeight - out.clientHeight)) {
                t = -(con.clientHeight - out.clientHeight);
              }
              var scale = t / (con.clientHeight - out.clientHeight);
              var top = scale * (box.clientHeight - drag.clientHeight);
              // $("#drag").css("top", -top + "px");
              this.$drag.style.top = -top + "px"
              this.$con.style.top = t + "px"
              if (-top >= boxHeight - dragHeight - 1) {
                if (!this.isbottom) {
                  this.isbottom = true;
                  this.currentPage += 1;
                  if (this.currentPage <= this.pages) {
                    if (this.isScope) {
                      this.scopeSearch();
                    } else {
                      this.getHouseList();
                    }
                  }
                }
                return false;
              }
            }
          },
          false
        );
      }
    },
    scrollLeave() {
      if (!this.isdown) {
        this.isScrollCss = false;
      }
    },
    dragDown(e) {
      var out = document.getElementById("out");
      var con = document.getElementById("con");
      var box = document.getElementById("box");
      var drag = document.getElementById("drag");
      var dragHeight = this.$drag.offsetHeight;
      var boxHeight = parseFloat(this.$box.style.height);
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      this.d_bkt = e.clientY - drag.offsetTop;
      document.onmousemove = ev => {
        var e = ev || window.event;
        var top = e.clientY - this.d_bkt;
        if (top <= 0) {
          top = 0;
        }
        if (top >= box.clientHeight - drag.clientHeight) {
          top = box.clientHeight - drag.clientHeight;
        }
        var scale = top / (box.clientHeight - drag.clientHeight);
        var cony = scale * (con.clientHeight - out.clientHeight);
        // $("#drag").css("top", top + "px");
        // $("#con").css("top", -cony + "px");
        this.$drag.style.top = top + "px";
        this.$con.style.top = -cony + "px";
        this.isScrollCss = true;
        if (top >= boxHeight - dragHeight - 1) {
          if (!this.isbottom) {
            this.isbottom = true;
            this.currentPage += 1;
            if (this.currentPage <= this.pages) {
              this.getHouseList();
            }
          }
          return false;
        }
        return false;
      };
      document.onmouseup = function() {
        this.isScrollCss = false;
        document.onmousemove = null;
      };
    },
    scorllWheel(ev) {
      if (!this.isScrollCss) {
        return;
      }
      var out = document.getElementById("out");
      var con = document.getElementById("con");
      var box = document.getElementById("box");
      var drag = document.getElementById("drag");
      var dragHeight = this.$drag.offsetHeight;
      var boxHeight = parseFloat(this.$box.style.height);
      var e = ev || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      if (e.wheelDelta > 0) {
        var t = con.offsetTop + 20;
        if (t >= 0) {
          t = 0;
        }
        if (t <= -(con.clientHeight - out.clientHeight)) {
          t = -(con.clientHeight - out.clientHeight);
        }
        var scale = t / (con.clientHeight - out.clientHeight);
        var top = scale * (box.clientHeight - drag.clientHeight);
        // $("#drag").css("top", -top + "px");
        this.$drag.style.top = -top + "px"
        this.$con.style.top = t + "px"
      }
      if (e.wheelDelta < 0) {
        var t = con.offsetTop - 20;
        if (t >= 0) {
          t = 0;
        }
        if (t <= -(con.clientHeight - out.clientHeight)) {
          t = -(con.clientHeight - out.clientHeight);
        }
        var scale = t / (con.clientHeight - out.clientHeight);
        var top = scale * (box.clientHeight - drag.clientHeight);
        // $("#drag").css("top", -top + "px");
        this.$drag.style.top = -top + "px"
        this.$con.style.top = t + "px"
        if (-top >= boxHeight - dragHeight - 1) {
          if (!this.isbottom) {
            this.isbottom = true;
            this.currentPage += 1;

            if (this.currentPage <= this.pages) {
              this.getHouseList();
            }
          }
          return false;
        }
      }
    },
    moverClick() {
      this.price = "";
      this.houseArea = "";
      this.houseType = "";
      this.scope = "";
      this.HouseListData = {
        page: 1,
        roomNo: "",
        productType: "",
        districtId: "",
        regionId: "",
        communityId: "",
        stationsId: "",
        subwayLineId: "",
        priceMax: "",
        priceMin: "",
        userAreaMax: "",
        userAreaMin: "",
        textSearch: "",
        size: 10,
        sortType: "",
        asc: "",
        screenLeftLog: "", //西南
        screenRightLog: "", //东北
        screenLeftLat: "", //西南
        screenRightLat: "" //东北
      };
      this.currentPage = 1;
       this.$drag.style.top = 0 + "px"
      this.$con.style.top = 0 + "px"
      this.HouseLists = [];
      this.getHouseList();
      if (this.isSubwayClick) {
        this.subway = true;
      } else {
        this.$refs.cangeReigon.commitReigon(this.HouseListData, true);
      }
    },
    // 判断是地图还是地铁导航
    isTypeNavigation() {
      var subway = this.$route.query.subway
      if(subway == 'subway') {
        this.$nextTick()
        setTimeout(() =>{
          this.subwayClick()
        },10)
        
      }
    }
  },
  watch: {
    screenWidth(val) {
      this.screenWidth = val;
      if (this.screenWidth <= 1530) {
        this.changewidth = true;
      } else {
        this.changewidth = false;
      }
      if (this.screenWidth <= 1369) {
        this.changetwowidth = true;
      } else {
        this.changetwowidth = false;
      }
      if (this.screenWidth <= 1198) {
        this.loginchange = true;
      } else {
        this.loginchange = false;
      }
    }
  }
};
</script>

