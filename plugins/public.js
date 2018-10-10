import Vue from "vue";
import axios from 'axios'
export default class {
  constructor() {}
  install() {
    this.MYTest(Vue);
    this.MyAxiosFn(Vue);
  }
  MYTest(Vue) {
    Vue.prototype.aaa = () => {
      alert(1)
    }
  }
  MyAxiosFn(Vue) {
    let PUBLICURL = "https://mt.guoanfamily.com/";
    Vue.prototype.Get = (url) => {
      return axios.get(PUBLICURL + url, {
        headers: {
          'Content-Type': 'application/json'
        },
        // 请求超时  
        timeout: 5000,
      }).then((res) => {
        return res.data;
      }).then((res) => {
        console.log('请求接口：', url);
        console.log('返回值：', res);
        return res;
      }).catch((error) => {
        console.error(error);
      })
    }
    Vue.prototype.Post = (url, data) => {
      return axios.post(PUBLICURL + url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        // 请求超时  
        timeout: 5000,
      }).then((res) => {
        return res.data;
      }).then((res) => {
        console.log('请求接口：', url);
        console.log('返回值：', res);
        return res;
      }).catch((error) => {
        console.error(error);
      })
    }
  }
}
