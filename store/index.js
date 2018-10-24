import Vue from 'vue'
import Vuex from 'vuex'

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
        }

    },
    mutations: {
        Topay(state, data = {}) {
            state.contract.payData = data
        },
        getSubway(state, data = {}) {
            state.subway = data
        }
    }
})

export default store