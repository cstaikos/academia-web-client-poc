<template lang="html">
  <div>
    <div class="row">
      <div class="col-12">
        <h1>{{ manuscript.title }}</h1>
        <h2>Filed under: {{ manuscript.discipline.name }}</h2>
      </div>

      <div class="works-cited col-6">
        <h6>Works Cited ({{ manuscript.works_cited.length }})</h6>
        <div v-for="workCited in manuscript.works_cited" class="work_cited">
          <ul>
            <router-link :to="{ name: 'manuscript-detail', params: {manuscriptId: workCited.id} }">
              <li class="citation-list-item">
                {{ workCited.title }}
              </li>
            </router-link>
          </ul>
        </div>
      </div>

      <div class="cited-by col-6">
        <h6>Citations ({{ manuscript.cited_by.length }})</h6>
        <div v-for="citedBy in manuscript.cited_by" class="cited-by">
          <ul>
            <router-link :to="{ name: 'manuscript-detail', params: {manuscriptId: citedBy.id} }">
              <li class="citation-list-item">
                {{ citedBy.title }}
              </li>
            </router-link>
          </ul>
        </div>
      </div>

      <div class="col-6 form-group" v-if="showCitationArea">
        <input
          class="form-control"
          type="text"
          name="citation-title"
          placeholder="Start typing title..."
          :value="query"
          @input="query = $event.target.value"
          @keyup="query = $event.target.value"
          v-on:keyup="fetchSuggestedCitations"
          ref="citationInput">
      </div>

      <div class="col-6" v-if="showCitationArea">
        <ul>
          <li v-for="manuscript in suggestedCitations">
            <div class="row" style="margin-bottom: 10px; padding: 10px;border: 1px solid grey">
              <div class="col-6">
                <div class="btn btn-primary">
                  + Add
                </div>
              </div>
              <div class="col-6">
                {{ manuscript.title }} ({{ manuscript.discipline.name }})
              </div>

            </div>
          </li>
        </ul>
      </div>

      <div class="col-12">
        <div class="btn btn-primary" v-on:click="toggleCitationArea()">
          Add Citation
        </div>

        <router-link :to="{ name: 'manuscript-edit', params: {manuscriptId: manuscript.id} }" class="btn btn-primary">Edit</router-link>
      </div>


    </div>

  </div>
</template>

<script>
import ApiService from '../common/api.service'

import ManuscriptPreview from '../components/ManuscriptPreview.vue'

export default {
  name: 'manuscript-detail',

  components: {
    ManuscriptPreview
  },

  props: {
    showCitationArea: false,
    suggestedCitations: []
  },

  data() {
    return {
      query: ""
    }
  },

  computed: {
    manuscript() {
      return this.$store.state.currentManuscript;
    }
  },

  methods: {
    fetchManuscript() {
      this.$store.dispatch('fetchCurrentManuscript', this.$route.params.manuscriptId);
    },

    toggleCitationArea() {
      if (this.showCitationArea) {
        this.showCitationArea = false;
      }
      else {
        this.showCitationArea = true;
        this.$nextTick(() => this.$refs.citationInput.focus());
      }
    },

    fetchSuggestedCitations() {
      console.log(this.query);
      if (this.query.length > 3) {
        ApiService.searchSuggestedCitations(this.$route.params.manuscriptId, this.query)
        .then(({ data }) => {
          this.suggestedCitations = data;
        })
      }
      else {
        this.suggestedCitations = [];
      }
    }
  },

  watch: {
    '$route.params.manuscriptId': function() {
      this.fetchManuscript();
    }
  },

  created() {
    this.fetchManuscript();
  }
}
</script>

<style lang="scss">
  @import 'styles/global-settings.scss';

  .citation-list-item {
    list-style-type: none;
  }


</style>
