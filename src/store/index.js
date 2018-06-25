/*
Main vuex store for app (can modularize as needed as the app grows)
*/

import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '../common/api.service'

Vue.use(Vuex)

const state = {
  manuscripts: [],
  currentManuscript: null,
  currentUser: null,
  token: localStorage.getItem('user-token', "") || null,
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
  },

  login({ commit, dispatch }, credentials) {
    let that = this;
    commit('fetchStart');
    ApiService.login(credentials)
    .then(({ data }) => {
      Vue.axios.defaults.headers.Authorization = data.token;
      localStorage.setItem('user-token', data.token)
      commit('saveAuthToken', data);
      dispatch('fetchCurrentUser');
    })
  },

  fetchCurrentUser({ commit }) {
    ApiService.getCurrentUser()
    .then(({ data }) => {
      commit('saveCurrentUser', data);
      commit('fetchEnd');
    })
  },

  logout({ commit }) {
    commit('saveAuthToken', null);
    commit('saveCurrentUser', null);
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
  },

  saveCurrentUser (state, user) {
    state.currentUser = user;
  },

  saveAuthToken (state, token) {
    state.authToken = token;
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
