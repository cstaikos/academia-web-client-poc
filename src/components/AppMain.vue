<template>
  <div class="app-main">
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
    padding: 30px;
    border: 1px solid black;
  }
</style>
