import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\node_modules\\swiper\\dist\\css\\swiper.css'

import '..\\node_modules\\vue2-animate\\dist\\vue2-animate.min.css'

import '..\\assets\\animate.min.css'

import '..\\node_modules\\element-ui\\lib\\theme-chalk\\index.css'


import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default": _6f6c098b }



export default {
  head: {"title":"国安家","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"script":[{"innerHTML":"(function(doc, win) {\n  var docEl = doc.documentElement,\n      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',\n      recalc = function() {\n          var clientWidth = docEl.clientWidth;\n          if (!clientWidth) return;\n          docEl.style.fontSize = 100 * (clientWidth \u002F 1920) + 'px';\n      };\n  if (!doc.addEventListener) return;\n  win.addEventListener(resizeEvt, recalc, false);\n  doc.addEventListener('DOMContentLoaded', recalc, false);\n})(document, window);","type":"text\u002Fjavascript","charset":"utf-8"},{"src":"http:\u002F\u002Fapi.map.baidu.com\u002Fapi?v=2.0&ak=Gphfc3FkrQXVOXSwYnaRcdxR","type":"text\u002Fjavascript","charset":"utf-8"}],"__dangerouslyDisableSanitizers":["script"],"style":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
      
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
    
  },
  components: {
    NuxtLoading
  }
}
