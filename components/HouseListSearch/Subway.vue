<style scoped lang="less">
        .regloin1{
            position: relative;
            background-color: #e8e8e8;
            width:100%;
            height: 100%;
            z-index: 1000;
            // font-size:$mostFontSize;
            .search-house-list{
                width: 5.31rem;
                height: 100%;
                // overflow: hidden;
                position: relative;
                .house-type-ul{
                    height: 100%;
                    overflow-y: scroll;
                    overflow-x:hidden;
                    float: left;
                    width: 100%;
                    background-color: #fff;
                    box-sizing: border-box;
                    border-right: 2px solid #d7d7d7;
                        &:last-child{
                            border-right:none
                        }
                .oLi{
                    width: 100%;
                    height:.5rem;
                    line-height: .3rem;
                    text-align: left;
                    padding:.1rem;
                    font-size: .2rem;
                    cursor:pointer;
                    &:hover{
                        background: #e8e8e8;
                    }
                }
                .no-limit{
                    background-color: #fdfeee;
                    height: .6rem;
                    line-height: .4rem;
                    font-size: .2rem;
                    span{
                        margin-left: 2rem;
                    }
                    &:hover{
                        background-color: #fdfeee;
                    }
                }
                .redColor {
                    background-color: #d4d4d4;
                    color: #e24e59;
                }
                .subColor{
                    background-color: #d4d4d4;
                    color: #e24e59;
                }
            }
            .house-show-subway{
                width: 4rem;
                height: 100%;
                position: fixed;
                // right: -260px;
                left:5.6rem;
                top:1.2rem;
                z-index: 10;
                border-left:1px solid #ccc;
                background-color: #fff;
                box-sizing: border-box;
                .subway-ul{
                    width: auto;
                    height: auto;
                    background: url("../../static/rent/mapSearchHouse/subway-list-bg.png") no-repeat .13rem .13rem;
                    padding:.3rem 0px 0px .3rem;
                    float: left;
                    .area-list{
                        width: auto;
                        font-size: .12rem;
                        height: .25rem;
                        line-height: .25rem;
                        padding: .15rem .06rem;
                        &:hover{
                            color: #e24e59;
                            cursor:pointer;
                        }
                    }
                }
            }
        }  
    }
    .bounce-enter-active {
        animation: bounce-in  .5s ease;
    }
    .bounce-leave-active {
        animation: bounce-out .2s;
    }
    @keyframes bounce-in {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0px);
        }
    }
    @keyframes bounce-out {
            0% {
                opacity: 0;
                // transform: translateY(0rem);
            }
            100% {
                opacity: 0;
                // transform: translateY(-100%);
            }
        }
