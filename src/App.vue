<template>
  <div id="app">
    <AppHeader></AppHeader>
    <LoadingBar></LoadingBar>
    <router-view class="container content"></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import Vue from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import LoadingBar from './components/LoadingBar.vue'

export default {
  name: 'app',

  components: {
    AppHeader,
    AppFooter,
    LoadingBar
  },

  created() {
    if (this.$store.state.token) {
      Vue.axios.defaults.headers.Authorization = this.$store.state.token;
      this.$store.dispatch('fetchCurrentUser');
    }
  }
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  @import 'styles/global-settings.scss';
  @import 'styles/global-styles.scss';

  #app {
    background-color: $color-primary-2;
  }

</style>
