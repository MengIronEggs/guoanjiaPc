import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    counter: 0,
    text:'',
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    clearZearo(state,text) {
      state.counter = 0;
      state.text = text;
    }
  }
})

export default store
