/*
Main vuex store for app (can modularize as needed as the app grows)
*/

import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '../common/api.service'

Vue.use(Vuex)

const state = {
  manuscripts: [],
  isLoading: false
}

const actions = {
  fetchManuscripts({ commit }) {
    commit('fetchStart')
    ApiService.getManuscripts()
    .then(({ data }) => {
      commit('fetchEnd', data);
    })
  }
}

const mutations = {
  fetchStart (state) {
    state.isLoading = true;
  },

  fetchEnd (state, manuscripts) {
    console.log('fetchEnd')
    state.manuscripts = manuscripts;
    state.isLoading = false;
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
