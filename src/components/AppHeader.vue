<template>
  <div class="app-header">
    <router-link :to="{ name: 'home', params: {} }" class="logo">Academia Hub</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss">
  .app-header {
    .logo {
      text-align: left;
      font-size: 36px;
      font-weight: bold;
      text-decoration: none;
      &:active, &:visited {
        color: black;
      }
    }
  }
</style>
