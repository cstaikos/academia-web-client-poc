import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '../common/api.service'

Vue.use(Vuex)

const state = {
  manuscripts: [{title: "test"}]
}

const actions = {
  fetchArticles() {
    ApiService.getManuscripts()
    .then(({data}) => {
      console.log(data);
      state.manuscripts = data
    })
  }
}

export default new Vuex.Store({
  state,
  actions
})