</style> 

 <template>
        <!--筛选部分  -->
        <transition name="bounce">
            <div class="regloin1" v-if="isSearchShow" :class="{fade:isSearchShow}">
                <div class="search-house-list">
                    <ul class="house-type-ul">
                        <template>
                            <li  class=" oLi no-limit" >请选择地铁线路<span>全市共19条路线</span></li> 
                            <li v-for="(item,index) in regionSubway" :key="index" class="oLi" @click="subwaylineClick(item.id,item.name,item.totalNum)" :class="{redColor:item.id===isAreaType}" @mouseenter="allAreaClick(item.id,index,item.name)" @mouseleave="allAreaLeave(item.id,index)">{{item.name}}
                                <span style="float:right; margin-right:60px;">{{item.totalNum ? item.totalNum +"套" : "0套"}}</span>
                            </li>
                        </template>
                    </ul>
                    <div class="house-show-subway" v-if="isShowSubway"  @mouseenter="subwayEnter" @mouseleave="subwayLeave">
                        <ul class="subway-ul">
                            <template>
                                <!-- <li  class=" oLi no-limit" v-if="isNoLimit" :class="{subColor:isSubwayLimit}" @click="subwayLimitClick">不限</li>  -->
                                <li v-for="item in regionSubwayChildList" :key="item.id" class="oLi area-list" :class="{subColor:item.id===isAreaType.subwayId}" @click="subwayClick(item.id,item.name)">{{item.name}}&nbsp;&nbsp;<span style="color:#e24e59">{{item.totalNum?item.totalNum+&nbsp;"套":""}}</span></li>
                            </template>
                        </ul>
                        <ul class="subway-ul">
                            <template>
                                <!-- <li  class=" oLi no-limit" v-if="isNoLimit" :class="{subColor:isSubwayLimit}" @click="subwayLimitClick">不限</li>  -->
                                <li v-for="item in regionSubwayChildListtwo" :key="item.id" class="oLi area-list" :class="{subColor:item.id===isAreaType.subwayId}" @click="subwayClick(item.id,item.name)">{{item.name}}&nbsp;&nbsp;<span style="color:#e24e59">{{item.totalNum?item.totalNum+&nbsp;"套":""}}</span></li>
                            </template>
                        </ul>
                        <ul class="subway-ul">
                            <template>
                                <!-- <li  class=" oLi no-limit" v-if="isNoLimit" :class="{subColor:isSubwayLimit}" @click="subwayLimitClick">不限</li>  -->
                                <li v-for="item in regionSubwayChildListthree" :key="item.id" class="oLi area-list" :class="{subColor:item.id===isAreaType.subwayId}" @click="subwayClick(item.id,item.name)">{{item.name}}&nbsp;&nbsp;<span style="color:#e24e59">{{item.totalNum?item.totalNum+&nbsp;"套":""}}</span></li>
                            </template>
                        </ul>
                    </div>
                </div>   
            </div>
        </transition>
</template>

