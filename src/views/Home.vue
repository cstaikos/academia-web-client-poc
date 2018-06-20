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
  @import 'styles/global-settings.scss';

  .app-home {
    padding: 15px;
    background-color: $color-primary-2;
  }
</style>
