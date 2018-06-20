<template>
  <div class="manuscripts-list">
    <router-link class="btn btn-primary float-right" :to="{ name: 'new-manuscript', params: {} }">+</router-link>
    <h2>All Manuscripts</h2>
    <ul>
      <ManuscriptPreview
      v-for="(manuscript, index) in manuscripts"
      :manuscript="manuscript"
      :key="manuscript.id">
      </ManuscriptPreview>
    </ul>
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

</style>
