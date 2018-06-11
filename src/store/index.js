import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '../common/api.service'

Vue.use(Vuex)

const state = {
  manuscripts: [],
  isLoading: false
}

const actions = {
  fetchArticles() {
    ApiService.getManuscripts()
    .then(({data}) => {
      state.manuscripts = data
    })
  }
}

const getters = {

}

export default new Vuex.Store({
  state,
  actions,
  getters
})
