import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    manuscripts: [{title: "test"}]
}

export default new Vuex.Store({
  state
})
