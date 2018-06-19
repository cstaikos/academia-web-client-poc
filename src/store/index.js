/*
Main vuex store for app (can modularize as needed as the app grows)
*/

import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '../common/api.service'

Vue.use(Vuex)

const state = {
  manuscripts: [],
  currentManuscript: {},
  isLoading: false
}

const actions = {
  fetchManuscripts({ commit }) {
    commit('fetchStart');
    ApiService.getManuscripts()
    .then(({ data }) => {
      commit('saveManuscripts', data);
      commit('fetchEnd');
    })
  },

  fetchCurrentManuscript({ commit }, manuscriptId) {
    commit('fetchStart');
    ApiService.getCurrentManuscript(manuscriptId)
    .then(({ data }) => {
      commit('saveCurrentManuscript', data);
      commit('fetchEnd');
    })
  }
}

const mutations = {
  fetchStart (state) {
    state.isLoading = true;
  },

  fetchEnd (state, manuscripts) {
    state.isLoading = false;
  },

  saveManuscripts (state, manuscripts) {
    state.manuscripts = manuscripts;
  },

  saveCurrentManuscript (state, manuscript) {
    state.currentManuscript = manuscript;
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
