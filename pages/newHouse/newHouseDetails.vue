<template>
    <div class="bodyTop">
        <div class="topTab">
             <headeNav :NavActived="2"></headeNav>
        </div>
        <div>
          <!-- 头部图片部分 -->
            <div class="topBj">
                <div class = 'topCenter zoomIn'>
                    <div class='topCenterLeft'>
                        <div class='essentialInfo'>
                            <div class='essentName'>
                                <div class='leftName'>{{buildData.buildname}}</div>
                                <!-- <div class='essentTag'>
                                    <span :key="index" v-for="(item,index) in buildData.buildtagnameList">{{item}}</span>
                                </div> -->
                            </div>
                            <div class='mapCity'>{{buildData.province}}/{{buildData.city}}</div>
                            <div class='buildPrice'>
                                <span>均价：</span>
                                <span>{{buildData.averageprice}}</span>
                                <span v-show="buildData.averageprice !=='售价待定'&&buildData.averageprice !== 0">元/㎡</span>
                            </div>
                            <div class='buildTag'><span :key="index" v-for="(item,index) in buildData.buildtagnameList.slice(0,3)">{{item}}</span></div>
                            <div class="SegmentingLine"></div>
                            <div class='openTime' style="margin-top:.3rem;">
                              <span>开盘时间：</span><span>{{buildData.openquotationtime}}</span>
                            </div>
                            <div class='openTime'>
                              <span>交房时间：</span><span>{{buildData.launchtime}}</span>
                            </div>
                             <div class='openTime'>
                              <span style="display:block;width:22%;float:left;">楼盘地址：</span><span style="float:left;width:78%;display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{buildData.address}}</span>
                            </div>
                            <div class='phoneNumber'>400-900-2225转1</div>
                        </div>
                    </div>
                    
                    <div class='topCenterRight'>
                        <div class='imgDiv'>
                            <img :src="`https://img.guoanfamily.com/${buildData.firstpicture}?imageView2/1/w/675/h/335`" alt="">
                        </div>
                    </div>
                </div>
                <img class='zoomIn' :src="`https://img.guoanfamily.com/${buildData.firstpicture}?imageView2/1/w/675/h/335`" alt="">
            </div>
            <!-- 面积、停车位等部分 -->
            <div class='showNumber'>
              <div class='showCenterDiv'>
                <div>
                  <div class='nuberTop'>
                    <div style="text-align:center;border:none;" v-show="buildData.totalhouseholdnumber && buildData.totalhouseholdnumber !=='-'">
                      <span><img src="https://img.guoanfamily.com/rentPC/newHouseImg/one.png" alt=""><span class="textName">{{buildData.totalhouseholdnumber}}</span></span>
                    </div>
                    <div style="text-align:center;border:none;" v-show="!buildData.totalhouseholdnumber || buildData.totalhouseholdnumber == '-'">
                      <span><img src="https://img.guoanfamily.com/rentPC/newHouseImg/one.png" alt=""><span class="textName">暂无</span></span>
                    </div>
                    
                  </div>
                  <div class='nuberBottom'>
                      <span>总住宅（户）</span>
                      <span>TOTAL&nbsp;NUMBER&nbsp;OF&nbsp;HOUSES</span>
                  </div>
                </div>
                <div>
                  <div class='nuberTop'>
                   <div style="text-align:center;border:none;" v-show="buildData.carportmatching&&buildData.carportmatching !=='-'">
                      <span><img src="https://img.guoanfamily.com/rentPC/newHouseImg/two.png" alt=""><span class="textName">{{buildData.carportmatching}}</span></span>
                    </div>
                   <div style="text-align:center;border:none;" v-show="!buildData.carportmatching || buildData.carportmatching == '-'">
                      <span><img src="https://img.guoanfamily.com/rentPC/newHouseImg/two.png" alt=""><span class="textName">暂无</span></span>
                    </div>
                    
                  </div>
                  <div class='nuberBottom'>
                       <span>泊车数量</span>
                      <span>NUMBER&nbsp;OF&nbsp;PARKING&nbsp;SPACES</span>
                   
                  </div>
                </div>
                <div>
                  <div class='nuberTop'>
                    <div style="text-align:center;border:none;" v-show='buildData.greenrate && buildData.greenrate !== "-"'>
                      <span> <img  src="https://img.guoanfamily.com/rentPC/newHouseImg/three.png" alt=""><span class="textName">{{buildData.greenrate}}</span></span>
                    </div>
                    <div style="text-align:center;border:none;" v-show="!buildData.greenrate || buildData.greenrate=='-'">
                      <span> <img  src="https://img.guoanfamily.com/rentPC/newHouseImg/three.png" alt=""><span class="textName">暂无</span></span>
                    </div>
                  </div>
                  <div class='nuberBottom'>
                    <span>绿化率</span>
                    <span>TOTAL&nbsp;GREEN&nbsp;PLANT</span>
                  </div>
                </div>
                <div style="border-right:0;">
                  <div class='nuberTop' style="border-right:0;">
                    <div style="text-align:center;border:none;" v-show='buildData.occupiedarea && buildData.occupiedarea !=="-"'>
                      <span><img src="https://img.guoanfamily.com/rentPC/newHouseImg/four.png" alt=""><span class="textName">{{buildData.occupiedarea}}</span></span>
                    </div>
                    <div style="text-align:center;border:none;" v-show='!buildData.occupiedarea || buildData.occupiedarea =="-" '>
                      <span><img src="https://img.guoanfamily.com/rentPC/newHouseImg/four.png" alt=""><span class="textName">暂无</span></span>
                    </div>
                  </div>
                  <div class='nuberBottom' style="border-right:0;">
                    <span>占地面积</span>
                    <span>AREA&nbsp;COBERED</span>
                  </div>
                </div>
              </div>
            </div>
            <div style="width:100%;height:.5rem;"></div>
            <div class='bannerContet'>
              <div class='bannerTop' >
                <div :class="{'redColor': swiperIndex <= yangbanjinaLength-1 && swiperIndex >= 0}" @click="swiperTopTabClick(0)">{{`样板间&nbsp;(${yangbanjinaLength})`}}</div>
                <div :class="{'redColor': swiperIndex >= yangbanjinaLength && swiperIndex <= yangbanjinaLength + xiaoguotulength-1}" @click="swiperTopTabClick(yangbanjinaLength)">{{`效果图&nbsp;(${xiaoguotulength})`}}</div>
                <div :class="{'redColor': swiperIndex >= yangbanjinaLength + xiaoguotulength && swiperIndex <= yangbanjinaLength + xiaoguotulength + shijingtulength -1 }" @click="swiperTopTabClick(yangbanjinaLength + xiaoguotulength)">{{`实景图&nbsp;(${shijingtulength})`}}</div>
                <div :class="{'redColor': swiperIndex >= yangbanjinaLength + xiaoguotulength + shijingtulength && swiperIndex <= yangbanjinaLength + xiaoguotulength + shijingtulength + niaokantulength-1 }" @click="swiperTopTabClick(yangbanjinaLength + xiaoguotulength + shijingtulength)">{{`鸟瞰图&nbsp;(${niaokantulength})`}}</div>
                <div :class="{'redColor': swiperIndex >= yangbanjinaLength + xiaoguotulength + shijingtulength + niaokantulength && swiperIndex <= yangbanjinaLength + xiaoguotulength + shijingtulength + niaokantulength + guihuatulength-1 }" @click="swiperTopTabClick(yangbanjinaLength + xiaoguotulength + shijingtulength + niaokantulength)">{{`规划图&nbsp;(${guihuatulength})`}}</div>
              </div>
              <div class='bannerImg' >
                <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" :key="index" v-for="(item,index) in bannerArr">
                      <div class='bjImgDiv' :style="{backgroundImage:`url(https://img.guoanfamily.com/${item.picturename}?imageView2/1/w/675/h/335`}"></div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </div>
            </div>
            <!-- 楼盘户型展示部分 -->
            <div class='housTypeContent'>
              <div class='houseTypeBigDiv'>
                <div class='houseTypeBigTopDiv'>
                  <div></div>
                  <div><span>房屋户型图</span></div>
                </div>
                <div class='houseTypeBigBottomDiv'>
                    <houseType :houseTypeArr="houseTypeArr"></houseType>
                </div>
              </div>
            </div>

            <!-- 楼盘基本信息展示部分 -->
            <div class='infoContent'>
              <div class='inforTopbg'></div>
              <div class='infoContentcenterDiv'>
                <div class='infoContentcenterDivTop' >
                  <div></div>
                  <div>
                    <span>楼盘基础信息</span>
                  </div>
                </div>
                <div class='infoContentcenterDivBottom'>
                  <div class='listOne' >
                    <div class='listOneLeft info1' ></div>
                    <div class='listOneRight'>
                      <div></div>
                      <div><span>开盘时间：</span><span v-show='buildData.openquotationtime'>{{buildData.openquotationtime}}</span><span v-show='!buildData.openquotationtime'>暂无</span></div>
                      <div>物业类型：<span v-show="buildData.tenementtypename">{{buildData.tenementtypename}}</span><span v-show="!buildData.tenementtypename">暂无</span></div>
                      <div>装修情况：<span v-show="buildData.hardcoverstandard">{{buildData.hardcoverstandard}}</span><span v-show='!buildData.hardcoverstandard'>暂无</span></div>
                      <div>层数：<span v-show='buildData.foolernumber'>{{buildData.foolernumber}}</span><span v-show="!buildData.foolernumber"></span></div>
                      <div>建筑类型：<span v-show="buildData.newbuildtype">{{buildData.newbuildtype}}</span><span v-show="!buildData.newbuildtype">暂无</span></div>
                    </div>
                  </div>
                  <div class='listOne'>
                    <div class='listOneLeft info2' ></div>
                    <div class='listOneRight'>
                      <div></div>
                      <div></div>
                      <div>开发商：<span v-show="buildData.developers&&buildData.developers!=='-'">{{buildData.developers}}</span><span v-show="!buildData.developers || buildData.developers == '-'">暂无</span></div>
                      <div>预售证：<span v-show="buildData.commodityhousedeallicence&&buildData.commodityhousedeallicence !=='-'">{{buildData.commodityhousedeallicence}}</span><span v-show="!buildData.commodityhousedeallicence || buildData.commodityhousedeallicence =='-'">暂无</span></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class='listOne'>
                    <div class='listOneLeft info3' ></div>
                    <div class='listOneRight'>
                      <div></div>
                      <div>总户数：<span v-show="buildData.totalhouseholdnumber&& buildData.totalhouseholdnumber !=='-'">{{buildData.totalhouseholdnumber}}</span><span v-show="!buildData.totalhouseholdnumber || buildData.totalhouseholdnumber == '-'">暂无</span></div>
                      <div>容积率：<span v-show="buildData.volumefraction&&buildData.volumefraction!=='-'">{{buildData.volumefraction}}</span><span v-show="!buildData.volumefraction|| buildData.volumefraction =='-'">暂无</span></div>
                      <div>绿化率：<span v-show="buildData.greenrate && buildData.greenrate!== '-'">{{buildData.greenrate}}</span><span v-show="!buildData.greenrate|| buildData.greenrate == '-'">暂无</span></div>
                      <div>占地面积：<span v-show="buildData.occupiedarea && buildData.occupiedarea!=='-'">{{buildData.occupiedarea}}</span><span v-show="!buildData.occupiedarea || buildData.occupiedarea =='-'">暂无</span></div>
                      <div>建筑面积：<span v-show="buildData.buildingarea && buildData.buildingarea !=='-'">{{buildData.buildingarea}}</span><span v-show="!buildData.buildingarea || buildData.buildingarea =='-'">暂无</span></div>
                    </div>
                  </div>
                  <div class='listOne'>
                    <div class='listOneLeft info4' ></div>
                    <div class='listOneRight'>
                      <div></div>
                      <div>医院：<span v-show="housepotial">{{housepotial}}</span><span v-show="!housepotial">暂无</span></div>
                      <div>学校：<span v-show="schoolArr">{{schoolArr}}</span><span v-show="!schoolArr">暂无</span></div>
                      <div>购物：<span v-show="shopingArr">{{shopingArr}}</span><span v-show="!shopingArr">暂无</span></div>
                      <div>区域：<span v-show="buildData.address&& buildData.address !=='-'">{{buildData.address}}</span><span v-show="!buildData.address || buildData.address=='-'">暂无</span></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 底部楼盘定位部分 -->
            <div class = 'buildLocation'>
              <!-- 底部头 -->
              <div class = 'locationTop'>
                <div class='locationTopDivTop' >
                  <div></div>
                  <div>
                    <span>项目周边</span>
                  </div>
                </div>
                <!-- 底部尾巴 -->
                <div class='locationMap'>
                  <div class='buildMap'>
                    <div class="maps" id="container"></div>
                  </div>
                  <div class='buildMapInfo'>
                    <div class ='buildManpInfoTop'>
                      <div :class="{'tabStyle': activeIndex == '交通'}"  @click="tableClick('交通')">交通</div>
                      <div :class="{'tabStyle': activeIndex == '商场'}"  @click="tableClick('商场')">商业</div>
                      <div :class="{'tabStyle': activeIndex == '教育'}"  @click="tableClick('教育')">教育</div>
                      <div :class="{'tabStyle': activeIndex == '医疗'}"  @click="tableClick('医疗')">医疗</div>
                    </div>
                    <div class = 'buildAddressList'>
                      <div :key="index" v-for="(item,index) in mapSearchArr">
                        <div class='locationIcon'>{{index+1}}</div>
                        <div class='locationInfo'>
                          <div style="font-size:.22rem;color:#666666;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{item.title}}</div>
                          <div style="line-height:.2rem;margin-top:.1rem;font-size:.16rem;color:#222;overflow:hidee;white-space:nowrap;text-overflow:ellipsis;">{{item.address}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <bottom></bottom>
        </div>
    </div>
</template>

<script>
import headeNav from "~/components/headerNav.vue";
import bottom from "~/components/bottom.vue";
import houseType from "~/components/newHouseTypeSwiper/houseType";
import { objFn } from "~/plugins/axios.js";
export default {
  data() {
    var self = this;
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChangeTransitionStart() {
            self.swiperIndex = this.activeIndex;
          }
        }
      },
      swiperIndex: 0,
      address: "",
      activeIndex: "交通",
      longitude: "", //经度
      latitude: "", //纬度
      mapSearchArr: [],
      map: ""
    };
  },
  components: {
    headeNav,
    bottom,
    houseType
  },
  asyncData({ query }) {
    return objFn
      .Axios(
        `palmsaleapp/api/v1/build/buildBaseInfoiIdApp?id=${query.id}`,
        "get",
        {},
        { interfaceType: "NEW_HOUSE" }
      )
      .then(res => {
        if (res.status == 200) {
          let Imgarry = res.data.buildPictureList;
          let picturetype = "picturetype";
          // 样板间图片数组
          let yangbanjian = objFn.onFilterImg(Imgarry, picturetype, "2");
          let yangbanjinaLength = yangbanjian.length;
          // 效果图图片
          let xiaoguotu = objFn.onFilterImg(Imgarry, picturetype, "0");
          let xiaoguotulength = xiaoguotu.length;
          // 实景图图片
          let shijingtu = objFn.onFilterImg(Imgarry, picturetype, "3");
          let shijingtulength = shijingtu.length;
          // 鸟瞰图图片
          let niaokantu = objFn.onFilterImg(Imgarry, picturetype, "5");
          let niaokantulength = niaokantu.length;
          // 规划图图片
          let guihuatu = objFn.onFilterImg(Imgarry, picturetype, "6");
          let guihuatulength = guihuatu.length;
          // 合并轮播图
          let bannerArr = yangbanjian.concat(
            xiaoguotu,
            shijingtu,
            niaokantu,
            guihuatu
          );
          // 获取户型基本信息，处理一个户型对应多张图片问题
          let houseTypeArr = res.data.buildTypeList;
          // 获取周边信息
          let houspotialArr = [];
          let shopArr = [];
          let schArr = [];
          let othArr = [];
          let housepotial = "";
          let shopingArr = "";
          let schoolArr = "";
          let othersArr = "";
          for (let i = 0; i < res.data.buildPerpheralList.length; i++) {
            if (res.data.buildPerpheralList[i].perpheraltype == 3) {
              houspotialArr.push(res.data.buildPerpheralList[i].perpheralname);
            } else if (res.data.buildPerpheralList[i].perpheraltype == 2) {
              shopArr.push(res.data.buildPerpheralList[i].perpheralname);
            } else if (res.data.buildPerpheralList[i].perpheraltype == 1) {
              schArr.push(res.data.buildPerpheralList[i].perpheralname);
            } else if (res.data.buildPerpheralList[i].perpheraltype == 0) {
              othArr.push(res.data.buildPerpheralList[i].perpheralname);
            }
          }
          if (houspotialArr.length > 0) {
            housepotial = houspotialArr.toString();
          } else {
            housepotial = "";
          }
          if (shopArr.length > 0) {
            shopingArr = shopArr.toString();
          } else {
            shopingArr = "";
          }
          if (schArr.length > 0) {
            schoolArr = schArr.toString();
          } else {
            schoolArr = "";
          }
          if (othArr.legnth > 0) {
            othersArr = othArr.toString();
          } else {
            othersArr = "";
          }
          return {
            buildData: res.data,
            yangbanjinaLength,
            xiaoguotulength,
            shijingtulength,
            niaokantulength,
            guihuatulength,
            bannerArr,
            houseTypeArr,
            housepotial,
            shopingArr,
            schoolArr,
            othersArr
          };
        }
      });
  },
  methods: {
    // 跳转到指定图片方法
    swiperTopTabClick(num) {
      this.swiperIndex = num;
      this.swiper.slideTo(num, 0, false);
    },
    enlargeClick() {
      this.$refs.previewer.show();
    },
    //  楼盘定位
    addresonLoad(addr) {
      var _this = this;
      // 百度地图API功能
      // var map = new BMap.Map("container"); // 创建Map实例
      var map = this.map;
      var myGeo = new BMap.Geocoder();
      myGeo.getPoint(
        addr,
        function(point) {
          _this.longitude = point.lng; //经度
          _this.latitude = point.lat; //纬
          if (point) {
            var point = new BMap.Point(point.lng, point.lat);
            map.centerAndZoom(point, 14);
            var Marker = new BMap.Marker(point);
            Marker.disableMassClear();
            map.addOverlay(Marker);
          } else {
            _this.$showErrorTip("您选择地址没有解析到结果!");
            // alert("您选择地址没有解析到结果!");
          }
        },
        "北京市"
      );
      map.addEventListener("zoomend", function() {
        let ad = map.getZoom();
        myGeo.getPoint(
          addr,
          function(point) {
            if (point) {
              var point = new BMap.Point(point.lng, point.lat);
              map.centerAndZoom(point, ad);
              map.addOverlay(new BMap.Marker(point));
            } else {
              _this.showalert("您选择地址没有解析到结果!");
              // alert("您选择地址没有解析到结果!");
            }
          },
          "北京市"
        );
      });
    },
    // tab栏的点击事件
    tableClick(item) {
      this.activeIndex = item;
      this.peripheralInfo(item);
    },
    // 获取周边信息的方法
    peripheralInfo(per) {
      var map = this.map;
      this.map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 14);

      var local = new BMap.LocalSearch(map, {
        // renderOptions: { map: map },
        // 获取检索到的信息
        onSearchComplete: res => {
          this.mapSearchArr = res.Ar;
          map.clearOverlays();
          for (let i = 0; i < this.mapSearchArr.length; i++) {
            this._getContent(this.mapSearchArr[i], i + 1);
          }
        }
      });
      local.searchInBounds(per, map.getBounds());
      // local.setSearchCompleteCallback();
      map.addEventListener("dragend", function() {
        map.clearOverlays();
        local.searchInBounds(per, map.getBounds());
      });
    },
    // 添加自定义图片
    _getContent(obj, index) {
      var _this = this;
      var mp = this.map;
      var obj = obj;
      function ComplexCustomOverlay(point, text, mouseoverText) {
        this._point = point;
        this._text = text;
        this._overText = mouseoverText;
      }
      ComplexCustomOverlay.prototype = new BMap.Overlay();
      ComplexCustomOverlay.prototype.initialize = function(map) {
        this._map = map;
        var div = (this._div = document.createElement("div"));
        div.style.position = "absolute";
        div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
        div.style.background =
          "url(https://img.guoanfamily.com/localIcon.png) no-repeat";
        div.style.backgroundSize = "100%";
        div.style.textAlign = "center";
        // div.style.border = "1px solid #BC3B3A";
        div.style.color = "white";
        div.style.height = "32px";
        div.style.width = "30px";
        // div.style.padding = "4px";
        // div.style.lineHeight = "48px";
        // div.style.whiteSpace = "nowrap";
        // div.style.MozUserSelect = "none";
        // div.style.borderRadius="50%";
        div.style.fontSize = "14px";
        var span = (this._span = document.createElement("span"));
        div.appendChild(span);
        span.appendChild(document.createTextNode(this._text));
        var that = this;

        // var arrow = this._arrow = document.createElement("div");
        // arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
        // arrow.style.position = "absolute";
        // arrow.style.width = "11px";
        // arrow.style.height = "10px";
        // arrow.style.top = "28px";
        // arrow.style.left = "10px";
        // arrow.style.overflow = "hidden";
        // div.appendChild(arrow);

        // div.onmouseover = function(){
        //     this.style.backgroundColor = "rgba(255, 202, 77, 0.9)";
        //     // this.style.borderColor = "#0000ff";
        //     this.getElementsByTagName("span")[0].innerHTML = that._overText;
        //     // arrow.style.backgroundPosition = "0px -20px";
        // }

        // div.onmouseout = function(){
        //     this.style.backgroundColor = "#EE5D5B";
        //     // this.style.borderColor = "#BC3B3A";
        //     this.getElementsByTagName("span")[0].innerHTML = that._text;
        //     // arrow.style.backgroundPosition = "0px 0px";
        // }

        // div.onclick = function(){
        //     if(_this.regionSearch && _this.oneregionSearch && _this.isMoveend){   //区域
        //         _this.dynamicTags.longitude = obj.longitude;
        //         _this.dynamicTags.latitude = obj.latitude;
        //         _this.dynamicTags.isshowScope = true;
        //         _this.dynamicTags.communityId=obj.communityId;
        //     }else if(_this.isMoveend && !_this.isSubwaySearch){    //拖拽是地铁
        //         _this.dynamicTags.longitude = obj.longitude;
        //         _this.dynamicTags.latitude = obj.latitude;
        //         _this.dynamicTags.stationsId = obj.stationsOne;
        //     }
        //     _this.$emit("mapSearchHouse",_this.dynamicTags)
        // }

        mp.getPanes().labelPane.appendChild(div);
        return div;
      };
      ComplexCustomOverlay.prototype.draw = function() {
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this._point);
        this._div.style.left = pixel.x + "px";
        this._div.style.top = pixel.y - 30 + "px";
      };
      var txt = obj.title,
        mouseoverTxt = obj.title;

      var myCompOverlay = new ComplexCustomOverlay(
        new BMap.Point(obj.point.lng, obj.point.lat),
        index,
        mouseoverTxt
      );

      mp.addOverlay(myCompOverlay);
    }
  },
  created() {},
  mounted() {
    let map = new BMap.Map("container");
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    this.map = map;
    this.address =
      this.buildData.province + this.buildData.city + this.buildData.address;
    this.addresonLoad(this.address);
    setTimeout(() => {
      this.tableClick("交通");
    }, 1000);
    // window.scrollTo(0,0);
    // console.log( document.querySelector('#_nuxt'));
    // document.querySelector('#_nuxt').scrollTo(0,0);
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style lang='less' scoped>
.redColor {
  color: red;
}
.bodyTop {
  width: 100%;
  height: 100%;
  .topTab {
    width: 100%;
    height: auto;
    position: relative;
    left: 0;
    top: 0;
    z-index: 10;
  }
  // 头部部分
  .topBj {
    width: 100%;
    height: 7.1rem;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      //   height: 100%;
    }
    .topCenter {
      width: 70%;
      height: 5rem;
      position: absolute;
      top: 1.3rem;
      left: 15%;
      z-index: 1;
      background: #fff;
      display: flex;
      flex-direction: row;
      .topCenterLeft {
        width: 40%;
        height: 100%;
        // background: peru;
        .essentialInfo {
          width: 90%;
          height: 90%;
          float: left;
          margin-top: 5%;
          margin-left: 5%;
          // background: red;
          position: relative;
          .essentName {
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
            color: #222;
            .leftName {
              font-size: 0.24rem;
              font-weight: 600;
              float: left;
            }
            // .essentTag {
            //   float: left;
            //   margin-left: 0.2rem;
            //   span {
            //     display: inline-block;
            //     padding: 0.05rem;
            //     background: #666666;
            //     color: #fff;
            //     height: 0.4rem;
            //     line-height: 0.33rem;
            //     margin-right: 0.1rem;
            //   }
            // }
          }
          .mapCity {
            width: 100%;
            height: 0.2rem;
            background: url("https://img.guoanfamily.com/rentPC/newHouseImg/map.png")
              no-repeat left;
            background-size: 3%;
            padding-left: 0.2rem;
            line-height: 0.2rem;
            font-size: 0.12rem;
            color: #b6b6b6;
          }
          .buildPrice {
            width: 100%;
            height: 0.5rem;
            span {
              display: inline-block;
            }
            span:nth-child(1) {
              line-height: 0.7rem;
              color: #3d3d3d;
              font-size: 0.14rem;
            }
            span:nth-child(2) {
              color: #f10544;
              font-size: 0.3rem;
              font-weight: 600;
            }
            span:nth-child(3) {
              font-size: 0.12rem;
              line-height: 0.9rem;
              color: #222;
              font-weight: 600;
            }
          }
          .buildTag {
            width: 100%;
            // height: 0.3rem;
            margin-top: 0.2rem;
            // background:yellow;
            span {
              display: inline-block;
              padding: 0.05rem;
              border: 1px solid #b6b6b6;
              color: #b6b6b6;
              height: 0.3rem;
              line-height: 0.15rem;
              margin-right: 0.1rem;
            }
          }
          .SegmentingLine {
            width: 90%;
            height: 1px;
            background: #ccc;
            // margin-left:10%;
            margin-top: 0.2rem;
          }
          .openTime {
            width: 100%;
            height: 0.5rem;
            line-height: 0.5rem;
            // background:yellow;
            span {
              color: #222;
              font-size: 0.14rem;
            }
          }
          .phoneNumber {
            margin-top: 0.1rem;
            width: 100%;
            height: 0.5rem;
            background: #f15044;
            text-align: center;
            line-height: 0.5rem;
            font-size: 0.24rem;
            color: #fff;
            font-weight: 600;
          }
        }
      }
      .topCenterRight {
        width: 55%;
        margin-left: 3%;
        height: 100%;
        .imgDiv {
          width: 100%;
          height: 90%;
          margin-top: 4%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  // 轮播图部分
  .showNumber {
    width: 100%;
    height: 2rem;
    .showCenterDiv {
      width: 70%;
      height: 100%;
      margin-left: 15%;
      display: flex;
      flex-direction: row;
      padding-top: 0.5rem;
      div {
        flex: 1;
        border-right: 1px solid #ddd;
        .nuberTop {
          width: 100%;
          height: 50%;
          img {
            // margin-left: 15%;
            float: left;
            // width: 15%;
            width:.4rem;
            margin-top: 0.1rem;
            margin-right: 0.05rem;
          }
          span {
            line-height: 0.6rem;
            display: inline-block;
            text-align: left;
            font-size: 0.25rem;
            color: #f15044;
            height: 100%;
            text-align: center;
          }
        }
        .nuberBottom {
          width: 100%;
          height: 50%;
          span {
            display: inline-block;
            width: 100%;
            text-align: center;
          }
          span:nth-child(1) {
            font-size: 0.2rem;
            color: #222;
            line-height: 0.5rem;
          }
          span:nth-child(2) {
            font-size: 0.16rem;
            color: #ddd;
          }
        }
      }
    }
  }
  .bannerContet {
    width: 100%;
    height: 7.5rem;
    background: url("https://img.guoanfamily.com/rentPC/newHouseImg/bannerbj.png")
      no-repeat center;
    background-size: 100% 100%;
    padding-top: 1rem;
    .bannerTop {
      cursor: pointer;
      width: 70%;
      margin-left: 15%;
      // height: 0.5rem;
      // background: Red;
      display: flex;
      flex-direction: row;
      div {
        flex: 1;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.18rem;
      }
    }
    .bannerImg {
      width: 70%;
      margin-left: 15%;
      height: 5rem;
      margin-top: 0.1rem;
      .swiper-wrapper{
        width:100% !important;
        height: 100% !important;
        .swiper-slide{
          width:100% !important;
          height: 100% !important;
          .bjImgDiv{
            width: 100%;
            height: 5rem;
            margin: 0 auto;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: center;
          }
        }
      }
      position: relative;
      .swiper-button-prev {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: url("https://img.guoanfamily.com/rentPC/newHouseImg/last.png")
          no-repeat center;
        background-size: cover;
        position: absolute;
        left: 0.5rem;
        top: 50%;
        border: 0;
        outline: none;
      }
      .swiper-button-next {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: url("https://img.guoanfamily.com/rentPC/newHouseImg/next.png")
          no-repeat center;
        background-size: cover;
        position: absolute;
        right: 0.5rem;
        top: 50%;
        border: 0;
        outline: none;
      }
    }
  }
  // 户型部分
  .housTypeContent {
    width: 100%;
    height: 8.8rem;
    .houseTypeBigDiv {
      width: 60%;
      height: 100%;
      margin-left: 20%;
      .houseTypeBigTopDiv {
        width: 100%;
        height: 2rem;
        div:nth-child(1) {
          width: 100%;
          height: 50%;
          background: url("https://img.guoanfamily.com/rentPC/newHouseImg/buildPlan.png")
            no-repeat left;
          background-size: 50%; //212734
        }
        div:nth-child(2) {
          width: 100%;
          height: 50%;
          span {
            width: 2rem;
            height: 50%;
            font-size: 0.2rem;
            color: #fff;
            background: #f15044;
            display: inline-block;
            line-height: 0.5rem;
            text-align: center;
          }
        }
      }
      .houseTypeBigBottomDiv {
        width: 100%;
        height: 6rem;
      }
    }
  }
  // 楼盘基本信息部分
  .infoContent {
    width: 100%;
    position: relative;
    height: 8.8rem;
    // background: url("https://img.guoanfamily.com/rentPC/newHouseImg/infomationImg.png")
    //   no-repeat;
    // background-size: cover;
    .inforTopbg {
      width: 100%;
      height: 2rem;
      position: absolute;
      left: 0;
      top: 0;
      background:url('http://img.guoanfamily.com/rentPC/newHouseImg/inforTopbg1.png') no-repeat center;
      background-size: 100%;
      background-position: 0 75%;
      z-index: 0;
    }
    .infoContentcenterDiv {
      position: relative;
      z-index: 1;
      width: 60%;
      height: 100%;
      margin-left: 20%;
      .infoContentcenterDivTop {
        width: 100%;
        height: 2rem;
        div:nth-child(1) {
          width: 100%;
          height: 50%;
          background: url("https://img.guoanfamily.com/rentPc/newHouseImg/iforEn.png1.png")
            no-repeat;
          background-size: 50%; //212734
          background-position: 0 100%;
        }
        div:nth-child(2) {
          width: 100%;
          height: 37%;
          span {
            width: 1.8rem;
            height: 63%;
            font-size: 0.16rem;
            color: #333;
            background: #dedede;
            display: inline-block;
            line-height: 0.5rem;
            text-align: center;
            margin-top: 1%;
          }
        }
      }
      .infoContentcenterDivBottom {
        width: 100%;
        height: 6rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        div {
          width: 50%;
          height: 50%;
        }
        .listOne {
          .listOneLeft {
            width: 40%;
            height: 100%;
            float: left;
            &.info1 {
              background: url(https://img.guoanfamily.com/rentPC/newHouseImg/info01.png)
                no-repeat left 45%;
              background-size: 100%;
            }
            &.info2 {
              background: url(https://img.guoanfamily.com/rentPC/newHouseImg/info02.png)
                no-repeat left 45%;
              background-size: 100%;
            }
            &.info3 {
              background: url(https://img.guoanfamily.com/rentPC/newHouseImg/info03.png)
                no-repeat left 45%;
              background-size: 100%;
            }
            &.info4 {
              background: url(https://img.guoanfamily.com/rentPC/newHouseImg/info04.png)
                no-repeat left 45%;
              background-size: 100%;
            }
          }
          .listOneRight {
            width: 60%;
            height: 100%;
            display: flex;
            flex-direction: column;
            div {
              width: 80%;
              line-height: 0.5rem;
              color: #333;
            }
          }
        }
      }
    }
  }
  // 楼盘定位部分
  .buildLocation {
    width: 100%;
    height: 7.5rem;
    background: url('https://img.guoanfamily.com/rentPC/newHouseImg/buildMap1.png') no-repeat center;
    background-size: 100%;
    // background: red;
    .locationTop {
      width: 60%;
      height: 100%;
      margin-left: 20%;
      // background:purple;
      .locationTopDivTop {
        width: 100%;
        height: 2rem;
        div:nth-child(1) {
          width: 100%;
          height: 50%;
          background: url("https://img.guoanfamily.com/rentPC/newHouseImg/location.png")
            no-repeat left;
          background-size: 50%; //212734
        }
        div:nth-child(2) {
          width: 100%;
          height: 50%;
          span {
            width: 1.8rem;
            height: 50%;
            font-size: 0.2rem;
            color: #fff;
            background: #f15044;
            display: inline-block;
            line-height: 0.5rem;
            text-align: center;
          }
        }
      }
      .locationMap {
        width: 100%;
        height: 4.8rem;
        // box-shadow: 4px 4px 4px 2px rgba(247, 247, 247, .5);
        background: url("https://img.guoanfamily.com/rentPC/newHouseImg/shdow.png")
          no-repeat center;
        background-size: cover;
        .buildMap {
          width: 55%;
          height: 100%;
          // border:1px solid #000;
          position: relative;
          float: left;
          .maps {
            width: 98%;
            height: 94%;
            background: #ccc;
            position: absolute;
            top: 3%;
            bottom: 0;
            left: 3%; // display: none;
            z-index: 10;
          }
        }
        .buildMapInfo {
          width: 43%;
          height: 100%;
          // background:blue;
          float: right;
          .buildManpInfoTop {
            width: 90%;
            height: 0.5rem;
            margin-top: 3%;
            margin-left: 3%;
            // background:red;
            display: flex;
            flex-direction: row;
            div {
              cursor: pointer;
              flex: 1;
              margin-left: 2%;
              height: 100%;
              font-size: 0.2rem;
              line-height: 0.5rem;
              color: #000;
              text-align: center;
              border: 1px solid #cccccc;
            }
            .tabStyle {
              color: #fff;
              background: #f15044;
            }
          }
          .buildAddressList {
            width: 88%;
            margin-left: 5%;
            margin-top: 0.15rem;
            height: 3.8rem;
            // background:red;
            overflow-y: scroll;
            .locationIcon {
              width: 15%;
              height: 0.8rem;
              // background: peru;
              background: url("https://img.guoanfamily.com/rentPC/newHouseImg/localIcon.png")
                no-repeat bottom;
              background-size: 95%;
              float: left;
              text-align: center;
              line-height: 0.8rem;
              font-size: 0.16rem;
              color: #fff;
            }
            .locationInfo {
              width: 83%;
              float: right;
              height: 0.8rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              // background: green;
            }
          }
        }
      }
    }
  }
}
</style>
<style>
.BMap_cpyCtrl {
  display: none !important;
}
/* .BMap_noprint {
 display: none !important;
}
.anchorBL{
 display: none !important; */
/* } */
</style>
