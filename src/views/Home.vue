<template>
  <div class="app-home">
    <ManuscriptsList></ManuscriptsList>
  </div>
</template>

<script>
import ManuscriptsList from '../components/ManuscriptsList.vue'
export default {
  name: 'app-home',
  components: {
    ManuscriptsList
  }
}
</script>

<style lang="scss">
  .app-home {
    padding: 30px;
    border: 1px solid black;
    background-color: #edf4f4;
  }
</style>
