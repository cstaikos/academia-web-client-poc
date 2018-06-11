<template>
  <div class="app-main">
    <h1>THIS IS THE MAIN SECTION</h1>
    <ManuscriptsList></ManuscriptsList>
  </div>
</template>

<script>
import ManuscriptsList from './ManuscriptsList.vue'
export default {
  name: 'app-main',
  components: {
    ManuscriptsList
  }
}
</script>

<style lang="scss">
  .app-main {
    h2 {
      text-align: center;
      color: blue;
    }
  }
</style>
