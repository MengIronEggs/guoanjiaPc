import Vue from 'vue'
import Router from 'vue-router'

const _666e772e = () => import('..\\pages\\rent\\rentIndex.vue' /* webpackChunkName: "pages_rent_rentIndex" */).then(m => m.default || m)
const _3f8ee619 = () => import('..\\pages\\personalCenter\\aboutMe.vue' /* webpackChunkName: "pages_personalCenter_aboutMe" */).then(m => m.default || m)
const _03ab5b6a = () => import('..\\pages\\personalCenter\\aboutMe\\payStep.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_payStep" */).then(m => m.default || m)
const _6f763c6b = () => import('..\\pages\\personalCenter\\aboutMe\\contract.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_contract" */).then(m => m.default || m)
const _51b3f156 = () => import('..\\pages\\personalCenter\\aboutMe\\appointment.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_appointment" */).then(m => m.default || m)
const _4b6660e1 = () => import('..\\pages\\personalCenter\\aboutMe\\collect.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_collect" */).then(m => m.default || m)
const _253086d3 = () => import('..\\pages\\personalCenter\\aboutMe\\ownerEntrustment.vue' /* webpackChunkName: "pages_personalCenter_aboutMe_ownerEntrustment" */).then(m => m.default || m)
const _6766d94b = () => import('..\\pages\\newHouse\\newHouseDetails.vue' /* webpackChunkName: "pages_newHouse_newHouseDetails" */).then(m => m.default || m)
const _85e898f2 = () => import('..\\pages\\login\\login.vue' /* webpackChunkName: "pages_login_login" */).then(m => m.default || m)
const _4be7f01b = () => import('..\\pages\\newHouse\\newHouseIndex.vue' /* webpackChunkName: "pages_newHouse_newHouseIndex" */).then(m => m.default || m)
const _7968e155 = () => import('..\\pages\\rent\\aboutMe.vue' /* webpackChunkName: "pages_rent_aboutMe" */).then(m => m.default || m)
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
			path: "/rent/rentIndex",
			component: _666e772e,
			name: "rent-rentIndex"
		},
		{
			path: "/personalCenter/aboutMe",
			component: _3f8ee619,
			name: "personalCenter-aboutMe",
			children: [
				{
					path: "payStep",
					component: _03ab5b6a,
					name: "personalCenter-aboutMe-payStep"
				},
				{
					path: "contract",
					component: _6f763c6b,
					name: "personalCenter-aboutMe-contract"
				},
				{
					path: "appointment",
					component: _51b3f156,
					name: "personalCenter-aboutMe-appointment"
				},
				{
					path: "collect",
					component: _4b6660e1,
					name: "personalCenter-aboutMe-collect"
				},
				{
					path: "ownerEntrustment",
					component: _253086d3,
					name: "personalCenter-aboutMe-ownerEntrustment"
				}
			]
		},
		{
			path: "/newHouse/newHouseDetails",
			component: _6766d94b,
			name: "newHouse-newHouseDetails"
		},
		{
			path: "/login/login",
			component: _85e898f2,
			name: "login-login"
		},
		{
			path: "/newHouse/newHouseIndex",
			component: _4be7f01b,
			name: "newHouse-newHouseIndex"
		},
		{
			path: "/rent/aboutMe",
			component: _7968e155,
			name: "rent-aboutMe"
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
