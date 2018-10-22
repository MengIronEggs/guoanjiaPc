import Vue from "vue"
// 公共css
import "../assets/public.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 公共js
import GaPlugin from "./GaPlugin.js"
Vue.use(ElementUI);
Vue.use(new GaPlugin());

