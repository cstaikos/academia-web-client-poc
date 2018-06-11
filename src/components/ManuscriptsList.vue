<template>
  <div class="manuscripts-list">
    <h2>All Manuscripts</h2>
    <ManuscriptPreview
    v-for="(manuscript, index) in manuscripts"
    :manuscript="manuscript">
    </ManuscriptPreview>
  </div>
</template>

<script>
import Store from "../store"
import ManuscriptPreview from "./ManuscriptPreview.vue"

export default {
  computed: {
    manuscripts() { return this.$store.state.manuscripts }
  },

  created() {
    this.$store.dispatch('fetchArticles')
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
