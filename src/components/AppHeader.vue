<template>
  <header class="header">
    <router-link :to="{ name: 'home', params: {} }" class="logo">AcademiaHub</router-link>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss">
  @import 'styles/global-settings.scss';

  .header {
    background-color: $color-complement-3;

    .logo {
      text-align: left;
      font-size: 36px;
      font-weight: bold;
      text-decoration: none;
      margin: 25px;
      height: 60px;

      &:active, &:visited {
        color: black;
      }
    }
   }
</style>
