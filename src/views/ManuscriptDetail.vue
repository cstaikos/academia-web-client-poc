<template lang="html">
  <div class="manuscript-detail">
    <h1>{{ manuscript.title }}</h1>
    <h2>Filed under: {{ manuscript.discipline.name }}</h2>
    <div class="works-cited">
      <h2>This manuscript cites the following</h2>
      <div v-for="workCited in manuscript.works_cited" class="work_cited">
        <router-link :to="{ name: 'manuscript-detail', params: {manuscriptId: workCited.id} }">
          {{ workCited.title }}
          </router-link>
      </div>
    </div>
    <div class="cited-by">
      <h2>This manuscript has been cited by the following</h2>
      <div v-for="citedBy in manuscript.cited_by" class="cited-by">
        <router-link :to="{ name: 'manuscript-detail', params: {manuscriptId: citedBy.id} }">
          {{ citedBy.title }}
          </router-link>
      </div>
    </div>
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

</style>