<script>
import { objFn } from "~/plugins/axios.js"
// import MyBus from '../../script/myBus.js';
     export default {
         props:{
            isShow:{
                type:Boolean,
                default:"",
            },
            subwayList:{
                type:Array,
                default:[]
            },
         },
         name: 'subway',
         data(){
             return{
                  regionSubway:[],
                  regionSubwayChildList:[],
                  regionSubwayChildListtwo:[],
                  regionSubwayChildListthree:[],
                  AllRegionSubway:{},
                  AllRegionSubwaytwo:{},
                  AllRegionSubwaythree:{},
                  isAreaType:{
                      subwayId:"",
                      subwayLineId:"",
                      name:"",
                  },
                  isShowSubway:false,
                  allSubwayList:[],
             }
         },
         created(){
           
         },
         mounted(){
            
         },
         methods:{
            //地铁筛选
             allAreaClick(id,index,name){
                this.isAreaType.subwayLineId = id;
                this.isAreaType.name = name;
                this.isShowSubway = true;
                let url = "";
                url = "agenthouseCutomer/common/getStationLine"
                if(this.AllRegionSubway[id] === undefined){
                    objFn.Axios(
                        url,
                        "post",
                        {subwayId: id},
                        {interfaceType: "RENT_HOUSE"}
                    )
                    // this.post(url,{
                    //     subwayId: id
                    // })
                    .then((res)=>{
                        this.regionSubwayChildList=[];
                        this.regionSubwayChildListtwo = [];
                        this.regionSubwayChildListthree = [];
                        res.data.forEach((item,index) => {
                            if(index<19){
                                this.regionSubwayChildList.push(item);
                            }else if(index<38){
                                this.regionSubwayChildListtwo.push(item);
                            }else{
                                this.regionSubwayChildListthree.push(item);
                            }
                        });
                        this.AllRegionSubway[id] = this.regionSubwayChildList;
                        this.AllRegionSubwaytwo[id] = this.regionSubwayChildListtwo;
                        this.AllRegionSubwaythree[id] = this.regionSubwayChildListthree;
                        this.allSubwayList[id] = res.data
                        // return res.data;
                    }).then(res=>{
                        objFn.Axios(
                            'agenthouseCutomer/pc/HouseInfoController/getSubwayLineHouseCount',
                            "post",
                            {subwayLineId: id},
                            {interfaceType: "RENT_HOUSE"}
                        )
                        // this.post("pc/HouseInfoController/getSubwayLineHouseCount",{ //地图里展示站点套数
                        //     subwayLineId: id,
                        // })
                        .then(res=>{
                            this.regionSubwayChildList = this.regionSubwayChildList.map((item,index)=>{
                                for(var i = 0;i < res.data.length;i++){
                                    if(res.data[i].stationsOne === item.id){
                                        item.totalNum = res.data[i].totalNum;
                                    }
                                }
                                return item;
                            })
                            this.regionSubwayChildListtwo = this.regionSubwayChildListtwo.map((item,index)=>{
                                for(var i = 0;i < res.data.length;i++){
                                    if(res.data[i].stationsOne === item.id){
                                        item.totalNum = res.data[i].totalNum;
                                    }
                                }
                                return item;
                            })
                            this.regionSubwayChildListthree = this.regionSubwayChildListthree.map((item,index)=>{
                                for(var i = 0;i < res.data.length;i++){
                                    if(res.data[i].stationsOne === item.id){
                                        item.totalNum = res.data[i].totalNum;
                                    }
                                }
                                return item;
                            })
                            this.AllRegionSubway[id] = this.regionSubwayChildList;
                            this.AllRegionSubwaytwo[id] = this.regionSubwayChildListtwo;
                            this.AllRegionSubwaythree[id] = this.regionSubwayChildListthree;
                        })
                    })
                }else{
                    this.regionSubwayChildList = this.AllRegionSubway[id];
                    this.regionSubwayChildListtwo = this.AllRegionSubwaytwo[id];
                    this.regionSubwayChildListthree = this.AllRegionSubwaythree[id];
                }
                  
             },
            allAreaLeave(){
                 this.isShowSubway = false;
            },
            subwayEnter(){
                 this.isShowSubway = true;
            },
            subwayLeave(){
                 this.isShowSubway = false;
            },
            subwaylineClick(id,name){
                this.isAreaType.subwayLineId = id;
                this.isAreaType.name = "";
                if(this.allSubwayList[id]==undefined){
                    let url = "agenthouseCutomer/common/getStationLine"
                    objFn.Axios(
                        url,
                        "post",
                        {subwayId: id},
                        { interfaceType: "NEW_HOUSE" }
                    )
                    // this.post(url,{
                    //     subwayId: id
                    // })
                    .then((res)=>{
                        this.allSubwayList[id] = res.data;
                    }).then(()=>{
                        var subway = { //修改subway状态
                            name: name,
                            showSubwayList: this.allSubwayList[id],
                            AreaType: this.isAreaType,
                        }
                        this.$store.commit('getSubway', subway)
                        // MyBus.$emit('prodsNumChange',name,this.allSubwayList[id],this.isAreaType);
                        console.log(this.$store.state.subway,999)
                        this.$emit("changeSubway",this.isAreaType);
                    })
                }else{
                    var subway = { //修改subway状态
                        name: name,
                        showSubwayList: this.allSubwayList[id],
                        AreaType: this.isAreaType,
                    }
                    this.$store.commit('getSubway', subway)
                    // MyBus.$emit('prodsNumChange',name,this.allSubwayList[id],this.isAreaType);
                    console.log(this.$store.state.subway,999)
                    this.$emit("changeSubway",this.isAreaType);
                }
                
            },
             //二级筛选
            subwayClick(id,name){
                this.isAreaType.subwayId = id;
                var subway = { // 修改subway状态
                    name: name,
                    showSubwayList: this.allSubwayList[this.isAreaType.subwayLineId],
                    AreaType: this.isAreaType,
                }
                this.$store.commit('getSubway', subway)
                 console.log(name,this.allSubwayList[this.isAreaType.subwayLineId],this.isAreaType,888)
                // MyBus.$emit('prodsNumChange',name,this.allSubwayList[this.isAreaType.subwayLineId],this.isAreaType);
                this.$emit("changeSubway",this.isAreaType);
             },
            commitSubway(data){

            }
         },
         watch:{
             
         },
        computed:{
            isSearchShow(){
                if(this.isShow){
                    this.regionSubway = this.subwayList;
                    // this.regionSubwayChildList = this.regionSubwayChild;
                };
                return this.isShow;
            },
         },
     }
 </script>
 