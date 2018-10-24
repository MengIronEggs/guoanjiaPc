<style lang="less">
    .heat-map {
        position: fixed;
        left: 451px;
        right: 0;
        top: 88px;
        bottom: 0;
        transition: left 1s;
        .switch-cell {
            .el-switch__label, .el-switch__label * {
                font-size: 12px;
            }
        }
    }
    .mapLeft{
        left:0px;
    }
</style>
<style scoped lang="less">
    .map{
        height: 100%;
        width: 100%;
        // margin-left:450px;
    }
</style>

<template>
    <div class="heat-map" :class="{mapLeft:isMapLeft}">

        <!-- <el-row :gutter="10" class="form-line">
            

         </el-row>  -->

        <div id="container" class="map" ></div>
    </div>
</template>

<script>
import MyBus from '../plugins/myBus.js';
import { objFn } from "../plugins/axios.js";
    export default {

        props: {
            textSearch:{
                type:Object,
                default:"",
            },
            regionSearch:{
                type:Boolean,
                default:true,
            }
        },

        data() {
            return {
                points: [],
                area: [],

                map: null,
                local: null,

                searchName: this.textSearch.textSearch || "",

                showArea: true,
                showMarkPoint: false,

                areaId: "",
                dynamicTags:{
                    communityId:"",
                    regionId:"",
                    districtId:"",
                    stationsId:"",
                    subwayLineId:"",
                    screenLeftLog: "",    //西南
                    screenRightLog: "",   //东北
                    screenLeftLat: "",     //西南
                    screenRightLat: "",    //东北
                    priceMax: "",											
                    priceMin: "",
                    userAreaMax:"",
                    userAreaMin:"",											
                    textSearch: "",
                    roomNo:"",
                    longitude:"",
                    latitude:"",
                    isshowScope:false, //点击地铁以后 可以按范围查找
                },
                label2:{},
                label3:{},
                count:"",
                isMap:false,
                subwayName:"",
                ply:"",
                count:"",
                subwayList:[],
                subwayType:{},
                isMoveend:true,   //拖拽是否加载数据
                isSubwaySearch:false,  //是第一次地铁找房
                // isenableMassClear:false,   //是否已经解除禁止清除
                oneregionSearch:true,     //是否点击了区域
                subwayStation:false,    // 是否点击了站点不进行缩放事件跟拖拽
                iszoomend:true,       //是否可以缩放
                isshowcolor:false,
                isMapLeft:false,
            }
        },

        created(){
            
            // this.getHouseDistribution();
        },
        mounted() {
            this.getAreaDistribution();
            let map = new BMap.Map("container");
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);

            map.enableScrollWheelZoom(true);
            map.enableDragging();
            // map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            //添加地图平移缩放控件
            // map.addControl(new BMap.NavigationControl());

            //控制地图的最大和最小缩放级别
            map.setMinZoom(11);
            map.setMaxZoom(18);
            this.map = map;
            this.local = new BMap.LocalSearch(map, {
                renderOptions:{map: map}
            });
            MyBus.$on('prodsNumChange', (name,subwayList,subwayType) => {
                this.subwayType = subwayType;
                this.isSubwaySearch = true;   //点击地铁搜索时不进行搜索事件
                this.regionSearch = false;   //区域缩放跟拖拽禁止
                this.subwayList = subwayList;
                this.isMoveend = false;    //点击地铁时不可以拖拽加载
                this.subwayName = name;
                this.dynamicTags.districtId = "";
                try{
                    var cp = this.map.getBounds();
                    this.dynamicTags.screenLeftLog = cp.getSouthWest().lng,    //西南
                    this.dynamicTags.screenRightLog = cp.getNorthEast().lng,   //东北
                    this.dynamicTags.screenLeftLat =  cp.getSouthWest().lat,     //西南
                    this.dynamicTags.screenRightLat = cp.getNorthEast().lat     //东北
                }catch(e){
                    Error(e)
                }
                
                this.createMark();
                try{
                    this.map.clearOverlays();
                }catch(e){
                    Error(e)
                }
                
                if(this.subwayType.name!==""){   //点击站点进来
                    this.dynamicTags.subwayLineId = this.subwayType.subwayLineId;
                    subwayList.forEach(item=>{
                        if(item.name===name){
                            this.dynamicTags.longitude = item.longitude;
                            this.dynamicTags.latitude = item.latitude;
                            this.dynamicTags.isshowScope = true;
                            this.map.centerAndZoom(new BMap.Point(item.longitude,item.latitude),15);
                        }
                    })
                    this.getHouseDistribution(()=>{
                        this.getLatLog();
                        this.subwayMarkPoint();
                        this.$emit("mapSearchHouse",this.dynamicTags)
                    });
                    return;
                }

                var busline = new BMap.BusLineSearch(map,{
                    renderOptions:{map:map,panel:"r-result"},
                        onGetBusListComplete: function(result){
                            if(result) {
                                var fstLine = result.getBusListItem(0);//获取第一个公交列表显示到map上
                                busline.getBusLine(fstLine);
                            }
                        }
                });
                var busName = name;
                busline.getBusList(busName);
                setTimeout(()=>{
                    this.createSubwayCover(subwayList,subwayType);
                    this.map.setZoom(13);  
                },1000)
                
            });
            this.map.addEventListener("zoomend", ()=>{   
                if(!this.isSubwaySearch && !this.subwayStation && !this.regionSearch){   //地铁找房
                    this.getLatLog();
                    let subwayCenter = this.map.getZoom();   
                    if(subwayCenter<=13){    //小于12地图变成地铁
                        this.map.clearOverlays();
                        this.dynamicTags.isshowScope = false;
                        this.showMarkPoint = false;
                        this.dynamicTags={
                            stationsId:"",
                        };
                        this.createSubwayCover(this.subwayList,this.subwayType);

                        this.$emit("mapSearchHouse",this.dynamicTags)
                        return;
                    }else if(subwayCenter>=14){   //大于14地图变成站点
                        // this.dynamicTags.isshowScope = true;
                        this.map.clearOverlays();
                        this.getHouseDistribution(()=>{
                            this.subwayMarkPoint();
                        });

                        this.$emit("mapSearchHouse",this.dynamicTags)
                        return;
                    }
                    this.$emit("mapSearchHouse",this.dynamicTags)
                }else if(this.regionSearch && this.oneregionSearch && this.iszoomend){     //区域找房
                    this.getLatLog();
                    let center = this.map.getZoom();   
                    if(center<=13){     //变成区域
                        this.createMark();
                        this.dynamicTags.districtId = "";
                        this.dynamicTags.communityId = "";
                        this.dynamicTags.longitude = "";
                        this.dynamicTags.latitude = "";
                        this.dynamicTags.isshowScope = false;
                        this.map.clearOverlays();
                        this.getAreaDistribution();

                        this.$emit("mapSearchHouse",this.dynamicTags)
                        return;
                    }else if(center>=14){   //展示小区
                        this.createMark();
                        this.map.clearOverlays();
                        this.getHouseDistribution(()=>{
                            this.createMarkPoint()
                        });

                        this.$emit("mapSearchHouse",this.dynamicTags)
                        return;
                    }
                    this.$emit("mapSearchHouse",this.dynamicTags)
                }  
                });
            
            this.map.addEventListener("moveend",()=>{
                let moveendCenter = this.map.getZoom();   
                this.getLatLog();
                this.dynamicTags.communityId = "";
                this.dynamicTags.stationsId = "";
                if(moveendCenter<=13){
                    if(this.regionSearch && this.oneregionSearch && this.isMoveend){   //区域
                        this.getAreaDistribution();
                        this.$emit("mapSearchHouse",this.dynamicTags)
                    }else if(this.isMoveend && !this.isSubwaySearch){    //拖拽是地铁
                        this.createSubwayCover(this.subwayList,this.subwayType);
                        this.$emit("mapSearchHouse",this.dynamicTags)
                    }
                }else if(moveendCenter>=14){
                    if(this.isMoveend && this.regionSearch && this.oneregionSearch){   //区域
                        this.getHouseDistribution(()=>{
                            this.createMarkPoint()
                        });
                        this.$emit("mapSearchHouse",this.dynamicTags)
                    }else if(this.isMoveend && !this.isSubwaySearch){       //地铁
                         this.getHouseDistribution(()=>{
                            this.subwayMarkPoint();
                        });

                        this.$emit("mapSearchHouse",this.dynamicTags)
                    }
                }
            })

            if(this.points.length　!== 0){
                this.init()
            }
        },

        beforeDestroy(){
            this.map = null;
            this.local = null;
        },

        methods: {
            // getContion(cb = ()=>{}){
            //     let map = this.map;
            //     var geolocation = new BMap.Geolocation();
            //     geolocation.getCurrentPosition(function(r){
            //         if(this.getStatus() == BMAP_STATUS_SUCCESS){
            //             var mk = new BMap.Marker(r.point);
            //             map.addOverlay(mk);
            //             map.panTo(r.point);
            //         }
            //         else {
            //             alert('failed'+this.getStatus());
            //         }      
            //     },{enableHighAccuracy: true})
            //     cb();
            //     // this.isMoveend = true;
            // },
            getAreaDistribution(){
                objFn.Axios("pc/HouseInfoController/getAreaDistribution","post", {
                    priceMax: this.dynamicTags.priceMax,											
                    priceMin: this.dynamicTags.priceMin,
                    userAreaMax:this.dynamicTags.userAreaMax,
                    userAreaMin:this.dynamicTags.userAreaMin,											
                    textSearch: this.dynamicTags.textSearch,
                    roomNo: this.dynamicTags.roomNo,		
                    screenLeftLog: this.dynamicTags.screenLeftLog,    //西南
                    screenRightLog: this.dynamicTags.screenRightLog,   //东北
                    screenLeftLat: this.dynamicTags.screenLeftLat,     //西南
                    screenRightLat: this.dynamicTags.screenRightLat ,																
                },{interfaceType: "RENT_HOUSE"}).then(res => {
                    if (res.code !== 0) {
                        this.showErrorTip(res.msg);
                    } else {
                        this.area = res.data;
                    // if(res.data.length==0){
                        this.createMark();
                        this.map.clearOverlays();
                        // }
                        this.createAreaCover();
                        // this.getContion(()=>{
                        //     this.isMoveend = true;
                        // })
                    }
                })
            },
            //显示行政区覆盖
            getBoundary(name,label){    
                let map = this.map;
                var bdary = new BMap.Boundary();
                bdary.get("北京市"+name+"区", (rs)=>{       //获取行政区域
                    var count = rs.boundaries.length; //行政区域的点有多少个
                    if (count === 0) {
                        alert('未能获取当前输入行政区域');
                        return ;
                    }
                    this.count = count;
                    for (var i = 0; i < count; i++) {
                        this.ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "rgba(228, 57, 60, 0.9)",fillColor:"rgba(228, 57, 60, 0.9)",fillOpacity:0.1}); //建立多边形覆盖物
                        map.addOverlay(this.ply);  //添加覆盖物
                    }   
                });   
            },
            //绘制小区
            createAreaCover(){
                let size = 80;
                let _this = this;
                this.area.map((item,index) => {
                    let labelText = item.totalNum!=0 ? `${item.districtName}<br/>(${item.totalNum}套)` : "";
                    if(item.totalNum!=0){
                        let label = new BMap.Label(labelText, {
                            position: new BMap.Point(item.longitude, item.latitude)
                        });
                        label.setStyle({
                            textAlign: "center",
                            color : "#fff",
                            background: "rgba(228, 57, 60, 0.9)",
                            border: "1px solid rgba(228, 57, 60, 0.9)",
                            fontSize : "16px",
                            height : `${size}px`,
                            width : `${size}px`,
                            borderRadius: '50%',
                            marginTop: `-${size/2}px`,
                            marginLeft: `-${size/2}px`,
                            paddingTop: `${size/4}px`,
                            boxSizing: "border-box",
                        });
                        this.map.addOverlay(label);
                        label.disableMassClear();   //禁止清除
                        label.addEventListener("click", () => {
                            var allOverlay = this.map.getOverlays();
                            for (var i = 0; i < allOverlay.length; i++) {
                                if(allOverlay[i].enableMassClear()){
                                    allOverlay[i].enableMassClear();
                                } 
                            }
                            this.oneregionSearch = false;   //点击区域的时候不进行缩放事件
                            this.isMoveend = false;    //点击区域的时候不可以拖拽加载
                            this.areaId = item._id;
                            this.dynamicTags.districtId = item._id;
                            this.map.clearOverlays();
                            if(item.districtName!=="海淀" && item.districtName!=="昌平" && item.districtName!=="顺义"){
                                this.map.centerAndZoom(new BMap.Point(item.longitude, item.latitude),14);
                            }else{
                                objFn.Axios("pc/HouseInfoController/getMapHouseList","post",{
                                    page: "1",																															
                                    districtId: item._id,										
                                    size: 1,										
                                },{interfaceType: "RENT_HOUSE"}).then(res=>{
                                    this.map.centerAndZoom(new BMap.Point(res.data.content[0].longitude,res.data.content[0].latitude),14);
                                })
                            }
                            this.getHouseDistribution(()=>{
        
                                this.$emit("mapSearchHouse",this.dynamicTags)
                                this.createMarkPoint()

                            });
                        });
                        label.addEventListener("mouseover", (e)=> {
                             e.domEvent.stopPropagation();
                                if(!this.isshowcolor){
                                    label.setStyle({
                                        background: "rgba(255, 202, 77, 0.9)",
                                        border: "1px solid rgba(255, 202, 77, 0.9)",
                                        zIndex: 999,
                                    })
                                    _this.getBoundary(item.districtName,label);
                                    this.isshowcolor = true;
                                }   
                        });
                        label.addEventListener("mouseout", (e)=> {
                             e.domEvent.stopPropagation();
                            if(e.domEvent.target.nodeName==="LABEL"){
                                if(this.isshowcolor){
                                    label.setStyle({
                                        background: "rgba(228, 57, 60, 0.9)",
                                        border: "1px solid rgba(228, 57, 60, 0.9)",
                                        zIndex: 1,
                                    })
                                    // this.map.removeOverlay(this.ply);
                                    _this.map.clearOverlays();
                                    this.isshowcolor = false;
                                }
                            }
                        });
                    }  
                });
                this.isMoveend = true;
            },
            //绘制地铁
            createSubwayCover(subwayList,subwayType){
                this.dynamicTags.subwayLineId = subwayType.subwayLineId;
                objFn.Axios("pc/HouseInfoController/getSubwayLineHouseCount","post",{ //地图里展示站点套数
                        subwayLineId: subwayType.subwayLineId,
                        priceMax: this.dynamicTags.priceMax,											
                        priceMin: this.dynamicTags.priceMin,
                        userAreaMax:this.dynamicTags.userAreaMax,
                        userAreaMin:this.dynamicTags.userAreaMin,											
                        textSearch: this.dynamicTags.textSearch,	
                        screenLeftLog: this.dynamicTags.screenLeftLog,    //西南
                        screenRightLog: this.dynamicTags.screenRightLog,   //东北
                        screenLeftLat: this.dynamicTags.screenLeftLat,     //西南
                        screenRightLat: this.dynamicTags.screenRightLat ,		
                        roomNo:this.dynamicTags.roomNo,
                },{interfaceType: "RENT_HOUSE"}).then(res=>{
                    this.subwayList = subwayList.map((item,index)=>{
                        for(var i = 0;i < res.data.length;i++){
                            if(res.data[i].stationsOne === item.id){
                                item.totalNum = res.data[i].totalNum;
                            }
                        }
                        return item;
                    })
                }).then(()=>{
                    let size = 80;
                    this.subwayList.map(item => {
                        let labelText =  item.totalNum ? `${item.name}<br/>(${item.totalNum}套)` : `${item.name}<br/>(0套)`;

                        let label2 = new BMap.Label(labelText, {
                            position: new BMap.Point(item.longitude, item.latitude)
                        });
                        label2.setStyle({
                            textAlign: "center",
                            color : "#fff",
                            background: "rgba(228, 57, 60, 0.9)",
                            border: "1px solid rgba(228, 57, 60, 0.9)",
                            fontSize : "16px",
                            height : `${size}px`,
                            width : `${size}px`,
                            borderRadius: '50%',
                            marginTop: `-${size/2}px`,
                            marginLeft: `-${size/2}px`,
                            paddingTop: `${size/4}px`,
                            boxSizing: "border-box",
                        });

                        this.map.addOverlay(label2);
                        label2.addEventListener("click", () => {
                            this.dynamicTags.stationsId = item.id;
                            this.dynamicTags.longitude = item.longitude;
                            this.dynamicTags.latitude = item.latitude;
                            this.dynamicTags.isshowScope = true;
                            this.map.clearOverlays();
                            this.subwayStation = true;   //点击时不进行缩放跟拖拽
                            this.subwayClick = true;
                            this.isMoveend = false;
                            this.map.centerAndZoom(new BMap.Point(item.longitude, item.latitude),15);
                            this.getHouseDistribution(()=>{
                                this.$emit("mapSearchHouse",this.dynamicTags)
                                this.subwayMarkPoint();
                            });
                        });
                        label2.addEventListener("mouseover", (e) => {
                            e.domEvent.stopPropagation();
                            label2.setStyle({
                                background: "rgba(255, 202, 77, 0.9)",
                                border: "1px solid rgba(255, 202, 77, 0.9)",
                                // position: 'abstract',
                                zIndex: 999,
                            })
                        });
                        label2.addEventListener("mouseout", (e) => {
                            // e.domEvent.stopPropagation();
                            // e.domEvent.preventDefault ();
                            e.domEvent.stopPropagation();
                            label2.setStyle({
                                background: "rgba(228, 57, 60, 0.9)",
                                border: "1px solid rgba(228, 57, 60, 0.9)",
                                zIndex: 1,
                            })
                        });
                    });
                    this.isSubwaySearch = false;   //加载完地铁可以缩放事件
                    this.isMoveend = true;    //加载完地铁站点时可以拖拽加载
                })  
            },
            //获取点击时区域内的的小区
            getHouseDistribution(cb = ()=>{}){
                this.getLatLog();
                objFn.Axios("pc/HouseInfoController/getCommunityByScreenCoordinate","post",{
                    areaId: this.areaId,
                    priceMax: this.dynamicTags.priceMax,											
                    priceMin: this.dynamicTags.priceMin,
                    userAreaMax:this.dynamicTags.userAreaMax,
                    userAreaMin:this.dynamicTags.userAreaMin,											
                    textSearch: this.dynamicTags.textSearch,	
                    screenLeftLog: this.dynamicTags.screenLeftLog,    //西南
                    screenRightLog: this.dynamicTags.screenRightLog,   //东北
                    screenLeftLat: this.dynamicTags.screenLeftLat,     //西南
                    screenRightLat: this.dynamicTags.screenRightLat ,
                    subwayLineId:this.dynamicTags.subwayLineId,
                    roomNo:this.dynamicTags.roomNo,
                },{interfaceType: "RENT_HOUSE"}).then(res => {
                    if (res.code !== 0) {
                        this.showErrorTip(res.msg);
                    } else {
                        if(res.data.length !=0){
                            this.points = res.data;
                            cb();
                        }else{
                            this.$emit("mapSearchHouse",this.dynamicTags)
                            this.isMoveend = true;
                        }
                        
                    }
                });
            },
            //绘制区域点击后小区
            createMarkPoint(){
                let points = this.points;
                for (let i = 0; i < points.length; i++) {
                    let obj = points[i];
                    this._getContent(obj)
                    // this.map.centerAndZoom(new BMap.Point(this.points[0].longitude, this.points[1].latitude),14);
                }
                
            },
            //小区
            _getContent(obj,flat){
                var _this = this;
                var mp = this.map;
                var obj = obj;
                function ComplexCustomOverlay(point, text, mouseoverText){
                    this._point = point;
                    this._text = text;
                    this._overText = mouseoverText;
                }
                ComplexCustomOverlay.prototype = new BMap.Overlay();
                ComplexCustomOverlay.prototype.initialize = function(map){
                    this._map = map;
                    var div = this._div = document.createElement("div");
                    div.style.position = "absolute";
                    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
                    div.style.backgroundColor = "#EE5D5B";
                    // div.style.border = "1px solid #BC3B3A";
                    div.style.color = "white";
                    div.style.height = "20px";
                    div.style.padding = "4px";
                    div.style.lineHeight = "20px";
                    div.style.whiteSpace = "nowrap";
                    div.style.MozUserSelect = "none";
                    div.style.fontSize = "14px"
                    div.style.boxSizing = 'content-box'
                    var span = this._span = document.createElement("span");
                    div.appendChild(span);
                    span.appendChild(document.createTextNode(this._text));      
                    var that = this;

                    var arrow = this._arrow = document.createElement("div");
                    arrow.style.background = "url(https://media.guoanfamily.com/guoanjiaPc/arrow2.png) no-repeat";
                    arrow.style.position = "absolute";
                    arrow.style.width = "11px";
                    arrow.style.height = "10px";
                    arrow.style.top = "28px";
                    arrow.style.left = "10px";
                    arrow.style.overflow = "hidden";
                    div.appendChild(arrow);
                    
                    div.onmouseover = function(){
                        this.style.backgroundColor = "rgba(255, 202, 77, 0.9)";
                        // this.style.borderColor = "#0000ff";
                        this.getElementsByTagName("span")[0].innerHTML = that._overText;
                        arrow.style.backgroundPosition = "0px -20px";
                    }

                    div.onmouseout = function(){
                        this.style.backgroundColor = "#EE5D5B";
                        // this.style.borderColor = "#BC3B3A";
                        this.getElementsByTagName("span")[0].innerHTML = that._text;
                        arrow.style.backgroundPosition = "0px 0px";
                    }

                    div.onclick = function(){
                        if(_this.regionSearch && _this.oneregionSearch && _this.isMoveend){   //区域
                            _this.dynamicTags.longitude = obj.longitude;
                            _this.dynamicTags.latitude = obj.latitude;
                            _this.dynamicTags.isshowScope = true;
                            _this.dynamicTags.communityId=obj.communityId;
                        }else if(_this.isMoveend && !_this.isSubwaySearch){    //拖拽是地铁
                            _this.dynamicTags.longitude = obj.longitude;
                            _this.dynamicTags.latitude = obj.latitude;
                            _this.dynamicTags.stationsId = obj.stationsOne;
                        }
                        _this.$emit("mapSearchHouse",_this.dynamicTags)
                    }

                    mp.getPanes().labelPane.appendChild(div);
                    return div;
                }
                ComplexCustomOverlay.prototype.draw = function(){
                    var map = this._map;
                    var pixel = map.pointToOverlayPixel(this._point);
                    this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
                    this._div.style.top  = pixel.y - 30 + "px";
                }
                if(flat){
                    var txt = obj.communityName, mouseoverTxt = txt + " " + obj.sum + "套" ;
                }else{
                    var txt = obj.communityName, mouseoverTxt = txt + " " + obj.totalNum + "套" ;
                }
                
                    
                var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(obj.longitude,obj.latitude), obj.communityName,mouseoverTxt);

                mp.addOverlay(myCompOverlay);
                this.isMoveend = true;   //创建完小区可以拖拽加载
                // this.isenableMassClear = false;
                this.oneregionSearch = true; //创建完小区可以缩放 
                this.iszoomend = true;  //缩放
            },
            //清除
            createMark(){
                try{
                    var allOverlay = this.map.getOverlays();
                    for (var i = 0; i < allOverlay.length; i++) {
                        try{
                            allOverlay[i].enableMassClear();
                        }
                        catch(e){
                            Error(e)
                        }
                    }
                }catch(e){
                        Error(e)
                }
            },
            //搜索时改变显示区域
            commitReigon(data,flat){
                var regionList = "东城区西城区海淀区朝阳区丰台区门头沟区石景山区房山区通州区顺义区昌平区大兴区怀柔区平谷区延庆区密云区"
                this.dynamicTags.priceMax = data.priceMax;											
                this.dynamicTags.priceMin = data.priceMin;
                this.dynamicTags.userAreaMax = data.userAreaMax;
                this.dynamicTags.userAreaMin = data.userAreaMin;											
                this.dynamicTags.textSearch = data.textSearch;
                this.dynamicTags.roomNo = data.roomNo;
                if(this.regionSearch){
                    let regionCenter = this.map.getZoom();  
                    if(regionCenter<=13){
                        if(regionList.indexOf(data.textSearch)!==-1){
                            this.isMoveend = false;
                            this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
                            this.map.clearOverlays();
                            this.getAreaDistribution();
                        }else if(data.textSearch !==""){
                            this.createMark();
                            this.map.clearOverlays();
                            // this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
                            this.getHouseDistribution(()=>{
                                this.isMoveend = false;
                                this.iszoomend = false;  //不缩放
                                this.map.centerAndZoom(new BMap.Point(this.points[0].longitude, this.points[0].latitude),14);
                                this.createMarkPoint();
                            });
                        }else{  
                            this.getAreaDistribution();
                        }
                    }else if(regionCenter>=14){
                        if(flat){
                            this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
                            this.getAreaDistribution();
                            return;
                        }
                        this.map.clearOverlays();
                        this.createMark();
                        this.getHouseDistribution(()=>{
                            this.createMarkPoint();
                        });
                    }
                }else if(!this.isSubwaySearch && !this.subwayStation && !this.regionSearch){
                    let subwayCenter = this.map.getZoom();   
                    if(subwayCenter<=13){    //小于12地图变成地铁
                        this.map.clearOverlays();
                        this.showMarkPoint = false;
                        this.dynamicTags={
                            stationsId:"",
                        };
                        this.createSubwayCover(this.subwayList,this.subwayType);
                        // this.$emit("mapSearchHouse",this.dynamicTags)
                        return;
                    }else if(subwayCenter>=14){   //大于14地图变成站点
                        this.map.clearOverlays();
                        this.getHouseDistribution(()=>{
                            this.subwayMarkPoint();
                        });
                        // this.$emit("mapSearchHouse",this.dynamicTags)
                        return;
                    }
                    // this.$emit("mapSearchHouse",this.dynamicTags)
                }
            },
            getLatLog(){
                var cp = this.map.getBounds();
                this.dynamicTags.screenLeftLog = cp.getSouthWest().lng,    //西南
                this.dynamicTags.screenRightLog = cp.getNorthEast().lng,   //东北
                this.dynamicTags.screenLeftLat =  cp.getSouthWest().lat,     //西南
                this.dynamicTags.screenRightLat = cp.getNorthEast().lat     //东北
            },
            //范围查找
            scopeSubway(data){
                this.dynamicTags.distance = data.distance;
                var scopeHouseCount =0;
                var isScope = true;
                objFn.Axios("pc/HouseInfoController/getCommunityNearbyPoint","post",{
                    priceMax: this.dynamicTags.priceMax,											
                    priceMin: this.dynamicTags.priceMin,
                    userAreaMax:this.dynamicTags.userAreaMax,
                    userAreaMin:this.dynamicTags.userAreaMin,											
                    textSearch: this.dynamicTags.textSearch,	
                    subwayLineId:this.dynamicTags.subwayLineId,
                    stationsId:this.dynamicTags.stationsId,
                    longitude: this.dynamicTags.longitude,                  //范围查找时加的三个参数
	                latitude: this.dynamicTags.latitude,
                    distance:this.dynamicTags.distance,  //范围
                },{interfaceType: "RENT_HOUSE"}).then(res=>{
                    this.points = [];
                    for (var k in res.data) {
                        this.points.push(res.data[k]); //属性
                        scopeHouseCount += res.data[k].sum;
                    }
                }).then(()=>{
                    this.map.clearOverlays();
                    this.subwayMarkPoint(true);
                    this.$emit("mapSearchHouse",this.dynamicTags,isScope,scopeHouseCount)
                })
                    
            },
            colseBtn(flat){
                if(flat){
                    this.isMapLeft = true;
                    // $(".heat-map").animate({left:"0px"});
                }else{
                    this.isMapLeft = false;
                    // $(".heat-map").animate({left:"450px"});
                }
                
            },
            subwayMarkPoint(flat){
                let points = this.points;
                for (let i = 0; i < points.length; i++) {
                    let obj = points[i];
                    this._getContentTwo(()=>{
                        this._getContent(obj,flat)
                    })
                }
                
            },
            //绘制站点
            _getContentTwo(cb = () =>{}){
                let size = 80;
                //  setTimeout(()=>{
                    this.subwayList.map(item => {
                        item.totalNum = item.totalNum ? item.totalNum :0;
                        let label = new BMap.Label();
                        label.setPosition(new BMap.Point(item.longitude, item.latitude))
                        label.setContent(`<div class="labelText" style="width:56px; height:56px;">`+
                            `<span style="margin-top:-2px;display:block;background:url(https://media.guoanfamily.com/guoanjiaPc/arrow.png) no-repeat; width: 16px;height: 16px;margin-left: 16px;background-size: 100%;"></span>`
                            +`<p style="width:100px;height:22px;background-color: #fff;color: #000;line-height:25px;margin-left:-18px;margin-top:-2px;">`+item.name+`</p>`
                            +`</div>`)
                        label.setStyle({
                                textAlign: "center",
                                color : "#fff",
                                background: "url(https://media.guoanfamily.com/guoanjiaPc/bus.png) no-repeat",
                                backgroundSize:"100%",
                                backgroundColor:"#fff",
                                fontSize : "12px",
                                height : `56px`,
                                width : `56px`,
                                borderRadius: '50%',
                                marginTop: `-28px`,
                                marginLeft: `-28px`,
                                paddingTop: `53px`,
                                boxSizing: "border-box",
                                border:"none"
                        });
                        this.map.addOverlay(label);
                    });
                    this.isSubwaySearch = false;
                    this.isMoveend = true;    //加载完地铁站点时可以拖拽加载
                    this.subwayStation = false;   //加载完可以缩放加载
                    // this.isenableMassClear = false;
                    cb();
                // },500)
            },
        },

        watch: {

            // showMarkPoint(){
            //     this.changeCover();
            // },

            // showArea() {   //为false里绘制小区标点
            //     if (!this.showArea && !this.showMarkPoint) {
            //         this.showMarkPoint = true;
            //     }
            // },
            regionSearch(){
                if(this.regionSearch){
                    this.dynamicTags.subwayLineId = "";
                    this.isSubwaySearch = true;
                    this.oneregionSearch = true;
                    this.map.clearOverlays();
                    this.isMoveend = false;
                    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
                    this.getAreaDistribution();
                    // this.getHouseDistribution();
                }
            }
        },

        components: {}
    }
</script>
