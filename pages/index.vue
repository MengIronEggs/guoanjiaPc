<template>
<div>
  <Header></Header>
  <h1>Hello</h1>
  <button><nuxt-link :to="'/one'+'?id=1234' ">点击</nuxt-link></button>
  <button @click="$router.push({path:'/one',query:{id:'1234'}})">点击</button>
  <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
  <button>{{$store.state.text}}</button>
  <ul>
    <li class="list">1234t</li>
  </ul>
  <div :key="index" v-for="(item,index) in data">{{item.buildname}}</div>
  <div class = 'textLess'>
    <span>134</span>
  </div>
</div>

</template>

<script>
import { objFn } from "../plugins/axios.js";
// import Header from '../components/HeaderTop';
export default {
  components: {
    Header
  },
  // data(){

  asyncData() {
    return objFn
      .Axios(
        "palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList",
        "get",
        {},
        {interfaceType: "NEW_HOUSE"}
      )
      .then(res => {
        if(res.status == 200){
          return { data: res.data };
        }

      });
  },
  created() {

  },
  beforeMount() {

  },
  mounted() {
    //在微信中打开

  }
};
</script>

<style lang = 'less' scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.textLess {
  span{
    width:100px;
    height:20px;
    display:inline-block;
    color:red;
  }
}
</style>
<style lang="less">
// @import "~assets/public.less";
  .aaa{
    .bbb{
      color: red;
    }
  }
  .list{
    height: 1rem;
  }
</style>

