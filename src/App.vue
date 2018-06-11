<template>
  <div id="app">
    <AppHeader></AppHeader>
    <LoadingBar></LoadingBar>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import LoadingBar from './components/LoadingBar.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    LoadingBar
  }
}
</script>

<style lang="scss">
  #app {
    h1 {
      text-align: center;
    }
  }
</style>
