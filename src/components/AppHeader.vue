<template>
  <header class="header">
    <router-link :to="{ name: 'home', params: {} }" class="logo">AcademiaHub</router-link>
    <div v-if="!currentUser" class="float-right">
      <router-link :to="{ name: 'login', params: {} }" class="btn btn-primary">Login</router-link>
      <router-link :to="{ name: 'new-user', params: {} }" class="btn btn-primary">Sign up</router-link>
    </div>
    <div v-else class="float-right">
      Welcome, {{ currentUser.first_name }} {{ currentUser.last_name }}
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
