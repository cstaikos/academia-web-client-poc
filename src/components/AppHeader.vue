<template>
  <header class="header">
    <router-link :to="{ name: 'home', params: {} }" class="logo">AcademiaHub</router-link>
    <router-link v-if="!currentUser" :to="{ name: 'login', params: {} }" class="btn btn-primary float-right">Login</router-link>
    <div v-else class="float-right">
      Welcome, {{ currentUser.email }}
      <div class="btn btn-primary" v-on:click="logout">
        Log out
      </div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'app-header',

  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    }
  },

  methods: {
    logout() {
      Vue.axios.defaults.headers.Authorization = "";
      localStorage.setItem('user-token', "");
      this.$store.dispatch('logout');
    }
  }

}
</script>

<style lang="scss">
  @import 'styles/global-settings.scss';

  .header {
    background-color: $color-complement-3;
    // height: 60px;
    padding: 15px;

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
