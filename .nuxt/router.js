import Vue from 'vue'
import Router from 'vue-router'

const _d0dd0e7e = () => import('..\\pages\\rent\\housedetail.vue' /* webpackChunkName: "pages_rent_housedetail" */).then(m => m.default || m)
const _163c8657 = () => import('..\\pages\\rent\\rentList.vue' /* webpackChunkName: "pages_rent_rentList" */).then(m => m.default || m)
const _58220487 = () => import('..\\pages\\aboutus\\aboutus.vue' /* webpackChunkName: "pages_aboutus_aboutus" */).then(m => m.default || m)
const _4be7f01b = () => import('..\\pages\\newHouse\\newHouseIndex.vue' /* webpackChunkName: "pages_newHouse_newHouseIndex" */).then(m => m.default || m)
const _85e898f2 = () => import('..\\pages\\login\\login.vue' /* webpackChunkName: "pages_login_login" */).then(m => m.default || m)
const _491d0496 = () => import('..\\pages\\exhibitionCenter\\exhhibition.vue' /* webpackChunkName: "pages_exhibitionCenter_exhhibition" */).then(m => m.default || m)
const _666e772e = () => import('..\\pages\\rent\\rentIndex.vue' /* webpackChunkName: "pages_rent_rentIndex" */).then(m => m.default || m)
const _6766d94b = () => import('..\\pages\\newHouse\\newHouseDetails.vue' /* webpackChunkName: "pages_newHouse_newHouseDetails" */).then(m => m.default || m)
const _3f8ee619 = () => import('..\\pages\\personalCenter\\aboutMe.vue' /* webpackChunkName: "pages_personalCenter_aboutMe" */).then(m => m.default || m)
const _5a385a3a = () => import('..\\pages\\personalCenter\\aboutMe\\payWays.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_payWays" */).then(m => m.default || m)
const _b13641d8 = () => import('..\\pages\\personalCenter\\aboutMe\\payWays\\WXpay.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_payWays_WXpay" */).then(m => m.default || m)
const _68957467 = () => import('..\\pages\\personalCenter\\aboutMe\\payWays\\payStyleC.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_payWays_payStyleC" */).then(m => m.default || m)
const _03ab5b6a = () => import('..\\pages\\personalCenter\\aboutMe\\payStep.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_payStep" */).then(m => m.default || m)
const _253086d3 = () => import('..\\pages\\personalCenter\\aboutMe\\ownerEntrustment.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_ownerEntrustment" */).then(m => m.default || m)
const _6f763c6b = () => import('..\\pages\\personalCenter\\aboutMe\\contract.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_contract" */).then(m => m.default || m)
const _4b6660e1 = () => import('..\\pages\\personalCenter\\aboutMe\\collect.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_collect" */).then(m => m.default || m)
const _51b3f156 = () => import('..\\pages\\personalCenter\\aboutMe\\appointment.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_appointment" */).then(m => m.default || m)
const _7686ee7c = () => import('..\\pages\\personalCenter\\aboutMe\\complain.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_complain" */).then(m => m.default || m)
const _e3422c76 = () => import('..\\pages\\personalCenter\\aboutMe\\myLease.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_myLease" */).then(m => m.default || m)
const _5dc15317 = () => import('..\\pages\\personalCenter\\aboutMe\\payDatails.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_payDatails" */).then(m => m.default || m)
const _5c749cd4 = () => import('..\\pages\\personalCenter\\aboutMe\\paySuccess.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_paySuccess" */).then(m => m.default || m)
const _3371aa1f = () => import('..\\pages\\rent\\nuxtMapSearchHouse.vue' /* webpackChunkName: "pages_rent_nuxtMapSearchHouse" */).then(m => m.default || m)
const _11cba12d = () => import('..\\pages\\rent\\ownerBig.vue' /* webpackChunkName: "pages_rent_ownerBig" */).then(m => m.default || m)
const _22be10bb = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)

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
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/rent/housedetail",
			component: _d0dd0e7e,
			name: "rent-housedetail"
		},
		{
			path: "/rent/rentList",
			component: _163c8657,
			name: "rent-rentList"
		},
		{
			path: "/aboutus/aboutus",
			component: _58220487,
			name: "aboutus-aboutus"
		},
		{
			path: "/newHouse/newHouseIndex",
			component: _4be7f01b,
			name: "newHouse-newHouseIndex"
		},
		{
			path: "/login/login",
			component: _85e898f2,
			name: "login-login"
		},
		{
			path: "/exhibitionCenter/exhhibition",
			component: _491d0496,
			name: "exhibitionCenter-exhhibition"
		},
		{
			path: "/rent/rentIndex",
			component: _666e772e,
			name: "rent-rentIndex"
		},
		{
			path: "/newHouse/newHouseDetails",
			component: _6766d94b,
			name: "newHouse-newHouseDetails"
		},
		{
			path: "/personalCenter/aboutMe",
			component: _3f8ee619,
			name: "personalCenter-aboutMe",
			children: [
				{
					path: "payWays",
					component: _5a385a3a,
					name: "personalCenter-aboutMe-payWays",
					children: [
						{
							path: "WXpay",
							component: _b13641d8,
							name: "personalCenter-aboutMe-payWays-WXpay"
						},
						{
							path: "payStyleC",
							component: _68957467,
							name: "personalCenter-aboutMe-payWays-payStyleC"
						}
					]
				},
				{
					path: "payStep",
					component: _03ab5b6a,
					name: "personalCenter-aboutMe-payStep"
				},
				{
					path: "ownerEntrustment",
					component: _253086d3,
					name: "personalCenter-aboutMe-ownerEntrustment"
				},
				{
					path: "contract",
					component: _6f763c6b,
					name: "personalCenter-aboutMe-contract"
				},
				{
					path: "collect",
					component: _4b6660e1,
					name: "personalCenter-aboutMe-collect"
				},
				{
					path: "appointment",
					component: _51b3f156,
					name: "personalCenter-aboutMe-appointment"
				},
				{
					path: "complain",
					component: _7686ee7c,
					name: "personalCenter-aboutMe-complain"
				},
				{
					path: "myLease",
					component: _e3422c76,
					name: "personalCenter-aboutMe-myLease"
				},
				{
					path: "payDatails",
					component: _5dc15317,
					name: "personalCenter-aboutMe-payDatails"
				},
				{
					path: "paySuccess",
					component: _5c749cd4,
					name: "personalCenter-aboutMe-paySuccess"
				}
			]
		},
		{
			path: "/rent/nuxtMapSearchHouse",
			component: _3371aa1f,
			name: "rent-nuxtMapSearchHouse"
		},
		{
			path: "/rent/ownerBig",
			component: _11cba12d,
			name: "rent-ownerBig"
		},
		{
			path: "/",
			component: _22be10bb,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
