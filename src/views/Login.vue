<template lang="html">
  <div>
    <div class="row">
      <div class="col-12">
        <form v-on:submit="login">
          <div class="form-group">
            <label for="email">Email:</label>
            <input class="form-control" type="text" name="email">
            <label for="password">Password:</label>
            <input class="form-control" type="password" name="password">
          </div>
          <div class="form-group">
            <input class="form-control btn btn-primary" type="submit" name="submit" value="Login">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from '../common/api.service'
import router from '../router'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'login',

  methods: {
    login(event) {
      event.preventDefault();
      let credentials = {user: event.target.elements.email.value, password: event.target.elements.password.value};
      this.$store.dispatch('login', credentials)
      .then(() => {
        router.push({name: 'home'})
      });
    }
  }
}
</script>

<style lang="css">
</style>
