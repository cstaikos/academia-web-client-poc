<template lang="html">
  <div class="manuscript-detail">
    <h1>{{ manuscript.title }}</h1>
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

  created() {
    this.$store.dispatch('fetchCurrentManuscript', this.$route.params.manuscriptId)
  },
}
</script>

<style lang="css">
  .manuscript-detail {

  }
</style>
