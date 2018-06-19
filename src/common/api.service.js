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

  createManuscript(manuscript) {
    return Vue.axios
    .post('manuscripts', manuscript)
    .catch((error) => {
      console.error(error);
    })
  }
}

export default ApiService
