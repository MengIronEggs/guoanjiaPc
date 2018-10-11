const rem = '!function(e){var t,n=document,i=window,o=n.documentElement;function u(){var t=o.getBoundingClientRect().width/e*100;o.style.fontSize=t+"px"}u(),i.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(u,300)},!1),i.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(t),t=setTimeout(u,300))},!1)}(750);';

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
        script: [
            { innerHTML: rem, type: 'text/javascript', charset: 'utf-8' }
        ],
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
    plugins: [
        { src: '~/plugins/bases.js', ssr: true }
    ],
    /*
     ** Build configuration
     */
    build: {
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
        }
    },




}