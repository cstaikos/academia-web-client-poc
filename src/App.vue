<template>
  <div id="app">
    <AppHeader class="header"></AppHeader>
    <LoadingBar></LoadingBar>
    <router-view class="container"></router-view>
    <AppFooter class="footer"></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import LoadingBar from './components/LoadingBar.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    LoadingBar
  }
}
</script>

<style lang="scss">
  .header {
    height: 60px;
    background-color: #daf2f2;
  }

  .footer {
    background-color: #daf2f2;
  }

  #app {

  }
</style>
