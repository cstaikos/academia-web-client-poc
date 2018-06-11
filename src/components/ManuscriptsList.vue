<template>
  <div class="manuscripts-list">
    <ManuscriptPreview
    v-for="(manuscript, index) in manuscripts"
    :manuscript="manuscript"
    :key="index">
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
    console.log("list created!");
    console.log(this.$store.state.manuscripts);
  },

  components: {
    ManuscriptPreview
  }
}
</script>

<style lang="scss">
  .manuscripts-list {

  }
</style>
