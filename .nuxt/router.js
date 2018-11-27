import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _58220487 = () => interopDefault(import('..\\pages\\aboutus\\aboutus.vue' /* webpackChunkName: "pages_aboutus_aboutus" */))
const _53ea0fb2 = () => interopDefault(import('..\\pages\\definedPage\\definedPage.vue' /* webpackChunkName: "pages_definedPage_definedPage" */))
const _47b09a77 = () => interopDefault(import('..\\pages\\download\\download.vue' /* webpackChunkName: "pages_download_download" */))
const _491d0496 = () => interopDefault(import('..\\pages\\exhibitionCenter\\exhhibition.vue' /* webpackChunkName: "pages_exhibitionCenter_exhhibition" */))
const _7bbf198e = () => interopDefault(import('..\\pages\\loginIndex\\loginIndex.vue' /* webpackChunkName: "pages_loginIndex_loginIndex" */))
const _6766d94b = () => interopDefault(import('..\\pages\\newHouse\\newHouseDetails.vue' /* webpackChunkName: "pages_newHouse_newHouseDetails" */))
const _4be7f01b = () => interopDefault(import('..\\pages\\newHouse\\newHouseIndex.vue' /* webpackChunkName: "pages_newHouse_newHouseIndex" */))
const _3f8ee619 = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe.vue' /* webpackChunkName: "pages_personalCenter_aboutMe" */))
const _51b3f156 = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\appointment.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_appointment" */))
const _4b6660e1 = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\collect.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_collect" */))
const _7686ee7c = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\complain.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_complain" */))
const _6f763c6b = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\contract.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_contract" */))
const _e3422c76 = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\myLease.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_myLease" */))
const _253086d3 = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\ownerEntrustment.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_ownerEntrustment" */))
const _5dc15317 = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\payDatails.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_payDatails" */))
const _03ab5b6a = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\payStep.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_payStep" */))
const _5c749cd4 = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\paySuccess.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_paySuccess" */))
const _5a385a3a = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\payWays.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_payWays" */))
const _68957467 = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\payWays\\payStyleC.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_payWays_payStyleC" */))
const _b13641d8 = () => interopDefault(import('..\\pages\\personalCenter\\aboutMe\\payWays\\WXpay.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_payWays_WXpay" */))
const _d0dd0e7e = () => interopDefault(import('..\\pages\\rent\\housedetail.vue' /* webpackChunkName: "pages_rent_housedetail" */))
const _3371aa1f = () => interopDefault(import('..\\pages\\rent\\nuxtMapSearchHouse.vue' /* webpackChunkName: "pages_rent_nuxtMapSearchHouse" */))
const _11cba12d = () => interopDefault(import('..\\pages\\rent\\ownerBig.vue' /* webpackChunkName: "pages_rent_ownerBig" */))
const _666e772e = () => interopDefault(import('..\\pages\\rent\\rentIndex.vue' /* webpackChunkName: "pages_rent_rentIndex" */))
const _163c8657 = () => interopDefault(import('..\\pages\\rent\\rentList.vue' /* webpackChunkName: "pages_rent_rentList" */))
const _616ca3c7 = () => interopDefault(import('..\\pages\\siteMap\\siteMap.vue' /* webpackChunkName: "pages_siteMap_siteMap" */))
const _22be10bb = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/aboutus/aboutus",
      component: _58220487,
      name: "aboutus-aboutus"
    }, {
      path: "/definedPage/definedPage",
      component: _53ea0fb2,
      name: "definedPage-definedPage"
    }, {
      path: "/download/download",
      component: _47b09a77,
      name: "download-download"
    }, {
      path: "/exhibitionCenter/exhhibition",
      component: _491d0496,
      name: "exhibitionCenter-exhhibition"
    }, {
      path: "/loginIndex/loginIndex",
      component: _7bbf198e,
      name: "loginIndex-loginIndex"
    }, {
      path: "/newHouse/newHouseDetails",
      component: _6766d94b,
      name: "newHouse-newHouseDetails"
    }, {
      path: "/newHouse/newHouseIndex",
      component: _4be7f01b,
      name: "newHouse-newHouseIndex"
    }, {
      path: "/personalCenter/aboutMe",
      component: _3f8ee619,
      name: "personalCenter-aboutMe",
      children: [{
        path: "appointment",
        component: _51b3f156,
        name: "personalCenter-aboutMe-appointment"
      }, {
        path: "collect",
        component: _4b6660e1,
        name: "personalCenter-aboutMe-collect"
      }, {
        path: "complain",
        component: _7686ee7c,
        name: "personalCenter-aboutMe-complain"
      }, {
        path: "contract",
        component: _6f763c6b,
        name: "personalCenter-aboutMe-contract"
      }, {
        path: "myLease",
        component: _e3422c76,
        name: "personalCenter-aboutMe-myLease"
      }, {
        path: "ownerEntrustment",
        component: _253086d3,
        name: "personalCenter-aboutMe-ownerEntrustment"
      }, {
        path: "payDatails",
        component: _5dc15317,
        name: "personalCenter-aboutMe-payDatails"
      }, {
        path: "payStep",
        component: _03ab5b6a,
        name: "personalCenter-aboutMe-payStep"
      }, {
        path: "paySuccess",
        component: _5c749cd4,
        name: "personalCenter-aboutMe-paySuccess"
      }, {
        path: "payWays",
        component: _5a385a3a,
        name: "personalCenter-aboutMe-payWays",
        children: [{
          path: "payStyleC",
          component: _68957467,
          name: "personalCenter-aboutMe-payWays-payStyleC"
        }, {
          path: "WXpay",
          component: _b13641d8,
          name: "personalCenter-aboutMe-payWays-WXpay"
        }]
      }]
    }, {
      path: "/rent/housedetail",
      component: _d0dd0e7e,
      name: "rent-housedetail"
    }, {
      path: "/rent/nuxtMapSearchHouse",
      component: _3371aa1f,
      name: "rent-nuxtMapSearchHouse"
    }, {
      path: "/rent/ownerBig",
      component: _11cba12d,
      name: "rent-ownerBig"
    }, {
      path: "/rent/rentIndex",
      component: _666e772e,
      name: "rent-rentIndex"
    }, {
      path: "/rent/rentList",
      component: _163c8657,
      name: "rent-rentList"
    }, {
      path: "/siteMap/siteMap",
      component: _616ca3c7,
      name: "siteMap-siteMap"
    }, {
      path: "/",
      component: _22be10bb,
      name: "index"
    }],

    fallback: false
  })
}
