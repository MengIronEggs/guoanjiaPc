const rem = `(function(doc, win) {
var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          
        //   docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
          docEl.style.fontSize = 100  + 'px';
      };
if (!doc.addEventListener) return;
// win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);`


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
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js project'
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
            src: "http://api.map.baidu.com/api?v=2.0&ak=Gphfc3FkrQXVOXSwYnaRcdxR",
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