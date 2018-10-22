import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        contract: {
            payData: {}
        }

    },
    mutations: {
        Topay(state, data = {}) {
            state.contract.payData = data
        }
    }
})

export default store