<template>
  <div class="manuscripts-list">
    <h2>All Manuscripts</h2>
    <router-link :to="{ name: 'new-manuscript', params: {} }">Upload Manuscript</router-link>
    <ManuscriptPreview
    v-for="(manuscript, index) in manuscripts"
    :manuscript="manuscript">
    </ManuscriptPreview>
  </div>
</template>

<script>
import ManuscriptPreview from "./ManuscriptPreview.vue"

export default {
  computed: {
    manuscripts() {
      return this.$store.state.manuscripts
    }
  },

  created() {
    this.$store.dispatch('fetchManuscripts')
  },

  components: {
    ManuscriptPreview
  }
}
</script>

<style lang="scss">
  .manuscripts-list {
    h2 {
      text-align: center;
    }
  }
</style>
