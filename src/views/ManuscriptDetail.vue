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
        <h6>Cited By ({{ manuscript.cited_by.length }})</h6>
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

      <div class="col-12 controls">
        <div class="btn btn-primary" v-on:click="toggleCitationArea()">
          <span v-if="!showCitationArea">Add Citations</span>
          <span v-if="showCitationArea">Done Adding Citations</span>
        </div>
        <div class="btn btn-primary" v-on:click="toggleUploadArea()">
          <span v-if="!showUploadArea">Upload PDF</span>
          <span v-if="showUploadArea">Done with PDF</span>
        </div>
        <router-link :to="{ name: 'manuscript-edit', params: {manuscriptId: manuscript.id} }" class="btn btn-primary">Edit</router-link>
      </div>

      <div class="col-6" v-if="showCitationArea">
        <div class="form-group">
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
      </div>

      <div class="col-6" v-if="showCitationArea">
        <div class="suggested-citations-container">
          <span class="d-block" v-if="!suggestedCitations || suggestedCitations.length < 1">No suggestions for "{{ query }}"...</span>
          <ul>
            <li v-for="manuscript in suggestedCitations">
              <div class="row citation-suggestion">
                <div class="col-6">
                  <div class="btn btn-primary" :id="manuscript.id" v-on:click="addCitation($event)">
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
      </div>

      <div class="col-6" v-if="showUploadArea">
        <form id="upload-form" v-on:submit="uploadFile">
          <div class="form-group">
            <input type="file" ref="file_upload" value="Choose File" accept="application/pdf">
            <input type="submit" class="btn btn-primary" value="Upload">
          </div>

        </form>

      </div>

      <div class="col-12">
        <!-- TODO remove inline style -->
        <object :data="contentUrl" type="application/pdf" width="100%" height="1000px">
          <embed :src="contentUrl" type="application/pdf" />
        </object>
      </div>

    </div>
  </div>
</template>

<script>
import ApiService from '../common/api.service'
import ManuscriptPreview from '../components/ManuscriptPreview.vue'
import { API_URL } from '../../config'

export default {
  name: 'manuscript-detail',

  components: {
    ManuscriptPreview
  },

  props: {
    showCitationArea: false,
    showUploadArea: false,
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
    },

    contentUrl() {
      // For some reason importing the API base url wasn't working...
      // Did it the same was as is done in api.service.js (see import above)
      // But it was coming in as undefined....?
      // TODO fix this
      return 'http://localhost:3000/' + this.manuscript.content;
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
        this.showUploadArea = false;
        this.$nextTick(() => this.$refs.citationInput.focus());
      }
    },

    toggleUploadArea() {
      if (this.showUploadArea) {
        this.showUploadArea = false;
      }
      else {
        this.showUploadArea = true;
        this.showCitationArea = false;
      }
    },

    fetchSuggestedCitations() {
      if (this.query.length > 3) {
        ApiService.searchSuggestedCitations(this.$route.params.manuscriptId, this.query)
        .then(({ data }) => {
          this.suggestedCitations = data;
        })
      }
      else {
        this.suggestedCitations = [];
      }
    },

    addCitation(event) {
      let citeeId = event.target.id;
      ApiService.addCitation(this.$route.params.manuscriptId, citeeId)
      .then(() => {
        this.fetchManuscript();
        this.fetchSuggestedCitations();
      })
    },

    uploadFile(event) {
      event.preventDefault();
      const fileUpload = this.$refs.file_upload;
      const formData = new FormData();

      formData.append(
        "CONTENTDATA",
        fileUpload.files[0],
        fileUpload.files[0].name
      );

      ApiService.uploadFile(this.$route.params.manuscriptId, formData)
      .then(() => {
        this.fetchManuscript();
      })
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

  .suggested-citations-container {
    border: 1px solid $color-primary-4;
    border-radius: 10px;
    min-height: 100px;
  }

  .citation-suggestion {
    margin: 10px;
    padding: 10px;
    border: 1px solid $color-primary-3;
    border-radius: 5px;
  }

  .controls {
    margin-bottom: 15px;
  }

</style>
