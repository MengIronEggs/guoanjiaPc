const rem = `(function(doc, win) {
var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          docEl.style.fontSize = 100  + 'px';
      };
if (!doc.addEventListener) return;
// win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);`

const cdn = `(function(doc,win){
    var _hmt = _hmt || [];
    var hm = doc.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?dfe04b9bd49e40519a85a2269fcea206";
    var s = doc.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})(document, window)`
const phone = `(function() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        window.location.href = "https://www.guoanfamily.com/guoanjiaApp/#/"
    } else if (/(Android)/i.test(navigator.userAgent)) {
        window.location.href = "https://www.guoanfamily.com/guoanjiaApp/#/"
    }
})(window)`

const axios = require('axios');
module.exports = {


  /*
   ** Headers of the page
   */
  head: {
    title: '国安家',
    meta: [{
      charset: 'utf-8'
    },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: "description",
        content: "国安家是专业的互联网+房地产+金融创新平台,为您提供新房,二手房,租房，不动产托管等房地产信息和服务,为需要房屋出租租赁的用户提供区域租房和地铁租房,热线tel:400-900-2225。国安家，为每一个家的梦想全力以赴。"
      }, {
        'http-equiv': "mobile-agent",
        content: "format=xhtml; url=https://www.guoanfamily.com/guoanjiaApp/#/",

      }, {
        'http-equiv': "mobile-agent",
        content: "format=html5;url=https://www.guoanfamily.com/guoanjiaApp/#/",
      }, {
        'http-equiv': "mobile-agent",
        content: "format=wml;url=https://www.guoanfamily.com/guoanjiaApp/#/",
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      innerHTML: rem,
      type: 'text/javascript',
      charset: 'utf-8'
    }, {
      innerHTML: phone,
      type: 'text/javascript',
      charset: 'utf-8'
    }, {
      src: "https://api.map.baidu.com/api?v=2.0&ak=Gphfc3FkrQXVOXSwYnaRcdxR",
      type: 'text/javascript',
      charset: 'utf-8'
    }, {
      innerHTML: cdn,
      type: 'text/javascript',
      charset: 'utf-8'
    }],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
    // color: 'red',
    // height:'5px'
  },
  css: [{
    src: "swiper/dist/css/swiper.css"
  }, {
    src: "vue2-animate/dist/vue2-animate.min.css"
  },
    {
      src: "./assets/animate.min.css"
    },
    {
      src: "element-ui/lib/theme-chalk/index.css"
    }
  ],
  plugins: [{
    src: "~/plugins/vue-swiper.js",
    ssr: false
  },
    {
      src: '~/plugins/bases.js',
      ssr: false
    },
  ],
  modules: [
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.guoanfamily.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    exclude: [
      '/rent/housedetail',
      '/rent/ownerBig',
      '/rent/mapSearchHouse',
      '/definedPage/definedPage',
      '/personalCenter/*',
      '/newHouse/newHouseDetails'

    ],
    routes: function () {
      // 注册时间格式化方法，不支持时区转换，仅提供简单格式时间格式化
      Date.prototype.formatSitemapDate = function (fmt) { //author: meizz
        let o = {
          "M+": this.getMonth() + 1, //月份
          "d+": this.getDate(), //日
          "H+": this.getHours(), //小时
          "m+": this.getMinutes(), //分
          "s+": this.getSeconds(), //秒
          "q+": Math.floor((this.getMonth() + 3) / 3), //季度
          "S": this.getMilliseconds(), //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o) {
          if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = RegExp.$1.length === 1 ? fmt.replace(RegExp.$1, o[k]) : fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length));
          }
        }
        return fmt;
      };

      let ax = axios.create();

      const DEFAULT_DATETIME_FORMAT = "yyyy-MM-dd HH:mm:ss";

      let uris = [];
      // 首页
      uris.push({
        url: '/',
        changefreq: 'daily',
        priority: 0.1,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });
      // 租房房源根据地铁分类列表
      uris.push({
        url: '/agenthouseCutomer/house/subway.html',
        changefreq: 'daily',
        priority: 0.4,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });
      // 租房房源根据区域分类列表
      uris.push({
        url: '/agenthouseCutomer/house/index.html',
        changefreq: 'daily',
        priority: 0.4,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });
      // html sitemap 网站地图
      uris.push({
        url: '/siteMap/siteMap',
        changefreq: 'daily',
        priority: 0.4,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });
      // 展示中心
      uris.push({
        url: '/exhibitionCenter/exhhibition',
        changefreq: 'daily',
        priority: 0.4,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });
      // 租房地图找房
      uris.push({
        url: '/rent/nuxtMapSearchHouse',
        changefreq: 'daily',
        priority: 0.4,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });
      // 新房首页
      uris.push({
        url: '/newHouse/newHouseIndex',
        changefreq: 'daily',
        priority: 0.4,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });
      // 租房首页
      uris.push({
        url: '/rent/rentIndex',
        changefreq: 'daily',
        priority: 0.4,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });
      // 登录页面
      uris.push({
        url: '/loginIndex/loginIndex',
        changefreq: 'daily',
        priority: 0.4,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });
      // 租房房源列表
      uris.push({
        url: '/rent/rentList',
        changefreq: 'daily',
        priority: 0.4,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });
      // 关于我们
      uris.push({
        url: '/aboutus/aboutus',
        changefreq: 'daily',
        priority: 0.4,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });
      // 下载页面
      uris.push({
        url: '/download/download',
        changefreq: 'daily',
        priority: 0.4,
        lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
      });

      return ax({
        url: 'https://www.guoanfamily.com/agenthouseCutomer/pc/HouseInfoController/getHouseList',
        method: "post",
        data: {
          "size": 10000000,
          "page": 1
        }
      })
        .then((res) => {
          res.data.data.content.map(rs => {
            uris.push({
              url: "/rent/housedetail?id=" + rs.id + "&productType=" + rs.productType,
              changefreq: 'daily',
              priority: 1,
              lastmodISO: new Date().formatSitemapDate(DEFAULT_DATETIME_FORMAT),
            })
          });
          return uris;
        });
    }
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'element-ui'],

    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    },
    // publicPath: 'https://nt.guoanfamily.com/guoanjiaPcTest/',
    // publicPath: '/_nuxt/',
  },

}
