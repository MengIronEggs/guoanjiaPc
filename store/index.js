import Vue from 'vue'
import Vuex from 'vuex'
import pageName from '../plugins/pageName.js'
Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        contract: {
            payData: {}
        },
        subway: {
            name: '',
            showSubwayList: [],
            AreaType: {},
        },
        index: {
            actIndex: 0
        },
        crumbsArr: [],
        // 租房列表
        rentList: {
            change: false
        },
        userName: "登录",
        uuidData: {
            Tid: "",
            Pid: "",
        },
        pageName: pageName
    },
    mutations: {
        Topay(state, data = {}) {
            state.contract.payData = data
        },
        getSubway(state, data = {}) {
            state.subway = data
        },
        crumbsFn(state, data = {}) {
            state.crumbsArr = data;
        }
    }
})

export default store