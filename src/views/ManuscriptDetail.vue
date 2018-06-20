<template lang="html">
  <div>
    <h1>{{ manuscript.title }}</h1>
    <h2>Filed under: {{ manuscript.discipline.name }}</h2>
    <div class="row">
      <div class="works-cited col-lg">
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

      <div class="cited-by col-lg">
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
    </div>

    <router-link :to="{ name: 'edit-manuscript', params: {manuscriptId: manuscript.id} }" class="btn btn-primary">Edit</router-link>
  </div>
</template>

<script>
export default {
  name: 'manuscript-detail',
  computed: {
    manuscript() {
      return this.$store.state.currentManuscript;
    }
  },

  methods: {
    fetchManuscript() {
      this.$store.dispatch('fetchCurrentManuscript', this.$route.params.manuscriptId);
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
