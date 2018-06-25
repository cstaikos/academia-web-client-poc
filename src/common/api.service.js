/*
Service for connecting to API
*/

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { API_URL } from './config'

const ApiService = {
  init() {
      Vue.use(VueAxios, axios)
      Vue.axios.defaults.baseURL = API_URL
  },

  login(credentials) {
    console.log(credentials);
    return Vue.axios
    .post('auth', credentials)
    .catch((error) => {
      console.error(error);
    })
  },

  getCurrentUser() {
    return Vue.axios
    .get('current_user')
    .catch((error) => {
      console.error(error);
    })
  },

  getManuscripts() {
    return Vue.axios
    .get('manuscripts')
    .catch((error) => {
      console.error(error);
    })
  },

  getCurrentManuscript(manuscriptId) {
    return Vue.axios
    .get('manuscripts/' + manuscriptId)
    .catch((error) => {
      console.error(error);
    })
  },

  getPrimaryDisciplines() {
    return Vue.axios
    .get('disciplines/top')
    .catch((error) => {
      console.error(error);
    })
  },

  getSecondaryDisciplines(disciplineId) {
    return Vue.axios
    .get('disciplines/' + disciplineId + '/children')
    .catch((error) => {
      console.error(error);
    })
  },

  searchSuggestedCitations(manuscriptId, query) {
    return Vue.axios
    .get('manuscripts/search?manuscript_id=' + manuscriptId + '&query=' + query)
    .catch((error) => {
      console.error(error);
    })
  },

  createManuscript(manuscript) {
    return Vue.axios
    .post('manuscripts', manuscript)
    .catch((error) => {
      console.error(error);
    })
  },

  addCitation(citerId, citeeId) {
    return Vue.axios
    .post('manuscripts/' + citerId + '/citations', {citee_id: citeeId})
    .catch((error) => {
      console.error(error);
    })
  },

  uploadFile(manuscriptId, formData) {
    return Vue.axios
    .post('manuscripts/' + manuscriptId + '/file',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    .catch((error) => {
      console.error(error);
    })
  },

  createUser(user) {
    return Vue.axios
    .post('users/', user)
    .catch((error) => {
      console.error(error);
    })
  }
}

export default ApiService
