import Vue from "vue"
// 公共css
import "../assets/public.css";
import ElementUI from 'element-ui';
// import VuePreview from 'vue-preview'
// Vue.use(VuePreview)
// import 'element-ui/lib/theme-chalk/index.css';
// 公共js
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
    error: 'https://img.guoanfamily.com/rentPC/lazyimg.jpg',
    loading: 'https://img.guoanfamily.com/rentPC/lazyimg.jpg'
})
import GaPlugin from "./GaPlugin.js"
Vue.use(ElementUI);
Vue.use(new GaPlugin());